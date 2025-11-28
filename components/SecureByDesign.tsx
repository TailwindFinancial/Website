// secure by design section - matching slash
'use client';

// import motion
import { motion } from 'framer-motion';
// import icons
import { Shield, Lock, CheckCircle2, Eye } from 'lucide-react';

// secure by design component
export default function SecureByDesign() {
  return (
    <section className="relative py-24 md:py-48 bg-gradient-to-b from-gradient-start via-gradient-end to-gradient-start overflow-hidden">
      {/* content */}
      <div className="relative z-10 max-w-container mx-auto section-padding">
        {/* header */}
        <div className="text-center max-w-4xl mx-auto mb-12 md:mb-24">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="heading-h2 mb-6"
          >
            Secure by <span className="italic">design</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-body"
          >
            Bank confidently with enhanced FDIC coverage, granular controls, and federally regulated partners.
          </motion.p>
        </div>
        
        {/* security features grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* enhanced fdic */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="w-14 h-14 md:w-16 md:h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4 md:mb-6">
              <Shield className="w-7 h-7 md:w-8 md:h-8 text-primary" />
            </div>
            <h3 className="text-lg md:text-xl font-semibold text-white mb-2 md:mb-3">Enhanced FDIC Insurance</h3>
            <p className="text-text-secondary text-sm">
              Partner banks provide FDIC coverage up to hundreds of millions through sweep networks.
            </p>
          </motion.div>
          
          {/* authentication */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-center"
          >
            <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Lock className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-3">Advanced Authentication</h3>
            <p className="text-text-secondary text-sm">
              Biometric security, device fingerprinting, and behavioral analysis protect every transaction.
            </p>
          </motion.div>
          
          {/* compliance */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-center"
          >
            <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <CheckCircle2 className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-3">SOC2 Type II Compliant</h3>
            <p className="text-text-secondary text-sm">
              Annual audits ensure data security, availability, and processing integrity.
            </p>
          </motion.div>
          
          {/* transparency */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-center"
          >
            <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Eye className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-3">Full Transparency</h3>
            <p className="text-text-secondary text-sm">
              Live transaction feed. Every group member sees every charge. Zero hidden fees.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}



