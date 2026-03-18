import type { Metadata } from "next";
import { Poppins, Lora } from "next/font/google";
import NoiseOverlay from "./deck/components/NoiseOverlay";
import "./globals.css";

const poppins = Poppins({ 
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-display"
});

const lora = Lora({
  subsets: ["latin"],
  style: ["normal", "italic"],
  variable: "--font-primary"
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
    <html lang="en" className={`${poppins.variable} ${lora.variable}`}>
      <body>
        <NoiseOverlay />
        {children}
      </body>
    </html>
  );
}
