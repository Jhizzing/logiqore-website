import Link from "next/link";

export function TrueThickPromo() {
    return (
        <section className="py-20 relative overflow-hidden">
            <div className="absolute inset-0 bg-brand-gold/5 pointer-events-none" />
            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="rounded-3xl border border-brand-gold/30 bg-white/5 p-8 md:p-12 backdrop-blur-sm shadow-[0_0_50px_rgba(251,191,36,0.1)] flex flex-col md:flex-row items-center justify-between gap-8">
                    <div className="max-w-2xl text-center md:text-left">
                        <div className="inline-flex rounded-full bg-brand-gold/10 px-3 py-1 text-xs font-semibold text-brand-gold ring-1 ring-inset ring-brand-gold/20 mb-4">
                            Free Geological Utility
                        </div>
                        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl mb-4">
                            Try <span className="text-brand-gold">TrueThick</span> Now
                        </h2>
                        <p className="text-lg text-gray-400">
                            Modern Structural Orientation & True Thickness Analysis. Professional accuracy for geological logging, right in your browser.
                        </p>
                    </div>
                    <div className="flex-shrink-0">
                        <Link
                            href="/utilities/truethick"
                            className="inline-flex h-14 items-center justify-center rounded-full bg-brand-gold px-10 text-lg font-bold text-brand-dark transition-all hover:bg-brand-gold-glow hover:shadow-[0_0_30px_rgba(251,191,36,0.4)] hover:scale-105 active:scale-95"
                        >
                            Launch TrueThick
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
