"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { REPORTER_APP_URL, REPORTER_HEALTH_PATH } from "@/lib/reporter";

type Availability = "unknown" | "available" | "unavailable";

const PROBE_TIMEOUT_MS = 8000;

const primaryClass =
  "inline-flex h-12 items-center justify-center rounded-full bg-brand-gold px-8 text-base font-semibold text-brand-dark transition-all hover:bg-brand-gold-glow hover:shadow-[0_0_20px_rgba(251,191,36,0.45)]";
const secondaryClass =
  "inline-flex h-12 items-center justify-center rounded-full border border-white/20 px-8 text-base font-semibold text-gray-200 transition-colors hover:border-brand-gold/50 hover:text-brand-gold";

export function ReporterLaunchButton() {
  const [availability, setAvailability] = useState<Availability>(
    REPORTER_APP_URL ? "unknown" : "unavailable",
  );

  useEffect(() => {
    if (!REPORTER_APP_URL) return;

    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), PROBE_TIMEOUT_MS);

    // A CORS request only succeeds against the real Reporter (its API allowlists
    // this site's origin), so a dead or re-registered domain reads as unavailable.
    // A timeout keeps the button live: the host resolved but is slow to answer.
    fetch(`${REPORTER_APP_URL}${REPORTER_HEALTH_PATH}`, {
      cache: "no-store",
      credentials: "omit",
      signal: controller.signal,
    })
      .then((res) => setAvailability(res.ok ? "available" : "unavailable"))
      .catch((error: unknown) => {
        if (!(error instanceof DOMException && error.name === "AbortError")) {
          setAvailability("unavailable");
        }
      })
      .finally(() => clearTimeout(timeout));

    return () => {
      clearTimeout(timeout);
      controller.abort();
    };
  }, []);

  if (availability === "unavailable") {
    return (
      <div className="mt-10" role="status">
        <div className="flex flex-wrap items-center gap-4">
          <span
            aria-disabled="true"
            className="inline-flex h-12 cursor-not-allowed items-center justify-center rounded-full border border-white/15 bg-white/5 px-8 text-base font-semibold text-gray-400"
          >
            Beta temporarily unavailable
          </span>
          <Link href="/?interest=reporter#contact" className={primaryClass}>
            Contact us for access
          </Link>
        </div>
        <p className="mt-4 max-w-2xl text-sm text-gray-400">
          The hosted beta is offline for maintenance. Leave your details and we&apos;ll tell you
          when it&apos;s back, or{" "}
          <Link href="/services" className="text-brand-gold hover:underline">
            send us your data and we&apos;ll run the QAQC review for you
          </Link>
          .
        </p>
      </div>
    );
  }

  return (
    <div className="mt-10 flex flex-wrap items-center gap-4">
      <Link
        href={REPORTER_APP_URL}
        target="_blank"
        rel="noopener noreferrer"
        className={primaryClass}
      >
        Launch Reporter Beta
      </Link>
      <Link href="/#contact" className={secondaryClass}>
        Talk to us first
      </Link>
    </div>
  );
}
