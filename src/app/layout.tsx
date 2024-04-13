import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import {Header} from '../components'

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ready Eventos",
  description: "Tu salón de eventos en Mercedes!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <Header />
        {children}</body>
    </html>
  );
}
