import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'], display: 'swap', variable: '--font-inter' });

export const metadata: Metadata = {
  title: 'ZeniCorp Isolation | Soufflage & polyuréthane',
  description: 'Isolation professionnelle résidentielle : soufflage cellulose, mousse polyuréthane, grenier, sous-sol. Québec.',
};

export const viewport: Viewport = { themeColor: '#0a0f0a' };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr-CA" className={`${inter.variable} dark`}>
      <body className="bg-[#0a0f0a] text-white antialiased">
        {children}
      </body>
    </html>
  );
}