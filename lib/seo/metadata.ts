import { Metadata } from 'next';

/**
 * Configuración de Metadatos para SEO y redes sociales.
 * Optimizado para el posicionamiento de Master Almaraz en Tepic.
 */

const siteUrl = "https://masteralmaraz.com"; // Asegúrate de actualizar esto al final

export const siteMetadata: Metadata = {
  title: {
    default: "Master Almaraz | Especialista en Gastos Médicos y Retiro en Tepic",
    template: "%s | Master Almaraz Agente de Seguros"
  },
  description: "Asesoría personalizada en seguros de gastos médicos mayores, retiro, vida y auto en Ciudad del Valle, Tepic. Protegemos tu salud, patrimonio y futuro con claridad.",
  metadataBase: new URL(siteUrl),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Master Almaraz | Agente de Seguros en Tepic",
    description: "Protección médica y planeación patrimonial personalizada con Héctor Almaraz Ledesma.",
    url: "/",
    siteName: "Master Almaraz",
    locale: "es_MX",
    type: "website",
    images: [
      {
        url: "/images/home/hero-agent.webp", // Esta será la foto de Héctor Almaraz
        width: 1200,
        height: 630,
        alt: "Héctor Almaraz Ledesma - Agente de Seguros",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    card: "summary_large_image",
    title: "Master Almaraz | Agente de Seguros en Tepic",
    description: "Asesoría clara y personalizada en seguros y planeación financiera.",
    images: ["/images/home/hero-agent.webp"],
  },
};