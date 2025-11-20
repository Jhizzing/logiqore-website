import React from "react";

export function WhySection() {
  return (
    <section id="why" className="py-20 md:py-32 border-t border-white/5 bg-white/[0.02]">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-start">
          {/* Left Column */}
          <div className="space-y-6">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Built for the realities of exploration & mine geology.
            </h2>
            <div className="space-y-4 text-lg text-gray-400">
              <p>
                LogiQore isn&apos;t generic data software retargeted for geology. It&apos;s designed from the ground up for the high-pressure environments of WA goldfields and similar remote operations.
              </p>
              <p>
                We understand the chaos of night-shift drilling, the critical nature of rapid QAQC reviews, and the complexity of merging assay data from multiple sources. Our tools are built to handle the messy reality of field data so you can focus on finding ore.
              </p>
            </div>
          </div>

          {/* Right Column - Value Tiles */}
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              {
                title: "Geology-first design",
                text: "Workflows that match how geologists actually think and operate in the field.",
              },
              {
                title: "AI-ready stack",
                text: "Structured data schemas designed to feed machine learning models from day one.",
              },
              {
                title: "Transparent & controllable",
                text: "No black boxes. See exactly how your data is processed and transformed.",
              },
              {
                title: "Built to integrate",
                text: "Seamlessly connects with Leapfrog, Micromine, and other industry standards.",
              },
            ].map((tile, index) => (
              <div
                key={index}
                className="rounded-xl border border-white/10 bg-brand-dark p-6 shadow-sm transition-all hover:border-brand-teal/30 hover:bg-brand-dark/80"
              >
                <h3 className="mb-2 text-lg font-semibold text-white">
                  {tile.title}
                </h3>
                <p className="text-sm text-gray-400 leading-relaxed">
                  {tile.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

