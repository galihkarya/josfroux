import type { Metadata } from "next";
import { Manrope } from '@next/font';
import "./globals.css";

const manrope = Manrope({
  subsets: ['latin'],
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
      <body
        className={`manrope.classname`}
      >
        {children}
      </body>
    </html>
  );
}
