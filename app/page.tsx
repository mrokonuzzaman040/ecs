"use client";

import { MainLayout } from "@/components/main-layout";
import { useLanguage } from "@/lib/language-context";

export default function Home() {
  const { t } = useLanguage();
  
  return (
    <MainLayout>
      <section className="space-y-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">{t("home.welcome")}</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t("home.description")}
          </p>
        </div>
        
        <div className="grid grid-cols-1 gap-6">
          <div className="p-6 border rounded-lg hover:shadow-lg transition-shadow bg-card">
            <h3 className="text-xl font-semibold mb-3">{t("home.citizenServices")}</h3>
            <p className="text-muted-foreground mb-4">
              {t("home.citizenServices.desc")}
            </p>
            <a href="/services/citizen" className="text-primary hover:underline">
              {t("home.learnMore")} →
            </a>
          </div>
          
          <div className="p-6 border rounded-lg hover:shadow-lg transition-shadow bg-card">
            <h3 className="text-xl font-semibold mb-3">{t("home.businessResources")}</h3>
            <p className="text-muted-foreground mb-4">
              {t("home.businessResources.desc")}
            </p>
            <a href="/services/business" className="text-primary hover:underline">
              {t("home.learnMore")} →
            </a>
          </div>
          
          <div className="p-6 border rounded-lg hover:shadow-lg transition-shadow bg-card">
            <h3 className="text-xl font-semibold mb-3">{t("home.onlinePortal")}</h3>
            <p className="text-muted-foreground mb-4">
              {t("home.onlinePortal.desc")}
            </p>
            <a href="/services/portal" className="text-primary hover:underline">
              {t("home.learnMore")} →
            </a>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}
