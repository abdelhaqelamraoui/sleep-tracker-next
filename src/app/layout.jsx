import { ClerkProvider } from "@clerk/nextjs";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
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

export const metadata = {
   title: "Sleep Tracker",
   description: "Application to track sleep",
};

export default function RootLayout({ children }) {
   return (
      <ClerkProvider>
         <html lang="en">
            <body
               className={`${geistSans.variable} ${geistMono.variable} antialiased`}
            >
               <Header />
               {children}
               <Footer />
            </body>
         </html>
      </ClerkProvider>
   );
}
