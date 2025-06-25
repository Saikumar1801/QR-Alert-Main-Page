import { Inter } from "next/font/google";
import "./globals.css";
import React from "react";
import type { Metadata } from "next";

// Font Awesome Configuration
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false // Prevents Font Awesome from adding its own CSS automatically

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "QR알리미 - 개인정보 보호 주차차량 이동요청 플랫폼",
  description: "A personal information security service that is generated only with the vehicle number and requested through an in-app notification.",
};

export default function RootLayout({ children }: { children: React.ReactNode })  {
  return (
    <html lang="ko">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
