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
    "Hi there! I'm André Carlos, known on the web as andresinho20049, I'm a developer with a bachelor's degree in Computer Science and more than 5 years of experience, I present my portfolio.",
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
    "Full stack",
  ],
  authors: [
    {
      name: "André Carlos",
      url: "https://www.instagram.com/andresinho20049",
    },
  ],
  icons: {
    icon: "https://andresinho20049.com.br/Logo.png",
    apple: "https://andresinho20049.com.br/icons/apple-touch-icon.png",
    shortcut: "https://andresinho20049.com.br/icons/android-chrome-192x192.png",
  },
  robots: "https://andresinho20049.com.br/robots.txt",
  manifest: "https://andresinho20049.com.br/manifest.webmanifest",
  verification: {
    google: `${process.env.googleSiteVerification}`,
  },
  alternates: {
    canonical: "https://andresinho20049.com.br/",
  },
  themeColor: [
    {
      color: "#000",
      media: "(prefers-color-scheme: dark)",
    },
    {
      color: "#fff",
      media: "(prefers-color-scheme: light)",
    },
  ],
  colorScheme: "dark light",
  viewport: {
    initialScale: 1,
    width: "device-width",
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
