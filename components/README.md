# Government Portal Components

This directory contains the main components for the Government Portal application built with Next.js, ShadcnUI, and TailwindCSS.

## Components

### Navbar (`navbar.tsx`)
A professional, responsive navigation bar with the following features:
- **Sticky header** with blur effect on scroll
- **Desktop navigation** with dropdown menus for complex menu structures
- **Mobile-responsive** with a side sheet menu
- **ShadcnUI NavigationMenu** for accessible navigation
- Login and Register CTAs

**Usage:**
```tsx
import { Navbar } from "@/components/navbar";

<Navbar />
```

### Footer (`footer.tsx`)
A comprehensive footer component featuring:
- **Brand information** with logo
- **Contact details** (phone, email, address)
- **Social media links** (Facebook, Twitter, LinkedIn)
- **Multiple link sections** (Quick Links, Resources, Departments, Legal)
- Fully responsive layout

**Usage:**
```tsx
import { Footer } from "@/components/footer";

<Footer />
```

### Hero Slider (`hero-slider.tsx`)
A modern, animated hero slider using Embla Carousel:
- **Auto-play** with 5-second intervals
- **Navigation controls** (previous/next buttons)
- **Dot indicators** for slide navigation
- **Responsive design** with different heights for various screen sizes
- **Background images** with overlay for better text readability
- **Call-to-action buttons** for each slide

**Usage:**
```tsx
import { HeroSlider } from "@/components/hero-slider";

<HeroSlider />
```

## Technologies Used

- **Next.js 16** - React framework
- **ShadcnUI** - UI component library (New York style)
- **TailwindCSS 4** - Utility-first CSS framework
- **Embla Carousel** - Modern carousel library with autoplay
- **Lucide React** - Icon library
- **TypeScript** - Type safety

## Customization

### Navbar
Edit the `navigationItems` array in `navbar.tsx` to customize menu items:

```tsx
const navigationItems = [
  {
    title: "Your Title",
    href: "/your-path",
    description: "Description",
    items: [ /* sub-items */ ]
  }
];
```

### Footer
Modify the `footerLinks` object in `footer.tsx` to update footer sections.

### Hero Slider
Update the `slides` array in `hero-slider.tsx` to change slide content:

```tsx
const slides: Slide[] = [
  {
    id: 1,
    title: "Your Title",
    subtitle: "Subtitle",
    description: "Description",
    image: "image-url",
    cta: { text: "Button Text", href: "/path" }
  }
];
```

## Installation

These components require the following dependencies:

```bash
# Install ShadcnUI components
npx shadcn@latest add button sheet navigation-menu separator card

# Install Embla Carousel
pnpm add embla-carousel-react embla-carousel-autoplay
```

## Notes

- All components are fully responsive and mobile-friendly
- Components follow accessibility best practices
- Designed specifically for government/public sector websites
- Easy to customize colors, spacing, and content
