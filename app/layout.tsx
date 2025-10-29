import { Geist, Geist_Mono } from "next/font/google";
import type { ReactNode } from "react";
import { ThemeProvider } from "next-themes"; // 👈 import du provider
import "./globals.css";

// Google Fonts
const geistSans = Geist({ subsets: ["latin"], variable: "--font-geist-sans" });
const geistMono = Geist_Mono({ subsets: ["latin"], variable: "--font-geist-mono" });

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
    <html lang="fr" suppressHydrationWarning> {/* évite les warnings côté client */}
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {/* 👇 Le ThemeProvider entoure tout ton contenu */}
        <ThemeProvider
          attribute="class"       // ajoute automatiquement 'class="dark"' sur <html>
          defaultTheme="system"   // suit le thème du système (clair/sombre)
          enableSystem={true}     // autorise le mode auto selon le système
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}