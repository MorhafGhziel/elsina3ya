import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { SmoothScroll } from "./components/SmoothScroll";

const ibmPlexArabic = localFont({
  src: "../public/fonts/IBMPlexSansArabic-SemiBold.ttf",
  variable: "--font-ibm-plex-arabic",
});

export const metadata: Metadata = {
  title: "الصناعية",
  description:
    "نجمع صنّاع المحتوى في ورشة واحدة، ننظّم ظهورهم، ونربطهم بالعلامات التجارية المناسبة. إدارة مواهب، إنتاج محتوى، وتسويق رقمي احترافي.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl">
      <body
        className={`${ibmPlexArabic.className} antialiased`}
      >
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
