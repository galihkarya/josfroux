import type { Metadata } from "next";
import { Manrope } from 'next/font/google';
import "./globals.css";

const manrope = Manrope({
  subsets: ['latin'],
  weight: ['400', '700'], 
  style: ['normal'],
  display: 'swap', 
})

export const metadata: Metadata = {
  title: "Jos' Froux",
  description: "Galih Karya's portfolio website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={manrope.className}>
        {children}
      </body>
    </html>
  );
}
