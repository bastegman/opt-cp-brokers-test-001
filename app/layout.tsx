import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const metadata: Metadata = {
  title: 'CP Brokers | Corredor de Seguros Santiago Chile',
  description: 'Corredora de seguros en Santiago con más de 30 años de experiencia. Seguro de arriendo, PYME, auto, hogar. Cotiza gratis.',
  keywords: 'corredor de seguros Santiago, seguros Chile, corredora de seguros',
  openGraph: {
    title: 'CP Brokers | Corredor de Seguros Santiago Chile',
    description: 'Corredora de seguros en Santiago con más de 30 años de experiencia.',
    url: 'https://cpbrokers.cl',
    siteName: 'CP Brokers',
    locale: 'es_CL',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'LocalBusiness',
              name: 'CP Brokers Corredores de Seguros',
              image: 'https://picsum.photos/600/400?random=1',
              description: 'Corredora de seguros profesional en Santiago, Chile',
              address: {
                '@type': 'PostalAddress',
                addressLocality: 'Santiago',
                addressRegion: 'Región Metropolitana',
                addressCountry: 'CL',
              },
              telephone: '+56964200522',
              contactPoint: {
                '@type': 'ContactPoint',
                contactType: 'Sales',
                telephone: '+56964200522',
              },
              sameAs: ['https://wa.me/56964200522'],
            }),
          }}
        />
      </head>
      <body className={`${inter.variable} font-sans bg-white`}>
        {children}
      </body>
    </html>
  );
}