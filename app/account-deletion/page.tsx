import Link from "next/link";

const steps = [
  "Open the ShareDrive mobile app and sign in.",
  "Go to Account or Profile settings.",
  "Choose Delete Account and follow the confirmation prompts.",
  "If you cannot access the app, email admin@sharedrive.ng from your registered email address.",
];

export default function AccountDeletionPage() {
  return (
    <main className="min-h-screen bg-white pt-24 text-gray-900 dark:bg-[#0f0f0f] dark:text-gray-100">
      <section className="px-6 py-16">
        <div className="mx-auto max-w-4xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-(--brand-text) dark:text-[#E8B26A]">
            Account deletion
          </p>
          <h1 className="mb-5 text-4xl font-extrabold md:text-5xl">
            Delete your ShareDrive account
          </h1>
          <p className="max-w-2xl text-lg text-gray-600 dark:text-gray-400">
            You can request deletion in the ShareDrive app. This page explains
            the request path and the data that may be retained for legal,
            safety, fraud-prevention, payment, and dispute-resolution reasons.
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
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-(--brand) text-sm font-bold text-(--on-brand)">
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
                Account deletion disables your login and removes or anonymizes
                profile data that is no longer needed to provide the service.
              </p>
              <p>
                Some records may be retained where required for payment records,
                fraud prevention, safety investigations, legal obligations,
                dispute handling, tax/accounting requirements, and platform
                integrity.
              </p>
              <p>
                To ask about retained records, contact{" "}
                <a
                  href="mailto:admin@sharedrive.ng"
                  className="font-semibold text-(--brand-text) dark:text-[#E8B26A]"
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
            className="inline-flex rounded-xl bg-(--brand) px-6 py-3 font-bold text-(--on-brand) transition-colors hover:bg-(--brand-hover)"
          >
            Contact support
          </Link>
        </div>
      </section>
    </main>
  );
}
