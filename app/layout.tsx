import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import { Analytics } from '@vercel/analytics/react';
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const outfit = Outfit({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-outfit",
});

export const metadata: Metadata = {
  title: "Churchwin Trading Co. Ltd - B2B Pitch Deck",
  description: "Institutionalizing global access to premium African ingredients.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable} font-sans antialiased scroll-smooth`}>
      <body className="font-primary bg-brand-navy text-brand-white">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
