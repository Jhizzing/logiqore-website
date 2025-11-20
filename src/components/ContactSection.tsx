"use client";

import React, { useState } from "react";

export function ContactSection() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted");
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-brand-dark/90 pointer-events-none" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Ready to modernize your workflow?
          </h2>
          <p className="mt-4 text-lg text-gray-400">
            Join the early access list to get priority access to LogiQore products as they launch.
          </p>
        </div>

        <div className="mx-auto mt-12 max-w-xl">
          {submitted ? (
            <div className="rounded-2xl border border-brand-gold/20 bg-brand-gold/5 p-8 text-center">
              <h3 className="text-xl font-bold text-white">Thanks for your interest!</h3>
              <p className="mt-2 text-gray-400">We&apos;ll be in touch shortly with more information.</p>
              <button 
                onClick={() => setSubmitted(false)}
                className="mt-6 text-sm text-brand-gold hover:underline"
              >
                Send another response
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6 rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300">
                  Email address <span className="text-brand-gold">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  className="mt-2 block w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-gray-500 focus:border-brand-gold focus:ring-brand-gold sm:text-sm focus:outline-none focus:ring-1"
                  placeholder="geologist@company.com"
                />
              </div>

              <div>
                <label htmlFor="role" className="block text-sm font-medium text-gray-300">
                  Role / Company <span className="text-gray-500">(Optional)</span>
                </label>
                <input
                  type="text"
                  id="role"
                  className="mt-2 block w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-gray-500 focus:border-brand-gold focus:ring-brand-gold sm:text-sm focus:outline-none focus:ring-1"
                  placeholder="Senior Geologist at Mining Corp"
                />
              </div>

              <div>
                <label htmlFor="comments" className="block text-sm font-medium text-gray-300">
                  Comments <span className="text-gray-500">(Optional)</span>
                </label>
                <textarea
                  id="comments"
                  rows={4}
                  className="mt-2 block w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-gray-500 focus:border-brand-gold focus:ring-brand-gold sm:text-sm focus:outline-none focus:ring-1"
                  placeholder="Tell us about your current challenges..."
                />
              </div>

              <button
                type="submit"
                className="w-full rounded-full bg-brand-gold px-8 py-3.5 text-base font-bold text-brand-dark transition-all hover:bg-brand-gold-glow hover:shadow-[0_0_20px_rgba(251,191,36,0.3)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold focus-visible:ring-offset-2 focus-visible:ring-offset-brand-dark"
              >
                Request Early Access
              </button>
            </form>
          )}
        </div>

        <div className="mt-16 border-t border-white/10 pt-12">
          <div className="flex flex-col items-center justify-center gap-6 text-center">
            <h3 className="text-lg font-semibold text-white">Contact Us directly</h3>
            <div className="flex flex-col gap-6 sm:flex-row sm:gap-12">
              <a 
                href="mailto:paz@logiqore.io" 
                className="group flex items-center gap-3 text-gray-400 transition-colors hover:text-brand-gold"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5 ring-1 ring-white/10 transition-all group-hover:bg-brand-gold/10 group-hover:ring-brand-gold/30">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                    <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                    <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
                  </svg>
                </div>
                <span className="text-lg">paz@logiqore.io</span>
              </a>

              <a 
                href="tel:0472520000" 
                className="group flex items-center gap-3 text-gray-400 transition-colors hover:text-brand-gold"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5 ring-1 ring-white/10 transition-all group-hover:bg-brand-gold/10 group-hover:ring-brand-gold/30">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                    <path fillRule="evenodd" d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 4.5z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-lg">0472 520 000</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

