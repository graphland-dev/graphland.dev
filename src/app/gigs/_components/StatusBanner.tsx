"use client";

import { useSearchParams, useRouter, usePathname } from "next/navigation";
import { useEffect } from "react";
import {
  CheckCircle2Icon,
  XCircleIcon,
  AlertTriangleIcon,
  XIcon,
} from "lucide-react";

const CONFIG = {
  success: {
    icon: CheckCircle2Icon,
    title: "Payment successful!",
    message:
      "Thanks for your booking — our team will reach out within 1 business day to get started.",
    classes: "border-emerald-500/40 bg-emerald-500/10 text-emerald-200",
  },
  cancel: {
    icon: AlertTriangleIcon,
    title: "Payment cancelled",
    message:
      "No charges were made. Feel free to try again whenever you're ready.",
    classes: "border-amber-500/40 bg-amber-500/10 text-amber-200",
  },
  fail: {
    icon: XCircleIcon,
    title: "Payment failed",
    message:
      "Something went wrong with the payment. Please try again or contact us if the issue persists.",
    classes: "border-red-500/40 bg-red-500/10 text-red-200",
  },
} as const;

type Status = keyof typeof CONFIG;

/**
 * Renders a banner when the user is redirected back from the payment gateway
 * with a `?status=success|cancel|fail` query param.
 */
export default function StatusBanner() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const raw = searchParams.get("status");
  const status: Status | null =
    raw && raw in CONFIG ? (raw as Status) : null;

  // Auto-dismiss after 10s by stripping the query param
  useEffect(() => {
    if (!status) return;
    const t = setTimeout(() => dismiss(), 10_000);
    return () => clearTimeout(t);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [status]);

  function dismiss() {
    const params = new URLSearchParams(searchParams.toString());
    params.delete("status");
    params.delete("service");
    const qs = params.toString();
    router.replace(qs ? `${pathname}?${qs}` : pathname, { scroll: false });
  }

  if (!status) return null;

  const cfg = CONFIG[status];
  const Icon = cfg.icon;

  return (
    <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-8">
      <div
        role="status"
        className={`flex items-start gap-3 rounded-xl border px-4 py-3 ${cfg.classes}`}
      >
        <Icon className="size-5 mt-0.5 shrink-0" />
        <div className="flex-1">
          <p className="font-semibold text-sm">{cfg.title}</p>
          <p className="text-sm opacity-90 mt-0.5">{cfg.message}</p>
        </div>
        <button
          type="button"
          onClick={dismiss}
          aria-label="Dismiss"
          className="opacity-70 hover:opacity-100 transition-opacity"
        >
          <XIcon className="size-4" />
        </button>
      </div>
    </div>
  );
}
