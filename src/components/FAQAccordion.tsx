import React from 'react';
import { Icon } from '@iconify/react';
import type { FAQItem } from '../types';

export const FAQAccordion: React.FC<{
  activeFaqIndex: number | null;
  onToggleFaq: (index: number) => void;
}> = ({ activeFaqIndex, onToggleFaq }) => {
  const faqs: FAQItem[] = [
    {
      question: "What exactly is Joopi AI?",
      answer: "Joopi AI provides AI-powered sales agents—Alex for voice calls and Jennifer for SMS. They act as an extension of your sales team, handling leads 24/7, qualifying them, and booking meetings directly into your CRM."
    },
    {
      question: "How does Alex, the Voice Agent, work?",
      answer: "Alex handles inbound and outbound calls flawlessly. He engages prospects in a natural, human-like conversation to answer their questions, handle standard objections, and book them directly onto your calendar."
    },
    {
      question: "Do I have to set this up myself?",
      answer: "Not at all. We provide a completely done-for-you setup. Our expert team maps out your sales strategy, trains the AI agents on your business, integrates them with your CRM, and monitors them 24/7."
    },
    {
      question: "Will this integrate with my CRM?",
      answer: "Yes, our agents sync seamlessly with major CRMs including HubSpot, Salesforce, and Close. Leads, appointments, and call transcripts are logged automatically."
    },
    {
      question: "How does Jennifer, the SMS Agent, work?",
      answer: "Jennifer is designed for instant text engagement. Whether it's an inbound lead from your website or an outbound re-engagement campaign, Jennifer qualifies them via SMS and secures the meeting."
    },
    {
      question: "How long does it take to see results?",
      answer: "Because we handle the setup, most clients see their AI agents taking calls and booking new appointments within days of going live."
    },
    {
      question: "How much does Joopi AI cost?",
      answer: "We offer plans tailored to your scale. Pricing starts at $299/mo for early access, up to fully custom Enterprise plans depending on your call volume and CRM complexity."
    },
    {
      question: "How do we get started?",
      answer: "You can start by booking a Strategy Call with our team. We'll audit your current process, identify where you're losing revenue, and outline a custom AI Operations plan for your business."
    }
  ];

  return (
    <>
      <style>{`
        .faq-clip {
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
        @media (min-width: 768px) { .faq-clip { --pattern-w: 38px; } }
        @media (min-width: 1024px) { .faq-clip { --pattern-w: 52px; } }
        @media (min-width: 1280px) { .faq-clip { --pattern-w: 68px; } }
      `}</style>
      <section id="faq" className="relative z-50 bg-[#fcfcfd] -mt-[40px] pt-[120px] pb-32 faq-clip font-sans">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#202b29] text-white mb-6">
              <Icon icon="lucide:message-square" className="text-sm fill-current" />
              <span className="text-[11px] font-bold uppercase tracking-widest">FAQ</span>
            </div>
            <h2 className="font-heading text-3xl md:text-[40px] font-bold text-[#101b19] tracking-tight">
              Got Questions? We've Got Answers.
            </h2>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, idx) => {
              const isOpen = activeFaqIndex === idx;
              return (
                <div key={idx} className="bg-white border border-gray-300/80 rounded-lg overflow-hidden shadow-sm">
                  <h3 
                    onClick={() => onToggleFaq(idx)}
                    className="font-semibold text-[15px] p-5 flex justify-between items-center cursor-pointer text-[#101b19] select-none hover:bg-gray-50/50 transition-colors"
                  >
                    {faq.question}
                    <Icon 
                      icon={isOpen ? "lucide:minus" : "lucide:plus"} 
                      className="text-gray-400 text-lg shrink-0" 
                    />
                  </h3>
                  {isOpen && (
                    <div className="px-5 pb-5 animate-in fade-in slide-in-from-top-2 duration-300">
                      <p className="text-gray-500 text-[14px] leading-[1.6]">
                        {faq.answer}
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};
