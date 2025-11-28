// ultra-premium hero with stunning card visual
'use client';

// import motion
import { motion } from 'framer-motion';
// import useState
import { useState } from 'react';
// import image for logo on card
import Image from 'next/image';

// hero component
export default function HeroSlash() {
  // email state
  const [email, setEmail] = useState('');
  // submitted state
  const [submitted, setSubmitted] = useState(false);

  // handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    console.log('Waitlist:', email);
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* animated background glows */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>
      
      {/* content */}
      <div className="relative z-10 max-w-container mx-auto px-6 lg:px-20 py-32">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* left - text */}
          <div>
            {/* waitlist badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center space-x-2 bg-primary/10 border border-primary/30 rounded-full px-4 py-2 mb-8"
            >
              <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
              <span className="text-primary text-sm font-semibold">Launching Q2 2025</span>
            </motion.div>

            {/* headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="heading-display mb-6"
            >
              {/* OLD: Stop playing <span className="italic">banker</span> */}
              The card your group <span className="italic">deserves</span>
            </motion.h1>
            
            {/* subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-body mb-8"
            >
              {/* OLD: The first operating system for multi-player finance. Aggregate credit, smart ledgers, and platform-native integrations—all in one. */}
              Book the villa. Split the dinner. Skip the Venmo drama. Tailwind combines your group's purchasing power into one card that handles everything.
            </motion.p>
            
            {/* waitlist form */}
            {!submitted ? (
              <motion.form
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                onSubmit={handleSubmit}
                className="flex flex-col sm:flex-row gap-3"
              >
                {/* email input */}
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  className="flex-1 bg-white/5 border border-white/10 h-12 px-6 text-white placeholder:text-text-tertiary rounded-full focus:outline-none focus:border-primary/50 backdrop-blur-sm transition-all"
                />
                {/* submit */}
                <button type="submit" className="btn-primary">
                  Join Waitlist
                </button>
              </motion.form>
            ) : (
              // success message
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-primary/10 border border-primary/30 rounded-2xl p-6"
              >
                <div className="text-primary text-lg font-semibold mb-2">✓ You're on the list</div>
                <div className="text-text-secondary text-sm">We'll notify you when we launch.</div>
              </motion.div>
            )}
          </div>
          
          {/* right - stunning card visual using actual creditcard.png */}
          <motion.div
            initial={{ opacity: 0, y: 40, rotateX: 15 }}
            animate={{ opacity: 1, y: 0, rotateX: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="relative"
            style={{ perspective: '1500px' }}
          >
            {/* subtle turquoise glow behind card */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-primary/20 rounded-full blur-[100px] -z-10"></div>
            
            {/* animated floating card - using your actual credit card design */}
            <Image
              src="/creditcard.png"
              alt="Tailwind Credit Card"
              width={800}
              height={504}
              className="w-full h-auto animate-float"
              style={{ border: 'none', outline: 'none', boxShadow: 'none' }}
              priority
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
