import type { Metadata, Viewport } from 'next';
import Script from 'next/script';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'], display: 'swap', variable: '--font-inter' });

export const metadata: Metadata = {
  title: 'Zeniva Isolation | Soufflage & polyuréthane',
  description: 'Isolation professionnelle résidentielle : soufflage cellulose, mousse polyuréthane, grenier, sous-sol. Québec.',
};

export const viewport: Viewport = { themeColor: '#0a0f0a' };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr-CA" className={`${inter.variable} dark`}>
      <body className="bg-[#0a0f0a] text-white antialiased">
        {children}
        {/* Orvel AI — assistant de conversation, servi par zenitech.dev */}
        <Script
          src="https://zenitech.dev/widget/orvel.js"
          data-orvel-site="isolation"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}