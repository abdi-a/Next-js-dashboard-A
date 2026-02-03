import type { Metadata } from "next";
import { Inter } from "next/font/google"; // Using Google Font for "beautiful UI"
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Next.js Security Dashboard",
  description: "Learn Next.js Security the Right Way",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
