import type { Metadata } from "next";
import "./globals.css";

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
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
