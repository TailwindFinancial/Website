// security page
'use client';

import NavigationSlash from "@/components/NavigationSlash";
import FooterSlash from "@/components/FooterSlash";
import { motion } from 'framer-motion';
import { Shield, Lock, Eye, CheckCircle2 } from 'lucide-react';

export default function SecurityPage() {
  const securityFeatures = [
    {
      icon: Shield,
      title: 'Enhanced FDIC Insurance',
      description: 'Partner banks provide FDIC coverage up to hundreds of millions through sweep networks.'
    },
    {
      icon: Lock,
      title: 'Bank-Grade Encryption',
      description: 'AES-256 encryption for data at rest and TLS 1.3 for data in transit. Zero-knowledge architecture where possible.'
    },
    {
      icon: Eye,
      title: 'Biometric Authentication',
      description: 'Face ID, Touch ID, and fingerprint authentication. Hardware-backed security with device-level encryption.'
    },
    {
      icon: CheckCircle2,
      title: 'SOC 2 Type II Certified',
      description: 'Independently audited infrastructure. Annual penetration testing and continuous security monitoring.'
    }
  ];

  const commitments = [
    'We never sell your financial data',
    'Real-time fraud monitoring with AI',
    'Instant card freeze and replacement',
    'Individual liability caps protect your exposure',
    'Travel Mode prevents false fraud blocks',
    'Granular permission controls for group spending'
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
            <div className="label mb-6 text-primary">SECURITY</div>
            <h1 className="heading-display mb-6">
              Bank-grade <span className="italic">protection</span>
            </h1>
            <p className="text-body max-w-2xl mx-auto">
              Your financial data and transactions are protected with enterprise-level security. Built on federally regulated banking infrastructure.
            </p>
          </motion.div>
        </div>
      </section>
      
      <section className="pb-24">
        <div className="max-w-5xl mx-auto section-padding">
          <div className="grid sm:grid-cols-2 gap-8">
            {securityFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="card-slash"
              >
                <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
                  <feature.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-text-secondary text-sm leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      <section className="pb-24 md:pb-48">
        <div className="max-w-4xl mx-auto section-padding">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 rounded-3xl p-8 md:p-12"
          >
            <h2 className="text-3xl font-serif font-medium text-white mb-6">Our Security Commitments</h2>
            <div className="space-y-4">
              {commitments.map((commitment, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <p className="text-text-secondary">{commitment}</p>
                </div>
              ))}
            </div>
            <div className="mt-8 pt-8 border-t border-white/10">
              <p className="text-text-secondary text-sm">
                Questions about our security practices? Contact our security team at{' '}
                <a href="mailto:security@tailwind.finance" className="text-primary hover:underline">
                  security@tailwind.finance
                </a>
              </p>
            </div>
          </motion.div>
        </div>
      </section>
      
      <FooterSlash />
    </main>
  );
}

