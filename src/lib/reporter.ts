// Set NEXT_PUBLIC_REPORTER_APP_URL="" to take the Launch button offline without probing.
export const REPORTER_APP_URL =
  process.env.NEXT_PUBLIC_REPORTER_APP_URL ?? "https://app.logiqore.io";

export const REPORTER_HEALTH_PATH = "/api/health";
