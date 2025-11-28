// slash-style footer for pre-launch site
'use client';

// import link from next
import Link from 'next/link';
// import image
import Image from 'next/image';

// footer component
export default function FooterSlash() {
  return (
    <footer className="border-t border-border-dark bg-dark-bg">
      {/* main footer content */}
      <div className="max-w-container mx-auto px-6 lg:px-20 py-20">
        {/* footer grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-16">
          {/* company column */}
          <div>
            <h4 className="font-semibold text-white mb-4 text-sm">Company</h4>
            <ul className="space-y-3">
              <li><Link href="/company" className="text-sm text-text-secondary hover:text-white transition-colors">About</Link></li>
              <li><Link href="/faq" className="text-sm text-text-secondary hover:text-white transition-colors">FAQ</Link></li>
              <li><a href="mailto:team@tailwind.finance" className="text-sm text-text-secondary hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* product column */}
          <div>
            <h4 className="font-semibold text-white mb-4 text-sm">Product</h4>
            <ul className="space-y-3">
              <li><Link href="/product" className="text-sm text-text-secondary hover:text-white transition-colors">The Card</Link></li>
              <li><Link href="/product#pot" className="text-sm text-text-secondary hover:text-white transition-colors">The Pot</Link></li>
              <li><Link href="/product#integrations" className="text-sm text-text-secondary hover:text-white transition-colors">Integrations</Link></li>
            </ul>
          </div>

          {/* solutions column */}
          <div>
            <h4 className="font-semibold text-white mb-4 text-sm">Solutions</h4>
            <ul className="space-y-3">
              <li><Link href="/solutions#travel" className="text-sm text-text-secondary hover:text-white transition-colors">Travel</Link></li>
              <li><Link href="/solutions#events" className="text-sm text-text-secondary hover:text-white transition-colors">Events</Link></li>
              <li><Link href="/solutions#living" className="text-sm text-text-secondary hover:text-white transition-colors">Shared Living</Link></li>
              <li><Link href="/solutions#enterprise" className="text-sm text-text-secondary hover:text-white transition-colors">Enterprise</Link></li>
            </ul>
          </div>

          {/* legal column */}
          <div>
            <h4 className="font-semibold text-white mb-4 text-sm">Legal</h4>
            <ul className="space-y-3">
              <li><a href="#privacy" className="text-sm text-text-secondary hover:text-white transition-colors">Privacy</a></li>
              <li><a href="#terms" className="text-sm text-text-secondary hover:text-white transition-colors">Terms</a></li>
            </ul>
          </div>
        </div>

        {/* bottom section */}
        <div className="flex flex-col md:flex-row items-center justify-between border-t border-border-dark pt-8 mb-12">
          {/* logo and copyright */}
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <Image src="/logo.png" alt="tailwind" width={20} height={20} className="w-5 h-5" />
            <span className="text-xs text-text-tertiary">© 2025 Tailwind Financial, Inc. All rights reserved.</span>
          </div>
          
          {/* social links */}
          <div className="flex items-center space-x-4">
            <a href="https://twitter.com/tailwindfinance" target="_blank" rel="noopener noreferrer" className="text-text-secondary hover:text-white transition-colors">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path></svg>
            </a>
            <a href="https://linkedin.com/company/tailwindfinance" target="_blank" rel="noopener noreferrer" className="text-text-secondary hover:text-white transition-colors">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
            </a>
          </div>
        </div>
      </div>

      {/* compliance block */}
      <div className="bg-dark-card/50 border-t border-border-dark">
        <div className="max-w-container mx-auto px-6 lg:px-20 py-12">
          {/* disclaimer */}
          <div className="space-y-4 text-[11px] leading-relaxed text-text-tertiary">
            <p>
              Tailwind Financial, Inc. is a financial technology company and is not a bank. This website describes features planned for launch in Q1 2026. Actual product features and availability may vary. Banking services will be provided by Evolve Bank & Trust, Member FDIC. The Tailwind Visa® Commercial Credit Card will be issued by Evolve Bank & Trust pursuant to a license from Visa U.S.A. Inc.
            </p>
            
            <p>
              Group Score underwriting will be subject to identity verification and bank connection via Plaid. Credit decisions subject to approval. Individual liability caps will apply to protect members from overexposure. Funds held in custodial Pot accounts will be FDIC-insured through Evolve Bank & Trust up to applicable limits.
            </p>
            
            <p>
              Zero-FX will apply to transactions settled in non-USD currencies using stablecoin settlement rails (USDC via Circle). Standard network interchange rates apply. Platform integrations (Uber, Airbnb, SeatGeek) subject to API partnerships. Features and availability subject to change.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
