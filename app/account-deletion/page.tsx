import Link from "next/link";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Delete Your Account",
  description:
    "How to delete your ShareDrive account and personal data from the app, or by emailing our team if you can't sign in.",
  path: "/account-deletion",
});

const steps = [
  "Finish or cancel any pending, confirmed or ongoing rides.",
  "Withdraw your wallet balance to your bank account. You can't delete an account while it still has money in its wallet.",
  "Open the ShareDrive app (web or mobile), sign in and go to Account.",
  "Tap Delete account and confirm. If something is still blocking deletion, the app tells you what to do first.",
  "If you cannot access the app, email admin@sharedrive.ng from your registered email address.",
];

export default function AccountDeletionPage() {
  return (
    <main className="min-h-screen bg-white pt-24 text-gray-900 dark:bg-[#0f0f0f] dark:text-gray-100">
      <section className="px-6 py-16">
        <div className="mx-auto max-w-4xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-[#57370D] dark:text-[#E8B26A]">
            Account deletion
          </p>
          <h1 className="mb-5 text-4xl font-extrabold md:text-5xl">
            Delete your ShareDrive account
          </h1>
          <p className="max-w-2xl text-lg text-gray-600 dark:text-gray-400">
            You can delete your account yourself in the ShareDrive app. This
            page explains what you need to do first, what happens to your
            personal data, and which records we keep for legal, safety,
            fraud-prevention, payment and dispute-resolution reasons.
          </p>
        </div>
      </section>

      <section className="px-6 pb-20">
        <div className="mx-auto grid max-w-5xl gap-8 lg:grid-cols-2">
          <div className="rounded-2xl border border-gray-200 bg-gray-50 p-6 dark:border-gray-800 dark:bg-[#1e1e1e]">
            <h2 className="mb-4 text-2xl font-bold">How to request deletion</h2>
            <ol className="space-y-4 text-gray-700 dark:text-gray-300">
              {steps.map((step, index) => (
                <li key={step} className="flex gap-3">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#57370D] text-sm font-bold text-white">
                    {index + 1}
                  </span>
                  <span>{step}</span>
                </li>
              ))}
            </ol>
          </div>

          <div className="rounded-2xl border border-gray-200 bg-gray-50 p-6 dark:border-gray-800 dark:bg-[#1e1e1e]">
            <h2 className="mb-4 text-2xl font-bold">Data handling</h2>
            <div className="space-y-4 text-gray-700 dark:text-gray-300">
              <p>
                Before you can delete your account, you must have no pending,
                confirmed or ongoing rides, and your wallet balance must be zero
                (withdraw it first).
              </p>
              <p>
                When you delete your account, you are signed out and can no
                longer log in. Your personal information, such as your name,
                email address, phone number and profile photo, is anonymised so
                it can no longer be linked to you.
              </p>
              <p>
                Ride, payment and wallet transaction records are kept in
                anonymised form where we need them for accounting and tax,
                fraud prevention, safety investigations, dispute handling and
                other legal obligations.
              </p>
              <p>
                To ask about retained records, contact{" "}
                <a
                  href="mailto:admin@sharedrive.ng"
                  className="font-semibold text-[#57370D] dark:text-[#E8B26A]"
                >
                  admin@sharedrive.ng
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 px-6 py-16 dark:bg-[#121212]">
        <div className="mx-auto flex max-w-4xl flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="text-2xl font-bold">Need help accessing your account?</h2>
            <p className="text-gray-600 dark:text-gray-400">
              Support can help verify your request.
            </p>
          </div>
          <Link
            href="/support"
            className="inline-flex rounded-xl bg-[#57370D] px-6 py-3 font-bold text-white transition-colors hover:bg-[#3d2609]"
          >
            Contact support
          </Link>
        </div>
      </section>
    </main>
  );
}
