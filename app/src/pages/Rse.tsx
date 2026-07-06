import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useInView } from 'framer-motion';
import { CheckCircle, ArrowRight, Leaf, Users, ShieldCheck, Award } from 'lucide-react';
import {
  easeOutExpo,
  staggerContainer,
  staggerChild,
  Counter,
  PageHero,
  SectionHeading,
} from '../components/Shared';

const envIndicators = [
  { value: 30, suffix: '%', label: 'Réduction énergie / pièce depuis 2019' },
  { value: 95, suffix: '%', label: 'Déchets métalliques valorisés' },
  { value: 18, suffix: '%', label: "Part d'énergie renouvelable" },
  { value: 5, suffix: '', label: 'Sites ISO 14001' },
];

function EnvironmentSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-15% 0px' });

  return (
    <section className="bg-white py-20 lg:py-[100px]">
      <div className="max-w-[1280px] mx-auto px-[clamp(16px,4vw,64px)]" ref={ref}>
        <div className="flex flex-col lg:flex-row gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: easeOutExpo }}
            className="lg:w-1/2"
          >
            <div className="flex items-center gap-3 mb-4">
              <Leaf size={28} className="text-emerald-600" />
              <p className="font-ibmPlexMono font-medium text-[13px] text-orange-500 uppercase tracking-[0.1em]">
                Environnement
              </p>
            </div>
            <h2
              className="font-barlow font-bold text-slate-900 tracking-[-0.02em] leading-tight"
              style={{ fontSize: 'clamp(28px, 4vw, 44px)' }}
            >
              Réduire l'empreinte environnementale de notre production
            </h2>
            <p className="font-dmSans font-normal text-[16px] text-slate-600 leading-[1.7] mt-6">
              Sur nos sites industriels, la gestion de l'énergie et des
              déchets constitue un axe prioritaire de notre démarche RSE.
              Nous avons investi dans le pilotage énergétique en temps réel
              de nos ateliers, la valorisation systématique des copeaux et
              huiles de coupe, et le recours croissant à l'énergie
              renouvelable sur nos sites de production, certifiés ISO 14001.
            </p>
            <ul className="mt-6 space-y-3">
              {[
                'Pilotage énergétique en temps réel de nos ateliers',
                'Valorisation des copeaux métalliques et huiles de coupe',
                'Réduction des rejets liquides et traitement des effluents',
                'Programme de réduction du fret carbone sur nos livraisons',
              ].map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <CheckCircle size={16} className="text-emerald-600 shrink-0" />
                  <span className="font-dmSans font-medium text-[15px] text-slate-800">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            className="lg:w-1/2 grid grid-cols-2 gap-4"
          >
            {envIndicators.map((ind) => (
              <motion.div
                key={ind.label}
                variants={staggerChild}
                className="bg-slate-50 rounded-xl p-6"
              >
                <p className="font-barlow font-extrabold text-[36px] text-emerald-600">
                  <Counter target={ind.value} suffix={ind.suffix} />
                </p>
                <p className="font-ibmPlexMono text-[12px] text-slate-500 uppercase tracking-[0.05em] mt-2">
                  {ind.label}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function SocialSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-15% 0px' });

  return (
    <section className="bg-slate-50 py-20 lg:py-[100px]">
      <div className="max-w-[1280px] mx-auto px-[clamp(16px,4vw,64px)]" ref={ref}>
        <div className="flex items-center gap-3 mb-4 justify-center">
          <Users size={28} className="text-orange-500" />
        </div>
        <SectionHeading
          kicker="Social"
          title="Nos 450 collaborateurs au cœur de notre performance"
          description="Sécurité au travail, formation continue et dialogue social sont les piliers de notre politique sociale."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-14"
        >
          {[
            {
              title: 'Sécurité au travail',
              desc: 'Un plan de prévention des risques industriels ambitieux, avec un objectif de zéro accident grave et des formations sécurité renouvelées chaque année pour l\'ensemble des 450 collaborateurs.',
            },
            {
              title: 'Formation & montée en compétence',
              desc: 'Plus de 90 techniciens formés chaque année sur nos nouveaux équipements, ainsi qu\'un parcours d\'intégration structuré pour tout nouvel arrivant.',
            },
            {
              title: 'Dialogue social',
              desc: 'Des instances représentatives actives et des enquêtes de satisfaction collaborateurs menées annuellement pour ajuster nos pratiques RH.',
            },
          ].map((item) => (
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

function GovernanceSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-15% 0px' });

  return (
    <section className="bg-slate-900 py-20 lg:py-[100px]">
      <div className="max-w-[1280px] mx-auto px-[clamp(16px,4vw,64px)]" ref={ref}>
        <div className="flex items-center gap-3 mb-4 justify-center">
          <ShieldCheck size={28} className="text-orange-500" />
        </div>
        <SectionHeading
          kicker="Gouvernance & éthique"
          title="Une éthique des affaires exigeante"
          description="Notre code de conduite fournisseurs et notre gouvernance garantissent des pratiques responsables tout au long de notre chaîne de valeur."
          dark
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-14"
        >
          {[
            {
              title: 'Code de conduite fournisseurs',
              desc: "Chaque fournisseur référencé s'engage sur des critères sociaux et environnementaux, audités périodiquement par nos équipes achats.",
            },
            {
              title: 'Lutte contre la corruption',
              desc: 'Une politique de conformité anti-corruption formalisée et diffusée à l\'ensemble des collaborateurs exposés.',
            },
            {
              title: 'Achats responsables',
              desc: "Priorité donnée aux fournisseurs locaux et engagés dans une démarche RSE équivalente à la nôtre.",
            },
            {
              title: 'Gouvernance indépendante',
              desc: 'Un comité de direction impliqué dans le suivi trimestriel des indicateurs RSE et des plans d\'action associés.',
            },
          ].map((item) => (
            <motion.div
              key={item.title}
              variants={staggerChild}
              className="bg-slate-800 rounded-xl p-7"
            >
              <h4 className="font-barlow font-bold text-[19px] text-white mb-2">
                {item.title}
              </h4>
              <p className="font-dmSans font-normal text-[14px] text-white/70 leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function LabelsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-15% 0px' });

  return (
    <section className="bg-white py-20 lg:py-[100px]">
      <div className="max-w-[1280px] mx-auto px-[clamp(16px,4vw,64px)]" ref={ref}>
        <div className="flex items-center gap-3 mb-4 justify-center">
          <Award size={28} className="text-orange-500" />
        </div>
        <SectionHeading
          kicker="Labels & reconnaissance"
          title="Une démarche RSE reconnue"
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-14 max-w-[900px] mx-auto"
        >
          {[
            {
              title: 'EcoVadis Silver',
              desc: 'Médaille Silver obtenue en 2024, plaçant NexIndustrie parmi les 25% des entreprises les mieux notées de son secteur.',
            },
            {
              title: 'Label RSE Industrie',
              desc: 'Reconnaissance sectorielle de nos engagements environnementaux et sociaux par la fédération professionnelle.',
            },
            {
              title: 'Charte diversité & inclusion',
              desc: 'Engagement signé en faveur de l\'égalité professionnelle et de la mixité des métiers industriels.',
            },
          ].map((item) => (
            <motion.div
              key={item.title}
              variants={staggerChild}
              className="text-center bg-slate-50 rounded-xl p-7"
            >
              <h4 className="font-barlow font-bold text-[19px] text-slate-900 mb-2">
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
          Une question sur notre démarche RSE ?
        </h2>
        <p className="font-dmSans font-normal text-[18px] text-white/90 mt-4">
          Nos équipes RSE et qualité restent disponibles pour tout échange
          avec nos clients et partenaires.
        </p>
        <div className="flex flex-wrap gap-4 justify-center mt-8">
          <Link
            to="/contact"
            className="bg-white text-orange-600 font-dmSans font-semibold text-[15px] px-8 py-3.5 rounded-xl transition-all duration-200 hover:shadow-[0_4px_16px_rgba(0,0,0,0.15)] hover:scale-[1.02] active:scale-[0.98]"
          >
            Nous contacter
            <ArrowRight size={16} className="inline-block ml-2" />
          </Link>
        </div>
      </motion.div>
    </section>
  );
}

export default function Rse() {
  return (
    <>
      <PageHero
        kicker="Responsabilité sociétale"
        title="Une industrie responsable, engagée pour ses collaborateurs et son territoire"
        subtitle="Environnement, social, gouvernance : découvrez comment NexIndustrie construit une performance industrielle durable et reconnue par le label EcoVadis Silver."
        image="/secteur-energie.jpg"
      />

      <EnvironmentSection />
      <SocialSection />
      <GovernanceSection />
      <LabelsSection />
      <CTASection />
    </>
  );
}
