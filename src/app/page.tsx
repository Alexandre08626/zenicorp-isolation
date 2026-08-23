'use client';

import { useState, useEffect } from 'react';
import { Phone, Check, ArrowRight, Calculator, MapPin, Clock, Shield, X, Package } from 'lucide-react';
import { jsPDF } from 'jspdf';

export default function IsolationPage() {
  const [mounted, setMounted] = useState(false);
  const [showQuote, setShowQuote] = useState(false);
  
  useEffect(() => { setMounted(true); }, []);

  const [sqft, setSqft] = useState('');
  const [finishType, setFinishType] = useState<'soufflage' | 'polyurethane'>('soufflage');
  const pricePerSqft = finishType === 'soufflage' ? 1.50 : 3.50;
  const estimatedTotal = sqft ? parseFloat(sqft) * pricePerSqft : 0;
  const [clientName, setClientName] = useState('');
  const [clientPhone, setClientPhone] = useState('');
  const [clientEmail, setClientEmail] = useState('');
  
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxImage, setLightboxImage] = useState({ src: '', alt: '' });
  
  const openLightbox = (src: string, alt: string) => {
    setLightboxImage({ src, alt });
    setLightboxOpen(true);
  };
  
  const closeLightbox = () => {
    setLightboxOpen(false);
    setLightboxImage({ src: '', alt: '' });
  };

  const downloadQuotePdf = async () => {
    const surface = Number.parseFloat(sqft || '0');
    const total = surface * pricePerSqft;
    const finishLabel = finishType === 'soufflage' ? 'Soufflage cellulose' : 'Mousse polyurethane';
    const now = new Date();
    const dateStr = now.toLocaleDateString('fr-CA', { year: 'numeric', month: 'long', day: 'numeric' });

    const doc = new jsPDF();
    const pageWidth = doc.internal.pageSize.getWidth();
    const centerX = pageWidth / 2;
    
    doc.setFillColor(10, 15, 10);
    doc.rect(0, 0, pageWidth, 50, 'F');
    
    doc.setDrawColor(34, 197, 94);
    doc.setLineWidth(2);
    doc.line(0, 50, pageWidth, 50);
    
    doc.setTextColor(34, 197, 94);
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(28);
    doc.text('ZENICORP', centerX, 25, { align: 'center' });
    
    doc.setTextColor(255, 255, 255);
    doc.setFontSize(16);
    doc.text('ISOLATION PRO', centerX, 38, { align: 'center' });
    
    doc.setTextColor(0, 0, 0);
    doc.setFontSize(24);
    doc.text('DEVIS ISOLATION', centerX, 70, { align: 'center' });
    
    doc.setFontSize(11);
    doc.setFont('helvetica', 'normal');
    doc.setTextColor(100, 100, 100);
    doc.text(`Date: ${dateStr}`, 20, 82);
    doc.text('Tel: 581-748-7017', pageWidth - 20, 82, { align: 'right' });
    
    doc.setFillColor(248, 250, 252);
    doc.roundedRect(15, 95, pageWidth - 30, 35, 3, 3, 'F');
    doc.setTextColor(0, 0, 0);
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(12);
    doc.text('CLIENT', 20, 105);
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(10);
    doc.setTextColor(60, 60, 60);
    doc.text(`Nom: ${clientName || '_______________________________'}`, 20, 115);
    doc.text(`Telephone: ${clientPhone || '_______________________________'}`, 20, 123);
    doc.text(`Courriel: ${clientEmail || '_______________________________'}`, pageWidth - 20, 123, { align: 'right' });
    
    doc.setFillColor(248, 250, 252);
    doc.roundedRect(15, 140, pageWidth - 30, 45, 3, 3, 'F');
    doc.setTextColor(0, 0, 0);
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(12);
    doc.text('DETAILS DU PROJET', 20, 150);
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(10);
    doc.setTextColor(60, 60, 60);
    doc.text(`Type d'isolation: ${finishLabel}`, 20, 162);
    doc.text(`Surface: ${surface.toFixed(2)} pieds carres`, 20, 170);
    doc.text(`Taux: $${pricePerSqft.toFixed(2)} / pied carre`, 20, 178);
    
    doc.setFillColor(34, 197, 94);
    doc.roundedRect(15, 200, pageWidth - 30, 30, 5, 5, 'F');
    doc.setTextColor(0, 0, 0);
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(14);
    doc.text('TOTAL ESTIME:', 25, 215);
    doc.setFontSize(22);
    doc.text(`$${total.toFixed(2)}`, pageWidth - 25, 218, { align: 'right' });
    
    doc.setTextColor(60, 60, 60);
    doc.setFontSize(10);
    doc.text('✓ Garantie R-30 a R-60', 20, 250);
    doc.text('✓ Aide gouvernementale disponible', 20, 258);
    doc.text('✓ Installation certifiee', 20, 266);
    
    doc.setTextColor(120, 120, 120);
    doc.setFontSize(9);
    doc.text('Ce devis est une estimation preliminaire.', centerX, 285, { align: 'center' });
    
    doc.setDrawColor(34, 197, 94);
    doc.setLineWidth(1);
    doc.line(20, 300, pageWidth - 20, 300);
    doc.text('zenicorp-isolation.vercel.app  |  581-748-7017', centerX, 310, { align: 'center' });

    doc.save(`devis-zenicorp-isolation-${now.getTime()}.pdf`);
  };

  if (!mounted) return null;

  return (
    <div className="min-h-screen bg-[#0a0f0a] text-white overflow-hidden">
      
      {/* HEADER */}
      <header className="fixed top-0 left-0 right-0 z-50 px-2 sm:px-4 py-2 sm:py-3 backdrop-blur-xl bg-black/50 border-b border-white/10">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img src="/logo.png" alt="ZeniCorp" className="w-7 h-7 sm:w-8 sm:h-8 object-contain flex-shrink-0" />
            <div className="leading-none">
              <div className="font-bold text-sm sm:text-base tracking-tight">ZENI<span className="text-green-500">CORP</span></div>
              <div className="text-[8px] sm:text-[9px] text-white/40 tracking-widest uppercase">Isolation Pro</div>
            </div>
          </div>
          
          <div className="flex items-center gap-1 sm:gap-2 md:gap-4">
            <a 
              href="tel:5817487017"
              className="flex items-center gap-1 sm:gap-2 px-2 sm:px-3 py-2 bg-gradient-to-r from-green-500 to-emerald-600 rounded-xl text-xs sm:text-sm font-bold hover:scale-105 transition-transform"
            >
              <Phone className="w-4 h-4" />
              <span className="hidden md:inline">581-748-7017</span>
            </a>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section className="relative h-screen flex flex-col justify-end pb-20">
        <div className="absolute inset-0">
          <div className="w-full h-full bg-gradient-to-br from-green-900/50 to-emerald-900/50" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f0a] via-[#0a0f0a]/60 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 w-full">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-6">
              <span className="text-sm font-medium">Experts en isolation residentielle</span>
            </div>

            <h1 className="text-6xl sm:text-7xl md:text-9xl font-black leading-[0.85] tracking-tighter mb-6">
              <span className="block text-white">ZENICORP</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-emerald-400 to-teal-300">ISOLATION</span>
            </h1>

            <p className="text-lg sm:text-xl md:text-2xl text-white/70 mb-8 max-w-xl leading-relaxed">
              Isolation de grenier et sous-sol. Soufflage et polyurethane.
              <span className="text-green-400 font-semibold"> Garantie R-30 a R-60.</span>
            </p>

            <div className="flex flex-wrap gap-3 sm:gap-4 mb-12">
              <button 
                onClick={() => setShowQuote(true)}
                className="group flex items-center gap-2 sm:gap-3 px-6 sm:px-10 py-4 sm:py-5 bg-green-500 hover:bg-green-400 text-black font-black text-base sm:text-lg rounded-full transition-all hover:scale-105 shadow-2xl shadow-green-500/50"
              >
                DEVIS GRATUIT
                <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 group-hover:translate-x-1 transition-transform" />
              </button>

              <a 
                href="tel:5817487017"
                className="flex items-center gap-2 sm:gap-3 px-5 sm:px-8 py-4 sm:py-5 bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/30 text-white font-bold text-base sm:text-lg rounded-full transition-all"
              >
                <Phone className="w-5 h-5 sm:w-6 sm:h-6" />
                <span className="hidden sm:inline">581-748-7017</span>
              </a>
            </div>

            <div className="flex flex-wrap items-center gap-6 sm:gap-8 text-sm">
              <div className="flex items-center gap-2 text-white/60">
                <Shield className="w-5 h-5 text-green-400" />
                <span>Garantie R-30 a R-60</span>
              </div>
              <div className="flex items-center gap-2 text-white/60">
                <MapPin className="w-5 h-5 text-green-400" />
                <span>Quebec & Environs</span>
              </div>
              <div className="flex items-center gap-2 text-white/60">
                <Clock className="w-5 h-5 text-green-400" />
                <span>Installation rapide</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CALCULATEUR */}
      <section className="py-20 px-4 sm:px-6 bg-[#0d120d]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-black text-center mb-4">Calculateur d'<span className="text-green-400">Isolation</span></h2>
          <p className="text-white/60 text-center mb-12">Estimez le cout de votre isolation</p>
          
          <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8 sm:p-12">
            <div className="mb-8">
              <p className="text-sm font-semibold text-white/60 uppercase tracking-wider mb-4">Type d'isolation</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <button 
                  onClick={() => setFinishType('soufflage')}
                  className={`p-6 rounded-2xl border-2 transition-all text-left ${finishType === 'soufflage' ? 'border-green-500 bg-green-500/10' : 'border-white/10 bg-white/5 hover:border-white/20'}`}
                >
                  <div className="font-bold text-xl mb-2">Soufflage cellulose</div>
                  <div className="text-3xl font-black text-green-400">$1.50<span className="text-base text-white/60 font-normal">/pied²</span></div>
                  <p className="text-sm text-white/40 mt-2">Eco-friendly, R-30 a R-40</p>
                </button>

                <button 
                  onClick={() => setFinishType('polyurethane')}
                  className={`p-6 rounded-2xl border-2 transition-all text-left ${finishType === 'polyurethane' ? 'border-green-500 bg-green-500/10' : 'border-white/10 bg-white/5 hover:border-white/20'}`}
                >
                  <div className="font-bold text-xl mb-2">Mousse polyurethane</div>
                  <div className="text-3xl font-black text-green-400">$3.50<span className="text-base text-white/60 font-normal">/pied²</span></div>
                  <p className="text-sm text-white/40 mt-2">Haute performance, R-50 a R-60</p>
                </button>
              </div>
            </div>

            <div className="mb-8">
              <label className="text-sm font-semibold text-white/60 uppercase tracking-wider mb-4 block">Superficie (pieds carres)</label>
              <input 
                type="number"
                value={sqft}
                onChange={(e) => setSqft(e.target.value)}
                placeholder="Ex: 1000"
                className="w-full px-6 py-5 bg-white/5 border border-white/20 rounded-2xl text-white text-2xl font-bold focus:border-green-500 focus:outline-none"
              />
            </div>

            <div className="p-8 bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/20 rounded-2xl mb-8">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-white/60 text-sm">Estimation totale</p>
                  <p className="text-5xl font-black text-white">${estimatedTotal.toFixed(2)}</p>
                </div>
                <div className="text-right">
                  <p className="text-white/60 text-sm">Prix au pied carre</p>
                  <p className="text-2xl font-bold text-green-400">${pricePerSqft.toFixed(2)}</p>
                </div>
              </div>
            </div>

            <button 
              onClick={() => setShowQuote(true)}
              className="w-full py-5 bg-green-500 hover:bg-green-400 text-black font-black text-xl rounded-2xl transition-all hover:scale-105 flex items-center justify-center gap-3"
            >
              <Calculator className="w-6 h-6" />
              TELECHARGER DEVIS PDF
            </button>
          </div>
        </div>
      </section>

      {/* DEVIS MODAL */}
      {showQuote && (
        <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4 sm:p-6" onClick={() => setShowQuote(false)}>
          <div className="w-full max-w-lg bg-zinc-900 rounded-3xl p-6 sm:p-8 border border-white/10" onClick={(e) => e.stopPropagation()}>
            <h2 className="text-2xl font-black mb-6 text-center">Devis Isolation</h2>
            <form className="space-y-4">
              <input type="text" value={clientName} onChange={(e) => setClientName(e.target.value)} placeholder="Nom complet" className="w-full px-4 py-4 bg-white/5 border border-white/20 rounded-xl text-white text-lg" />
              <input type="tel" value={clientPhone} onChange={(e) => setClientPhone(e.target.value)} placeholder="Telephone" className="w-full px-4 py-4 bg-white/5 border border-white/20 rounded-xl text-white text-lg" />
              <input type="email" value={clientEmail} onChange={(e) => setClientEmail(e.target.value)} placeholder="Email" className="w-full px-4 py-4 bg-white/5 border border-white/20 rounded-xl text-white text-lg" />
              <button type="button" onClick={() => { downloadQuotePdf(); setShowQuote(false); }} className="w-full py-5 bg-green-500 text-black font-black text-xl rounded-xl">TELECHARGER DEVIS PDF</button>
            </form>
            <p className="text-center text-white/40 text-sm mt-4">Ou appelle: <a href="tel:5817487017" className="text-green-400 font-bold">581-748-7017</a></p>
          </div>
        </div>
      )}

      {/* FOOTER */}
      <footer className="py-8 px-4 sm:px-6 border-t border-white/10 bg-[#0a0f0a]">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <img src="/logo.png" alt="ZeniCorp" className="w-8 h-8 object-contain" />
            <span className="font-bold text-xl">ZENICORP ISOLATION</span>
          </div>
          <p className="text-2xl font-black text-green-400 mb-2">581-748-7017</p>
          <p className="text-white/40">Garantie R-30 a R-60 - Prix: $1.50 - $3.50/pied carre</p>
        </div>
      </footer>

      {/* LIGHTBOX */}
      {lightboxOpen && (
        <div className="fixed inset-0 z-[60] bg-black/95 flex items-center justify-center p-4" onClick={closeLightbox}>
          <button onClick={closeLightbox} className="absolute top-4 right-4 p-3 bg-white/10 rounded-full hover:bg-white/20 z-10"><X className="w-8 h-8" /></button>
          <img src={lightboxImage.src} alt={lightboxImage.alt} className="max-w-full max-h-[90vh] object-contain rounded-lg" onClick={(e) => e.stopPropagation()} />
        </div>
      )}

    </div>
  );
}
