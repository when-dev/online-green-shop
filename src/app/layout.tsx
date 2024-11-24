import type { Metadata } from "next";
import { Mulish } from 'next/font/google';
import "./globals.css";
import Header from '@/components/header'
import Footer from '@/components/footer';


const mulish = Mulish({
  subsets: ['latin'], 
  variable: '--font-mulish', 
  weight: ['400', '600', '700'],
});

export const metadata: Metadata = {
  title: "GREENSHOP",
  description: "Online shop specializing in plants ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${mulish.className}`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
