import React from "react";
import Image from "next/image";

interface LogoMarkProps {
  className?: string;
}

export function LogoMark({ className = "w-8 h-8" }: LogoMarkProps) {
  return (
    <div className={`relative flex items-center justify-center ${className}`} aria-label="LogiQore Logo">
      <Image
        src="/logo.png"
        alt="LogiQore Logo"
        fill
        className="object-contain drop-shadow-[0_0_8px_rgba(251,191,36,0.3)]"
        priority
      />
    </div>
  );
}
