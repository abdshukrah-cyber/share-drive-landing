import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/seo";

const routes: {
  path: string;
  priority: number;
  changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
  // Date the page's content last changed. Update it when you edit the page.
  lastModified: string;
}[] = [
  { path: "", priority: 1, changeFrequency: "weekly", lastModified: "2026-10-21" },
  { path: "/how-it-works", priority: 0.9, changeFrequency: "monthly", lastModified: "2026-10-21" },
  { path: "/faq", priority: 0.8, changeFrequency: "monthly", lastModified: "2026-10-21" },
  { path: "/about", priority: 0.7, changeFrequency: "monthly", lastModified: "2026-10-21" },
  { path: "/contact", priority: 0.7, changeFrequency: "yearly", lastModified: "2026-10-21" },
  { path: "/support", priority: 0.6, changeFrequency: "yearly", lastModified: "2026-10-21" },
  { path: "/investors", priority: 0.6, changeFrequency: "monthly", lastModified: "2026-10-21" },
  { path: "/account-deletion", priority: 0.4, changeFrequency: "yearly", lastModified: "2026-10-21" },
  { path: "/privacy", priority: 0.3, changeFrequency: "yearly", lastModified: "2026-10-21" },
  { path: "/terms", priority: 0.3, changeFrequency: "yearly", lastModified: "2026-10-21" },
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map(({ path, priority, changeFrequency, lastModified }) => ({
    url: `${SITE_URL}${path}`,
    lastModified,
    changeFrequency,
    priority,
  }));
}
