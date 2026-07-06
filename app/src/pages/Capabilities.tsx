import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useInView } from 'framer-motion';
import { CheckCircle, ArrowRight } from 'lucide-react';
import {
  easeOutExpo,
  staggerContainer,
  staggerChild,
  PageHero,
  SectionHeading,
} from '../components/Shared';

/* ─────────────────────────────────────────────
   Data — the 5 capabilities from Home.tsx, expanded
   ───────────────────────────────────────────── */

const capabilities = [
  {
    title: 'Usinage multi-axes',
    image: '/capability-usinage.jpg',
    description:
      "Notre atelier d'usinage regroupe 40 centres 5 axes DMG Mori et des tours multi-broches Mazak, permettant de traiter en une seule opération des géométries complexes sur aluminium, titane, inconel, aciers inoxydables et alliages spéciaux. Cette intégration réduit les reprises, les délais et les risques de dérive dimensionnelle.",
    techs: [
      'Fraisage 5 axes simultanés',
      'Tournage-fraisage multi-broches',
      'Usinage grande vitesse (UGV)',
      'Usinage de matériaux difficiles (titane, inconel)',
    ],
    examples: [
      'Pièces structurales de voilure aéronautique',
      'Carters moteur automobile haute précision',
      'Brides et raccords pour l\'énergie',
    ],
  },
  {
    title: 'Assemblage mécanique & électronique',
    image: '/capability-assemblage.jpg',
    description:
      "Nos lignes d'assemblage combinent postes manuels qualifiés et cellules semi-automatisées pour livrer des sous-ensembles complets, testés et tracés. Nous intégrons le câblage électronique, le collage structural et le sertissage sur des cadences adaptées à la petite comme à la grande série.",
    techs: [
      'Assemblage de sous-ensembles mécaniques',
      'Câblage et intégration électronique',
      'Collage structural et sertissage',
      'Tests fonctionnels en fin de ligne',
    ],
    examples: [
      'Sous-ensembles moteur et transmission automobile',
      'Boîtiers électroniques embarqués',
      'Modules de contrôle-commande industriels',
    ],
  },
  {
    title: 'Contrôle qualité & métrologie',
    image: '/capability-controle.jpg',
    description:
      "Notre laboratoire de métrologie, équipé de 6 machines à mesurer tridimensionnelles Zeiss et Hexagon, garantit une conformité dimensionnelle certifiée sur chaque lot produit. Chaque pièce critique bénéficie d'un plan de contrôle documenté et d'un rapport de traçabilité complet.",
    techs: [
      'Contrôle tridimensionnel (MMT)',
      'Contrôle non destructif (ressuage, radiographie)',
      'Analyse de matériaux et essais mécaniques',
      'Statistical Process Control (SPC)',
    ],
    examples: [
      "Certification de conformité pour pièces critiques aéronautiques",
      'Audits qualité fournisseurs pour donneurs d\'ordre automobile',
      'Rapports de traçabilité pour dispositifs médicaux',
    ],
  },
  {
    title: 'Prototypage & industrialisation',
    image: '/capability-usinage.jpg',
    description:
      "Notre bureau d'études R&D accompagne les projets dès la conception : simulation numérique, impression 3D métal sur imprimantes EOS, et validation de process avant transfert en production série. Nous réduisons ainsi le temps entre l'idée et la pièce industrialisée.",
    techs: [
      'Impression 3D métal (fusion laser sur lit de poudre)',
      'Simulation FAO et validation d\'usinabilité',
      'Prototypage rapide et pièces de pré-série',
      "Transfert industriel et qualification de process (PPAP)",
    ],
    examples: [
      'Prototypes fonctionnels pour bancs d\'essai moteur',
      'Pièces topologiquement optimisées pour l\'aérospatial',
      'Séries pilotes avant industrialisation médicale',
    ],
  },
  {
    title: 'Logistique & supply chain',
    image: '/capability-assemblage.jpg',
    description:
      "Nous orchestrons l'approvisionnement en matières premières, la gestion de stocks consignés et la livraison juste-à-temps pour nos clients multi-sites. Notre plateforme MES offre une visibilité en temps réel sur l'avancement des commandes, du lancement en production à l'expédition.",
    techs: [
      'Approvisionnement matière et gestion fournisseurs',
      'Kanban et stocks consignés',
      'Livraison juste-à-temps multi-sites',
      'Suivi de production en temps réel (MES)',
    ],
    examples: [
      'Programmes de livraison synchronisée pour lignes automobile',
      'Gestion de stocks de sécurité pour pièces de rechange aéronautique',
      'Expéditions internationales tracées de bout en bout',
    ],
  },
];

const processSteps = [
  {
    n: '01',
    title: 'Étude de faisabilité',
    desc: 'Analyse du cahier des charges, simulation FAO et validation de l\'usinabilité en lien avec votre bureau d\'études.',
  },
  {
    n: '02',
    title: 'Industrialisation',
    desc: 'Définition des gammes de fabrication, qualification des outillages et validation des premiers échantillons (PPAP).',
  },
  {
    n: '03',
    title: 'Production',
    desc: 'Fabrication en série sur notre parc de 120+ machines-outils, avec suivi qualité en ligne à chaque étape.',
  },
  {
    n: '04',
    title: 'Contrôle & métrologie',
    desc: 'Contrôle dimensionnel systématique sur nos 6 MMT et émission des rapports de conformité et de traçabilité.',
  },
  {
    n: '05',
    title: 'Livraison',
    desc: 'Conditionnement adapté et logistique juste-à-temps vers vos sites, en France comme à l\'international.',
  },
];

function ProcessSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-15% 0px' });

  return (
    <section className="bg-slate-900 py-20 lg:py-[120px]">
      <div className="max-w-[1280px] mx-auto px-[clamp(16px,4vw,64px)]" ref={ref}>
        <SectionHeading
          kicker="Notre méthode"
          title="Notre processus, de la conception à la livraison"
          description="Une chaîne de valeur intégrée et maîtrisée, étape par étape, pour garantir conformité et délais."
          dark
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-5 gap-8 mt-16"
        >
          {processSteps.map((step) => (
            <motion.div key={step.n} variants={staggerChild} className="relative">
              <p className="font-barlow font-extrabold text-[48px] text-orange-500/40 leading-none">
                {step.n}
              </p>
              <h4 className="font-barlow font-bold text-[20px] text-white mt-2 mb-2">
                {step.title}
              </h4>
              <p className="font-dmSans font-normal text-[14px] text-white/70 leading-relaxed">
                {step.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function CapabilityBlock({
  cap,
  index,
}: {
  cap: (typeof capabilities)[number];
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
              src={cap.image}
              alt={cap.title}
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
            Capacité 0{index + 1}
          </p>
          <h3 className="font-barlow font-bold text-[28px] lg:text-[32px] text-slate-900 tracking-[-0.01em] mb-4">
            {cap.title}
          </h3>
          <p className="font-dmSans font-normal text-[16px] text-slate-600 leading-[1.7] mb-6">
            {cap.description}
          </p>

          <p className="font-ibmPlexMono text-[12px] text-slate-500 uppercase tracking-[0.05em] mb-3">
            Technologies & procédés
          </p>
          <ul className="space-y-2 mb-6">
            {cap.techs.map((t) => (
              <li key={t} className="flex items-center gap-3">
                <CheckCircle size={16} className="text-orange-500 shrink-0" />
                <span className="font-dmSans font-medium text-[15px] text-slate-800">
                  {t}
                </span>
              </li>
            ))}
          </ul>

          <p className="font-ibmPlexMono text-[12px] text-slate-500 uppercase tracking-[0.05em] mb-3">
            Exemples d'application
          </p>
          <ul className="space-y-1.5">
            {cap.examples.map((e) => (
              <li
                key={e}
                className="font-dmSans font-normal text-[14px] text-slate-600 pl-4 border-l-2 border-orange-500/30"
              >
                {e}
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </div>
  );
}

function GallerySection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-15% 0px' });
  const images = [
    '/capability-usinage.jpg',
    '/capability-assemblage.jpg',
    '/capability-controle.jpg',
    '/eq-hero.jpg',
  ];

  return (
    <section className="bg-slate-50 py-20 lg:py-[120px]">
      <div className="max-w-[1280px] mx-auto px-[clamp(16px,4vw,64px)]" ref={ref}>
        <SectionHeading
          kicker="Galerie"
          title="Nos capacités en images"
          description="Un aperçu de nos ateliers d'usinage, d'assemblage et de contrôle qualité."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-14"
        >
          {images.map((src) => (
            <motion.div
              key={src}
              variants={staggerChild}
              className="aspect-square rounded-xl overflow-hidden group"
            >
              <img
                src={src}
                alt="Capacité industrielle NexIndustrie"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.05]"
                loading="lazy"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function QuoteCTA() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-15% 0px' });

  return (
    <section className="relative bg-orange-500 py-16 lg:py-20 overflow-hidden" ref={ref}>
      <div
        className="absolute inset-0 opacity-[0.06] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0l25.98 15v30L30 60 4.02 45V15L30 0z' fill='none' stroke='white' stroke-width='1'/%3E%3C/svg%3E")`,
          backgroundSize: '60px 60px',
        }}
      />
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
          Un projet nécessitant une expertise industrielle pointue ?
        </h2>
        <p className="font-dmSans font-normal text-[18px] text-white/90 mt-4">
          Nos équipes étudient votre besoin et vous proposent la capacité la
          plus adaptée à votre cahier des charges.
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

export default function Capabilities() {
  return (
    <>
      <PageHero
        kicker="Nos capacités"
        title="Une chaîne de valeur industrielle intégrée, de la conception à la livraison"
        subtitle="Usinage multi-axes, assemblage, contrôle qualité, prototypage et logistique : découvrez en détail l'ensemble des expertises qui font de NexIndustrie un partenaire industriel de confiance depuis 35 ans."
        image="/capability-usinage.jpg"
      />

      <section className="bg-white py-20 lg:py-[80px]">
        <div className="max-w-[1280px] mx-auto px-[clamp(16px,4vw,64px)]">
          {capabilities.map((cap, i) => (
            <CapabilityBlock cap={cap} index={i} key={cap.title} />
          ))}
        </div>
      </section>

      <ProcessSection />
      <GallerySection />
      <QuoteCTA />
    </>
  );
}
