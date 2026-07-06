import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useInView } from 'framer-motion';
import { ArrowRight, MapPin, Clock } from 'lucide-react';
import {
  easeOutExpo,
  staggerContainer,
  staggerChild,
  PageHero,
  SectionHeading,
} from '../components/Shared';

const values = [
  {
    title: 'Excellence technique',
    desc: '35 ans de savoir-faire industriel transmis et enrichi par chaque génération de collaborateurs.',
  },
  {
    title: 'Esprit d\'équipe',
    desc: 'Des ateliers où l\'entraide entre opérateurs, techniciens et ingénieurs fait la différence au quotidien.',
  },
  {
    title: 'Amélioration continue',
    desc: 'Chaque collaborateur est invité à proposer des améliorations de process, dans une culture d\'innovation partagée.',
  },
];

function CultureSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-15% 0px' });

  return (
    <section className="bg-white py-20 lg:py-[100px]">
      <div className="max-w-[1280px] mx-auto px-[clamp(16px,4vw,64px)]" ref={ref}>
        <SectionHeading
          kicker="Notre culture"
          title="35 ans d'excellence, portés par nos équipes"
          description="Rejoindre NexIndustrie, c'est intégrer une entreprise industrielle à taille humaine où la technicité et la solidarité comptent autant que la performance."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-14"
        >
          {values.map((v) => (
            <motion.div
              key={v.title}
              variants={staggerChild}
              className="bg-slate-50 rounded-xl p-7 text-center"
            >
              <h4 className="font-barlow font-bold text-[20px] text-slate-900 mb-2">
                {v.title}
              </h4>
              <p className="font-dmSans font-normal text-[14px] text-slate-600 leading-relaxed">
                {v.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

const jobs = [
  { title: 'Opérateur CNC 5 axes', site: 'Site de production principal', type: 'CDI', dept: 'Production' },
  { title: 'Technicien qualité', site: 'Site de production principal', type: 'CDI', dept: 'Qualité' },
  { title: 'Ingénieur méthodes industrialisation', site: 'Bureau d\'études', type: 'CDI', dept: 'Méthodes' },
  { title: 'Technicien métrologie', site: 'Laboratoire qualité', type: 'CDI', dept: 'Qualité' },
  { title: 'Régleur tour multi-broches', site: 'Site de production principal', type: 'CDI', dept: 'Production' },
  { title: 'Responsable maintenance industrielle', site: 'Site de production principal', type: 'CDI', dept: 'Maintenance' },
  { title: 'Ingénieur R&D prototypage', site: 'Bureau d\'études', type: 'CDI', dept: 'R&D' },
  { title: 'Chargé de supply chain', site: 'Siège', type: 'CDI', dept: 'Logistique' },
];

function JobsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-15% 0px' });

  return (
    <section className="bg-slate-100 py-20 lg:py-[100px]">
      <div className="max-w-[1280px] mx-auto px-[clamp(16px,4vw,64px)]" ref={ref}>
        <SectionHeading
          kicker="Nos offres"
          title="Rejoignez nos équipes"
          description="Découvrez nos postes ouverts, en production, qualité, méthodes et fonctions support."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-14"
        >
          {jobs.map((job) => (
            <motion.div
              key={job.title}
              variants={staggerChild}
              className="bg-white rounded-xl border border-slate-200 p-6 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_12px_40px_rgba(0,0,0,0.08)]"
            >
              <span className="font-ibmPlexMono text-[11px] font-medium text-blue-600 uppercase tracking-[0.05em]">
                {job.dept}
              </span>
              <h4 className="font-barlow font-bold text-[19px] text-slate-900 mt-2 mb-3">
                {job.title}
              </h4>
              <div className="flex items-center gap-2 text-slate-500 mb-1.5">
                <MapPin size={14} />
                <span className="font-dmSans text-[13px]">{job.site}</span>
              </div>
              <div className="flex items-center gap-2 text-slate-500 mb-4">
                <Clock size={14} />
                <span className="font-dmSans text-[13px]">{job.type}</span>
              </div>
              <Link
                to="/contact"
                className="inline-flex items-center gap-1 font-dmSans font-medium text-[14px] text-orange-500 hover:underline underline-offset-4 transition-all"
              >
                Postuler
                <ArrowRight size={14} />
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

const recruitmentSteps = [
  { n: '01', title: 'Candidature', desc: 'Envoi de votre CV et lettre de motivation via notre formulaire en ligne.' },
  { n: '02', title: 'Pré-qualification', desc: 'Échange téléphonique avec notre équipe RH pour valider vos motivations et disponibilités.' },
  { n: '03', title: 'Entretien technique', desc: 'Rencontre avec le responsable d\'atelier ou de service pour évaluer vos compétences.' },
  { n: '04', title: 'Visite du site', desc: 'Découverte de nos ateliers et de votre futur environnement de travail.' },
  { n: '05', title: 'Intégration', desc: 'Un parcours d\'intégration structuré dès votre arrivée, avec tuteur dédié.' },
];

function RecruitmentSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-15% 0px' });

  return (
    <section className="bg-slate-900 py-20 lg:py-[100px]">
      <div className="max-w-[1280px] mx-auto px-[clamp(16px,4vw,64px)]" ref={ref}>
        <SectionHeading
          kicker="Processus"
          title="Notre processus de recrutement"
          dark
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-5 gap-8 mt-16"
        >
          {recruitmentSteps.map((step) => (
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

const benefits = [
  "Intéressement et participation",
  'Mutuelle et prévoyance famille',
  "Plan d'épargne entreprise (PEE/PERCO)",
  'Formation continue et VAE',
  "Restaurant d'entreprise sur site",
  'Comité social et économique actif',
];

function BenefitsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-15% 0px' });

  return (
    <section className="bg-white py-20 lg:py-[100px]">
      <div className="max-w-[1280px] mx-auto px-[clamp(16px,4vw,64px)]" ref={ref}>
        <SectionHeading kicker="Avantages" title="Ce que nous offrons à nos collaborateurs" />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-14"
        >
          {benefits.map((b) => (
            <motion.div
              key={b}
              variants={staggerChild}
              className="flex items-center gap-3 bg-slate-50 rounded-xl p-5"
            >
              <span className="w-2 h-2 rounded-full bg-orange-500 shrink-0" />
              <span className="font-dmSans font-medium text-[15px] text-slate-800">{b}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

const employeeTestimonials = [
  {
    name: 'Sophie Renard',
    role: 'Technicienne qualité, 6 ans d\'ancienneté',
    quote:
      "J'ai débuté comme opératrice et l'entreprise m'a permis d'évoluer vers la métrologie grâce à un plan de formation dédié. Ici, la progression interne est une réalité, pas juste un discours.",
  },
  {
    name: 'Karim Belhadj',
    role: 'Régleur CNC, 12 ans d\'ancienneté',
    quote:
      "35 ans d'excellence, ça se ressent au quotidien dans la rigueur du travail bien fait. L'ambiance d'équipe et le matériel de pointe rendent le travail passionnant.",
  },
  {
    name: 'Julie Marchand',
    role: 'Ingénieure méthodes, 3 ans d\'ancienneté',
    quote:
      "Arrivée en alternance, j'ai été embauchée en CDI à l'issue de mon diplôme. L'entreprise investit vraiment dans les jeunes talents.",
  },
];

function TestimonialsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-15% 0px' });

  return (
    <section className="bg-slate-50 py-20 lg:py-[100px]">
      <div className="max-w-[1280px] mx-auto px-[clamp(16px,4vw,64px)]" ref={ref}>
        <SectionHeading kicker="Témoignages" title="Ce que nos collaborateurs en disent" />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-14"
        >
          {employeeTestimonials.map((t) => (
            <motion.div
              key={t.name}
              variants={staggerChild}
              className="bg-white rounded-xl p-7 shadow-[0_4px_16px_rgba(0,0,0,0.04)]"
            >
              <p className="font-dmSans font-normal text-[14px] text-slate-700 italic leading-relaxed mb-5">
                &laquo; {t.quote} &raquo;
              </p>
              <p className="font-dmSans font-semibold text-[15px] text-slate-900">{t.name}</p>
              <p className="font-ibmPlexMono font-medium text-[12px] text-slate-500 mt-1">
                {t.role}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function ApprenticeshipSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-15% 0px' });

  return (
    <section className="bg-slate-900 py-20 lg:py-[100px]">
      <div className="max-w-[1280px] mx-auto px-[clamp(16px,4vw,64px)]" ref={ref}>
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: easeOutExpo }}
            className="lg:w-2/3"
          >
            <p className="font-ibmPlexMono font-medium text-[13px] text-orange-500 uppercase tracking-[0.1em] mb-3">
              Apprentissage & alternance
            </p>
            <h2
              className="font-barlow font-bold text-white tracking-[-0.02em] leading-tight"
              style={{ fontSize: 'clamp(28px, 4vw, 44px)' }}
            >
              Former les talents industriels de demain
            </h2>
            <p className="font-dmSans font-normal text-[16px] text-white/70 leading-relaxed mt-6">
              NexIndustrie accueille chaque année une trentaine d'alternants
              et d'apprentis, du CAP au diplôme d'ingénieur, dans nos ateliers
              d'usinage, notre bureau d'études et nos services qualité. Un
              tuteur dédié accompagne chaque alternant tout au long de son
              parcours, avec un taux d'embauche en CDI supérieur à 60% à
              l'issue du contrat.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, ease: easeOutExpo, delay: 0.2 }}
            className="lg:w-1/3 bg-orange-500 rounded-xl p-8 text-center"
          >
            <p className="font-barlow font-extrabold text-[48px] text-white">60%+</p>
            <p className="font-ibmPlexMono text-[13px] text-white/90 uppercase mt-2">
              Taux d'embauche en CDI après alternance
            </p>
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
          Envie de rejoindre l'aventure NexIndustrie ?
        </h2>
        <p className="font-dmSans font-normal text-[18px] text-white/90 mt-4">
          Envoyez-nous votre candidature spontanée, nous étudions chaque
          profil avec attention.
        </p>
        <div className="flex flex-wrap gap-4 justify-center mt-8">
          <Link
            to="/contact"
            className="bg-white text-orange-600 font-dmSans font-semibold text-[15px] px-8 py-3.5 rounded-xl transition-all duration-200 hover:shadow-[0_4px_16px_rgba(0,0,0,0.15)] hover:scale-[1.02] active:scale-[0.98]"
          >
            Envoyer ma candidature
            <ArrowRight size={16} className="inline-block ml-2" />
          </Link>
        </div>
      </motion.div>
    </section>
  );
}

export default function Carrieres() {
  return (
    <>
      <PageHero
        kicker="Carrières"
        title="Construisons ensemble l'excellence industrielle de demain"
        subtitle="Rejoignez une entreprise à taille humaine, forte de 35 ans d'expertise et de 450 collaborateurs passionnés par la précision industrielle."
        image="/hero-factory.jpg"
      />

      <CultureSection />
      <JobsSection />
      <RecruitmentSection />
      <BenefitsSection />
      <TestimonialsSection />
      <ApprenticeshipSection />
      <CTASection />
    </>
  );
}
