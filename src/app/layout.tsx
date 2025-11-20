import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://logiqore.io"),
  title: "LogiQore | Modern Software for Economic Geologists",
  description: "LogiQore provides modern QAQC, database, and lithogeochemistry software for exploration and mine geology.",
  openGraph: {
    title: "LogiQore | Modern Software for Economic Geologists",
    description: "LogiQore provides modern QAQC, database, and lithogeochemistry software for exploration and mine geology.",
    url: "https://logiqore.io",
    siteName: "LogiQore",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "LogiQore Software Suite",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  icons: {
    icon: "/icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} antialiased bg-brand-dark text-foreground min-h-screen flex flex-col`}
      >
        {children}
      </body>
    </html>
  );
}
