
import React, { useEffect } from 'react';
import NavigationHeader from '@/components/NavigationHeader';
import Footer from '@/components/Footer';
import { Shield, Lock } from 'lucide-react';

const Privacy = () => {
  useEffect(() => {
    document.title = "Privacy Policy | RocketNow";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'RocketNow Privacy Policy. Learn how we collect, use, and protect your personal information.');
    }
  }, []);

  return (
    <div className="min-h-screen">
      <NavigationHeader />
      
      <main className="container mx-auto px-6 pt-32 pb-20">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center gap-2 mb-8 text-harmony-medium">
            <Shield className="h-8 w-8" />
            <h1 className="text-4xl font-serif font-bold">Privacy Policy</h1>
          </div>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-muted-foreground mb-8">
              Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
            </p>

            <section className="mb-10">
              <h2 className="text-2xl font-serif font-semibold mb-4">1. Information We Collect</h2>
              <p>We collect information that you provide directly to us when using our services, including:</p>
              <ul className="list-disc pl-6 mt-4 space-y-2">
                <li>Contact information (name, email, phone number)</li>
                <li>Business information provided in applications</li>
                <li>Communication preferences</li>
                <li>Payment information (processed securely through our payment providers)</li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-serif font-semibold mb-4">2. How We Use Your Information</h2>
              <p>We use the information we collect to:</p>
              <ul className="list-disc pl-6 mt-4 space-y-2">
                <li>Provide, maintain, and improve our services</li>
                <li>Process your transactions and send you related information</li>
                <li>Send you technical notices, updates, and support messages</li>
                <li>Respond to your comments and questions</li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-serif font-semibold mb-4">3. Information Sharing</h2>
              <p>We do not sell, trade, or rent your personal information to third parties. We may share your information only in the following circumstances:</p>
              <ul className="list-disc pl-6 mt-4 space-y-2">
                <li>With your consent</li>
                <li>To comply with legal obligations</li>
                <li>To protect our rights and properties</li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-serif font-semibold mb-4">4. Security</h2>
              <p>We take reasonable measures to help protect information about you from loss, theft, misuse, unauthorized access, disclosure, alteration, and destruction.</p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-serif font-semibold mb-4">5. Your Rights</h2>
              <p>You have the right to access, correct, or delete your personal information. Contact us if you wish to exercise these rights or have any privacy-related questions.</p>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Privacy;
