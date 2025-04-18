
import React from 'react';
import NavigationHeader from '@/components/NavigationHeader';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import RippleBackground from '@/components/RippleBackground';
import { Users, Check } from 'lucide-react';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from '@/components/ui/breadcrumb';

const ResonantLeadership = () => {
  return (
    <div className="min-h-screen">
      <NavigationHeader />
      
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-6">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/services">Services</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink href="/services/resonant-leadership">Resonant Leadership</BreadcrumbLink>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>

          <div className="max-w-4xl mx-auto">
            <div className="mb-12 text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-harmony-light/10 mb-6">
                <Users className="h-8 w-8 text-harmony-medium" />
              </div>
              <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">
                Resonant Leadership
              </h1>
              <p className="text-xl text-muted-foreground">
                Transform your leadership approach to create natural alignment and inspire extraordinary results.
              </p>
            </div>

            <div className="prose prose-lg max-w-none mb-12">
              <p>
                Our Resonant Leadership program helps leaders create harmonious environments 
                where teams naturally align and achieve extraordinary outcomes with minimal friction.
              </p>
              
              <h2>The Leadership Journey</h2>
              <ul>
                <li>Leadership style assessment</li>
                <li>Resonance pattern discovery</li>
                <li>Team alignment strategies</li>
                <li>Vision amplification methods</li>
              </ul>

              <h2>Leadership Outcomes</h2>
              <p>
                Through resonant leadership, achieve:
              </p>
              <ul>
                <li>Enhanced team engagement</li>
                <li>Natural collaboration flow</li>
                <li>Improved innovation</li>
                <li>Sustained high performance</li>
              </ul>
            </div>

            <div className="bg-harmony-deep text-white rounded-2xl p-8 mb-12">
              <h3 className="text-2xl font-serif font-semibold mb-4">
                The Leadership Advantage
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex items-start space-x-3">
                  <Check className="h-5 w-5 text-harmony-light mt-1" />
                  <div>
                    <h4 className="font-medium mb-2">Natural Authority</h4>
                    <p className="text-white/80">Lead without force or friction</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Check className="h-5 w-5 text-harmony-light mt-1" />
                  <div>
                    <h4 className="font-medium mb-2">Team Harmony</h4>
                    <p className="text-white/80">Aligned and engaged teams</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Check className="h-5 w-5 text-harmony-light mt-1" />
                  <div>
                    <h4 className="font-medium mb-2">Vision Clarity</h4>
                    <p className="text-white/80">Compelling direction and purpose</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Check className="h-5 w-5 text-harmony-light mt-1" />
                  <div>
                    <h4 className="font-medium mb-2">Lasting Impact</h4>
                    <p className="text-white/80">Create enduring success</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center">
              <Button 
                size="lg"
                className="bg-harmony-medium hover:bg-harmony-light text-white rounded-full px-8"
              >
                Develop Your Resonance
              </Button>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ResonantLeadership;
