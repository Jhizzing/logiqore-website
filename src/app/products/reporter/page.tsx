import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const APP_URL = "https://app.logiqore.io";

export const metadata: Metadata = {
  title: "LogiQore Reporter Beta | QAQC Reporting for Gold Assay Data",
  description:
    "Run LogiQore Reporter in your browser — import assay data, validate standards, blanks and duplicates, and export a JORC-ready QAQC report in minutes.",
  openGraph: {
    title: "LogiQore Reporter Beta",
    description:
      "Browser-based QAQC analysis and reporting for gold assay data. No install required.",
    url: "https://logiqore.io/products/reporter",
    siteName: "LogiQore",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "LogiQore Reporter Beta",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

const WORKFLOW_STEPS = [
  {
    step: "1",
    title: "Import",
    description: "Drag and drop your assay CSV or Excel export. Columns are auto-detected.",
  },
  {
    step: "2",
    title: "Confirm QC",
    description:
      "Standards, blanks and duplicates are classified automatically and matched against a built-in CRM database (OREAS, Geostats, CDN, AMIS).",
  },
  {
    step: "3",
    title: "Analyse",
    description:
      "Interactive control charts with ±2SD/±3SD limits, blank contamination checks against LDL, and duplicate RPD scatter.",
  },
  {
    step: "4",
    title: "Report",
    description:
      "Export a formatted Word report with embedded charts, statistics tables and commentary sections — ready for JORC-compliant reporting.",
  },
];

const FEATURES = [
  {
    title: "Nothing to install",
    description:
      "Reporter runs in your browser. No IT approvals, no installers, no OS security warnings — open the app and start validating.",
  },
  {
    title: "Built for photon gold assay",
    description:
      "Ships with a curated CRM database for photon assay workflows, with fuzzy matching from your standard IDs and support for custom CRMs.",
  },
  {
    title: "Geologist-grade outputs",
    description:
      "Editable Word reports with high-resolution charts, per-CRM statistics and space for your professional commentary.",
  },
  {
    title: "Your data stays yours",
    description:
      "Sessions are processed in memory for the duration of your analysis and are not retained. Export your results and go.",
  },
];

export default function ReporterPage() {
  return (
    <main className="flex min-h-screen flex-col bg-brand-dark text-white selection:bg-brand-gold selection:text-brand-dark">
      <Header />

      <section className="relative overflow-hidden py-20 md:py-28">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-brand-gold/10 via-brand-dark to-brand-dark pointer-events-none" />
        <div className="container mx-auto px-4 md:px-6 relative z-10 max-w-6xl">
          <p className="mb-4 inline-flex rounded-full border border-brand-gold/30 bg-brand-gold/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-brand-gold">
            Open Beta — Free During Beta
          </p>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            LogiQore <span className="text-brand-gold">Reporter</span>
          </h1>
          <p className="mt-6 max-w-3xl text-lg text-gray-300">
            QAQC analysis and reporting for gold assay data, in your browser. Import your data,
            validate standards, blanks and duplicates, and export a JORC-ready Word report in
            minutes — not an afternoon.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Link
              href={APP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-12 items-center justify-center rounded-full bg-brand-gold px-8 text-base font-semibold text-brand-dark transition-all hover:bg-brand-gold-glow hover:shadow-[0_0_20px_rgba(251,191,36,0.45)]"
            >
              Launch Reporter Beta
            </Link>
            <Link
              href="/#contact"
              className="inline-flex h-12 items-center justify-center rounded-full border border-white/20 px-8 text-base font-semibold text-gray-200 transition-colors hover:border-brand-gold/50 hover:text-brand-gold"
            >
              Talk to us first
            </Link>
          </div>
          <p className="mt-4 text-sm text-gray-500">
            Free while in beta · No account required · Works on any modern browser
          </p>
        </div>
      </section>

      <section className="py-10 md:py-14">
        <div className="container mx-auto px-4 md:px-6 max-w-6xl">
          <h2 className="text-2xl font-bold text-white md:text-3xl">From spreadsheet to report in four steps</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {WORKFLOW_STEPS.map((item) => (
              <article
                key={item.step}
                className="rounded-2xl border border-white/10 bg-white/5 p-6 transition-colors hover:border-brand-gold/40"
              >
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
          <h2 className="text-2xl font-bold text-white md:text-3xl">Why geologists use Reporter</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {FEATURES.map((feature) => (
              <article
                key={feature.title}
                className="rounded-2xl border border-white/10 bg-white/5 p-6"
              >
                <h3 className="text-lg font-semibold text-white">{feature.title}</h3>
                <p className="mt-3 text-sm text-gray-400">{feature.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-20 pt-6">
        <div className="container mx-auto px-4 md:px-6 max-w-6xl">
          <div className="rounded-2xl border border-brand-gold/30 bg-gradient-to-r from-brand-gold/10 via-brand-gold/5 to-transparent p-8">
            <h2 className="text-2xl font-bold text-white">Help shape the release</h2>
            <p className="mt-3 max-w-2xl text-sm text-gray-300">
              Reporter is in open beta and we act on feedback fast. If something doesn&apos;t work
              with your lab&apos;s export format, or there&apos;s a chart or check your workflow
              needs, tell us — include your lab and data context so we can reproduce it quickly.
            </p>
            <div className="mt-6 flex flex-wrap gap-4">
              <Link
                href="/#contact"
                className="inline-flex h-11 items-center justify-center rounded-full bg-brand-gold px-6 text-sm font-semibold text-brand-dark transition-all hover:bg-brand-gold-glow hover:shadow-[0_0_16px_rgba(251,191,36,0.4)]"
              >
                Send feedback
              </Link>
              <Link
                href="/services"
                className="inline-flex h-11 items-center justify-center rounded-full border border-white/20 px-6 text-sm font-semibold text-gray-200 transition-colors hover:border-brand-gold/50 hover:text-brand-gold"
              >
                Need your QAQC reviewed for you?
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
