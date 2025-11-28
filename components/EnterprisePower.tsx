// enterprise and b2b capabilities
'use client';

// import motion
import { motion } from 'framer-motion';

// enterprise component
export default function EnterprisePower() {
  return (
    <section className="relative py-24 md:py-48 bg-gradient-to-b from-gradient-start via-black to-black overflow-hidden">
      {/* content - proper padding */}
      <div className="relative z-10 max-w-container mx-auto section-padding">
        {/* header */}
        <div className="text-center max-w-4xl mx-auto mb-16 md:mb-32">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="heading-h2 mb-6"
          >
            Enterprise-grade for <span className="italic">corporate</span> offsites
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-body"
          >
            Lightweight alternative to clunky corporate expense platforms
          </motion.p>
        </div>
        
        {/* request & fund workflow */}
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="label mb-8 md:mb-12 text-center text-primary">THE REQUEST & FUND WORKFLOW</div>
            
            {/* 4-step flow - clean like how it works */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
              {/* step 1 */}
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-serif font-medium text-primary/30 mb-3 md:mb-4">01</div>
                <div className="text-white font-semibold mb-2 text-sm md:text-base">Employee Request</div>
                <div className="text-text-secondary text-xs md:text-sm">"Need $500 for client dinner"</div>
              </div>
              
              {/* step 2 */}
              <div className="text-center">
                <div className="text-5xl font-serif font-medium text-primary/30 mb-4">02</div>
                <div className="text-white font-semibold mb-2">Manager Approval</div>
                <div className="text-text-secondary text-sm">Approves via Slack integration</div>
              </div>
              
              {/* step 3 */}
              <div className="text-center">
                <div className="text-5xl font-serif font-medium text-primary/30 mb-4">03</div>
                <div className="text-white font-semibold mb-2">Instant Issuance</div>
                <div className="text-text-secondary text-sm">Virtual card funded with exactly $500</div>
              </div>
              
              {/* step 4 */}
              <div className="text-center">
                <div className="text-5xl font-serif font-medium text-primary/30 mb-4">04</div>
                <div className="text-white font-semibold mb-2">Auto Reconciliation</div>
                <div className="text-text-secondary text-sm">Receipt syncs to QuickBooks</div>
              </div>
            </div>
          </motion.div>
          
          {/* merchant controls */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 md:mt-20 text-center"
          >
            <h4 className="text-2xl md:text-3xl font-serif font-medium text-white mb-4 md:mb-6">Merchant Category Controls</h4>
            <p className="text-text-secondary max-w-2xl mx-auto">
              Cards can be locked to specific MCC codes (e.g., Restaurants Only, Office Supplies) to prevent misuse. Automated compliance for corporate policies.
            </p>
          </motion.div>
        </div>

        {/* api section */}
        <div id="api" className="max-w-5xl mx-auto mt-24 md:mt-32 scroll-mt-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12 md:mb-16"
          >
            <div className="label mb-4 md:mb-6 text-primary">DEVELOPER API</div>
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-serif font-medium text-white mb-4 md:mb-6">
              Build on our <span className="italic">infrastructure</span>
            </h3>
            <p className="text-text-secondary max-w-2xl mx-auto text-base md:text-lg">
              Full programmatic access to issue cards, create pots, and manage group finances. Build custom workflows on Tailwind's platform.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white/5 border border-white/10 rounded-2xl p-6"
            >
              <h5 className="text-white font-semibold mb-3">RESTful API</h5>
              <p className="text-text-secondary text-sm">Complete REST endpoints with webhooks for real-time event streams.</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-white/5 border border-white/10 rounded-2xl p-6"
            >
              <h5 className="text-white font-semibold mb-3">Card Issuance</h5>
              <p className="text-text-secondary text-sm">Instantly provision virtual cards programmatically with custom limits.</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white/5 border border-white/10 rounded-2xl p-6"
            >
              <h5 className="text-white font-semibold mb-3">Transaction Data</h5>
              <p className="text-text-secondary text-sm">Real-time transaction streams with enriched merchant metadata.</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="bg-white/5 border border-white/10 rounded-2xl p-6"
            >
              <h5 className="text-white font-semibold mb-3">Pot Management</h5>
              <p className="text-text-secondary text-sm">Create and manage group pots with custom rules and permissions.</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="bg-white/5 border border-white/10 rounded-2xl p-6"
            >
              <h5 className="text-white font-semibold mb-3">Approval Workflows</h5>
              <p className="text-text-secondary text-sm">Build custom approval chains and spending controls.</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="bg-white/5 border border-white/10 rounded-2xl p-6"
            >
              <h5 className="text-white font-semibold mb-3">Integration SDKs</h5>
              <p className="text-text-secondary text-sm">Official SDKs for Node.js, Python, Ruby, and Go.</p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

