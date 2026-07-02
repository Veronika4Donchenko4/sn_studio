import type { Metadata } from "next";
import { Instrument_Serif, Newsreader, Inter } from "next/font/google";
import { LanguageProvider } from "@/lib/i18n";
import "./globals.css";

const instrument = Instrument_Serif({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-instrument",
  display: "swap",
});

const newsreader = Newsreader({
  weight: ["400", "500"],
  subsets: ["latin"],
  variable: "--font-newsreader",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin", "cyrillic"],
  variable: "--font-geist",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Niksar — Mobile & Web Development Studio",
  description:
    "Niksar — a product studio building mobile apps and websites from idea to launch. iOS, Android, web — design, performance, and real business results.",
  metadataBase: new URL("https://niksar.dev"),
  openGraph: {
    title: "Niksar — Mobile & Web Development Studio",
    description:
      "A product studio building apps and websites from idea to launch.",
    type: "website",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${instrument.variable} ${newsreader.variable} ${inter.variable}`}>
      <body className="font-sans">
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
