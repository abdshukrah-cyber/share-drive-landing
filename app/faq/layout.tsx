import { pageMetadata } from "@/lib/seo";
import { faqs } from "./faq-data";

export const metadata = pageMetadata({
  title: "FAQ",
  description:
    "Answers to common questions about SharedDrive carpooling in Lagos: signing up, finding rides, driver verification, safety and payments.",
  path: "/faq",
});

// The page only renders one category at a time, so expose every Q&A to
// crawlers as structured data.
const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: Object.values(faqs)
    .flat()
    .map(({ question, answer }) => ({
      "@type": "Question",
      name: question,
      acceptedAnswer: { "@type": "Answer", text: answer },
    })),
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      {children}
    </>
  );
}
