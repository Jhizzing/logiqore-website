import { REPORTER_APP_URL } from "./reporter";

export type Header = { key: string; value: string };

// React needs eval in development only, for server error stack reconstruction.
const isDev = process.env.NODE_ENV === "development";

const reporterOrigin = REPORTER_APP_URL ? ` ${new URL(REPORTER_APP_URL).origin}` : "";

// Cloudflare Web Analytics beacon (see src/components/WebAnalytics.tsx).
const analyticsScript = " https://static.cloudflareinsights.com";
const analyticsConnect = " https://cloudflareinsights.com";

const cspDirectives = [
  "default-src 'self'",
  `script-src 'self' 'unsafe-inline'${isDev ? " 'unsafe-eval'" : ""}${analyticsScript}`,
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data: blob:",
  "font-src 'self'",
  `connect-src 'self' https://formspree.io${analyticsConnect}${reporterOrigin}`,
  "frame-src 'self'",
  "base-uri 'self'",
  "form-action 'self' https://formspree.io",
  "object-src 'none'",
];

const commonHeaders: Header[] = [
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=(), interest-cohort=()" },
  { key: "X-DNS-Prefetch-Control", value: "on" },
  { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains; preload" },
];

/** Every route except /truethick/*: never framed. */
export const siteHeaders: Header[] = [
  ...commonHeaders,
  { key: "X-Frame-Options", value: "DENY" },
  { key: "Content-Security-Policy", value: [...cspDirectives, "frame-ancestors 'none'"].join("; ") },
];

/** /truethick/*: framed by this site only. */
export const trueThickHeaders: Header[] = [
  ...commonHeaders,
  { key: "X-Frame-Options", value: "SAMEORIGIN" },
  { key: "Content-Security-Policy", value: [...cspDirectives, "frame-ancestors 'self'"].join("; ") },
  // The embed is sandboxed without allow-same-origin, so it runs with an opaque
  // ("null") origin and its ES module scripts are CORS requests.
  { key: "Access-Control-Allow-Origin", value: "*" },
];

/**
 * The same rules in Cloudflare's `_headers` format. A request inherits the headers
 * of every rule it matches, so the /truethick/* rule detaches (`! Name`) the
 * site-wide headers it overrides.
 */
export function cloudflareHeadersFile(): string {
  const block = (pattern: string, lines: string[]) =>
    [pattern, ...lines.map((line) => `  ${line}`)].join("\n");
  const siteKeys = new Set(siteHeaders.map((h) => h.key));
  const overridden = trueThickHeaders.filter(
    (h) => siteKeys.has(h.key) && siteHeaders.find((s) => s.key === h.key)?.value !== h.value,
  );
  const added = trueThickHeaders.filter((h) => !siteKeys.has(h.key));

  return [
    block("/*", siteHeaders.map((h) => `${h.key}: ${h.value}`)),
    block("/truethick/*", [
      ...overridden.map((h) => `! ${h.key}`),
      ...[...overridden, ...added].map((h) => `${h.key}: ${h.value}`),
    ]),
    // Production and preview URLs are <worker>.<account>.workers.dev and
    // <version>-<worker>.<account>.workers.dev.
    block("https://:worker.:account.workers.dev/*", ["X-Robots-Tag: noindex"]),
    "",
  ].join("\n\n");
}
