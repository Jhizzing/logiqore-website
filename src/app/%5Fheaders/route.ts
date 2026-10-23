import { cloudflareHeadersFile } from "@/lib/security-headers";

// Exported as out/_headers, which Cloudflare applies to every static response.
// (%5F escapes the underscore: _folders are private in the App Router.)
export const dynamic = "force-static";

export function GET() {
  return new Response(cloudflareHeadersFile(), {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
