import type { Metadata } from "next";
import { IBM_Plex_Serif, Mona_Sans } from "next/font/google";

import "./globals.css";
import Navbar from "@/components/Navbar";

const IBMPlexSerif = IBM_Plex_Serif({
  subsets: ["latin"],
  variable: "--font-ibm-plex-serif",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const monaSans = Mona_Sans({
  subsets: ["latin"],
  variable: "--font-mona-sans",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Bookified",
  description:
    "Transform your book into interactive and engaging content with Bookified",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${IBMPlexSerif.variable} ${monaSans.variable} relative font-sans antialiased`}
    >
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
