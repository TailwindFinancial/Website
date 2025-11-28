# Tailwind - Pre-Launch Waitlist Site

A premium, dark-themed landing page for Tailwind's pre-seed/pre-launch phase, matching Slash.com's institutional minimalist aesthetic.

## 🎨 Design Philosophy

**Dark Premium Aesthetic** - Matching Slash.com:
- Pure black backgrounds (#000000)
- Elegant serif typography (Fraunces) for headlines
- System fonts for UI and body text
- Gold gradient accents for premium feel
- 24px rounded corners (Slash's signature)
- Subtle glassmorphism on navigation

## 🏗️ Tech Stack

- **Framework**: Next.js 14 (App Router with file-based routing)
- **Language**: TypeScript (every line commented)
- **Styling**: Tailwind CSS with custom dark theme
- **Animations**: Framer Motion (snappy cubic-bezier easing)
- **Icons**: Lucide React
- **Fonts**: Fraunces (serif), System fonts (sans-serif)

## 📁 Complete Site Structure

```
tailwindOS/
├── app/
│   ├── layout.tsx              # Root layout with dark theme
│   ├── page.tsx                # Homepage (waitlist focused)
│   ├── globals.css             # Custom dark theme styles
│   ├── product/
│   │   └── page.tsx            # Product deep dive (3 pillars)
│   ├── solutions/
│   │   └── page.tsx            # Use cases (Travel, Events, etc.)
│   ├── company/
│   │   └── page.tsx            # Mission, vision, team
│   └── faq/
│       └── page.tsx            # FAQ with accordion
├── components/
│   ├── NavigationSlash.tsx     # Dark nav with dropdowns
│   ├── HeroSlash.tsx           # Hero with waitlist form
│   ├── HowItWorks.tsx          # 4-step process
│   ├── FeaturesSlash.tsx       # Feature cards
│   ├── DualModeSlash.tsx       # Pot explanation
│   ├── IntegrationSlash.tsx    # Platform integrations
│   ├── WaitlistCTA.tsx         # Waitlist conversion form
│   └── FooterSlash.tsx         # Footer with compliance
└── public/
    └── logo.png                # Your lightning bolt logo
```

## 🚀 Running the Site

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000)

## 📄 Pages & Routes

### Homepage `/`
- Waitlist-focused hero with email capture
- "Now Accepting Waitlist Applications" badge
- Animated gold card visual
- How It Works (4 steps)
- Features showcase
- Dual-Mode Pot explanation
- Platform integrations
- Final waitlist CTA

### Product Page `/product`
- Deep dive into 3 pillars
- Pillar I: The Card (aggregate underwriting)
- Pillar II: The Pot (dual-mode system)
- Pillar III: Integrations (Level 3 data)
- Waitlist CTA

### Solutions Page `/solutions`
- Group Travel use case
- Events & Entertainment
- Shared Living (roommates)
- Corporate Offsites
- Waitlist CTA

### Company Page `/company`
- Mission statement
- Problem we're solving
- Team info (placeholder)
- Waitlist CTA

### FAQ Page `/faq`
- 10 comprehensive Q&A items
- Accordion-style interface
- Waitlist CTA

## 🎯 Pre-Launch Features

✅ **No fake stats** - Honest about pre-launch status  
✅ **Waitlist focused** - Every page drives to conversion  
✅ **Launch timeline** - "Q2 2025" messaging throughout  
✅ **Compliance** - Full disclaimers about planned features  
✅ **Professional** - Institutional-grade design  

## 🎨 Design System

### Colors
- **Primary**: #5DD9D2 (cyan from logo)
- **Dark BG**: #000000 (pure black)
- **Dark Card**: #0D0D0D (elevated surfaces)
- **Gold Gradient**: #C9A961 → #D4B876 (card visual)
- **Text**: White, #A3A3A3 (secondary), #737373 (tertiary)

### Typography
- **Display (72-96px)**: Fraunces Serif, Medium weight, Italic emphasis
- **H2 (48-72px)**: Fraunces Serif, Medium weight
- **Body (18-20px)**: System Sans, Gray color
- **Labels (12px)**: Uppercase, Wide tracking

### Spacing
- **Sections**: 160px vertical padding
- **Container**: 1440px max-width
- **Horizontal**: 80px padding (desktop), 24px (mobile)

## 🔧 Key Components

### WaitlistCTA
- Email + optional group size
- Success state with checkmark
- Privacy reassurance
- Used on every page

### NavigationSlash
- Fixed glassmorphism on scroll
- Logo uses **sans-serif** (as requested)
- Dropdown menus (hover state)
- Mobile hamburger menu
- "Join Waitlist" CTA button

### HeroSlash
- Elegant serif headline
- Waitlist badge with pulse animation
- Inline email capture form
- Animated floating gold card
- Launch timeline message

### FooterSlash
- 4-column link grid
- Social links (Twitter, LinkedIn)
- Full compliance disclaimers
- Pre-launch messaging in legal text

## 🌟 Slash-Style Features

✅ **Dark theme** throughout  
✅ **Elegant serif** headlines with italic emphasis  
✅ **Gold gradients** for premium feel  
✅ **Floating card** animation  
✅ **24px rounded** corners (Slash's style)  
✅ **Glassmorphism** navigation  
✅ **Snappy animations** (cubic-bezier easing)  
✅ **Full routing** with Next.js App Router  
✅ **Every line** has comments  
✅ **TypeScript** throughout  

## 📱 Responsive Design

- Mobile-first approach
- Hamburger menu on mobile
- Grid layouts adapt to screen size
- Touch-friendly button sizes
- Optimized for all devices

## 🔐 Compliance

All pages include proper disclaimers:
- "Planned for Q2 2025" messaging
- Banking partner disclosure (Evolve Bank & Trust)
- FDIC insurance information
- Feature availability subject to change
- Privacy and terms links

## 🎯 Conversion Focused

Every page optimized for waitlist signups:
- Hero email capture
- Multiple waitlist CTAs
- Clear value proposition
- Social proof (when available)
- Launch timeline transparency

## 💼 Next Steps

1. **Backend Integration**: Connect waitlist forms to Mailchimp/Airtable
2. **Analytics**: Add Mixpanel/Amplitude tracking
3. **SEO**: Add metadata for each page
4. **Content**: Replace placeholder visuals with real mockups
5. **Legal**: Finalize privacy policy and terms

## License

Proprietary - Tailwind Financial, Inc. © 2025
