import { Geist, Geist_Mono } from "next/font/google";
import type { ReactNode } from "react";
import { ThemeProvider } from "next-themes"; // 👈 import du provider
import { Rajdhani } from "next/font/google";
import "./globals.css";

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

// Meta infos
export const metadata = {
  title: "Portfolio - Sulyvann Dain",
  description: "Développeur Full Stack Passionnée.",
  icons: {
    icon: "/portrait-pour-favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

// ✅ Root Layout avec Dark Mode activé
export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="fr">
      {" "}
      {/* évite les warnings côté client */}
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${rajdhani.variable} antialiased`}
      >
        {/* 👇 Le ThemeProvider entoure tout ton contenu */}
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem={true}
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
