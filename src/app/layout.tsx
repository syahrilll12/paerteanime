import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "PAERTE ANIME | Cyber-Noir Streaming",
  description: "High-fidelity anime streaming experience with a Netflix-inspired interface.",
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
      <body className="antialiased selection:bg-brand-primary selection:text-white">
        {children}
      </body>
    </html>
  );
}
