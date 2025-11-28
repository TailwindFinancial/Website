// product page - deep dive into features
'use client';

import NavigationSlash from "@/components/NavigationSlash";
import FooterSlash from "@/components/FooterSlash";
import WaitlistCTA from "@/components/WaitlistCTA";

// import motion
import { motion } from 'framer-motion';

// product page component
export default function ProductPage() {
  return (
    <main className="min-h-screen bg-dark-bg">
      {/* navigation */}
      <NavigationSlash />
      
      {/* product hero */}
      <section className="py-48 pt-32">
        <div className="max-w-4xl mx-auto text-center section-padding">
          <div className="label-slash mb-6">PRODUCT</div>
          <h1 className="heading-slash-display mb-8">
            The complete <span className="italic">infrastructure</span> for group finance
          </h1>
          <p className="text-slash-body max-w-2xl mx-auto">
            Three layers consolidated into one platform: Dynamic credit, context-aware ledgers, and deep platform integrations.
          </p>
        </div>
      </section>
      
      {/* product pillars */}
      <section className="py-48 bg-dark-bg">
        <div className="max-w-container mx-auto section-padding">
          <div className="space-y-32">
          {/* pillar 1 - the card */}
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="label-slash mb-4">PILLAR I</div>
              <h2 className="text-4xl font-serif font-medium text-white mb-6">The Tailwind Credit Card</h2>
              <p className="text-text-secondary mb-6 leading-relaxed">
                A fully functional Visa/Mastercard with aggregate underwriting. You're not spending your cash—you're spending our credit line, settled at cycle end.
              </p>
              <ul className="space-y-3">
                <li className="text-text-secondary text-sm">• Instant virtual provisioning to Apple/Google Pay</li>
                <li className="text-text-secondary text-sm">• Premium metal cards for high-tier users</li>
                <li className="text-text-secondary text-sm">• Group Score underwriting multiplies limits</li>
                <li className="text-text-secondary text-sm">• Individual liability caps for protection</li>
              </ul>
            </div>
            <div className="card-slash aspect-video flex items-center justify-center">
              <div className="text-text-tertiary text-sm">Card Visualization</div>
            </div>
          </div>
          
          {/* pillar 2 - the pot */}
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 card-slash aspect-video flex items-center justify-center">
              <div className="text-text-tertiary text-sm">Pot Architecture</div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="label-slash mb-4">PILLAR II</div>
              <h2 className="text-4xl font-serif font-medium text-white mb-6">The Pot System</h2>
              <p className="text-text-secondary mb-6 leading-relaxed">
                Flexible financial containers agnostic to funding source. Pure expense tracking or funded accounts—your choice.
              </p>
              <ul className="space-y-3">
                <li className="text-text-secondary text-sm">• Tracker Mode: Link any external card</li>
                <li className="text-text-secondary text-sm">• Banking Mode: Centralized liquidity pool</li>
                <li className="text-text-secondary text-sm">• Auto-split calculations in real-time</li>
                <li className="text-text-secondary text-sm">• Zero manual reconciliation</li>
              </ul>
            </div>
          </div>
          
          {/* pillar 3 - integrations */}
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="label-slash mb-4">PILLAR III</div>
              <h2 className="text-4xl font-serif font-medium text-white mb-6">The Integration Ecosystem</h2>
              <p className="text-text-secondary mb-6 leading-relaxed">
                Level 3 transaction data from Uber, Airbnb, SeatGeek. Rich metadata eliminates manual entry entirely.
              </p>
              <ul className="space-y-3">
                <li className="text-text-secondary text-sm">• SeatGeek/Ticketmaster ticket transfers</li>
                <li className="text-text-secondary text-sm">• Uber route maps + passenger detection</li>
                <li className="text-text-secondary text-sm">• Airbnb check-in codes in dashboard</li>
                <li className="text-text-secondary text-sm">• AI-powered receipt parsing</li>
              </ul>
            </div>
            <div className="card-slash aspect-video flex items-center justify-center">
              <div className="text-text-tertiary text-sm">Integration Flow</div>
            </div>
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

