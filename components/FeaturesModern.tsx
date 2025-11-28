// modern features - integrated flow without containers
'use client';

// import motion
import { motion } from 'framer-motion';

// features component - clean integrated style
export default function FeaturesModern() {
  return (
    <section className="relative py-48 bg-gradient-to-b from-gradient-start via-gradient-end to-gradient-start overflow-hidden">
      {/* background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-glow-primary opacity-30"></div>
      
      {/* content - proper padding */}
      <div className="relative z-10 max-w-container mx-auto section-padding">
        {/* section header */}
        <div className="text-center max-w-4xl mx-auto mb-32">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="heading-h2 mb-6"
          >
            Powered by <span className="italic">three</span> revolutionary pillars
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-body"
          >
            Not a budgeting app. A complete financial infrastructure for group commerce.
          </motion.p>
        </div>
        
        {/* feature 1 - group credit */}
        <div className="grid lg:grid-cols-2 gap-24 items-center mb-32">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="label mb-6 text-primary">PILLAR I: CREDIT INSTRUMENT</div>
            <h3 className="text-5xl font-serif font-medium text-white mb-6 leading-tight">
              Aggregate underwriting unlocks <span className="text-primary">5-10x</span> purchasing power
            </h3>
            <p className="text-text-secondary text-lg mb-8 leading-relaxed">
              Legacy banks assess individuals. Tailwind assesses the cohort. By verifying aggregate cash flow via Plaid, we extend "Super Limits" based on combined repayment ability—up to $50,000.
            </p>
            <div className="space-y-4">
              <div>
                <div className="text-white font-semibold mb-2">Dynamic Group Score</div>
                <div className="text-text-secondary text-sm">Proprietary algorithm analyzes combined creditworthiness of all verified members</div>
              </div>
              <div>
                <div className="text-white font-semibold mb-2">Individual Liability Caps</div>
                <div className="text-text-secondary text-sm">Software-enforced limits protect each participant from overexposure</div>
              </div>
              <div>
                <div className="text-white font-semibold mb-2">Instant Virtual Issuance</div>
                <div className="text-text-secondary text-sm">Digital cards live in Apple/Google Wallet within seconds of event creation</div>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            {/* mockup placeholder */}
            <div className="aspect-square bg-gradient-to-br from-primary/5 to-secondary/5 rounded-3xl border border-white/5 flex items-center justify-center backdrop-blur-sm">
              <div className="text-text-tertiary text-sm">Group Score Visualization</div>
            </div>
          </motion.div>
        </div>
        
        {/* feature 2 - pot system */}
        <div className="grid lg:grid-cols-2 gap-24 items-center mb-32">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-2 lg:order-1 relative"
          >
            {/* mockup placeholder */}
            <div className="aspect-square bg-gradient-to-br from-secondary/5 to-primary/5 rounded-3xl border border-white/5 flex items-center justify-center backdrop-blur-sm">
              <div className="text-text-tertiary text-sm">Pot Architecture</div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="order-1 lg:order-2"
          >
            <div className="label mb-6 text-secondary">PILLAR II: CONTEXT-AWARE LEDGER</div>
            <h3 className="text-5xl font-serif font-medium text-white mb-6 leading-tight">
              Flexible containers for <span className="italic">any</span> use case
            </h3>
            <p className="text-text-secondary text-lg mb-8 leading-relaxed">
              Pots are agnostic to funding source. Toggle between Tracker Mode (link external cards, we track liability) or Banking Mode (pre-funded custodial accounts for instant settlement).
            </p>
            <div className="space-y-4">
              <div>
                <div className="text-white font-semibold mb-2">Tracker Mode (Non-Custodial)</div>
                <div className="text-text-secondary text-sm">Tag transactions from any card. You keep your points, we handle the math.</div>
              </div>
              <div>
                <div className="text-white font-semibold mb-2">Banking Mode (Custodial)</div>
                <div className="text-text-secondary text-sm">Pre-load capital for zero-debt settlement. Perfect for high-stakes trips.</div>
              </div>
              <div>
                <div className="text-white font-semibold mb-2">Real-Time Auto-Splits</div>
                <div className="text-text-secondary text-sm">AI calculates net positions live. Zero manual reconciliation required.</div>
              </div>
            </div>
          </motion.div>
        </div>
        
        {/* feature 3 - integrations */}
        <div className="grid lg:grid-cols-2 gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="label mb-6 text-primary">PILLAR III: INTEGRATION ECOSYSTEM</div>
            <h3 className="text-5xl font-serif font-medium text-white mb-6 leading-tight">
              Level 3 data from the apps you <span className="italic">actually use</span>
            </h3>
            <p className="text-text-secondary text-lg mb-8 leading-relaxed">
              Direct API connections to Uber, Airbnb, SeatGeek. We don't just see "Ticketmaster - $400." We see "Taylor Swift, Section 102, Row 5" and surface the QR codes directly in your dashboard.
            </p>
            <div className="space-y-4">
              <div>
                <div className="text-white font-semibold mb-2">SeatGeek / Ticketmaster</div>
                <div className="text-text-secondary text-sm">Ticket asset transfers with automatic debt tracking. QR codes in dashboard.</div>
              </div>
              <div>
                <div className="text-white font-semibold mb-2">Uber / Lyft</div>
                <div className="text-text-secondary text-sm">Route maps, passenger manifests, automated split suggestions based on detected riders.</div>
              </div>
              <div>
                <div className="text-white font-semibold mb-2">Airbnb / VRBO</div>
                <div className="text-text-secondary text-sm">Check-in codes, WiFi passwords, property addresses extracted and surfaced.</div>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            {/* mockup placeholder */}
            <div className="aspect-square bg-gradient-to-br from-primary/5 to-secondary/5 rounded-3xl border border-white/5 flex items-center justify-center backdrop-blur-sm">
              <div className="text-text-tertiary text-sm">Rich Transaction Context</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

