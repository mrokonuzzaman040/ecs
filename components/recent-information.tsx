"use client";

import { ExternalLink } from "lucide-react";

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
];

export function RecentInformation() {
  const itemsPerPage = 10;
  const totalPages = Math.ceil(recentInfoData.length / itemsPerPage);
  const showPagination = totalPages > 1;

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
                <th className="text-left py-4 px-6 font-semibold text-sm w-24">
                  ক্রমিক
                </th>
                <th className="text-left py-4 px-6 font-semibold text-sm">
                  তথ্যের শিরোনাম
                </th>
              </tr>
            </thead>
            <tbody className="divide-y">
              {recentInfoData.map((item, index) => {
                return (
                  <tr
                    key={item.id}
                    onClick={() => window.location.href = item.link}
                    className="hover:bg-accent/50 transition-colors cursor-pointer"
                  >
                    {/* Serial Number */}
                    <td className="py-4 px-6 text-sm text-muted-foreground font-medium">
                      {String(index + 1).padStart(2, "0")}
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
              মোট {recentInfoData.length} টি তথ্য প্রদর্শিত হচ্ছে
            </p>
            <div className="flex gap-2">
              <button className="px-4 py-2 text-sm border rounded hover:bg-accent transition-colors disabled:opacity-50 disabled:cursor-not-allowed" disabled>
                পূর্ববর্তী
              </button>
              {Array.from({ length: totalPages }, (_, i) => (
                <button
                  key={i + 1}
                  className={`px-4 py-2 text-sm rounded font-medium transition-colors ${
                    i === 0
                      ? "bg-primary text-primary-foreground"
                      : "border hover:bg-accent"
                  }`}
                >
                  {i + 1}
                </button>
              ))}
              <button className="px-4 py-2 text-sm border rounded hover:bg-accent transition-colors">
                পরবর্তী
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
