import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "LogiQore | Modern Software for Economic Geologists",
  description: "LogiQore provides modern QAQC, database, and lithogeochemistry software for exploration and mine geology.",
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
