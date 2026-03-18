import type { Metadata } from "next";
import { Sarabun } from "next/font/google";
import "./globals.css";

const sarabun = Sarabun({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin", "thai"],
  variable: "--font-sarabun",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "โปรเทค ไอที โซลูชันส์ | IT Solutions ครบวงจร",
    template: "%s | โปรเทค ไอที โซลูชันส์",
  },
  description:
    "บริษัท โปรเทค ไอที โซลูชันส์ ให้บริการด้านไอทีครบวงจร ได้แก่ ระบบฐานข้อมูล เซิร์ฟเวอร์ คลาวด์ และการกู้คืนระบบ (DR) สำหรับองค์กรธุรกิจทั่วประเทศไทย",
  keywords: [
    "IT Solutions",
    "ไอที โซลูชันส์",
    "Database",
    "ฐานข้อมูล",
    "Cloud",
    "คลาวด์",
    "Server",
    "เซิร์ฟเวอร์",
    "Disaster Recovery",
    "DR",
    "บริษัทไอที",
    "ไทย",
  ],
  authors: [{ name: "ProTech IT Solutions" }],
  creator: "ProTech IT Solutions",
  openGraph: {
    type: "website",
    locale: "th_TH",
    siteName: "โปรเทค ไอที โซลูชันส์",
    title: "โปรเทค ไอที โซลูชันส์ | IT Solutions ครบวงจร",
    description:
      "บริการด้านไอทีครบวงจร ระบบฐานข้อมูล เซิร์ฟเวอร์ คลาวด์ และ DR สำหรับองค์กรธุรกิจ",
  },
  twitter: {
    card: "summary_large_image",
    title: "โปรเทค ไอที โซลูชันส์",
    description: "บริการด้านไอทีครบวงจรสำหรับองค์กรธุรกิจ",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="th" className={sarabun.variable}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
