import { NextResponse } from "next/server";
import { ApiError } from "@graphland/pgw-merchant";
import { pgw } from "@/lib/pgw";

export const runtime = "nodejs";

interface BookServiceRequest {
  serviceId: string;
  serviceTitle: string;
  /** Price in major units, e.g. 250000 for 250000 BDT */
  price: number;
  currency?: "BDT" | "USD" | "EUR" | "GBP" | "CAD" | "AUD" | "NZD";
  description?: string;
  customer: {
    name: string;
    email: string;
    phone?: string;
  };
}

function badRequest(message: string) {
  return NextResponse.json({ error: message }, { status: 400 });
}

export async function POST(request: Request) {
  let body: BookServiceRequest;
  try {
    body = (await request.json()) as BookServiceRequest;
  } catch {
    return badRequest("Invalid JSON body");
  }

  const {
    serviceId,
    serviceTitle,
    price,
    currency = "BDT",
    description,
    customer,
  } = body;

  // ── Validation ────────────────────────────────────────────────────────
  if (!serviceId || !serviceTitle) {
    return badRequest("serviceId and serviceTitle are required");
  }
  if (typeof price !== "number" || !Number.isFinite(price) || price <= 0) {
    return badRequest("price must be a positive number");
  }
  if (!customer?.name || !customer?.email) {
    return badRequest("customer.name and customer.email are required");
  }

  if (!process.env.GRAPHLAND_PGW_API_KEY) {
    return NextResponse.json(
      {
        error:
          "Server is missing GRAPHLAND_PGW_API_KEY. Set it in your environment / wrangler secrets.",
      },
      { status: 500 },
    );
  }

  // ── Build redirect URLs back to the products page ────────────────────
  let origin = "";
  try {
    const referer = request.headers.get("referer");
    if (referer) origin = new URL(referer).origin;
  } catch {
    /* ignore */
  }
  if (!origin) {
    origin =
      process.env.NEXT_PUBLIC_SITE_URL ??
      process.env.NEXT_PUBLIC_GRAPHQL_API_URL ??
      "";
  }

  const back = (status: string) =>
    `${origin}/products?status=${status}&service=${encodeURIComponent(serviceId)}`;

  // ── Create the invoice via the Graphland Payment Gateway SDK ─────────
  try {
    const invoice = await pgw.createInvoice({
      // Use a unique, idempotent identifier per service + customer + timestamp
      identifier: `book-${serviceId}-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
      amount: price,
      currency,
      description:
        description ?? `Booking for ${serviceTitle} (${price} ${currency})`,
      customer: {
        name: customer.name,
        email: customer.email,
        phone: customer.phone,
      },
      successUrl: back("success"),
      cancelUrl: back("cancel"),
      failUrl: back("fail"),
      metadata: {
        serviceId,
        serviceTitle,
        source: "graphland.dev/products",
      },
    });

    return NextResponse.json({
      ok: true,
      invoiceUID: invoice.invoiceUID,
      paymentUrl: invoice.paymentUrl,
      status: invoice.status,
      expiresAt: invoice.expiresAt,
    });
  } catch (err) {
    if (err instanceof ApiError) {
      return NextResponse.json(
        {
          error: `Payment gateway error (${err.statusCode}): ${err.body || err.message}`,
        },
        { status: 502 },
      );
    }
    const message =
      err instanceof Error ? err.message : "Unknown payment gateway error";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
