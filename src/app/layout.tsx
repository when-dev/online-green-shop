import type { Metadata } from "next";
import { Mulish } from 'next/font/google';
import "./globals.css";

const mulish = Mulish({
  subsets: ['latin'], 
  variable: '--font-mulish', 
  weight: ['400', '600', '700'],
});

export const metadata: Metadata = {
  title: "GreenShop",
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
        {children}
      </body>
    </html>
  );
}
