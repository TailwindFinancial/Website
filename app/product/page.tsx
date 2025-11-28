// product page - deep dive into features
'use client';

import NavigationSlash from "@/components/NavigationSlash";
import FooterSlash from "@/components/FooterSlash";
import WaitlistCTA from "@/components/WaitlistCTA";
import Image from 'next/image';

// import motion
import { motion } from 'framer-motion';

// product page component
export default function ProductPage() {
  return (
    <main className="min-h-screen bg-dark-bg">
      {/* navigation */}
      <NavigationSlash />
      
      {/* product hero */}
      <section className="py-48 pt-32 bg-gradient-to-b from-dark-bg to-dark-bg">
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
      <section className="py-24 bg-gradient-to-b from-dark-bg via-dark-bg to-slate-950">
        <div className="max-w-container mx-auto section-padding">
          <div className="space-y-32">
          {/* pillar 1 - the card */}
          <div id="card" className="grid lg:grid-cols-2 gap-16 items-center scroll-mt-24">
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
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <Image
                src="/creditcard.png"
                alt="Tailwind Credit Card"
                width={800}
                height={800}
                className="object-contain w-full h-auto"
              />
            </motion.div>
          </div>
          
          {/* pillar 2 - the pot */}
          <div id="pot" className="grid lg:grid-cols-2 gap-16 items-center scroll-mt-24">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative order-2 lg:order-1"
            >
              <div className="aspect-square bg-gradient-to-br from-primary/5 to-secondary/5 rounded-3xl border border-white/5 flex items-center justify-center backdrop-blur-sm">
                <div className="text-text-tertiary text-sm">Pot Architecture Visualization</div>
              </div>
            </motion.div>
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
          <div id="integrations" className="grid lg:grid-cols-2 gap-16 items-center scroll-mt-24">
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
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="aspect-square bg-gradient-to-br from-primary/5 to-secondary/5 rounded-3xl border border-white/5 flex items-center justify-center backdrop-blur-sm">
                <div className="text-text-tertiary text-sm">Integration Ecosystem Visualization</div>
              </div>
            </motion.div>
          </div>
        </div>
        </div>
      </section>

      {/* platform features */}
      <section className="py-24 bg-gradient-to-b from-slate-950 via-slate-900 to-black">
        <div className="max-w-container mx-auto section-padding">
          <div className="text-center mb-16">
            <div className="label-slash mb-4">PLATFORM FEATURES</div>
            <h2 className="text-4xl font-serif font-medium text-white mb-6">Built for modern spending</h2>
          </div>

          <div className="space-y-24">
            {/* travel mode */}
            <div id="travel" className="grid lg:grid-cols-2 gap-16 items-center scroll-mt-24">
              <div>
                <h3 className="text-3xl font-serif font-medium text-white mb-4">Travel Mode</h3>
                <p className="text-text-secondary mb-6 leading-relaxed">
                  GPS-synced authorization that prevents fraud blocks during legitimate travel. Your card knows where you are, so transactions always go through.
                </p>
                <ul className="space-y-3">
                  <li className="text-text-secondary text-sm">• Location-based fraud prevention</li>
                  <li className="text-text-secondary text-sm">• 100% acceptance rate during travel</li>
                  <li className="text-text-secondary text-sm">• Auto-activates based on your device</li>
                  <li className="text-text-secondary text-sm">• No manual notification needed</li>
                </ul>
              </div>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative"
              >
                <div className="aspect-square bg-gradient-to-br from-primary/5 to-secondary/5 rounded-3xl border border-white/5 flex items-center justify-center backdrop-blur-sm">
                  <div className="text-text-tertiary text-sm">Travel Mode Visualization</div>
                </div>
              </motion.div>
            </div>

            {/* phoenix protocol */}
            <div id="phoenix" className="grid lg:grid-cols-2 gap-16 items-center scroll-mt-24">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="relative order-2 lg:order-1"
              >
                <div className="aspect-square bg-gradient-to-br from-primary/5 to-secondary/5 rounded-3xl border border-white/5 flex items-center justify-center backdrop-blur-sm">
                  <div className="text-text-tertiary text-sm">Phoenix Protocol Visualization</div>
                </div>
              </motion.div>
              <div className="order-1 lg:order-2">
                <h3 className="text-3xl font-serif font-medium text-white mb-4">Phoenix Protocol</h3>
                <p className="text-text-secondary mb-6 leading-relaxed">
                  Lost your card? Freeze it and instantly provision a new digital card to your wallet. Zero transaction downtime.
                </p>
                <ul className="space-y-3">
                  <li className="text-text-secondary text-sm">• One-tap card replacement</li>
                  <li className="text-text-secondary text-sm">• Instant digital provisioning</li>
                  <li className="text-text-secondary text-sm">• No waiting for physical cards</li>
                  <li className="text-text-secondary text-sm">• Continue spending immediately</li>
                </ul>
              </div>
            </div>

            {/* zero-fx */}
            <div id="zero-fx" className="grid lg:grid-cols-2 gap-16 items-center scroll-mt-24">
              <div>
                <h3 className="text-3xl font-serif font-medium text-white mb-4">Zero-FX Experience</h3>
                <p className="text-text-secondary mb-6 leading-relaxed">
                  Stablecoin settlement rails bypass traditional banking fees. Get interbank exchange rates on all international spending.
                </p>
                <ul className="space-y-3">
                  <li className="text-text-secondary text-sm">• No foreign transaction fees</li>
                  <li className="text-text-secondary text-sm">• True interbank exchange rates</li>
                  <li className="text-text-secondary text-sm">• USDC-powered settlement</li>
                  <li className="text-text-secondary text-sm">• Instant 3% savings vs. legacy banks</li>
                </ul>
              </div>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative"
              >
                <div className="aspect-square bg-gradient-to-br from-primary/5 to-secondary/5 rounded-3xl border border-white/5 flex items-center justify-center backdrop-blur-sm">
                  <div className="text-text-tertiary text-sm">Zero-FX Visualization</div>
                </div>
              </motion.div>
            </div>

            {/* api */}
            <div id="api" className="grid lg:grid-cols-2 gap-16 items-center scroll-mt-24">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="relative order-2 lg:order-1"
              >
                <div className="aspect-square bg-gradient-to-br from-primary/5 to-secondary/5 rounded-3xl border border-white/5 flex items-center justify-center backdrop-blur-sm">
                  <div className="text-text-tertiary text-sm">API Documentation Visualization</div>
                </div>
              </motion.div>
              <div className="order-1 lg:order-2">
                <h3 className="text-3xl font-serif font-medium text-white mb-4">Developer API</h3>
                <p className="text-text-secondary mb-6 leading-relaxed">
                  Full programmatic access to issue cards, create pots, and manage group finances. Build custom workflows on our infrastructure.
                </p>
                <ul className="space-y-3">
                  <li className="text-text-secondary text-sm">• RESTful API with webhooks</li>
                  <li className="text-text-secondary text-sm">• Instant virtual card issuance</li>
                  <li className="text-text-secondary text-sm">• Real-time transaction streams</li>
                  <li className="text-text-secondary text-sm">• Custom approval workflows</li>
                </ul>
              </div>
            </div>

            {/* analytics */}
            <div id="analytics" className="grid lg:grid-cols-2 gap-16 items-center scroll-mt-24">
              <div>
                <h3 className="text-3xl font-serif font-medium text-white mb-4">Analytics Dashboard</h3>
                <p className="text-text-secondary mb-6 leading-relaxed">
                  AI-powered spending insights and predictive budgeting. Know exactly where your group's money goes.
                </p>
                <ul className="space-y-3">
                  <li className="text-text-secondary text-sm">• Real-time spending velocity tracking</li>
                  <li className="text-text-secondary text-sm">• Merchant category breakdowns</li>
                  <li className="text-text-secondary text-sm">• Predictive budget alerts</li>
                  <li className="text-text-secondary text-sm">• Export to CSV/QuickBooks</li>
                </ul>
              </div>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative"
              >
                <div className="aspect-square bg-gradient-to-br from-primary/5 to-secondary/5 rounded-3xl border border-white/5 flex items-center justify-center backdrop-blur-sm">
                  <div className="text-text-tertiary text-sm">Analytics Dashboard Visualization</div>
                </div>
              </motion.div>
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

