import type { Metadata, Viewport } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import Link from 'next/link';
import { Leaf } from 'lucide-react';
import './globals.css';

const inter = Inter({ subsets: ['latin'], display: 'swap', variable: '--font-inter' });
const playfair = Playfair_Display({ subsets: ['latin'], display: 'swap', variable: '--font-playfair' });

export const metadata: Metadata = {
  title: 'ZeniCorp Isolation | Isolation grenier, murs et performance énergétique',
  description: 'Isolation professionnelle. Grenier, murs, performance énergétique. Subventions Rénoclimat. Soumission gratuite 24h.',
};

export const viewport: Viewport = { themeColor: '#f0fdf4' };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr-CA" className={`${inter.variable} ${playfair.variable}`}>
      <body className="bg-gradient-to-br from-slate-50 via-emerald-50 to-teal-50">
        {/* Simple Header */}
        <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-xl border-b border-emerald-100">
          <div className="max-w-7xl mx-auto px-6 py-4">
            <div className="flex items-center justify-between">
              <Link href="/" className="flex items-center gap-4">
                {/* GROS LOGO */}
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-emerald-400 to-teal-400 flex items-center justify-center shadow-xl shadow-emerald-400/30 ring-4 ring-emerald-100">
                  <Leaf className="w-9 h-9 text-white" />
                </div>
                <div>
                  <span className="text-2xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">ZENICORP</span>
                  <span className="block text-xs text-emerald-600/70 tracking-widest uppercase">Isolation Éco+</span>
                </div>
              </Link>
              <a href="/soumission" className="px-8 py-3 bg-gradient-to-r from-emerald-400 to-teal-400 text-white font-bold rounded-full shadow-xl shadow-emerald-400/30 hover:shadow-2xl hover:scale-105 transition-all">
                Devis gratuit
              </a>
            </div>
          </div>
        </header>
        
        <div className="pt-24">
          {children}
        </div>

        {/* Simple Footer */}
        <footer className="bg-white border-t border-emerald-100 mt-20">
          <div className="max-w-7xl mx-auto px-6 py-12">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-400 to-teal-400 flex items-center justify-center">
                  <Leaf className="w-6 h-6 text-white" />
                </div>
                <div>
                  <span className="text-xl font-bold text-slate-800">ZENI<span className="text-emerald-500">CORP</span></span>
                  <p className="text-sm text-slate-500">Isolation Éco-Responsable</p>
                </div>
              </div>
              <p className="text-sm text-slate-400">
                © {new Date().getFullYear()} ZeniCorp. Tous droits réservés.
              </p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
