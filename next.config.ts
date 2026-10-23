import type { NextConfig } from "next";
import { siteHeaders, trueThickHeaders } from "./src/lib/security-headers";

const isDev = process.env.NODE_ENV === "development";

// The site is a static export (out/) served by Cloudflare. Headers come from
// out/_headers (src/app/%5Fheaders/route.ts); headers() and rewrites() below only
// apply to `next dev`, which does not read that file.
const nextConfig: NextConfig = {
  output: "export",
  images: { unoptimized: true },
  ...(isDev && {
    // TrueThick is framed at /truethick/ (Cloudflare redirects .../index.html there)
    // and loads app.js relative to it, so the slash must survive.
    skipTrailingSlashRedirect: true,
    async headers() {
      return [
        { source: "/truethick/:path*", headers: trueThickHeaders },
        { source: "/((?!truethick/).*)", headers: siteHeaders },
      ];
    },
    async rewrites() {
      return [{ source: "/truethick/", destination: "/truethick/index.html" }];
    },
  }),
};

export default nextConfig;
