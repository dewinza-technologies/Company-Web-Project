import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer"; // Import the new Footer

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Dewinza | Enterprise Software & IT Solutions",
  description: "Engineering high-performance digital infrastructure and scalable software solutions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground flex flex-col min-h-screen`}
      >
        {/* The Navbar: Sticky/Fixed on every page */}
        <Navbar />
        
        {/* Main content wrapper: 
            pt-16 for mobile, md:pt-24 for desktop to match our header heights.
            'flex-grow' ensures the footer stays at the bottom on short pages.
        */}
        <main className="pt-16 md:pt-24 flex-grow">
          {children}
        </main>

        {/* The Footer: Appears at the bottom of every page */}
        <Footer />
      </body>
    </html>
  );
}