import Link from "next/link";
import { LogoMark } from "./LogoMark";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-brand-dark py-12">
      <div className="container mx-auto px-4 md:px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2">
          <LogoMark className="h-20 w-20 opacity-70" />
        </div>
        
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4 text-sm font-medium text-gray-500">
          <Link href="/#products" className="transition-colors hover:text-brand-gold">Products</Link>
          <Link href="/products/reporter" className="transition-colors hover:text-brand-gold">Reporter Beta</Link>
          <Link href="/utilities/truethick" className="transition-colors hover:text-brand-gold">Utilities</Link>
          <Link href="/#contact" className="transition-colors hover:text-brand-gold">Contact</Link>
        </div>
        
        <p className="text-sm text-gray-500 text-center md:text-right">
          Software for QAQC, geology databases, and lithogeochemistry.
          <br className="hidden md:block" />
          &copy; {new Date().getFullYear()} LogiQore.
          {" "}
          <Link href="/privacy" className="hover:text-brand-gold underline underline-offset-4">Privacy</Link>
          {" | "}
          <Link href="/terms" className="hover:text-brand-gold underline underline-offset-4">Terms</Link>
        </p>
      </div>
    </footer>
  );
}

