import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "How It Works",
  description:
    "Learn how ShareDrive carpooling works in Lagos: find drivers going your way, book a seat, share live trips and split the cost securely.",
  path: "/how-it-works",
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
