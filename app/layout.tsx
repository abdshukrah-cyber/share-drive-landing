import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/next";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { OG_IMAGE, SITE_NAME, SITE_URL } from "@/lib/seo";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: {
    default: "SharedDrive - The Smarter Way to Move Lagos",
    template: "%s | SharedDrive",
  },
  description:
    "Join the community of savvy Lagosians sharing rides. Save on fuel, reduce traffic, and make your daily commute more enjoyable with SharedDrive.",
  keywords: [
    "carpooling",
    "Lagos",
    "ride sharing",
    "commute",
    "Nigeria",
    "transportation",
    "save money",
    "fuel",
  ],
  authors: [{ name: "SharedDrive Nigeria" }],
  creator: "SharedDrive",
  publisher: "SharedDrive Nigeria",
  metadataBase: new URL(SITE_URL),
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_NG",
    url: "https://sharedrive.ng",
    siteName: "SharedDrive",
    title: "SharedDrive - The Smarter Way to Move Lagos",
    description:
      "Join the community of savvy Lagosians sharing rides. Save on fuel, reduce traffic, and make your daily commute more enjoyable.",
    images: [OG_IMAGE],
  },
  twitter: {
    card: "summary_large_image",
    title: "SharedDrive - The Smarter Way to Move Lagos",
    description:
      "Join the community of savvy Lagosians sharing rides. Save on fuel, reduce traffic, and make your daily commute more enjoyable.",
    images: [OG_IMAGE.url],
    creator: "@sharedriveng",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION
    ? { google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION }
    : undefined,
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
};

export const viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0f0f0f" },
  ],
};

const orgJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
      name: SITE_NAME,
      url: SITE_URL,
      logo: `${SITE_URL}/apple-icon.png`,
      email: "admin@sharedrive.ng",
      areaServed: { "@type": "City", name: "Lagos" },
      sameAs: [
        "https://twitter.com/sharedriveng",
        "https://instagram.com/sharedriveng",
        "https://facebook.com/sharedriveng",
        "https://linkedin.com/company/sharedriveng",
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      name: SITE_NAME,
      url: SITE_URL,
      publisher: { "@id": `${SITE_URL}/#organization` },
      inLanguage: "en-NG",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-NG" className="bg-white dark:bg-[#0f0f0f]">
      <body
        className={`${inter.variable} font-sans antialiased bg-white dark:bg-[#0f0f0f] text-gray-900 dark:text-gray-100`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
        />
        <Header />
        {children}
        <Footer />
        {process.env.NODE_ENV === "production" && <Analytics />}

        {/* Google tag (gtag.js) - shared with maoltech.com and NaijUp */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-933643807"
          strategy="afterInteractive"
        />
        <Script id="google-gtag" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-933643807');
          `}
        </Script>
      </body>
    </html>
  );
}
