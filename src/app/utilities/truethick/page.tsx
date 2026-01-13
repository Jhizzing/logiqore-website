import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "TrueThick Utility | LogiQore",
    description: "Modern Structural Orientation & True Thickness Analysis. Professional accuracy for geological logging.",
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
                        <p className="mx-auto max-w-2xl text-lg text-gray-400">
                            Modern Structural Orientation & True Thickness Analysis. Professional accuracy for geological logging.
                        </p>
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
