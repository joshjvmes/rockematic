
import React from 'react';
import NavigationHeader from '@/components/NavigationHeader';
import Footer from '@/components/Footer';
import ServicesHero from './services/components/ServicesHero';
import ServicesGrid from './services/components/ServicesGrid';
import FeaturedService from './services/components/FeaturedService';
import PricingSection from './services/components/PricingSection';
import ServicesCtaSection from './services/components/ServicesCtaSection';

const Services = () => {
  return (
    <div className="min-h-screen">
      <NavigationHeader />
      <ServicesHero />
      <ServicesGrid />
      <FeaturedService />
      <PricingSection />
      <ServicesCtaSection />
      <Footer />
    </div>
  );
};

export default Services;
