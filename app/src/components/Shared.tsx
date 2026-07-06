import { useEffect, useRef, useState, type ReactNode } from 'react';
import { useInView } from 'framer-motion';

/* ─────────────────────────────────────────────
   Animation helpers (mirrors Home.tsx exactly)
   ───────────────────────────────────────────── */

export const easeOutExpo = [0.16, 1, 0.3, 1] as [number, number, number, number];

export const fadeUp = {
  hidden: { opacity: 0, y: 60 },
  visible: (delay: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 1, ease: easeOutExpo, delay },
  }),
};

export const staggerContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12 },
  },
};

export const staggerChild = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: easeOutExpo },
  },
};

/* ─────────────────────────────────────────────
   Counter component (identical behavior to Home.tsx's)
   ───────────────────────────────────────────── */

export function Counter({
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
   PageHero — dedicated hero for interior pages
   (dark gradient over an image, kicker + title + subtitle)
   ───────────────────────────────────────────── */

export function PageHero({
  kicker,
  title,
  subtitle,
  image,
}: {
  kicker: string;
  title: string;
  subtitle: string;
  image: string;
}) {
  return (
    <section className="relative min-h-[52vh] flex items-end overflow-hidden">
      <div className="absolute inset-0 w-full h-full">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(to top, rgba(15,23,42,0.94) 0%, rgba(15,23,42,0.65) 45%, rgba(15,23,42,0.25) 100%)',
        }}
      />
      <div className="relative z-10 w-full max-w-[1280px] mx-auto px-[clamp(16px,4vw,64px)] pb-16 pt-32">
        <p className="font-ibmPlexMono font-medium text-[13px] text-orange-500 uppercase tracking-[0.1em] mb-4">
          {kicker}
        </p>
        <h1
          className="font-barlow font-extrabold text-white leading-[0.95] tracking-[-0.03em] max-w-[880px]"
          style={{ fontSize: 'clamp(36px, 6vw, 64px)' }}
        >
          {title}
        </h1>
        <p
          className="font-dmSans font-normal text-white/80 mt-6 max-w-[640px] leading-relaxed"
          style={{ fontSize: 'clamp(16px, 2vw, 20px)' }}
        >
          {subtitle}
        </p>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   SectionHeading — kicker + title + animated underline
   ───────────────────────────────────────────── */

export function SectionHeading({
  kicker,
  title,
  description,
  align = 'center',
  dark = false,
}: {
  kicker: string;
  title: string;
  description?: string;
  align?: 'center' | 'left';
  dark?: boolean;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-15% 0px' });

  return (
    <div ref={ref} className={align === 'center' ? 'text-center' : 'text-left'}>
      <div
        style={{
          opacity: isInView ? 1 : 0,
          transform: isInView ? 'translateY(0)' : 'translateY(40px)',
          transition: `opacity 0.8s ${cubicBezierCss}, transform 0.8s ${cubicBezierCss}`,
        }}
      >
        <p className="font-ibmPlexMono font-medium text-[13px] text-orange-500 uppercase tracking-[0.1em] mb-3">
          {kicker}
        </p>
        <h2
          className={`font-barlow font-bold tracking-[-0.02em] leading-tight ${
            dark ? 'text-white' : 'text-slate-900'
          }`}
          style={{ fontSize: 'clamp(32px, 5vw, 56px)' }}
        >
          {title}
        </h2>
        {description && (
          <p
            className={`font-dmSans font-normal text-[16px] leading-relaxed mt-4 ${
              dark ? 'text-white/70' : 'text-slate-600'
            } ${align === 'center' ? 'max-w-[640px] mx-auto' : 'max-w-[640px]'}`}
          >
            {description}
          </p>
        )}
        <div
          className={`h-[3px] bg-orange-500 mt-5 ${align === 'center' ? 'mx-auto' : ''}`}
          style={{
            width: isInView ? 40 : 0,
            transition: `width 0.6s ${cubicBezierCss} 0.3s`,
          }}
        />
      </div>
    </div>
  );
}

const cubicBezierCss = 'cubic-bezier(0.16,1,0.3,1)';

/* ─────────────────────────────────────────────
   RevealOnScroll — generic fade-up wrapper
   ───────────────────────────────────────────── */

export function RevealOnScroll({
  children,
  delay = 0,
  className = '',
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-15% 0px' });
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: isInView ? 1 : 0,
        transform: isInView ? 'translateY(0)' : 'translateY(50px)',
        transition: `opacity 0.9s ${cubicBezierCss} ${delay}s, transform 0.9s ${cubicBezierCss} ${delay}s`,
      }}
    >
      {children}
    </div>
  );
}
