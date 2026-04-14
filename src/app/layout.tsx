import '@/styles/globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className={inter.className}>
        {/* Aquí no ponemos divs de marketing, solo el paso del contenido */}
        {children}
      </body>
    </html>
  );
}