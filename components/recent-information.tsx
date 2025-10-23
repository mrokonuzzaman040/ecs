"use client";

import { ExternalLink } from "lucide-react";
import { useState } from "react";

interface RecentInfoItem {
  id: number;
  title: string;
  link: string;
  isNew?: boolean;
}

const recentInfoData: RecentInfoItem[] = [
  {
    id: 1,
    title: "২০২৫ সালের স্থানীয় সরকার নির্বাচন তফসিল ঘোষণা",
    link: "/elections/local-government-2025",
    isNew: true,
  },
  {
    id: 2,
    title: "জাতীয় ভোটার দিবস ২০২৫ উদযাপন",
    link: "/events/voter-day-2025",
    isNew: true,
  },
  {
    id: 3,
    title: "ভোটার তালিকা হালনাগাদকরণ কার্যক্রম চলমান",
    link: "/services/voter-list-update",
  },
  {
    id: 4,
    title: "নির্বাচন কমিশনের বার্ষিক প্রতিবেদন ২০২৪ প্রকাশিত",
    link: "/reports/annual-2024",
  },
  {
    id: 5,
    title: "ইলেকট্রনিক ভোটিং মেশিন (EVM) প্রশিক্ষণ কর্মশালা",
    link: "/training/evm-workshop",
  },
  {
    id: 6,
    title: "রাজনৈতিক দল নিবন্ধন নবায়নের শেষ তারিখ ঘোষণা",
    link: "/political-parties/registration-renewal",
  },
  {
    id: 7,
    title: "নির্বাচনী এলাকা পুনর্গঠন প্রস্তাব প্রকাশ",
    link: "/announcements/electoral-restructuring",
  },
  {
    id: 8,
    title: "ভোটার সচেতনতা কর্মসূচি শুরু",
    link: "/programs/voter-awareness",
  },
  {
    id: 9,
    title: "নির্বাচন পর্যবেক্ষক নিয়োগ বিজ্ঞপ্তি",
    link: "/recruitment/election-observer",
  },
  {
    id: 10,
    title: "জাতীয় পরিচয়পত্র সংশোধন সেবা চালু",
    link: "/services/nid-correction",
  },
  {
    id: 11,
    title: "উপজেলা নির্বাচন ২০২৫ এর প্রস্তুতি সভা",
    link: "/meetings/upazila-election-2025",
  },
  {
    id: 12,
    title: "নতুন ভোটার নিবন্ধনের সময়সীমা বৃদ্ধি",
    link: "/announcements/voter-registration-extension",
  },
  {
    id: 13,
    title: "নির্বাচনী আচরণবিধি লঙ্ঘনের শাস্তি নির্দেশিকা",
    link: "/guidelines/code-of-conduct-penalties",
  },
  {
    id: 14,
    title: "প্রতিবন্ধী ভোটারদের জন্য বিশেষ ব্যবস্থা ঘোষণা",
    link: "/announcements/special-arrangement-disabled-voters",
  },
  {
    id: 15,
    title: "নির্বাচনী প্রচারণা ব্যয় সীমা নির্ধারণ",
    link: "/regulations/campaign-expenditure-limit",
  },
  {
    id: 16,
    title: "ভোটকেন্দ্র তালিকা চূড়ান্তকরণ",
    link: "/announcements/polling-center-finalization",
  },
  {
    id: 17,
    title: "নির্বাচনী কর্মকর্তাদের প্রশিক্ষণ কর্মসূচি",
    link: "/training/election-officials",
  },
  {
    id: 18,
    title: "অনলাইন ভোটার তথ্য যাচাই সেবা চালু",
    link: "/services/online-voter-verification",
  },
  {
    id: 19,
    title: "নির্বাচন সংক্রান্ত জনসচেতনতা প্রচারণা",
    link: "/campaigns/public-awareness",
  },
  {
    id: 20,
    title: "প্রার্থী মনোনয়ন ফরম বিতরণ শুরু",
    link: "/announcements/candidate-nomination-form",
  },
  {
    id: 21,
    title: "নির্বাচন পরিচালনা কমিটি গঠন",
    link: "/committees/election-management",
  },
  {
    id: 22,
    title: "ভোটার তালিকা প্রদর্শন কর্মসূচি",
    link: "/programs/voter-list-display",
  },
  {
    id: 23,
    title: "নির্বাচনী সহায়তা হেল্পলাইন চালু",
    link: "/services/election-helpline",
  },
  {
    id: 24,
    title: "জাতীয় নির্বাচন ক্যালেন্ডার ২০২৫-২০৩০ প্রকাশ",
    link: "/publications/election-calendar-2025-2030",
  },
  {
    id: 25,
    title: "নির্বাচন কমিশনার নিয়োগ বিজ্ঞপ্তি",
    link: "/recruitment/election-commissioner",
  },
];

export function RecentInformation() {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 20;
  const totalPages = Math.ceil(recentInfoData.length / itemsPerPage);
  const showPagination = totalPages > 1;

  // Calculate current items to display
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = recentInfoData.slice(indexOfFirstItem, indexOfLastItem);

  // Convert number to Bangla
  const toBanglaNumber = (num: number): string => {
    const banglaDigits = ['০', '১', '২', '৩', '৪', '৫', '৬', '৭', '৮', '৯'];
    return num.toString().split('').map(digit => banglaDigits[parseInt(digit)]).join('');
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handlePrevious = () => {
    if (currentPage > 1) {
      handlePageChange(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      handlePageChange(currentPage + 1);
    }
  };

  return (
    <section className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between border-b-2 border-primary pb-3">
        <h2 className="text-2xl font-bold text-primary">
          সাম্প্রতিক তথ্যসমূহ
        </h2>
        <a
          href="/information/all"
          className="text-sm text-primary hover:underline font-medium flex items-center gap-1"
        >
          সব দেখুন
          <ExternalLink className="w-4 h-4" />
        </a>
      </div>

      {/* Table - Full Width */}
      <div className="bg-card border rounded-lg overflow-hidden shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-primary/5 border-b">
              <tr>
                <th className="text-left py-4 px-4 font-semibold text-sm w-16">
                  ক্রমিক
                </th>
                <th className="text-left py-4 px-6 font-semibold text-sm">
                  তথ্যের শিরোনাম
                </th>
              </tr>
            </thead>
            <tbody className="divide-y">
              {currentItems.map((item, index) => {
                const actualIndex = indexOfFirstItem + index;
                return (
                  <tr
                    key={item.id}
                    onClick={() => window.location.href = item.link}
                    className="hover:bg-accent/50 transition-colors cursor-pointer"
                  >
                    {/* Serial Number */}
                    <td className="py-4 px-4 text-sm text-muted-foreground font-medium">
                      {toBanglaNumber(actualIndex + 1)}
                    </td>

                    {/* Title */}
                    <td className="py-4 px-6">
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-medium hover:text-primary transition-colors">
                          {item.title}
                        </span>
                        {item.isNew && (
                          <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-red-100 text-red-700 whitespace-nowrap">
                            নতুন
                          </span>
                        )}
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        {/* Pagination - Only show when there are multiple pages */}
        {showPagination && (
          <div className="flex items-center justify-between px-6 py-4 bg-accent/30 border-t">
            <p className="text-sm text-muted-foreground">
              পৃষ্ঠা {toBanglaNumber(currentPage)} / {toBanglaNumber(totalPages)} (মোট {toBanglaNumber(recentInfoData.length)} টি তথ্য)
            </p>
            <div className="flex gap-2">
              <button 
                onClick={handlePrevious}
                disabled={currentPage === 1}
                className="px-4 py-2 text-sm border rounded hover:bg-accent transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                পূর্ববর্তী
              </button>
              {Array.from({ length: totalPages }, (_, i) => (
                <button
                  key={i + 1}
                  onClick={() => handlePageChange(i + 1)}
                  className={`px-4 py-2 text-sm rounded font-medium transition-colors ${
                    currentPage === i + 1
                      ? "bg-primary text-primary-foreground"
                      : "border hover:bg-accent"
                  }`}
                >
                  {toBanglaNumber(i + 1)}
                </button>
              ))}
              <button 
                onClick={handleNext}
                disabled={currentPage === totalPages}
                className="px-4 py-2 text-sm border rounded hover:bg-accent transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                পরবর্তী
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
