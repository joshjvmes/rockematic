
import React, { useEffect } from 'react';
import NavigationHeader from '@/components/NavigationHeader';
import Footer from '@/components/Footer';
import { FileText, Shield } from 'lucide-react';

const Terms = () => {
  useEffect(() => {
    document.title = "Terms of Service | RocketNow";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'RocketNow Terms of Service. Read about our terms and conditions for using our harmonic growth engine services.');
    }
  }, []);

  return (
    <div className="min-h-screen">
      <NavigationHeader />
      
      <main className="container mx-auto px-6 pt-32 pb-20">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center gap-2 mb-8 text-harmony-medium">
            <FileText className="h-8 w-8" />
            <h1 className="text-4xl font-serif font-bold">Terms of Service</h1>
          </div>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-muted-foreground mb-8">
              Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
            </p>

            <section className="mb-10">
              <h2 className="text-2xl font-serif font-semibold mb-4">1. Agreement to Terms</h2>
              <p>By accessing or using RocketNow's services, you agree to be bound by these Terms of Service. If you disagree with any part of the terms, you may not access our services.</p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-serif font-semibold mb-4">2. Use License</h2>
              <p>Permission is granted to temporarily access RocketNow's services for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:</p>
              <ul className="list-disc pl-6 mt-4 space-y-2">
                <li>Modify or copy the materials</li>
                <li>Use the materials for any commercial purpose</li>
                <li>Transfer the materials to another person or "mirror" the materials on any other server</li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-serif font-semibold mb-4">3. Service Eligibility</h2>
              <p>To be eligible to use RocketNow's services, you must be at least 18 years old and capable of forming legally binding contracts. You are responsible for maintaining the confidentiality of your account information.</p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-serif font-semibold mb-4">4. Disclaimer</h2>
              <p>RocketNow's services are provided "as is". We make no warranties, expressed or implied, and hereby disclaim and negate all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.</p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-serif font-semibold mb-4">5. Limitations</h2>
              <p>In no event shall RocketNow or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use our services.</p>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Terms;
