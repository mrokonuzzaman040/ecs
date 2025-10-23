"use client";

import { MainLayout } from "@/components/main-layout";
import { useLanguage } from "@/lib/language-context";

export default function AboutPage() {
  const { t } = useLanguage();
  
  return (
    <MainLayout>
      <section className="space-y-8">
        <div>
          <h1 className="text-4xl font-bold mb-4">
            {t("nav.language") === "bn" ? "আমাদের সম্পর্কে" : "About Us"}
          </h1>
          <div className="h-1 w-20 bg-primary mb-6"></div>
        </div>
        
        <div className="prose max-w-none">
          <div className="bg-card border rounded-lg p-6 mb-6">
            <h2 className="text-2xl font-semibold mb-4">
              {t("nav.language") === "bn" 
                ? "বাংলাদেশ নির্বাচন কমিশন" 
                : "Bangladesh Election Commission"}
            </h2>
            <p className="text-muted-foreground mb-4">
              {t("nav.language") === "bn"
                ? "বাংলাদেশ নির্বাচন কমিশন একটি স্বাধীন সাংবিধানিক সংস্থা যা বাংলাদেশে স্বাধীন, নিরপেক্ষ ও নির্ভুল নির্বাচন পরিচালনার দায়িত্বে নিয়োজিত।"
                : "The Bangladesh Election Commission is an independent constitutional body responsible for conducting free, fair, and accurate elections in Bangladesh."}
            </p>
            <p className="text-muted-foreground">
              {t("nav.language") === "bn"
                ? "১৯৭২ সালে প্রতিষ্ঠিত হওয়ার পর থেকে, কমিশন দেশের গণতান্ত্রিক প্রক্রিয়া রক্ষা ও উন্নয়নে গুরুত্বপূর্ণ ভূমিকা পালন করে আসছে।"
                : "Since its establishment in 1972, the Commission has played a vital role in safeguarding and advancing the democratic process in the country."}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-card border rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-3 text-primary">
                {t("nav.language") === "bn" ? "আমাদের লক্ষ্য" : "Our Mission"}
              </h3>
              <p className="text-muted-foreground">
                {t("nav.language") === "bn"
                  ? "স্বচ্ছতা, জবাবদিহিতা এবং জনগণের বিশ্বাস বজায় রেখে গণতান্ত্রিক নির্বাচন পরিচালনা করা।"
                  : "To conduct democratic elections with transparency, accountability, and maintaining public trust."}
              </p>
            </div>
            
            <div className="bg-card border rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-3 text-primary">
                {t("nav.language") === "bn" ? "আমাদের দৃষ্টিভঙ্গি" : "Our Vision"}
              </h3>
              <p className="text-muted-foreground">
                {t("nav.language") === "bn"
                  ? "একটি শক্তিশালী গণতান্ত্রিক সংস্কৃতি গড়ে তোলা যেখানে প্রতিটি নাগরিকের ভোট গণনা করা হয়।"
                  : "To build a robust democratic culture where every citizen's vote counts."}
              </p>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}
