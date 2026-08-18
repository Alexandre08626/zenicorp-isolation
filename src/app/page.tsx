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
    desc: 'Ouate de cellulose soufflée ou panneaux rigides. Élimine les ponts thermiques et réduit vos factures.',
    features: ['Ouate de cellulose certifiée', 'Épaisseur R-60 recommandée', 'Aérateurs de soffite', 'Scellement des fuites d\'air'],
  },
  {
    icon: Home,
    title: 'Isolation des murs',
    desc: 'Isolation des murs existants et neufs. Confort accru et réduction du bruit extérieur.',
    features: ['Ouate soufflée ou mousse', 'Murs existants sans démolition', 'Réduction des courants d\'air', 'Amélioration du confort'],
  },
  {
    icon: Thermometer,
    title: 'Performance énergétique',
    desc: 'Analyse complète de votre isolation actuelle et recommandations chiffrées sur les économies potentielles.',
    features: ['Blower door test', 'Caméra thermique', 'Rapport d\'économie détaillé', 'Plan d\'action priorisé'],
  },
  {
    icon: Banknote,
    title: 'Subventions & aides',
    desc: 'Nous gérons vos demandes de subventions Rénoclimat, Hydro-Québec et LogisVert. Jusqu\'à 5 000 $ d\'aide.',
    features: ['Éligibilité vérifiée avant travaux', 'Dossier complet géré', 'Inspecteur certifié Rénoclimat', 'Aucun coût caché'],
  },
];

const realisations = [
  { title: 'Grenier R-60 - Québec', desc: 'Cellulose soufflée + aérateurs', value: '4 200 $' },
  { title: 'Murs existants - Lévis', desc: 'Ouate soufflée, 6 murs', value: '6 800 $' },
  { title: 'Projet subventionné - Montréal', desc: 'Grenier + murs, 4 000$ de subvention', value: '11 500 $' },
  { title: 'Manoir centenaire - Trois-Rivières', desc: 'Isolation complète + fenêtres', value: '24 000 $' },
];

const faqs = [
  {
    q: 'Combien puis-je économiser ?',
    a: 'En moyenne 20-30% sur votre facture de chauffage. Combiné aux subventions (jusqu\'à 5 000$), le retour sur investissement est de 2-4 ans.',
  },
  {
    q: 'Est-ce que ça se fait sans démolition ?',
    a: 'Oui. La ouate de cellulose peut être soufflée dans les murs existants via des petits trous, réparés ensuite de façon invisible.',
  },
  {
    q: 'Qu\'est-ce que le R-60 ?',
    a: 'C\'est la valeur de résistance thermique recommandée pour les greniers au Québec. Notre équipe vise toujours les standards Rénoclimat.',
  },
  {
    q: 'Gérez-vous les subventions ?',
    a: 'Oui, de A à Z : vérification d\'éligibilité avant les travaux, dossier complet, inspection et suivi jusqu\'au versement.',
  },
];

export default function IsolationPage() {
  return (
    <>
      {/* BANDEAU SUBVENTIONS */}
      <div className="bg-zenicorp-gold text-white">
        <div className="container-zenicorp py-3 flex items-center justify-center gap-3 text-sm font-semibold">
          <Banknote className="w-5 h-5" />
          Jusqu&apos;à 5 000 $ de subventions (Rénoclimat, Hydro-Québec, LogisVert) - Gérées de A à Z
        </div>
      </div>

      {/* HERO */}
      <section className="relative bg-zenicorp-black text-white">
        <div className="absolute inset-0 bg-gradient-to-br from-zenicorp-black via-zenicorp-darkGray to-zenicorp-black"></div>
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'repeating-linear-gradient(45deg, #166534 0px, #166534 1px, transparent 1px, transparent 60px)' }}></div>
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
              Isolation professionnelle de greniers, murs et planchers. Économisez jusqu&apos;à 30% sur votre chauffage,
              avec subventions gérées de A à Z.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="/soumission" className="btn-gold">Vérifier mes subventions</a>
              <a href="tel:18009364267" className="btn-secondary !border-white !text-white hover:!bg-white hover:!text-zenicorp-black">
                <Phone className="w-4 h-4 mr-2" /> 1-800-ZENICORP
              </a>
            </div>
            <div className="flex flex-wrap gap-8 mt-12">
              <div className="flex items-center gap-2 text-sm text-zenicorp-silver">
                <CheckCircle2 className="w-5 h-5 text-zenicorp-gold" /> Jusqu&apos;à 5 000 $ de subventions
              </div>
              <div className="flex items-center gap-2 text-sm text-zenicorp-silver">
                <CheckCircle2 className="w-5 h-5 text-zenicorp-gold" /> Garantie 10 ans
              </div>
              <div className="flex items-center gap-2 text-sm text-zenicorp-silver">
                <CheckCircle2 className="w-5 h-5 text-zenicorp-gold" /> Sans démolition
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
              <p className="text-xs text-zenicorp-mediumGray">Jusqu&apos;à 5 000 $</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Thermometer className="w-8 h-8 text-zenicorp-gold flex-shrink-0" />
            <div>
              <p className="font-semibold text-sm">Économies 20-30%</p>
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
            <h2 className="heading-2">Isolation complète de votre bâtiment</h2>
            <p className="body-base mt-4">Résidentiel et commercial. Solutions certifiées et subventionnables.</p>
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

      {/* RÉALISATIONS */}
      <section id="realisations" className="section-padding bg-white">
        <div className="container-zenicorp">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <p className="text-zenicorp-gold font-semibold uppercase tracking-[0.2em] text-xs mb-3">Réalisations</p>
            <h2 className="heading-2">Des projets récents</h2>
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
            <p className="text-zenicorp-gold font-semibold uppercase tracking-[0.2em] text-xs mb-3">Comment ça marche</p>
            <h2 className="heading-2 text-white">3 étapes simples</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { n: '01', t: 'Évaluation', d: 'Analyse de votre isolation actuelle + vérification d\'éligibilité aux subventions.' },
              { n: '02', t: 'Travaux', d: 'Installation rapide et propre. Grenier en une journée, murs en 2-3 jours.' },
              { n: '03', t: 'Subventions', d: 'Nous gérons l\'inspection et le dossier complet jusqu\'au versement de votre aide.' },
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
              <h2 className="heading-3">Programmes de subventions gérés pour vous</h2>
            </div>
            <ul className="space-y-3 mb-6">
              {[
                'Rénoclimat (Québec) - jusqu\'à 5 000 $ pour isolation et étanchéité',
                'Hydro-Québec - rabais additionnels sur l\'évaluation énergétique',
                'LogisVert - financement et subventions pour propriétaires admissibles',
                'Mesures complémentaires pour les propriétés à revenus',
              ].map((s) => (
                <li key={s} className="flex items-start gap-3 text-sm">
                  <CheckCircle2 className="w-5 h-5 text-zenicorp-gold flex-shrink-0 mt-0.5" /> {s}
                </li>
              ))}
            </ul>
            <a href="/soumission" className="btn-gold">Vérifier mon éligibilité (gratuit)</a>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="section-padding bg-white">
        <div className="container-zenicorp max-w-3xl">
          <div className="text-center mb-12">
            <p className="text-zenicorp-gold font-semibold uppercase tracking-[0.2em] text-xs mb-3">FAQ</p>
            <h2 className="heading-2">Questions fréquentes</h2>
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
          <h2 className="heading-2 text-white mb-4">Vos factures de chauffage vous dérangent ?</h2>
          <p className="text-zenicorp-silver mb-8">Évaluation gratuite + vérification de subventions sous 24h.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="/soumission" className="btn-gold">Obtenir mon évaluation gratuite</a>
            <a href="tel:18009364267" className="btn-secondary !border-white !text-white hover:!bg-white hover:!text-zenicorp-black">
              <Phone className="w-4 h-4 mr-2" /> 1-800-ZENICORP
            </a>
          </div>
        </div>
      </section>
    </>
  );
}