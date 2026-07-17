import React from 'react';
import { Icon } from '@iconify/react';

export const PopularForms: React.FC = () => {
  return (
    <>
      <style>{`
        .popular-clip-bottom {
          --pattern-w: 30px;
          clip-path: polygon(
            0 0,
            100% 0,
            100% calc(100% - 40px),
            calc(100% - var(--pattern-w)) calc(100% - 40px), 
            calc(100% - var(--pattern-w) - 40px) 100%, 
            calc(var(--pattern-w) + 40px) 100%, 
            var(--pattern-w) calc(100% - 40px), 
            0 calc(100% - 40px)
          );
        }
        @media (min-width: 768px) { .popular-clip-bottom { --pattern-w: 38px; } }
        @media (min-width: 1024px) { .popular-clip-bottom { --pattern-w: 52px; } }
        @media (min-width: 1280px) { .popular-clip-bottom { --pattern-w: 68px; } }
      `}</style>
      <section className="relative z-50 bg-[#FFFFFF] pt-12 pb-[140px] popular-clip-bottom font-sans">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#202b29] text-white mb-6">
                <Icon icon="lucide:cpu" className="text-sm fill-current" />
                <span className="text-[11px] font-bold uppercase tracking-widest">Pricing Plans</span>
              </div>
              <h2 className="font-heading text-3xl md:text-4xl font-bold leading-tight text-[#101b19] tracking-tight">
                Simple Pricing, Done For You
              </h2>
            </div>
            <p className="text-sm md:text-base text-gray-500 max-w-md leading-relaxed">
              We offer simple pricing that scales with your business. Choose a plan, and our team will build, integrate, and manage your AI sales agents from day one.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            <div className="bg-gray-50/50 p-8 rounded-2xl border border-gray-100">
              <h3 className="font-heading font-bold text-lg text-[#101b19] mb-6 flex items-center gap-2.5">
                <Icon icon="lucide:phone-forwarded" className="text-xl text-primary" />Early Access
              </h3>
              <ul className="space-y-4 mb-6">
                <li><a href="#" className="text-[14.5px] text-gray-600 block">Alex Voice Agent (Basic)</a></li>
                <li><a href="#" className="text-[14.5px] text-gray-600 block">Jennifer SMS Agent (Basic)</a></li>
                <li><a href="#" className="text-[14.5px] text-gray-600 block">Standard CRM Sync</a></li>
              </ul>
              <p className="text-2xl font-bold text-[#101b19]">$299<span className="text-sm text-gray-500 font-normal">/mo</span></p>
            </div>
            <div className="bg-primary/5 p-8 rounded-2xl border border-primary/20 relative shadow-lg">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest">Most Popular</div>
              <h3 className="font-heading font-bold text-lg text-[#101b19] mb-6 flex items-center gap-2.5">
                <Icon icon="lucide:flame" className="text-xl text-primary" />Growth
              </h3>
              <ul className="space-y-4 mb-6">
                <li><a href="#" className="text-[14.5px] text-gray-600 block">Alex & Jennifer (Advanced)</a></li>
                <li><a href="#" className="text-[14.5px] text-gray-600 block">Done-For-You Setup</a></li>
                <li><a href="#" className="text-[14.5px] text-gray-600 block">Deep CRM & Calendar Sync</a></li>
              </ul>
              <p className="text-2xl font-bold text-[#101b19]">$999<span className="text-sm text-gray-500 font-normal">/mo</span></p>
            </div>
            <div className="bg-gray-50/50 p-8 rounded-2xl border border-gray-100">
              <h3 className="font-heading font-bold text-lg text-[#101b19] mb-6 flex items-center gap-2.5">
                <Icon icon="lucide:cog" className="text-xl text-primary" />Enterprise
              </h3>
              <ul className="space-y-4 mb-6">
                <li><a href="#" className="text-[14.5px] text-gray-600 block">Custom Agent Workflows</a></li>
                <li><a href="#" className="text-[14.5px] text-gray-600 block">Dedicated Success Manager</a></li>
                <li><a href="#" className="text-[14.5px] text-gray-600 block">Bespoke Integrations</a></li>
              </ul>
              <p className="text-2xl font-bold text-[#101b19]">Custom</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
