import type { Metadata } from "next";
import { Inter, Teko } from "next/font/google";
import "./globals.css";
import {Footer, Header} from '../components'

const inter = Inter({ subsets: ["latin"] });
const teko = Teko({subsets:['latin']})
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
      <body className={teko.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
