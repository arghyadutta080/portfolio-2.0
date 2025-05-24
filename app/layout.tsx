import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
  description:
    "Full-stack developer passionate about building scalable web applications. Proficient in modern web technologies and experienced in both frontend and backend development. I enjoy solving real-world problems with code and creating seamless user experiences.",
  openGraph: {
    title: "Arghya Dutta",
    description:
      "Full-stack developer passionate about building scalable web applications. Proficient in modern web technologies and experienced in both frontend and backend development. I enjoy solving real-world problems with code and creating seamless user experiences.",
    url: "https://arghya-dutta.vercel.app",
    siteName: "Arghya Dutta",
    images: [{ url: "https://arghya-dutta.vercel.app/profile-picture.jpeg" }],
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
