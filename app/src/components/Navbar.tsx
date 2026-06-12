import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Globe, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { label: 'Accueil', href: '/' },
  {
    label: 'Capacités',
    href: '/capabilities',
    children: [
      { label: 'Usinage', href: '/capabilities' },
      { label: 'Assemblage', href: '/capabilities' },
      { label: 'Contrôle Qualité', href: '/capabilities' },
      { label: 'R&D', href: '/capabilities' },
      { label: 'Logistique', href: '/capabilities' },
    ],
  },
  {
    label: 'Secteurs',
    href: '/secteurs',
    children: [
      { label: 'Aéronautique', href: '/secteurs' },
      { label: 'Automobile', href: '/secteurs' },
      { label: 'Énergie', href: '/secteurs' },
      { label: 'Médical', href: '/secteurs' },
      { label: 'Agroalimentaire', href: '/secteurs' },
    ],
  },
  { label: 'Qualité', href: '/qualite' },
  { label: 'Équipements', href: '/equipements' },
  { label: 'RSE', href: '/rse' },
  { label: 'Carrières', href: '/carrieres' },
  { label: 'Entreprise', href: '/entreprise' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setActiveDropdown(null);
  }, [location.pathname]);

  const isActive = (href: string) => {
    if (href === '/') return location.pathname === '/';
    return location.pathname.startsWith(href);
  };

  return (
    <>
      <nav
        className="fixed top-0 left-0 right-0 z-50 h-[72px] flex items-center transition-all duration-300"
        style={{
          background: 'rgba(255,255,255,0.95)',
          backdropFilter: 'blur(12px)',
          WebkitBackdropFilter: 'blur(12px)',
          borderBottom: '1px solid #E2E8F0',
          boxShadow: scrolled ? '0 2px 20px rgba(0,0,0,0.06)' : 'none',
        }}
      >
        <div className="w-full max-w-[1280px] mx-auto flex items-center justify-between px-[clamp(16px,4vw,64px)]">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 shrink-0">
            <div className="w-8 h-8 bg-orange-500 rounded-md flex items-center justify-center">
              <span className="text-white font-barlow font-800 text-lg leading-none">N</span>
            </div>
            <span className="font-barlow font-extrabold text-[20px] text-slate-900 tracking-tight">
              NexIndustrie
            </span>
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <div
                key={link.label}
                className="relative"
                onMouseEnter={() => link.children && setActiveDropdown(link.label)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  to={link.href}
                  className="flex items-center gap-1 px-3 py-2 text-[14px] font-dmSans font-medium transition-colors duration-200 rounded-md"
                  style={{
                    color: isActive(link.href) ? '#F97316' : '#475569',
                  }}
                >
                  {link.label}
                  {link.children && <ChevronDown size={14} />}
                  {isActive(link.href) && (
                    <motion.div
                      layoutId="nav-underline"
                      className="absolute bottom-0 left-3 right-3 h-[2px] bg-orange-500"
                    />
                  )}
                </Link>

                {/* Dropdown */}
                <AnimatePresence>
                  {link.children && activeDropdown === link.label && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 8 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-0 pt-2"
                    >
                      <div
                        className="bg-white rounded-xl border border-slate-200 shadow-lg p-4 min-w-[220px]"
                      >
                        <div className="grid gap-1">
                          {link.children.map((child) => (
                            <Link
                              key={child.label}
                              to={child.href}
                              className="px-3 py-2 text-[14px] font-dmSans font-medium text-slate-600 hover:text-orange-500 hover:bg-orange-50 rounded-lg transition-colors duration-150"
                            >
                              {child.label}
                            </Link>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          {/* Right side: Language + CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <button className="flex items-center gap-1 text-[13px] font-ibmPlexMono font-medium text-slate-500 hover:text-slate-800 transition-colors">
              <Globe size={16} />
              <span>FR</span>
            </button>
            <Link
              to="/contact"
              className="bg-orange-500 hover:bg-orange-600 text-white font-dmSans font-semibold text-[14px] px-6 py-2.5 rounded-xl transition-all duration-200 hover:shadow-[0_4px_16px_rgba(249,115,22,0.3)] hover:scale-[1.02] active:scale-[0.98]"
            >
              Contact
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden p-2 text-slate-700"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-white pt-[72px]"
          >
            <div className="flex flex-col p-6 gap-1">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.label}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05, duration: 0.3 }}
                >
                  <Link
                    to={link.href}
                    className="block py-3 text-[18px] font-dmSans font-medium"
                    style={{
                      color: isActive(link.href) ? '#F97316' : '#0F172A',
                    }}
                    onClick={() => setMobileOpen(false)}
                  >
                    {link.label}
                  </Link>
                  {link.children && (
                    <div className="pl-4 border-l-2 border-slate-100 ml-2">
                      {link.children.map((child) => (
                        <Link
                          key={child.label}
                          to={child.href}
                          className="block py-2 text-[15px] font-dmSans text-slate-500 hover:text-orange-500"
                          onClick={() => setMobileOpen(false)}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </motion.div>
              ))}
              <div className="mt-6 pt-6 border-t border-slate-200 flex items-center gap-4">
                <button className="flex items-center gap-1 text-[13px] font-ibmPlexMono font-medium text-slate-500">
                  <Globe size={16} />
                  <span>FR / EN</span>
                </button>
              </div>
              <Link
                to="/contact"
                className="mt-4 bg-orange-500 text-white font-dmSans font-semibold text-[16px] px-6 py-3.5 rounded-xl text-center"
                onClick={() => setMobileOpen(false)}
              >
                Contact
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
