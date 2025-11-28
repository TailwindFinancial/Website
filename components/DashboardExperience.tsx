// dashboard and live experience features
'use client';

// import motion
import { motion } from 'framer-motion';

// dashboard component
export default function DashboardExperience() {
  return (
    <section className="relative py-24 md:py-48 bg-gradient-to-b from-gradient-start via-black to-gradient-start overflow-hidden">
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
            A command center for <span className="italic">group operations</span>
          </motion.h2>
        </div>
        
        {/* features - integrated flow */}
        <div className="space-y-16 md:space-y-32">
          {/* live event feed */}
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="text-4xl md:text-6xl font-serif font-medium text-primary/20 mb-4 md:mb-6">Live Event Feed</div>
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-serif font-medium text-white mb-4 md:mb-6">Real-time collaborative stream of all financial activity</h3>
              <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 mt-8 md:mt-12">
                <div>
                  <div className="text-white font-semibold mb-2">Social Validation</div>
                  <div className="text-text-secondary text-sm">React to charges. Flag suspicious transactions instantly.</div>
                </div>
                <div>
                  <div className="text-white font-semibold mb-2">Dispute Resolution</div>
                  <div className="text-text-secondary text-sm">"Not Mine" function pauses settlement until resolved.</div>
                </div>
                <div>
                  <div className="text-white font-semibold mb-2">Net Positions</div>
                  <div className="text-text-secondary text-sm">Live visibility into who owes who at any given second.</div>
                </div>
              </div>
            </motion.div>
          </div>
          
          {/* ai monitoring */}
          <div id="analytics" className="grid lg:grid-cols-2 gap-8 md:gap-16 items-center scroll-mt-24">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-serif font-medium text-white mb-4 md:mb-6">AI-Driven Monitoring</h3>
              <div className="space-y-6">
                <div>
                  <div className="text-white font-semibold mb-2">Receipt Reconciliation</div>
                  <div className="text-text-secondary">Computer vision parses photos of physical receipts. Separates alcohol from food for granular splitting by preference.</div>
                </div>
                <div>
                  <div className="text-white font-semibold mb-2">Predictive Budgeting</div>
                  <div className="text-text-secondary">System analyzes spending velocity against event duration. Alerts group if burning cash too fast.</div>
                </div>
                <div>
                  <div className="text-white font-semibold mb-2">Smart Categorization</div>
                  <div className="text-text-secondary">Automatic merchant categorization with integration data enrichment.</div>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="aspect-video bg-gradient-to-br from-primary/5 to-secondary/5 rounded-3xl border border-white/5 flex items-center justify-center"
            >
              <div className="text-text-tertiary text-sm">AI Dashboard</div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

