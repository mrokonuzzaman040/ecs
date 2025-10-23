# Layout Structure Documentation

## Overview

The application uses a reusable `MainLayout` component that ensures consistency across all pages. The layout includes:

- **Navbar** (top navigation with language toggle)
- **Hero Slider** (image carousel)
- **Left Sidebar** (notice board and important links)
- **Main Content Area** (dynamic per page)
- **Right Sidebar** (optional)
- **Footer**

## Using MainLayout

### Basic Usage

```tsx
"use client";

import { MainLayout } from "@/components/main-layout";
import { useLanguage } from "@/lib/language-context";

export default function YourPage() {
  const { t } = useLanguage();
  
  return (
    <MainLayout>
      {/* Your dynamic content goes here */}
      <div>
        <h1>Your Page Title</h1>
        <p>Your content...</p>
      </div>
    </MainLayout>
  );
}
```

### Without Right Sidebar

If you want a wider content area without the right sidebar:

```tsx
<MainLayout showRightSidebar={false}>
  {/* Your content will span wider */}
</MainLayout>
```

### Custom Right Sidebar Content

To add custom content to the right sidebar:

```tsx
<MainLayout 
  rightSidebarContent={
    <div className="bg-card border rounded-lg p-4">
      <h2 className="font-bold mb-4">Custom Sidebar</h2>
      <p>Your custom content here</p>
    </div>
  }
>
  {/* Main content */}
</MainLayout>
```

## Layout Sections

### Fixed Sections (Same on Every Page)
- **Navbar**: Navigation menu, language toggle
- **Hero Slider**: 4-slide carousel with government messages
- **Left Sidebar**: 
  - Notice Board
  - Election Commission links
  - Right to Information links
  - Important Links
- **Footer**: Contact info, links, copyright

### Dynamic Section
- **Main Content**: The `children` prop - unique to each page

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `children` | `ReactNode` | Required | Main content for the page |
| `showRightSidebar` | `boolean` | `true` | Show/hide right sidebar |
| `rightSidebarContent` | `ReactNode` | Default placeholder | Custom content for right sidebar |

## Examples

### Example 1: Home Page (app/page.tsx)
- Uses default 3-column layout
- Has right sidebar with "Quick Links" placeholder

### Example 2: About Page (app/about/page.tsx)
- Uses default 3-column layout
- Shows organizational information

### Example 3: Services Page (app/services/page.tsx)
- Uses 2-column layout (`showRightSidebar={false}`)
- Displays service cards in a grid

## File Structure

```
components/
├── main-layout.tsx        # Main layout component
├── navbar.tsx            # Top navigation
├── hero-slider.tsx       # Image carousel
├── footer.tsx            # Footer
├── notice-board.tsx      # Notice board component
├── sidebar-section.tsx   # Reusable sidebar section
└── index.ts              # Component exports

app/
├── layout.tsx            # Root layout (LanguageProvider)
├── page.tsx              # Home page
├── about/
│   └── page.tsx          # About page
└── services/
    └── page.tsx          # Services page
```

## Creating New Pages

1. Create a new folder in `app/` directory
2. Add a `page.tsx` file
3. Import `MainLayout` and `useLanguage`
4. Wrap your content in `<MainLayout>`
5. Use translation keys with `t()` function

```tsx
"use client";

import { MainLayout } from "@/components/main-layout";
import { useLanguage } from "@/lib/language-context";

export default function NewPage() {
  const { t } = useLanguage();
  
  return (
    <MainLayout>
      <h1>{t("nav.language") === "bn" ? "বাংলা শিরোনাম" : "English Title"}</h1>
      {/* Rest of your content */}
    </MainLayout>
  );
}
```

## Benefits

✅ **Consistency**: Same navbar, slider, sidebar, and footer on every page
✅ **DRY Principle**: No code duplication across pages
✅ **Easy Maintenance**: Update layout in one place, applies everywhere
✅ **Flexible**: Optional right sidebar, customizable content
✅ **Clean Code**: Pages only contain their unique content
✅ **Translation Ready**: Full Bengali/English support built-in

## Notes

- All layout sections automatically include translation support
- Left sidebar data is configured in `main-layout.tsx`
- To update sidebar links, edit the arrays in `components/main-layout.tsx`
- The layout is responsive and mobile-friendly
- Sticky positioning keeps sidebars visible while scrolling
