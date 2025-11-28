// waitlist cta with smooth gradients - no sharp transitions
'use client';

// import motion
import { motion } from 'framer-motion';
// import useState
import { useState } from 'react';

// waitlist cta component with better styling
export default function WaitlistCTA() {
  // form state
  const [email, setEmail] = useState('');
  const [groupSize, setGroupSize] = useState('');
  const [submitted, setSubmitted] = useState(false);

  // handle submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    console.log({ email, groupSize });
  };

  return (
    <section id="waitlist" className="relative py-24 md:py-48 overflow-hidden">
      {/* smooth gradient background - connects to previous section */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gradient-start to-black"></div>
      
      {/* subtle animated glow - smooth not sharp */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px]">
        <div className="absolute inset-0 bg-gradient-radial from-primary/8 via-primary/3 to-transparent blur-3xl animate-pulse"></div>
      </div>
      
      {/* content - proper padding */}
      <div className="relative z-10 max-w-3xl mx-auto section-padding text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="heading-h2 mb-4 md:mb-6">
            Be among the <span className="italic">first</span>
          </h2>
          
          <p className="text-body mb-8 md:mb-16">
            Priority access for groups of 4+. Launch invites sent Q1 2026.
          </p>
        </motion.div>
        
        {!submitted ? (
          // form with better spacing
          <motion.form
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            onSubmit={handleSubmit}
            className="max-w-xl mx-auto space-y-6"
          >
            {/* email */}
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              className="w-full bg-white/5 border border-white/10 h-14 md:h-16 px-6 md:px-8 text-white placeholder:text-text-tertiary rounded-2xl focus:outline-none focus:border-primary/50 backdrop-blur-sm transition-all text-base md:text-lg"
            />
            
            {/* group size */}
            <select
              value={groupSize}
              onChange={(e) => setGroupSize(e.target.value)}
              className="w-full bg-white/5 border border-white/10 h-14 md:h-16 px-6 md:px-8 text-white rounded-2xl focus:outline-none focus:border-primary/50 backdrop-blur-sm transition-all appearance-none text-base md:text-lg"
            >
              <option value="" className="bg-black">Typical group size (optional)</option>
              <option value="2-4" className="bg-black">2-4 people</option>
              <option value="5-8" className="bg-black">5-8 people</option>
              <option value="9-15" className="bg-black">9-15 people</option>
              <option value="16+" className="bg-black">16+ people</option>
            </select>
            
            {/* submit */}
            <button type="submit" className="btn-primary w-full h-14 md:h-16 text-sm md:text-base">
              Reserve Your Spot
            </button>
            
            {/* privacy */}
            <p className="text-xs text-text-tertiary mt-6">
              We respect your privacy. Unsubscribe anytime.
            </p>
          </motion.form>
        ) : (
          // success
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-gradient-to-br from-primary/10 to-secondary/10 border border-primary/30 rounded-3xl p-8 md:p-16"
          >
            <div className="w-20 h-20 md:w-24 md:h-24 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6 md:mb-8">
              <svg className="w-10 h-10 md:w-12 md:h-12 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-2xl md:text-4xl font-serif font-medium text-white mb-3 md:mb-4">You're on the list</h3>
            <p className="text-text-secondary text-base md:text-lg">Check your email for confirmation. We'll notify you at launch.</p>
          </motion.div>
        )}
      </div>
    </section>
  );
}
