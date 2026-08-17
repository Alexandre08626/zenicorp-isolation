import Link from 'next/link';
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
} from 'lucide-react';

const services = [
  {
    icon: Layers,
    title: 'Isolation grenier',
    desc: 'Ouate de cellulose soufflÃ©e ou panneaux rigides. Ã‰limine les ponts thermiques et rÃ©duit vos factures.',
    features: ['Ouate de cellulose certifiÃ©e', 'Ã‰paisseur R-60 recommandÃ©e', 'AÃ©rateurs de soffite', 'Scellement des fuites d\'air'],
  },
  {
    icon: Home,
    title: 'Isolation des murs',
    desc: 'Isolation des murs existants et neufs. Confort accru et rÃ©duction du bruit extÃ©rieur.',
    features: ['Ouate soufflÃ©e ou mousse', 'Murs existants sans dÃ©molition', 'RÃ©duction des courants d\'air', 'AmÃ©lioration du confort'],
  },
  {
    icon: Thermometer,
    title: 'Performance Ã©nergÃ©tique',
    desc: 'Analyse complÃ¨te de votre isolation actuelle et recommandations chiffrÃ©es sur les Ã©conomies potentielles.',
    features: ['Blower door test', 'CamÃ©ra thermique', 'Rapport d\'Ã©conomie dÃ©taillÃ©', 'Plan d\'action priorisÃ©'],
  },
  {
    icon: Banknote,
    title: 'Subventions & aides',
    desc: 'Nous gÃ©rons vos demandes de subventions RÃ©noclimat, Hydro-QuÃ©bec et LogisVert. Jusqu\'Ã  5 000 $ d\'aide.',
    features: ['Ã‰ligibilitÃ© vÃ©rifiÃ©e avant travaux', 'Dossier complet gÃ©rÃ©', 'Inspecteur certifiÃ© RÃ©noclimat', 'Aucun coÃ»t cachÃ©'],
  },
];

const realisations = [
  { title: 'Grenier R-60 - QuÃ©bec', desc: 'Cellulose soufflÃ©e + aÃ©rateurs', value: '4 200 $' },
  { title: 'Murs existants - LÃ©vis', desc: 'Ouate soufflÃ©e, 6 murs', value: '6 800 $' },
  { title: 'Projet subventionnÃ© - MontrÃ©al', desc: 'Grenier + murs, 4 000$ de subvention', value: '11 500 $' },
  { title: 'Manoir centenaire - Trois-RiviÃ¨res', desc: 'Isolation complÃ¨te + fenÃªtres', value: '24 000 $' },
];

const faqs = [
  {
    q: 'Combien puis-je Ã©conomiser ?',
    a: 'En moyenne 20-30% sur votre facture de chauffage. CombinÃ© aux subventions (jusqu\'Ã  5 000$), le retour sur investissement est de 2-4 ans.',
  },
  {
    q: 'Est-ce que Ã§a se fait sans dÃ©molition ?',
    a: 'Oui. La ouate de cellulose peut Ãªtre soufflÃ©e dans les murs existants via des petits trous, rÃ©parÃ©s ensuite de faÃ§on invisible.',
  },
  {
    q: 'Qu\'est-ce que le R-60 ?',
    a: 'C\'est la valeur de rÃ©sistance thermique recommandÃ©e pour les greniers au QuÃ©bec. Notre Ã©quipe vise toujours les standards RÃ©noclimat.',
  },
  {
    q: 'GÃ©rez-vous les subventions ?',
    a: 'Oui, de A Ã  Z : vÃ©rification d\'Ã©ligibilitÃ© avant les travaux, dossier complet, inspection et suivi jusqu\'au versement.',
  },
];

export default function IsolationPage() {
  return (
    <>
      {/* BANDEAU SUBVENTIONS */}
      <div className="bg-zenicorp-gold text-zenicorp-black">
        <div className="container-zenicorp py-3 flex items-center justify-center gap-3 text-sm font-semibold">
          <Banknote className="w-5 h-5" />
          Jusqu&apos;Ã  5 000 $ de subventions (RÃ©noclimat, Hydro-QuÃ©bec, LogisVert) - GÃ©rÃ©es de A Ã  Z
        </div>
      </div>

      {/* HERO */}
      <section className="relative bg-zenicorp-black text-white">
        <div className="absolute inset-0 bg-gradient-to-br from-zenicorp-black via-zenicorp-darkGray to-zenicorp-black"></div>
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'repeating-linear-gradient(45deg, #22C55E 0px, #22C55E 1px, transparent 1px, transparent 60px)' }}></div>
        <div className="container-zenicorp relative py-20 lg:py-28">
          <div className="max-w-3xl animate-slide-up">
            <div className="inline-flex items-center gap-2 bg-zenicorp-gold/10 border border-zenicorp-gold/40 px-4 py-1.5 mb-6">
              <Shield className="w-4 h-4 text-zenicorp-gold" />
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-zenicorp-gold">Division Isolation de ZeniCorp</span>
            </div>
            <h1 className="heading-1 text-white !text-4xl sm:!text-5xl lg:!text-6xl mb-6">
              Moins de factures.
              <span className="block text-zenicorp-gold">Plus de confort.</span>
            </h1>
            <p className="text-lg text-zenicorp-silver mb-8 max-w-2xl">
              Isolation professionnelle de greniers, murs et planchers. Ã‰conomisez jusqu&apos;Ã  30% sur votre chauffage,
              avec subventions gÃ©rÃ©es de A Ã  Z.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="/soumission" className="btn-gold">VÃ©rifier mes subventions</a>
              <a href="tel:18009364267" className="btn-secondary !border-white !text-white hover:!bg-white hover:!text-zenicorp-black">
                <Phone className="w-4 h-4 mr-2" /> 1-800-ZENICORP
              </a>
            </div>
            <div className="flex flex-wrap gap-8 mt-12">
              <div className="flex items-center gap-2 text-sm text-zenicorp-silver">
                <CheckCircle2 className="w-5 h-5 text-zenicorp-gold" /> Jusqu&apos;Ã  5 000 $ de subventions
              </div>
              <div className="flex items-center gap-2 text-sm text-zenicorp-silver">
                <CheckCircle2 className="w-5 h-5 text-zenicorp-gold" /> Garantie 10 ans
              </div>
              <div className="flex items-center gap-2 text-sm text-zenicorp-silver">
                <CheckCircle2 className="w-5 h-5 text-zenicorp-gold" /> Sans dÃ©molition
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BANDEAU AVANTAGES */}
      <section className="bg-white border-b border-zenicorp-border">
        <div className="container-zenicorp py-8 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="flex items-center gap-3">
            <Banknote className="w-8 h-8 text-zenicorp-gold flex-shrink-0" />
            <div>
              <p className="font-semibold text-sm">Subventions incluses</p>
              <p className="text-xs text-zenicorp-mediumGray">Jusqu&apos;Ã  5 000 $</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Thermometer className="w-8 h-8 text-zenicorp-gold flex-shrink-0" />
            <div>
              <p className="font-semibold text-sm">Ã‰conomies 20-30%</p>
              <p className="text-xs text-zenicorp-mediumGray">Sur le chauffage</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Clock className="w-8 h-8 text-zenicorp-gold flex-shrink-0" />
            <div>
              <p className="font-semibold text-sm">Installation rapide</p>
              <p className="text-xs text-zenicorp-mediumGray">Grenier en 1 jour</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Wind className="w-8 h-8 text-zenicorp-gold flex-shrink-0" />
            <div>
              <p className="font-semibold text-sm">Air plus sain</p>
              <p className="text-xs text-zenicorp-mediumGray">Scellement complet</p>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="section-padding bg-zenicorp-lightGray">
        <div className="container-zenicorp">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <p className="text-zenicorp-gold font-semibold uppercase tracking-[0.2em] text-xs mb-3">Nos services</p>
            <h2 className="heading-2">Isolation complÃ¨te de votre bÃ¢timent</h2>
            <p className="body-base mt-4">RÃ©sidentiel et commercial. Solutions certifiÃ©es et subventionnables.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((service) => (
              <div key={service.title} className="card p-6">
                <div className="w-12 h-12 bg-zenicorp-black flex items-center justify-center mb-4">
                  <service.icon className="w-6 h-6 text-zenicorp-gold" />
                </div>
                <h3 className="heading-3 mb-3">{service.title}</h3>
                <p className="body-base text-sm mb-4">{service.desc}</p>
                <ul className="space-y-2">
                  {service.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm text-zenicorp-mediumGray">
                      <CheckCircle2 className="w-4 h-4 text-zenicorp-gold" /> {f}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RÃ‰ALISATIONS */}
      <section id="realisations" className="section-padding bg-white">
        <div className="container-zenicorp">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <p className="text-zenicorp-gold font-semibold uppercase tracking-[0.2em] text-xs mb-3">RÃ©alisations</p>
            <h2 className="heading-2">Des projets rÃ©cents</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {realisations.map((r) => (
              <div key={r.title} className="card p-6">
                <div className="h-32 bg-gradient-to-br from-zenicorp-darkGray to-zenicorp-black flex items-center justify-center mb-4">
                  <Paintbrush className="w-10 h-10 text-zenicorp-gold" />
                </div>
                <h3 className="font-semibold text-sm">{r.title}</h3>
                <p className="text-xs text-zenicorp-mediumGray mt-1">{r.desc}</p>
                <p className="text-zenicorp-gold font-bold text-sm mt-2">{r.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESSUS */}
      <section className="section-padding bg-zenicorp-black text-white">
        <div className="container-zenicorp">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <p className="text-zenicorp-gold font-semibold uppercase tracking-[0.2em] text-xs mb-3">Comment Ã§a marche</p>
            <h2 className="heading-2 text-white">3 Ã©tapes simples</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { n: '01', t: 'Ã‰valuation', d: 'Analyse de votre isolation actuelle + vÃ©rification d\'Ã©ligibilitÃ© aux subventions.' },
              { n: '02', t: 'Travaux', d: 'Installation rapide et propre. Grenier en une journÃ©e, murs en 2-3 jours.' },
              { n: '03', t: 'Subventions', d: 'Nous gÃ©rons l\'inspection et le dossier complet jusqu\'au versement de votre aide.' },
            ].map((s) => (
              <div key={s.n} className="border border-zenicorp-mediumGray p-6">
                <span className="font-heading text-5xl text-zenicorp-gold font-bold">{s.n}</span>
                <h3 className="text-xl font-semibold mt-4 mb-2">{s.t}</h3>
                <p className="text-sm text-zenicorp-silver">{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SUBVENTIONS */}
      <section id="subventions" className="section-padding bg-zenicorp-lightGray">
        <div className="container-zenicorp max-w-3xl">
          <div className="card p-8">
            <div className="flex items-center gap-3 mb-4">
              <Banknote className="w-8 h-8 text-zenicorp-gold" />
              <h2 className="heading-3">Programmes de subventions gÃ©rÃ©s pour vous</h2>
            </div>
            <ul className="space-y-3 mb-6">
              {[
                'RÃ©noclimat (QuÃ©bec) - jusqu\'Ã  5 000 $ pour isolation et Ã©tanchÃ©itÃ©',
                'Hydro-QuÃ©bec - rabais additionnels sur l\'Ã©valuation Ã©nergÃ©tique',
                'LogisVert - financement et subventions pour propriÃ©taires admissibles',
                'Mesures complÃ©mentaires pour les propriÃ©tÃ©s Ã  revenus',
              ].map((s) => (
                <li key={s} className="flex items-start gap-3 text-sm">
                  <CheckCircle2 className="w-5 h-5 text-zenicorp-gold flex-shrink-0 mt-0.5" /> {s}
                </li>
              ))}
            </ul>
            <a href="/soumission" className="btn-gold">VÃ©rifier mon Ã©ligibilitÃ© (gratuit)</a>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="section-padding bg-white">
        <div className="container-zenicorp max-w-3xl">
          <div className="text-center mb-12">
            <p className="text-zenicorp-gold font-semibold uppercase tracking-[0.2em] text-xs mb-3">FAQ</p>
            <h2 className="heading-2">Questions frÃ©quentes</h2>
          </div>
          <div className="space-y-4">
            {faqs.map((f) => (
              <details key={f.q} className="card p-6 group">
                <summary className="flex items-center justify-between cursor-pointer font-semibold">
                  {f.q}
                  <span className="text-zenicorp-gold text-xl group-open:rotate-45 transition-transform">+</span>
                </summary>
                <p className="body-base text-sm mt-4">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="bg-zenicorp-black text-white">
        <div className="container-zenicorp py-16 text-center">
          <h2 className="heading-2 text-white mb-4">Vos factures de chauffage vous dÃ©rangent ?</h2>
          <p className="text-zenicorp-silver mb-8">Ã‰valuation gratuite + vÃ©rification de subventions sous 24h.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="/soumission" className="btn-gold">Obtenir mon Ã©valuation gratuite</a>
            <a href="tel:18009364267" className="btn-secondary !border-white !text-white hover:!bg-white hover:!text-zenicorp-black">
              <Phone className="w-4 h-4 mr-2" /> 1-800-ZENICORP
            </a>
          </div>
        </div>
      </section>
    </>
  );
}