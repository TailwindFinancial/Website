// engineering blog page
'use client';

import NavigationSlash from "@/components/NavigationSlash";
import FooterSlash from "@/components/FooterSlash";
import { motion } from 'framer-motion';

export default function EngineeringPage() {
  return (
    <main className="min-h-screen bg-dark-bg">
      <NavigationSlash />
      
      <section className="pt-32 pb-24 md:pb-48">
        <div className="max-w-4xl mx-auto section-padding text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="label mb-6 text-primary">ENGINEERING BLOG</div>
            <h1 className="heading-display mb-6">
              Deep dives &amp; <span className="italic">technical</span> posts
            </h1>
            <p className="text-body max-w-2xl mx-auto mb-16">
              Behind-the-scenes look at how we're building Tailwind. Architecture decisions, engineering challenges, and technical deep dives.
            </p>
            
            <div className="bg-white/5 border border-white/10 rounded-3xl p-16">
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <h3 className="text-2xl font-serif font-medium text-white mb-4">In Development</h3>
              <p className="text-text-secondary mb-6">
                We're currently building our platform. Technical content will follow as we scale our engineering team.
              </p>
              <p className="text-text-secondary text-sm">
                Interested in contributing? Check out our <a href="/careers" className="text-primary hover:underline">open engineering roles</a>.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
      
      <FooterSlash />
    </main>
  );
}

