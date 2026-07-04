import { NextResponse } from "next/server";
import { ApiError } from "@graphland/pgw-merchant";
import { pgw } from "@/lib/pgw";

export const runtime = "nodejs";

/**
 * GET /api/bookings/lookup?identifier=…
 *
 * Resolves a booking `identifier` (idempotency key) — passed to the success
 * / cancel / fail redirect URL by the bookings API — to the full invoice
 * record, and returns it as JSON. The browser status page calls this so it
 * can show the user their invoice and offer it as a downloadable file.
 */
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const identifier = searchParams.get("identifier");
  const invoiceUID = searchParams.get("invoiceUID");

  if (!identifier) {
    return NextResponse.json(
      { error: "Missing `identifier` query param" },
      { status: 400 },
    );
  }

  if (!invoiceUID) {
    return NextResponse.json(
      {
        error:
          "We couldn't find that invoice. It may have expired or the server that created it was restarted.",
      },
      { status: 404 },
    );
  }

  try {
    const { invoice, client } = await pgw.getInvoice(invoiceUID);
    return NextResponse.json({
      ok: true,
      identifier,
      invoice,
      client,
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
