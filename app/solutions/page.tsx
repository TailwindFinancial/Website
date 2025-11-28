// solutions page - use cases and scenarios
'use client';

import NavigationSlash from "@/components/NavigationSlash";
import FooterSlash from "@/components/FooterSlash";
import WaitlistCTA from "@/components/WaitlistCTA";

// import motion
import { motion } from 'framer-motion';

// solutions page component
export default function SolutionsPage() {
  return (
    <main className="min-h-screen bg-dark-bg">
      {/* navigation */}
      <NavigationSlash />
      
      {/* solutions hero */}
      <section className="py-48 pt-32 bg-gradient-to-b from-dark-bg to-dark-bg">
        {/* header with padding */}
        <div className="max-w-4xl mx-auto text-center mb-20 section-padding">
          <div className="label mb-6">SOLUTIONS</div>
          <h1 className="heading-display mb-8">
            Built for <span className="italic">real life</span>
          </h1>
          <p className="text-body max-w-2xl mx-auto">
            From weekend trips to corporate offsites, Tailwind handles every group spending scenario.
          </p>
        </div>
      </section>

      {/* detailed solutions */}
      <section className="py-24 bg-gradient-to-b from-dark-bg via-slate-950 to-black">
        <div className="max-w-container mx-auto section-padding space-y-32">
          
          {/* group travel */}
          <div id="travel" className="scroll-mt-24">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <div className="label-slash mb-4">FOR TRAVELERS</div>
                <h2 className="text-4xl font-serif font-medium text-white mb-6">Group Travel</h2>
                <p className="text-text-secondary mb-6 leading-relaxed">
                  From weekend getaways to month-long adventures. Split flights, hotels, meals, and activities in real-time. Zero friction, zero IOUs.
                </p>
                <ul className="space-y-3">
                  <li className="text-text-secondary text-sm">• Integrated with Airbnb & Uber</li>
                  <li className="text-text-secondary text-sm">• Travel Mode prevents fraud blocks</li>
                  <li className="text-text-secondary text-sm">• Zero-FX on international spend</li>
                  <li className="text-text-secondary text-sm">• Live itinerary sync</li>
                  <li className="text-text-secondary text-sm">• Automatic expense categorization</li>
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
                  <div className="text-text-tertiary text-sm">Group Travel Visualization</div>
                </div>
              </motion.div>
            </div>
          </div>

          {/* events */}
          <div id="events" className="scroll-mt-24">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="relative order-2 lg:order-1"
              >
                <div className="aspect-square bg-gradient-to-br from-primary/5 to-secondary/5 rounded-3xl border border-white/5 flex items-center justify-center backdrop-blur-sm">
                  <div className="text-text-tertiary text-sm">Events & Entertainment Visualization</div>
                </div>
              </motion.div>
              <div className="order-1 lg:order-2">
                <div className="label-slash mb-4">FOR EVENT-GOERS</div>
                <h2 className="text-4xl font-serif font-medium text-white mb-6">Events & Entertainment</h2>
                <p className="text-text-secondary mb-6 leading-relaxed">
                  Concerts, festivals, sporting events. Manage tickets, transportation, and group dining seamlessly. No more Venmo requests.
                </p>
                <ul className="space-y-3">
                  <li className="text-text-secondary text-sm">• SeatGeek ticket transfers</li>
                  <li className="text-text-secondary text-sm">• Asset-liability automation</li>
                  <li className="text-text-secondary text-sm">• Group ride splitting</li>
                  <li className="text-text-secondary text-sm">• Receipt OCR parsing</li>
                  <li className="text-text-secondary text-sm">• Pre-event budgeting tools</li>
                </ul>
              </div>
            </div>
          </div>

          {/* shared living */}
          <div id="living" className="scroll-mt-24">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <div className="label-slash mb-4">FOR ROOMMATES</div>
                <h2 className="text-4xl font-serif font-medium text-white mb-6">Shared Living</h2>
                <p className="text-text-secondary mb-6 leading-relaxed">
                  Roommates managing rent, utilities, groceries. Recurring payments with automatic reconciliation. Finally, peace of mind.
                </p>
                <ul className="space-y-3">
                  <li className="text-text-secondary text-sm">• Recurring pot funding</li>
                  <li className="text-text-secondary text-sm">• Vendor autopay</li>
                  <li className="text-text-secondary text-sm">• Expense categorization</li>
                  <li className="text-text-secondary text-sm">• Monthly statements</li>
                  <li className="text-text-secondary text-sm">• Split history tracking</li>
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
                  <div className="text-text-tertiary text-sm">Shared Living Visualization</div>
                </div>
              </motion.div>
            </div>
          </div>

          {/* corporate */}
          <div id="enterprise" className="scroll-mt-24">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="relative order-2 lg:order-1"
              >
                <div className="aspect-square bg-gradient-to-br from-primary/5 to-secondary/5 rounded-3xl border border-white/5 flex items-center justify-center backdrop-blur-sm">
                  <div className="text-text-tertiary text-sm">Corporate Team Visualization</div>
                </div>
              </motion.div>
              <div className="order-1 lg:order-2">
                <div className="label-slash mb-4">FOR TEAMS</div>
                <h2 className="text-4xl font-serif font-medium text-white mb-6">Corporate Offsites</h2>
                <p className="text-text-secondary mb-6 leading-relaxed">
                  Lightweight expense management for team retreats. Request & approve workflows with MCC locks. No more expense reports.
                </p>
                <ul className="space-y-3">
                  <li className="text-text-secondary text-sm">• Manager approval flows</li>
                  <li className="text-text-secondary text-sm">• Merchant category restrictions</li>
                  <li className="text-text-secondary text-sm">• QuickBooks/Xero sync</li>
                  <li className="text-text-secondary text-sm">• Instant virtual issuance</li>
                  <li className="text-text-secondary text-sm">• Automated reconciliation</li>
                </ul>
              </div>
            </div>
          </div>

          {/* weddings & celebrations */}
          <div id="weddings" className="scroll-mt-24">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <div className="label-slash mb-4">FOR CELEBRATIONS</div>
                <h2 className="text-4xl font-serif font-medium text-white mb-6">Weddings & Parties</h2>
                <p className="text-text-secondary mb-6 leading-relaxed">
                  Bachelor parties, bachelorette trips, wedding planning. Manage deposits, vendor payments, and group contributions. Stress-free coordination.
                </p>
                <ul className="space-y-3">
                  <li className="text-text-secondary text-sm">• Multi-contributor funding</li>
                  <li className="text-text-secondary text-sm">• Vendor payment scheduling</li>
                  <li className="text-text-secondary text-sm">• Transparent cost breakdown</li>
                  <li className="text-text-secondary text-sm">• Guest contribution tracking</li>
                  <li className="text-text-secondary text-sm">• Event timeline integration</li>
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
                  <div className="text-text-tertiary text-sm">Celebration Event Visualization</div>
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

