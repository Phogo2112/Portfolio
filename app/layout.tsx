
import { SpeedInsightClient } from "./components/SpeedInsigth";
import { Geist, Geist_Mono } from "next/font/google";
import type { ReactNode } from "react";
import { ThemeProvider } from "next-themes";
import { Rajdhani } from "next/font/google";

import "./globals.scss";

// Google Fonts

const rajdhani = Rajdhani({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-rajdhani",
});

const geistSans = Geist({ subsets: ["latin"], variable: "--font-geist-sans" });
const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
});


export const metadata = {
  title: "Portfolio - Sulyvann Dain",
  description: "Développeur Full Stack Passionnée.",
  icons: {
    icon: "/portrait-pour-favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${rajdhani.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem={true}
        >
          {children}

          <SpeedInsightClient />
        </ThemeProvider>
      </body>
    </html>
  );
}
