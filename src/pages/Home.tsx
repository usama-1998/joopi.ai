import React, { useState } from 'react';
import { Icon } from '@iconify/react';
import type { FormField } from '../types';
import { Navigation } from '../components/Navigation';
import { HeroSection } from '../components/HeroSection';
import { LogoCloud } from '../components/LogoCloud';
import { UseCases } from '../components/UseCases';
import { ScrollingFeatures } from '../components/ScrollingFeatures';
import { WorkflowSteps } from '../components/WorkflowSteps';
import { Testimonial } from '../components/Testimonial';
import { FAQAccordion } from '../components/FAQAccordion';
import { PopularForms } from '../components/PopularForms';
import { Footer } from '../components/Footer';

const Home: React.FC = () => {
  // State Variables
  const [selectedLanguage, setSelectedLanguage] = useState<string>("EN");
  const [activeFaqIndex, setActiveFaqIndex] = useState<number | null>(null);

  // Event Handlers
  const handleLanguageChange = () => {
    setSelectedLanguage(prev => prev === "EN" ? "ES" : "EN");
  };

  const toggleFaq = (index: number) => {
    setActiveFaqIndex(prev => prev === index ? null : index);
  };

  const scrollToWorkspace = () => {
    const element = document.getElementById('workspace-section');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen w-full bg-background text-foreground flex flex-col relative font-sans overflow-hidden">
      {/* Decorative Line Patterns (Full Page) */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-[6px] md:w-[38px] lg:w-[52px] xl:w-[68px] border-r border-[#262626] bg-[repeating-linear-gradient(135deg,transparent_0px,transparent_8px,#262626_8px,#262626_9px)] bg-[#000000] z-40"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-[6px] md:w-[38px] lg:w-[52px] xl:w-[68px] border-l border-[#262626] bg-[repeating-linear-gradient(-135deg,transparent_0px,transparent_8px,#262626_8px,#262626_9px)] bg-[#000000] z-40"></div>

      <Navigation 
        selectedLanguage={selectedLanguage} 
        onLanguageChange={handleLanguageChange} 
      />

      <header className="relative border-b border-border bg-card px-6 pt-6 lg:pt-8 pb-16 overflow-hidden">
        {/* Local decorative patterns moved to root */}

        <HeroSection onTryFreeClick={scrollToWorkspace} />
      </header>

      <UseCases />
      
      <WorkflowSteps />

      <Footer />
    </div>
  );
};

export default Home;
