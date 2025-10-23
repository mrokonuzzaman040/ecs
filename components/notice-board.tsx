"use client";

import { useLanguage } from "@/lib/language-context";

interface NoticeItem {
  titleBn: string;
  titleEn: string;
  timeAgo: string;
  timeAgoBn: string;
  link?: string;
}

const notices: NoticeItem[] = [
  {
    titleBn: "নির্বাচন কমিশন সচিবালয়ে কর্মচারী নিয়োগ বিজ্ঞপ্তি",
    titleEn: "Employee Recruitment Notice at Election Commission Secretariat",
    timeAgo: "2 days ago",
    timeAgoBn: "২ দিন আগে",
    link: "/notices/recruitment",
  },
  {
    titleBn: "ভোটার তালিকা হালনাগাদ কর্মসূচী",
    titleEn: "Voter List Update Program",
    timeAgo: "5 days ago",
    timeAgoBn: "৫ দিন আগে",
    link: "/notices/voter-list-update",
  },
  {
    titleBn: "জাতীয় ভোটার দিবস ২০২৫",
    titleEn: "National Voter Day 2025",
    timeAgo: "1 week ago",
    timeAgoBn: "১ সপ্তাহ আগে",
    link: "/notices/voter-day",
  },
  {
    titleBn: "রাজনৈতিক দল নিবন্ধন বিষয়ক",
    titleEn: "Political Party Registration",
    timeAgo: "2 weeks ago",
    timeAgoBn: "২ সপ্তাহ আগে",
    link: "/notices/party-registration",
  },
];

export function NoticeBoard() {
  const { language } = useLanguage();
  const isBangla = language === "bn";

  return (
    <div className="bg-card border rounded-lg p-4 shadow-sm">
      <h2 className="text-lg font-bold text-primary mb-4 pb-2 border-b">
        {isBangla ? "নোটিশ বোর্ড" : "Notice Board"}
      </h2>
      <div className="space-y-3">
        {notices.map((notice, index) => (
          <a
            key={index}
            href={notice.link}
            className="block border-l-4 border-primary pl-3 py-2 hover:bg-accent/50 transition-colors cursor-pointer"
          >
            <p className="text-sm font-medium line-clamp-2">
              {isBangla ? notice.titleBn : notice.titleEn}
            </p>
            <span className="text-xs text-muted-foreground">
              {isBangla ? notice.timeAgoBn : notice.timeAgo}
            </span>
          </a>
        ))}
      </div>
      <button className="w-full mt-4 text-sm text-primary hover:text-primary/80 font-medium transition-colors">
        {isBangla ? "সকল নোটিশ দেখুন →" : "View All Notices →"}
      </button>
    </div>
  );
}
