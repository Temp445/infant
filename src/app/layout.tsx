import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { AuthProvider } from '@/context/AuthContext';
import BackToTop from "@/components/BackToTop";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const domainUrl = process.env.NEXT_PUBLIC_API_FRONTEND_URL || '';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Infant Engineers Pvt Ltd",
  description: "We are a leading automotive component manufacturer providing precision-engineered solutions for global industries. With advanced technology, strict quality control, and OEM expertise, we deliver durable, high-performance parts trusted by automotive brands worldwide",
  keywords:"automotive component manufacturer, precision engineering, auto parts manufacturing, OEM supplier, automotive industry solutions, custom automotive components, high quality auto parts, automotive machining, industrial manufacturing, global auto component supplier",

  openGraph: {
    title: 'Infant Engineers Pvt Ltd',
    description: 'We are a leading automotive component manufacturer providing precision-engineered solutions for global industries. With advanced technology, strict quality control, and OEM expertise, we deliver durable, high-performance parts trusted by automotive brands worldwide',
    url: `${domainUrl}`,
    siteName: 'Infant Engineers Pvt Ltd',
     images: [
      {
        url: `${domainUrl}/og-images/Logo.png`,
        width: 1200,
        height: 630,
        alt: 'Infant Engineers Pvt Ltd',
      },
    ],
    type: 'website',
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
     <head>
       <link rel="icon" href="/AceLogo.png" />
       </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <AuthProvider>
          <Navbar/>
        {children}
        <BackToTop/>
        <Footer/>
        </AuthProvider>
      </body>
    </html>
  );
}
