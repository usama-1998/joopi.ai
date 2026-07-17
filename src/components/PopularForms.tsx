import React from 'react';
import { Icon } from '@iconify/react';

export const PopularForms: React.FC = () => {
  return (
    <>
      <style>{`
        .pricing-clip {
          --pattern-w: 30px;
          clip-path: polygon(
            0 0, 
            var(--pattern-w) 0, 
            calc(var(--pattern-w) + 40px) 40px, 
            calc(100% - var(--pattern-w) - 40px) 40px, 
            calc(100% - var(--pattern-w)) 0, 
            100% 0, 
            100% 100%, 
            0 100%
          );
        }
        @media (min-width: 768px) { .pricing-clip { --pattern-w: 38px; } }
        @media (min-width: 1024px) { .pricing-clip { --pattern-w: 52px; } }
        @media (min-width: 1280px) { .pricing-clip { --pattern-w: 68px; } }
      `}</style>
      <section id="pricing" className="relative z-50 bg-[#0d1614] -mt-[40px] pt-[120px] pb-[140px] pricing-clip font-sans">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col items-center justify-center text-center gap-4 mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/20 bg-primary/5 text-primary mb-2">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            <span className="text-[12px] font-bold uppercase tracking-widest">Pricing Plans</span>
          </div>
          <h2 className="font-heading text-4xl md:text-5xl font-bold leading-tight text-white tracking-tight">
            Simple Pricing, <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-green-500">Done For You</span>
          </h2>
          <p className="text-[16px] md:text-[18px] text-white/70 max-w-2xl leading-relaxed mt-2">
            We offer transparent pricing that scales with your business. Choose a plan, and our team will build, integrate, and manage your AI sales agents from day one.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto perspective-1000">
          
          {/* Tier 1: Early Access */}
          <div className="group relative bg-[#101b19]/80 backdrop-blur-xl border border-white/10 rounded-[24px] p-8 hover:border-primary/40 transition-all duration-500 flex flex-col transform-style-3d hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(74,222,128,0.1)]">
            <div className="mb-8">
              <h3 className="font-heading font-bold text-xl text-white mb-2 flex items-center gap-2.5">
                <Icon icon="lucide:rocket" className="text-2xl text-primary" />
                Early Access
              </h3>
              <p className="text-white/60 text-[14px]">Perfect for small teams ready to automate lead response.</p>
            </div>
            
            <div className="mb-8">
              <div className="flex items-end gap-1 mb-1">
                <span className="text-4xl font-black text-white">$299</span>
                <span className="text-white/50 text-[15px] font-medium mb-1">/mo</span>
              </div>
              <p className="text-primary text-[13px] font-semibold">+ one-time setup fee</p>
            </div>

            <ul className="space-y-4 mb-10 flex-1">
              <li className="flex items-start gap-3">
                <Icon icon="lucide:check-circle-2" className="text-primary text-lg shrink-0 mt-0.5" />
                <span className="text-[14.5px] text-white/80">Alex Voice Agent (Basic)</span>
              </li>
              <li className="flex items-start gap-3">
                <Icon icon="lucide:check-circle-2" className="text-primary text-lg shrink-0 mt-0.5" />
                <span className="text-[14.5px] text-white/80">Jennifer SMS Agent (Basic)</span>
              </li>
              <li className="flex items-start gap-3">
                <Icon icon="lucide:check-circle-2" className="text-primary text-lg shrink-0 mt-0.5" />
                <span className="text-[14.5px] text-white/80">Standard CRM Sync</span>
              </li>
              <li className="flex items-start gap-3">
                <Icon icon="lucide:check-circle-2" className="text-primary text-lg shrink-0 mt-0.5" />
                <span className="text-[14.5px] text-white/80">Email Support</span>
              </li>
            </ul>

            <button className="w-full py-4 rounded-xl font-bold text-[15px] transition-all bg-white/5 text-white hover:bg-white/10 border border-white/10 group-hover:border-white/20">
              Get Started
            </button>
          </div>

          {/* Tier 2: Growth (Most Popular) */}
          <div className="group relative bg-gradient-to-b from-[#162a24] to-[#101b19] backdrop-blur-xl border border-primary/50 rounded-[24px] p-8 transition-all duration-500 flex flex-col transform-style-3d md:scale-105 shadow-[0_0_30px_rgba(74,222,128,0.15)] hover:shadow-[0_0_50px_rgba(74,222,128,0.25)] z-10">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-primary to-green-500 text-[#0d1614] text-[11px] font-black px-4 py-1.5 rounded-full uppercase tracking-widest shadow-[0_0_15px_rgba(74,222,128,0.5)] flex items-center gap-1.5">
              <Icon icon="lucide:flame" className="text-sm" />
              Most Popular
            </div>
            
            <div className="mb-8 mt-2">
              <h3 className="font-heading font-bold text-xl text-white mb-2 flex items-center gap-2.5">
                <Icon icon="lucide:zap" className="text-2xl text-primary" />
                Growth
              </h3>
              <p className="text-white/60 text-[14px]">Everything you need to fully automate your sales pipeline.</p>
            </div>
            
            <div className="mb-8">
              <div className="flex items-end gap-1 mb-1">
                <span className="text-4xl font-black text-white">$999</span>
                <span className="text-white/50 text-[15px] font-medium mb-1">/mo</span>
              </div>
              <p className="text-primary text-[13px] font-semibold">+ done-for-you setup</p>
            </div>

            <ul className="space-y-4 mb-10 flex-1">
              <li className="flex items-start gap-3">
                <Icon icon="lucide:check-circle-2" className="text-primary text-lg shrink-0 mt-0.5" />
                <span className="text-[14.5px] text-white">Alex & Jennifer (Advanced)</span>
              </li>
              <li className="flex items-start gap-3">
                <Icon icon="lucide:check-circle-2" className="text-primary text-lg shrink-0 mt-0.5" />
                <span className="text-[14.5px] text-white">Done-For-You Setup</span>
              </li>
              <li className="flex items-start gap-3">
                <Icon icon="lucide:check-circle-2" className="text-primary text-lg shrink-0 mt-0.5" />
                <span className="text-[14.5px] text-white">Deep CRM & Calendar Sync</span>
              </li>
              <li className="flex items-start gap-3">
                <Icon icon="lucide:check-circle-2" className="text-primary text-lg shrink-0 mt-0.5" />
                <span className="text-[14.5px] text-white">Objection Handling Tuning</span>
              </li>
              <li className="flex items-start gap-3">
                <Icon icon="lucide:check-circle-2" className="text-primary text-lg shrink-0 mt-0.5" />
                <span className="text-[14.5px] text-white">Priority 24/7 Support</span>
              </li>
            </ul>

            <button className="w-full py-4 rounded-xl font-bold text-[15px] transition-all bg-primary text-[#0d1614] hover:bg-green-400 shadow-[0_0_20px_rgba(74,222,128,0.3)] hover:shadow-[0_0_30px_rgba(74,222,128,0.5)] transform hover:-translate-y-1">
              Start Scaling Now
            </button>
          </div>

          {/* Tier 3: Enterprise */}
          <div className="group relative bg-[#101b19]/80 backdrop-blur-xl border border-white/10 rounded-[24px] p-8 hover:border-primary/40 transition-all duration-500 flex flex-col transform-style-3d hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(74,222,128,0.1)]">
            <div className="mb-8">
              <h3 className="font-heading font-bold text-xl text-white mb-2 flex items-center gap-2.5">
                <Icon icon="lucide:building-2" className="text-2xl text-primary" />
                Enterprise
              </h3>
              <p className="text-white/60 text-[14px]">Custom builds for high-volume sales organizations.</p>
            </div>
            
            <div className="mb-8">
              <div className="flex items-end gap-1 mb-1">
                <span className="text-4xl font-black text-white">Custom</span>
              </div>
              <p className="text-primary text-[13px] font-semibold">Tailored pricing</p>
            </div>

            <ul className="space-y-4 mb-10 flex-1">
              <li className="flex items-start gap-3">
                <Icon icon="lucide:check-circle-2" className="text-primary text-lg shrink-0 mt-0.5" />
                <span className="text-[14.5px] text-white/80">Custom Agent Workflows</span>
              </li>
              <li className="flex items-start gap-3">
                <Icon icon="lucide:check-circle-2" className="text-primary text-lg shrink-0 mt-0.5" />
                <span className="text-[14.5px] text-white/80">Bespoke Integrations</span>
              </li>
              <li className="flex items-start gap-3">
                <Icon icon="lucide:check-circle-2" className="text-primary text-lg shrink-0 mt-0.5" />
                <span className="text-[14.5px] text-white/80">Dedicated Success Manager</span>
              </li>
              <li className="flex items-start gap-3">
                <Icon icon="lucide:check-circle-2" className="text-primary text-lg shrink-0 mt-0.5" />
                <span className="text-[14.5px] text-white/80">On-Premises Options</span>
              </li>
            </ul>

            <button className="w-full py-4 rounded-xl font-bold text-[15px] transition-all bg-white/5 text-white hover:bg-white/10 border border-white/10 group-hover:border-white/20">
              Contact Sales
            </button>
          </div>
          
        </div>
      </div>
      
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-primary/5 blur-[120px] rounded-full pointer-events-none z-0"></div>
    </section>
    </>
  );
};
