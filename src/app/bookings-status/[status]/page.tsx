import { Suspense } from "react";
import {
  CheckCircle2Icon,
  XCircleIcon,
  AlertTriangleIcon,
} from "lucide-react";
import InvoiceDetails from "./InvoiceDetails";

/**
 * Booking callback page reached after the user is redirected back from the
 * Graphland payment gateway. The gateway sends them to
 * `/bookings-status/{success|cancel|fail}?service=…&invoice=…` where
 * `invoice` is the `identifier` (idempotency key) we set when creating
 * the invoice.
 *
 * The page itself is a server component so we can pre-render the status
 * banner; the invoice details are loaded client-side via Suspense so the
 * initial paint isn't blocked on the gateway lookup.
 */
export const dynamic = "force-dynamic";

interface PageProps {
  params: Promise<{ status: string }>;
  searchParams: Promise<{
    service?: string;
    invoice?: string;
    invoiceUID?: string;
  }>;
}

const ALLOWED_STATUSES = new Set(["success", "cancel", "fail"]);

type Status = "success" | "cancel" | "fail";

export default async function BookingStatusPage({
  params,
  searchParams,
}: PageProps) {
  const { status: rawStatus } = await params;
  const { service, invoice, invoiceUID } = await searchParams;
  const status: Status = ALLOWED_STATUSES.has(rawStatus)
    ? (rawStatus as Status)
    : "success";

  return (
    <section className="max-w-3xl mx-auto px-6 lg:px-8 pt-16 pb-24">
      <StatusHeader status={status} />

      <Suspense fallback={<InvoiceSkeleton />}>
        {invoice ? (
          <InvoiceDetails
            identifier={invoice}
            serviceId={service ?? null}
            status={status}
            invoiceUID={invoiceUID ?? null}
          />
        ) : (
          <MissingIdentifierCard />
        )}
      </Suspense>

      <NextSteps status={status} />
    </section>
  );
}

const HEADERS = {
  success: {
    title: "Payment successful",
    subtitle: (
      <>
        Your booking is confirmed. You can download your invoice below — a
        copy is already saved on your device.
      </>
    ),
    icon: CheckCircle2Icon,
    classes: "border-emerald-500/40 bg-emerald-500/10 text-emerald-200",
  },
  cancel: {
    title: "Payment cancelled",
    subtitle: (
      <>
        You cancelled the checkout. No charges were made and no invoice is
        available to download.
      </>
    ),
    icon: AlertTriangleIcon,
    classes: "border-amber-500/40 bg-amber-500/10 text-amber-200",
  },
  fail: {
    title: "Payment failed",
    subtitle: (
      <>
        The payment didn’t go through. You can review the invoice details
        below and try again.
      </>
    ),
    icon: XCircleIcon,
    classes: "border-red-500/40 bg-red-500/10 text-red-200",
  },
} as const;

function StatusHeader({ status }: { status: Status }) {
  const cfg = HEADERS[status];
  const Icon = cfg.icon;
  return (
    <div
      className={`rounded-2xl border px-6 py-6 ${cfg.classes} flex items-start gap-4`}
    >
      <Icon className="size-8 shrink-0 mt-0.5" />
      <div>
        <h1 className="text-2xl font-bold tracking-tight">{cfg.title}</h1>
        <p className="text-sm opacity-90 mt-1 leading-relaxed">
          {cfg.subtitle}
        </p>
      </div>
    </div>
  );
}

function InvoiceSkeleton() {
  return (
    <div className="mt-8 rounded-2xl border border-neutral-800 bg-neutral-950/60 p-6 animate-pulse">
      <div className="h-5 w-40 bg-neutral-800 rounded mb-4" />
      <div className="grid grid-cols-2 gap-4">
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i}>
            <div className="h-3 w-24 bg-neutral-800 rounded mb-2" />
            <div className="h-4 w-32 bg-neutral-800 rounded" />
          </div>
        ))}
      </div>
    </div>
  );
}

function MissingIdentifierCard() {
  return (
    <div className="mt-8 rounded-2xl border border-amber-500/30 bg-amber-500/5 p-6 text-amber-200 text-sm">
      <p className="font-semibold">No invoice reference found</p>
      <p className="mt-1 opacity-90">
        The redirect from the payment gateway didn't include an invoice
        identifier. If you completed a payment, please contact us with your
        email and we'll locate the invoice for you.
      </p>
    </div>
  );
}

function NextSteps({ status }: { status: Status }) {
  if (status === "success") {
    return (
      <div className="mt-8 text-sm text-neutral-400 space-y-2">
        <p>
          🎉 Your booking is confirmed. A copy of the invoice has been
          downloaded to your device.
        </p>
        <p>
          You can also download it again anytime using the button above.
          We'll follow up by email within 1 business day to kick off the
          project.
        </p>
      </div>
    );
  }
  if (status === "cancel") {
    return (
      <div className="mt-8 text-sm text-neutral-400 space-y-2">
        <p>
          No charges were made. Feel free to try again whenever you're
          ready.
        </p>
        <p>
          <a
            href="/gigs"
            className="text-primary hover:underline font-medium"
          >
            ← Back to services
          </a>
        </p>
      </div>
    );
  }
  return (
    <div className="mt-8 text-sm text-neutral-400 space-y-2">
      <p>
        Something went wrong with the payment. If you were charged, the
        transaction will be reversed automatically.
      </p>
      <p>
        <a
          href="/gigs"
          className="text-primary hover:underline font-medium"
        >
          ← Try again
        </a>{" "}
        or{" "}
        <a
          href="/contact"
          className="text-primary hover:underline font-medium"
        >
          contact support
        </a>
        .
      </p>
    </div>
  );
}
