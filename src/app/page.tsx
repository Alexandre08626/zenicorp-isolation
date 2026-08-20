'use client';

import { useEffect, useState, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  Shield,
  Clock,
  Award,
  Phone,
  CheckCircle2,
  Home,
  Building2,
  Banknote,
  Thermometer,
  Layers,
  Paintbrush,
  Wind,
  Leaf,
  Star,
  Zap,
  TreePine,
  Recycle,
  ArrowRight,
  Calculator,
  FileText,
  Users,
  Calendar,
  MapPin,
  Mail,
  Sparkles,
  Crown,
  Target,
  ChevronDown,
  Menu,
  X,
  ExternalLink,
} from 'lucide-react';

// Animated counter
const AnimatedCounter = ({ end, suffix = '' }: { end: number; suffix?: string }) => {
  const [count, setCount] = useState(0);
  const countRef = useRef<HTMLSpanElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setIsVisible(true);
    }, { threshold: 0.1 });

    if (countRef.current) observer.observe(countRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;
    let startTime: number;
    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / 2000, 1);
      const easeOut = 1 - Math.pow(1 - progress, 4);
      setCount(Math.floor(easeOut * end));
      if (progress < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }, [isVisible, end]);

  return <span ref={countRef}>{count.toLocaleString()}{suffix}</span>;
};

// Mouse glow effect
const MouseGlow = ({ color = 'rgba(16,185,129,0.3)' }: { color?: string }) => {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  useEffect(() => {
    const handler = (e: MouseEvent) => setPos({ x: e.clientX, y: e.clientY });
    window.addEventListener('mousemove', handler);
    return () => window.removeEventListener('mousemove', handler);
  }, []);
  return (
    <div className="fixed w-[500px] h-[500px] rounded-full pointer-events-none z-50 opacity-20 blur-[100px] transition-transform duration-100"
      style={{ background: `radial-gradient(circle, ${color} 0%, transparent 70%)`, left: pos.x - 250, top: pos.y - 250 }} />
  );
};

const services = [
  { icon: Layers, title: 'Isolation Grenier Éco+', desc: 'Ouate de cellulose soufflée R-60', price: 'À partir 2,500$', features: ['100% recyclée', 'Standard R-60', 'Aérateurs premium', 'Scellement total'], img: 'https://images.pexels.com/photos/38749876/pexels-photo-38749876.jpeg?auto=compress&w=800' },
  { icon: Home, title: 'Murs Zéro Démolition', desc: 'Injection mousse écologique', price: 'À partir 3,200$', features: ['Sans poussière', 'Sans démolition', 'Étanchéité air', 'Confort +'], img: 'https://images.pexels.com/photos/38749886/pexels-photo-38749886.jpeg?auto=compress&w=800' },
  { icon: Thermometer, title: 'Audit Énergétique IA', desc: 'Analyse thermique complète', price: 'À partir 450$', features: ['Caméra thermique HD', 'Blower door', 'Rapport IA', 'ROI calculé'], img: 'https://images.pexels.com/photos/31763539/pexels-photo-31763539.jpeg?auto=compress&w=800' },
  { icon: Banknote, title: 'Gestion Subventions', desc: 'Gestion intégrale Rénoclimat', price: 'Service gratuit', features: ['Éligibilité', 'Dossier géré', 'Inspecteur', 'Versement 30j'], img: 'https://images.pexels.com/photos/38749883/pexels-photo-38749883.jpeg?auto=compress&w=800' },
];

const realisations = [
  { title: 'Villa Premium Westmount', desc: 'Isolation complète R-60', value: '8,200 $', economies: '1,200 $/an', img: 'https://images.pexels.com/photos/38749891/pexels-photo-38749891.jpeg?auto=compress&w=800' },
  { title: 'Duplex Éco Plateau', desc: 'Murs + grenier subventionné', value: '12,800 $', economies: '1,800 $/an', img: 'https://images.pexels.com/photos/18335689/pexels-photo-18335689.jpeg?auto=compress&w=800' },
  { title: 'Manoir Historique Québec', desc: 'Restauration patrimoniale', value: '28,500 $', economies: '3,200 $/an', img: 'https://images.pexels.com/photos/6401176/pexels-photo-6401176.jpeg?auto=compress&w=800' },
  { title: 'Complexe Commercial Laval', desc: 'Isolation industrielle', value: '45,000 $', economies: '8,500 $/an', img: 'https://images.pexels.com/photos/15609962/pexels-photo-15609962.jpeg?auto=compress&w=800' },
];

const faqs = [
  { q: 'Combien puis-je économiser ?', a: 'Nos clients économisent en moyenne 25-35% sur leur facture de chauffage. Avec les subventions (jusqu\'à 5 000$), le ROI est de 18-36 mois.' },
  { q: 'Sans démolition, vraiment ?', a: 'Oui ! Notre système d\'injection breveté permet d\'isoler vos murs existants avec zéro démolition, zéro poussière.' },
  { q: 'Qu\'est-ce que le standard R-60 ?', a: 'Notre R-60 Premium dépasse les exigences Rénoclimat. Garantie uniformité, scellement parfait, ouate 100% recyclée.' },
  { q: 'Comment gérez-vous les subventions ?', a: 'Notre équipe dédiée s\'occupe de tout : éligibilité, dossier, inspection, suivi. Versement garanti sous 30 jours.' },
];

export default function IsolationMega() {
  const [mounted, setMounted] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    setMounted(true);
    const handler = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);

  if (!mounted) return null;

  return (
    <div className="min-h-screen bg-[#030303] text-white overflow-x-hidden">
      <MouseGlow color="rgba(16,185,129,0.3)" />
      
      {/* Background */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-emerald-500/5 rounded-full blur-[150px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-[#D4AF37]/5 rounded-full blur-[150px]" />
        <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)', backgroundSize: '40px 40px' }} />
      </div>

      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${scrollY > 50 ? 'bg-[#030303]/80 backdrop-blur-xl border-b border-white/5' : ''}`}>
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="relative">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-400 to-teal-500 flex items-center justify-center transform group-hover:scale-110 transition-all shadow-lg shadow-emerald-500/30">
                  <Leaf className="w-6 h-6 text-white" />
                </div>
              </div>
              <div>
                <span className="text-xl font-bold tracking-tight">ZENI<span className="text-emerald-400">CORP</span></span>
                <span className="block text-[10px] text-white/40 tracking-[0.3em] uppercase">Isolation Éco+</span>
              </div>
            </Link>

            <div className="hidden md:flex items-center gap-8">
              {['Services', 'Réalisations', 'Avantages', 'FAQ'].map((item) => (
                <a key={item} href={`#${item.toLowerCase()}`} className="text-sm text-white/60 hover:text-white transition-colors relative group">
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-emerald-400 group-hover:w-full transition-all" />
                </a>
              ))}
            </div>

            <div className="flex items-center gap-4">
              <a href="tel:18009364267" className="hidden sm:block text-sm text-white/60 hover:text-white transition-colors">1-800-ZENICORP</a>
              <a href="/soumission" className="px-6 py-2.5 bg-emerald-500 text-white text-sm font-semibold rounded-full hover:bg-emerald-400 transition-all shadow-lg shadow-emerald-500/25">Soumission</a>
              <button onClick={() => setMobileMenu(!mobileMenu)} className="md:hidden p-2">{mobileMenu ? <X /> : <Menu />}</button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileMenu && (
        <div className="fixed inset-0 z-50 bg-[#030303]/95 backdrop-blur-xl pt-20 px-6 md:hidden">
          <div className="space-y-4">
            {['Services', 'Réalisations', 'Avantages', 'FAQ'].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setMobileMenu(false)} className="block text-2xl font-medium py-4 border-b border-white/10">{item}</a>
            ))}
          </div>
        </div>
      )}

      {/* Hero */}
      <section className="relative min-h-screen flex items-center pt-20">
        <div className="max-w-7xl mx-auto px-6 py-20 w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-sm text-emerald-300">Subventions jusqu'à 5 000$</span>
              </div>
              
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1]">
                Isolation
                <span className="block text-transparent bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 bg-clip-text">Éco-Responsable</span>
              </h1>
              
              <p className="text-lg text-white/60 max-w-xl leading-relaxed">
                Réduisez vos factures de chauffage de 35% avec notre isolation premium. 
                Ouate de cellulose 100% recyclée, garantie R-60, gestion complète des subventions.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <a href="/soumission" className="inline-flex items-center gap-3 px-8 py-4 bg-emerald-500 text-white font-bold rounded-full hover:bg-emerald-400 transition-all shadow-lg shadow-emerald-500/30 hover:scale-105">
                  <Calculator className="w-5 h-5" />
                  Calculer mes économies
                </a>
                <a href="tel:18009364267" className="inline-flex items-center gap-3 px-8 py-4 border border-white/20 rounded-full hover:bg-white/5 transition-all">
                  <Phone className="w-5 h-5" />
                  1-800-ZENICORP
                </a>
              </div>

              <div className="flex items-center gap-6 pt-4">
                <div className="flex -space-x-3">
                  {[1,2,3,4].map((i) => (
                    <div key={i} className="w-10 h-10 rounded-full border-2 border-[#030303] bg-gradient-to-br from-emerald-400/20 to-emerald-500/20 flex items-center justify-center">
                      <Star className="w-4 h-4 text-emerald-400" />
                    </div>
                  ))}
                </div>
                <div>
                  <div className="flex gap-1">
                    {[1,2,3,4,5].map((i) => <Star key={i} className="w-4 h-4 fill-emerald-400 text-emerald-400" />)}
                  </div>
                  <p className="text-sm text-white/50 mt-1">4.9/5 - 2,500+ projets</p>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative rounded-3xl overflow-hidden">
                <img src="https://images.pexels.com/photos/6124239/pexels-photo-6124239.jpeg?auto=compress&w=1200" alt="Isolation" className="w-full h-[500px] object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#030303] via-transparent to-transparent" />
              </div>
              
              {/* Floating Cards */}
              <div className="absolute -bottom-6 -left-6 p-6 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10">
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-xl bg-emerald-500/20">
                    <TreePine className="w-8 h-8 text-emerald-400" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold">100%</p>
                    <p className="text-sm text-white/50">Recyclé</p>
                  </div>
                </div>
              </div>

              <div className="absolute -top-6 -right-6 p-6 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10">
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-xl bg-[#D4AF37]/20">
                    <Banknote className="w-8 h-8 text-[#D4AF37]" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold">35%</p>
                    <p className="text-sm text-white/50">Économies</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: 2500, suffix: '+', label: 'Projets réalisés', icon: Building2 },
              { value: 35, suffix: '%', label: 'Économies moyennes', icon: Banknote },
              { value: 5000, suffix: '$', label: 'Subventions max', icon: Award },
              { value: 10, suffix: ' ans', label: 'Garantie', icon: Shield },
            ].map((stat) => (
              <div key={stat.label} className="text-center group">
                <div className="inline-flex p-4 rounded-2xl bg-emerald-500/10 mb-4 group-hover:bg-emerald-500/20 transition-colors">
                  <stat.icon className="w-8 h-8 text-emerald-400" />
                </div>
                <p className="text-4xl md:text-5xl font-bold"><AnimatedCounter end={stat.value} suffix={stat.suffix} /></p>
                <p className="text-sm text-white/50 mt-2">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-sm text-emerald-300 mb-6">Nos Services</span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Solutions d'isolation <span className="text-emerald-400">premium</span></h2>
            <p className="text-lg text-white/60">Des technologies révolutionnaires pour un confort maximal et des économies garanties</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {services.map((service, index) => (
              <div key={service.title} className="group p-8 rounded-3xl bg-white/[0.02] border border-white/5 hover:border-emerald-500/30 transition-all duration-500 hover:-translate-y-2">
                <div className="relative h-48 rounded-2xl overflow-hidden mb-6">
                  <img src={service.img} alt={service.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#030303] via-transparent to-transparent" />
                  <div className="absolute top-4 right-4 px-4 py-2 rounded-full bg-emerald-500 text-white font-bold text-sm">{service.price}</div>
                </div>
                
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 rounded-xl bg-emerald-500/20">
                    <service.icon className="w-6 h-6 text-emerald-400" />
                  </div>
                  <h3 className="text-xl font-bold">{service.title}</h3>
                </div>
                
                <p className="text-white/60 mb-6">{service.desc}</p>
                
                <ul className="space-y-3">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3 text-sm text-white/70">
                      <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <a href="/soumission" className="mt-8 inline-flex items-center gap-2 text-emerald-400 font-medium group-hover:gap-3 transition-all">
                  En savoir plus <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Réalisations */}
      <section id="realisations" className="py-32 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-4 py-2 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/20 text-sm text-[#D4AF37] mb-6">Réalisations</span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Projets qui <span className="text-[#D4AF37]">transforment</span></h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {realisations.map((real) => (
              <div key={real.title} className="group rounded-3xl overflow-hidden bg-white/[0.02] border border-white/5 hover:border-[#D4AF37]/30 transition-all">
                <div className="relative h-48 overflow-hidden">
                  <img src={real.img} alt={real.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#030303] to-transparent" />
                  <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-[#D4AF37] text-black font-bold text-sm">{real.value}</div>
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-lg mb-1">{real.title}</h3>
                  <p className="text-sm text-white/50 mb-3">{real.desc}</p>
                  <div className="flex items-center gap-2 text-emerald-400">
                    <Banknote className="w-4 h-4" />
                    <span className="text-sm font-medium">Économies: {real.economies}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Éco-features */}
      <section id="avantages" className="py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-sm text-emerald-300 mb-6">Éco-Responsable</span>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">L'excellence <span className="text-emerald-400">écologique</span></h2>
              <p className="text-lg text-white/60 mb-8">Des matériaux durables pour un avenir plus vert. Notre ouate de cellulose est fabriquée à partir de papier journal recyclé.</p>
              
              <div className="space-y-4">
                {[
                  { icon: TreePine, title: '100% Recyclé', desc: 'Ouate de cellulose issue du papier journal' },
                  { icon: Wind, title: 'CO₂ Réduit', desc: '40% de réduction de votre empreinte carbone' },
                  { icon: Recycle, title: 'Économie Circulaire', desc: 'Valorisation des déchets en isolant' },
                  { icon: Shield, title: 'Air Pur', desc: 'Matériaux non-toxiques, sans COV nocifs' },
                ].map((item) => (
                  <div key={item.title} className="flex items-center gap-4 p-4 rounded-xl bg-white/[0.02] border border-white/5">
                    <div className="p-3 rounded-xl bg-emerald-500/20">
                      <item.icon className="w-6 h-6 text-emerald-400" />
                    </div>
                    <div>
                      <h4 className="font-semibold">{item.title}</h4>
                      <p className="text-sm text-white/50">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="aspect-square rounded-3xl overflow-hidden">
                <img src="https://images.pexels.com/photos/38749876/pexels-photo-38749876.jpeg?auto=compress&w=1000" alt="Éco isolation" className="w-full h-full object-cover" />
              </div>
              <div className="absolute -bottom-6 -left-6 p-6 rounded-2xl bg-emerald-500 text-white">
                <p className="text-3xl font-bold">2,500+</p>
                <p className="text-sm">Projets éco-responsables</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-32 border-y border-white/5">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Questions <span className="text-emerald-400">fréquentes</span></h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <details key={index} className="group p-6 rounded-2xl bg-white/[0.02] border border-white/5 cursor-pointer">
                <summary className="flex items-center justify-between font-semibold text-lg group-hover:text-emerald-400 transition-colors">
                  {faq.q}
                  <span className="text-emerald-400 text-2xl group-open:rotate-45 transition-transform">+</span>
                </summary>
                <p className="mt-4 text-white/60 leading-relaxed">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-emerald-500/10 rounded-full blur-[150px]" />
        </div>
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Prêt à <span className="text-emerald-400">économiser</span> ?
          </h2>
          <p className="text-xl text-white/60 mb-10">Évaluation gratuite + vérification de subventions sous 24h</p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="/soumission" className="inline-flex items-center gap-3 px-8 py-4 bg-emerald-500 text-white font-bold rounded-full hover:bg-emerald-400 transition-all shadow-lg shadow-emerald-500/30 hover:scale-105">
              <Calculator className="w-5 h-5" />
              Évaluation gratuite
            </a>
            <a href="tel:18009364267" className="inline-flex items-center gap-3 px-8 py-4 border border-white/20 rounded-full hover:bg-white/5 transition-all">
              <Phone className="w-5 h-5" />
              1-800-ZENICORP
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
