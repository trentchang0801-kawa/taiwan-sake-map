# Taiwan Craft Alcohol Map - Design Guidelines

## Design Approach

**Selected Approach:** Reference-Based (Discovery Platform Pattern)

**Primary References:** 
- Airbnb (exploration and card-based discovery)
- Vivino/Untappd (alcohol discovery apps)
- Traditional Taiwan cultural aesthetics

**Key Principles:**
- Premium yet approachable craft alcohol aesthetic
- Cultural authenticity celebrating Taiwan's brewing heritage
- Intuitive discovery through visual exploration
- Mobile-first responsive design for on-the-go exploration

## Core Design Elements

### A. Color Palette

**Light Mode:**
- Primary: 160 50% 45% (Mountain green - Taiwan's landscape)
- Secondary: 25 65% 55% (Amber/wheat - brewing tradition)
- Neutral: 220 15% 25% (Deep charcoal for text)
- Background: 40 30% 96% (Warm off-white)
- Accent: 200 80% 50% (Ocean blue - Taiwan Strait) - Use sparingly for CTAs only

**Dark Mode:**
- Primary: 160 45% 55% (Softer mountain green)
- Secondary: 25 55% 60% (Lighter amber)
- Neutral: 220 10% 85% (Light gray for text)
- Background: 220 18% 12% (Rich dark base)
- Surface: 220 15% 18% (Card/component background)

### B. Typography

**Font Families:**
- Headings: 'Noto Sans TC' (supports Traditional Chinese) at 700 weight
- Body: 'Inter' at 400-500 weight
- Accent/Numbers: 'Playfair Display' for rankings/scores at 600 weight

**Scale:**
- Hero/Page Titles: text-4xl to text-6xl
- Section Headings: text-2xl to text-3xl
- Card Titles: text-lg to text-xl
- Body Text: text-base
- Captions/Meta: text-sm

### C. Layout System

**Spacing Primitives:** Use Tailwind units of 3, 4, 6, 8, 12, 16 for consistent rhythm
- Cards: p-6, gap-4
- Sections: py-16 md:py-24
- Grid gaps: gap-6 md:gap-8

**Container Widths:**
- Full-width sections: max-w-7xl mx-auto
- Content sections: max-w-6xl mx-auto
- Brewery details: max-w-4xl mx-auto

**Grid Patterns:**
- Brewery cards: grid-cols-1 md:grid-cols-2 lg:grid-cols-3
- Rankings: grid-cols-1 lg:grid-cols-2 (side-by-side comparison)
- Product items: grid-cols-2 md:grid-cols-3 lg:grid-cols-4

### D. Component Library

**Interactive Taiwan Map:**
- SVG or high-quality PNG of Taiwan divided into regions
- Hover state: Subtle glow/highlight on region with elevated z-index
- Click state: Smooth transition to brewery list or modal
- Region labels appear on hover with brewery count

**Brewery Discovery Cards:**
- Image-first design with 16:9 aspect ratio hero image
- Overlay gradient at bottom for text readability
- Brewery name, type badge (清酒/精釀啤酒/葡萄酒), rating stars
- Location text and quick "探索" (Explore) CTA
- Rounded corners (rounded-xl), subtle shadow (shadow-lg)
- Smooth scale transform on hover (hover:scale-105 transition-transform)

**Brewery Detail Page Layout:**
- Hero section with brewery hero image (aspect-video or h-96)
- Two-column layout on desktop: Info (2/3) + Quick Facts sidebar (1/3)
- Tabbed sections: 品項 (Products), 評論 (Reviews), 搭餐 (Food Pairings)
- Purchase button prominently placed, sticky on scroll
- Image gallery in grid format for products

**Ranking Components:**
- Top 5 list with large rank numbers (using Playfair Display)
- Medal icons for top 3 (gold/silver/bronze using accent colors)
- Horizontal cards showing: rank, brewery image, name, score, trend indicator
- Filter tabs above for alcohol type selection

**Navigation:**
- Sticky header with logo, category pills (清酒/啤酒/葡萄酒), search, rankings link
- Mobile: Hamburger menu with slide-in drawer
- Breadcrumbs on detail pages for easy navigation

**Forms & Interactions:**
- Review submission: Star rating selector, text area, food pairing checkboxes
- Search bar with autocomplete dropdown
- Filter chips with active state highlighting
- Loading states with skeleton screens for cards

### E. Visual Enhancements

**Imagery Strategy:**
- Hero: Large Taiwan landscape with craft alcohol elements (bottles, barrels, brewing equipment) - h-[70vh] with overlay text
- Brewery cards: Professional photos of facilities, bottles, or brewing process
- Product images: Clean, well-lit product shots on neutral backgrounds
- Background patterns: Subtle Taiwan topographic map or rice grain textures at low opacity

**Micro-interactions:**
- Smooth page transitions using React Router
- Card hover lifts with shadow expansion
- Region highlights on map with gentle pulse animation
- Rating stars fill animation on click
- "加入最愛" (Add to Favorites) heart button with bounce effect

**Content Sections:**
1. Hero with interactive Taiwan map overlay
2. Featured breweries carousel
3. Explore by alcohol type grid
4. Top-ranked breweries spotlight
5. Recent reviews stream
6. Educational content (brewing process cards)
7. Newsletter signup with Taiwan-inspired illustration

## Taiwan Cultural Elements

- Incorporate subtle patterns inspired by Taiwan aboriginal textiles
- Use food pairing imagery featuring Taiwan cuisine (滷肉飯, 小籠包, 臭豆腐)
- Bilingual UI with Traditional Chinese primary, English secondary
- Color choices reflect Taiwan's natural beauty (mountains, coast, tea plantations)

This design creates a sophisticated yet accessible platform celebrating Taiwan's craft alcohol culture through intuitive exploration and rich visual storytelling.