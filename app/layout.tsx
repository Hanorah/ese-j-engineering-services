import type { Metadata, Viewport } from "next";
import { Inter_Tight, Instrument_Serif } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Effects from "@/components/Effects";
import Lightbox from "@/components/Lightbox";
import Preloader from "@/components/Preloader";
import JsonLd from "@/components/JsonLd";
import { SITE_URL, businessJsonLd, keywords, websiteJsonLd } from "@/lib/seo";
import "./globals.css";

// Runs before first paint: marks JS as available, plays the intro once per session
// (intro-play delays hero animations until the curtain lifts), and unlocks scroll after.
const introScript = `(function(){var d=document.documentElement;d.classList.add('js');
try{if(sessionStorage.getItem('ej-intro')){d.classList.add('intro-seen');return}sessionStorage.setItem('ej-intro','1')}catch(e){}
if(window.matchMedia('(prefers-reduced-motion: reduce)').matches){d.classList.add('intro-seen');return}
d.classList.add('intro-play','intro-lock');
setTimeout(function(){d.classList.remove('intro-lock');d.classList.add('intro-seen')},3300)})();`;

const sans = Inter_Tight({ subsets: ["latin"], variable: "--font-sans", display: "swap" });
const serif = Instrument_Serif({ subsets: ["latin"], weight: "400", style: ["normal", "italic"], variable: "--font-serif", display: "swap" });

const description =
  "ESE J Engineering Ltd is an engineering & construction company in Benin City, Edo State, serving all of Nigeria since 2009: project management, mechanical works, certified welding & fabrication, plumbing, procurement and building construction.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "ESE J Engineering Ltd | Engineering & Construction Company in Nigeria",
    template: "%s | ESE J Engineering Ltd",
  },
  description,
  keywords,
  applicationName: "ESE J Engineering",
  authors: [{ name: "ESE J Engineering Ltd", url: SITE_URL }],
  creator: "ESE J Engineering Ltd",
  publisher: "ESE J Engineering Ltd",
  category: "Engineering & Construction",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_NG",
    url: "/",
    siteName: "ESE J Engineering Ltd",
    title: "ESE J Engineering Ltd | Engineering & Construction in Nigeria",
    description: "The No.1 place for all engineering needs. Engineering & construction across Nigeria since 2009.",
  },
  twitter: {
    card: "summary_large_image",
    title: "ESE J Engineering Ltd",
    description: "The No.1 place for all engineering needs. Engineering & construction across Nigeria since 2009.",
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 } },
  formatDetection: { telephone: true, email: true, address: true },
  // Set these in the hosting environment once Google Search Console / Bing Webmaster Tools give you the codes.
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
    other: process.env.NEXT_PUBLIC_BING_SITE_VERIFICATION ? { "msvalidate.01": process.env.NEXT_PUBLIC_BING_SITE_VERIFICATION } : undefined,
  },
};

export const viewport: Viewport = { themeColor: "#0b1b2a" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-NG" className={`${sans.variable} ${serif.variable}`} suppressHydrationWarning>
      {/* browser extensions (e.g. Grammarly) inject attributes into <body> before hydration */}
      <body suppressHydrationWarning>
        <script dangerouslySetInnerHTML={{ __html: introScript }} />
        <Preloader />
        <Header />
        <main id="top">{children}</main>
        <Footer />
        <Lightbox />
        <Effects />
        <JsonLd data={[businessJsonLd(), websiteJsonLd()]} />
      </body>
    </html>
  );
}
