import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useInView } from 'framer-motion';
import { Shield, ArrowRight, Download } from 'lucide-react';
import {
  easeOutExpo,
  staggerContainer,
  staggerChild,
  PageHero,
  SectionHeading,
} from '../components/Shared';

const certifications = [
  {
    title: 'ISO 9001:2015',
    subtitle: 'Management de la qualité',
    referentiel: 'ISO 9001:2015',
    perimetre: 'Ensemble des sites de production NexIndustrie',
    obtained: '2011 (renouvellement 2023)',
    guarantees:
      "Un système de management de la qualité structuré, une amélioration continue des processus et une satisfaction client mesurée et suivie.",
  },
  {
    title: 'ISO 14001:2015',
    subtitle: 'Management environnemental',
    referentiel: 'ISO 14001:2015',
    perimetre: 'Ensemble des sites de production NexIndustrie',
    obtained: '2014 (renouvellement 2023)',
    guarantees:
      'Une gestion maîtrisée de notre impact environnemental : consommation énergétique, gestion des déchets et des rejets industriels.',
  },
  {
    title: 'IATF 16949:2016',
    subtitle: 'Qualité automobile',
    referentiel: 'IATF 16949:2016',
    perimetre: 'Lignes de production dédiées au secteur automobile',
    obtained: '2016 (renouvellement 2024)',
    guarantees:
      'Une maîtrise statistique des procédés (SPC), une gestion rigoureuse des non-conformités et une traçabilité totale des lots produits.',
  },
  {
    title: 'EN 9100:2018',
    subtitle: 'Qualité aéronautique',
    referentiel: 'EN 9100:2018 (AS9100/JISQ9100)',
    perimetre: "Atelier dédié aux programmes aéronautiques et de défense",
    obtained: '2013 (renouvellement 2024)',
    guarantees:
      'Une traçabilité matière et process complète, une gestion des risques projet et la conformité aux exigences des donneurs d\'ordre aéronautiques.',
  },
];

function CertGrid() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-15% 0px' });

  return (
    <section className="bg-white py-20 lg:py-[100px]">
      <div className="max-w-[1280px] mx-auto px-[clamp(16px,4vw,64px)]" ref={ref}>
        <SectionHeading
          kicker="Nos certifications"
          title="Des référentiels reconnus mondialement"
          description="Chaque certification atteste d'un engagement documenté, audité et renouvelé auprès d'organismes indépendants."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-14"
        >
          {certifications.map((cert) => (
            <motion.div
              key={cert.title}
              variants={staggerChild}
              className="relative bg-blue-50 border border-blue-600/15 rounded-xl p-8 transition-all duration-250 hover:-translate-y-1 hover:shadow-[0_8px_24px_rgba(2,132,199,0.1)]"
              style={{ borderLeftWidth: '4px', borderLeftColor: '#0284C7' }}
            >
              <div className="flex items-start justify-between">
                <Shield size={44} className="text-blue-600 mb-4" />
                <span className="inline-block font-ibmPlexMono text-[11px] font-medium text-emerald-600 bg-emerald-600/10 px-2.5 py-1 rounded-full">
                  EN VIGUEUR
                </span>
              </div>
              <h4 className="font-barlow font-bold text-[22px] text-slate-900 mb-1">
                {cert.title}
              </h4>
              <p className="font-dmSans font-medium text-[14px] text-slate-600 mb-4">
                {cert.subtitle}
              </p>

              <dl className="space-y-2 mb-4">
                <div className="flex gap-2 text-[13px]">
                  <dt className="font-ibmPlexMono text-slate-500 shrink-0 w-28">
                    Référentiel
                  </dt>
                  <dd className="font-dmSans text-slate-800">{cert.referentiel}</dd>
                </div>
                <div className="flex gap-2 text-[13px]">
                  <dt className="font-ibmPlexMono text-slate-500 shrink-0 w-28">
                    Périmètre
                  </dt>
                  <dd className="font-dmSans text-slate-800">{cert.perimetre}</dd>
                </div>
                <div className="flex gap-2 text-[13px]">
                  <dt className="font-ibmPlexMono text-slate-500 shrink-0 w-28">
                    Obtention
                  </dt>
                  <dd className="font-dmSans text-slate-800">{cert.obtained}</dd>
                </div>
              </dl>

              <p className="font-dmSans font-normal text-[14px] text-slate-700 leading-relaxed border-t border-blue-600/10 pt-4">
                {cert.guarantees}
              </p>

              <button className="inline-flex items-center gap-2 font-dmSans font-medium text-[13px] text-blue-600 hover:text-blue-700 hover:underline underline-offset-4 mt-4 transition-colors">
                <Download size={14} />
                Télécharger le certificat (PDF)
              </button>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

const methodologyItems = [
  {
    title: 'Contrôle dimensionnel',
    desc: "Chaque pièce critique fait l'objet d'un plan de contrôle documenté, avec relevés dimensionnels systématiques avant expédition.",
  },
  {
    title: 'Métrologie tridimensionnelle',
    desc: 'Notre laboratoire dispose de 6 machines à mesurer tridimensionnelles Zeiss et Hexagon, garantissant des mesures à l\'échelle du micron.',
  },
  {
    title: 'Contrôle non destructif',
    desc: 'Ressuage, radiographie et ultrasons permettent de détecter les défauts internes sans altérer la pièce contrôlée.',
  },
  {
    title: 'Maîtrise statistique des procédés',
    desc: 'Le suivi SPC en temps réel sur nos lignes automobile anticipe les dérives avant qu\'elles n\'affectent la conformité.',
  },
];

function MethodologySection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-15% 0px' });

  return (
    <section className="bg-slate-100 py-20 lg:py-[100px]">
      <div className="max-w-[1280px] mx-auto px-[clamp(16px,4vw,64px)]" ref={ref}>
        <SectionHeading
          kicker="Méthodologie"
          title="Une démarche qualité de bout en bout"
          description="Contrôle dimensionnel, métrologie et maîtrise statistique des procédés au service de la conformité."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-14"
        >
          {methodologyItems.map((item) => (
            <motion.div
              key={item.title}
              variants={staggerChild}
              className="bg-white rounded-xl p-7 shadow-[0_4px_16px_rgba(0,0,0,0.04)]"
            >
              <h4 className="font-barlow font-bold text-[20px] text-slate-900 mb-2">
                {item.title}
              </h4>
              <p className="font-dmSans font-normal text-[14px] text-slate-600 leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

const traceabilitySteps = [
  { n: '01', title: 'Réception matière', desc: 'Contrôle et enregistrement des certificats matière à réception.' },
  { n: '02', title: 'Lancement en production', desc: 'Attribution d\'un numéro de lot et ouverture du dossier de traçabilité.' },
  { n: '03', title: 'Contrôles en cours de production', desc: 'Relevés qualité à chaque étape critique du process.' },
  { n: '04', title: 'Contrôle final', desc: 'Vérification dimensionnelle complète et validation du dossier de conformité.' },
  { n: '05', title: 'Archivage & traçabilité', desc: 'Conservation des dossiers qualité pendant toute la durée réglementaire exigée.' },
];

function TraceabilitySection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-15% 0px' });

  return (
    <section className="bg-slate-900 py-20 lg:py-[100px]">
      <div className="max-w-[1280px] mx-auto px-[clamp(16px,4vw,64px)]" ref={ref}>
        <SectionHeading
          kicker="Traçabilité"
          title="Un processus qualité tracé de bout en bout"
          dark
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-5 gap-8 mt-16"
        >
          {traceabilitySteps.map((step) => (
            <motion.div key={step.n} variants={staggerChild}>
              <p className="font-barlow font-extrabold text-[48px] text-orange-500/40 leading-none">
                {step.n}
              </p>
              <h4 className="font-barlow font-bold text-[18px] text-white mt-2 mb-2">
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
          Une exigence qualité à valider avec nos équipes ?
        </h2>
        <p className="font-dmSans font-normal text-[18px] text-white/90 mt-4">
          Contactez notre service qualité pour toute demande d'audit ou de
          documentation complémentaire.
        </p>
        <div className="flex flex-wrap gap-4 justify-center mt-8">
          <Link
            to="/contact"
            className="bg-white text-orange-600 font-dmSans font-semibold text-[15px] px-8 py-3.5 rounded-xl transition-all duration-200 hover:shadow-[0_4px_16px_rgba(0,0,0,0.15)] hover:scale-[1.02] active:scale-[0.98]"
          >
            Contacter le service qualité
            <ArrowRight size={16} className="inline-block ml-2" />
          </Link>
        </div>
      </motion.div>
    </section>
  );
}

export default function Qualite() {
  return (
    <>
      <PageHero
        kicker="Démarche qualité"
        title="Des standards de qualité reconnus mondialement"
        subtitle="ISO 9001, ISO 14001, IATF 16949, EN 9100 : découvrez le détail de nos certifications, notre méthodologie de contrôle et notre processus de traçabilité qualité."
        image="/capability-controle.jpg"
      />

      <CertGrid />
      <MethodologySection />
      <TraceabilitySection />
      <CTASection />
    </>
  );
}
