"use client";

import React, { createContext, useContext, useState } from "react";

type Language = "en" | "bn";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  en: {
    // Navbar
    "nav.about": "About Us",
    "nav.services": "Services",
    "nav.news": "News & Updates",
    "nav.contact": "Contact",
    "nav.login": "Login",
    "nav.register": "Register",
    "nav.portalName": "Election Commission",
    "nav.tagline": "Serving Our Citizens",
    
    // About submenu
    "nav.about.overview": "Overview",
    "nav.about.overview.desc": "Our organization's history and purpose",
    "nav.about.leadership": "Leadership",
    "nav.about.leadership.desc": "Meet our team and leadership",
    "nav.about.departments": "Departments",
    "nav.about.departments.desc": "Explore our various departments",
    
    // Services submenu
    "nav.services.citizen": "Citizen Services",
    "nav.services.citizen.desc": "Essential services for citizens",
    "nav.services.business": "Business Services",
    "nav.services.business.desc": "Resources for businesses",
    "nav.services.portal": "Online Portal",
    "nav.services.portal.desc": "Access digital services",
    
    // Footer
    "footer.description": "Official government portal providing comprehensive information and services to citizens, businesses, and visitors. Your gateway to efficient public services.",
    "footer.quickLinks": "Quick Links",
    "footer.resources": "Resources",
    "footer.departments": "Departments",
    "footer.legal": "Legal",
    "footer.copyright": "Election Commission. All rights reserved.",
    
    // Footer links
    "footer.publications": "Publications",
    "footer.forms": "Forms & Documents",
    "footer.faq": "FAQs",
    "footer.sitemap": "Sitemap",
    "footer.privacy": "Privacy Policy",
    "footer.terms": "Terms of Service",
    "footer.accessibility": "Accessibility",
    "footer.copyrightLink": "Copyright",
    "footer.health": "Health Department",
    "footer.education": "Education",
    "footer.publicWorks": "Public Works",
    "footer.finance": "Finance",
    
    // Home page
    "home.welcome": "Welcome to Our Government Portal",
    "home.description": "Your one-stop destination for all government services, information, and resources.",
    "home.citizenServices": "Citizen Services",
    "home.citizenServices.desc": "Access essential services including permits, licenses, and documentation.",
    "home.businessResources": "Business Resources",
    "home.businessResources.desc": "Find information and support for starting and growing your business.",
    "home.onlinePortal": "Online Portal",
    "home.onlinePortal.desc": "Complete transactions and access digital services from anywhere.",
    "home.learnMore": "Learn more",
    
    // Hero Slider
    "hero.slide1.title": "Digital Services for Citizens",
    "hero.slide1.subtitle": "Empowering Communities Through Technology",
    "hero.slide1.description": "Access government services online, anytime, anywhere. Experience faster, more efficient public services designed with you in mind.",
    "hero.slide1.cta": "Explore Services",
    "hero.slide1.ctaSecondary": "Learn More",
    
    "hero.slide2.title": "Building a Better Future",
    "hero.slide2.subtitle": "Innovation in Public Service",
    "hero.slide2.description": "Our commitment to excellence drives us to continuously improve and modernize our services for the benefit of all citizens.",
    "hero.slide2.cta": "View Projects",
    "hero.slide2.ctaSecondary": "Get Involved",
    
    "hero.slide3.title": "Transparent Governance",
    "hero.slide3.subtitle": "Your Voice Matters",
    "hero.slide3.description": "Stay informed about government initiatives, policies, and decisions. We believe in open communication and accountability.",
    "hero.slide3.cta": "Read Updates",
    "hero.slide3.ctaSecondary": "Contact Us",
    
    "hero.slide4.title": "Supporting Local Communities",
    "hero.slide4.subtitle": "Together We Thrive",
    "hero.slide4.description": "Discover programs and resources designed to strengthen our communities and improve quality of life for all residents.",
    "hero.slide4.cta": "Community Programs",
    "hero.slide4.ctaSecondary": "Join Now",
  },
  bn: {
    // Navbar
    "nav.about": "আমাদের সম্পর্কে",
    "nav.services": "সেবাসমূহ",
    "nav.news": "সংবাদ ও হালনাগাদ",
    "nav.contact": "যোগাযোগ",
    "nav.login": "লগইন",
    "nav.register": "নিবন্ধন",
    "nav.portalName": "নির্বাচন কমিশন",
    "nav.tagline": "নাগরিকদের সেবায় নিয়োজিত",
    
    // About submenu
    "nav.about.overview": "সংক্ষিপ্ত বিবরণ",
    "nav.about.overview.desc": "আমাদের সংস্থার ইতিহাস এবং উদ্দেশ্য",
    "nav.about.leadership": "নেতৃত্ব",
    "nav.about.leadership.desc": "আমাদের টিম এবং নেতৃত্বের সাথে পরিচিত হন",
    "nav.about.departments": "বিভাগসমূহ",
    "nav.about.departments.desc": "আমাদের বিভিন্ন বিভাগ অন্বেষণ করুন",
    
    // Services submenu
    "nav.services.citizen": "নাগরিক সেবা",
    "nav.services.citizen.desc": "নাগরিকদের জন্য প্রয়োজনীয় সেবা",
    "nav.services.business": "ব্যবসা সেবা",
    "nav.services.business.desc": "ব্যবসার জন্য সম্পদ",
    "nav.services.portal": "অনলাইন পোর্টাল",
    "nav.services.portal.desc": "ডিজিটাল সেবা অ্যাক্সেস করুন",
    
    // Footer
    "footer.description": "সরকারী পোর্টাল যা নাগরিক, ব্যবসা এবং দর্শকদের জন্য ব্যাপক তথ্য এবং সেবা প্রদান করে। দক্ষ জনসেবার আপনার প্রবেশদ্বার।",
    "footer.quickLinks": "দ্রুত লিংক",
    "footer.resources": "সম্পদ",
    "footer.departments": "বিভাগসমূহ",
    "footer.legal": "আইনি",
    "footer.copyright": "নির্বাচন কমিশন। সর্বস্বত্ব সংরক্ষিত।",
    
    // Footer links
    "footer.publications": "প্রকাশনা",
    "footer.forms": "ফর্ম ও নথি",
    "footer.faq": "প্রায়শই জিজ্ঞাসিত প্রশ্ন",
    "footer.sitemap": "সাইটম্যাপ",
    "footer.privacy": "গোপনীয়তা নীতি",
    "footer.terms": "সেবার শর্তাবলী",
    "footer.accessibility": "প্রবেশযোগ্যতা",
    "footer.copyrightLink": "কপিরাইট",
    "footer.health": "স্বাস্থ্য বিভাগ",
    "footer.education": "শিক্ষা",
    "footer.publicWorks": "জনকল্যাণ",
    "footer.finance": "অর্থ",
    
    // Home page
    "home.welcome": "আমাদের সরকারি পোর্টালে স্বাগতম",
    "home.description": "সমস্ত সরকারি সেবা, তথ্য এবং সম্পদের জন্য আপনার এক-স্টপ গন্তব্য।",
    "home.citizenServices": "নাগরিক সেবা",
    "home.citizenServices.desc": "পারমিট, লাইসেন্স এবং ডকুমেন্টেশন সহ প্রয়োজনীয় সেবা অ্যাক্সেস করুন।",
    "home.businessResources": "ব্যবসা সম্পদ",
    "home.businessResources.desc": "আপনার ব্যবসা শুরু এবং বৃদ্ধির জন্য তথ্য এবং সহায়তা খুঁজুন।",
    "home.onlinePortal": "অনলাইন পোর্টাল",
    "home.onlinePortal.desc": "যেকোনো জায়গা থেকে লেনদেন সম্পন্ন করুন এবং ডিজিটাল সেবা অ্যাক্সেস করুন।",
    "home.learnMore": "আরও জানুন",
    
    // Hero Slider
    "hero.slide1.title": "নাগরিকদের জন্য ডিজিটাল সেবা",
    "hero.slide1.subtitle": "প্রযুক্তির মাধ্যমে সম্প্রদায়কে ক্ষমতায়ন",
    "hero.slide1.description": "যেকোনো সময়, যেকোনো জায়গা থেকে সরকারি সেবা অনলাইনে অ্যাক্সেস করুন। আপনার জন্য ডিজাইন করা দ্রুত, আরও দক্ষ জনসেবা অভিজ্ঞতা করুন।",
    "hero.slide1.cta": "সেবা অন্বেষণ করুন",
    "hero.slide1.ctaSecondary": "আরও জানুন",
    
    "hero.slide2.title": "একটি ভাল ভবিষ্যত নির্মাণ",
    "hero.slide2.subtitle": "জনসেবায় উদ্ভাবন",
    "hero.slide2.description": "উৎকর্ষতার প্রতি আমাদের প্রতিশ্রুতি আমাদেরকে সমস্ত নাগরিকদের সুবিধার জন্য আমাদের সেবাগুলি ক্রমাগত উন্নত এবং আধুনিকীকরণ করতে চালিত করে।",
    "hero.slide2.cta": "প্রকল্প দেখুন",
    "hero.slide2.ctaSecondary": "অংশগ্রহণ করুন",
    
    "hero.slide3.title": "স্বচ্ছ শাসন",
    "hero.slide3.subtitle": "আপনার কণ্ঠস্বর গুরুত্বপূর্ণ",
    "hero.slide3.description": "সরকারি উদ্যোগ, নীতি এবং সিদ্ধান্ত সম্পর্কে অবগত থাকুন। আমরা খোলা যোগাযোগ এবং জবাবদিহিতায় বিশ্বাস করি।",
    "hero.slide3.cta": "আপডেট পড়ুন",
    "hero.slide3.ctaSecondary": "যোগাযোগ করুন",
    
    "hero.slide4.title": "স্থানীয় সম্প্রদায়ের সহায়তা",
    "hero.slide4.subtitle": "একসাথে আমরা সমৃদ্ধ হই",
    "hero.slide4.description": "আমাদের সম্প্রদায়গুলিকে শক্তিশালী করতে এবং সমস্ত বাসিন্দাদের জন্য জীবনযাত্রার মান উন্নত করতে ডিজাইন করা প্রোগ্রাম এবং সম্পদ আবিষ্কার করুন।",
    "hero.slide4.cta": "সম্প্রদায় প্রোগ্রাম",
    "hero.slide4.ctaSecondary": "এখনই যোগ দিন",
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>(() => {
    // Initialize from localStorage on mount
    if (typeof window !== "undefined") {
      const savedLang = localStorage.getItem("language") as Language;
      if (savedLang && (savedLang === "en" || savedLang === "bn")) {
        return savedLang;
      }
    }
    return "bn"; // Default to Bengali
  });

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang);
    if (typeof window !== "undefined") {
      localStorage.setItem("language", lang);
    }
  };

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations.en] || key;
  };

  return (
    <LanguageContext.Provider
      value={{ language, setLanguage: handleSetLanguage, t }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
