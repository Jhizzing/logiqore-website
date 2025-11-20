import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { ProductsSection } from "@/components/ProductsSection";
import { WhySection } from "@/components/WhySection";
import { ForGeologistsSection } from "@/components/ForGeologistsSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-brand-dark text-white selection:bg-brand-gold selection:text-brand-dark">
      <Header />
      <Hero />
      <ProductsSection />
      <WhySection />
      <ForGeologistsSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
