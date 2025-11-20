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
      </div>
    </section>
  );
}

