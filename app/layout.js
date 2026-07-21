import { Montserrat, Inter } from 'next/font/google';
import '@/styles/globals.css';

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '600', '700', '900'],
  variable: '--font-title',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '700'],
  variable: '--font-body',
  display: 'swap',
});

export const metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://rotulab-landing.vercel.app'),
  title: 'ROTULAB | Innovación Visual, NFC e Impresión Profesional',
  description: 'Landing page premium de ROTULAB. Especialistas en impresión DTF, soluciones inteligentes NFC, impresión 3D, corte láser, señalización y producción audiovisual en Nicaragua.',
  keywords: ['ROTULAB', 'DTF', 'NFC', 'Impresión 3D', 'Corte Láser', 'Señalización', 'Audiovisual', 'Nicaragua'],
  authors: [{ name: 'ROTULAB Team' }],
  creator: 'ROTULAB',
  icons: {
    icon: '/images/logos/2026_01_03_11_15_00_IMG_0018.PNG',
    apple: '/images/logos/2026_01_03_11_15_00_IMG_0018.PNG',
  },
  openGraph: {
    title: 'ROTULAB | Innovación Visual y Tecnológica',
    description: 'Personalización de alto impacto, soluciones NFC e impresión avanzada.',
    url: 'https://rotulab-landing.vercel.app',
    siteName: 'ROTULAB',
    images: [
      {
        url: '/images/logos/2026_01_03_11_15_00_IMG_0018.PNG',
        width: 1200,
        height: 630,
        alt: 'Logo de ROTULAB',
      },
    ],
    locale: 'es_NI',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ROTULAB | Innovación Visual',
    description: 'Llevamos tus ideas al plano físico con la máxima precisión tecnológica.',
    images: ['/images/logos/2026_01_03_11_15_00_IMG_0018.PNG'],
  },
};

/**
 * Layout principal del sistema. Define la estructura base HTML,
 * inyecta las variables de fuentes tipográficas y envuelve la aplicación.
 * 
 * @param {Object} props
 * @param {React.ReactNode} props.children
 */
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function RootLayout({ children }) {
  return (
    <html lang="es" className={`${montserrat.variable} ${inter.variable}`}>
      <body className="antialiased selection:bg-[#e30613] selection:text-white">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
