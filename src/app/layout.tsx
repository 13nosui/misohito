import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  themeColor: "#fafafa",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false, // テキスト入力時の勝手なズームを防ぐ
};

export const metadata: Metadata = {
  title: "MISOHITO",
  description: "31 SYLLABLES TO FORGET",
  manifest: "/manifest.json", // 自動生成されるパス
  appleWebApp: {
    capable: true,
    statusBarStyle: "default", // または "black-translucent"
    title: "MISOHITO",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
