"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import {
  DownloadIcon,
  RefreshCwIcon,
  FileTextIcon,
  HashIcon,
  CircleDollarSignIcon,
  MailIcon,
  UserIcon,
  Building2Icon,
  AlertCircleIcon,
} from "lucide-react";

type Status = "success" | "cancel" | "fail";

interface InvoiceDetailsProps {
  identifier: string;
  serviceId: string | null;
  status: Status;
  invoiceUID: string | null;
}

interface InvoiceResponse {
  ok: true;
  identifier: string;
  invoice: {
    id: string;
    clientId: string;
    customer: Record<string, unknown>;
    amount: number;
    currency: string;
    description?: string;
    status: string;
    successUrl?: string;
    cancelUrl?: string;
    failUrl?: string;
  };
  client: {
    displayName: string;
    logoUrl?: string;
  };
}

type State =
  | { kind: "loading" }
  | { kind: "error"; message: string }
  | { kind: "ok"; data: InvoiceResponse };


function pickString(
  obj: Record<string, unknown> | undefined,
  ...keys: string[]
): string | null {
  if (!obj) return null;
  for (const k of keys) {
    const v = obj[k];
    if (typeof v === "string" && v.trim()) return v;
  }
  return null;
}

export default function InvoiceDetails({
  identifier,
  serviceId,
  status,
  invoiceUID,
}: InvoiceDetailsProps) {
  const [state, setState] = useState<State>({ kind: "loading" });
  const downloadedRef = useRef(false);

  // Build a stable, file-system-safe name for the download
  const fileName = useMemo(() => {
    const safe = (s: string) => s.replace(/[^a-z0-9._-]+/gi, "-");
    const idPart = serviceId ? safe(serviceId) : "booking";
    return `graphland-invoice-${idPart}.json`;
  }, [serviceId]);

  async function load() {
    setState({ kind: "loading" });
    try {
      const res = await fetch(
        `/api/bookings/lookup?identifier=${encodeURIComponent(identifier)}&invoiceUID=${encodeURIComponent(invoiceUID ?? "")}`,
        { cache: "no-store" },
      );
      const data = (await res.json().catch(() => ({}))) as Partial<InvoiceResponse> & {
        error?: string;
      };
      if (!res.ok || !data.ok) {
        throw new Error(
          data.error || `Failed to load invoice (HTTP ${res.status})`,
        );
      }
      setState({ kind: "ok", data: data as InvoiceResponse });
    } catch (err) {
      setState({
        kind: "error",
        message: err instanceof Error ? err.message : "Failed to load invoice",
      });
    }
  }

  useEffect(() => {
    load();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [identifier]);

  // Auto-download the invoice as soon as the user lands on the success page.
  // Cancellations and failures don't have a payable invoice to download, so
  // we skip auto-download for those.
  useEffect(() => {
    if (state.kind !== "ok") return;
    if (status !== "success") return;
    if (downloadedRef.current) return;
    downloadedRef.current = true;
    downloadInvoice(state.data, fileName);
  }, [state, status, fileName]);

  if (state.kind === "loading") {
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

  if (state.kind === "error") {
    return (
      <div className="mt-8 rounded-2xl border border-red-500/30 bg-red-500/5 p-6 text-red-200 text-sm">
        <div className="flex items-start gap-2">
          <AlertCircleIcon className="size-5 mt-0.5 shrink-0" />
          <div>
            <p className="font-semibold">Couldn't load the invoice</p>
            <p className="mt-1 opacity-90">{state.message}</p>
            <button
              type="button"
              onClick={load}
              className="mt-3 inline-flex items-center gap-1.5 text-xs font-medium text-red-200 hover:text-white transition-colors"
            >
              <RefreshCwIcon className="size-3.5" /> Try again
            </button>
          </div>
        </div>
      </div>
    );
  }

  const { data } = state;
  const { invoice, client } = data;
  const customerName =
    pickString(invoice.customer, "name") ?? "—";
  const customerEmail =
    pickString(invoice.customer, "email") ?? "—";
  const customerPhone = pickString(invoice.customer, "phone");

  return (
    <div className="mt-8">
      {/* Invoice summary card */}
      <div className="rounded-2xl border border-neutral-800 bg-neutral-950/60 overflow-hidden">
        <div className="flex items-center justify-between px-6 py-4 border-b border-neutral-800">
          <div className="flex items-center gap-2">
            <FileTextIcon className="size-4 text-primary" />
            <h2 className="font-semibold text-neutral-100">Invoice</h2>
          </div>
          <span
            className={[
              "text-xs font-semibold uppercase tracking-wider rounded-full px-2.5 py-1 border",
              invoice.status === "paid"
                ? "border-emerald-500/40 bg-emerald-500/10 text-emerald-200"
                : invoice.status === "pending"
                  ? "border-amber-500/40 bg-amber-500/10 text-amber-200"
                  : "border-red-500/40 bg-red-500/10 text-red-200",
            ].join(" ")}
          >
            {invoice.status}
          </span>
        </div>

        <dl className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4 px-6 py-5 text-sm">
          <Field icon={HashIcon} label="Invoice ID" value={invoice.id} mono />
          <Field
            icon={Building2Icon}
            label="Issued by"
            value={client.displayName}
          />
          <Field
            icon={UserIcon}
            label="Customer"
            value={customerName}
          />
          <Field icon={MailIcon} label="Email" value={customerEmail} />
          <Field
            icon={CircleDollarSignIcon}
            label="Amount"
            value={`${invoice.amount} ${invoice.currency}`}
            highlight
          />
          {invoice.description && (
            <Field
              icon={FileTextIcon}
              label="Description"
              value={invoice.description}
            />
          )}
          {customerPhone && (
            <Field
              icon={HashIcon}
              label="Phone"
              value={customerPhone}
            />
          )}
        </dl>

        <div className="px-6 py-4 border-t border-neutral-800 flex flex-wrap items-center justify-between gap-3">
          <p className="text-xs text-neutral-500">
            Invoice reference (idempotency key):{" "}
            <span className="font-mono text-neutral-300 break-all">
              {identifier}
            </span>
          </p>
          <button
            type="button"
            onClick={() => downloadInvoice(data, fileName)}
            className="inline-flex items-center gap-1.5 rounded-md bg-primary text-neutral-950 px-3 py-1.5 text-sm font-semibold hover:opacity-90 transition-opacity"
          >
            <DownloadIcon className="size-4" />
            Download invoice
          </button>
        </div>
      </div>
    </div>
  );
}

function Field({
  icon: Icon,
  label,
  value,
  highlight,
  mono,
}: {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  value: string;
  highlight?: boolean;
  mono?: boolean;
}) {
  return (
    <div>
      <dt className="text-[11px] uppercase tracking-wider text-neutral-500 mb-1 flex items-center gap-1.5">
        <Icon className="size-3" /> {label}
      </dt>
      <dd
        className={[
          mono ? "font-mono break-all" : "",
          highlight
            ? "text-lg font-bold text-neutral-100"
            : "text-neutral-200",
        ].join(" ")}
      >
        {value}
      </dd>
    </div>
  );
}

/**
 * Triggers a browser download of the invoice as a JSON file. (The gateway
 * only exposes structured invoice data — there's no PDF endpoint — so we
 * serialize the record to a clean JSON file. Users get a self-contained
 * receipt they can archive, and we can swap in a PDF renderer later
 * without changing the download entry point.)
 */
function downloadInvoice(data: InvoiceResponse, fileName: string) {
  try {
    const json = JSON.stringify(data, null, 2);
    const blob = new Blob([json], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = fileName;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    // Defer revocation so Safari has a chance to start the download
    setTimeout(() => URL.revokeObjectURL(url), 1_000);
  } catch {
    // No-op: a failed client-side download shouldn't break the page;
    // the user can still use the "Download invoice" button manually.
  }
}
