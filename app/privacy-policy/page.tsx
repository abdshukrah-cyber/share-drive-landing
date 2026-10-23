import { pageMetadata } from "@/lib/seo";

export { default } from "../privacy/page";

// Duplicate of /privacy kept for app-store links; point search engines at /privacy.
export const metadata = pageMetadata({
  title: "Privacy Policy",
  description:
    "Read how ShareDrive collects, uses and protects your personal data when you use our Lagos carpooling app and website.",
  path: "/privacy",
});
