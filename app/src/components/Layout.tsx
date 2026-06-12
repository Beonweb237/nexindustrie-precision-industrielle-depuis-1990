import { useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

export default function Layout({ children }: { children: React.ReactNode }) {
  const location = useLocation();
  const [scrollProgress, setScrollProgress] = useState(0);
  const lenisRef = useRef<any>(null);

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  // Lenis smooth scrolling
  useEffect(() => {
    let rafId: number;

    const initLenis = async () => {
      const Lenis = (await import('@studio-freight/lenis')).default;
      const lenis = new Lenis({
        lerp: 0.08,
        smoothWheel: true,
      });
      lenisRef.current = lenis;

      const raf = (time: number) => {
        lenis.raf(time);
        rafId = requestAnimationFrame(raf);
      };
      rafId = requestAnimationFrame(raf);

      lenis.on('scroll', ({ progress }: { progress: number }) => {
        setScrollProgress(progress);
      });
    };

    initLenis();

    return () => {
      if (rafId) cancelAnimationFrame(rafId);
      if (lenisRef.current) lenisRef.current.destroy();
    };
  }, []);

  return (
    <div className="min-h-[100dvh] flex flex-col">
      {/* Scroll Progress Bar */}
      <div
        className="fixed top-0 left-0 h-[3px] bg-orange-500 z-[100]"
        style={{
          width: `${scrollProgress * 100}%`,
          transition: 'width 0.1s linear',
        }}
      />

      <Navbar />

      <main className="flex-1 pt-[72px]">
        {children}
      </main>

      <Footer />
    </div>
  );
}
