import React from "react";
import { LogoMark } from "./LogoMark";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-brand-dark py-12">
      <div className="container mx-auto px-4 md:px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2">
          <LogoMark className="h-20 w-20 opacity-70" />
        </div>
        
        <p className="text-sm text-gray-500 text-center md:text-right">
          Software for QAQC, geology databases, and lithogeochemistry.
          <br className="hidden md:block" />
          &copy; {new Date().getFullYear()} LogiQore. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

