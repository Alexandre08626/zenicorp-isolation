'use client';

import { useEffect, useState, useRef } from 'react';
import Link from 'next/link';
import {
  Shield, Clock, Award, Phone, CheckCircle2, Home, Building2, Banknote,
  Thermometer, Layers, Paintbrush, Wind, Leaf, Star, Zap, TreePine, Recycle,
  ArrowRight, Calculator, Users, Sparkles, Crown
} from 'lucide-react';

// Animated counter
const Counter = ({ end, suffix = '' }: { end: number; suffix?: string }) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setIsVisible(true);
    }, { threshold: 0.1 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;
    let start: number;
    const animate = (now: number) => {
      if (!start) start = now;
      const p = Math.min((now - start) / 2000, 1);
      setCount(Math.floor((1 - Math.pow(1 - p, 4)) * end));
      if (p < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }, [isVisible, end]);

  return <span ref={ref}>{count.toLocaleString()}{suffix}</span>;
};

// Sparkle component
const Sparkle = ({ delay }: { delay: number }) => (
  <div 
    className="absolute w-1 h-1 bg-white rounded-full animate-ping"
    style={{ 
      animationDelay: `${delay}s`,
      animationDuration: '3s',
      opacity: 0.8
    }}
  />
);

// Floating particles
const Particle = ({ color, delay, x, y }: { color: string; delay: number; x: string; y: string }) => (
  <div 
    className="absolute w-2 h-2 rounded-full opacity-60"
    style={{ 
      background: color,
      left: x,
      top: y,
      animation: `float ${3 + delay}s ease-in-out infinite`,
      animationDelay: `${delay}s`,
      filter: 'blur(1px)'
    }}
  />
);

const services = [
  { icon: Layers, title: 'Isolation Grenier Éco+', desc: 'Ouate de cellulose soufflée R-60', price: '2,500$', features: ['100% recyclée', 'Standard R-60', 'Aérateurs premium', 'Scellement total'], color: 'from-emerald-300 to-teal-300' },
  { icon: Home, title: 'Murs Zéro Démolition', desc: 'Injection mousse écologique', price: '3,200$', features: ['Sans poussière', 'Sans démolition', 'Étanchéité air', 'Confort +'], color: 'from-cyan-300 to-blue-300' },
  { icon: Thermometer, title: 'Audit Énergétique IA', desc: 'Analyse thermique complète', price: '450$', features: ['Caméra thermique HD', 'Blower door', 'Rapport IA', 'ROI calculé'], color: 'from-violet-300 to-purple-300' },
  { icon: Banknote, title: 'Gestion Subventions', desc: 'Gestion intégrale Rénoclimat', price: 'Gratuit', features: ['Éligibilité', 'Dossier géré', 'Inspecteur', 'Versement 30j'], color: 'from-amber-300 to-orange-300' },
];

const realisations = [
  { title: 'Villa Westmount', desc: 'Isolation R-60', value: '8,200 $', economies: '1,200$/an', color: 'bg-emerald-100' },
  { title: 'Duplex Plateau', desc: 'Murs + grenier', value: '12,800 $', economies: '1,800$/an', color: 'bg-cyan-100' },
  { title: 'Manoir Québec', desc: 'Restauration', value: '28,500 $', economies: '3,200$/an', color: 'bg-violet-100' },
  { title: 'Commercial Laval', desc: 'Industriel', value: '45,000 $', economies: '8,500$/an', color: 'bg-amber-100' },
];

export default function IsolationPale() {
  const [mounted, setMounted] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

  useEffect(() => { setMounted(true); }, []);
  if (!mounted) return null;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-emerald-50 to-teal-50 text-slate-800 overflow-x-hidden relative">
      {/* Background Pattern */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, rgba(16,185,129,0.3) 2px, transparent 0)`,
          backgroundSize: '48px 48px'
        }} />
        {/* Soft blobs */}
        <div className="absolute top-20 left-10 w-96 h-96 bg-emerald-200/30 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-teal-200/30 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-200/20 rounded-full blur-3xl" />
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/70 backdrop-blur-xl border-b border-emerald-200/30">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="relative">
                <div className="w-20 h-20 rounded-3xl bg-gradient-to-br from-emerald-400 to-teal-400 flex items-center justify-center shadow-2xl shadow-emerald-400/40 ring-8 ring-emerald-100">
                  <Leaf className="w-10 h-10 text-white" />
                </div>
                <Sparkle delay={0} />
                <Sparkle delay={1} />
              </div>
              <div>
                <span className="text-xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">ZENICORP</span>
                <span className="block text-[10px] text-emerald-600/70 tracking-[0.3em] uppercase font-medium">Isolation Éco+</span>
              </div>
            </Link>

            <div className="hidden md:flex items-center gap-8">
              {['Services', 'Réalisations', 'Avantages'].map((item) => (
                <a key={item} href={`#${item.toLowerCase()}`} className="text-sm text-slate-600 hover:text-emerald-600 transition-colors font-medium">
                  {item}
                </a>
              ))}
            </div>

            <div className="flex items-center gap-4">
              <a href="/soumission" className="px-6 py-3 bg-gradient-to-r from-emerald-400 to-teal-400 text-white font-semibold rounded-full shadow-lg shadow-emerald-400/30 hover:shadow-xl hover:scale-105 transition-all ring-2 ring-emerald-200">
                Devis gratuit
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 relative">
              {/* Decorative sparkles */}
              <Particle color="#34d399" delay={0} x="80%" y="20%" />
              <Particle color="#2dd4bf" delay={0.5} x="90%" y="60%" />
              <Particle color="#a78bfa" delay={1} x="10%" y="80%" />

              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-100 border border-emerald-200">
                <Sparkles className="w-4 h-4 text-emerald-500" />
                <span className="text-sm text-emerald-700 font-medium">Subventions jusqu'à 5 000$</span>
              </div>
              
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] text-slate-800">
                Isolation{' '}
                <span className="bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent">Éco+</span>
              </h1>
              
              <p className="text-lg text-slate-600 max-w-xl leading-relaxed">
                Réduisez vos factures de chauffage de <span className="font-bold text-emerald-600">35%</span> avec notre isolation premium. 
                Ouate 100% recyclée, garantie R-60.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <a href="/soumission" className="group relative inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-emerald-400 to-teal-400 text-white font-bold rounded-full shadow-xl shadow-emerald-400/40 hover:shadow-2xl hover:scale-105 transition-all overflow-hidden">
                  <span className="relative z-10">Calculer mes économies</span>
                  <ArrowRight className="relative z-10 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  <div className="absolute inset-0 bg-gradient-to-r from-teal-400 to-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
                
                <a href="tel:18009364267" className="inline-flex items-center gap-3 px-8 py-4 bg-white border-2 border-emerald-200 text-emerald-700 font-semibold rounded-full hover:bg-emerald-50 transition-all shadow-md">
                  <Phone className="w-5 h-5" />
                  1-800-ZENICORP
                </a>
              </div>

              {/* Trust badges */}
              <div className="flex flex-wrap items-center gap-4 pt-4">
                {['Garantie 10 ans', 'Éco-responsable', 'Service 24/7'].map((badge) => (
                  <span key={badge} className="px-4 py-2 bg-white/80 border border-emerald-100 rounded-full text-sm text-emerald-700 font-medium shadow-sm">
                    ✓ {badge}
                  </span>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-emerald-200/50 ring-4 ring-white">
                <img src="https://images.pexels.com/photos/6124239/pexels-photo-6124239.jpeg?auto=compress&cs=tinysrgb&w=1920" alt="Isolation" className="w-full h-[700px] object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/20 to-transparent" />
              </div>
              
              {/* Floating cards */}
              <div className="absolute -bottom-6 -left-6 p-6 rounded-2xl bg-white shadow-xl border border-emerald-100">
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-xl bg-emerald-100">
                    <TreePine className="w-8 h-8 text-emerald-600" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-slate-800">100%</p>
                    <p className="text-sm text-slate-500">Recyclé</p>
                  </div>
                </div>
              </div>

              <div className="absolute -top-6 -right-6 p-6 rounded-2xl bg-white shadow-xl border border-amber-100">
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-xl bg-amber-100">
                    <Banknote className="w-8 h-8 text-amber-600" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-slate-800">35%</p>
                    <p className="text-sm text-slate-500">Économies</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { value: 2500, suffix: '+', label: 'Projets', icon: Home, color: 'from-emerald-300 to-teal-300' },
              { value: 35, suffix: '%', label: 'Économies', icon: Banknote, color: 'from-amber-300 to-orange-300' },
              { value: 5000, suffix: '$', label: 'Subventions', icon: Award, color: 'from-violet-300 to-purple-300' },
              { value: 10, suffix: ' ans', label: 'Garantie', icon: Shield, color: 'from-cyan-300 to-blue-300' },
            ].map((stat) => (
              <div key={stat.label} className="group p-8 rounded-3xl bg-white border-2 border-slate-100 hover:border-emerald-200 transition-all shadow-lg hover:shadow-xl">
                <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${stat.color} mb-4 group-hover:scale-110 transition-transform`}>
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <p className="text-4xl font-bold text-slate-800"><Counter end={stat.value} suffix={stat.suffix} /></p>
                <p className="text-sm text-slate-500 mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-100 text-emerald-700 font-medium mb-6">
              <Sparkles className="w-4 h-4" />
              Nos Services
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
              Solutions <span className="text-emerald-500">premium</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {services.map((service) => (
              <div key={service.title} className="group p-8 rounded-3xl bg-white border-2 border-slate-100 hover:border-emerald-200 transition-all shadow-lg hover:shadow-2xl hover:-translate-y-1">
                <div className="flex items-start gap-4 mb-6">
                  <div className={`p-4 rounded-2xl bg-gradient-to-r ${service.color} shadow-lg`}>
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-slate-800">{service.title}</h3>
                    <p className="text-slate-500">{service.desc}</p>
                  </div>
                  <span className="px-4 py-2 rounded-full bg-emerald-100 text-emerald-700 font-bold">{service.price}</span>
                </div>
                
                <ul className="grid grid-cols-2 gap-3">
                  {service.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm text-slate-600">
                      <CheckCircle2 className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Réalisations */}
      <section id="realisations" className="py-20 bg-white/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-800 mb-6">Réalisations <span className="text-emerald-500">récentes</span></h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {realisations.map((r) => (
              <div key={r.title} className="group rounded-3xl overflow-hidden bg-white border-2 border-slate-100 hover:border-emerald-200 transition-all shadow-lg hover:shadow-xl">
                <div className={`h-32 ${r.color} flex items-center justify-center`}>
                  <Home className="w-12 h-12 text-slate-700/30" />
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-slate-800">{r.title}</h3>
                  <p className="text-sm text-slate-500 mb-3">{r.desc}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-emerald-600 font-bold">{r.value}</span>
                    <span className="text-xs text-emerald-500 bg-emerald-50 px-2 py-1 rounded-full">{r.economies}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-100 via-teal-100 to-cyan-100" />
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-4xl md:text-6xl font-bold text-slate-800 mb-6">
            Prêt à <span className="text-emerald-500">économiser</span> ?
          </h2>
          <p className="text-xl text-slate-600 mb-10">Évaluation gratuite + vérification de subventions sous 24h</p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="/soumission" className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-emerald-400 to-teal-400 text-white font-bold rounded-full shadow-xl shadow-emerald-400/40 hover:shadow-2xl hover:scale-105 transition-all">
              <Calculator className="w-5 h-5" />
              Évaluation gratuite
            </a>
            <a href="tel:18009364267" className="inline-flex items-center gap-3 px-8 py-4 bg-white text-slate-700 font-bold rounded-full shadow-lg hover:shadow-xl transition-all border-2 border-slate-200">
              <Phone className="w-5 h-5" />
              1-800-ZENICORP
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
