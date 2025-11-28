// careers application page
'use client';

import NavigationSlash from "@/components/NavigationSlash";
import FooterSlash from "@/components/FooterSlash";
import { motion } from 'framer-motion';
import { useState, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

function ApplyForm() {
  const searchParams = useSearchParams();
  const role = searchParams.get('role');
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    linkedin: '',
    portfolio: '',
    message: '',
    resume: null as File | null
  });

  const roleNames: { [key: string]: string } = {
    'founding-full-stack-engineer': 'Founding Full-Stack Engineer',
    'founding-product-designer': 'Founding Product Designer',
    'fintech-lawyer': 'Fintech Lawyer / Reg E Specialist',
    'banking-infrastructure-advisor': 'Banking Infrastructure Advisor',
    'ops-compliance-associate': 'Ops & Compliance Associate',
    'community-growth-lead': 'Community/Growth Lead'
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    console.log('Application:', { role, ...formData });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData({
        ...formData,
        resume: e.target.files[0]
      });
    }
  };

  return (
    <main className="min-h-screen bg-dark-bg">
      <NavigationSlash />
      
      <section className="pt-32 pb-24 md:pb-48">
        <div className="max-w-2xl mx-auto section-padding">
          <Link href="/careers" className="inline-flex items-center gap-2 text-text-secondary hover:text-primary transition-colors mb-8">
            <ArrowLeft className="w-4 h-4" />
            <span className="text-sm">Back to careers</span>
          </Link>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="label mb-4 text-primary">APPLICATION</div>
            <h1 className="text-4xl md:text-5xl font-serif font-medium text-white mb-4 leading-tight">
              {role && roleNames[role] ? roleNames[role] : 'Join Tailwind'}
            </h1>
            <p className="text-body mb-12">
              Fill out the form below and we'll get back to you within 48 hours.
            </p>
          </motion.div>
          
          {!submitted ? (
            <motion.form
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              onSubmit={handleSubmit}
              className="space-y-6"
            >
              {/* name */}
              <div>
                <label htmlFor="name" className="block text-white text-sm font-semibold mb-3">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-white/5 border border-white/10 h-14 px-6 text-white placeholder:text-text-tertiary rounded-2xl focus:outline-none focus:border-primary/50 backdrop-blur-sm transition-all"
                  placeholder="John Doe"
                />
              </div>
              
              {/* email */}
              <div>
                <label htmlFor="email" className="block text-white text-sm font-semibold mb-3">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-white/5 border border-white/10 h-14 px-6 text-white placeholder:text-text-tertiary rounded-2xl focus:outline-none focus:border-primary/50 backdrop-blur-sm transition-all"
                  placeholder="john@example.com"
                />
              </div>
              
              {/* linkedin */}
              <div>
                <label htmlFor="linkedin" className="block text-white text-sm font-semibold mb-3">
                  LinkedIn Profile
                </label>
                <input
                  type="url"
                  id="linkedin"
                  name="linkedin"
                  value={formData.linkedin}
                  onChange={handleChange}
                  className="w-full bg-white/5 border border-white/10 h-14 px-6 text-white placeholder:text-text-tertiary rounded-2xl focus:outline-none focus:border-primary/50 backdrop-blur-sm transition-all"
                  placeholder="https://linkedin.com/in/yourprofile"
                />
              </div>
              
              {/* portfolio */}
              <div>
                <label htmlFor="portfolio" className="block text-white text-sm font-semibold mb-3">
                  Portfolio / GitHub / Website
                </label>
                <input
                  type="url"
                  id="portfolio"
                  name="portfolio"
                  value={formData.portfolio}
                  onChange={handleChange}
                  className="w-full bg-white/5 border border-white/10 h-14 px-6 text-white placeholder:text-text-tertiary rounded-2xl focus:outline-none focus:border-primary/50 backdrop-blur-sm transition-all"
                  placeholder="https://yourportfolio.com"
                />
              </div>
              
              {/* resume */}
              <div>
                <label htmlFor="resume" className="block text-white text-sm font-semibold mb-3">
                  Resume / CV *
                </label>
                <div className="relative">
                  <input
                    type="file"
                    id="resume"
                    name="resume"
                    required
                    onChange={handleFileChange}
                    accept=".pdf,.doc,.docx"
                    className="w-full bg-white/5 border border-white/10 h-14 px-6 text-white file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-primary file:text-black hover:file:bg-primary/90 file:cursor-pointer rounded-2xl focus:outline-none focus:border-primary/50 backdrop-blur-sm transition-all cursor-pointer"
                  />
                  {formData.resume && (
                    <div className="mt-2 text-sm text-text-secondary">
                      Selected: {formData.resume.name}
                    </div>
                  )}
                </div>
                <p className="text-xs text-text-tertiary mt-2">
                  Accepted formats: PDF, DOC, DOCX (Max 5MB)
                </p>
              </div>
              
              {/* message */}
              <div>
                <label htmlFor="message" className="block text-white text-sm font-semibold mb-3">
                  Why do you want to join Tailwind? *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  className="w-full bg-white/5 border border-white/10 p-6 text-white placeholder:text-text-tertiary rounded-2xl focus:outline-none focus:border-primary/50 backdrop-blur-sm transition-all resize-none"
                  placeholder="Tell us about your background, why you're interested in this role, and what you'd bring to the team..."
                />
              </div>
              
              {/* submit */}
              <button type="submit" className="btn-primary w-full h-14">
                Submit Application
              </button>
              
              <p className="text-xs text-text-tertiary text-center mt-4">
                By submitting, you agree to be contacted about this opportunity.
              </p>
            </motion.form>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-gradient-to-br from-primary/10 to-secondary/10 border border-primary/30 rounded-3xl p-12 text-center"
            >
              <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-3xl font-serif font-medium text-white mb-4">Application Received</h3>
              <p className="text-text-secondary text-lg mb-8">
                Thank you for your interest in joining Tailwind. We'll review your application and get back to you within 48 hours.
              </p>
              <Link href="/careers" className="btn-secondary inline-flex items-center">
                Back to careers
              </Link>
            </motion.div>
          )}
        </div>
      </section>
      
      <FooterSlash />
    </main>
  );
}

export default function ApplyPage() {
  return (
    <Suspense fallback={
      <main className="min-h-screen bg-dark-bg">
        <NavigationSlash />
        <section className="pt-32 pb-48">
          <div className="max-w-2xl mx-auto section-padding text-center">
            <div className="text-primary">Loading...</div>
          </div>
        </section>
        <FooterSlash />
      </main>
    }>
      <ApplyForm />
    </Suspense>
  );
}

