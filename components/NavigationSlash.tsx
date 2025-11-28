// comprehensive navigation matching slash exactly
'use client';

// import hooks
import { useState, useEffect } from 'react';
// import link
import Link from 'next/link';
// import image
import Image from 'next/image';
// import comprehensive icon set
import { 
  ChevronDown, CreditCard, Wallet, Link2, Zap, Globe, Shield, 
  Users, Plane, PartyPopper, Briefcase, Home, TrendingUp, FileText, 
  Mail, Code, BarChart3, DollarSign, HelpCircle, Building2, Lock
} from 'lucide-react';

// navigation component
export default function NavigationSlash() {
  // mobile menu state
  const [isOpen, setIsOpen] = useState(false);
  // scroll state
  const [isScrolled, setIsScrolled] = useState(false);
  // active dropdown state
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  // scroll detection
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // scroll to waitlist
  const scrollToWaitlist = () => {
    const section = document.getElementById('waitlist');
    section?.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 h-20 transition-all duration-300 ${
      isScrolled ? 'bg-black/80 backdrop-blur-md border-b border-white/10' : 'bg-transparent'
    }`}>
      {/* container */}
      <div className="max-w-container mx-auto px-6 lg:px-20 h-full">
        {/* flex layout */}
        <div className="flex items-center justify-between h-full">
          {/* logo - clean text with glow on hover */}
          <Link href="/" className="relative flex items-center group">
            <span 
              className="text-2xl font-black text-white tracking-wide italic lowercase transition-all duration-300 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-blue-200 group-hover:drop-shadow-[0_0_8px_rgba(96,165,250,0.5)]" 
              style={{ fontFamily: 'DM Sans, sans-serif' }}
            >
              tailwind
            </span>
          </Link>

          {/* desktop nav */}
          <div className="hidden lg:flex items-center space-x-8">
            {/* company dropdown - comprehensive */}
            <div 
              className="relative"
              onMouseEnter={() => setActiveDropdown('company')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className="flex items-center space-x-1 text-sm text-text-secondary hover:text-white transition-colors h-20">
                <span>Company</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              
              {/* comprehensive dropdown like slash */}
              {activeDropdown === 'company' && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-0 w-80 bg-gradient-to-b from-[#0D0D0D] to-[#0A0A0A] border border-white/10 rounded-2xl shadow-2xl p-8">
                  <div className="space-y-2">
                    <a href="#faq" className="flex items-center space-x-3 p-4 rounded-xl hover:bg-white/5 transition-all group">
                      <HelpCircle className="w-5 h-5 text-text-tertiary group-hover:text-primary transition-colors" />
                      <div className="flex-1">
                        <div className="text-white text-sm font-semibold group-hover:text-primary transition-colors">FAQ</div>
                        <div className="text-text-tertiary text-xs">Common questions answered</div>
                      </div>
                    </a>
                    
                    <a href="#careers" className="flex items-center space-x-3 p-4 rounded-xl hover:bg-white/5 transition-all group">
                      <Briefcase className="w-5 h-5 text-text-tertiary group-hover:text-primary transition-colors" />
                      <div className="flex-1">
                        <div className="text-white text-sm font-semibold group-hover:text-primary transition-colors">Careers</div>
                        <div className="text-text-tertiary text-xs">Join our team</div>
                      </div>
                    </a>
                    
                    <Link href="/company" className="flex items-center space-x-3 p-4 rounded-xl hover:bg-white/5 transition-all group">
                      <Users className="w-5 h-5 text-text-tertiary group-hover:text-primary transition-colors" />
                      <div className="flex-1">
                        <div className="text-white text-sm font-semibold group-hover:text-primary transition-colors">About</div>
                        <div className="text-text-tertiary text-xs">Our mission & vision</div>
                      </div>
                    </Link>
                    
                    <a href="#blog" className="flex items-center space-x-3 p-4 rounded-xl hover:bg-white/5 transition-all group">
                      <FileText className="w-5 h-5 text-text-tertiary group-hover:text-primary transition-colors" />
                      <div className="flex-1">
                        <div className="text-white text-sm font-semibold group-hover:text-primary transition-colors">Blog</div>
                        <div className="text-text-tertiary text-xs">Product updates & insights</div>
                      </div>
                    </a>
                    
                    <a href="#engineering" className="flex items-center space-x-3 p-4 rounded-xl hover:bg-white/5 transition-all group">
                      <Code className="w-5 h-5 text-text-tertiary group-hover:text-primary transition-colors" />
                      <div className="flex-1">
                        <div className="text-white text-sm font-semibold group-hover:text-primary transition-colors">Engineering Blog</div>
                        <div className="text-text-tertiary text-xs">Deep dives & technical posts</div>
                      </div>
                    </a>
                    
                    <a href="#security" className="flex items-center space-x-3 p-4 rounded-xl hover:bg-white/5 transition-all group">
                      <Lock className="w-5 h-5 text-text-tertiary group-hover:text-primary transition-colors" />
                      <div className="flex-1">
                        <div className="text-white text-sm font-semibold group-hover:text-primary transition-colors">Security</div>
                        <div className="text-text-tertiary text-xs">Bank-grade protection</div>
                      </div>
                    </a>
                    
                    <a href="#help" className="flex items-center space-x-3 p-4 rounded-xl hover:bg-white/5 transition-all group">
                      <Building2 className="w-5 h-5 text-text-tertiary group-hover:text-primary transition-colors" />
                      <div className="flex-1">
                        <div className="text-white text-sm font-semibold group-hover:text-primary transition-colors">Help Center</div>
                        <div className="text-text-tertiary text-xs">Documentation & guides</div>
                      </div>
                    </a>
                    
                    <div className="border-t border-white/10 my-4"></div>
                    
                    <a href="mailto:team@tailwind.finance" className="flex items-center space-x-3 p-4 rounded-xl hover:bg-white/5 transition-all group">
                      <Mail className="w-5 h-5 text-text-tertiary group-hover:text-primary transition-colors" />
                      <div className="flex-1">
                        <div className="text-white text-sm font-semibold group-hover:text-primary transition-colors">Contact</div>
                        <div className="text-text-tertiary text-xs">Get in touch with us</div>
                      </div>
                    </a>
                  </div>
                </div>
              )}
            </div>

            {/* products dropdown - two column mega menu */}
            <div 
              className="relative"
              onMouseEnter={() => setActiveDropdown('products')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className="flex items-center space-x-1 text-sm text-text-secondary hover:text-white transition-colors h-20">
                <span>Products</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              
              {/* mega dropdown */}
              {activeDropdown === 'products' && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-0 w-[700px] bg-gradient-to-b from-[#0D0D0D] to-[#0A0A0A] border border-white/10 rounded-2xl shadow-2xl p-8">
                  <div className="grid grid-cols-2 gap-12">
                    {/* left column - products */}
                    <div>
                      <div className="text-text-tertiary text-xs uppercase tracking-widest font-bold mb-6">PRODUCTS</div>
                      <div className="space-y-2">
                        <Link href="/product" className="flex items-center space-x-3 p-4 rounded-xl hover:bg-white/5 transition-all group">
                          <CreditCard className="w-5 h-5 text-text-tertiary group-hover:text-primary transition-colors" />
                          <div className="flex-1">
                            <div className="text-white text-sm font-semibold group-hover:text-primary transition-colors">The Card</div>
                            <div className="text-text-tertiary text-xs">Dynamic credit instrument</div>
                          </div>
                        </Link>
                        
                        <Link href="/product#pot" className="flex items-center space-x-3 p-4 rounded-xl hover:bg-white/5 transition-all group">
                          <Wallet className="w-5 h-5 text-text-tertiary group-hover:text-primary transition-colors" />
                          <div className="flex-1">
                            <div className="text-white text-sm font-semibold group-hover:text-primary transition-colors">The Pot</div>
                            <div className="text-text-tertiary text-xs">Flexible financial containers</div>
                          </div>
                        </Link>
                        
                        <Link href="/product#integrations" className="flex items-center space-x-3 p-4 rounded-xl hover:bg-white/5 transition-all group">
                          <Link2 className="w-5 h-5 text-text-tertiary group-hover:text-primary transition-colors" />
                          <div className="flex-1">
                            <div className="text-white text-sm font-semibold group-hover:text-primary transition-colors">Integrations</div>
                            <div className="text-text-tertiary text-xs">Platform ecosystem</div>
                          </div>
                        </Link>
                        
                        <a href="#rewards" className="flex items-center space-x-3 p-4 rounded-xl hover:bg-white/5 transition-all group">
                          <TrendingUp className="w-5 h-5 text-text-tertiary group-hover:text-primary transition-colors" />
                          <div className="flex-1">
                            <div className="text-white text-sm font-semibold group-hover:text-primary transition-colors">Rewards</div>
                            <div className="text-text-tertiary text-xs">High-yield cashback</div>
                          </div>
                        </a>
                      </div>
                    </div>
                    
                    {/* right column - platform */}
                    <div>
                      <div className="text-text-tertiary text-xs uppercase tracking-widest font-bold mb-6">PLATFORM</div>
                      <div className="space-y-2">
                        <a href="#travel" className="flex items-center space-x-3 p-4 rounded-xl hover:bg-white/5 transition-all group">
                          <Globe className="w-5 h-5 text-text-tertiary group-hover:text-primary transition-colors" />
                          <div className="flex-1">
                            <div className="text-white text-sm font-semibold group-hover:text-primary transition-colors">Travel Mode</div>
                            <div className="text-text-tertiary text-xs">GPS-synced authorization</div>
                          </div>
                        </a>
                        
                        <a href="#phoenix" className="flex items-center space-x-3 p-4 rounded-xl hover:bg-white/5 transition-all group">
                          <Zap className="w-5 h-5 text-text-tertiary group-hover:text-primary transition-colors" />
                          <div className="flex-1">
                            <div className="text-white text-sm font-semibold group-hover:text-primary transition-colors">Phoenix Protocol</div>
                            <div className="text-text-tertiary text-xs">Instant reissuance</div>
                          </div>
                        </a>
                        
                        <a href="#zero-fx" className="flex items-center space-x-3 p-4 rounded-xl hover:bg-white/5 transition-all group">
                          <DollarSign className="w-5 h-5 text-text-tertiary group-hover:text-primary transition-colors" />
                          <div className="flex-1">
                            <div className="text-white text-sm font-semibold group-hover:text-primary transition-colors">Zero-FX</div>
                            <div className="text-text-tertiary text-xs">No foreign fees</div>
                          </div>
                        </a>
                        
                        <a href="#api" className="flex items-center space-x-3 p-4 rounded-xl hover:bg-white/5 transition-all group">
                          <Code className="w-5 h-5 text-text-tertiary group-hover:text-primary transition-colors" />
                          <div className="flex-1">
                            <div className="text-white text-sm font-semibold group-hover:text-primary transition-colors">API</div>
                            <div className="text-text-tertiary text-xs">Developer access</div>
                          </div>
                        </a>
                        
                        <a href="#analytics" className="flex items-center space-x-3 p-4 rounded-xl hover:bg-white/5 transition-all group">
                          <BarChart3 className="w-5 h-5 text-text-tertiary group-hover:text-primary transition-colors" />
                          <div className="flex-1">
                            <div className="text-white text-sm font-semibold group-hover:text-primary transition-colors">Analytics</div>
                            <div className="text-text-tertiary text-xs">Spending insights</div>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* solutions dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setActiveDropdown('solutions')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className="flex items-center space-x-1 text-sm text-text-secondary hover:text-white transition-colors h-20">
                <span>Solutions</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              
              {/* comprehensive solutions dropdown */}
              {activeDropdown === 'solutions' && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-0 w-96 bg-gradient-to-b from-[#0D0D0D] to-[#0A0A0A] border border-white/10 rounded-2xl shadow-2xl p-8">
                  <div className="text-text-tertiary text-xs uppercase tracking-widest font-bold mb-6">BY USE CASE</div>
                  <div className="space-y-2">
                    <Link href="/solutions#travel" className="flex items-center space-x-3 p-4 rounded-xl hover:bg-white/5 transition-all group">
                      <Plane className="w-5 h-5 text-text-tertiary group-hover:text-primary transition-colors" />
                      <div className="flex-1">
                        <div className="text-white text-sm font-semibold group-hover:text-primary transition-colors">Group Travel</div>
                        <div className="text-text-tertiary text-xs">Trips & vacations</div>
                      </div>
                    </Link>
                    
                    <Link href="/solutions#events" className="flex items-center space-x-3 p-4 rounded-xl hover:bg-white/5 transition-all group">
                      <PartyPopper className="w-5 h-5 text-text-tertiary group-hover:text-primary transition-colors" />
                      <div className="flex-1">
                        <div className="text-white text-sm font-semibold group-hover:text-primary transition-colors">Events</div>
                        <div className="text-text-tertiary text-xs">Concerts & festivals</div>
                      </div>
                    </Link>
                    
                    <Link href="/solutions#living" className="flex items-center space-x-3 p-4 rounded-xl hover:bg-white/5 transition-all group">
                      <Home className="w-5 h-5 text-text-tertiary group-hover:text-primary transition-colors" />
                      <div className="flex-1">
                        <div className="text-white text-sm font-semibold group-hover:text-primary transition-colors">Shared Living</div>
                        <div className="text-text-tertiary text-xs">Roommates & households</div>
                      </div>
                    </Link>
                    
                    <Link href="/solutions#enterprise" className="flex items-center space-x-3 p-4 rounded-xl hover:bg-white/5 transition-all group">
                      <Briefcase className="w-5 h-5 text-text-tertiary group-hover:text-primary transition-colors" />
                      <div className="flex-1">
                        <div className="text-white text-sm font-semibold group-hover:text-primary transition-colors">Corporate</div>
                        <div className="text-text-tertiary text-xs">Team offsites</div>
                      </div>
                    </Link>
                    
                    <Link href="/solutions#weddings" className="flex items-center space-x-3 p-4 rounded-xl hover:bg-white/5 transition-all group">
                      <Users className="w-5 h-5 text-text-tertiary group-hover:text-primary transition-colors" />
                      <div className="flex-1">
                        <div className="text-white text-sm font-semibold group-hover:text-primary transition-colors">Celebrations</div>
                        <div className="text-text-tertiary text-xs">Weddings & parties</div>
                      </div>
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* faq link */}
            <Link href="/faq" className="text-sm text-text-secondary hover:text-white transition-colors">
              FAQ
            </Link>
          </div>

          {/* right side */}
          <div className="hidden lg:flex items-center">
            <button onClick={scrollToWaitlist} className="btn-primary">
              Join Waitlist
            </button>
          </div>

          {/* mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2"
          >
            <div className="w-6 h-5 flex flex-col justify-between">
              <span className={`w-full h-0.5 bg-white transition-all ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
              <span className={`w-full h-0.5 bg-white transition-all ${isOpen ? 'opacity-0' : ''}`}></span>
              <span className={`w-full h-0.5 bg-white transition-all ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
            </div>
          </button>
        </div>

        {/* mobile menu */}
        {isOpen && (
          <div className="lg:hidden absolute top-20 left-0 right-0 bg-dark-bg/95 backdrop-blur-md border-t border-white/10">
            <div className="flex flex-col p-6 space-y-4">
              <Link href="/product" onClick={() => setIsOpen(false)} className="text-base text-text-secondary hover:text-white transition-colors">
                Product
              </Link>
              <Link href="/solutions" onClick={() => setIsOpen(false)} className="text-base text-text-secondary hover:text-white transition-colors">
                Solutions
              </Link>
              <Link href="/company" onClick={() => setIsOpen(false)} className="text-base text-text-secondary hover:text-white transition-colors">
                Company
              </Link>
              <Link href="/faq" onClick={() => setIsOpen(false)} className="text-base text-text-secondary hover:text-white transition-colors">
                FAQ
              </Link>
              <div className="border-t border-white/10 pt-4">
                <button onClick={scrollToWaitlist} className="w-full btn-primary">
                  Join Waitlist
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
