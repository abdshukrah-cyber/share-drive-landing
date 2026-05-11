"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";

function ArrowRightIcon({ className }: { className: string }) {
  return (
    <svg
      className={className}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M13 7l5 5m0 0l-5 5m5-5H6"
      />
    </svg>
  );
}

function CheckCircleIcon({ className }: { className: string }) {
  return (
    <svg
      className={className}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    </svg>
  );
}

function ClockIcon({ className }: { className: string }) {
  return (
    <svg
      className={className}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M12 6v6l4 2m6-2a10 10 0 11-20 0 10 10 0 0120 0z"
      />
    </svg>
  );
}

function CopyIcon({ className }: { className: string }) {
  return (
    <svg
      className={className}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M8 8h10v12H8z M6 16H5a2 2 0 01-2-2V5a2 2 0 012-2h9a2 2 0 012 2v1"
      />
    </svg>
  );
}

function WalletIcon({ className }: { className: string }) {
  return (
    <svg
      className={className}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M3 7h15a3 3 0 013 3v7a3 3 0 01-3 3H6a3 3 0 01-3-3V7zm0 0a3 3 0 013-3h10a2 2 0 012 2v1m0 7h.01"
      />
    </svg>
  );
}

function normalizeStatus(status: string | null) {
  const normalized = (status ?? "").toLowerCase().trim();

  if (["successful", "success", "completed", "paid"].includes(normalized)) {
    return "success";
  }

  if (["failed", "cancelled", "canceled"].includes(normalized)) {
    return "failed";
  }

  return "pending";
}

function statusCopy(status: ReturnType<typeof normalizeStatus>) {
  if (status === "success") {
    return {
      eyebrow: "Payment Complete",
      title: "Payment received",
      message:
        "Your payment is complete. Return to ShareDrive so your wallet can refresh.",
      tone: "text-emerald-700 dark:text-emerald-300",
      bg: "bg-emerald-50 dark:bg-emerald-500/10",
    };
  }

  if (status === "failed") {
    return {
      eyebrow: "Payment Update",
      title: "Payment was not completed",
      message:
        "You can return to ShareDrive to check your wallet or try funding again.",
      tone: "text-rose-700 dark:text-rose-300",
      bg: "bg-rose-50 dark:bg-rose-500/10",
    };
  }

  return {
    eyebrow: "Payment Processing",
    title: "Confirming your payment",
    message:
      "We are checking your payment status. Return to ShareDrive to refresh your wallet.",
    tone: "text-amber-700 dark:text-amber-300",
    bg: "bg-amber-50 dark:bg-amber-500/10",
  };
}

export function PaymentCallbackClient() {
  const [currentUrl, setCurrentUrl] = useState("https://sharedrive.ng/payment/callback");
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    setCurrentUrl(window.location.href);
  }, []);

  const params = useMemo(() => {
    try {
      return new URL(currentUrl).searchParams;
    } catch {
      return new URLSearchParams();
    }
  }, [currentUrl]);

  const status = normalizeStatus(params.get("status") ?? params.get("paymentStatus"));
  const copy = statusCopy(status);
  const reference =
    params.get("tx_ref") ??
    params.get("paymentReference") ??
    params.get("transactionReference") ??
    "";
  const transactionId =
    params.get("transaction_id") ?? params.get("transactionReference") ?? "";
  const appUrl = useMemo(() => {
    try {
      const url = new URL(currentUrl);
      url.searchParams.set("sd_open_app", "1");
      return url.toString();
    } catch {
      return currentUrl;
    }
  }, [currentUrl]);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
    const alreadyTried = sessionStorage.getItem(`sd_payment_open:${currentUrl}`);

    if (!isMobile || alreadyTried || params.get("sd_open_app") === "1") {
      return;
    }

    const timer = window.setTimeout(() => {
      sessionStorage.setItem(`sd_payment_open:${currentUrl}`, "1");
      window.location.assign(appUrl);
    }, 700);

    return () => window.clearTimeout(timer);
  }, [appUrl, currentUrl, params]);

  const openApp = () => {
    window.location.assign(appUrl);
  };

  const copyReference = async () => {
    if (!reference) return;

    await navigator.clipboard.writeText(reference);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1800);
  };

  return (
    <main className="min-h-screen bg-white pt-24 text-gray-950 dark:bg-[#0f0f0f] dark:text-white">
      <section className="px-6 py-12 sm:py-16">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1fr_0.85fr] lg:items-center">
          <div>
            <div
              className={`mb-6 inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold ${copy.bg} ${copy.tone}`}
            >
              <CheckCircleIcon className="h-4 w-4" />
              {copy.eyebrow}
            </div>

            <h1 className="max-w-3xl text-4xl font-extrabold leading-tight tracking-normal text-gray-950 dark:text-white sm:text-6xl">
              {copy.title}
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-gray-600 dark:text-gray-300">
              {copy.message} If you are not automatically redirected, tap the
              button below to go back to the app.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <button
                type="button"
                onClick={openApp}
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-[#57370D] px-6 py-3 text-base font-bold text-white shadow-lg shadow-[#57370D]/20 transition hover:bg-[#3d2609] focus:outline-none focus:ring-4 focus:ring-[#E8B26A]/40"
              >
                Open ShareDrive
                <ArrowRightIcon className="h-5 w-5" />
              </button>
              <Link
                href="/"
                className="inline-flex min-h-12 items-center justify-center rounded-xl border border-gray-200 px-6 py-3 text-base font-semibold text-gray-800 transition hover:border-[#57370D]/40 hover:text-[#57370D] dark:border-gray-800 dark:text-gray-200 dark:hover:border-[#E8B26A]/40 dark:hover:text-[#E8B26A]"
              >
                Go to website
              </Link>
            </div>
          </div>

          <div className="rounded-2xl border border-gray-200 bg-gray-50 p-6 shadow-xl shadow-gray-950/5 dark:border-gray-800 dark:bg-[#171717] dark:shadow-black/30">
            <div className="flex items-center gap-3 border-b border-gray-200 pb-5 dark:border-gray-800">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#57370D] text-white">
                <WalletIcon className="h-6 w-6" />
              </div>
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  ShareDrive wallet
                </p>
                <h2 className="text-xl font-bold">Payment summary</h2>
              </div>
            </div>

            <dl className="mt-6 space-y-5">
              <div className="flex items-start justify-between gap-4">
                <dt className="text-sm text-gray-500 dark:text-gray-400">Status</dt>
                <dd className={`text-right text-sm font-bold capitalize ${copy.tone}`}>
                  {status}
                </dd>
              </div>
              <div className="flex items-start justify-between gap-4">
                <dt className="text-sm text-gray-500 dark:text-gray-400">
                  Reference
                </dt>
                <dd className="flex min-w-0 items-center gap-2 text-right text-sm font-semibold text-gray-900 dark:text-gray-100">
                  <span className="truncate">{reference || "Pending"}</span>
                  {reference ? (
                    <button
                      type="button"
                      onClick={copyReference}
                      className="shrink-0 rounded-lg p-2 text-gray-500 transition hover:bg-white hover:text-[#57370D] dark:hover:bg-gray-900 dark:hover:text-[#E8B26A]"
                      aria-label="Copy payment reference"
                    >
                      <CopyIcon className="h-4 w-4" />
                    </button>
                  ) : null}
                </dd>
              </div>
              <div className="flex items-start justify-between gap-4">
                <dt className="text-sm text-gray-500 dark:text-gray-400">
                  Transaction
                </dt>
                <dd className="max-w-52 truncate text-right text-sm font-semibold text-gray-900 dark:text-gray-100">
                  {transactionId || "Awaiting provider"}
                </dd>
              </div>
            </dl>

            <div className="mt-6 flex items-start gap-3 rounded-xl bg-white p-4 text-sm text-gray-600 dark:bg-[#101010] dark:text-gray-300">
              <ClockIcon className="mt-0.5 h-5 w-5 shrink-0 text-[#57370D] dark:text-[#E8B26A]" />
              <p>
                Wallet credits are confirmed by secure provider verification.
                If your balance has not changed yet, refresh in the app shortly.
              </p>
            </div>

            {copied ? (
              <p className="mt-4 text-sm font-semibold text-emerald-700 dark:text-emerald-300">
                Reference copied.
              </p>
            ) : null}
          </div>
        </div>
      </section>
    </main>
  );
}
