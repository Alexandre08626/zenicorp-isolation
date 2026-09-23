import type { SiteConfig } from '@/types';

export const SITE: SiteConfig = {
  slug: 'isolation',
  name: 'Zeniva Isolation',
  short: 'Isolation',
  tagline: 'Isolation Pro',
  url: 'https://isolation.zeniva.ca',
  title: 'Zeniva Isolation | Soufflage & polyuréthane — Québec',
  description:
    'Isolation de grenier, murs et sous-sol partout au Québec : cellulose soufflée et mousse de polyuréthane. Estimation en ligne en 30 secondes, entrepreneur certifié RBQ.',
  accent: '#34D399',
  accent2: '#3CE1FF',
  accentRgb: '52,211,153',
  hero: {
    image: '/images/isolation-hero.jpg',
    alt: 'Isolation professionnelle',
    eyebrow: 'Zeniva Isolation · Partout au Québec',
    h1a: 'Votre isolation,',
    h1b: 'estimée en 30 secondes.',
    sub: 'Isolation de grenier, de murs et de sous-sol : cellulose soufflée et mousse de polyuréthane. Moins de pertes de chaleur, dès cet hiver.',
    trust: [
      { icon: 'award', t: 'Valeur R-30 à R-60' },
      { icon: 'map', t: 'Partout au Québec' },
      { icon: 'clock', t: 'Installation rapide' },
    ],
  },
  calc: {
    finishLabel: "Type d'isolation",
    surfaceLabel: 'Surface à isoler',
    finishes: [
      { id: 'soufflage', name: 'Cellulose soufflée', price: 1.5, desc: 'Écologique, R-30 à R-40', image: '/images/isolation-cellulose.jpg' },
      { id: 'polyurethane', name: 'Mousse polyuréthane', price: 3.5, desc: 'Haute performance, R-50 à R-60', image: '/images/isolation-realisation.jpg' },
    ],
  },
  shop: {
    title: 'Configurer votre isolation',
    priceRange: 'De 1,50 $ à 4,50 $ / pi² selon le type choisi',
    dateHint: 'Installation rapide selon disponibilité.',
    types: [
      {
        id: 'soufflage',
        name: 'Soufflage',
        desc: 'Cellulose écologique, R-30 à R-40',
        optionsTitle: 'Zone à souffler',
        options: [
          { name: 'Grenier / combles', image: '/images/isolation-combles.jpg', price: 1.5 },
          { name: 'Murs / cloisons', image: '/images/isolation-hero.jpg', price: 1.5 },
          { name: 'Plafond', image: '/images/isolation-plafond.jpg', price: 1.5 },
          { name: 'Cellulose soufflée', image: '/images/isolation-cellulose.jpg', price: 1.5 },
        ],
      },
      {
        id: 'polyurethane',
        name: 'Polyuréthane',
        desc: 'Haute performance, R-50 à R-60',
        optionsTitle: 'Zone à vaporiser',
        options: [
          { name: 'Sous-sol / fondation', image: '/images/isolation-realisation.jpg', price: 3.5 },
          { name: 'Sous-sol complet', image: '/images/isolation-laine.jpg', price: 4.5 },
          { name: 'Mousse expansive', image: '/images/isolation-hero.jpg', price: 3.5 },
          { name: 'Murs et cloisons', image: '/images/isolation-plafond.jpg', price: 3.5 },
        ],
      },
    ],
  },
  ticker: [
    'Grenier cellulose soufflée',
    'Murs polyuréthane giclé',
    'Sous-sol panneaux rigides',
    'Vide sanitaire',
    'Étanchéité à l’air',
    'Évaluation énergétique',
    'Accompagnement subventions',
  ],
  showcase: {
    eyebrow: 'Applications',
    title: 'Nos',
    titleAccent: 'applications.',
    sub: 'Soufflage, polyuréthane et isolation de fondation pour toute la maison.',
    items: [
      { src: '/images/isolation-combles.jpg', t: 'Grenier', s: 'Soufflage rapide' },
      { src: '/images/isolation-plafond.jpg', t: 'Plafond', s: 'Insufflation' },
      { src: '/images/isolation-laine.jpg', t: 'Laine', s: 'Isolant thermique' },
      { src: '/images/isolation-attic.webp', t: 'Combles', s: 'Haute performance' },
    ],
  },
  gallery: [
    { src: '/images/reseau-isolation-1.jpg', t: 'Cellulose', s: 'Soufflage pro' },
    { src: '/images/isolation-realisation.jpg', t: 'Application', s: 'Travail pro' },
    { src: '/images/reseau-isolation-3.jpg', t: 'Grenier', s: 'Cellulose soufflée' },
    { src: '/images/reseau-isolation-2.jpg', t: 'Isolation efficace', s: 'Maison complète' },
  ],
  benefits: [
    { k: 'R-60', t: 'Jusqu’à', d: 'Valeur isolante avec la mousse de polyuréthane.' },
    { k: '1,50 $', t: 'À partir de', d: 'Par pied carré, cellulose soufflée.' },
    { k: 'RBQ', t: 'Certifié', d: 'Entrepreneur licencié et assuré.' },
    { k: 'Grenier', t: 'Meilleur rendement', d: 'Le premier endroit où isoler pour baisser la facture.' },
  ],
  faq: [
    {
      q: 'Par où commencer pour réduire ma facture de chauffage ?',
      a: "Le grenier et l'étanchéité à l'air offrent presque toujours le meilleur rendement par dollar investi, avant les murs. Une évaluation permet de cibler les pertes réelles plutôt que de deviner.",
    },
    {
      q: 'Cellulose soufflée ou polyuréthane giclé ?',
      a: "La cellulose soufflée est économique et très efficace dans un grenier accessible. Le polyuréthane giclé est privilégié quand on a besoin d'une valeur isolante élevée dans une cavité mince ou d'un pare-air intégré, comme au sous-sol ou dans un vide sanitaire.",
    },
    {
      q: 'Y a-t-il des subventions disponibles ?',
      a: "Des programmes d'efficacité énergétique existent au Québec et évoluent régulièrement. On vous indique les programmes applicables à vos travaux et la documentation requise — les montants dépendent du programme en vigueur au moment des travaux.",
    },
  ],
  soumission: {
    projectTypes: ['Grenier / combles', 'Murs', 'Sous-sol / fondation'],
    propertyTypes: ['Maison unifamiliale', 'Copropriété / condo', 'Immeuble commercial', 'Immeuble industriel'],
    dimsTitle: 'Dimensions de la zone à isoler',
    descPlaceholder: 'Isolant actuel, âge de la maison, pièces froides, humidité…',
  },
  pdf: {
    title: 'DEVIS ESTIMATIF',
    features: ['Valeur isolante R-30 à R-60', 'Entrepreneur certifié RBQ', 'Installation rapide partout au Québec'],
  },
};
