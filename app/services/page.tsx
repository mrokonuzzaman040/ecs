"use client";

import { MainLayout } from "@/components/main-layout";
import { useLanguage } from "@/lib/language-context";

export default function ServicesPage() {
  const { t } = useLanguage();
  
  return (
    <MainLayout showRightSidebar={false}>
      <section className="space-y-8">
        <div>
          <h1 className="text-4xl font-bold mb-4">
            {t("nav.language") === "bn" ? "আমাদের সেবাসমূহ" : "Our Services"}
          </h1>
          <div className="h-1 w-20 bg-primary mb-6"></div>
          <p className="text-lg text-muted-foreground">
            {t("nav.language") === "bn"
              ? "বাংলাদেশ নির্বাচন কমিশন নাগরিক ও প্রতিষ্ঠানের জন্য বিভিন্ন সেবা প্রদান করে থাকে।"
              : "The Bangladesh Election Commission provides various services for citizens and organizations."}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-card border rounded-lg p-6 hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
              <span className="text-2xl">📝</span>
            </div>
            <h3 className="text-xl font-semibold mb-3">
              {t("nav.language") === "bn" ? "ভোটার নিবন্ধন" : "Voter Registration"}
            </h3>
            <p className="text-muted-foreground mb-4">
              {t("nav.language") === "bn"
                ? "নতুন ভোটার হিসেবে নিবন্ধন করুন এবং আপনার গণতান্ত্রিক অধিকার প্রয়োগ করুন।"
                : "Register as a new voter and exercise your democratic rights."}
            </p>
            <a href="/services/voter-registration" className="text-primary hover:underline font-medium">
              {t("nav.language") === "bn" ? "আরও জানুন" : "Learn More"} →
            </a>
          </div>

          <div className="bg-card border rounded-lg p-6 hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
              <span className="text-2xl">🆔</span>
            </div>
            <h3 className="text-xl font-semibold mb-3">
              {t("nav.language") === "bn" ? "জাতীয় পরিচয়পত্র" : "National ID Card"}
            </h3>
            <p className="text-muted-foreground mb-4">
              {t("nav.language") === "bn"
                ? "জাতীয় পরিচয়পত্র আবেদন, সংশোধন ও যাচাইকরণ সেবা।"
                : "Apply for, correct, and verify your National ID Card."}
            </p>
            <a href="/services/nid" className="text-primary hover:underline font-medium">
              {t("nav.language") === "bn" ? "আরও জানুন" : "Learn More"} →
            </a>
          </div>

          <div className="bg-card border rounded-lg p-6 hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
              <span className="text-2xl">📊</span>
            </div>
            <h3 className="text-xl font-semibold mb-3">
              {t("nav.language") === "bn" ? "নির্বাচনী তথ্য" : "Election Information"}
            </h3>
            <p className="text-muted-foreground mb-4">
              {t("nav.language") === "bn"
                ? "আসন্ন নির্বাচন, ফলাফল এবং পরিসংখ্যান সম্পর্কে তথ্য পান।"
                : "Get information about upcoming elections, results, and statistics."}
            </p>
            <a href="/services/election-info" className="text-primary hover:underline font-medium">
              {t("nav.language") === "bn" ? "আরও জানুন" : "Learn More"} →
            </a>
          </div>

          <div className="bg-card border rounded-lg p-6 hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
              <span className="text-2xl">🏛️</span>
            </div>
            <h3 className="text-xl font-semibold mb-3">
              {t("nav.language") === "bn" ? "রাজনৈতিক দল নিবন্ধন" : "Political Party Registration"}
            </h3>
            <p className="text-muted-foreground mb-4">
              {t("nav.language") === "bn"
                ? "রাজনৈতিক দল নিবন্ধন এবং সংশ্লিষ্ট তথ্য।"
                : "Political party registration and related information."}
            </p>
            <a href="/services/party-registration" className="text-primary hover:underline font-medium">
              {t("nav.language") === "bn" ? "আরও জানুন" : "Learn More"} →
            </a>
          </div>

          <div className="bg-card border rounded-lg p-6 hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
              <span className="text-2xl">📄</span>
            </div>
            <h3 className="text-xl font-semibold mb-3">
              {t("nav.language") === "bn" ? "তথ্য অধিকার" : "Right to Information"}
            </h3>
            <p className="text-muted-foreground mb-4">
              {t("nav.language") === "bn"
                ? "তথ্য অধিকার আইন অনুযায়ী তথ্যের জন্য আবেদন করুন।"
                : "Apply for information under the Right to Information Act."}
            </p>
            <a href="/services/rti" className="text-primary hover:underline font-medium">
              {t("nav.language") === "bn" ? "আরও জানুন" : "Learn More"} →
            </a>
          </div>

          <div className="bg-card border rounded-lg p-6 hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
              <span className="text-2xl">💬</span>
            </div>
            <h3 className="text-xl font-semibold mb-3">
              {t("nav.language") === "bn" ? "অভিযোগ ও পরামর্শ" : "Complaints & Suggestions"}
            </h3>
            <p className="text-muted-foreground mb-4">
              {t("nav.language") === "bn"
                ? "আপনার অভিযোগ জানান এবং আমাদের সেবা উন্নয়নে পরামর্শ দিন।"
                : "Submit your complaints and help us improve our services."}
            </p>
            <a href="/services/feedback" className="text-primary hover:underline font-medium">
              {t("nav.language") === "bn" ? "আরও জানুন" : "Learn More"} →
            </a>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}
