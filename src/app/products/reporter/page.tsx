import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

type GitHubAsset = {
  name: string;
  browser_download_url: string;
  size: number;
};

type GitHubRelease = {
  tag_name: string;
  html_url: string;
  published_at: string;
  draft: boolean;
  prerelease: boolean;
  assets: GitHubAsset[];
};

type DownloadCard = {
  platform: string;
  subtitle: string;
  assetName: string;
  url?: string;
  sizeLabel?: string;
};

const RELEASES_ENDPOINT =
  "https://api.github.com/repos/Jhizzing/QAQC_Report_Generator/releases?per_page=12";

export const metadata: Metadata = {
  title: "LogiQore Reporter Beta | QAQC Report Generator",
  description:
    "Download and verify the latest LogiQore Reporter beta builds for Windows, macOS, and Linux.",
  openGraph: {
    title: "LogiQore Reporter Beta",
    description:
      "Get the latest beta builds of LogiQore Reporter for QAQC reporting workflows.",
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

function formatBytes(bytes?: number): string | undefined {
  if (!bytes || bytes <= 0) return undefined;
  const mb = bytes / (1024 * 1024);
  if (mb < 1024) return `${mb.toFixed(1)} MB`;
  return `${(mb / 1024).toFixed(2)} GB`;
}

function pickLatestReporterRelease(releases: GitHubRelease[]): GitHubRelease | null {
  return (
    releases.find(
      (release) =>
        !release.draft &&
        release.assets.some((asset) => asset.name.startsWith("logiqore-reporter-"))
    ) ?? null
  );
}

async function getLatestReporterRelease(): Promise<GitHubRelease | null> {
  try {
    const response = await fetch(RELEASES_ENDPOINT, {
      next: { revalidate: 1800 },
      headers: {
        Accept: "application/vnd.github+json",
      },
    });

    if (!response.ok) return null;
    const payload = (await response.json()) as GitHubRelease[];
    return pickLatestReporterRelease(payload);
  } catch {
    return null;
  }
}

export default async function ReporterPage() {
  const release = await getLatestReporterRelease();
  const assets = release?.assets ?? [];

  const windowsAsset = assets.find((asset) => asset.name.includes("windows-latest.zip"));
  const macAsset = assets.find((asset) => asset.name.includes("macos-latest.zip"));
  const linuxAsset = assets.find(
    (asset) => asset.name.includes("ubuntu-latest.zip") || asset.name.includes("linux-latest.zip")
  );

  const checksumAsset = assets.find((asset) => asset.name === "SHA256SUMS.txt");
  const signatureAsset = assets.find((asset) => asset.name === "SHA256SUMS.txt.asc");
  const manifestAsset = assets.find(
    (asset) => asset.name === "logiqore-reporter-beta-manifest.json"
  );

  const cards: DownloadCard[] = [
    {
      platform: "Windows",
      subtitle: "x64 zipped release bundle",
      assetName: windowsAsset?.name ?? "logiqore-reporter-windows-latest.zip",
      url: windowsAsset?.browser_download_url,
      sizeLabel: formatBytes(windowsAsset?.size),
    },
    {
      platform: "macOS",
      subtitle: "Apple Silicon / Intel zipped bundle",
      assetName: macAsset?.name ?? "logiqore-reporter-macos-latest.zip",
      url: macAsset?.browser_download_url,
      sizeLabel: formatBytes(macAsset?.size),
    },
    {
      platform: "Linux",
      subtitle: "Ubuntu zipped release bundle",
      assetName: linuxAsset?.name ?? "logiqore-reporter-ubuntu-latest.zip",
      url: linuxAsset?.browser_download_url,
      sizeLabel: formatBytes(linuxAsset?.size),
    },
  ];

  return (
    <main className="flex min-h-screen flex-col bg-brand-dark text-white selection:bg-brand-gold selection:text-brand-dark">
      <Header />

      <section className="relative overflow-hidden py-20 md:py-28">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-brand-gold/10 via-brand-dark to-brand-dark pointer-events-none" />
        <div className="container mx-auto px-4 md:px-6 relative z-10 max-w-6xl">
          <p className="mb-4 inline-flex rounded-full border border-brand-gold/30 bg-brand-gold/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-brand-gold">
            Beta Program
          </p>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            LogiQore <span className="text-brand-gold">Reporter</span>
          </h1>
          <p className="mt-6 max-w-3xl text-lg text-gray-300">
            Download the latest beta build for assay QAQC workflows, verify package integrity, and
            send structured feedback to shape the release.
          </p>

          <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-xl border border-white/10 bg-white/5 p-4">
              <p className="text-xs uppercase tracking-wide text-gray-400">Channel</p>
              <p className="mt-2 text-base font-semibold text-white">Beta</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/5 p-4">
              <p className="text-xs uppercase tracking-wide text-gray-400">Latest Version</p>
              <p className="mt-2 text-base font-semibold text-white">{release?.tag_name ?? "Not published yet"}</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/5 p-4">
              <p className="text-xs uppercase tracking-wide text-gray-400">Published</p>
              <p className="mt-2 text-base font-semibold text-white">
                {release?.published_at
                  ? new Date(release.published_at).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "short",
                      day: "numeric",
                    })
                  : "Pending"}
              </p>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/5 p-4">
              <p className="text-xs uppercase tracking-wide text-gray-400">Release Notes</p>
              {release?.html_url ? (
                <Link
                  href={release.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-flex text-base font-semibold text-brand-gold hover:text-brand-gold-glow"
                >
                  View on GitHub
                </Link>
              ) : (
                <p className="mt-2 text-base font-semibold text-gray-500">Pending</p>
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="py-4 md:py-10">
        <div className="container mx-auto px-4 md:px-6 max-w-6xl">
          <h2 className="text-2xl font-bold text-white md:text-3xl">Downloads</h2>
          <p className="mt-3 max-w-3xl text-sm text-gray-400">
            Build artifacts are sourced from the latest published GitHub release in the
            QAQC_Report_Generator repository.
          </p>

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {cards.map((card) => (
              <article
                key={card.platform}
                className="rounded-2xl border border-white/10 bg-white/5 p-6 transition-colors hover:border-brand-gold/40"
              >
                <p className="text-sm font-semibold text-brand-gold">{card.platform}</p>
                <p className="mt-2 text-sm text-gray-400">{card.subtitle}</p>
                <p className="mt-5 text-xs text-gray-500 break-all">{card.assetName}</p>
                <p className="mt-1 text-xs text-gray-500">{card.sizeLabel ?? "Size pending"}</p>

                {card.url ? (
                  <Link
                    href={card.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-5 inline-flex h-10 items-center justify-center rounded-full bg-brand-gold px-5 text-sm font-semibold text-brand-dark transition-all hover:bg-brand-gold-glow hover:shadow-[0_0_14px_rgba(251,191,36,0.35)]"
                  >
                    Download
                  </Link>
                ) : (
                  <span className="mt-5 inline-flex h-10 items-center justify-center rounded-full border border-white/15 px-5 text-sm font-semibold text-gray-500">
                    Not published yet
                  </span>
                )}
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-10 md:py-14">
        <div className="container mx-auto px-4 md:px-6 max-w-6xl">
          <h2 className="text-2xl font-bold text-white md:text-3xl">Integrity & Manifest</h2>
          <p className="mt-3 max-w-3xl text-sm text-gray-400">
            Validate downloaded binaries using checksums before internal rollout.
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-3">
            <LinkOrPlaceholder
              label="SHA256 Checksums"
              href={checksumAsset?.browser_download_url}
              fallback="SHA256SUMS.txt pending"
            />
            <LinkOrPlaceholder
              label="Checksum Signature"
              href={signatureAsset?.browser_download_url}
              fallback="SHA256SUMS.txt.asc pending"
            />
            <LinkOrPlaceholder
              label="Beta Manifest"
              href={manifestAsset?.browser_download_url}
              fallback="beta manifest pending"
            />
          </div>
        </div>
      </section>

      <section className="pb-20 pt-6">
        <div className="container mx-auto px-4 md:px-6 max-w-6xl">
          <div className="rounded-2xl border border-brand-gold/30 bg-gradient-to-r from-brand-gold/10 via-brand-gold/5 to-transparent p-8">
            <h2 className="text-2xl font-bold text-white">Need onboarding or have beta feedback?</h2>
            <p className="mt-3 max-w-2xl text-sm text-gray-300">
              Send your feedback and dataset context through the LogiQore contact form. Include the
              release tag and operating system so we can reproduce issues quickly.
            </p>
            <Link
              href="/#contact"
              className="mt-6 inline-flex h-11 items-center justify-center rounded-full bg-brand-gold px-6 text-sm font-semibold text-brand-dark transition-all hover:bg-brand-gold-glow hover:shadow-[0_0_16px_rgba(251,191,36,0.4)]"
            >
              Contact LogiQore
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

function LinkOrPlaceholder({
  label,
  href,
  fallback,
}: {
  label: string;
  href?: string;
  fallback: string;
}) {
  if (!href) {
    return (
      <div className="rounded-xl border border-white/10 bg-white/5 p-4">
        <p className="text-sm font-semibold text-white">{label}</p>
        <p className="mt-2 text-sm text-gray-500">{fallback}</p>
      </div>
    );
  }

  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="rounded-xl border border-white/10 bg-white/5 p-4 transition-colors hover:border-brand-gold/40"
    >
      <p className="text-sm font-semibold text-white">{label}</p>
      <p className="mt-2 text-sm text-brand-gold">Download</p>
    </Link>
  );
}
