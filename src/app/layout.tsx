import { Analytics } from "@/components/header/analytics";
import { ThemeProvider } from "@/components/structure/theme-provider";
import { GoogleAnalytics, GoogleTagManager } from "@next/third-parties/google";
import { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Andresinho20049",
    template: "%s | Andresinho20049",
  },
  description:
    "Hi there! I'm André Carlos, known on the web as andresinho20049. I'd love to take a moment to introduce myself and share a bit about my portfolio. (Software Engineer)",
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
    icon: "/icons/favicon.ico",
    apple: "/icons/apple-touch-icon.png",
    shortcut: "/icons/android-chrome-192x192.png",
  },
  robots: "https://andresinho20049.com.br/robots.txt",
  manifest: "https://andresinho20049.com.br/manifest.webmanifest",
  other: {
    "google-site-verification": `${process.env.googleSiteVerification}`,
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
          src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${process.env.ADS_GID}`}
          crossOrigin="anonymous"
        />
        <GoogleTagManager gtmId={process.env.GTMID || ""} />
        <GoogleAnalytics gaId={process.env.GAID || ""} />
        <Analytics />
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
