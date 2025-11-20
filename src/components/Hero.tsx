import Link from "next/link";
import { LogoMark } from "./LogoMark";

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-24 pb-20 md:pt-32 md:pb-32">
      {/* Background Elements */}
      <div className="absolute top-0 left-1/2 -z-10 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-brand-gold/5 blur-[120px]" />
      <div className="absolute bottom-0 right-0 -z-10 h-[400px] w-[400px] rounded-full bg-brand-teal/5 blur-[100px]" />

      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-8 items-center">
          {/* Left Content */}
          <div className="flex flex-col justify-center space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl xl:text-6xl/none">
                Modern software for <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-gold to-amber-200">economic geologists</span>, built on real workflows.
              </h1>
              <p className="max-w-[600px] text-lg text-gray-400 md:text-xl">
                LogiQore QAQC Reporter, Database, and AutoChem — a unified ecosystem for exploration and mine geology.
              </p>
            </div>

            <div className="flex flex-col gap-4 sm:flex-row">
              <Link
                href="#contact"
                className="inline-flex h-12 items-center justify-center rounded-full bg-brand-gold px-8 text-base font-semibold text-brand-dark transition-all hover:bg-brand-gold-glow hover:shadow-[0_0_20px_rgba(251,191,36,0.3)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold focus-visible:ring-offset-2 focus-visible:ring-offset-brand-dark"
              >
                Join the early access list
              </Link>
              <Link
                href="#products"
                className="inline-flex h-12 items-center justify-center rounded-full border border-white/20 bg-white/5 px-8 text-base font-medium text-white transition-colors hover:bg-white/10 hover:border-white/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold focus-visible:ring-offset-2 focus-visible:ring-offset-brand-dark"
              >
                Explore the products
              </Link>
            </div>

            <div className="flex flex-col space-y-2 text-sm text-gray-500 sm:flex-row sm:space-y-0 sm:space-x-6">
              <div className="flex items-center gap-2">
                <div className="h-1.5 w-1.5 rounded-full bg-brand-teal" />
                Built by an economic geologist
              </div>
              <div className="flex items-center gap-2">
                <div className="h-1.5 w-1.5 rounded-full bg-brand-teal" />
                Mine & Exploration workflows
              </div>
              <div className="flex items-center gap-2">
                <div className="h-1.5 w-1.5 rounded-full bg-brand-teal" />
                AI-ready from day one
              </div>
            </div>
          </div>

          {/* Right Visual */}
          <div className="relative mx-auto w-full max-w-[500px] lg:max-w-none">
            <div className="relative aspect-square overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-tr from-brand-dark via-transparent to-white/5" />
              
              {/* Placeholder Visual Content */}
              <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center">
                 <div className="relative mb-6 h-32 w-32">
                    <div className="absolute inset-0 animate-pulse rounded-full bg-brand-gold/20 blur-xl"></div>
                    <LogoMark className="h-full w-full drop-shadow-2xl" />
                 </div>
                 <p className="text-sm font-medium uppercase tracking-widest text-brand-gold">
                   LogiQore Ecosystem
                 </p>
                 <p className="mt-2 text-xs text-gray-500">
                   Integrated Geology Platform
                 </p>
              </div>

              {/* Decorative elements */}
              <div className="absolute -right-12 -top-12 h-48 w-48 rounded-full bg-brand-gold/10 blur-3xl" />
              <div className="absolute -bottom-12 -left-12 h-48 w-48 rounded-full bg-brand-teal/10 blur-3xl" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

