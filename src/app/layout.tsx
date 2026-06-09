import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

/*
 * design.md ships "Airbnb Cereal VF" (proprietary). Plus Jakarta Sans is loaded
 * as the practical substitute: a geometric-humanist sans matching design.md's
 * "clarity with softness" typography philosophy. The full Cereal fallback stack
 * is preserved in globals.css (--font-sans).
 */
const cereal = Plus_Jakarta_Sans({
  variable: "--font-cereal",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Canvas — 그림을 빌리다",
  description:
    "원작 회화와 한정 프린트를 월 단위로 빌려보세요. 집과 공간에 어울리는 작품을 큐레이션해 드립니다.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className={`${cereal.variable} h-full`}>
      <body className="min-h-full flex flex-col bg-white text-text-primary">
        {children}
      </body>
    </html>
  );
}
