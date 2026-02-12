import React from "react";
import Link from "next/link";

const products = [
  {
    id: "qaqc",
    name: "LogiQore Reporter",
    badge: "QAQC automation",
    href: "/products/reporter",
    description: [
      "Upload assay and pXRF data from labs or databases.",
      "Generate control charts, bias plots, duplicates stats.",
      "Export figures and tables ready to drop into JORC QAQC reports.",
    ],
  },
  {
    id: "database",
    name: "LogiQore Database",
    badge: "Geology data platform",
    description: [
      "Drillhole, sample, assay and QAQC tables with validation.",
      "Integration points for Leapfrog, ioGAS, ArcGIS, mine planning tools.",
      "Audit trails and AI-ready schema.",
    ],
  },
  {
    id: "autochem",
    name: "LogiQore AutoChem",
    badge: "Lithogeochemistry engine",
    description: [
      "Geochemical cleaning/merging, ternary/XY diagram classification.",
      "Interval interpretation from point data.",
      "ML-ready workflows for automated rock typing.",
    ],
  },
];

export function ProductsSection() {
  return (
    <section id="products" className="py-20 md:py-32 bg-brand-dark relative">
       {/* Subtle grid background maybe? Keeping it clean for now but adding gradient */}
       <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-brand-teal/5 via-brand-dark to-brand-dark pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            The Product Suite
          </h2>
          <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
             Purpose-built tools that work together to streamline your geological workflow.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {products.map((product) => (
            <div
              key={product.id}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-8 transition-all hover:border-brand-gold/50 hover:bg-white/[0.07] hover:shadow-[0_0_30px_rgba(251,191,36,0.1)]"
            >
              <div className="mb-4 inline-flex rounded-full bg-brand-gold/10 px-3 py-1 text-xs font-medium text-brand-gold ring-1 ring-inset ring-brand-gold/20">
                {product.badge}
              </div>
              <h3 className="mb-4 text-xl font-bold text-white group-hover:text-brand-gold transition-colors">
                {product.name}
              </h3>
              <ul className="space-y-3 text-sm text-gray-400">
                {product.description.map((point, index) => (
                  <li key={index} className="flex items-start">
                    <span className="mr-2 mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-brand-teal" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
              {product.href ? (
                <Link
                  href={product.href}
                  className="mt-6 inline-flex h-10 items-center justify-center rounded-full bg-brand-gold px-5 text-sm font-semibold text-brand-dark transition-all hover:bg-brand-gold-glow hover:shadow-[0_0_16px_rgba(251,191,36,0.35)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold focus-visible:ring-offset-2 focus-visible:ring-offset-brand-dark"
                >
                  Open Beta Page
                </Link>
              ) : null}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
