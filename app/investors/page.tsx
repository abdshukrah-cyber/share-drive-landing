import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Invest in SharedDrive",
  description:
    "SharedDrive is building the trusted carpooling network for Lagos. Learn about the opportunity and contact us about funding and investment.",
  path: "/investors",
});

const INVEST_MAILTO =
  "mailto:admin@sharedrive.ng?subject=" +
  encodeURIComponent("Investment Inquiry - SharedDrive") +
  "&body=" +
  encodeURIComponent(
    "Hello SharedDrive team,\n\nI'm interested in learning more about investing in SharedDrive.\n\nName:\nOrganisation / Fund (if any):\nPhone:\nIndicative investment size:\nAnything else we should know:\n\nThank you."
  );

const opportunity = [
  {
    title: "A daily pain point",
    desc: "Millions of Lagosians lose hours in traffic every day, and rising fuel prices make solo driving more expensive each month.",
  },
  {
    title: "Empty seats, everywhere",
    desc: "Most private cars on Lagos roads carry just one person. SharedDrive turns those empty seats into affordable, verified rides.",
  },
  {
    title: "Built for Lagos",
    desc: "Reviewed drivers, live tracking, trip sharing, in-app chat and a secure wallet designed around how Lagosians actually commute.",
  },
  {
    title: "Live and growing",
    desc: "SharedDrive is live on the web at app.sharedrive.ng, with our Android app coming very soon and iOS to follow.",
  },
];

const steps = [
  {
    title: "Send us an email",
    desc: "Write to admin@sharedrive.ng with the subject “Investment Inquiry”.",
  },
  {
    title: "Tell us about you",
    desc: "Include your name, organisation or fund (if any), phone number and indicative investment size.",
  },
  {
    title: "Let’s talk",
    desc: "Our team will respond, share more information on our plans and set up a call.",
  },
];

export default function InvestorsPage() {
  return (
    <main className="min-h-screen bg-white pt-24 text-gray-900 dark:bg-[#0f0f0f] dark:text-gray-100">
      {/* Hero */}
      <section className="relative overflow-hidden px-6 py-16 md:py-24">
        <div className="absolute inset-0 -z-10 bg-[#57370D]/5 dark:bg-transparent" />
        <div className="mx-auto max-w-4xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-[#57370D] dark:text-[#E8B26A]">
            Investors
          </p>
          <h1 className="mb-6 text-4xl font-extrabold text-balance md:text-6xl">
            Invest in the future of{" "}
            <span className="text-[#57370D] dark:text-[#E8B26A]">
              moving Lagos
            </span>
          </h1>
          <p className="mx-auto mb-10 max-w-2xl text-lg text-gray-600 dark:text-gray-400">
            SharedDrive is building the most trusted carpooling network in
            Nigeria, starting with Lagos. We&apos;re open to conversations with
            investors who share our vision for affordable, safer and greener
            commuting.
          </p>
          <a
            href={INVEST_MAILTO}
            className="inline-block rounded-2xl bg-[#57370D] px-8 py-4 text-lg font-bold text-white shadow-xl transition-all hover:-translate-y-1 hover:bg-[#3d2609]"
          >
            Contact us about investing
          </a>
          <p className="mt-4 text-sm text-gray-500 dark:text-gray-400">
            Or email{" "}
            <a
              href="mailto:admin@sharedrive.ng"
              className="font-semibold text-[#57370D] underline underline-offset-2 dark:text-[#E8B26A]"
            >
              admin@sharedrive.ng
            </a>
          </p>
        </div>
      </section>

      {/* Opportunity */}
      <section className="bg-gray-50 px-6 py-20 dark:bg-[#121212]">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-[#57370D] md:text-4xl dark:text-[#E8B26A]">
              Why SharedDrive
            </h2>
            <p className="mx-auto max-w-2xl text-gray-600 dark:text-gray-400">
              A large, everyday problem and a simple, community-powered
              solution.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {opportunity.map((item) => (
              <div
                key={item.title}
                className="rounded-3xl border border-gray-100 bg-white p-8 shadow-lg dark:border-gray-800 dark:bg-[#1e1e1e]"
              >
                <h3 className="mb-3 text-xl font-bold dark:text-white">
                  {item.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How to invest */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-5xl">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl dark:text-white">
              How to get in touch
            </h2>
            <p className="mx-auto max-w-2xl text-gray-600 dark:text-gray-400">
              Whether you&apos;re an angel, a fund or a strategic partner,
              we&apos;d love to hear from you.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {steps.map((step, i) => (
              <div key={step.title} className="text-center">
                <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#57370D] text-2xl font-bold text-white">
                  {i + 1}
                </div>
                <h3 className="mb-2 font-bold dark:text-white">{step.title}</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 pb-20">
        <div className="mx-auto max-w-4xl rounded-[3rem] border border-[#57370D]/10 bg-[#57370D] p-10 text-center md:p-12 dark:bg-[#57370D]/20">
          <h2 className="mb-6 text-3xl font-extrabold text-white text-balance md:text-4xl">
            Ready to start the conversation?
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-white/80">
            Email our team at admin@sharedrive.ng and we&apos;ll get back to
            you.
          </p>
          <a
            href={INVEST_MAILTO}
            className="inline-block rounded-2xl bg-white px-8 py-4 text-lg font-bold text-[#57370D] shadow-xl transition-all hover:-translate-y-1 hover:bg-gray-100"
          >
            Email admin@sharedrive.ng
          </a>
          <p className="mx-auto mt-8 max-w-2xl text-xs text-white/60">
            This page is for information only and is not an offer to sell, or
            a solicitation of an offer to buy, any securities. Any investment
            will be subject to separate agreements and applicable laws.
          </p>
        </div>
      </section>
    </main>
  );
}
