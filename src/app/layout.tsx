import type { Metadata, Viewport } from "next";
import "./globals.css";
import { BottomNav } from "@/components/mobile/BottomNav";
import { NextAuthProvider } from "@/components/providers/NextAuthProvider";

export const metadata: Metadata = {
  title: "TelanaNime | HD Anime Streaming",
  description: "Experience anime like never before. High-fidelity streaming, curated collections, and a community built for the modern otaku.",
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "TelanaNime",
  },
};

export const viewport: Viewport = {
  themeColor: "#0b0c10",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <link href="https://api.fontshare.com/v2/css?f[]=clash-display@200,400,700,900&display=swap" rel="stylesheet" />
      </head>
      <body className="antialiased selection:bg-brand-primary selection:text-white pb-16 lg:pb-0">
        <NextAuthProvider>
          {children}
          <BottomNav />
        </NextAuthProvider>
      </body>
    </html>
  );
}
