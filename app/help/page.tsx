// help center page
'use client';

import NavigationSlash from "@/components/NavigationSlash";
import FooterSlash from "@/components/FooterSlash";
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Book, MessageCircle, Mail, FileText } from 'lucide-react';

export default function HelpPage() {
  const resources = [
    {
      icon: FileText,
      title: 'FAQ',
      description: 'Common questions about Tailwind and how it works',
      link: '/faq',
      linkText: 'View FAQ'
    },
    {
      icon: Book,
      title: 'Documentation',
      description: 'Detailed guides and technical documentation',
      link: '#',
      linkText: 'Coming Soon'
    },
    {
      icon: MessageCircle,
      title: 'Contact Support',
      description: 'Get help from our team',
      link: '/contact',
      linkText: 'Contact Us'
    },
    {
      icon: Mail,
      title: 'Email Us',
      description: 'Send us a message and we\'ll respond within 24 hours',
      link: 'mailto:support@tailwind.finance',
      linkText: 'support@tailwind.finance'
    }
  ];

  return (
    <main className="min-h-screen bg-dark-bg">
      <NavigationSlash />
      
      <section className="pt-32 pb-24">
        <div className="max-w-4xl mx-auto section-padding text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="label mb-6 text-primary">HELP CENTER</div>
            <h1 className="heading-display mb-6">
              How can we <span className="italic">help</span>?
            </h1>
            <p className="text-body max-w-2xl mx-auto">
              Find answers to common questions, explore our documentation, or get in touch with our team.
            </p>
          </motion.div>
        </div>
      </section>
      
      <section className="pb-24 md:pb-48">
        <div className="max-w-5xl mx-auto section-padding">
          <div className="grid sm:grid-cols-2 gap-6">
            {resources.map((resource, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                {resource.link.startsWith('http') || resource.link.startsWith('mailto') ? (
                  <a
                    href={resource.link}
                    className="card-slash hover:border-primary/30 transition-all duration-300 group cursor-pointer block h-full"
                  >
                    <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
                      <resource.icon className="w-7 h-7 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-primary transition-colors">
                      {resource.title}
                    </h3>
                    <p className="text-text-secondary text-sm leading-relaxed mb-4">
                      {resource.description}
                    </p>
                    <div className="text-primary text-sm font-semibold">
                      {resource.linkText} →
                    </div>
                  </a>
                ) : (
                  <Link
                    href={resource.link}
                    className="card-slash hover:border-primary/30 transition-all duration-300 group cursor-pointer block h-full"
                  >
                    <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
                      <resource.icon className="w-7 h-7 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-primary transition-colors">
                      {resource.title}
                    </h3>
                    <p className="text-text-secondary text-sm leading-relaxed mb-4">
                      {resource.description}
                    </p>
                    <div className="text-primary text-sm font-semibold">
                      {resource.linkText} →
                    </div>
                  </Link>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      <FooterSlash />
    </main>
  );
}

