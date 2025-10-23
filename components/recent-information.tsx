"use client";

import { useLanguage } from "@/lib/language-context";
import { Calendar, FileText, Users, Vote } from "lucide-react";

interface RecentInfoItem {
  id: number;
  titleBn: string;
  titleEn: string;
  descriptionBn: string;
  descriptionEn: string;
  date: string;
  category: "election" | "announcement" | "report" | "event";
  link: string;
}

const recentInfoData: RecentInfoItem[] = [
  {
    id: 1,
    titleBn: "২০২৫ সালের স্থানীয় সরকার নির্বাচন তফসিল ঘোষণা",
    titleEn: "2025 Local Government Election Schedule Announced",
    descriptionBn: "আসন্ন স্থানীয় সরকার নির্বাচনের বিস্তারিত তফসিল প্রকাশ করা হয়েছে। ভোটার তালিকা চূড়ান্তকরণ ও প্রার্থী মনোনয়নের তারিখ নির্ধারণ করা হয়েছে।",
    descriptionEn: "Detailed schedule for the upcoming local government elections has been published. Dates for finalizing voter lists and candidate nominations have been set.",
    date: "2025-10-20",
    category: "election",
    link: "/elections/local-government-2025",
  },
  {
    id: 2,
    titleBn: "জাতীয় ভোটার দিবস ২০২৫ উদযাপন",
    titleEn: "National Voter Day 2025 Celebration",
    descriptionBn: "২ মার্চ জাতীয় ভোটার দিবস উপলক্ষে সারাদেশে বিভিন্ন কর্মসূচি গ্রহণ করা হয়েছে। নতুন ভোটারদের নিবন্ধনে উৎসাহিত করা হবে।",
    descriptionEn: "Various programs have been organized nationwide to celebrate National Voter Day on March 2. New voters will be encouraged to register.",
    date: "2025-10-18",
    category: "event",
    link: "/events/voter-day-2025",
  },
  {
    id: 3,
    titleBn: "ভোটার তালিকা হালনাগাদকরণ কার্যক্রম চলমান",
    titleEn: "Voter List Update Program Ongoing",
    descriptionBn: "২০২৫ সালের ভোটার তালিকা হালনাগাদকরণ কার্যক্রম চলছে। নাগরিকরা অনলাইনে তাদের তথ্য যাচাই ও সংশোধনের জন্য আবেদন করতে পারবেন।",
    descriptionEn: "The 2025 voter list update program is underway. Citizens can apply online to verify and correct their information.",
    date: "2025-10-15",
    category: "announcement",
    link: "/services/voter-list-update",
  },
  {
    id: 4,
    titleBn: "নির্বাচন কমিশনের বার্ষিক প্রতিবেদন ২০২৪ প্রকাশিত",
    titleEn: "Election Commission Annual Report 2024 Published",
    descriptionBn: "২০২৪ সালের কার্যক্রম ও অর্জনের বিস্তারিত বিবরণ সহ বার্ষিক প্রতিবেদন প্রকাশ করা হয়েছে। প্রতিবেদনটি ওয়েবসাইট থেকে ডাউনলোড করা যাবে।",
    descriptionEn: "The annual report with detailed description of activities and achievements for 2024 has been published. The report can be downloaded from the website.",
    date: "2025-10-12",
    category: "report",
    link: "/reports/annual-2024",
  },
  {
    id: 5,
    titleBn: "ইলেকট্রনিক ভোটিং মেশিন (EVM) প্রশিক্ষণ কর্মশালা",
    titleEn: "Electronic Voting Machine (EVM) Training Workshop",
    descriptionBn: "নির্বাচনী কর্মকর্তা ও পর্যবেক্ষকদের জন্য EVM ব্যবহার বিষয়ক প্রশিক্ষণ কর্মশালার আয়োজন করা হয়েছে।",
    descriptionEn: "Training workshops on EVM usage have been organized for election officials and observers.",
    date: "2025-10-10",
    category: "event",
    link: "/training/evm-workshop",
  },
  {
    id: 6,
    titleBn: "রাজনৈতিক দল নিবন্ধন নবায়নের শেষ তারিখ ঘোষণা",
    titleEn: "Deadline for Political Party Registration Renewal Announced",
    descriptionBn: "রাজনৈতিক দলগুলির নিবন্ধন নবায়নের জন্য ৩০ নভেম্বর ২০২৫ শেষ তারিখ নির্ধারণ করা হয়েছে।",
    descriptionEn: "November 30, 2025 has been set as the deadline for political parties to renew their registration.",
    date: "2025-10-08",
    category: "announcement",
    link: "/political-parties/registration-renewal",
  },
];

const categoryIcons = {
  election: Vote,
  announcement: FileText,
  report: FileText,
  event: Calendar,
};

const categoryColors = {
  election: "bg-primary/10 text-primary",
  announcement: "bg-blue-500/10 text-blue-600",
  report: "bg-green-500/10 text-green-600",
  event: "bg-orange-500/10 text-orange-600",
};

export function RecentInformation() {
  const { t } = useLanguage();
  const isBengali = t("nav.language") === "bn";

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    if (isBengali) {
      return date.toLocaleDateString("bn-BD", {
        year: "numeric",
        month: "long",
        day: "numeric",
      });
    }
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const getCategoryLabel = (category: string) => {
    const labels: Record<string, { bn: string; en: string }> = {
      election: { bn: "নির্বাচন", en: "Election" },
      announcement: { bn: "ঘোষণা", en: "Announcement" },
      report: { bn: "প্রতিবেদন", en: "Report" },
      event: { bn: "অনুষ্ঠান", en: "Event" },
    };
    return isBengali ? labels[category].bn : labels[category].en;
  };

  return (
    <section className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between border-b pb-4">
        <h2 className="text-2xl font-bold text-primary">
          {isBengali ? "সাম্প্রতিক তথ্যসমূহ" : "Recent Information"}
        </h2>
        <a
          href="/information/all"
          className="text-sm text-primary hover:underline font-medium"
        >
          {isBengali ? "সব দেখুন" : "View All"} →
        </a>
      </div>

      {/* Information Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {recentInfoData.map((item) => {
          const Icon = categoryIcons[item.category];
          const colorClass = categoryColors[item.category];

          return (
            <a
              key={item.id}
              href={item.link}
              className="group bg-card border rounded-lg p-5 hover:shadow-lg transition-all duration-300 hover:border-primary/50"
            >
              {/* Category Badge & Date */}
              <div className="flex items-center justify-between mb-3">
                <span
                  className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium ${colorClass}`}
                >
                  <Icon className="w-3.5 h-3.5" />
                  {getCategoryLabel(item.category)}
                </span>
                <span className="text-xs text-muted-foreground flex items-center gap-1">
                  <Calendar className="w-3 h-3" />
                  {formatDate(item.date)}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors line-clamp-2">
                {isBengali ? item.titleBn : item.titleEn}
              </h3>

              {/* Description */}
              <p className="text-sm text-muted-foreground line-clamp-3 mb-3">
                {isBengali ? item.descriptionBn : item.descriptionEn}
              </p>

              {/* Read More Link */}
              <div className="flex items-center text-primary text-sm font-medium group-hover:gap-2 transition-all">
                {isBengali ? "বিস্তারিত পড়ুন" : "Read More"}
                <span className="inline-block transition-transform group-hover:translate-x-1">
                  →
                </span>
              </div>
            </a>
          );
        })}
      </div>

      {/* Latest Updates Section */}
      <div className="bg-accent/50 border rounded-lg p-6 mt-6">
        <div className="flex items-center gap-2 mb-4">
          <Users className="w-5 h-5 text-primary" />
          <h3 className="text-lg font-semibold">
            {isBengali ? "জরুরি আপডেট" : "Important Updates"}
          </h3>
        </div>
        <ul className="space-y-3">
          <li className="flex items-start gap-3">
            <span className="text-primary mt-1">▸</span>
            <p className="text-sm">
              {isBengali
                ? "নতুন ভোটার নিবন্ধনের জন্য অনলাইন আবেদন চলছে। শেষ তারিখ: ৩১ ডিসেম্বর ২০২৫।"
                : "Online application for new voter registration is ongoing. Deadline: December 31, 2025."}
            </p>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-primary mt-1">▸</span>
            <p className="text-sm">
              {isBengali
                ? "জাতীয় পরিচয়পত্র সংশোধনের জন্য অনলাইন সেবা চালু হয়েছে।"
                : "Online service for National ID Card correction has been launched."}
            </p>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-primary mt-1">▸</span>
            <p className="text-sm">
              {isBengali
                ? "নির্বাচনী আচরণবিধি সংক্রান্ত নতুন নির্দেশনা প্রকাশিত হয়েছে।"
                : "New guidelines on electoral code of conduct have been published."}
            </p>
          </li>
        </ul>
      </div>
    </section>
  );
}
