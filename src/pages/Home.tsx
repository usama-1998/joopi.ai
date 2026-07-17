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
      <div className="pointer-events-none absolute inset-y-0 left-0 w-[6px] md:w-[38px] lg:w-[52px] xl:w-[68px] border-r border-[#31403E] bg-[repeating-linear-gradient(135deg,transparent_0px,transparent_8px,#31403E_8px,#31403E_9px)] bg-[#14221F] z-40"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-[6px] md:w-[38px] lg:w-[52px] xl:w-[68px] border-l border-[#31403E] bg-[repeating-linear-gradient(-135deg,transparent_0px,transparent_8px,#31403E_8px,#31403E_9px)] bg-[#14221F] z-40"></div>

      <Navigation 
        selectedLanguage={selectedLanguage} 
        onLanguageChange={handleLanguageChange} 
      />

      <header className="relative border-b border-border bg-card px-6 pt-16 lg:pt-24 pb-16 overflow-hidden">
        {/* Local decorative patterns moved to root */}

        <HeroSection onTryFreeClick={scrollToWorkspace} />
      </header>

      <LogoCloud />

      <UseCases />

      {/* Scrolling Features Section */}
      <ScrollingFeatures onActionClick={scrollToWorkspace} />

      <WorkflowSteps />

      {/* Feature Grid Section */}
      <section className="py-20 border-b border-border bg-card/20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            <div className="space-y-3">
              <h3 className="font-heading text-lg font-bold flex items-center gap-2">
                <Icon icon="lucide:clock" className="text-primary" />24/7 Availability
              </h3>
              <p className="text-sm text-muted-foreground">Our AI agents work around the clock, ensuring you never miss a lead, even on weekends and holidays.</p>
            </div>
            <div className="space-y-3">
              <h3 className="font-heading text-lg font-bold flex items-center gap-2">
                <Icon icon="lucide:message-square" className="text-primary" />Human-like AI
              </h3>
              <p className="text-sm text-muted-foreground">Prospects won't even know they're talking to AI. Our systems engage naturally to qualify and convert.</p>
            </div>
            <div className="space-y-3">
              <h3 className="font-heading text-lg font-bold flex items-center gap-2">
                <Icon icon="lucide:layers" className="text-primary" />Seamless CRM Sync
              </h3>
              <p className="text-sm text-muted-foreground">Deep integrations with your existing tools. Leads, appointments, and transcripts sync directly to your CRM.</p>
            </div>
            <div className="space-y-3">
              <h3 className="font-heading text-lg font-bold flex items-center gap-2">
                <Icon icon="lucide:shield-check" className="text-primary" />Fully Managed
              </h3>
              <p className="text-sm text-muted-foreground">We don't just hand you software. We build, monitor, and optimize your entire AI infrastructure for you.</p>
            </div>
          </div>
          <div className="text-center pt-8">
              <button 
                onClick={scrollToWorkspace}
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-4 rounded-full transition-all inline-flex items-center gap-2 cursor-pointer"
              >
                Start Scaling with Joopi AI
                <Icon icon="lucide:arrow-right" className="text-lg" />
              </button>
          </div>
        </div>
      </section>

      <Testimonial />

      <FAQAccordion activeFaqIndex={activeFaqIndex} onToggleFaq={toggleFaq} />

      <PopularForms />

      <Footer />
    </div>
  );
};

export default Home;
