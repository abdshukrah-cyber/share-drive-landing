import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "About Us",
  description:
    "Meet the team behind ShareDrive, the carpooling platform helping Lagosians share rides, cut fuel costs and beat traffic together.",
  path: "/about",
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
