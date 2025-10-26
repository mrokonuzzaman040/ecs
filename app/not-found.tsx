"use client";

import Link from "next/link";
import { MainLayout } from "@/components/main-layout";
import { useLanguage } from "@/lib/language-context";

export default function NotFound() {
  const { t } = useLanguage();
  const isBn = t("nav.language") === "bn";

  const title = isBn ? "৪০৪ – পৃষ্ঠা খুঁজে পাওয়া যায়নি" : "404 – Page not found";
  const desc = isBn
    ? "দুঃখিত, আপনি যে পৃষ্ঠাটি খুঁজছেন তা পাওয়া যায়নি বা মুছে ফেলা হয়েছে।"
    : "Sorry, the page you are looking for doesn’t exist or was removed.";
  const homeText = isBn ? "হোম পেজে ফিরে যান" : "Go back home";
  const tryLinks = isBn ? "আপনি চাইলে নিচের লিংকগুলো চেষ্টা করতে পারেন:" : "You can try these links:";

  return (
    <MainLayout showHero={false} showRightSidebar={false}>
      <section className="py-10">
        <div className="mx-auto max-w-3xl">
          <div className="rounded-xl border bg-card shadow-sm p-8 sm:p-10">
            <div className="flex flex-col items-center text-center gap-4">
              <div className="inline-flex items-center justify-center rounded-full bg-primary/10 text-primary px-4 py-1 text-sm font-medium">
                {isBn ? "ত্রুটি" : "Error"}
              </div>
              <h1 className="text-5xl md:text-6xl font-black tracking-tight text-foreground">
                {isBn ? "৪০৪" : "404"}
              </h1>
              <h2 className="text-2xl md:text-3xl font-bold">{title}</h2>
              <p className="text-muted-foreground max-w-2xl">{desc}</p>

              <div className="mt-2 flex flex-col sm:flex-row items-center gap-3">
                <Link
                  href="/"
                  className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-2.5 text-primary-foreground font-medium hover:bg-primary/90 transition-colors"
                >
                  {homeText}
                </Link>
                <Link
                  href="/services"
                  className="inline-flex items-center gap-2 rounded-md border px-5 py-2.5 font-medium hover:bg-accent transition-colors"
                >
                  {isBn ? "সেবাসমূহ দেখুন" : "Browse services"}
                </Link>
                <button
                  onClick={() => history.back()}
                  className="inline-flex items-center gap-2 rounded-md border px-5 py-2.5 font-medium hover:bg-accent transition-colors"
                >
                  {isBn ? "পেছনে যান" : "Go back"}
                </button>
              </div>

              <div className="mt-8 w-full text-left">
                <p className="mb-3 font-semibold">{tryLinks}</p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm">
                  <li>
                    <Link href="/about" className="text-primary hover:underline">
                      {isBn ? "আমাদের সম্পর্কে" : "About us"}
                    </Link>
                  </li>
                  <li>
                    <Link href="/services" className="text-primary hover:underline">
                      {isBn ? "সেবাসমূহ" : "Services"}
                    </Link>
                  </li>
                  <li>
                    <Link href="/programs/voter-awareness" className="text-primary hover:underline">
                      {isBn ? "ভোটার সচেতনতা" : "Voter awareness"}
                    </Link>
                  </li>
                  <li>
                    <Link href="/reports/annual-2024" className="text-primary hover:underline">
                      {isBn ? "বার্ষিক প্রতিবেদন" : "Annual report"}
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}
