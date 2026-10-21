import type { NextConfig } from "next";
import { REPORTER_APP_URL } from "./src/lib/reporter";

// React needs eval in development only, for server error stack reconstruction.
const isDev = process.env.NODE_ENV === "development";

const reporterOrigin = REPORTER_APP_URL ? ` ${new URL(REPORTER_APP_URL).origin}` : "";

const cspDirectives = [
  "default-src 'self'",
  `script-src 'self' 'unsafe-inline'${isDev ? " 'unsafe-eval'" : ""} https://va.vercel-scripts.com`,
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data: blob:",
  "font-src 'self'",
  `connect-src 'self' https://formspree.io https://va.vercel-scripts.com https://vitals.vercel-insights.com${reporterOrigin}`,
  "frame-src 'self'",
  "base-uri 'self'",
  "form-action 'self' https://formspree.io",
  "object-src 'none'",
];

const securityHeaders = [
  {
    key: "X-Content-Type-Options",
    value: "nosniff",
  },
  {
    key: "X-Frame-Options",
    value: "DENY",
  },
  {
    key: "Referrer-Policy",
    value: "strict-origin-when-cross-origin",
  },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=(), interest-cohort=()",
  },
  {
    key: "X-DNS-Prefetch-Control",
    value: "on",
  },
  {
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains; preload",
  },
  {
    key: "Content-Security-Policy",
    value: [...cspDirectives, "frame-ancestors 'none'"].join("; "),
  },
];

const trueThickFrameHeaders = [
  {
    key: "X-Content-Type-Options",
    value: "nosniff",
  },
  {
    key: "X-Frame-Options",
    value: "SAMEORIGIN",
  },
  {
    key: "Referrer-Policy",
    value: "strict-origin-when-cross-origin",
  },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=(), interest-cohort=()",
  },
  {
    key: "X-DNS-Prefetch-Control",
    value: "on",
  },
  {
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains; preload",
  },
  {
    key: "Content-Security-Policy",
    value: [...cspDirectives, "frame-ancestors 'self'"].join("; "),
  },
  // The embed is sandboxed without allow-same-origin, so it runs with an opaque
  // ("null") origin and its ES module scripts are CORS requests.
  {
    key: "Access-Control-Allow-Origin",
    value: "*",
  },
];

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: "/truethick/:path*",
        headers: trueThickFrameHeaders,
      },
      {
        source: "/((?!truethick/).*)",
        headers: securityHeaders,
      },
    ];
  },
};

export default nextConfig;
