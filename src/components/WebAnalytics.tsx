// Cookieless Cloudflare Web Analytics. NEXT_PUBLIC_CF_BEACON_TOKEN is the site
// token from Cloudflare (public, it ships in the page); unset means no beacon.
const token = process.env.NEXT_PUBLIC_CF_BEACON_TOKEN;

export function WebAnalytics() {
  if (!token) return null;
  return (
    <script
      type="module"
      src="https://static.cloudflareinsights.com/beacon.min.js"
      data-cf-beacon={JSON.stringify({ token })}
      defer
    />
  );
}
