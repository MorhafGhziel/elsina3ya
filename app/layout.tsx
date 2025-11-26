import type { Metadata } from "next";
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

export const metadata: Metadata = {
  title: "الصناعية",
  description:
    "الصناعية متخصصة في تمكين صُنّاع المحتوى والمؤثرين، وتطوير حضور العلامات التجارية عبر محتوى رقمي مستدام. نجمع صنّاع المحتوى في ورشة واحدة، ننظّم ظهورهم، ونربطهم بالعلامات التجارية المناسبة.",
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
