import type { Metadata } from "next";

export const SITE_URL = "https://sharedrive.ng";
export const SITE_NAME = "SharedDrive";

export const OG_IMAGE = {
  url: "/image/sharedrive.png",
  width: 1408,
  height: 768,
  alt: "SharedDrive app showing a Lagos carpool route",
};

// Next.js shallow-merges openGraph/twitter, so each page must restate the
// shared fields or it loses the site name and image.
export function pageMetadata({
  title,
  description,
  path,
}: {
  title: string;
  description: string;
  path: string;
}): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      locale: "en_NG",
      siteName: SITE_NAME,
      url: path,
      title: `${title} | ${SITE_NAME}`,
      description,
      images: [OG_IMAGE],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | ${SITE_NAME}`,
      description,
      images: [OG_IMAGE.url],
      creator: "@sharedriveng",
    },
  };
}
