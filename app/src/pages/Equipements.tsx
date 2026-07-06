import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useInView } from 'framer-motion';
import { CheckCircle, ArrowRight } from 'lucide-react';
import {
  easeOutExpo,
  staggerContainer,
  staggerChild,
  Counter,
  PageHero,
  SectionHeading,
} from '../components/Shared';

const figures = [
  { value: 120, suffix: '+', label: 'Machines-outils' },
  { value: 40, suffix: '', label: 'Centres 5 axes' },
  { value: 12, suffix: '', label: 'Imprimantes 3D métal' },
  { value: 6, suffix: '', label: 'MMT de métrologie' },
];

function FiguresSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-15% 0px' });
  return (
    <section className="bg-slate-50 py-16 lg:py-20">
      <div className="max-w-[1280px] mx-auto px-[clamp(16px,4vw,64px)]" ref={ref}>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-0"
        >
          {figures.map((fig, i) => (
            <motion.div key={fig.label} variants={staggerChild} className="text-center relative">
              <p
                className="font-barlow font-extrabold text-orange-500"
                style={{ fontSize: 'clamp(40px, 5vw, 60px)' }}
              >
                <Counter target={fig.value} suffix={fig.suffix} />
              </p>
              <p className="font-ibmPlexMono font-medium text-[13px] text-slate-500 uppercase tracking-[0.05em] mt-2">
                {fig.label}
              </p>
              {i < figures.length - 1 && (
                <div className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 w-px h-16 bg-slate-200" />
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

const equipmentCategories = [
  {
    title: "Centres d'usinage 5 axes DMG Mori",
    image: '/eq-hero.jpg',
    specs: [
      'Course X/Y/Z jusqu\'à 1 000 x 800 x 600 mm',
      'Broches jusqu\'à 18 000 tr/min',
      'Changeur d\'outils automatique 60 postes',
      'Précision de positionnement ±0,005 mm',
    ],
    capacity:
      "40 centres en parc, dédiés à l'usinage simultané 5 axes de pièces complexes en aluminium, titane et alliages spéciaux, pour l'aéronautique et l'automobile.",
  },
  {
    title: 'Tours multi-broches Mazak',
    image: '/capability-usinage.jpg',
    specs: [
      'Jusqu\'à 8 broches simultanées',
      'Diamètre de tournage jusqu\'à 65 mm',
      'Cadence adaptée à la grande série',
      'Fraisage intégré sur broche secondaire',
    ],
    capacity:
      "Une flotte dédiée à la production de pièces cylindriques de précision en grande série pour l'automobile et l'énergie, avec reprise fraisage en une seule opération.",
  },
  {
    title: 'Machines de découpe laser Trumpf',
    image: '/capability-assemblage.jpg',
    specs: [
      'Découpe de tôles jusqu\'à 25 mm d\'épaisseur',
      'Précision de coupe ±0,1 mm',
      'Puissance laser fibre jusqu\'à 12 kW',
      'Automatisation du chargement/déchargement',
    ],
    capacity:
      "Utilisées pour la découpe de flancs de tôlerie et sous-ensembles de structure, avant reprise en usinage ou assemblage.",
  },
  {
    title: 'Imprimantes 3D métal EOS',
    image: '/capability-controle.jpg',
    specs: [
      'Fusion laser sur lit de poudre (DMLS)',
      'Volume d\'impression jusqu\'à 400 x 400 x 400 mm',
      'Matériaux : titane, inconel, aciers maraging',
      'Post-traitement et traitement thermique intégrés',
    ],
    capacity:
      "12 imprimantes dédiées au prototypage rapide et à la fabrication de pièces topologiquement optimisées pour l'aérospatial et le médical.",
  },
  {
    title: 'Métrologie MMT Zeiss et Hexagon',
    image: '/eq-hero.jpg',
    specs: [
      'Volume de mesure jusqu\'à 2 000 x 1 200 x 1 000 mm',
      'Précision de mesure au micron',
      'Palpeurs scanning et capteurs optiques',
      'Génération automatique de rapports de conformité',
    ],
    capacity:
      "6 machines à mesurer tridimensionnelles garantissant un contrôle dimensionnel complet et une traçabilité qualité sur chaque lot produit.",
  },
];

function EquipmentBlock({
  eq,
  index,
}: {
  eq: (typeof equipmentCategories)[number];
  index: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-15% 0px' });
  const reversed = index % 2 === 1;

  return (
    <div ref={ref} className="py-16 border-b border-slate-200 last:border-0">
      <div
        className={`flex flex-col ${
          reversed ? 'lg:flex-row-reverse' : 'lg:flex-row'
        } gap-12 items-center`}
      >
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: easeOutExpo }}
          className="lg:w-1/2"
        >
          <div className="rounded-2xl overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.1)]">
            <img
              src={eq.image}
              alt={eq.title}
              className="w-full h-auto object-cover"
              loading="lazy"
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: easeOutExpo, delay: 0.15 }}
          className="lg:w-1/2"
        >
          <p className="font-ibmPlexMono font-medium text-[13px] text-orange-500 uppercase tracking-[0.1em] mb-3">
            Équipement 0{index + 1}
          </p>
          <h3 className="font-barlow font-bold text-[26px] lg:text-[30px] text-slate-900 tracking-[-0.01em] mb-4">
            {eq.title}
          </h3>
          <p className="font-dmSans font-normal text-[15px] text-slate-600 leading-[1.7] mb-6">
            {eq.capacity}
          </p>

          <p className="font-ibmPlexMono text-[12px] text-slate-500 uppercase tracking-[0.05em] mb-3">
            Caractéristiques techniques
          </p>
          <ul className="space-y-2">
            {eq.specs.map((s) => (
              <li key={s} className="flex items-center gap-3">
                <CheckCircle size={16} className="text-orange-500 shrink-0" />
                <span className="font-dmSans font-medium text-[14px] text-slate-800">
                  {s}
                </span>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </div>
  );
}

function RenewalSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-15% 0px' });

  return (
    <section className="bg-slate-900 py-20 lg:py-[100px]">
      <div className="max-w-[1280px] mx-auto px-[clamp(16px,4vw,64px)]" ref={ref}>
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, ease: easeOutExpo }}
            className="lg:w-1/2"
          >
            <p className="font-ibmPlexMono font-medium text-[13px] text-orange-500 uppercase tracking-[0.1em] mb-3">
              Investissement continu
            </p>
            <h2
              className="font-barlow font-bold text-white tracking-[-0.02em] leading-tight"
              style={{ fontSize: 'clamp(28px, 4vw, 44px)' }}
            >
              Un parc machines renouvelé en moyenne tous les 5 ans
            </h2>
            <p className="font-dmSans font-normal text-[16px] text-white/70 leading-relaxed mt-6">
              Notre politique d'investissement industriel garantit à nos
              clients l'accès aux dernières générations de machines-outils et
              de solutions de métrologie. Chaque renouvellement s'accompagne
              d'un plan de formation de nos opérateurs et techniciens, afin de
              maintenir un haut niveau de compétence sur des équipements en
              constante évolution technologique.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, ease: easeOutExpo, delay: 0.15 }}
            className="lg:w-1/2 grid grid-cols-2 gap-4"
          >
            {[
              { label: 'Cycle de renouvellement', value: '5 ans' },
              { label: "Budget d'investissement annuel", value: '8 M€' },
              { label: 'Machines acquises en 2024', value: '14' },
              { label: 'Techniciens formés / an', value: '90+' },
            ].map((stat) => (
              <div key={stat.label} className="bg-slate-800 rounded-xl p-6">
                <p className="font-barlow font-extrabold text-[28px] text-orange-500">
                  {stat.value}
                </p>
                <p className="font-ibmPlexMono text-[12px] text-white/60 uppercase tracking-[0.05em] mt-1">
                  {stat.label}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function CTASection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-15% 0px' });
  return (
    <section className="relative bg-orange-500 py-16 lg:py-20 overflow-hidden" ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: easeOutExpo }}
        className="relative z-10 max-w-[720px] mx-auto px-[clamp(16px,4vw,64px)] text-center"
      >
        <h2
          className="font-barlow font-bold text-white tracking-[-0.02em]"
          style={{ fontSize: 'clamp(28px, 4vw, 44px)' }}
        >
          Un besoin d'usinage nécessitant un équipement spécifique ?
        </h2>
        <p className="font-dmSans font-normal text-[18px] text-white/90 mt-4">
          Parlez-nous de votre projet, nous identifierons l'équipement le plus
          adapté à votre pièce.
        </p>
        <div className="flex flex-wrap gap-4 justify-center mt-8">
          <Link
            to="/contact"
            className="bg-white text-orange-600 font-dmSans font-semibold text-[15px] px-8 py-3.5 rounded-xl transition-all duration-200 hover:shadow-[0_4px_16px_rgba(0,0,0,0.15)] hover:scale-[1.02] active:scale-[0.98]"
          >
            Demander un devis
            <ArrowRight size={16} className="inline-block ml-2" />
          </Link>
        </div>
      </motion.div>
    </section>
  );
}

export default function Equipements() {
  return (
    <>
      <PageHero
        kicker="Parc machines"
        title="Des équipements de pointe pour des exigences de pointe"
        subtitle="Plus de 120 machines-outils, dont 40 centres d'usinage 5 axes, 12 imprimantes 3D métal et un laboratoire de métrologie équipé de 6 MMT. Découvrez notre parc en détail."
        image="/eq-hero.jpg"
      />

      <FiguresSection />

      <section className="bg-white py-20 lg:py-[80px]">
        <div className="max-w-[1280px] mx-auto px-[clamp(16px,4vw,64px)]">
          <SectionHeading
            kicker="Nos équipements"
            title="Un parc machines complet, par catégorie"
            description="Des centres d'usinage 5 axes à la métrologie, chaque équipement est sélectionné pour répondre aux exigences de nos secteurs."
          />
          <div className="mt-8">
            {equipmentCategories.map((eq, i) => (
              <EquipmentBlock eq={eq} index={i} key={eq.title} />
            ))}
          </div>
        </div>
      </section>

      <RenewalSection />
      <CTASection />
    </>
  );
}
