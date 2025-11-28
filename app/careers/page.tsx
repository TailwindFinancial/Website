// careers page
'use client';

import NavigationSlash from "@/components/NavigationSlash";
import FooterSlash from "@/components/FooterSlash";
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function CareersPage() {
  const positions = [
    {
      title: 'Founding Full-Stack Engineer',
      count: '3 positions',
      type: 'Full-time',
      equity: '2-5% equity',
      description: 'Build the mobile app and backend infrastructure for Tailwind. Work with React Native, Node.js, and financial APIs.',
      responsibilities: [
        'Build mobile app (React Native preferred)',
        'Build backend services + database',
        'Integrate OCR for receipts (Veryfi/Taggun + GPT)',
        'Implement Event Pot logic',
        'Build group ledger + settlement routing'
      ],
      slug: 'founding-full-stack-engineer'
    },
    {
      title: 'Founding Product Designer',
      count: '1 position',
      type: 'Part-time',
      equity: '0.5-1.5% equity',
      description: 'Design the complete user experience for Tailwind Lite. Create flows that make group finance intuitive and beautiful.',
      responsibilities: [
        'Full app UI/UX for Tailwind Lite',
        'Event creation flows',
        'Split screens, group pot interactions',
        'Live feed interaction design',
        'Create visual identity'
      ],
      slug: 'founding-product-designer'
    },
    {
      title: 'Fintech Lawyer / Reg E Specialist',
      count: '2 positions',
      type: 'Advisor',
      equity: '0.25-0.75% equity',
      description: 'Guide regulatory compliance for our financial platform. Experience with Reg E, MSB registration, and fintech required.',
      responsibilities: [
        'Draft Reg E waiver',
        'Draft ToS + privacy policy + user agreements',
        'Ensure compliance with US & Canada MSB rules',
        'Advise on future credit card regulatory path'
      ],
      slug: 'fintech-lawyer'
    },
    {
      title: 'Banking Infrastructure Advisor',
      count: '2 positions',
      type: 'Advisor',
      equity: '0.25-1% equity',
      description: 'Help architect our BaaS integrations with Unit, Alloy, Lithic, and Plaid. Experience with fintech infrastructure required.',
      responsibilities: [
        'Guide API integrations',
        'Help founders avoid risk/compliance pitfalls',
        'Define how debit wrapper → credit wrapper evolves'
      ],
      slug: 'banking-infrastructure-advisor'
    },
    {
      title: 'Ops & Compliance Associate',
      count: '2 positions',
      type: 'Part-time',
      equity: '0.25-0.75% equity',
      description: 'Manage day-to-day operations and compliance workflows. Handle user onboarding and support.',
      responsibilities: [
        'Manual review of KYC/KYB',
        'Manage early user onboarding',
        'Handle support tickets',
        'Track feedback + edge cases'
      ],
      slug: 'ops-compliance-associate'
    },
    {
      title: 'Community/Growth Lead',
      count: '2-3 positions',
      type: 'Part-time',
      equity: '0.25-1% equity',
      description: 'Drive user acquisition through community infiltration and content creation. Experience with TikTok/social required.',
      responsibilities: [
        'Run bachelorette/niche community infiltration',
        'Create TikTok content ("Receipt Roasts")',
        'Manage waitlist',
        'Coordinate beta testers'
      ],
      slug: 'community-growth-lead'
    }
  ];

  return (
    <main className="min-h-screen bg-dark-bg">
      <NavigationSlash />
      
      {/* hero */}
      <section className="pt-32 pb-24 md:pb-32">
        <div className="max-w-4xl mx-auto section-padding text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="label mb-6 text-primary">CAREERS</div>
            <h1 className="heading-display mb-6">
              Build the future of <span className="italic">group finance</span>
            </h1>
            <p className="text-body max-w-2xl mx-auto">
              Join our founding team as we rebuild financial infrastructure for multi-party commerce. All positions offer equity and the opportunity to shape a vertical fintech platform from day one.
            </p>
          </motion.div>
        </div>
      </section>
      
      {/* positions */}
      <section className="pb-24 md:pb-48">
        <div className="max-w-5xl mx-auto section-padding">
          <div className="space-y-6">
            {positions.map((position, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Link href={`/careers/apply?role=${position.slug}`}>
                  <div className="card-slash hover:border-primary/30 transition-all duration-300 group cursor-pointer">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                      <div className="flex-1">
                        <div className="flex items-start gap-3 mb-2">
                          <h3 className="text-2xl font-serif font-medium text-white group-hover:text-primary transition-colors">
                            {position.title}
                          </h3>
                          <ArrowRight className="w-5 h-5 text-text-tertiary group-hover:text-primary transition-all group-hover:translate-x-1 mt-1" />
                        </div>
                        <div className="flex flex-wrap items-center gap-3 text-sm">
                          <span className="text-primary">{position.count}</span>
                          <span className="text-text-tertiary">•</span>
                          <span className="text-text-secondary">{position.type}</span>
                          <span className="text-text-tertiary">•</span>
                          <span className="text-text-secondary">{position.equity}</span>
                        </div>
                      </div>
                    </div>
                    
                    <p className="text-text-secondary mb-6 leading-relaxed">
                      {position.description}
                    </p>
                    
                    <div className="space-y-2">
                      <div className="text-white text-sm font-semibold mb-3">Key Responsibilities:</div>
                      <ul className="space-y-2">
                        {position.responsibilities.map((resp, idx) => (
                          <li key={idx} className="text-text-secondary text-sm flex items-start">
                            <span className="text-primary mr-3 mt-1">•</span>
                            <span>{resp}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="mt-6 pt-6 border-t border-white/10">
                      <div className="inline-flex items-center gap-2 text-sm text-primary group-hover:gap-3 transition-all">
                        <span>Apply now</span>
                        <ArrowRight className="w-4 h-4" />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
          
          {/* note */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-16 p-8 rounded-3xl bg-white/5 border border-white/10"
          >
            <h3 className="text-xl font-semibold text-white mb-4">Unpaid Internship Program</h3>
            <p className="text-text-secondary leading-relaxed mb-4">
              All positions are currently structured as unpaid internships with equity discussion. We're in our pre-launch phase and building toward our Q1 2026 beta. This is an opportunity to join as a founding team member and earn meaningful equity in a vertical fintech platform.
            </p>
            <p className="text-text-secondary leading-relaxed">
              Questions? Reach out to <a href="mailto:careers@tailwind.finance" className="text-primary hover:underline">careers@tailwind.finance</a>
            </p>
          </motion.div>
        </div>
      </section>
      
      <FooterSlash />
    </main>
  );
}

