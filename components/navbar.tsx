"use client";

import * as React from "react";
import Link from "next/link";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/lib/language-context";
import { LanguageToggle } from "@/components/language-toggle";
import Image from "next/image";

export function Navbar() {
  const { t } = useLanguage();
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [isOpen, setIsOpen] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navigationItems = [
    {
      title: t("nav.about"),
      href: "/about",
      items: [
        {
          title: t("nav.about.overview"),
          href: "/about/overview",
          description: t("nav.about.overview.desc"),
        },
        {
          title: t("nav.about.leadership"),
          href: "/about/leadership",
          description: t("nav.about.leadership.desc"),
        },
        {
          title: t("nav.about.departments"),
          href: "/about/departments",
          description: t("nav.about.departments.desc"),
        },
      ],
    },
    {
      title: t("nav.services"),
      href: "/services",
      items: [
        {
          title: t("nav.services.citizen"),
          href: "/services/citizen",
          description: t("nav.services.citizen.desc"),
        },
        {
          title: t("nav.services.business"),
          href: "/services/business",
          description: t("nav.services.business.desc"),
        },
        {
          title: t("nav.services.portal"),
          href: "/services/portal",
          description: t("nav.services.portal.desc"),
        },
      ],
    },
    {
      title: t("nav.news"),
      href: "/news",
    },
    {
      title: t("nav.contact"),
      href: "/contact",
    },
  ];

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        isScrolled
          ? "bg-white/95 backdrop-blur supports-backdrop-filter:bg-white/80 shadow-md"
          : "bg-white"
      )}
    >
      <div className="container max-w-7xl mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="flex h-30 w-30 items-center justify-center rounded-md bg-primary">
              <Image
                src="/logo.svg"
                alt="ECS Logo"
                width={90}
                height={90}
                className="object-contain"
              />
            </div>
            <div className="hidden md:block">
              <span className="text-lg font-bold text-primary">
                {t("nav.portalName")}
              </span>
              <p className="text-xs text-muted-foreground">
                {t("nav.tagline")}
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <NavigationMenu className="hidden lg:flex">
            <NavigationMenuList>
              {navigationItems.map((item) => (
                <NavigationMenuItem key={item.title}>
                  {item.items ? (
                    <>
                      <NavigationMenuTrigger>{item.title}</NavigationMenuTrigger>
                      <NavigationMenuContent>
                        <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                          {item.items.map((subItem) => (
                            <ListItem
                              key={subItem.title}
                              title={subItem.title}
                              href={subItem.href}
                            >
                              {subItem.description}
                            </ListItem>
                          ))}
                        </ul>
                      </NavigationMenuContent>
                    </>
                  ) : (
                    <NavigationMenuLink asChild>
                      <Link href={item.href}>
                        {item.title}
                      </Link>
                    </NavigationMenuLink>
                  )}
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>

          {/* CTA Buttons & Language Toggle */}
          <div className="hidden lg:flex items-center space-x-2">
            <LanguageToggle />
            <Button variant="outline" asChild>
              <Link href="/login">{t("nav.login")}</Link>
            </Button>
            <Button asChild>
              <Link href="/register">{t("nav.register")}</Link>
            </Button>
          </div>

          {/* Mobile Menu */}
          <div className="flex items-center space-x-2 lg:hidden">
            <LanguageToggle />
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <nav className="flex flex-col space-y-4 mt-8">
                  {navigationItems.map((item) => (
                    <div key={item.title}>
                      <SheetClose asChild>
                        <Link
                          href={item.href}
                          className="block py-2 text-lg font-semibold hover:text-primary transition-colors"
                        >
                          {item.title}
                        </Link>
                      </SheetClose>
                      {item.items && (
                        <div className="ml-4 mt-2 space-y-2">
                          {item.items.map((subItem) => (
                            <SheetClose asChild key={subItem.title}>
                              <Link
                                href={subItem.href}
                                className="block py-1 text-sm text-muted-foreground hover:text-primary transition-colors"
                              >
                                {subItem.title}
                              </Link>
                            </SheetClose>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                  <div className="pt-4 space-y-2">
                    <Button variant="outline" className="w-full" asChild>
                      <Link href="/login">{t("nav.login")}</Link>
                    </Button>
                    <Button className="w-full" asChild>
                      <Link href="/register">{t("nav.register")}</Link>
                    </Button>
                  </div>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
