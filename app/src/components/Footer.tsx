import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Linkedin, Youtube, Shield } from 'lucide-react';
import { useState } from 'react';

const footerLinks = {
  metiers: [
    { label: 'Usinage', href: '/capabilities' },
    { label: 'Assemblage', href: '/capabilities' },
    { label: 'Contrôle Qualité', href: '/capabilities' },
    { label: 'R&D', href: '/capabilities' },
    { label: 'Logistique', href: '/capabilities' },
  ],
  secteurs: [
    { label: 'Aéronautique', href: '/secteurs' },
    { label: 'Automobile', href: '/secteurs' },
    { label: 'Énergie', href: '/secteurs' },
    { label: 'Médical', href: '/secteurs' },
    { label: 'Agroalimentaire', href: '/secteurs' },
  ],
  entreprise: [
    { label: 'Histoire', href: '/entreprise' },
    { label: 'Valeurs', href: '/entreprise' },
    { label: 'Gouvernance', href: '/entreprise' },
    { label: 'Chiffres clés', href: '/entreprise' },
    { label: 'Recrutement', href: '/carrieres' },
  ],
};

const certifications = ['ISO 9001', 'ISO 14001', 'IATF 16949', 'EN 9100'];

export default function Footer() {
  const [email, setEmail] = useState('');

  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-[1280px] mx-auto px-[clamp(16px,4vw,64px)] py-16 lg:py-20">
        {/* 5-column grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">
          {/* Brand column */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-orange-500 rounded-md flex items-center justify-center">
                <span className="text-white font-barlow font-extrabold text-lg leading-none">N</span>
              </div>
              <span className="font-barlow font-extrabold text-[18px] text-white tracking-tight">
                NexIndustrie
              </span>
            </Link>
            <p className="text-[14px] font-dmSans text-slate-400 mb-6">
              Précision industrielle depuis 1990
            </p>
            <div className="flex items-center gap-3">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-orange-500 hover:text-white transition-all duration-200"
                aria-label="LinkedIn"
              >
                <Linkedin size={16} />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-orange-500 hover:text-white transition-all duration-200"
                aria-label="YouTube"
              >
                <Youtube size={16} />
              </a>
            </div>
          </div>

          {/* Métiers column */}
          <div>
            <h4 className="font-barlow font-bold text-[16px] text-white mb-4">
              Nos Métiers
            </h4>
            <ul className="space-y-2.5">
              {footerLinks.metiers.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="text-[14px] font-dmSans text-slate-400 hover:text-orange-500 transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Secteurs column */}
          <div>
            <h4 className="font-barlow font-bold text-[16px] text-white mb-4">
              Secteurs
            </h4>
            <ul className="space-y-2.5">
              {footerLinks.secteurs.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="text-[14px] font-dmSans text-slate-400 hover:text-orange-500 transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Entreprise column */}
          <div>
            <h4 className="font-barlow font-bold text-[16px] text-white mb-4">
              Entreprise
            </h4>
            <ul className="space-y-2.5">
              {footerLinks.entreprise.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="text-[14px] font-dmSans text-slate-400 hover:text-orange-500 transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact column */}
          <div>
            <h4 className="font-barlow font-bold text-[16px] text-white mb-4">
              Contact
            </h4>
            <div className="space-y-3">
              <div className="flex items-start gap-2.5">
                <MapPin size={16} className="text-orange-500 mt-0.5 shrink-0" />
                <span className="text-[13px] font-dmSans text-slate-400 leading-relaxed">
                  12 Rue de l'Industrie<br />
                  69000 Lyon, France
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone size={16} className="text-orange-500 shrink-0" />
                <span className="text-[13px] font-dmSans text-slate-400">
                  +33 4 72 00 00 00
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail size={16} className="text-orange-500 shrink-0" />
                <span className="text-[13px] font-dmSans text-slate-400">
                  contact@nexindustrie.fr
                </span>
              </div>
            </div>

            {/* Certification badges */}
            <div className="mt-5 flex flex-wrap gap-2">
              {certifications.map((cert) => (
                <div
                  key={cert}
                  className="flex items-center gap-1 bg-slate-800 rounded-md px-2 py-1"
                >
                  <Shield size={12} className="text-blue-600" />
                  <span className="text-[11px] font-ibmPlexMono font-medium text-slate-300">
                    {cert}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Newsletter */}
        <div className="mt-12 pt-8 border-t border-slate-800">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <h4 className="font-barlow font-bold text-[15px] text-white mb-1">
                Newsletter
              </h4>
              <p className="text-[13px] font-dmSans text-slate-400">
                Recevez nos actualités et innovations industrielles
              </p>
            </div>
            <div className="flex gap-2 w-full sm:w-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Votre email"
                className="flex-1 sm:w-[240px] h-[44px] px-4 rounded-xl bg-slate-800 border border-slate-700 text-white text-[14px] font-dmSans placeholder:text-slate-500 focus:outline-none focus:border-orange-500"
              />
              <button className="h-[44px] px-5 bg-orange-500 hover:bg-orange-600 text-white font-dmSans font-semibold text-[13px] rounded-xl transition-colors duration-200 shrink-0">
                S'inscrire
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-slate-800">
        <div className="max-w-[1280px] mx-auto px-[clamp(16px,4vw,64px)] py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-[12px] font-ibmPlexMono text-slate-500">
            © 2025 NexIndustrie — Tous droits réservés
          </p>
          <div className="flex items-center gap-4">
            <Link
              to="/"
              className="text-[12px] font-ibmPlexMono text-slate-500 hover:text-slate-300 transition-colors"
            >
              Mentions légales
            </Link>
            <Link
              to="/"
              className="text-[12px] font-ibmPlexMono text-slate-500 hover:text-slate-300 transition-colors"
            >
              Politique de confidentialité
            </Link>
            <a
              href="https://www.beonweb.cm/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[12px] font-ibmPlexMono text-slate-500 hover:text-orange-500 transition-colors"
            >
              Conçu par Beonweb
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
