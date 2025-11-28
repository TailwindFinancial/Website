// faq page
'use client';

import NavigationSlash from "@/components/NavigationSlash";
import FooterSlash from "@/components/FooterSlash";
import WaitlistCTA from "@/components/WaitlistCTA";

// import motion and useState
import { motion } from 'framer-motion';
import { useState } from 'react';
// import chevron
import { ChevronDown } from 'lucide-react';

// faq page component
export default function FAQPage() {
  // state for open question
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  // faq array
  const faqs = [
    {
      question: 'What is Tailwind?',
      answer: 'Tailwind is a financial platform designed for multi-player commerce. We provide dynamic group credit, smart expense ledgers (Pots), and deep integrations with platforms like Uber, Airbnb, and SeatGeek to eliminate manual reconciliation.',
    },
    {
      question: 'When will Tailwind launch?',
      answer: 'We are targeting Q1 2026 for our beta launch. Waitlist members will receive priority access and exclusive launch benefits.',
    },
    {
      question: 'How does Group Score underwriting work?',
      answer: 'Our proprietary engine assesses the combined creditworthiness of all verified group members via Plaid. Instead of one person\'s $5k limit, your group might qualify for $25k based on aggregate liquidity. Individual liability caps protect each member.',
    },
    {
      question: 'Is this a bank?',
      answer: 'Tailwind is a financial technology company, not a bank. Banking services are provided by Evolve Bank & Trust, Member FDIC. We focus on the software layer that makes group finance actually work.',
    },
    {
      question: 'How do Pots work?',
      answer: 'Pots are flexible containers that work two ways: (1) Tracker Mode - link your existing cards and tag transactions, we handle the math. (2) Funded Mode - pre-load capital for instant settlement. Perfect for high-stakes trips.',
    },
    {
      question: 'What platforms do you integrate with?',
      answer: 'Launch partners include Uber/Lyft (ride splitting with passenger detection), SeatGeek/Ticketmaster (ticket asset transfers), and Airbnb/VRBO (itinerary sync). More integrations coming post-launch.',
    },
    {
      question: 'What is Travel Mode?',
      answer: 'Active Geolocation syncs your card authorization with phone GPS. If you are in Tokyo, your card works in Tokyo. Eliminates false fraud blocks that plague traditional cards abroad.',
    },
    {
      question: 'How does Zero-FX work?',
      answer: 'Backend settlement via USDC (Circle stablecoin rails) eliminates the standard 2.5-3% FX markup. You get true interbank exchange rates on international spend.',
    },
    {
      question: 'Is my data safe?',
      answer: 'Bank-grade encryption, biometric authentication, SOC 2 Type II certified infrastructure. We never sell your financial data. Period.',
    },
    {
      question: 'How do I get early access?',
      answer: 'Join our waitlist. We are onboarding in waves starting Q1 2026. Priority given to groups of 4+ with verified cash flow.',
    },
  ];

  return (
    <main className="min-h-screen bg-dark-bg">
      {/* navigation */}
      <NavigationSlash />
      
      {/* faq hero */}
      <section className="py-48 pt-32">
        <div className="max-w-4xl mx-auto text-center mb-20 section-padding">
          <h1 className="heading-slash-h2 mb-6">
            Frequently asked <span className="italic">questions</span>
          </h1>
          <p className="text-text-secondary">
            Don't see the answer you're looking for? Get in touch.
          </p>
        </div>
        
        {/* faq list */}
        <div className="max-w-3xl mx-auto section-padding">
          <div className="mb-12">
            <h2 className="text-2xl font-serif font-medium text-white mb-6">General</h2>
            
            {/* faq items */}
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="border-b border-border-dark">
                  {/* question button */}
                  <button
                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                    className="w-full flex items-center justify-between py-6 text-left"
                  >
                    <span className="text-lg text-white font-medium pr-8">{faq.question}</span>
                    <ChevronDown className={`w-5 h-5 text-text-secondary flex-shrink-0 transition-transform ${
                      openIndex === index ? 'rotate-180' : ''
                    }`} />
                  </button>
                  
                  {/* answer */}
                  {openIndex === index && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="overflow-hidden pb-6"
                    >
                      <p className="text-text-secondary leading-relaxed">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* waitlist cta */}
      <WaitlistCTA />
      
      {/* footer */}
      <FooterSlash />
    </main>
  );
}



