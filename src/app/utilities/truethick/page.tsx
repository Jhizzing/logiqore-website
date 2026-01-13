import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "TrueThick Utility | Structural Orientation & True Thickness Analysis",
    description: "Free geological tool to solve for structural dip, dip direction, and calculate intercept true thickness. Professional accuracy for geological logging.",
    keywords: ["structural dip", "dip direction", "calculate true thickness", "intercept true thickness", "structural orientation", "geological logging tool", "structural geology analysis"],
};

export default function TrueThickPage() {
    return (
        <main className="flex min-h-screen flex-col bg-brand-dark text-white selection:bg-brand-gold selection:text-brand-dark">
            <Header />

            <section className="flex-grow py-20 px-4 md:px-6">
                <div className="container mx-auto max-w-6xl">
                    <div className="mb-12 text-center">
                        <h1 className="mb-4 text-4xl font-bold tracking-tight text-white md:text-5xl lg:text-6xl">
                            TrueThick <span className="text-brand-gold">Utility</span>
                        </h1>
                        <p className="mx-auto max-w-2xl text-lg text-gray-400 mb-8">
                            Professional Structural Orientation & True Thickness Analysis. A modern tool for geologists to solve dip, dip direction, and true thickness from drillhole intercepts.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm text-gray-500 max-w-4xl mx-auto mb-12 text-left">
                            <div className="p-4 rounded-xl border border-white/5 bg-white/[0.02] flex flex-col items-start">
                                <h3 className="font-semibold text-brand-gold mb-2 flex items-center gap-2">
                                    <span className="h-1.5 w-1.5 rounded-full bg-brand-teal" />
                                    Structural Dip
                                </h3>
                                <p>Quickly get structural dip and dip direction from oriented core data for better structural modeling.</p>
                            </div>
                            <div className="p-4 rounded-xl border border-white/5 bg-white/[0.02] flex flex-col items-start">
                                <h3 className="font-semibold text-brand-gold mb-2 flex items-center gap-2">
                                    <span className="h-1.5 w-1.5 rounded-full bg-brand-teal" />
                                    True Thickness
                                </h3>
                                <p>Find intercept true thickness instantly. Essential for defining resource volume and grade distribution.</p>
                            </div>
                            <div className="p-4 rounded-xl border border-white/5 bg-white/[0.02] flex flex-col items-start">
                                <h3 className="font-semibold text-brand-gold mb-2 flex items-center gap-2">
                                    <span className="h-1.5 w-1.5 rounded-full bg-brand-teal" />
                                    Professional Logging
                                </h3>
                                <p>Designed for economic geologists. Streamline your structural logging workflow with industry-standard accuracy.</p>
                            </div>
                        </div>
                    </div>

                    <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-1 backdrop-blur-sm shadow-2xl">
                        <iframe
                            src="https://truethick-57m8oofqscnacn6mhoq4wj.streamlit.app/?embed=true"
                            style={{
                                height: "900px",
                                width: "100%",
                                border: "none",
                                borderRadius: "12px",
                                display: "block",
                            }}
                            title="TrueThick Streamlit App"
                        ></iframe>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
