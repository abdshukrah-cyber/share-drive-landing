export const WEB_APP_URL = "https://app.sharedrive.ng";

interface GetAppProps {
  variant?: "hero" | "onDark";
  className?: string;
}

export function GetApp({ variant = "hero", className = "" }: GetAppProps) {
  const onDark = variant === "onDark";

  const storeBadge = onDark
    ? "bg-white/10 border-white/20 text-white"
    : "bg-gray-100 dark:bg-gray-800 border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white";
  const storeHint = onDark
    ? "text-white/70"
    : "text-gray-500 dark:text-gray-400";

  return (
    <div className={`w-full ${className}`}>
      <a
        href={WEB_APP_URL}
        target="_blank"
        rel="noopener noreferrer"
        className={`inline-flex w-full sm:w-auto items-center justify-center gap-3 px-8 py-4 rounded-2xl shadow-xl transition-all transform hover:-translate-y-1 font-bold text-lg ${
          onDark
            ? "bg-[#E8B26A] text-[#0f0f0f] hover:bg-[#D9A04F] dark:bg-white dark:text-[#57370D] dark:hover:bg-gray-100"
            : "bg-(--brand) hover:bg-(--brand-hover) text-(--on-brand)"
        }`}
      >
        Open the Web App
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M14 5l7 7m0 0l-7 7m7-7H3"
          />
        </svg>
      </a>
      <p className={`mt-3 text-sm ${storeHint}`}>
        Available now at{" "}
        <a
          href={WEB_APP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="font-semibold underline underline-offset-2"
        >
          app.sharedrive.ng
        </a>{" "}
        &mdash; works in any browser.
      </p>

      <div
        className={`mt-6 flex flex-col sm:flex-row gap-3 ${
          onDark ? "justify-center" : "justify-center lg:justify-start"
        }`}
      >
        <div
          aria-disabled="true"
          className={`flex items-center gap-3 px-5 py-3 rounded-xl border cursor-default ${storeBadge}`}
        >
          <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
            <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 01-.61-.92V2.734a1 1 0 01.609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.198l2.807 1.626a1 1 0 010 1.73l-2.808 1.626L15.206 12l2.492-2.491zM5.864 2.658L16.802 8.99l-2.303 2.303-8.635-8.635z" />
          </svg>
          <div className="text-left leading-tight">
            <div className={`text-xs ${storeHint}`}>Coming very soon</div>
            <div className="font-semibold">Google Play</div>
          </div>
        </div>
        <div
          aria-disabled="true"
          className={`flex items-center gap-3 px-5 py-3 rounded-xl border cursor-default ${storeBadge}`}
        >
          <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
            <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
          </svg>
          <div className="text-left leading-tight">
            <div className={`text-xs ${storeHint}`}>Coming soon</div>
            <div className="font-semibold">App Store</div>
          </div>
        </div>
      </div>
    </div>
  );
}
