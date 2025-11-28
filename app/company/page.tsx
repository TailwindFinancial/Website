// company page - mission and vision
'use client';

import NavigationSlash from "@/components/NavigationSlash";
import FooterSlash from "@/components/FooterSlash";
import WaitlistCTA from "@/components/WaitlistCTA";

// import motion
import { motion } from 'framer-motion';

// company page component
export default function CompanyPage() {
  return (
    <main className="min-h-screen bg-dark-bg">
      {/* navigation */}
      <NavigationSlash />
      
      {/* company hero */}
      <section className="py-48 pt-32">
        <div className="max-w-4xl mx-auto section-padding">
          <div className="label-slash mb-6">COMPANY</div>
          <h1 className="heading-slash-display mb-12">
            Reimagining finance for the <span className="italic">social</span> age
          </h1>
          
          {/* mission */}
          <div className="mb-20">
            <h2 className="text-3xl font-serif font-medium text-white mb-6">Our Mission</h2>
            <p className="text-slash-body leading-relaxed mb-6">
              Current banking infrastructure operates on single-player logic that fails to accommodate modern reality: 70% of high-value transactions are inherently collaborative.
            </p>
            <p className="text-slash-body leading-relaxed">
              Tailwind fills this void by consolidating three fragmented layers into one ecosystem—dynamic credit, context-aware ledgers, and platform-native integrations.
            </p>
          </div>
          
          {/* vision */}
          <div className="mb-20">
            <h2 className="text-3xl font-serif font-medium text-white mb-6">The Problem We're Solving</h2>
            <p className="text-slash-body leading-relaxed mb-6">
              Every group trip, bachelor party, or corporate offsite devolves into spreadsheet chaos. Someone plays banker, tracks IOUs in Notes app, chases Venmo requests for months.
            </p>
            <p className="text-slash-body leading-relaxed">
              The financial infrastructure doesn't exist for this. Tailwind is building it.
            </p>
          </div>
          
          {/* team placeholder */}
          <div>
            <h2 className="text-3xl font-serif font-medium text-white mb-6">Team</h2>
            <p className="text-text-secondary">
              We're a small team of builders from Stripe, Coinbase, and Plaid, backed by top-tier Silicon Valley investors.
            </p>
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

