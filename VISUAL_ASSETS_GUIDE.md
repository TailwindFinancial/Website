# Tailwind Visual Assets Guide

This document outlines every image placeholder in the site and what should be created for each one.

## 🎨 Image Specifications

**General Requirements:**
- Format: PNG with transparency preferred
- Style: Modern, clean, minimal - matching dark theme
- Colors: Use primary cyan (#5DD9D2), secondary navy (#2E3A59), white, and grays
- Resolution: 2x for retina displays (1600px+ width recommended)

---

## 📍 Homepage Assets

### 1. ✅ Hero Credit Card
**Location:** Hero section (right side)
**Current:** Using `/creditcard.png` (DONE)
**Dimensions:** 800x504px (1.586:1 aspect ratio)
**Description:** Your actual credit card design - already implemented

---

### 2. Group Score Visualization
**Location:** FeaturesModern section - Pillar I
**File name suggestion:** `group-score-network.png`
**Dimensions:** Square (1000x1000px)
**Description:** Network topology diagram showing:
- 4 user nodes (circles with avatars) labeled "Alice $5k", "Bob $10k", "Charlie $7k", "Dave $3k"
- Central hub (black rounded square) showing "Group Limit $25K"
- Connecting lines between nodes and center
- Clean, geometric, minimal style
- Use primary cyan for highlights, white nodes on dark transparent background

**Design notes:**
- Think abstract tech diagram, not cartoon
- Nodes should be clean circles with subtle shadows
- Center should feel "powered up" with subtle glow
- Add annotation: "Individual Liability Caps Active"

---

### 3. Pot Architecture Diagram
**Location:** FeaturesModern section - Pillar II
**File name suggestion:** `pot-architecture.png`
**Dimensions:** Square (1000x1000px)
**Description:** Split-screen showing two modes:

**Left side - Tracker Mode:**
- External credit card (Amex Gold mockup) with link icon
- Arrow pointing to Tailwind pot container
- Text: "You keep points, we track debt"

**Right side - Banking Mode:**
- Tailwind virtual card in Apple Wallet frame
- Money flowing into pot container
- Text: "Pre-funded, zero debt"

**Design notes:**
- Clean container/box metaphor for "pots"
- Use subtle gradients and shadows
- Icons for linking vs. funding

---

### 4. Integration Ecosystem
**Location:** FeaturesModern section - Pillar III
**File name suggestion:** `integration-rich-context.png`
**Dimensions:** Square (1000x1000px)
**Description:** Dashboard mockup showing rich transaction:

**Uber transaction card showing:**
- Standard transaction: "Uber • $42.50"
- Route map visual (simple A to B line on mini map)
- Passenger list: "Alice, Bob, Dave"
- Auto-split indicator: "Split 3 ways → $14.17 each"
- Timestamp and location details

**Design notes:**
- Dark UI card with rounded corners
- Mini map with route line in primary cyan
- Clean typography, clear data hierarchy
- Use Uber-style branding colors subtly

---

### 5. GPS Sync Visualization
**Location:** SecurityTrust section - Travel Mode
**File name suggestion:** `gps-travel-mode.png`
**Dimensions:** 16:9 aspect ratio (1600x900px)
**Description:** 

**Split view showing:**
- Left: Phone with GPS location pin (Tokyo, Japan)
- Center: Sync icon/animation arrows
- Right: Credit card with checkmark/approved indicator
- World map in background with location highlighted

**Design notes:**
- Clean device mockups (iPhone frame)
- Glowing location pin in primary cyan
- Sync animation feel (curved arrows)
- Text overlay: "Location: Tokyo" on phone, "Authorization: Approved" on card

---

### 6. Phoenix Reissuance Flow
**Location:** SecurityTrust section - Phoenix Protocol
**File name suggestion:** `phoenix-protocol.png`
**Dimensions:** 16:9 aspect ratio (1600x900px)
**Description:**

**Three-panel flow:**
1. **Lost Card:** Card with X or lock icon, red indicator
2. **Arrow/Transform:** Phoenix/flame icon, particle effect
3. **New Card:** Fresh card pushed to Apple Wallet mockup

**Timer indicator:** "<60 seconds" prominently displayed

**Design notes:**
- Show card dissolving into particles
- New card "materializing" in wallet
- Use motion/energy visual language
- Primary cyan for energy/particles

---

### 7. Stablecoin Settlement Flow
**Location:** SecurityTrust section - Zero-FX
**File name suggestion:** `usdc-settlement-flow.png`
**Dimensions:** 16:9 aspect ratio (1600x900px)
**Description:**

**Flow diagram showing:**
1. **Swipe in Tokyo:** Card swiping, ¥ symbol
2. **USD → USDC:** Conversion icon, Circle logo
3. **Blockchain rails:** Network visualization, fast/cheap indicators
4. **Local settlement:** Yen conversion at merchant

**Cost comparison:**
- Traditional bank: 2.5-3% fee (crossed out)
- Tailwind: $0.00 (highlighted in primary cyan)

**Design notes:**
- Technical flow diagram aesthetic
- USDC coin icon
- Blockchain network visualization (nodes/connections)
- Clear before/after cost comparison

---

### 8. AI Dashboard
**Location:** DashboardExperience section
**File name suggestion:** `ai-dashboard-mock.png`
**Dimensions:** 16:9 aspect ratio (1600x900px)
**Description:**

**Dashboard showing:**
- Receipt photo being parsed by AI
- OCR text extraction visualization
- Item categorization: "Food: $45.00, Alcohol: $32.00"
- Auto-split suggestions
- Progress indicators for AI processing

**Design notes:**
- Dark UI (black background)
- Receipt image with scan lines/highlights
- Data extraction visualized with connecting lines
- Progress bars, loading states
- Clean data tables

---

## 📍 Additional Section Assets

### 9. Live Event Feed
**Location:** DashboardExperience section (optional enhancement)
**File name suggestion:** `live-feed-mock.png`
**Dimensions:** Vertical phone mockup (750x1334px)
**Description:**

**Mobile feed showing:**
- Real-time transactions scrolling
- User avatars with payments
- Reaction emojis on transactions
- Net position ticker at top
- "Not Mine" dispute button

---

### 10. Enterprise Manager View
**Location:** EnterprisePower section (optional)
**File name suggestion:** `manager-dashboard.png`
**Dimensions:** 16:9 aspect ratio (1600x900px)
**Description:**

**Dashboard showing:**
- Pending request card: "Sarah Chen - $200 for supplies"
- Approve/Decline buttons
- Slack integration notification
- Virtual card generation animation
- QuickBooks sync indicator

---

## 🎯 Priority Order

**Must-Have (Week 1):**
1. ✅ Credit card (DONE - using creditcard.png)
2. Group Score network diagram
3. GPS Travel Mode visualization
4. Phoenix Protocol flow

**Nice-to-Have (Week 2):**
5. Pot Architecture split diagram
6. Integration rich context mockup
7. Stablecoin settlement flow
8. AI Dashboard

**Polish (Week 3):**
9. Live Event Feed mobile mockup
10. Enterprise Manager View

---

## 🛠️ Design Tools Recommendations

**For Diagrams & Flows:**
- Figma (best for UI mockups)
- Sketch
- Adobe XD

**For 3D/Animated Cards:**
- Blender (if you want real 3D)
- Spline (web-based 3D)
- After Effects (for animations)

**For Quick Mockups:**
- Canva Pro (templates available)
- Photoshop
- Figma community templates

---

## 📐 Technical Specs for Each Asset

### Network Diagrams (Group Score, etc.)
- Dark transparent background OR pure black
- Nodes: 80-100px circles
- Lines: 2-3px stroke, primary cyan color
- Text: Inter font, white color
- Shadows: Subtle, 10-20% opacity
- Export: PNG with transparency

### UI Mockups (Dashboard, Manager View, etc.)
- Background: #0D0D0D (dark card color)
- Cards: #1A1A1A (elevated)
- Text: White primary, #A3A3A3 secondary
- Borders: 1px, rgba(255,255,255,0.1)
- Rounded corners: 12-20px
- Shadows: 0 20px 25px rgba(0,0,0,0.3)

### Flow Diagrams (Phoenix, Settlement, etc.)
- Use numbered steps (01, 02, 03)
- Arrows: Primary cyan color
- Icons: 48-64px, stroke style
- Annotations: 12px text, #6B6B6B color
- Layout: Horizontal flow, left to right

---

## 💡 Quick Wins

**If you're short on time:**
1. Use Figma community templates for fintech dashboards
2. Screenshot and modify Tailwind CSS component examples
3. Use Midjourney/DALL-E for quick concept generation
4. Hire on Fiverr for $50-100 per mockup

**Free resources:**
- unDraw.co (illustrations)
- Heroicons.com (icon set)
- Unsplash (photos if needed for use cases)

---

## 📝 Current Placeholders

All placeholders currently show:
- Subtle gradient backgrounds (primary/secondary from logo)
- Border: 1px solid rgba(255,255,255,0.05)
- Rounded corners: 24px
- Text: "Card Visualization", "Pot Architecture", etc.
- They look clean but replacing with actual visuals will 10x the impact

---

## 🚀 Once Assets Are Ready

1. Save images to `/public/` folder
2. Update `src` in respective Image components
3. Maintain aspect ratios (don't distort)
4. Use `priority` prop for above-fold images
5. Add `alt` text for accessibility

**File naming convention:**
- Use kebab-case: `group-score-network.png`
- Be descriptive: `phoenix-card-reissuance-flow.png`
- Add version numbers if iterating: `dashboard-v2.png`

---

Need help with any specific asset? This guide covers everything! 🎨

