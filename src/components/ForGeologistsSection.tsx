import React from "react";

export function ForGeologistsSection() {
  return (
    <section id="geologists" className="py-20 md:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          {/* Left Column */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                For geologists, by a geologist.
              </h2>
              <p className="text-lg text-gray-400">
                Developed by someone doing real resource and exploration geology, our focus is ruthlessly reducing the time from raw data receipt to confident decision-making.
              </p>
            </div>

            <ul className="space-y-4">
              {[
                "Instant QAQC reviews to catch lab errors early.",
                "Clean, validated tables ready for resource updates in minutes.",
                "Automated classification so you can focus on interpretation.",
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-brand-gold/20 text-brand-gold">
                    <svg
                      className="h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2.5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <span className="text-gray-300">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Column - Roadmap Card */}
          <div className="relative mx-auto w-full max-w-md lg:mx-0 lg:ml-auto">
            <div className="rounded-2xl border border-brand-teal/20 bg-brand-dark/50 p-8 backdrop-blur-sm">
              <div className="mb-6 flex items-center justify-between">
                <h3 className="text-xl font-bold text-white">Current Roadmap</h3>
                <span className="rounded-full bg-brand-teal/10 px-2.5 py-0.5 text-xs font-semibold text-brand-teal">
                  Live Status
                </span>
              </div>

              <div className="relative space-y-8 pl-2">
                {/* Vertical Line */}
                <div className="absolute left-[11px] top-2 h-[calc(100%-16px)] w-px bg-white/10" />

                {[
                  { title: "QAQC Reporter", status: "Beta", current: true },
                  { title: "AutoChem", status: "Early Access", current: false },
                  { title: "Database", status: "Launch Coming Soon", current: false },
                ].map((item, i) => (
                  <div key={i} className="relative flex items-center gap-4">
                    <div
                      className={`relative z-10 h-6 w-6 rounded-full border-4 ${
                        item.current
                          ? "border-brand-teal bg-brand-dark"
                          : "border-brand-dark bg-white/20"
                      }`}
                    />
                    <div className="flex flex-col">
                      <span className={`font-semibold ${item.current ? 'text-white' : 'text-gray-400'}`}>
                        {item.title}
                      </span>
                      <span className="text-xs text-brand-gold">
                        {item.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Decorative glow */}
            <div className="absolute -right-10 -top-10 -z-10 h-64 w-64 rounded-full bg-brand-teal/5 blur-3xl" />
          </div>
        </div>
      </div>
    </section>
  );
}

