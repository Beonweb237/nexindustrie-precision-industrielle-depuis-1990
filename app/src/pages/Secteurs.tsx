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

const sectors = [
  {
    key: 'aero',
    title: 'Aéronautique',
    image: '/secteur-aero.jpg',
    description:
      "Depuis plus de 20 ans, NexIndustrie fabrique des pièces structurales et des composants moteur pour les grands donneurs d'ordre et équipementiers de l'aéronautique civile et de défense. Notre maîtrise des matériaux aéronautiques (titane, inconel, aluminium aéro) et notre traçabilité complète répondent aux exigences les plus strictes du secteur.",
    parts: [
      'Pièces structurales de voilure et fuselage',
      'Composants de trains d\'atterrissage',
      'Pièces moteur et accessoires',
      'Supports et brides de systèmes hydrauliques',
    ],
    certification: 'EN 9100:2018',
    caseStudy:
      "Pour un équipementier de rang 1, nous avons industrialisé une série de pièces structurales en titane avec un taux de conformité de 99,8% sur plus de 40 000 pièces livrées, incluant traçabilité matière complète et dossier de conformité EASA.",
  },
  {
    key: 'auto',
    title: 'Automobile',
    image: '/secteur-auto.jpg',
    description:
      "Nos lignes de production haute cadence livrent des sous-ensembles moteur, transmission et châssis aux constructeurs et équipementiers automobiles. Notre certification IATF 16949 garantit une maîtrise statistique des procédés (SPC) et un taux de non-qualité proche de zéro, indispensable aux cadences de l'industrie automobile.",
    parts: [
      'Sous-ensembles moteur (carters, culasses)',
      'Composants de transmission et boîte de vitesses',
      'Pièces de châssis et de liaison au sol',
      'Systèmes de freinage et de direction',
    ],
    certification: 'IATF 16949:2016',
    caseStudy:
      "Pour un constructeur européen, nous produisons en grande série des carters moteur usinés 5 axes, avec une cadence de 15 000 pièces/mois et un délai de livraison juste-à-temps synchronisé sur la ligne d'assemblage du client.",
  },
  {
    key: 'energie',
    title: 'Énergie',
    image: '/secteur-energie.jpg',
    description:
      "Nous accompagnons les acteurs de l'énergie renouvelable, du nucléaire et du pétrole & gaz dans la fabrication de composants critiques soumis à des environnements extrêmes (pression, corrosion, température). Notre expertise en alliages spéciaux et notre laboratoire de contrôle non destructif garantissent la fiabilité de chaque pièce livrée.",
    parts: [
      'Composants de turbines éoliennes',
      'Pièces pour circuits primaires nucléaires',
      'Raccords et brides haute pression pétrole & gaz',
      'Échangeurs thermiques et composants de sûreté',
    ],
    certification: 'ISO 9001:2015 + qualifications sectorielles',
    caseStudy:
      "Pour un énergéticien du secteur nucléaire, nous avons fabriqué et qualifié une série de brides haute pression avec contrôle par ressuage et radiographie systématiques, dans le respect du référentiel RCC-M.",
  },
  {
    key: 'medical',
    title: 'Médical',
    image: '/secteur-medical.jpg',
    description:
      "Notre atelier dédié au secteur médical fabrique des implants, instruments chirurgicaux et dispositifs de diagnostic sous exigences ISO 13485. La traçabilité unitaire de chaque pièce et notre salle blanche de conditionnement garantissent la conformité réglementaire de dispositifs destinés à un usage sur le patient.",
    parts: [
      'Implants orthopédiques et dentaires',
      'Instruments chirurgicaux de précision',
      'Composants de dispositifs de diagnostic',
      'Pièces pour équipements d\'imagerie médicale',
    ],
    certification: 'ISO 13485:2016',
    caseStudy:
      "Pour un fabricant de dispositifs médicaux implantables, nous assurons l'usinage et le contrôle à 100% d'implants en titane, avec traçabilité unitaire par gravure laser et dossier de lot complet pour le marquage CE.",
  },
];

function SectorCard({
  sector,
  index,
}: {
  sector: (typeof sectors)[number];
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
        } gap-12 items-start`}
      >
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: easeOutExpo }}
          className="lg:w-2/5"
        >
          <div className="rounded-2xl overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.1)]">
            <img
              src={sector.image}
              alt={sector.title}
              className="w-full h-auto object-cover"
              loading="lazy"
            />
          </div>
          <div className="mt-6 bg-blue-50 border-l-4 border-blue-600 rounded-r-xl p-5">
            <p className="font-ibmPlexMono text-[11px] text-blue-600 uppercase tracking-[0.05em] mb-1">
              Certification sectorielle
            </p>
            <p className="font-barlow font-bold text-[18px] text-slate-900">
              {sector.certification}
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: easeOutExpo, delay: 0.15 }}
          className="lg:w-3/5"
        >
          <p className="font-ibmPlexMono font-medium text-[13px] text-orange-500 uppercase tracking-[0.1em] mb-3">
            Secteur
          </p>
          <h3 className="font-barlow font-bold text-[28px] lg:text-[32px] text-slate-900 tracking-[-0.01em] mb-4">
            {sector.title}
          </h3>
          <p className="font-dmSans font-normal text-[16px] text-slate-600 leading-[1.7] mb-6">
            {sector.description}
          </p>

          <p className="font-ibmPlexMono text-[12px] text-slate-500 uppercase tracking-[0.05em] mb-3">
            Pièces & produits fabriqués
          </p>
          <ul className="space-y-2 mb-6">
            {sector.parts.map((p) => (
              <li key={p} className="flex items-center gap-3">
                <CheckCircle size={16} className="text-orange-500 shrink-0" />
                <span className="font-dmSans font-medium text-[15px] text-slate-800">
                  {p}
                </span>
              </li>
            ))}
          </ul>

          <div className="bg-slate-50 rounded-xl p-6">
            <p className="font-ibmPlexMono text-[11px] text-slate-500 uppercase tracking-[0.05em] mb-2">
              Étude de cas
            </p>
            <p className="font-dmSans font-normal text-[14px] text-slate-700 italic leading-relaxed">
              {sector.caseStudy}
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

const whyReasons = [
  {
    title: 'Aéronautique',
    reason:
      'Traçabilité matière complète, certification EN 9100 et maîtrise des matériaux à haute performance.',
  },
  {
    title: 'Automobile',
    reason:
      'Cadences élevées, SPC rigoureux et livraison juste-à-temps synchronisée avec vos lignes.',
  },
  {
    title: 'Énergie',
    reason:
      'Expertise en alliages spéciaux et contrôle non destructif pour environnements extrêmes.',
  },
  {
    title: 'Médical',
    reason:
      'Traçabilité unitaire, salle blanche de conditionnement et conformité ISO 13485.',
  },
];

function WhyChooseSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-15% 0px' });

  return (
    <section className="bg-slate-900 py-20 lg:py-[120px]">
      <div className="max-w-[1280px] mx-auto px-[clamp(16px,4vw,64px)]" ref={ref}>
        <SectionHeading
          kicker="Notre différence"
          title="Pourquoi nous choisir, secteur par secteur"
          description="Une expertise adaptée aux exigences réglementaires et industrielles propres à chaque marché."
          dark
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-16"
        >
          {whyReasons.map((r) => (
            <motion.div
              key={r.title}
              variants={staggerChild}
              className="bg-slate-800 rounded-xl p-6 transition-all duration-300 hover:-translate-y-1"
            >
              <h4 className="font-barlow font-bold text-[20px] text-white mb-2">
                {r.title}
              </h4>
              <p className="font-dmSans font-normal text-[14px] text-white/70 leading-relaxed">
                {r.reason}
              </p>
            </motion.div>
          ))}
        </motion.div>
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
          Votre secteur a des exigences spécifiques ? Parlons-en.
        </h2>
        <p className="font-dmSans font-normal text-[18px] text-white/90 mt-4">
          Nos équipes commerciales et qualité étudient votre besoin sectoriel
          sous 48h ouvrées.
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

export default function Secteurs() {
  return (
    <>
      <PageHero
        kicker="Secteurs d'activité"
        title="Des solutions sur mesure pour les industries les plus exigeantes"
        subtitle="Aéronautique, automobile, énergie et médical : découvrez comment nos certifications et notre expertise multi-matériaux répondent aux exigences réglementaires de chaque marché."
        image="/secteur-aero.jpg"
      />

      <section className="bg-white py-20 lg:py-[80px]">
        <div className="max-w-[1280px] mx-auto px-[clamp(16px,4vw,64px)]">
          {sectors.map((s, i) => (
            <SectorCard sector={s} index={i} key={s.key} />
          ))}
        </div>
      </section>

      <WhyChooseSection />
      <CTASection />
    </>
  );
}
