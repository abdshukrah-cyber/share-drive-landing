import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: {
    default: "ShareDrive - The Smarter Way to Move Lagos",
    template: "%s | ShareDrive",
  },
  description:
    "Join the community of savvy Lagosians sharing rides. Save on fuel, reduce traffic, and make your daily commute more enjoyable with ShareDrive.",
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
  authors: [{ name: "ShareDrive Nigeria" }],
  creator: "ShareDrive",
  publisher: "ShareDrive Nigeria",
  metadataBase: new URL("https://sharedrive.ng"),
  openGraph: {
    type: "website",
    locale: "en_NG",
    url: "https://sharedrive.ng",
    siteName: "ShareDrive",
    title: "ShareDrive - The Smarter Way to Move Lagos",
    description:
      "Join the community of savvy Lagosians sharing rides. Save on fuel, reduce traffic, and make your daily commute more enjoyable.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "ShareDrive - Carpooling in Lagos",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ShareDrive - The Smarter Way to Move Lagos",
    description:
      "Join the community of savvy Lagosians sharing rides. Save on fuel, reduce traffic, and make your daily commute more enjoyable.",
    images: ["/og-image.png"],
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-white dark:bg-[#0f0f0f]">
      <body
        className={`${inter.variable} font-sans antialiased bg-white dark:bg-[#0f0f0f] text-gray-900 dark:text-gray-100`}
      >
        <Header />
        {children}
        <Footer />
        {process.env.NODE_ENV === "production" && <Analytics />}
      </body>
    </html>
  );
}
