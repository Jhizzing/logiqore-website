import React from "react";

interface LogoMarkProps {
  className?: string;
}

export function LogoMark({ className = "w-8 h-8" }: LogoMarkProps) {
  return (
    <div className={`relative flex items-center justify-center ${className}`} aria-label="LogiQore Logo">
      {/* Placeholder for FCC Crystal Lattice Logo */}
      <svg
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full text-brand-gold"
      >
        <path
          d="M12 3L20 7.5V16.5L12 21L4 16.5V7.5L12 3Z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="drop-shadow-[0_0_8px_rgba(251,191,36,0.5)]"
        />
        <path
          d="M12 3V12M20 7.5L12 12M4 7.5L12 12M12 21V12"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="opacity-80"
        />
        {/* Internal crystal points/lattice hints */}
        <circle cx="12" cy="12" r="1" fill="currentColor" className="animate-pulse" />
      </svg>
    </div>
  );
}

