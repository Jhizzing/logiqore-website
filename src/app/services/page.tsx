import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "QAQC Review Services | LogiQore",
  description:
    "Independent QAQC review for drilling and assay programs. Send your assay exports, get back validated control charts, statistics and a JORC-ready QAQC report — reviewed by a geologist.",
  openGraph: {
    title: "LogiQore QAQC Review Services",
    description:
      "Independent, fixed-fee QAQC review for drilling and assay programs, delivered as a JORC-ready report.",
    url: "https://logiqore.io/services",
    siteName: "LogiQore",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "LogiQore QAQC Review Services",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

const DELIVERABLES = [
  {
    title: "Standards performance",
    description:
      "Every CRM evaluated against certified values with ±2SD/±3SD control limits, bias and recovery statistics, and flagged failures with batch context.",
  },
  {
    title: "Blank contamination",
    description:
      "Blanks assessed against detection limits with contamination rates, carry-over flags, and sequence context for any exceedances.",
  },
  {
    title: "Duplicate precision",
    description:
      "Field and lab duplicates analysed for relative percent difference, correlation and precision against your thresholds.",
  },
  {
    title: "JORC-ready report",
    description:
      "An editable Word report with charts, statistics tables and professional commentary — structured for direct inclusion in technical reporting.",
  },
];

const PROCESS = [
  {
    step: "1",
    title: "Send your exports",
    description:
      "Assay CSV/Excel from your lab or database, plus your CRM list and thresholds if you have them. We sign an NDA first if required — assay data is treated as strictly confidential.",
  },
  {
    step: "2",
    title: "We validate and review",
    description:
      "Your data runs through the same engine that powers LogiQore Reporter, then a geologist reviews every flag, anomaly and edge case by hand.",
  },
  {
    step: "3",
    title: "Receive your report",
    description:
      "A complete QAQC report with commentary, plus a walkthrough call if you want one. Typical turnaround is days, not weeks.",
  },
];

const USE_CASES = [
  "Resource drill-outs preparing for estimation or technical reporting",
  "Juniors without a dedicated database/QAQC geologist on staff",
  "Programs that inherited legacy data and need an independent health check",
  "Pre-audit reviews before a competent person sign-off",
];

export default function ServicesPage() {
  return (
    <main className="flex min-h-screen flex-col bg-brand-dark text-white selection:bg-brand-gold selection:text-brand-dark">
      <Header />

      <section className="relative overflow-hidden py-20 md:py-28">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-brand-gold/10 via-brand-dark to-brand-dark pointer-events-none" />
        <div className="container mx-auto px-4 md:px-6 relative z-10 max-w-6xl">
          <p className="mb-4 inline-flex rounded-full border border-brand-gold/30 bg-brand-gold/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-brand-gold">
            Services
          </p>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            QAQC review, <span className="text-brand-gold">done for you</span>
          </h1>
          <p className="mt-6 max-w-3xl text-lg text-gray-300">
            Send us your assay exports. Get back validated control charts, statistics and a
            JORC-ready QAQC report — run through LogiQore&apos;s analysis engine and reviewed by a
            geologist, not just a script.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Link
              href="/?interest=services#contact"
              className="inline-flex h-12 items-center justify-center rounded-full bg-brand-gold px-8 text-base font-semibold text-brand-dark transition-all hover:bg-brand-gold-glow hover:shadow-[0_0_20px_rgba(251,191,36,0.45)]"
            >
              Request a quote
            </Link>
            <Link
              href="/products/reporter"
              className="inline-flex h-12 items-center justify-center rounded-full border border-white/20 px-8 text-base font-semibold text-gray-200 transition-colors hover:border-brand-gold/50 hover:text-brand-gold"
            >
              Prefer to run it yourself?
            </Link>
          </div>
          <p className="mt-4 text-sm text-gray-500">
            Fixed-fee, quoted on dataset size and elements · NDA on request · Australia-based
          </p>
        </div>
      </section>

      <section className="py-10 md:py-14">
        <div className="container mx-auto px-4 md:px-6 max-w-6xl">
          <h2 className="text-2xl font-bold text-white md:text-3xl">What you get</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {DELIVERABLES.map((item) => (
              <article
                key={item.title}
                className="rounded-2xl border border-white/10 bg-white/5 p-6 transition-colors hover:border-brand-gold/40"
              >
                <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                <p className="mt-3 text-sm text-gray-400">{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-10 md:py-14">
        <div className="container mx-auto px-4 md:px-6 max-w-6xl">
          <h2 className="text-2xl font-bold text-white md:text-3xl">How it works</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {PROCESS.map((item) => (
              <article key={item.step} className="rounded-2xl border border-white/10 bg-white/5 p-6">
                <p className="text-sm font-semibold text-brand-gold">Step {item.step}</p>
                <h3 className="mt-2 text-lg font-semibold text-white">{item.title}</h3>
                <p className="mt-3 text-sm text-gray-400">{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-10 md:py-14">
        <div className="container mx-auto px-4 md:px-6 max-w-6xl">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <h2 className="text-2xl font-bold text-white md:text-3xl">Who this is for</h2>
              <ul className="mt-6 space-y-4">
                {USE_CASES.map((useCase) => (
                  <li key={useCase} className="flex items-start text-gray-300">
                    <span className="mr-3 mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-brand-gold" />
                    <span className="text-sm md:text-base">{useCase}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border border-brand-gold/30 bg-gradient-to-br from-brand-gold/10 via-brand-gold/5 to-transparent p-8">
              <h3 className="text-xl font-bold text-white">Why independent review matters</h3>
              <p className="mt-4 text-sm text-gray-300">
                QAQC issues found late are expensive — re-assay programs, delayed estimates, and
                awkward conversations with auditors. An independent review catches drifting
                standards, contaminated batches and precision problems while there&apos;s still
                time to act on them, and gives your competent person documented support for data
                quality statements.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-20 pt-6">
        <div className="container mx-auto px-4 md:px-6 max-w-6xl">
          <div className="rounded-2xl border border-brand-gold/30 bg-gradient-to-r from-brand-gold/10 via-brand-gold/5 to-transparent p-8">
            <h2 className="text-2xl font-bold text-white">Get a quote</h2>
            <p className="mt-3 max-w-2xl text-sm text-gray-300">
              Tell us roughly how many samples and which elements, and we&apos;ll come back with a
              fixed fee and turnaround — usually within one business day.
            </p>
            <Link
              href="/?interest=services#contact"
              className="mt-6 inline-flex h-11 items-center justify-center rounded-full bg-brand-gold px-6 text-sm font-semibold text-brand-dark transition-all hover:bg-brand-gold-glow hover:shadow-[0_0_16px_rgba(251,191,36,0.4)]"
            >
              Request a quote
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
