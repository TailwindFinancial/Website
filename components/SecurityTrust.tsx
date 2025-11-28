// security and trust - travel mode, phoenix, zero-fx
'use client';

// import motion
import { motion } from 'framer-motion';

// security component
export default function SecurityTrust() {
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
            Built for global travel. <span className="italic">Protected</span> by design.
          </motion.h2>
        </div>
        
        {/* three key innovations - no containers, clean flow */}
        <div className="space-y-16 md:space-y-32">
          {/* travel mode */}
          <div id="travel" className="grid lg:grid-cols-2 gap-8 md:gap-24 items-center scroll-mt-24">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="text-5xl md:text-7xl font-serif font-medium text-primary/20 mb-4 md:mb-6">01</div>
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-serif font-medium text-white mb-4 md:mb-6">Active Geolocation Security</h3>
              <div className="label mb-4 text-secondary">TRAVEL MODE</div>
              <p className="text-text-secondary text-lg mb-6 leading-relaxed">
                The card's authorization logic syncs with your phone's GPS. If you're in Tokyo, your card works in Tokyo. If you're in Paris, it works in Paris. Zero false fraud blocks.
              </p>
              <p className="text-text-secondary leading-relaxed">
                Result: <span className="text-white font-semibold">100% transaction acceptance rate</span> during international travel. No more embarrassing declines at foreign merchants.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="aspect-video bg-gradient-to-br from-primary/5 to-secondary/5 rounded-3xl border border-white/5 flex items-center justify-center"
            >
              <div className="text-text-tertiary text-sm">GPS Sync Visualization</div>
            </motion.div>
          </div>
          
          {/* phoenix protocol */}
          <div id="phoenix" className="grid lg:grid-cols-2 gap-24 items-center scroll-mt-24">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="order-2 lg:order-1 aspect-video bg-gradient-to-br from-secondary/5 to-primary/5 rounded-3xl border border-white/5 flex items-center justify-center"
            >
              <div className="text-text-tertiary text-sm">Phoenix Reissuance Flow</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="order-1 lg:order-2"
            >
              <div className="text-7xl font-serif font-medium text-primary/20 mb-6">02</div>
              <h3 className="text-4xl font-serif font-medium text-white mb-6">The Phoenix Protocol</h3>
              <div className="label mb-4 text-secondary">INSTANT REISSUANCE</div>
              <p className="text-text-secondary text-lg mb-6 leading-relaxed">
                Lost your card at a music festival? In a foreign country? Freeze the compromised PAN in-app. Tailwind instantly generates a new card number and pushes it to your Apple/Google Wallet.
              </p>
              <p className="text-text-secondary leading-relaxed">
                Time to replacement: <span className="text-white font-semibold">&lt;60 seconds</span>. Transaction downtime: <span className="text-white font-semibold">Zero</span>.
              </p>
            </motion.div>
          </div>
          
          {/* zero-fx */}
          <div id="zero-fx" className="grid lg:grid-cols-2 gap-24 items-center scroll-mt-24">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="text-7xl font-serif font-medium text-primary/20 mb-6">03</div>
              <h3 className="text-4xl font-serif font-medium text-white mb-6">Zero Foreign Transaction Fees</h3>
              <div className="label mb-4 text-secondary">STABLECOIN SETTLEMENT</div>
              <p className="text-text-secondary text-lg mb-6 leading-relaxed">
                Backend settlement via USDC (Circle) on blockchain rails. When you swipe in Japan, we convert to USDC (costs fractions of a cent), move it globally on-chain (settles in seconds), and settle with the local network.
              </p>
              <p className="text-text-secondary leading-relaxed">
                You pay the <span className="text-white font-semibold">true interbank rate</span>. Legacy banks charge 2.5-3% markup. Tailwind charges <span className="text-primary font-semibold">$0.00</span>.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="aspect-video bg-gradient-to-br from-primary/5 to-secondary/5 rounded-3xl border border-white/5 flex items-center justify-center"
            >
              <div className="text-text-tertiary text-sm">Stablecoin Settlement Flow</div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

