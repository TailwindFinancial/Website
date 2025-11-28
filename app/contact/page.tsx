// contact page
'use client';

import NavigationSlash from "@/components/NavigationSlash";
import FooterSlash from "@/components/FooterSlash";
import { motion } from 'framer-motion';
import { useState } from 'react';
import { Mail, MessageCircle, MapPin } from 'lucide-react';

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    console.log('Contact form:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactMethods = [
    {
      icon: Mail,
      title: 'Email',
      description: 'support@tailwind.finance',
      link: 'mailto:support@tailwind.finance'
    },
    {
      icon: MessageCircle,
      title: 'General Inquiries',
      description: 'team@tailwind.finance',
      link: 'mailto:team@tailwind.finance'
    },
    {
      icon: MapPin,
      title: 'Location',
      description: 'San Francisco, CA',
      link: null
    }
  ];

  return (
    <main className="min-h-screen bg-dark-bg">
      <NavigationSlash />
      
      <section className="pt-32 pb-24 md:pb-48">
        <div className="max-w-6xl mx-auto section-padding">
          <div className="grid lg:grid-cols-2 gap-12 md:gap-16">
            {/* left - info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="label mb-6 text-primary">CONTACT</div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-medium text-white mb-6 leading-tight">
                Get in <span className="italic">touch</span>
              </h1>
              <p className="text-body mb-12">
                Have questions about Tailwind? Want to learn more about joining our team? We'd love to hear from you.
              </p>
              
              <div className="space-y-6">
                {contactMethods.map((method, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <method.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <div className="text-white font-semibold mb-1">{method.title}</div>
                      {method.link ? (
                        <a href={method.link} className="text-text-secondary hover:text-primary transition-colors">
                          {method.description}
                        </a>
                      ) : (
                        <div className="text-text-secondary">{method.description}</div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
            
            {/* right - form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {!submitted ? (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* name */}
                  <div>
                    <label htmlFor="name" className="block text-white text-sm font-semibold mb-3">
                      Name *
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
                      Email *
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
                  
                  {/* subject */}
                  <div>
                    <label htmlFor="subject" className="block text-white text-sm font-semibold mb-3">
                      Subject *
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full bg-white/5 border border-white/10 h-14 px-6 text-white rounded-2xl focus:outline-none focus:border-primary/50 backdrop-blur-sm transition-all appearance-none"
                    >
                      <option value="" className="bg-black">Select a topic</option>
                      <option value="general" className="bg-black">General Inquiry</option>
                      <option value="waitlist" className="bg-black">Waitlist Question</option>
                      <option value="careers" className="bg-black">Careers</option>
                      <option value="press" className="bg-black">Press & Media</option>
                      <option value="partnerships" className="bg-black">Partnerships</option>
                      <option value="support" className="bg-black">Technical Support</option>
                    </select>
                  </div>
                  
                  {/* message */}
                  <div>
                    <label htmlFor="message" className="block text-white text-sm font-semibold mb-3">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      rows={6}
                      className="w-full bg-white/5 border border-white/10 p-6 text-white placeholder:text-text-tertiary rounded-2xl focus:outline-none focus:border-primary/50 backdrop-blur-sm transition-all resize-none"
                      placeholder="Tell us how we can help..."
                    />
                  </div>
                  
                  {/* submit */}
                  <button type="submit" className="btn-primary w-full h-14">
                    Send Message
                  </button>
                </form>
              ) : (
                <div className="bg-gradient-to-br from-primary/10 to-secondary/10 border border-primary/30 rounded-3xl p-12 text-center">
                  <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg className="w-10 h-10 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-3xl font-serif font-medium text-white mb-4">Message Sent</h3>
                  <p className="text-text-secondary text-lg">
                    Thank you for reaching out. We'll get back to you within 24 hours.
                  </p>
                </div>
              )}
            </motion.div>
          </div>
        </div>
      </section>
      
      <FooterSlash />
    </main>
  );
}

