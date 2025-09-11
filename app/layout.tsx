import type { Metadata } from "next";
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

export const metadata: Metadata = {
  title: "APOLO300 - Seguridad Privada y Corporativa",
  description: "Empresa líder en servicios de seguridad privada, corporativa, eventos, resguardo, prevención de pérdidas y seguridad electrónica. Protegemos lo que más valoras con personal capacitado y tecnología de vanguardia.",
  keywords: "seguridad privada, seguridad corporativa, vigilancia, escoltas, eventos, prevención pérdidas, seguridad electrónica, cámaras, alarmas",
  authors: [{ name: "APOLO300" }],
  openGraph: {
    title: "APOLO300 - Seguridad Privada y Corporativa",
    description: "Empresa líder en servicios de seguridad privada, corporativa, eventos, resguardo, prevención de pérdidas y seguridad electrónica.",
    url: "https://apolo300.vercel.app",
    siteName: "APOLO300",
    locale: "es_ES",
    type: "website",
  },
  icons: {
    icon: "/images/apolo300-logo.ico",
    shortcut: "/images/apolo300-logo.ico",
    apple: "/images/apolo300-logo.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'SecurityService',
    name: 'APOLO300',
    description: 'Empresa líder en servicios de seguridad privada, corporativa, eventos, resguardo, prevención de pérdidas y seguridad electrónica.',
    url: 'https://apolo300.vercel.app',
    telephone: '+52-xxx-xxx-xxxx',
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'MX',
    },
    serviceType: [
      'Seguridad Privada',
      'Seguridad Corporativa',
      'Seguridad para Eventos',
      'Seguridad de Resguardo',
      'Prevención de Pérdidas',
      'Seguridad Electrónica'
    ]
  };

  return (
    <html lang="es">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
