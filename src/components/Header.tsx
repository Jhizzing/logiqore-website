import Link from "next/link";
import { LogoMark } from "./LogoMark";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-brand-dark/80 backdrop-blur-md supports-[backdrop-filter]:bg-brand-dark/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2 transition-opacity hover:opacity-90">
          <LogoMark className="h-16 w-16" />
        </Link>

        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-300">
          <Link href="#products" className="transition-colors hover:text-brand-gold hover:drop-shadow-[0_0_8px_rgba(251,191,36,0.5)]">
            Products
          </Link>
          <Link href="#why" className="transition-colors hover:text-brand-gold hover:drop-shadow-[0_0_8px_rgba(251,191,36,0.5)]">
            Why LogiQore
          </Link>
          <Link href="#geologists" className="transition-colors hover:text-brand-gold hover:drop-shadow-[0_0_8px_rgba(251,191,36,0.5)]">
            For Geologists
          </Link>
        </nav>

        <div className="flex items-center gap-4">
          <Link
            href="#contact"
            className="hidden rounded-full bg-brand-gold px-5 py-2 text-sm font-semibold text-brand-dark transition-all hover:bg-brand-gold-glow hover:shadow-[0_0_15px_rgba(251,191,36,0.4)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold focus-visible:ring-offset-2 focus-visible:ring-offset-brand-dark md:inline-flex"
          >
            Request early access
          </Link>
          {/* Mobile Menu Placeholder - can be expanded if needed, simplified for MVP */}
          <Link 
            href="#contact"
            className="md:hidden text-sm font-medium text-brand-gold"
          >
            Get Access
          </Link>
        </div>
      </div>
    </header>
  );
}

