import { useEffect, useRef, useState, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import {
  ChevronDown,
  CheckCircle,
  ChevronLeft,
  ChevronRight,
  Shield,
  ArrowRight,
} from 'lucide-react';

/* ─────────────────────────────────────────────
   Animation helpers
   ───────────────────────────────────────────── */

const easeOutExpo = [0.16, 1, 0.3, 1] as [number, number, number, number];

const fadeUp = {
  hidden: { opacity: 0, y: 60 },
  visible: (delay: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 1, ease: easeOutExpo, delay },
  }),
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12 },
  },
};

const staggerChild = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: easeOutExpo },
  },
};

/* ─────────────────────────────────────────────
   Counter component
   ───────────────────────────────────────────── */

function Counter({
  target,
  suffix = '',
  prefix = '',
}: {
  target: number;
  suffix?: string;
  prefix?: string;
}) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-20% 0px' });
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (!isInView || hasAnimated.current) return;
    hasAnimated.current = true;

    const duration = 2000;
    const start = performance.now();

    const easeOutExpoFn = (t: number) =>
      t === 1 ? 1 : 1 - Math.pow(2, -10 * t);

    const animate = (now: number) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = easeOutExpoFn(progress);
      setCount(Math.round(eased * target));
      if (progress < 1) requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);
  }, [isInView, target]);

  return (
    <span ref={ref}>
      {prefix}
      {count.toLocaleString('fr-FR')}
      {suffix}
    </span>
  );
}

/* ─────────────────────────────────────────────
   Section 1: Hero
   ───────────────────────────────────────────── */

function HeroSection() {
  const [scrollY, setScrollY] = useState(0);
  const [indicatorVisible, setIndicatorVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      setIndicatorVisible(window.scrollY < 100);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="relative min-h-[100dvh] flex items-end overflow-hidden">
      {/* Background image with parallax */}
      <div
        className="absolute inset-0 w-full h-[120%]"
        style={{
          transform: `translateY(${scrollY * 0.3}px)`,
        }}
      >
        <img
          src="/hero-factory.jpg"
          alt="Intérieur d'un facility de précision industrielle"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Gradient overlay */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(to top, rgba(15,23,42,0.92) 0%, rgba(15,23,42,0.6) 45%, rgba(15,23,42,0.2) 100%)',
        }}
      />

      {/* Content */}
      <div className="relative z-10 w-full max-w-[1280px] mx-auto px-[clamp(16px,4vw,64px)] pb-20">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="max-w-[720px]"
        >
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: easeOutExpo, delay: 0.3 }}
            className="font-ibmPlexMono font-medium text-[13px] text-orange-500 uppercase tracking-[0.1em] mb-4"
          >
            Industrie de Précision
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: easeOutExpo, delay: 0.5 }}
            className="font-barlow font-extrabold text-white leading-[0.9] tracking-[-0.03em]"
            style={{ fontSize: 'clamp(48px, 8vw, 96px)' }}
          >
            35 ans d'excellence industrielle
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: easeOutExpo, delay: 1.0 }}
            className="font-dmSans font-normal text-white/80 mt-6 max-w-[560px] leading-relaxed"
            style={{ fontSize: 'clamp(16px, 2vw, 20px)' }}
          >
            Usinage, assemblage et contrôle qualité pour l'aéronautique,
            l'automobile, l'énergie et le médical.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: easeOutExpo, delay: 1.2 }}
            className="flex flex-wrap gap-4 mt-8"
          >
            <Link
              to="/contact"
              className="bg-orange-500 hover:bg-orange-600 text-white font-dmSans font-semibold text-[15px] tracking-[0.01em] px-8 py-3.5 rounded-xl transition-all duration-200 hover:shadow-[0_4px_16px_rgba(249,115,22,0.3)] hover:scale-[1.02] active:scale-[0.98]"
            >
              Demander un devis
            </Link>
            <a
              href="#capabilities"
              className="border border-white/30 text-white font-dmSans font-semibold text-[15px] px-8 py-3.5 rounded-xl hover:bg-white/[0.08] hover:border-white/60 transition-all duration-200"
            >
              Nos capacités
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.5 }}
            className="flex flex-wrap gap-6 mt-10"
          >
            {['ISO 9001', 'ISO 14001', 'IATF 16949', 'EN 9100'].map((cert) => (
              <span
                key={cert}
                className="font-ibmPlexMono text-[12px] text-white/50"
              >
                {cert}
              </span>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: indicatorVisible ? 0.4 : 0 }}
        transition={{ duration: 0.3 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10"
      >
        <ChevronDown
          size={28}
          className="text-white animate-bounce-subtle"
        />
      </motion.div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   Section 2: Key Figures
   ───────────────────────────────────────────── */

const figures = [
  { value: 35, suffix: '', label: 'Années d\'expérience' },
  { value: 450, suffix: '', label: 'Collaborateurs' },
  { value: 28000, suffix: '', label: 'm² de production' },
  { value: 120, suffix: '+', label: 'Machines-outils' },
];

function KeyFiguresSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-15% 0px' });

  return (
    <section className="bg-slate-50 py-20 lg:py-[120px]">
      <div className="max-w-[1280px] mx-auto px-[clamp(16px,4vw,64px)]" ref={ref}>
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="text-center"
        >
          <p className="font-ibmPlexMono font-medium text-[13px] text-orange-500 uppercase tracking-[0.1em] mb-3">
            NexIndustrie en chiffres
          </p>
          <h2
            className="font-barlow font-bold text-slate-900 tracking-[-0.02em]"
            style={{ fontSize: 'clamp(32px, 5vw, 56px)' }}
          >
            Une force industrielle au service de vos projets
          </h2>
          <motion.div
            initial={{ width: 0 }}
            animate={isInView ? { width: 40 } : { width: 0 }}
            transition={{ duration: 0.6, ease: easeOutExpo, delay: 0.3 }}
            className="h-[3px] bg-orange-500 mx-auto mt-4"
          />
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-0 mt-16"
        >
          {figures.map((fig, i) => (
            <motion.div
              key={fig.label}
              variants={staggerChild}
              custom={i}
              className="text-center relative"
            >
              <p
                className="font-barlow font-extrabold text-orange-500"
                style={{ fontSize: 'clamp(48px, 6vw, 72px)' }}
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

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: easeOutExpo, delay: 0.8 }}
          className="text-center mt-12"
        >
          <Link
            to="/entreprise"
            className="inline-flex items-center gap-2 font-dmSans font-medium text-[15px] text-blue-600 hover:text-blue-700 hover:underline underline-offset-4 transition-colors duration-200"
          >
            Découvrir notre entreprise
            <ArrowRight size={16} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   Section 3: Capabilities Preview
   ───────────────────────────────────────────── */

const capabilitiesList = [
  'Usinage multi-axes',
  'Assemblage mécanique & électronique',
  'Contrôle qualité & métrologie',
  'Prototypage & industrialisation',
  'Logistique & supply chain',
];

function CapabilitiesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-15% 0px' });

  return (
    <section id="capabilities" className="bg-white py-20 lg:py-[120px]">
      <div
        className="max-w-[1280px] mx-auto px-[clamp(16px,4vw,64px)]"
        ref={ref}
      >
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
          {/* Left Column - Text */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9, ease: easeOutExpo }}
            className="lg:w-[45%]"
          >
            <p className="font-ibmPlexMono font-medium text-[13px] text-orange-500 uppercase tracking-[0.1em] mb-3">
              Nos métiers
            </p>
            <h2
              className="font-barlow font-bold text-slate-900 tracking-[-0.02em] leading-tight"
              style={{ fontSize: 'clamp(32px, 5vw, 56px)' }}
            >
              De la conception à la livraison, une chaîne de valeur intégrée
            </h2>
            <p className="font-dmSans font-normal text-[16px] text-slate-600 max-w-[480px] leading-[1.7] mt-6">
              NexIndustrie maîtrise l'ensemble du processus de fabrication :
              usinage de précision sur machines CNC 5 axes, assemblage mécanique
              et électronique, contrôle qualité dimensionnel et matériau, ainsi
              que la R&D pour le prototypage rapide.
            </p>

            <ul className="mt-8 space-y-4">
              {capabilitiesList.map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <CheckCircle size={16} className="text-orange-500 shrink-0" />
                  <span className="font-dmSans font-medium text-[16px] text-slate-800">
                    {item}
                  </span>
                </li>
              ))}
            </ul>

            <Link
              to="/capabilities"
              className="inline-block mt-8 bg-orange-500 hover:bg-orange-600 text-white font-dmSans font-semibold text-[15px] px-8 py-3.5 rounded-xl transition-all duration-200 hover:shadow-[0_4px_16px_rgba(249,115,22,0.3)] hover:scale-[1.02] active:scale-[0.98]"
            >
              Explorer nos capacités
            </Link>
          </motion.div>

          {/* Right Column - Image Grid */}
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
            transition={{ duration: 0.8, ease: easeOutExpo, delay: 0.2 }}
            className="lg:w-[55%]"
          >
            <div
              className="grid grid-cols-2 gap-3"
              style={{ transform: 'rotate(-2deg)' }}
            >
              {[
                { src: '/capability-usinage.jpg', alt: 'Usinage CNC 5 axes' },
                { src: '/capability-assemblage.jpg', alt: 'Assemblage de précision' },
                { src: '/capability-controle.jpg', alt: 'Contrôle qualité CMM' },
                null,
              ].map((item, i) =>
                item ? (
                  <motion.div
                    key={item.src}
                    initial={{ opacity: 0, y: 30, scale: 0.95 }}
                    animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
                    transition={{
                      duration: 0.8,
                      ease: easeOutExpo,
                      delay: 0.3 + i * 0.1,
                    }}
                    className="aspect-square rounded-xl overflow-hidden group"
                  >
                    <img
                      src={item.src}
                      alt={item.alt}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.04]"
                      loading="lazy"
                    />
                  </motion.div>
                ) : (
                  <motion.div
                    key="stat-card"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{
                      duration: 0.8,
                      ease: easeOutExpo,
                      delay: 0.6,
                    }}
                    className="aspect-square rounded-xl bg-orange-500 flex items-center justify-center"
                  >
                    <div className="text-center">
                      <p className="font-barlow font-extrabold text-[28px] text-white">
                        + de 120 machines
                      </p>
                    </div>
                  </motion.div>
                )
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   Section 4: Sectors Served
   ───────────────────────────────────────────── */

const sectors = [
  {
    image: '/secteur-aero.jpg',
    title: 'Aéronautique',
    desc: 'Pièces structurales, moteurs, trains d\'atterrissage. Certification EN 9100.',
    href: '/secteurs',
  },
  {
    image: '/secteur-auto.jpg',
    title: 'Automobile',
    desc: 'Sous-ensembles moteur, transmission, châssis. Certification IATF 16949.',
    href: '/secteurs',
  },
  {
    image: '/secteur-energie.jpg',
    title: 'Énergie',
    desc: 'Composants pour énergies renouvelables, nucléaire, pétrole et gaz.',
    href: '/secteurs',
  },
  {
    image: '/secteur-medical.jpg',
    title: 'Médical',
    desc: 'Implants, instruments chirurgicaux, dispositifs de diagnostic. ISO 13485.',
    href: '/secteurs',
  },
];

function SectorsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-15% 0px' });

  return (
    <section className="bg-slate-900 py-20 lg:py-[120px]">
      <div
        className="max-w-[1280px] mx-auto px-[clamp(16px,4vw,64px)]"
        ref={ref}
      >
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: easeOutExpo }}
        >
          <p className="font-ibmPlexMono font-medium text-[13px] text-orange-500 uppercase tracking-[0.1em] mb-3">
            Secteurs d'activité
          </p>
          <h2
            className="font-barlow font-bold text-white tracking-[-0.02em] leading-tight"
            style={{ fontSize: 'clamp(32px, 5vw, 56px)' }}
          >
            Des solutions sur mesure pour les industries les plus exigeantes
          </h2>
          <p className="font-dmSans font-normal text-[16px] text-white/70 max-w-[640px] leading-relaxed mt-4">
            Nos certifications sectorielles et notre expertise multi-matériaux
            nous permettent de servir les marchés réglementés les plus stricts.
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-16"
        >
          {sectors.map((sector) => (
            <motion.div
              key={sector.title}
              variants={staggerChild}
              className="group rounded-xl overflow-hidden bg-slate-800 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_16px_48px_rgba(0,0,0,0.3)]"
            >
              <div className="aspect-[16/10] overflow-hidden">
                <img
                  src={sector.image}
                  alt={sector.title}
                  className="w-full h-full object-cover transition-transform duration-400 group-hover:scale-[1.06]"
                  loading="lazy"
                />
              </div>
              <div className="p-6">
                <h4 className="font-barlow font-bold text-[22px] text-white mb-2">
                  {sector.title}
                </h4>
                <p className="font-dmSans font-normal text-[14px] text-white/70 leading-relaxed mb-4">
                  {sector.desc}
                </p>
                <Link
                  to={sector.href}
                  className="inline-flex items-center gap-1 font-dmSans font-medium text-[14px] text-orange-500 hover:underline underline-offset-4 transition-all"
                >
                  En savoir plus
                  <ArrowRight size={14} />
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: easeOutExpo, delay: 0.6 }}
          className="text-center mt-12"
        >
          <Link
            to="/secteurs"
            className="inline-block border border-white/30 text-white font-dmSans font-semibold text-[15px] px-8 py-3.5 rounded-xl hover:bg-white/[0.08] hover:border-white/60 transition-all duration-200"
          >
            Découvrir tous nos secteurs
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   Section 5: Certifications
   ───────────────────────────────────────────── */

const certBadges = [
  {
    title: 'ISO 9001:2015',
    subtitle: 'Management de la qualité',
    status: 'EN VIGUEUR',
  },
  {
    title: 'ISO 14001:2015',
    subtitle: 'Management environnemental',
    status: 'EN VIGUEUR',
  },
  {
    title: 'IATF 16949:2016',
    subtitle: 'Qualité automobile',
    status: 'EN VIGUEUR',
  },
  {
    title: 'EN 9100:2018',
    subtitle: 'Qualité aéronautique',
    status: 'EN VIGUEUR',
  },
];

function CertificationsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-15% 0px' });

  return (
    <section className="bg-white py-20 lg:py-[120px]">
      <div
        className="max-w-[1280px] mx-auto px-[clamp(16px,4vw,64px)]"
        ref={ref}
      >
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: easeOutExpo }}
          className="text-center"
        >
          <p className="font-ibmPlexMono font-medium text-[13px] text-orange-500 uppercase tracking-[0.1em] mb-3">
            Nos certifications
          </p>
          <h2
            className="font-barlow font-bold text-slate-900 tracking-[-0.02em]"
            style={{ fontSize: 'clamp(32px, 5vw, 56px)' }}
          >
            Des standards de qualité reconnus mondialement
          </h2>
          <motion.div
            initial={{ width: 0 }}
            animate={isInView ? { width: 40 } : { width: 0 }}
            transition={{ duration: 0.6, ease: easeOutExpo, delay: 0.3 }}
            className="h-[3px] bg-orange-500 mx-auto mt-4"
          />
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mt-14"
        >
          {certBadges.map((cert) => (
            <motion.div
              key={cert.title}
              variants={staggerChild}
              className="relative bg-blue-50 border border-blue-600/15 rounded-xl p-8 transition-all duration-250 hover:-translate-y-1 hover:shadow-[0_8px_24px_rgba(2,132,199,0.1)]"
              style={{ borderLeftWidth: '4px', borderLeftColor: '#0284C7' }}
            >
              <Shield size={48} className="text-blue-600 mb-4" />
              <h4 className="font-barlow font-bold text-[20px] text-slate-900 mb-1">
                {cert.title}
              </h4>
              <p className="font-dmSans font-medium text-[14px] text-slate-600 mb-3">
                {cert.subtitle}
              </p>
              <span className="inline-block font-ibmPlexMono text-[11px] font-medium text-emerald-600 bg-emerald-600/10 px-2.5 py-1 rounded-full">
                {cert.status}
              </span>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: easeOutExpo, delay: 0.6 }}
          className="text-center mt-10"
        >
          <Link
            to="/qualite"
            className="inline-block border-2 border-slate-900 text-slate-900 font-dmSans font-semibold text-[15px] px-8 py-3 rounded-xl hover:bg-slate-900 hover:text-white transition-all duration-200"
          >
            Voir notre démarche qualité
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   Section 6: Equipment Showcase
   ───────────────────────────────────────────── */

const equipmentList = [
  "Centres d'usinage 5 axes DMG Mori",
  'Tours multi-broches Mazak',
  'Machines de découpe laser Trumpf',
  'Imprimantes 3D métal EOS',
  'MMT Zeiss et Hexagon',
];

function EquipmentSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-15% 0px' });

  return (
    <section className="bg-slate-100 py-20 lg:py-[120px]">
      <div
        className="max-w-[1280px] mx-auto px-[clamp(16px,4vw,64px)]"
        ref={ref}
      >
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-12">
          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, ease: easeOutExpo }}
            className="lg:w-1/2"
          >
            <p className="font-ibmPlexMono font-medium text-[13px] text-orange-500 uppercase tracking-[0.1em] mb-3">
              Parc machines
            </p>
            <h2
              className="font-barlow font-bold text-slate-900 tracking-[-0.02em] leading-tight"
              style={{ fontSize: 'clamp(32px, 5vw, 56px)' }}
            >
              Des équipements de pointe pour des exigences de pointe
            </h2>
            <p className="font-dmSans font-normal text-[16px] text-slate-600 leading-[1.7] mt-6">
              Plus de 120 machines-outils, dont 40 centres d'usinage 5 axes, 12
              imprimantes 3D industrielles, et un laboratoire de métrologie
              équipé de 6 MMT. Notre parc est renouvelé en moyenne tous les 5
              ans.
            </p>

            <ul className="mt-6 space-y-3">
              {equipmentList.map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-orange-500 shrink-0" />
                  <span className="font-dmSans font-medium text-[15px] text-slate-800">
                    {item}
                  </span>
                </li>
              ))}
            </ul>

            <Link
              to="/equipements"
              className="inline-block mt-8 bg-orange-500 hover:bg-orange-600 text-white font-dmSans font-semibold text-[15px] px-8 py-3.5 rounded-xl transition-all duration-200 hover:shadow-[0_4px_16px_rgba(249,115,22,0.3)] hover:scale-[1.02] active:scale-[0.98]"
            >
              Découvrir nos équipements
            </Link>
          </motion.div>

          {/* Right Column - Image */}
          <motion.div
            initial={{ clipPath: 'inset(0 100% 0 0)' }}
            animate={isInView ? { clipPath: 'inset(0 0% 0 0)' } : {}}
            transition={{ duration: 1.2, ease: easeOutExpo, delay: 0.2 }}
            className="lg:w-1/2 relative"
          >
            <div className="rounded-2xl overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.12)] group">
              <img
                src="/eq-hero.jpg"
                alt="Centre d'usinage 5 axes en opération"
                className="w-full h-auto object-cover transition-transform duration-400 group-hover:scale-[1.02]"
                loading="lazy"
              />
            </div>

            {/* Stat overlay card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, ease: easeOutExpo, delay: 1.0 }}
              className="absolute -bottom-6 -right-4 lg:right-4 bg-white rounded-xl p-6 shadow-lg"
            >
              <p className="font-barlow font-extrabold text-[36px] text-orange-500">
                120+
              </p>
              <p className="font-ibmPlexMono font-medium text-[13px] text-slate-500 uppercase">
                Machines-outils
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   Section 7: Testimonials
   ───────────────────────────────────────────── */

const testimonials = [
  {
    quote:
      'NexIndustrie nous accompagne depuis 8 ans sur nos programmes aéronautiques critiques. Leur rigueur qualité et leur réactivité font toute la différence sur des pièces dont la conformité dimensionnelle est essentielle.',
    name: 'Philippe Durand',
    title: 'Directeur des Achats',
    company: 'AéroStructures SAS',
    avatar: '/temoignage-avatar-1.jpg',
  },
  {
    quote:
      'Un partenaire industriel fiable et innovant. Leur capacité à industrialiser rapidement nos prototypes nous a permis de réduire nos délais de mise sur le marché de 30%.',
    name: 'Marie Lefebvre',
    title: 'Responsable Supply Chain',
    company: 'AutoTech Industries',
    avatar: '/temoignage-avatar-2.jpg',
  },
  {
    quote:
      'La digitalisation de leur production et la traçabilité complète nous offrent une transparence sans équivalent. Un vrai atout pour nos audits clients.',
    name: 'Bernard Martin',
    title: 'VP Engineering',
    company: 'ÉnergiePlus Group',
    avatar: '/temoignage-avatar-3.jpg',
  },
];

function TestimonialsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-15% 0px' });
  const [active, setActive] = useState(0);

  const next = useCallback(() => {
    setActive((prev) => (prev + 1) % testimonials.length);
  }, []);

  const prev = useCallback(() => {
    setActive(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  }, []);

  // Auto-rotate
  useEffect(() => {
    const interval = setInterval(next, 6000);
    return () => clearInterval(interval);
  }, [next]);

  return (
    <section className="bg-white py-20 lg:py-[120px]">
      <div
        className="max-w-[1280px] mx-auto px-[clamp(16px,4vw,64px)]"
        ref={ref}
      >
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: easeOutExpo }}
          className="text-center"
        >
          <p className="font-ibmPlexMono font-medium text-[13px] text-orange-500 uppercase tracking-[0.1em] mb-3">
            Ils nous font confiance
          </p>
          <h2
            className="font-barlow font-bold text-slate-900 tracking-[-0.02em]"
            style={{ fontSize: 'clamp(32px, 5vw, 56px)' }}
          >
            Ce que nos clients disent de nous
          </h2>
          <motion.div
            initial={{ width: 0 }}
            animate={isInView ? { width: 40 } : { width: 0 }}
            transition={{ duration: 0.6, ease: easeOutExpo, delay: 0.3 }}
            className="h-[3px] bg-orange-500 mx-auto mt-4"
          />
        </motion.div>

        <div className="max-w-[960px] mx-auto mt-14 relative">
          {/* Quote mark */}
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 0.15, scale: 1 } : {}}
            transition={{ duration: 0.6, ease: easeOutExpo, delay: 0.2 }}
            className="absolute -top-4 left-0 font-barlow font-extrabold text-[120px] text-orange-500 leading-none select-none pointer-events-none"
            aria-hidden="true"
          >
            &ldquo;
          </motion.span>

          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5, ease: easeOutExpo }}
              className="relative z-10"
            >
              <p
                className="font-dmSans font-normal text-slate-800 italic leading-relaxed"
                style={{ fontSize: 'clamp(18px, 2.5vw, 24px)' }}
              >
                &laquo; {testimonials[active].quote} &raquo;
              </p>

              <div className="flex items-center gap-4 mt-8">
                <img
                  src={testimonials[active].avatar}
                  alt={testimonials[active].name}
                  className="w-14 h-14 rounded-full object-cover border-2 border-orange-500"
                  loading="lazy"
                />
                <div>
                  <p className="font-dmSans font-semibold text-[16px] text-slate-900">
                    {testimonials[active].name}
                  </p>
                  <p className="font-ibmPlexMono font-medium text-[13px] text-slate-500">
                    {testimonials[active].title}
                  </p>
                  <p className="font-dmSans font-normal text-[14px] text-slate-600">
                    {testimonials[active].company}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prev}
              className="w-12 h-12 rounded-full bg-slate-200 hover:bg-slate-300 flex items-center justify-center transition-colors duration-200"
              aria-label="Témoignage précédent"
            >
              <ChevronLeft size={20} className="text-slate-700" />
            </button>

            <div className="flex items-center gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className={`w-2.5 h-2.5 rounded-full transition-colors duration-200 ${
                    i === active ? 'bg-orange-500' : 'bg-slate-300'
                  }`}
                  aria-label={`Témoignage ${i + 1}`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="w-12 h-12 rounded-full bg-slate-200 hover:bg-slate-300 flex items-center justify-center transition-colors duration-200"
              aria-label="Témoignage suivant"
            >
              <ChevronRight size={20} className="text-slate-700" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   Section 8: CTA Banner
   ───────────────────────────────────────────── */

function CTABanner() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-15% 0px' });

  return (
    <section
      className="relative bg-orange-500 py-16 lg:py-20 overflow-hidden"
      ref={ref}
    >
      {/* Hexagon pattern */}
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
          Prêt à collaborer sur votre prochain projet ?
        </h2>
        <p className="font-dmSans font-normal text-[18px] text-white/90 mt-4">
          De la petite série au grand volume, nous avons les capacités et
          l'expertise pour répondre à vos besoins les plus exigeants.
        </p>
        <div className="flex flex-wrap gap-4 justify-center mt-8">
          <Link
            to="/contact"
            className="border border-white/30 text-white font-dmSans font-semibold text-[15px] px-8 py-3.5 rounded-xl hover:bg-white/[0.08] hover:border-white/60 transition-all duration-200"
          >
            Demander un devis
          </Link>
          <Link
            to="/contact"
            className="text-white font-dmSans font-semibold text-[15px] px-4 py-3.5 underline underline-offset-4 hover:no-underline transition-all duration-200"
          >
            Nous contacter
          </Link>
        </div>
      </motion.div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   Section 9: News Preview
   ───────────────────────────────────────────── */

const newsArticles = [
  {
    date: '15 JAN 2025',
    category: 'INDUSTRIE 4.0',
    title: 'NexIndustrie investit dans un jumeau numérique de sa production',
    excerpt:
      'Grâce à une nouvelle plateforme MES intégrée, nos clients bénéficient désormais d\'une traçabilité complète en temps réel...',
  },
  {
    date: '03 DÉC 2024',
    category: 'RECRUTEMENT',
    title: 'NexIndustrie recrute 50 nouveaux talents en 2025',
    excerpt:
      'Dans le cadre de notre plan de croissance, nous renforçons nos équipes sur tous nos sites de production...',
  },
  {
    date: '18 NOV 2024',
    category: 'RSE',
    title: 'NexIndustrie obtient le label EcoVadis Silver',
    excerpt:
      'Cette reconnaissance de notre démarche RSE conforte notre engagement pour une industrie responsable...',
  },
];

function NewsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-15% 0px' });

  return (
    <section className="bg-slate-50 py-20 lg:py-[120px]">
      <div
        className="max-w-[1280px] mx-auto px-[clamp(16px,4vw,64px)]"
        ref={ref}
      >
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: easeOutExpo }}
          className="flex flex-col sm:flex-row sm:items-end justify-between gap-4"
        >
          <div>
            <p className="font-ibmPlexMono font-medium text-[13px] text-orange-500 uppercase tracking-[0.1em] mb-3">
              Actualités
            </p>
            <h2
              className="font-barlow font-bold text-slate-900 tracking-[-0.02em]"
              style={{ fontSize: 'clamp(32px, 5vw, 56px)' }}
            >
              Nos dernières actualités
            </h2>
          </div>
          <Link
            to="/"
            className="inline-flex items-center gap-2 font-dmSans font-medium text-[15px] text-blue-600 hover:text-blue-700 hover:underline underline-offset-4 transition-colors duration-200 shrink-0"
          >
            Toutes les actualités
            <ArrowRight size={16} />
          </Link>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12"
        >
          {newsArticles.map((article) => (
            <motion.article
              key={article.title}
              variants={staggerChild}
              className="group bg-white rounded-xl border border-slate-200 overflow-hidden transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_12px_40px_rgba(0,0,0,0.1)]"
            >
              {/* Image placeholder with date badge */}
              <div className="relative aspect-[16/10] bg-slate-200 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-slate-200 to-slate-300" />
                <motion.div
                  initial={{ scale: 0.9 }}
                  animate={isInView ? { scale: 1 } : {}}
                  transition={{ type: 'spring', stiffness: 100, damping: 15 }}
                  className="absolute top-4 left-4"
                >
                  <span className="font-ibmPlexMono text-[12px] font-medium text-white bg-orange-500 px-3 py-1.5 rounded-md">
                    {article.date}
                  </span>
                </motion.div>
              </div>

              <div className="p-6">
                <span className="font-ibmPlexMono text-[12px] font-medium text-blue-600">
                  {article.category}
                </span>
                <h3 className="font-barlow font-semibold text-[18px] text-slate-900 mt-2 leading-snug">
                  {article.title}
                </h3>
                <p className="font-dmSans font-normal text-[14px] text-slate-600 mt-2 line-clamp-2">
                  {article.excerpt}
                </p>
                <span className="inline-flex items-center gap-1 font-dmSans font-medium text-[14px] text-blue-600 hover:text-blue-700 hover:underline underline-offset-4 mt-3 transition-colors cursor-pointer">
                  Lire la suite
                  <ArrowRight size={14} />
                </span>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   Home Page Assembly
   ───────────────────────────────────────────── */

export default function Home() {
  return (
    <>
      <HeroSection />
      <KeyFiguresSection />
      <CapabilitiesSection />
      <SectorsSection />
      <CertificationsSection />
      <EquipmentSection />
      <TestimonialsSection />
      <CTABanner />
      <NewsSection />
    </>
  );
}
