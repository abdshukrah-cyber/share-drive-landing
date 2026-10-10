import Link from "next/link";

const supportOptions = [
  {
    title: "Account and app support",
    description:
      "Get help with sign in, profile verification, ride activity, wallet questions, and app issues.",
    href: "mailto:admin@sharedrive.ng?subject=ShareDrive%20support%20request",
    label: "Email support",
  },
  {
    title: "Safety or abuse reports",
    description:
      "Report unsafe ride behavior, suspicious accounts, harassment, payment concerns, or content abuse.",
    href: "mailto:admin@sharedrive.ng?subject=ShareDrive%20safety%20report",
    label: "Report an issue",
  },
  {
    title: "Privacy and data requests",
    description:
      "Ask about your personal data, request correction, or start an account deletion request.",
    href: "/account-deletion",
    label: "Manage data",
  },
];

export default function SupportPage() {
  return (
    <main className="min-h-screen bg-white pt-24 text-gray-900 dark:bg-[#0f0f0f] dark:text-gray-100">
      <section className="px-6 py-16">
        <div className="mx-auto max-w-4xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-[#57370D] dark:text-[#E8B26A]">
            ShareDrive support
          </p>
          <h1 className="mb-5 text-4xl font-extrabold md:text-5xl">
            How can we help?
          </h1>
          <p className="max-w-2xl text-lg text-gray-600 dark:text-gray-400">
            Contact ShareDrive for app support, safety reports, account help,
            payment questions, privacy requests, and driver verification issues.
          </p>
        </div>
      </section>

      <section className="px-6 pb-20">
        <div className="mx-auto grid max-w-5xl gap-5 md:grid-cols-3">
          {supportOptions.map((option) => (
            <div
              key={option.title}
              className="rounded-2xl border border-gray-200 bg-gray-50 p-6 dark:border-gray-800 dark:bg-[#1e1e1e]"
            >
              <h2 className="mb-3 text-xl font-bold">{option.title}</h2>
              <p className="mb-6 text-sm leading-6 text-gray-600 dark:text-gray-400">
                {option.description}
              </p>
              {option.href.startsWith("mailto:") ? (
                <a
                  href={option.href}
                  className="inline-flex rounded-xl bg-[#57370D] px-5 py-3 text-sm font-bold text-white transition-colors hover:bg-[#3d2609]"
                >
                  {option.label}
                </a>
              ) : (
                <Link
                  href={option.href}
                  className="inline-flex rounded-xl bg-[#57370D] px-5 py-3 text-sm font-bold text-white transition-colors hover:bg-[#3d2609]"
                >
                  {option.label}
                </Link>
              )}
            </div>
          ))}
        </div>
      </section>

      <section className="bg-gray-50 px-6 py-16 dark:bg-[#121212]">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-4 text-2xl font-bold">Contact details</h2>
          <div className="space-y-3 text-gray-700 dark:text-gray-300">
            <p>
              Email:{" "}
              <a
                href="mailto:admin@sharedrive.ng"
                className="font-semibold text-[#57370D] dark:text-[#E8B26A]"
              >
                admin@sharedrive.ng
              </a>
            </p>
            <p>
              Investors:{" "}
              <Link
                href="/investors"
                className="font-semibold text-[#57370D] dark:text-[#E8B26A]"
              >
                see our investor page
              </Link>
            </p>
            <p>Location: Lagos, Nigeria</p>
            <p>Typical response time: within 24 hours on business days.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
