"use client";

import { useLanguage } from "@/lib/language-context";

interface SidebarLink {
  titleBn: string;
  titleEn: string;
  href: string;
  external?: boolean;
}

interface SidebarSectionProps {
  titleBn: string;
  titleEn: string;
  links: SidebarLink[];
}

export function SidebarSection({ titleBn, titleEn, links }: SidebarSectionProps) {
  const { language } = useLanguage();
  const isBangla = language === "bn";

  return (
    <div className="bg-card border rounded-lg p-4 shadow-sm">
      <h2 className="text-lg font-bold text-primary mb-4 pb-2 border-b">
        {isBangla ? titleBn : titleEn}
      </h2>
      <ul className="space-y-2">
        {links.map((link, index) => (
          <li key={index}>
            <a
              href={link.href}
              target={link.external ? "_blank" : undefined}
              rel={link.external ? "noopener noreferrer" : undefined}
              className="text-sm hover:text-primary transition-colors flex items-center gap-2"
            >
              <span className="text-primary">■</span>
              {isBangla ? link.titleBn : link.titleEn}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
