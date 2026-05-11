import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ShareDrive - Save Transport Cost in Nigeria",
  description: "Find people going your way and share rides daily in Nigeria.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
