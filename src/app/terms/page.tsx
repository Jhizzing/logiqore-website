import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export default function TermsPage() {
  return (
    <main className="flex min-h-screen flex-col bg-brand-dark text-white">
      <Header />
      <section className="flex-grow py-20 px-4 md:px-6">
        <div className="container mx-auto max-w-3xl">
          <h1 className="text-4xl font-bold mb-8 text-brand-gold">Terms of Service</h1>
          <div className="prose prose-invert max-w-none space-y-6 text-gray-300">
            <p>Last updated: February 26, 2026</p>
            <p>
              Welcome to LogiQore. By accessing our website, you agree to comply with these Terms of Service.
            </p>
            <h2 className="text-2xl font-semibold text-white">1. Use of the Site</h2>
            <p>
              The content on this site is for informational purposes only. You may use our free utilities, such as TrueThick, for professional or personal geological analysis.
            </p>
            <h2 className="text-2xl font-semibold text-white">2. Intellectual Property</h2>
            <p>
              All content and software on this site are the property of LogiQore. You may not reproduce or distribute any part of the site without our permission.
            </p>
            <h2 className="text-2xl font-semibold text-white">3. Disclaimer of Warranties</h2>
            <p>
              Our services are provided &quot;as is&quot; without any warranties. We are not liable for any damages resulting from the use of our tools.
            </p>
            <h2 className="text-2xl font-semibold text-white">4. Changes to Terms</h2>
            <p>
              We may update these terms from time to time. Your continued use of the site signifies your acceptance of any changes.
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
