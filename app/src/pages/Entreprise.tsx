import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useInView } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import {
  easeOutExpo,
  staggerContainer,
  staggerChild,
  Counter,
  PageHero,
  SectionHeading,
} from '../components/Shared';

const timeline = [
  { year: '1990', title: 'Fondation', desc: 'Création de NexIndustrie autour d\'un atelier d\'usinage de précision de 800 m².' },
  { year: '1998', title: 'Premier marché aéronautique', desc: 'Signature des premiers contrats avec des équipementiers aéronautiques.' },
  { year: '2005', title: 'Extension du site principal', desc: 'Passage à 15 000 m² et acquisition des premiers centres 5 axes.' },
  { year: '2011', title: 'Certification ISO 9001', desc: 'Structuration du système de management de la qualité à l\'échelle du groupe.' },
  { year: '2013', title: 'Certification EN 9100', desc: 'Ouverture de l\'atelier dédié aux programmes aéronautiques critiques.' },
  { year: '2016', title: 'Certification IATF 16949', desc: 'Développement des lignes automobile haute cadence.' },
  { year: '2018', title: 'Laboratoire de métrologie', desc: 'Mise en service du laboratoire équipé de MMT Zeiss et Hexagon.' },
  { year: '2021', title: 'Impression 3D métal', desc: 'Intégration de 12 imprimantes 3D EOS pour le prototypage rapide.' },
  { year: '2024', title: 'Label EcoVadis Silver', desc: 'Reconnaissance de notre démarche RSE par l\'organisme EcoVadis.' },
  { year: '2025', title: '35 ans d\'excellence', desc: '450 collaborateurs, 28 000 m² de production et 120+ machines-outils.' },
];

function HistorySection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-15% 0px' });

  return (
    <section className="bg-white py-20 lg:py-[100px]">
      <div className="max-w-[1280px] mx-auto px-[clamp(16px,4vw,64px)]" ref={ref}>
        <SectionHeading
          kicker="Notre histoire"
          title="35 ans de croissance et de savoir-faire industriel"
          description="Depuis 1990, NexIndustrie a bâti son expertise étape par étape, en investissant continuellement dans ses équipements et ses certifications."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="relative mt-16 max-w-[800px] mx-auto"
        >
          <div className="absolute left-[7px] sm:left-1/2 sm:-translate-x-1/2 top-0 bottom-0 w-px bg-slate-200" />
          {timeline.map((item, i) => (
            <motion.div
              key={item.year}
              variants={staggerChild}
              className={`relative flex items-start gap-6 pb-10 last:pb-0 sm:w-1/2 ${
                i % 2 === 0 ? 'sm:ml-0 sm:pr-10 sm:text-right sm:flex-row-reverse' : 'sm:ml-auto sm:pl-10'
              }`}
            >
              <div className="relative shrink-0 sm:absolute sm:top-1 sm:[--dot-offset:0px]"
                style={i % 2 === 0 ? { right: '-30px' } : { left: '-30px' }}
              >
                <span className="block w-4 h-4 rounded-full bg-orange-500 ring-4 ring-orange-500/20" />
              </div>
              <div>
                <p className="font-barlow font-extrabold text-[24px] text-orange-500">{item.year}</p>
                <h4 className="font-barlow font-bold text-[19px] text-slate-900 mt-1 mb-1">
                  {item.title}
                </h4>
                <p className="font-dmSans font-normal text-[14px] text-slate-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

const figures = [
  { value: 450, suffix: '', label: 'Collaborateurs' },
  { value: 28000, suffix: '', label: 'm² de production' },
  { value: 120, suffix: '+', label: 'Machines-outils' },
  { value: 35, suffix: '', label: "Années d'expérience" },
];

function FiguresSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-15% 0px' });

  return (
    <section className="bg-slate-900 py-20 lg:py-[100px]">
      <div className="max-w-[1280px] mx-auto px-[clamp(16px,4vw,64px)]" ref={ref}>
        <SectionHeading
          kicker="En chiffres"
          title="Une force industrielle au service de vos projets"
          dark
        />
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-0 mt-16"
        >
          {figures.map((fig, i) => (
            <motion.div key={fig.label} variants={staggerChild} className="text-center relative">
              <p className="font-barlow font-extrabold text-orange-500" style={{ fontSize: 'clamp(40px, 5vw, 60px)' }}>
                <Counter target={fig.value} suffix={fig.suffix} />
              </p>
              <p className="font-ibmPlexMono font-medium text-[13px] text-white/60 uppercase tracking-[0.05em] mt-2">
                {fig.label}
              </p>
              {i < figures.length - 1 && (
                <div className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 w-px h-16 bg-white/10" />
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

const sites = [
  { name: 'Site principal — Production', location: 'Auvergne-Rhône-Alpes', desc: '15 000 m², usinage, assemblage et laboratoire de métrologie.' },
  { name: 'Site secondaire — Prototypage', location: 'Occitanie', desc: '8 000 m², impression 3D métal et bureau d\'études R&D.' },
  { name: 'Site logistique', location: 'Île-de-France', desc: '5 000 m², plateforme de conditionnement et d\'expédition internationale.' },
];

function SitesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-15% 0px' });

  return (
    <section className="bg-slate-50 py-20 lg:py-[100px]">
      <div className="max-w-[1280px] mx-auto px-[clamp(16px,4vw,64px)]" ref={ref}>
        <SectionHeading
          kicker="Nos implantations"
          title="3 sites, 28 000 m² de production"
        />
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-14"
        >
          {sites.map((site) => (
            <motion.div key={site.name} variants={staggerChild} className="bg-white rounded-xl p-7 shadow-[0_4px_16px_rgba(0,0,0,0.04)]">
              <h4 className="font-barlow font-bold text-[19px] text-slate-900 mb-1">{site.name}</h4>
              <p className="font-ibmPlexMono text-[12px] text-orange-500 uppercase tracking-[0.05em] mb-3">
                {site.location}
              </p>
              <p className="font-dmSans font-normal text-[14px] text-slate-600 leading-relaxed">
                {site.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

const leaders = [
  { name: 'Anne-Sophie Roquette', role: 'Directrice Générale', desc: 'Plus de 20 ans d\'expérience dans l\'industrie de précision, à la tête de NexIndustrie depuis 2015.' },
  { name: 'Thomas Vasseur', role: 'Directeur Industriel', desc: 'Pilote l\'ensemble des sites de production et la stratégie d\'investissement machines.' },
  { name: 'Nadia El Amrani', role: 'Directrice Qualité & RSE', desc: 'Responsable des certifications qualité et de la démarche RSE du groupe.' },
];

function GovernanceSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-15% 0px' });

  return (
    <section className="bg-white py-20 lg:py-[100px]">
      <div className="max-w-[1280px] mx-auto px-[clamp(16px,4vw,64px)]" ref={ref}>
        <SectionHeading kicker="Gouvernance" title="Une direction expérimentée" />
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-14"
        >
          {leaders.map((leader) => (
            <motion.div key={leader.name} variants={staggerChild} className="text-center bg-slate-50 rounded-xl p-7">
              <div className="w-20 h-20 rounded-full bg-slate-300 mx-auto mb-4" />
              <h4 className="font-barlow font-bold text-[19px] text-slate-900 mb-1">{leader.name}</h4>
              <p className="font-ibmPlexMono text-[12px] text-orange-500 uppercase tracking-[0.05em] mb-3">
                {leader.role}
              </p>
              <p className="font-dmSans font-normal text-[14px] text-slate-600 leading-relaxed">
                {leader.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

const companyValues = [
  'Excellence technique et rigueur qualité',
  "Sens de l'engagement client",
  'Respect des collaborateurs et sécurité au travail',
  'Responsabilité environnementale',
];

function ValuesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-15% 0px' });

  return (
    <section className="bg-slate-900 py-20 lg:py-[100px]">
      <div className="max-w-[1280px] mx-auto px-[clamp(16px,4vw,64px)]" ref={ref}>
        <SectionHeading kicker="Nos valeurs" title="Ce qui nous anime au quotidien" dark />
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-14"
        >
          {companyValues.map((v) => (
            <motion.div key={v} variants={staggerChild} className="flex items-center gap-3 bg-slate-800 rounded-xl p-6">
              <span className="w-2 h-2 rounded-full bg-orange-500 shrink-0" />
              <span className="font-dmSans font-medium text-[16px] text-white">{v}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function SummarySection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-15% 0px' });

  return (
    <section className="bg-slate-50 py-20 lg:py-[100px]">
      <div className="max-w-[1280px] mx-auto px-[clamp(16px,4vw,64px)]" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: easeOutExpo }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-6"
        >
          <div className="bg-white rounded-xl p-8">
            <h4 className="font-barlow font-bold text-[22px] text-slate-900 mb-2">
              Démarche qualité
            </h4>
            <p className="font-dmSans font-normal text-[14px] text-slate-600 leading-relaxed mb-4">
              ISO 9001, ISO 14001, IATF 16949, EN 9100 : découvrez le détail
              de nos certifications et de notre méthodologie qualité.
            </p>
            <Link to="/qualite" className="inline-flex items-center gap-1 font-dmSans font-medium text-[14px] text-blue-600 hover:underline underline-offset-4">
              Voir notre démarche qualité <ArrowRight size={14} />
            </Link>
          </div>
          <div className="bg-white rounded-xl p-8">
            <h4 className="font-barlow font-bold text-[22px] text-slate-900 mb-2">
              Responsabilité sociétale
            </h4>
            <p className="font-dmSans font-normal text-[14px] text-slate-600 leading-relaxed mb-4">
              Environnement, social et gouvernance : notre engagement RSE
              reconnu par le label EcoVadis Silver.
            </p>
            <Link to="/rse" className="inline-flex items-center gap-1 font-dmSans font-medium text-[14px] text-blue-600 hover:underline underline-offset-4">
              Découvrir notre démarche RSE <ArrowRight size={14} />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default function Entreprise() {
  return (
    <>
      <PageHero
        kicker="Entreprise"
        title="35 ans d'excellence industrielle au service de nos clients"
        subtitle="Depuis 1990, NexIndustrie construit son expertise en usinage de précision, assemblage et contrôle qualité pour les industries les plus exigeantes."
        image="/hero-factory.jpg"
      />

      <HistorySection />
      <FiguresSection />
      <SitesSection />
      <GovernanceSection />
      <ValuesSection />
      <SummarySection />
    </>
  );
}
