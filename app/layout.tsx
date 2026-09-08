import type { Metadata, Viewport } from "next";
import "./globals.css";
import { site } from "./lib/content";
import { SmoothScroll } from "./ui/SmoothScroll";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — ${site.tagline}`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  keywords: [
    "الصناعية",
    "وكالة مؤثرين",
    "إدارة صناع المحتوى",
    "التسويق عبر المؤثرين",
    "إنتاج محتوى",
    "الرياض",
  ],
  openGraph: {
    type: "website",
    locale: "ar_SA",
    siteName: site.name,
    title: `${site.name} — ${site.tagline}`,
    description: site.description,
    images: [{ url: "/images/hero.jpeg", width: 1200, height: 630, alt: site.name }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — ${site.tagline}`,
    description: site.description,
    images: ["/images/hero.jpeg"],
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#0C0C0C",
  colorScheme: "dark",
};

/** Only the faces used above the fold — everything else loads on demand. */
const preloadedFonts = [
  "/fonts/PlexAr-400-arabic.woff2",
  "/fonts/PlexAr-700-arabic.woff2",
  "/fonts/RobotoCond-var.woff2",
];

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ar" dir="rtl">
      <head>
        {preloadedFonts.map((href) => (
          <link
            key={href}
            rel="preload"
            href={href}
            as="font"
            type="font/woff2"
            crossOrigin="anonymous"
          />
        ))}
      </head>
      <body>
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
