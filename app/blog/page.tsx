// blog page
'use client';

import NavigationSlash from "@/components/NavigationSlash";
import FooterSlash from "@/components/FooterSlash";
import { motion } from 'framer-motion';

export default function BlogPage() {
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
            <div className="label mb-6 text-primary">BLOG</div>
            <h1 className="heading-display mb-6">
              Product updates &amp; <span className="italic">insights</span>
            </h1>
            <p className="text-body max-w-2xl mx-auto mb-16">
              Stay up to date with the latest from Tailwind. Product announcements, company news, and insights on building for group finance.
            </p>
            
            <div className="bg-white/5 border border-white/10 rounded-3xl p-16">
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
              </div>
              <h3 className="text-2xl font-serif font-medium text-white mb-4">Coming Soon</h3>
              <p className="text-text-secondary">
                We're currently focused on building Tailwind. Our blog will launch alongside our beta in Q1 2026.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
      
      <FooterSlash />
    </main>
  );
}

