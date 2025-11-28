// how it works section for pre-launch
'use client';

// import motion
import { motion } from 'framer-motion';

// how it works component
export default function HowItWorks() {
  // steps array
  const steps = [
    {
      number: '01',
      title: 'Invite Your Crew',
      description: 'Add friends to unlock your combined purchasing power. The more verified members, the higher your group limit.',
      // OLD: title: 'Create Your Group', description: 'Invite friends, family, or colleagues. Verify identities via Plaid for instant Group Score calculation.'
    },
    {
      number: '02',
      title: 'Get Your Card',
      description: 'Instant virtual card to your phone. Physical card ships before your trip. Use it anywhere Visa is accepted.',
      // OLD: title: 'Get Your Credit Line', description: 'Receive aggregate credit limit based on combined liquidity. Individual liability caps protect everyone.'
    },
    {
      number: '03',
      title: 'Spend Smarter',
      description: 'One person swipes. Everyone splits automatically. Track who owes what in real-time with zero manual entry.',
      // OLD: title: 'Spend Together', description: 'Use virtual or physical cards. All transactions auto-split. Real-time reconciliation. Zero manual work.'
    },
    {
      number: '04',
      title: 'Settle Instantly',
      description: 'The app handles the math. Charges split automatically or settle later. No more awkward Venmo requests.',
      // OLD: description: 'Net positions calculated live. Settle via card, bank transfer, or let it roll to next trip.'
    },
  ];

  return (
    <section className="py-48 bg-gradient-to-b from-black to-gradient-start">
      {/* section header - proper padding */}
      <div className="text-center max-w-4xl mx-auto mb-20 section-padding">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="heading-slash-h2 mb-6"
        >
          How it <span className="italic">works</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          className="text-slash-body"
        >
          {/* OLD: From group creation to instant settlement in four simple steps */}
          From group chat to getaway in four steps
        </motion.p>
      </div>
      
      {/* steps grid - with proper padding */}
      <div className="max-w-container mx-auto section-padding">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* map steps */}
          {steps.map((step, index) => (
          <motion.div
            // unique key
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: index * 0.1 }}
            className="relative"
          >
            {/* step number */}
            <div className="text-6xl font-serif font-medium text-primary/20 mb-4">
              {step.number}
            </div>
            
            {/* step title */}
            <h3 className="text-xl font-semibold text-white mb-3">
              {step.title}
            </h3>
            
            {/* step description */}
            <p className="text-text-secondary text-sm leading-relaxed">
              {step.description}
            </p>
          </motion.div>
        ))}
        </div>
      </div>
    </section>
  );
}

