import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./styles/globals.css";
import { Inter as FontSans } from "next/font/google"

import { cn } from "@/lib/utils"
import {Navbar} from "@/components/ui/Navbar";
import {NavigationMenu} from "@/components/ui/navigation-menu";
import Footer from "@/components/ui/Footer";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Web German",
  description: "Proximamente...",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn("min-h-screen bg-background font-sans antialiased", fontSans.variable)}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
