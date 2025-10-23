# 🎨 Component Visual Guide

## Navbar Component

```
┌─────────────────────────────────────────────────────────────────┐
│ [GOV Logo] Government Portal    About ▼  Services ▼  News  Contact │
│                                              [Login] [Register]  │
└─────────────────────────────────────────────────────────────────┘
```

### Desktop Features:
- Logo with text on left
- Navigation menu with dropdowns in center
- Login/Register buttons on right
- Sticky with blur effect on scroll

### Mobile Features:
- Hamburger menu icon
- Side sheet that slides in from right
- All navigation items in vertical layout

---

## Hero Slider Component

```
┌─────────────────────────────────────────────────────────────────┐
│                                                                 │
│  [< ]          🖼️ BACKGROUND IMAGE                        [ >] │
│                                                                 │
│    🏷️ Subtitle Badge                                           │
│                                                                 │
│    📝 LARGE HEADING TEXT                                        │
│                                                                 │
│    Description text goes here explaining the slide             │
│    content and providing context...                            │
│                                                                 │
│    [Primary Button]  [Secondary Button]                        │
│                                                                 │
│                         ⚫ ⚪ ⚪ ⚪                              │
└─────────────────────────────────────────────────────────────────┘
```

### Features:
- Auto-play every 5 seconds
- 4 pre-configured slides with government themes
- Previous/Next navigation arrows
- Dot indicators at bottom
- Responsive heights (500px mobile, 700px desktop)
- Dark overlay for text readability

---

## Footer Component

```
┌─────────────────────────────────────────────────────────────────┐
│                                                                 │
│  [GOV]                                                          │
│  Government Portal    Quick Links      Resources    Departments │
│  Serving Our Citizens                                           │
│                       About Us         Publications  Health     │
│  Official government  Services         Forms        Education   │
│  portal providing...  News             FAQs         Public Works│
│                       Contact          Sitemap      Finance     │
│  📞 +1 (555) 123-4567                                           │
│  ✉️  info@government.gov                                        │
│  📍 123 Government Ave                                          │
│                                                                 │
│  [f] [t] [in]                                                   │
│                                                                 │
├─────────────────────────────────────────────────────────────────┤
│ © 2025 Government Portal    Privacy | Terms | Accessibility    │
└─────────────────────────────────────────────────────────────────┘
```

### Features:
- 5-column layout (2 cols for brand, 3 for links)
- Contact information with icons
- Social media buttons
- Legal links in footer bar
- Fully responsive (stacks on mobile)

---

## Current Home Page Layout

```
┌─────────────────────────────────────────────────────────────────┐
│                        NAVBAR                                   │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│                     HERO SLIDER                                 │
│                   (4 rotating slides)                           │
│                                                                 │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│           Welcome to Our Government Portal                      │
│        Your one-stop destination for all services...            │
│                                                                 │
│  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐            │
│  │   Citizen   │  │  Business   │  │   Online    │            │
│  │  Services   │  │  Resources  │  │   Portal    │            │
│  │             │  │             │  │             │            │
│  │ Learn more →│  │ Learn more →│  │ Learn more →│            │
│  └─────────────┘  └─────────────┘  └─────────────┘            │
│                                                                 │
├─────────────────────────────────────────────────────────────────┤
│                        FOOTER                                   │
└─────────────────────────────────────────────────────────────────┘
```

---

## Color Scheme (Default)

The components use ShadcnUI's theme system with these defaults:

- **Primary**: Blue (customizable via CSS variables)
- **Background**: White
- **Foreground**: Dark gray/black
- **Muted**: Light gray
- **Accent**: Light blue/gray

### Customization
Edit `app/globals.css` to change colors:

```css
:root {
  --primary: 222.2 47.4% 11.2%;
  --primary-foreground: 210 40% 98%;
  /* etc. */
}
```

---

## Responsive Behavior

### Mobile (< 768px)
- Navbar: Hamburger menu
- Hero: 500px height, stacked buttons
- Footer: Single column
- Cards: Single column

### Tablet (768px - 1024px)
- Navbar: Partial menu visible
- Hero: 600px height
- Footer: 2-3 columns
- Cards: 2 columns

### Desktop (> 1024px)
- Navbar: Full menu with dropdowns
- Hero: 700px height, side-by-side buttons
- Footer: 5 columns
- Cards: 3 columns

---

## Icon Usage

Components use **Lucide React** icons:

```tsx
import { Menu, Facebook, Twitter, ChevronLeft } from "lucide-react";
```

Available icons in components:
- Menu (hamburger)
- Facebook, Twitter, LinkedIn (social)
- Phone, Mail, MapPin (contact)
- ChevronLeft, ChevronRight (navigation)

---

## Animation & Transitions

All components include smooth transitions:

- **Navbar**: Scroll effect with backdrop blur
- **Hero Slider**: Smooth slide transitions (300ms)
- **Buttons**: Hover effects with color changes
- **Cards**: Hover shadow effects
- **Links**: Underline on hover

---

## Accessibility Features

✅ **Semantic HTML**: Proper use of header, nav, main, footer
✅ **ARIA Labels**: All interactive elements labeled
✅ **Keyboard Navigation**: Full keyboard support
✅ **Focus Indicators**: Visible focus states
✅ **Screen Readers**: Descriptive text for all actions
✅ **Color Contrast**: WCAG AA compliant

---

## Performance Optimizations

🚀 **Lazy Loading**: Images load on demand
🚀 **Code Splitting**: Components loaded separately
🚀 **CSS Optimization**: TailwindCSS purges unused styles
🚀 **Server Components**: Where possible for better performance
🚀 **Carousel**: Embla is lightweight (~10KB)

---

**All components are production-ready and government project-optimized!** 🏛️
