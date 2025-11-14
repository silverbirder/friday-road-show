import Link from "next/link";
import { data } from "../data";
import type { FridayShow } from "../data";

type MonthlyRanking = Record<number, [string, number][]>;

function getMonthlyTop5(data: FridayShow[]): MonthlyRanking {
  // 月ごとにタイトルの出現回数を集計
  const monthlyCount: Record<number, Record<string, number>> = {};
  for (const { date, title } of data) {
    const month = Number(date.split("/")[1]);
    if (!monthlyCount[month]) monthlyCount[month] = {};
    if (!monthlyCount[month][title]) monthlyCount[month][title] = 0;
    monthlyCount[month][title]!++;
  }
  // 月ごとにランキングを作成
  const monthlyRanking: MonthlyRanking = {};
  for (let m = 1; m <= 12; m++) {
    if (!monthlyCount[m]) continue;
    const sorted = Object.entries(monthlyCount[m] as Record<string, number>)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 5);
    monthlyRanking[m] = sorted;
  }
  return monthlyRanking;
}

const monthlyRanking = getMonthlyTop5(data);

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white">
      <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16">
        <div className="mt-12 w-full max-w-3xl">
          <h2 className="mb-6 text-3xl font-bold">
            月別 金曜ロードショー映画ランキング TOP5
          </h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {Array.from({ length: 12 }, (_, i) => {
              const month = i + 1;
              const ranking = monthlyRanking[month];
              return (
                <div key={month} className="rounded-xl bg-white/10 p-4">
                  <h3 className="mb-2 text-xl font-bold">{month}月</h3>
                  {ranking ? (
                    <ol className="ml-5 list-decimal">
                      {ranking.map(
                        ([title, count]: [string, number], idx: number) => (
                          <li key={title}>
                            <span className="font-semibold">{title}</span>
                            <span className="ml-2 text-sm text-gray-300">
                              ({count}回)
                            </span>
                          </li>
                        ),
                      )}
                    </ol>
                  ) : (
                    <div className="text-gray-400">データなし</div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </main>
  );
}
