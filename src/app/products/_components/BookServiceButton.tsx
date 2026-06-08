"use client";

import { useEffect, useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import {
  CalendarCheckIcon,
  Loader2Icon,
  MailIcon,
  PhoneIcon,
  PercentIcon,
  UserIcon,
  XIcon,
  AlertCircleIcon,
  ShieldCheckIcon,
} from "lucide-react";
import { Button } from "@/components/ui/button";

export interface BookableService {
  id: string;
  title: string;
  price: number;
  currency: "BDT";
  description: string;
}

interface BookServiceButtonProps {
  service: BookableService;
  /** Pass the current site origin so the modal can show it to the user */
  siteOrigin?: string;
}

interface FormState {
  name: string;
  email: string;
  phone: string;
}

const initialForm: FormState = { name: "", email: "", phone: "" };

export default function BookServiceButton({
  service,
}: BookServiceButtonProps) {
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState<FormState>(initialForm);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Compute the 1% pre-book amount (rounded to 2 decimals)
  const prebookAmount = Math.round(service.price * 0.01 * 100) / 100;

  // Reset form whenever the modal is opened
  useEffect(() => {
    if (open) {
      setForm(initialForm);
      setError(null);
    }
  }, [open]);

  function validate(): string | null {
    if (!form.name.trim()) return "Please enter your full name.";
    if (!form.email.trim()) return "Please enter your email.";
    // Lightweight email shape check
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim()))
      return "Please enter a valid email address.";
    return null;
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const v = validate();
    if (v) {
      setError(v);
      return;
    }
    setError(null);
    setSubmitting(true);
    try {
      const res = await fetch("/api/bookings", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          serviceId: service.id,
          serviceTitle: service.title,
          price: prebookAmount,
          currency: service.currency,
          description: `Pre-booking (1%) for ${service.title} — Total: ${service.price} ${service.currency}`,
          customer: {
            name: form.name.trim(),
            email: form.email.trim(),
            phone: form.phone.trim() || undefined,
          },
        }),
      });

      const data = (await res.json().catch(() => ({}))) as {
        ok?: boolean;
        paymentUrl?: string;
        invoiceUID?: string;
        error?: string;
      };

      if (!res.ok || !data.ok || !data.paymentUrl) {
        throw new Error(
          data.error || `Failed to create booking (HTTP ${res.status})`,
        );
      }

      // Hand off to the Graphland payment gateway
      window.location.href = data.paymentUrl;
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong");
      setSubmitting(false);
    }
  }

  return (
    <Dialog.Root
      open={open}
      onOpenChange={(next) => {
        if (submitting) return; // Don't allow closing while submitting
        setOpen(next);
      }}
    >
      <Dialog.Trigger asChild>
        <Button className="w-full" size="lg" disabled={submitting}>
          <CalendarCheckIcon className="size-4" />
          Book this Service
        </Button>
      </Dialog.Trigger>

      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=open]:fade-in-0 data-[state=closed]:fade-out-0" />

        <Dialog.Content
          className="fixed left-1/2 top-1/2 z-50 w-full max-w-md -translate-x-1/2 -translate-y-1/2 rounded-2xl border border-neutral-800 bg-neutral-950 p-6 shadow-2xl focus:outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=open]:fade-in-0 data-[state=closed]:fade-out-0 data-[state=open]:zoom-in-95 data-[state=closed]:zoom-out-95"
        >
          <Dialog.Title className="text-xl font-bold text-neutral-100 pr-8">
            Book {service.title}
          </Dialog.Title>
          <Dialog.Description className="text-sm text-neutral-400 mt-1">
            {service.currency} {service.price.toLocaleString()} • Secure
            payment via Graphland Payment Gateway
          </Dialog.Description>

          <Dialog.Close asChild>
            <button
              type="button"
              aria-label="Close"
              className="absolute right-4 top-4 text-neutral-400 hover:text-neutral-100 transition-colors"
              disabled={submitting}
            >
              <XIcon className="size-5" />
            </button>
          </Dialog.Close>

          <div className="mt-5">
            {/* Pre-book notice: 1% prebook, 1% later */}
            <div className="mb-5 rounded-lg border border-primary/30 bg-primary/10 p-3">
              <div className="flex items-start gap-2.5">
                <PercentIcon className="size-4 mt-0.5 text-primary shrink-0" />
                <div className="text-xs text-neutral-200 leading-relaxed">
                  <p className="font-semibold text-primary mb-0.5">
                    Every service — Prebook 1%
                  </p>
                  <p className="text-neutral-300">
                    To confirm your booking you pay just{" "}
                    <span className="font-semibold text-neutral-100">
                      {service.currency} {prebookAmount.toLocaleString()}
                    </span>{" "}
                    (1% of {service.currency}{" "}
                    {service.price.toLocaleString()}) now. Another 59% is
                    collected when work begins. The remaining 40% is due on
                    delivery.
                  </p>
                </div>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Name */}
              <div className="space-y-1.5">
                <label
                  htmlFor="book-name"
                  className="text-sm font-medium text-neutral-200 flex items-center gap-2"
                >
                  <UserIcon className="size-4" /> Full name
                </label>
                <input
                  id="book-name"
                  name="name"
                  type="text"
                  required
                  autoComplete="name"
                  value={form.name}
                  onChange={(e) =>
                    setForm((f) => ({ ...f, name: e.target.value }))
                  }
                  placeholder="Jane Doe"
                  className="w-full rounded-md border border-neutral-700 bg-neutral-900 px-3 py-2 text-sm text-neutral-100 placeholder:text-neutral-500 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                />
              </div>

              {/* Email */}
              <div className="space-y-1.5">
                <label
                  htmlFor="book-email"
                  className="text-sm font-medium text-neutral-200 flex items-center gap-2"
                >
                  <MailIcon className="size-4" /> Email
                </label>
                <input
                  id="book-email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  value={form.email}
                  onChange={(e) =>
                    setForm((f) => ({ ...f, email: e.target.value }))
                  }
                  placeholder="jane@company.com"
                  className="w-full rounded-md border border-neutral-700 bg-neutral-900 px-3 py-2 text-sm text-neutral-100 placeholder:text-neutral-500 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                />
              </div>

              {/* Phone (optional) */}
              <div className="space-y-1.5">
                <label
                  htmlFor="book-phone"
                  className="text-sm font-medium text-neutral-200 flex items-center gap-2"
                >
                  <PhoneIcon className="size-4" /> Phone{" "}
                  <span className="text-neutral-500 font-normal">
                    (optional)
                  </span>
                </label>
                <input
                  id="book-phone"
                  name="phone"
                  type="tel"
                  autoComplete="tel"
                  value={form.phone}
                  onChange={(e) =>
                    setForm((f) => ({ ...f, phone: e.target.value }))
                  }
                  placeholder="+8801700000000"
                  className="w-full rounded-md border border-neutral-700 bg-neutral-900 px-3 py-2 text-sm text-neutral-100 placeholder:text-neutral-500 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                />
              </div>

              {error && (
                <div className="flex items-start gap-2 rounded-md border border-destructive/40 bg-destructive/10 px-3 py-2 text-sm text-red-300">
                  <AlertCircleIcon className="size-4 mt-0.5 shrink-0" />
                  <span>{error}</span>
                </div>
              )}

              <div className="flex items-start gap-2 rounded-md bg-neutral-900/60 border border-neutral-800 px-3 py-2 text-xs text-neutral-400">
                <ShieldCheckIcon className="size-3.5 mt-0.5 text-primary shrink-0" />
                <span>
                  Pay only{" "}
                  <span className="font-semibold text-neutral-200">
                    {service.currency} {prebookAmount.toLocaleString()}
                  </span>{" "}
                  now to confirm your slot. No hidden fees.
                </span>
              </div>

              <div className="flex gap-3 pt-2">
                <Dialog.Close asChild>
                  <Button
                    type="button"
                    variant="outline"
                    className="flex-1"
                    disabled={submitting}
                  >
                    Cancel
                  </Button>
                </Dialog.Close>
                <Button type="submit" className="flex-1" disabled={submitting}>
                  {submitting ? (
                    <>
                      <Loader2Icon className="size-4 animate-spin" />
                      Redirecting…
                    </>
                  ) : (
                    <>
                      <CalendarCheckIcon className="size-4" />
                      Pay 1% & Confirm
                    </>
                  )}
                </Button>
              </div>

              <p className="text-xs text-neutral-500 text-center pt-1">
                You will be redirected to a secure Graphland checkout page to
                complete your payment.
              </p>
            </form>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
