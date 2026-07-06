import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Paperclip,
  ShieldCheck,
  Timer,
} from 'lucide-react';
import { easeOutExpo, staggerContainer, staggerChild, PageHero, SectionHeading } from '../components/Shared';

function ContactFormSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-15% 0px' });
  const [submitted, setSubmitted] = useState(false);

  return (
    <section className="bg-white py-20 lg:py-[100px]">
      <div className="max-w-[1280px] mx-auto px-[clamp(16px,4vw,64px)]" ref={ref}>
        <div className="flex flex-col lg:flex-row gap-16">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: easeOutExpo }}
            className="lg:w-3/5"
          >
            <p className="font-ibmPlexMono font-medium text-[13px] text-orange-500 uppercase tracking-[0.1em] mb-3">
              Demande de devis
            </p>
            <h2
              className="font-barlow font-bold text-slate-900 tracking-[-0.02em] leading-tight"
              style={{ fontSize: 'clamp(28px, 4vw, 44px)' }}
            >
              Parlez-nous de votre projet
            </h2>
            <p className="font-dmSans font-normal text-[16px] text-slate-600 leading-relaxed mt-4">
              Décrivez votre besoin, nos équipes commerciales et techniques
              reviendront vers vous sous 48h ouvrées.
            </p>

            {submitted ? (
              <div className="mt-10 bg-emerald-50 border border-emerald-200 rounded-xl p-8 text-center">
                <p className="font-barlow font-bold text-[20px] text-emerald-700">
                  Merci pour votre demande !
                </p>
                <p className="font-dmSans text-[14px] text-emerald-700/80 mt-2">
                  Notre équipe vous recontactera très prochainement.
                </p>
              </div>
            ) : (
              <form
                className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-5"
                onSubmit={(e) => {
                  e.preventDefault();
                  setSubmitted(true);
                }}
              >
                <div className="flex flex-col gap-2">
                  <label className="font-dmSans font-medium text-[14px] text-slate-700">
                    Nom complet
                  </label>
                  <input
                    required
                    type="text"
                    className="border border-slate-300 rounded-lg px-4 py-3 font-dmSans text-[15px] focus:outline-none focus:ring-2 focus:ring-orange-500/40 focus:border-orange-500"
                    placeholder="Jean Dupont"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="font-dmSans font-medium text-[14px] text-slate-700">
                    Entreprise
                  </label>
                  <input
                    required
                    type="text"
                    className="border border-slate-300 rounded-lg px-4 py-3 font-dmSans text-[15px] focus:outline-none focus:ring-2 focus:ring-orange-500/40 focus:border-orange-500"
                    placeholder="Nom de votre société"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="font-dmSans font-medium text-[14px] text-slate-700">
                    Email professionnel
                  </label>
                  <input
                    required
                    type="email"
                    className="border border-slate-300 rounded-lg px-4 py-3 font-dmSans text-[15px] focus:outline-none focus:ring-2 focus:ring-orange-500/40 focus:border-orange-500"
                    placeholder="jean.dupont@entreprise.com"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="font-dmSans font-medium text-[14px] text-slate-700">
                    Secteur d'activité
                  </label>
                  <select className="border border-slate-300 rounded-lg px-4 py-3 font-dmSans text-[15px] focus:outline-none focus:ring-2 focus:ring-orange-500/40 focus:border-orange-500">
                    <option>Aéronautique</option>
                    <option>Automobile</option>
                    <option>Énergie</option>
                    <option>Médical</option>
                    <option>Autre</option>
                  </select>
                </div>
                <div className="flex flex-col gap-2 sm:col-span-2">
                  <label className="font-dmSans font-medium text-[14px] text-slate-700">
                    Description de votre besoin
                  </label>
                  <textarea
                    required
                    rows={5}
                    className="border border-slate-300 rounded-lg px-4 py-3 font-dmSans text-[15px] focus:outline-none focus:ring-2 focus:ring-orange-500/40 focus:border-orange-500 resize-none"
                    placeholder="Type de pièces, volumes, matériaux, délais souhaités..."
                  />
                </div>
                <div className="flex flex-col gap-2 sm:col-span-2">
                  <label className="font-dmSans font-medium text-[14px] text-slate-700">
                    Fichier joint (plan, cahier des charges)
                  </label>
                  <div className="flex items-center gap-3 border border-dashed border-slate-300 rounded-lg px-4 py-4 text-slate-500">
                    <Paperclip size={18} />
                    <span className="font-dmSans text-[14px]">
                      Glissez-déposez un fichier ou cliquez pour parcourir
                    </span>
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <button
                    type="submit"
                    className="bg-orange-500 hover:bg-orange-600 text-white font-dmSans font-semibold text-[15px] px-8 py-3.5 rounded-xl transition-all duration-200 hover:shadow-[0_4px_16px_rgba(249,115,22,0.3)] hover:scale-[1.02] active:scale-[0.98]"
                  >
                    Envoyer ma demande de devis
                  </button>
                </div>
              </form>
            )}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: easeOutExpo, delay: 0.15 }}
            className="lg:w-2/5"
          >
            <div className="bg-slate-50 rounded-xl p-8 space-y-6">
              <div className="flex items-start gap-4">
                <MapPin size={20} className="text-orange-500 shrink-0 mt-0.5" />
                <div>
                  <p className="font-dmSans font-semibold text-[15px] text-slate-900">Adresse</p>
                  <p className="font-dmSans text-[14px] text-slate-600">
                    12 rue de l'Industrie, 69800 Saint-Priest, France
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Phone size={20} className="text-orange-500 shrink-0 mt-0.5" />
                <div>
                  <p className="font-dmSans font-semibold text-[15px] text-slate-900">Téléphone</p>
                  <p className="font-dmSans text-[14px] text-slate-600">+33 4 72 00 00 00</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Mail size={20} className="text-orange-500 shrink-0 mt-0.5" />
                <div>
                  <p className="font-dmSans font-semibold text-[15px] text-slate-900">Email</p>
                  <p className="font-dmSans text-[14px] text-slate-600">contact@nexindustrie.fr</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Clock size={20} className="text-orange-500 shrink-0 mt-0.5" />
                <div>
                  <p className="font-dmSans font-semibold text-[15px] text-slate-900">Horaires</p>
                  <p className="font-dmSans text-[14px] text-slate-600">
                    Lundi - Vendredi, 8h00 - 18h00
                  </p>
                </div>
              </div>

              <div className="aspect-[4/3] rounded-lg bg-gradient-to-br from-slate-200 to-slate-300 flex items-center justify-center">
                <span className="font-ibmPlexMono text-[12px] text-slate-500 uppercase tracking-[0.05em]">
                  Carte — Saint-Priest, France
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

const faqs = [
  {
    q: 'Quel est le délai moyen pour une réponse à un devis ?',
    a: 'Nous nous engageons à répondre à toute demande de devis sous 48h ouvrées, avec une proposition détaillée sous 5 jours ouvrés pour les projets complexes.',
  },
  {
    q: 'Quel est le volume minimum de commande (MOQ) ?',
    a: "Nous acceptons aussi bien la petite série (prototypage, pré-série) que les grands volumes en production automobile. Il n'y a pas de MOQ strict, chaque projet est étudié individuellement.",
  },
  {
    q: 'Quelles certifications qualité acceptez-vous de démontrer ?',
    a: 'Nous fournissons sur demande nos certificats ISO 9001, ISO 14001, IATF 16949 et EN 9100, ainsi que les rapports de conformité spécifiques à chaque commande.',
  },
  {
    q: 'Livrez-vous à l\'international ?',
    a: "Oui, notre plateforme logistique organise des expéditions vers l'Europe, l'Amérique du Nord et l'Asie, avec un suivi de traçabilité complet.",
  },
  {
    q: 'Pouvez-vous accompagner un projet de la conception au prototypage ?',
    a: "Notre bureau d'études R&D et notre atelier d'impression 3D métal permettent d'accompagner un projet dès la phase de conception jusqu'à l'industrialisation.",
  },
  {
    q: 'Quels formats de fichiers acceptez-vous pour un devis ?',
    a: "Nous acceptons les formats STEP, IGES, plans PDF cotés ainsi que les cahiers des charges Word ou Excel.",
  },
  {
    q: 'Proposez-vous un accompagnement pour les pièces critiques réglementées ?',
    a: 'Oui, nos équipes qualité accompagnent spécifiquement les projets aéronautiques, automobiles et médicaux soumis à des exigences réglementaires strictes (EN 9100, IATF 16949, ISO 13485).',
  },
];

function FaqSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-15% 0px' });

  return (
    <section className="bg-slate-50 py-20 lg:py-[100px]">
      <div className="max-w-[900px] mx-auto px-[clamp(16px,4vw,64px)]" ref={ref}>
        <SectionHeading kicker="Questions fréquentes" title="FAQ devis" />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="mt-14 space-y-4"
        >
          {faqs.map((faq) => (
            <motion.details
              key={faq.q}
              variants={staggerChild}
              className="group bg-white rounded-xl p-6 shadow-[0_4px_16px_rgba(0,0,0,0.04)]"
            >
              <summary className="font-barlow font-bold text-[17px] text-slate-900 cursor-pointer list-none flex items-center justify-between">
                {faq.q}
                <span className="text-orange-500 ml-4 transition-transform group-open:rotate-45 text-[20px]">
                  +
                </span>
              </summary>
              <p className="font-dmSans font-normal text-[14px] text-slate-600 leading-relaxed mt-3">
                {faq.a}
              </p>
            </motion.details>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

const commitments = [
  {
    icon: Timer,
    title: 'Réponse sous 48h',
    desc: 'Chaque demande de devis reçoit une première réponse sous 48h ouvrées.',
  },
  {
    icon: ShieldCheck,
    title: 'Confidentialité garantie',
    desc: "Vos plans et cahiers des charges sont traités sous accord de confidentialité (NDA) sur demande.",
  },
  {
    icon: Clock,
    title: 'Suivi personnalisé',
    desc: 'Un interlocuteur commercial et technique dédié suit votre projet de bout en bout.',
  },
];

function CommitmentsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-15% 0px' });

  return (
    <section className="bg-slate-900 py-20 lg:py-[100px]">
      <div className="max-w-[1280px] mx-auto px-[clamp(16px,4vw,64px)]" ref={ref}>
        <SectionHeading kicker="Nos engagements" title="Un accompagnement fiable et réactif" dark />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-14"
        >
          {commitments.map((c) => (
            <motion.div key={c.title} variants={staggerChild} className="bg-slate-800 rounded-xl p-7 text-center">
              <c.icon size={32} className="text-orange-500 mx-auto mb-4" />
              <h4 className="font-barlow font-bold text-[19px] text-white mb-2">{c.title}</h4>
              <p className="font-dmSans font-normal text-[14px] text-white/70 leading-relaxed">
                {c.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default function Contact() {
  return (
    <>
      <PageHero
        kicker="Contact"
        title="Discutons de votre prochain projet industriel"
        subtitle="Devis, questions techniques ou candidature : notre équipe est à votre écoute pour vous accompagner."
        image="/secteur-medical.jpg"
      />

      <ContactFormSection />
      <FaqSection />
      <CommitmentsSection />
    </>
  );
}
