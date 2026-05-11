"use client";

import { Suspense, useMemo } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { motion } from "framer-motion";

export default function PaymentCallbackPage() {
  return (
    <Suspense fallback={<PaymentCallbackShell />}>
      <PaymentCallbackContent />
    </Suspense>
  );
}

function PaymentCallbackContent() {
  const searchParams = useSearchParams();
  const callbackUrl = useMemo(() => {
    if (typeof window === "undefined") {
      return "https://sharedrive.ng/payment/callback";
    }
    return window.location.href;
  }, []);

  const status = searchParams.get("status") ?? "";
  const reference =
    searchParams.get("tx_ref") ??
    searchParams.get("paymentReference") ??
    searchParams.get("transactionReference") ??
    "";
  const isSuccessful = ["successful", "success", "completed", "paid"].includes(
    status.toLowerCase(),
  );

  return (
    <main className="min-h-screen bg-[#f7faf7] text-[#17211a]">
      <section className="mx-auto flex min-h-screen w-full max-w-6xl flex-col px-6 py-8">
        <nav className="flex items-center justify-between">
          <Link href="/" className="text-xl font-bold text-[#215d3b]">
            ShareDrive
          </Link>
          <span className="rounded-full border border-[#d9e5dc] bg-white px-4 py-2 text-sm font-medium text-[#4f6356]">
            Payment callback
          </span>
        </nav>

        <div className="grid flex-1 items-center gap-10 py-12 lg:grid-cols-[1fr_0.8fr]">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            className="max-w-2xl"
          >
            <div className="mb-8 inline-flex h-16 w-16 items-center justify-center rounded-full bg-[#215d3b] text-white shadow-lg shadow-[#215d3b]/20">
              <svg
                aria-hidden="true"
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2.4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>

            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#215d3b]">
              Payment completed
            </p>
            <h1 className="text-4xl font-black leading-tight text-[#17211a] sm:text-5xl lg:text-6xl">
              Thank you for using ShareDrive.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-[#52645a]">
              Your payment has been received. We are sending you back to the
              app so your wallet and ride details can refresh.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                href={callbackUrl}
                className="inline-flex items-center justify-center rounded-lg bg-[#215d3b] px-6 py-4 text-base font-bold text-white shadow-lg shadow-[#215d3b]/20 transition hover:bg-[#18472d]"
              >
                Open ShareDrive app
              </a>
              <Link
                href="/"
                className="inline-flex items-center justify-center rounded-lg border border-[#cbd9d0] bg-white px-6 py-4 text-base font-bold text-[#215d3b] transition hover:border-[#9db7a6]"
              >
                Go to homepage
              </Link>
            </div>
          </motion.div>

          <motion.aside
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.12, duration: 0.45 }}
            className="rounded-lg border border-[#d9e5dc] bg-white p-6 shadow-xl shadow-[#215d3b]/10"
          >
            <div className="rounded-lg bg-[#f0f6f2] p-5">
              <div className="mb-5 flex items-center justify-between">
                <span className="text-sm font-semibold text-[#607468]">
                  Payment status
                </span>
                <span className="rounded-full bg-[#dff4e6] px-3 py-1 text-sm font-bold text-[#215d3b]">
                  {isSuccessful || !status ? "Completed" : status}
                </span>
              </div>

              <div className="space-y-4">
                <Detail label="Service" value="ShareDrive wallet" />
                <Detail
                  label="Reference"
                  value={reference || "Processing securely"}
                />
                <Detail label="Next step" value="Return to the app" />
              </div>
            </div>
          </motion.aside>
        </div>
      </section>
    </main>
  );
}

function PaymentCallbackShell() {
  return (
    <main className="min-h-screen bg-[#f7faf7] text-[#17211a]">
      <section className="mx-auto flex min-h-screen w-full max-w-6xl flex-col px-6 py-8">
        <nav className="flex items-center justify-between">
          <Link href="/" className="text-xl font-bold text-[#215d3b]">
            ShareDrive
          </Link>
        </nav>
        <div className="flex flex-1 items-center">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#215d3b]">
              Payment completed
            </p>
            <h1 className="text-4xl font-black leading-tight text-[#17211a] sm:text-5xl">
              Thank you for using ShareDrive.
            </h1>
          </div>
        </div>
      </section>
    </main>
  );
}

function Detail({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-start justify-between gap-4 border-b border-[#d9e5dc] pb-4 last:border-0 last:pb-0">
      <span className="text-sm text-[#607468]">{label}</span>
      <span className="max-w-[60%] break-words text-right text-sm font-semibold text-[#17211a]">
        {value}
      </span>
    </div>
  );
}
