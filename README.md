# Government Portal - Next.js Application

A modern, professional government portal built with Next.js 16, ShadcnUI, and TailwindCSS. This application features a responsive design with a comprehensive navigation system, hero slider, and footer optimized for public sector websites.

![Next.js](https://img.shields.io/badge/Next.js-16.0.0-black)
![React](https://img.shields.io/badge/React-19.2.0-blue)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-4-38bdf8)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue)

## ✨ Features

- ✅ **Responsive Navbar** with dropdown menus and mobile-friendly design
- ✅ **Auto-playing Hero Slider** with 4 pre-configured slides
- ✅ **Comprehensive Footer** with social links and site navigation
- ✅ **ShadcnUI Components** for consistent, accessible design
- ✅ **Full TypeScript** support for type safety
- ✅ **Optimized Performance** with Next.js App Router
- ✅ **Modern UI/UX** designed for government/public sector

## 🚀 Quick Start

First, install dependencies:

```bash
pnpm install
```

Then, run the development server:

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) to view your application.

## 📦 What's Included

### Components

- **Navbar** (`/components/navbar.tsx`) - Sticky navigation with dropdowns
- **Footer** (`/components/footer.tsx`) - Multi-column footer with links
- **Hero Slider** (`/components/hero-slider.tsx`) - Auto-playing carousel
- **ShadcnUI Components** (`/components/ui/*`) - Button, Sheet, Navigation Menu, etc.

### Documentation

- 📖 [Setup Complete Guide](./SETUP_COMPLETE.md) - Full setup documentation
- 🎨 [Component Guide](./COMPONENT_GUIDE.md) - Visual guide and customization
- 📋 [Components README](./components/README.md) - Detailed component documentation

## 🎨 Customization

### Update Navigation Links

Edit `/components/navbar.tsx`:

```tsx
const navigationItems = [
  {
    title: "Your Section",
    href: "/your-path",
    items: [/* sub-items */]
  }
];
```

### Change Hero Slides

Edit `/components/hero-slider.tsx`:

```tsx
const slides: Slide[] = [
  {
    id: 1,
    title: "Your Title",
    subtitle: "Subtitle",
    description: "Description",
    image: "image-url",
    cta: { text: "Button", href: "/link" }
  }
];
```

### Modify Footer

Edit `/components/footer.tsx` to update footer sections and links.

## 🛠️ Tech Stack

- **Framework**: Next.js 16.0.0 (App Router)
- **UI Library**: React 19.2.0
- **Styling**: TailwindCSS 4
- **Components**: ShadcnUI (New York style)
- **Carousel**: Embla Carousel 8.6.0
- **Icons**: Lucide React
- **Language**: TypeScript 5
- **Package Manager**: pnpm

## 📂 Project Structure

```
ecs/
├── app/
│   ├── globals.css       # Global styles
│   ├── layout.tsx        # Root layout
│   └── page.tsx          # Home page
├── components/
│   ├── ui/               # ShadcnUI components
│   ├── navbar.tsx        # Navigation component
│   ├── footer.tsx        # Footer component
│   ├── hero-slider.tsx   # Hero slider
│   ├── index.ts          # Component exports
│   └── README.md         # Component docs
├── lib/
│   └── utils.ts          # Utility functions
└── public/               # Static assets
```

## 🎯 Available Scripts

```bash
# Development
pnpm dev          # Start dev server
pnpm build        # Build for production
pnpm start        # Start production server
pnpm lint         # Run ESLint
```

## 🌐 Browser Support

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)

## ♿ Accessibility

All components follow WCAG 2.1 AA standards:
- Semantic HTML
- ARIA labels
- Keyboard navigation
- Focus management
- Screen reader support

## 📱 Responsive Design

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px  
- **Desktop**: > 1024px

## 🔧 Configuration

### ShadcnUI

Configuration in `components.json`:
- Style: New York
- Base Color: Neutral
- CSS Variables: Enabled

### TailwindCSS

Theme customization in `app/globals.css` using CSS variables.

## 📚 Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
