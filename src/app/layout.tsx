import { Analytics } from "@/components/header/analytics";
import { GoogleAnalytics, GoogleTagManager } from "@next/third-parties/google";
import { ThemeProvider } from "@/components/structure/theme-provider";
import { Inter } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import { Metadata } from "next";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Andresinho20049",
    template: "%s | Andresinho20049",
  },
  description: "Portfolio - Software Engineer",
  keywords: [
    "Andresinho20049",
    "andresinho20049",
    "Andre Carlos",
    "andre carlos",
    "Portfolio",
    "Portifolio",
    "Next Site",
    "Developer",
    "Typescript",
    "Dev Java",
    "Dev NodeJs",
    "Spring Boot with Docker",
    "Desenvolvedor",
    "Dev",
    "dev",
    "Software Engineer",
    "software engineer",
  ],
  authors: [
    {
      name: "André Carlos",
      url: "https://www.instagram.com/andresinho20049",
    },
  ],
  icons: {
    icon: "/icons/android-chrome-512x512.png",
    apple: "/icons/apple-touch-icon.png",
    shortcut: "/icons/android-chrome-192x192.png",
  },
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body className={`min-h-screen ${inter.className}`}>
        <Script
          id="ads-google-1"
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3617432012620885"
          crossOrigin="anonymous"
        />
        <GoogleTagManager gtmId="GTM-TKMG6WLQ" />
        <GoogleAnalytics gaId="G-R406PS9BPL" />
        <Analytics />
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
