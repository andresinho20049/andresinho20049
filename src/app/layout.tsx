import { Analytics } from "@/components/header/analytics"
import { ThemeProvider } from "@/components/structure/theme-provider"
import { Inter } from "next/font/google"
import "./globals.css"
import Script from "next/script"


const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Andresinho20049",
  description: "Portfolio - Developer Full-stack",
}

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <Script
        id="ads-google-1"
        async
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3617432012620885"
        crossOrigin="anonymous"
      />
      <body className={`min-h-screen ${inter.className}`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Analytics />

          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
