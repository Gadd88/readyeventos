import type { Metadata } from "next";
import { Teko } from "next/font/google";
import "./globals.css";
import {Footer, Header} from '../components'

const teko = Teko({subsets:['latin']})
export const metadata: Metadata = {
  metadataBase: new URL("https://salonready.netlify.app"),
  title: "Ready Eventos",
  description: "Tu salón de eventos en Mercedes!",
  keywords: ["salon", "eventos", "cumpleaños", "fiestas", "salon de fiestas", "mercedes", "mercedes bsas", "ready", "salon ready", "ready eventos", "cumples ready"],
  creator: "Matias Saade",
  applicationName: "Ready Eventos",
  openGraph: {
    images: {
      url:'/img/img35.jpg',
      width: 400,
      height: 400,
    },
    title: "Salón de Eventos Ready",
    description: "Tu lugar para eventos en Mercedes, Bs As.",
    locale: 'es_AR',
    type: 'website'
  }
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
