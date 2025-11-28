// root layout for slash dark theme
import type { Metadata } from "next";
import "./globals.css";

// metadata for pre-launch site
export const metadata: Metadata = {
  // page title
  title: "Tailwind - The Operating System for Multi-Player Finance",
  // seo description
  description: "Stop playing banker. Dynamic group credit, smart ledgers, and platform integrations for trips, events, and shared expenses. Join the waitlist for Q1 2026 launch.",
  // open graph
  openGraph: {
    title: "Tailwind - The Operating System for Multi-Player Finance",
    description: "Stop playing banker. Join the waitlist for the financial platform built for group spending.",
    type: "website",
  },
  icons: {
    icon: '/logo.png',
  },
};

// root layout
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* body with dark background */}
      <body className="antialiased bg-dark-bg">
        {/* render child pages */}
        {children}
      </body>
    </html>
  );
}
