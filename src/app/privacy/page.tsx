import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export default function PrivacyPage() {
  return (
    <main className="flex min-h-screen flex-col bg-brand-dark text-white">
      <Header />
      <section className="flex-grow py-20 px-4 md:px-6">
        <div className="container mx-auto max-w-3xl">
          <h1 className="text-4xl font-bold mb-8 text-brand-gold">Privacy Policy</h1>
          <div className="prose prose-invert max-w-none space-y-6 text-gray-300">
            <p>Last updated: February 26, 2026</p>
            <p>
              At LogiQore, we take your privacy seriously. This Privacy Policy explains how we collect, use, and protect your personal information.
            </p>
            <h2 className="text-2xl font-semibold text-white">1. Information We Collect</h2>
            <p>
              We collect information that you provide directly to us through our contact form, including your email address, role, company, and any comments you provide. We also collect anonymous usage data via Vercel Analytics to improve our website performance.
            </p>
            <h2 className="text-2xl font-semibold text-white">2. How We Use Your Information</h2>
            <p>
              We use your contact information to respond to your inquiries and provide updates about our products and services. Usage data is used for internal analysis only.
            </p>
            <h2 className="text-2xl font-semibold text-white">3. Data Security</h2>
            <p>
              We implement industry-standard security measures to protect your data. However, no method of transmission over the Internet is 100% secure.
            </p>
            <h2 className="text-2xl font-semibold text-white">4. Your Rights</h2>
            <p>
              You have the right to access, correct, or delete your personal information. Please contact us at paz@logiqore.io for any requests.
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
