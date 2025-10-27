import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Bitcount_Grid_Single, Comic_Neue } from 'next/font/google'

const bitcount = Bitcount_Grid_Single({
  subsets: ['latin'],
  weight: ['100', '400', '700', '900'], // choisis les poids que tu veux
  variable: '--font-bitcount'
})

const comicNeue = Comic_Neue({
  subsets: ['latin'],
  weight: ['300', '400', '700'],
  variable: '--font-comic'
})

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: 'Mon site',
  icons: {
    icon: '/portrait-pour-favicon.ico', // favicon classique
    shortcut: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
}


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
