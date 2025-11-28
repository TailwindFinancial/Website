// rewards and incentives system
'use client';

// import motion
import { motion } from 'framer-motion';

// rewards component
export default function RewardsIncentives() {
  return (
    <section id="rewards" className="relative py-24 md:py-48 bg-gradient-to-b from-gradient-start via-gradient-end to-gradient-start overflow-hidden scroll-mt-24">
      {/* content - proper padding */}
      <div className="relative z-10 max-w-container mx-auto section-padding">
        {/* header */}
        <div className="max-w-4xl mx-auto mb-12 md:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="label mb-4 md:mb-6 text-primary">REWARDS & INCENTIVES</div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-medium text-white mb-4 md:mb-6 leading-tight">
              High-yield cashback funded by <span className="italic">merchant</span> partnerships
            </h2>
          </motion.div>
        </div>
        
        {/* rewards breakdown */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-16">
          {/* dynamic cashback */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="text-3xl md:text-4xl font-bold text-primary mb-3 md:mb-4">2-5%</div>
            <div className="text-white font-semibold text-lg md:text-xl mb-2 md:mb-3">Dynamic Cashback</div>
            <div className="text-text-secondary leading-relaxed">
              Base rate competitive with premium cards. Boost tiers unlock based on total group spend volume. Funded via interchange.
            </div>
          </motion.div>
          
          {/* offer graph */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <div className="text-4xl font-bold text-primary mb-4">10-15%</div>
            <div className="text-white font-semibold text-xl mb-3">Merchant Offers</div>
            <div className="text-text-secondary leading-relaxed">
              Direct partnerships with travel and event brands. Exclusive group-volume discounts at Airbnb, SeatGeek, and dining partners.
            </div>
          </motion.div>
          
          {/* zero fx */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <div className="text-4xl font-bold text-primary mb-4">3%</div>
            <div className="text-white font-semibold text-xl mb-3">Zero-FX Savings</div>
            <div className="text-text-secondary leading-relaxed">
              Stablecoin settlement saves the standard 3% foreign transaction fee. Instant discount on all international spend.
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

