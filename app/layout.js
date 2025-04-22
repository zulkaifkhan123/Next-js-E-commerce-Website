import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import 'remixicon/fonts/remixicon.css'
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContextApi from "@/components/ContextApi";
import SessionProviders from "@/components/SessionProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "VogueBay",
  description: "An Online E-Commerce Store for selling feshion and design products",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <SessionProviders>
        <ContextApi >
        <Navbar />
        {children}
        <Footer />
        </ContextApi>
        </SessionProviders>
          
      </body>
    </html>
  );
}
