// solutions page - use cases and scenarios
'use client';

import NavigationSlash from "@/components/NavigationSlash";
import FooterSlash from "@/components/FooterSlash";
import WaitlistCTA from "@/components/WaitlistCTA";

// import motion
import { motion } from 'framer-motion';

// solutions page component
export default function SolutionsPage() {
  // use cases array
  const solutions = [
    {
      title: 'Group Travel',
      description: 'From weekend getaways to month-long adventures. Split flights, hotels, meals, and activities in real-time.',
      features: ['Integrated with Airbnb & Uber', 'Travel Mode prevents fraud blocks', 'Zero-FX on international spend', 'Live itinerary sync'],
    },
    {
      title: 'Events & Entertainment',
      description: 'Concerts, festivals, sporting events. Manage tickets, transportation, and group dining seamlessly.',
      features: ['SeatGeek ticket transfers', 'Asset-liability automation', 'Group ride splitting', 'Receipt OCR parsing'],
    },
    {
      title: 'Shared Living',
      description: 'Roommates managing rent, utilities, groceries. Recurring payments with automatic reconciliation.',
      features: ['Recurring pot funding', 'Vendor autopay', 'Expense categorization', 'Monthly statements'],
    },
    {
      title: 'Corporate Offsites',
      description: 'Lightweight expense management for team retreats. Request & approve workflows with MCC locks.',
      features: ['Manager approval flows', 'Merchant category restrictions', 'QuickBooks/Xero sync', 'Instant virtual issuance'],
    },
  ];

  return (
    <main className="min-h-screen bg-dark-bg">
      {/* navigation */}
      <NavigationSlash />
      
      {/* solutions hero */}
      <section className="py-48 pt-32">
        {/* header with padding */}
        <div className="max-w-4xl mx-auto text-center mb-20 section-padding">
          <div className="label mb-6">SOLUTIONS</div>
          <h1 className="heading-display mb-8">
            Built for <span className="italic">real life</span>
          </h1>
          <p className="text-body max-w-2xl mx-auto">
            From weekend trips to corporate offsites, Tailwind handles every group spending scenario.
          </p>
        </div>
        
        {/* solutions grid - with proper padding */}
        <div className="max-w-container mx-auto section-padding">
          <div className="grid md:grid-cols-2 gap-8">
          {/* map solutions */}
          {solutions.map((solution, index) => (
            <div key={index} className="card-slash">
              <h3 className="text-2xl font-serif font-medium text-white mb-4">{solution.title}</h3>
              <p className="text-text-secondary mb-6">{solution.description}</p>
              <ul className="space-y-2">
                {solution.features.map((feature, idx) => (
                  <li key={idx} className="text-sm text-text-secondary flex items-start">
                    <span className="text-primary mr-2">•</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
          </div>
        </div>
      </section>
      
      {/* waitlist cta */}
      <WaitlistCTA />
      
      {/* footer */}
      <FooterSlash />
    </main>
  );
}

