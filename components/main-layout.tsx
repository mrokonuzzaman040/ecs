"use client";

import { ReactNode } from "react";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { HeroSlider } from "@/components/hero-slider";
import { NoticeBoard } from "@/components/notice-board";
import { SidebarSection } from "@/components/sidebar-section";
import { useLanguage } from "@/lib/language-context";

// Sidebar data configuration
const electionCommissionLinks = [
  {
    titleBn: "অর্গানোগ্রাম",
    titleEn: "Organogram",
    href: "/organogram",
  },
  {
    titleBn: "প্রধান নির্বাচন কমিশনার ও নির্বাচন কমিশনারবৃন্দ",
    titleEn: "Chief Election Commissioner & Commissioners",
    href: "/commissioners",
  },
  {
    titleBn: "কর্মকর্তাবৃন্দ",
    titleEn: "Officers",
    href: "/officers",
  },
  {
    titleBn: "নির্বাচন কমিশন বার্তা",
    titleEn: "Election Commission News",
    href: "/news",
  },
];

const informationServicesLinks = [
  {
    titleBn: "তথ্য অধিকার",
    titleEn: "Right to Information",
    href: "/information-rights",
  },
  {
    titleBn: "তথ্য প্রদানকারী কর্মকর্তা",
    titleEn: "Information Officer",
    href: "/information-officer",
  },
  {
    titleBn: "জাতীয় শুদ্ধাচার",
    titleEn: "National Integrity",
    href: "/national-integrity",
  },
  {
    titleBn: "ক্রয় সংক্রান্ত",
    titleEn: "Procurement Related",
    href: "/procurement",
  },
];

const importantLinks = [
  {
    titleBn: "জাতীয় পরিচয় নিবন্ধন অনুবিভাগ",
    titleEn: "National ID Registration Wing",
    href: "http://www.nidw.gov.bd/",
    external: true,
  },
  {
    titleBn: "NID অনলাইন সেবা",
    titleEn: "NID Online Service",
    href: "https://services.nidw.gov.bd/nid-pub/",
    external: true,
  },
  {
    titleBn: "ভোটার তালিকা",
    titleEn: "Voter List",
    href: "/voter-list",
  },
  {
    titleBn: "নির্বাচনি ফলাফল",
    titleEn: "Election Results",
    href: "/election-results",
  },
];

interface MainLayoutProps {
  children: ReactNode;
  showRightSidebar?: boolean;
  rightSidebarContent?: ReactNode;
  showHero?: boolean; // optionally hide hero slider (e.g., 404 page)
}

export function MainLayout({ 
  children, 
  showRightSidebar = true, 
  rightSidebarContent,
  showHero = true,
}: MainLayoutProps) {
  const { t } = useLanguage();

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        {showHero && <HeroSlider />}
        
        {/* Main Content with Sidebars */}
        <div className="container max-w-7xl mx-auto px-4 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Left Sidebar - Always Visible */}
            <aside className="lg:col-span-3 space-y-6">
              <div className="sticky top-20 space-y-6">
                <NoticeBoard />
                
                <SidebarSection
                  titleBn="নির্বাচন কমিশন"
                  titleEn="Election Commission"
                  links={electionCommissionLinks}
                />
                
                <SidebarSection
                  titleBn="তথ্য অধিকার ও অন্যান্য সেবা"
                  titleEn="Right to Information & Other Services"
                  links={informationServicesLinks}
                />
                
                <SidebarSection
                  titleBn="গুরুত্বপূর্ণ লিংকসমূহ"
                  titleEn="Important Links"
                  links={importantLinks}
                />
              </div>
            </aside>

            {/* Dynamic Main Content */}
            <div className={showRightSidebar ? "lg:col-span-6" : "lg:col-span-9"}>
              {children}
            </div>

            {/* Right Sidebar - Optional */}
            {showRightSidebar && (
              <aside className="lg:col-span-3">
                <div className="sticky top-20">
                  {rightSidebarContent || (
                    <div className="bg-card border rounded-lg p-4 shadow-sm">
                      <h2 className="text-lg font-bold text-primary mb-4 pb-2 border-b">
                        {t("nav.language") === "bn" ? "দ্রুত লিংক" : "Quick Links"}
                      </h2>
                      <div className="space-y-2 text-sm text-muted-foreground">
                        <p className="italic">
                          {t("nav.language") === "bn" 
                            ? "শীঘ্রই আসছে..." 
                            : "Coming soon..."}
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              </aside>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
