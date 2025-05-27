import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { portfolioData } from "@/data/portfolio-data";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Arghya Dutta",
  description: portfolioData.personal.bio,
  icons: "/favicon.png",
  robots: "index, follow",
  keywords: [
    "Arghya Dutta",
    "Full-stack developer",
    "Web applications",
    "Frontend development",
    "Backend development",
    "Software engineer",
    "JavaScript",
    "React",
    "Node.js",
    "Next.js",
    "Web developer",
    "Portfolio",
    "Tech enthusiast",
  ],
  publisher: "Arghya Dutta",
  authors: [{ name: "Arghya Dutta", url: "https://arghya-dutta.vercel.app" }],
  creator: "Arghya Dutta",
  applicationName: "Arghya Dutta",
  openGraph: {
    title: "Arghya Dutta",
    description: portfolioData.personal.bio,
    url: "https://arghya-dutta.vercel.app",
    siteName: "Arghya Dutta",
    images: [{ url: "https://arghya-dutta.vercel.app/profile-picture.jpeg" }],
  },
  other: {
    "google-site-verification": "cYz0ST6NS6_GRxhd94UPXlngTRloHWsOw1EvZamsj0A",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
