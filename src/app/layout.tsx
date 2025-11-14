import "@/styles/globals.css";

import { type Metadata } from "next";
import { Geist } from "next/font/google";

export const metadata: Metadata = {
  title: "金曜ロードショー映画ランキング可視化ダッシュボード",
  description:
    "日本テレビ系『金曜ロードショー』の歴代放送映画を月別・ランキング形式で俯瞰できるNext.js製ビジュアルダッシュボード。人気作品や傾向を一目で把握！",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
  openGraph: {
    title: "金曜ロードショー映画ランキング可視化ダッシュボード",
    description:
      "金曜ロードショーの映画放送データを月別・ランキングで可視化。人気作品や傾向を時系列で直感的にチェックできるNext.jsアプリです。",
    url: "https://friday-road-show.vercel.app",
    type: "website",
    images: [
      {
        url: "/ogp.png",
        width: 1200,
        height: 630,
        alt: "金曜ロードショー映画ランキング可視化ダッシュボード OGP画像",
      },
    ],
    locale: "ja_JP",
    siteName: "Friday Road Show Visualizer",
  },
  twitter: {
    card: "summary_large_image",
    title: "金曜ロードショー映画ランキング可視化ダッシュボード",
    description:
      "金曜ロードショーの映画放送データを月別・ランキングで可視化。人気作品や傾向を時系列で直感的にチェックできるNext.jsアプリです。",
    images: ["/ogp.png"],
    site: "@your_twitter_id",
  },
};

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ja" className={`${geist.variable}`}>
      <body className="bg-slate-950 text-white antialiased">{children}</body>
    </html>
  );
}
