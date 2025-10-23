"use client";

import Link from "next/link";
import { Facebook, Twitter, Linkedin, Mail, Phone, MapPin } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/lib/language-context";
import Image from "next/image";

const socialLinks = [
  { icon: Facebook, href: "https://facebook.com", label: "Facebook" },
  { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
  { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
];

export function Footer() {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    quickLinks: [
      { title: t("nav.about"), href: "/about" },
      { title: t("nav.services"), href: "/services" },
      { title: t("nav.news"), href: "/news" },
      { title: t("nav.contact"), href: "/contact" },
    ],
    resources: [
      { title: t("footer.publications"), href: "/publications" },
      { title: t("footer.forms"), href: "/forms" },
      { title: t("footer.faq"), href: "/faq" },
      { title: t("footer.sitemap"), href: "/sitemap" },
    ],
    legal: [
      { title: t("footer.privacy"), href: "/privacy" },
      { title: t("footer.terms"), href: "/terms" },
      { title: t("footer.accessibility"), href: "/accessibility" },
      { title: t("footer.copyrightLink"), href: "/copyright" },
    ],
    departments: [
      { title: t("footer.health"), href: "/departments/health" },
      { title: t("footer.education"), href: "/departments/education" },
      { title: t("footer.publicWorks"), href: "/departments/public-works" },
      { title: t("footer.finance"), href: "/departments/finance" },
    ],
  };

  return (
    <footer className="bg-muted/50 border-t">
      {/* Main Footer */}
      <div className="container max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <div className="flex h-20 w-20 items-center justify-center rounded-md bg-primary">
                <Image
                    src="/logo.svg"
                    alt="Government Logo"
                    width={55}
                    height={55}
                  />
              </div>
              <div>
                <span className="text-lg font-bold text-primary">
                  {t("nav.portalName")}
                </span>
                <p className="text-xs text-muted-foreground">
                  {t("nav.tagline")}
                </p>
              </div>
            </Link>
            <p className="text-sm text-muted-foreground mb-6 max-w-md">
              {t("footer.description")}
            </p>

            {/* Contact Info */}
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2 text-muted-foreground">
                <Phone className="h-4 w-4" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Mail className="h-4 w-4" />
                <span>info@government.gov</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <MapPin className="h-4 w-4" />
                <span>123 Government Ave, Capital City</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-2 mt-6">
              {socialLinks.map((social) => (
                <Button
                  key={social.label}
                  variant="outline"
                  size="icon"
                  asChild
                  className="h-9 w-9"
                >
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                  >
                    <social.icon className="h-4 w-4" />
                  </a>
                </Button>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-sm mb-4">{t("footer.quickLinks")}</h3>
            <ul className="space-y-2">
              {footerLinks.quickLinks.map((link) => (
                <li key={link.title}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-semibold text-sm mb-4">{t("footer.resources")}</h3>
            <ul className="space-y-2">
              {footerLinks.resources.map((link) => (
                <li key={link.title}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Departments */}
          <div>
            <h3 className="font-semibold text-sm mb-4">{t("footer.departments")}</h3>
            <ul className="space-y-2">
              {footerLinks.departments.map((link) => (
                <li key={link.title}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <Separator />

      {/* Bottom Footer */}
      <div className="container max-w-7xl mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground text-center md:text-left">
            © {currentYear} {t("footer.copyright")}
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {footerLinks.legal.map((link) => (
              <Link
                key={link.title}
                href={link.href}
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                {link.title}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
