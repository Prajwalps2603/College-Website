'use client';
import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { Home, Info, BookOpen, TreePine, Image as ImageIcon, Calendar, GraduationCap, Phone } from 'lucide-react';

const navLinks = [
  { label: 'Home',       href: '#home',       id: 'home',       Icon: Home },
  { label: 'About',      href: '#about',      id: 'about',      Icon: Info },
  { label: 'Courses',    href: '#courses',    id: 'courses',    Icon: BookOpen },
  { label: 'Campus',     href: '#campus',     id: 'campus',     Icon: TreePine },
  { label: 'Gallery',    href: '#gallery',    id: 'gallery',    Icon: ImageIcon },
  { label: 'Events',     href: '#events',     id: 'events',     Icon: Calendar },
  { label: 'Admissions', href: '#admissions', id: 'admissions', Icon: GraduationCap },
  { label: 'Contact',    href: '#contact',    id: 'contact',    Icon: Phone },
];

export default function Navbar() {
  const [scrolled, setScrolled]       = useState(false);
  const [mobileOpen, setMobileOpen]   = useState(false);
  const [activeLink, setActiveLink]   = useState('home');
  const [logoVisible, setLogoVisible] = useState(false);
  const indicatorRef = useRef<HTMLDivElement>(null);
  const navRef       = useRef<HTMLDivElement>(null);

  /* ── scroll shrink + logo reveal ── */
  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 60);
      setLogoVisible(y > 120);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  /* ── scroll spy via IntersectionObserver ── */
  useEffect(() => {
    const sectionIds = navLinks.map((l) => l.id);
    const observers: IntersectionObserver[] = [];

    const cb = (id: string) => (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) setActiveLink(id);
      });
    };

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(cb(id), {
        rootMargin: '-50% 0px -49% 0px',
        threshold: 0,
      });
      obs.observe(el);
      observers.push(obs);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  const scrollTo = (href: string, id: string) => {
    setActiveLink(id);
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  /* ── magnetic effect ── */
  const onMagMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const b = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - b.left - b.width / 2) * 0.25;
    const y = (e.clientY - b.top  - b.height / 2) * 0.25;
    e.currentTarget.style.transform = `translate(${x}px,${y}px)`;
  };
  const onMagLeave = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.currentTarget.style.transform = 'translate(0,0)';
  };

  return (
    <>
      {/* ── Standalone Logo + Name (top-left) ── */}
      <div
        style={{
          position: 'fixed',
          top: scrolled ? '14px' : '22px',
          left: '28px',
          zIndex: 9100,
          display: 'flex',
          alignItems: 'center',
          gap: '12px',
          opacity: logoVisible ? 1 : 0,
          transform: logoVisible ? 'translateY(0)' : 'translateY(-8px)',
          transition: 'opacity 0.4s ease, transform 0.4s ease, top 0.4s ease',
          pointerEvents: logoVisible ? 'auto' : 'none',
        }}
      >
        <div
          style={{
            width: '42px', height: '42px',
            borderRadius: '50%',
            overflow: 'hidden',
            border: '2px solid rgba(212,175,55,0.5)',
            boxShadow: '0 0 18px rgba(212,175,55,0.3)',
            flexShrink: 0,
            background: 'rgba(5,15,31,0.8)',
            backdropFilter: 'blur(12px)',
          }}
        >
          <Image src="/images/logo.png" alt="BMDC Logo" width={42} height={42} style={{ objectFit: 'cover' }} />
        </div>
        <div
          className="liquid-glass logo-text-container"
          style={{
            borderRadius: '100px',
            padding: '6px 16px',
          }}
        >
          <div style={{ fontFamily: 'var(--font-serif)', fontSize: '13px', fontWeight: 700, color: 'white', lineHeight: 1.3, whiteSpace: 'nowrap' }}>
            Bharath Matha Degree College
          </div>
          <div style={{ fontSize: '10px', color: 'rgba(212,175,55,0.8)', letterSpacing: '0.05em' }}>
            Koppa · Mysuru District
          </div>
        </div>
      </div>

      {/* ── Floating Glass Navbar (centered, auto-width) ── */}
      <nav
        className="mobile-nav-container"
        style={{
          position: 'fixed',
          top: scrolled ? '12px' : '20px',
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 9000,
          transition: 'all 0.4s cubic-bezier(0.16,1,0.3,1)',
          width: 'fit-content',
        }}
      >
        <div
          className="liquid-glass mobile-nav-inner"
          style={{
            borderRadius: '100px',
            padding: scrolled ? '6px 12px' : '8px 16px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '2px',
            transition: 'all 0.4s cubic-bezier(0.16,1,0.3,1)',
          }}
        >
          {/* Mobile hamburger (Left side on mobile) */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="mobile-toggle"
            aria-label="Toggle menu"
            style={{
              display: 'none',
              background: 'rgba(255,255,255,0.1)',
              border: '1px solid rgba(255,255,255,0.15)',
              borderRadius: '10px',
              width: '38px', height: '38px',
              alignItems: 'center', justifyContent: 'center',
              cursor: 'pointer',
              color: 'white',
              flexShrink: 0,
            }}
          >
            <div style={{ display: 'flex', flexDirection: 'column', gap: '4.5px', padding: '4px' }}>
              <div style={{ width: '18px', height: '1.5px', background: mobileOpen ? '#D4AF37' : 'white', borderRadius: '2px', transition: 'all 0.3s', transform: mobileOpen ? 'rotate(45deg) translate(4.5px, 4.5px)' : 'none' }} />
              <div style={{ width: '14px', height: '1.5px', background: mobileOpen ? '#D4AF37' : 'white', borderRadius: '2px', transition: 'all 0.3s', opacity: mobileOpen ? 0 : 1 }} />
              <div style={{ width: '18px', height: '1.5px', background: mobileOpen ? '#D4AF37' : 'white', borderRadius: '2px', transition: 'all 0.3s', transform: mobileOpen ? 'rotate(-45deg) translate(4.5px, -4.5px)' : 'none' }} />
            </div>
          </button>

          {/* Mobile Title */}
          <div className="mobile-nav-title" style={{ display: 'none', alignItems: 'center', marginLeft: '12px' }}>
            <span style={{ fontFamily: 'var(--font-serif)', fontSize: '18px', fontWeight: 800, color: 'white', letterSpacing: '0.02em' }}>
              Bharath Matha
            </span>
          </div>

          {/* Nav links (Desktop) */}
          <div
            ref={navRef}
            style={{ display: 'flex', alignItems: 'center', gap: '2px', flex: 1, justifyContent: 'center' }}
            className="nav-links-desktop"
          >
            {navLinks.map(({ label, href, id, Icon }) => {
              const isActive = activeLink === id;
              return (
                <a
                  key={id}
                  href={href}
                  onClick={(e) => { e.preventDefault(); scrollTo(href, id); }}
                  onMouseMove={onMagMove}
                  onMouseLeave={onMagLeave}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '4px',
                    padding: '6px 10px',
                    borderRadius: '100px',
                    fontSize: '12px',
                    fontWeight: isActive ? 600 : 400,
                    color: isActive ? 'white' : 'rgba(255,255,255,0.6)',
                    background: isActive
                      ? 'linear-gradient(135deg, rgba(11,61,145,0.6), rgba(212,175,55,0.2))'
                      : 'transparent',
                    border: isActive ? '1px solid rgba(212,175,55,0.25)' : '1px solid transparent',
                    textDecoration: 'none',
                    transition: 'all 0.25s ease',
                    whiteSpace: 'nowrap',
                    boxShadow: isActive ? '0 2px 12px rgba(11,61,145,0.3)' : 'none',
                  }}
                  onMouseEnter={(e) => {
                    if (!isActive) {
                      e.currentTarget.style.color = 'white';
                      e.currentTarget.style.background = 'rgba(255,255,255,0.08)';
                    }
                  }}
                >
                  <Icon
                    size={13}
                    style={{
                      color: isActive ? '#D4AF37' : 'rgba(255,255,255,0.5)',
                      transition: 'color 0.25s',
                      flexShrink: 0,
                    }}
                  />
                  {label}
                </a>
              );
            })}
          </div>
        </div>
      </nav>

      {/* ── Mobile Fullscreen Menu ── */}
      <div
        style={{
          position: 'fixed',
          inset: 0,
          zIndex: 8999,
          background: 'rgba(5,10,24,0.97)',
          backdropFilter: 'blur(24px)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '8px',
          transition: 'opacity 0.3s ease, transform 0.3s ease',
          opacity: mobileOpen ? 1 : 0,
          transform: mobileOpen ? 'translateY(0)' : 'translateY(-20px)',
          pointerEvents: mobileOpen ? 'auto' : 'none',
        }}
      >
        {navLinks.map(({ label, href, id, Icon }, i) => {
          const isActive = activeLink === id;
          return (
            <a
              key={id}
              href={href}
              onClick={(e) => { e.preventDefault(); scrollTo(href, id); }}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '14px',
                padding: '14px 32px',
                borderRadius: '16px',
                background: isActive ? 'rgba(212,175,55,0.1)' : 'transparent',
                border: `1px solid ${isActive ? 'rgba(212,175,55,0.3)' : 'transparent'}`,
                fontFamily: 'var(--font-serif)',
                fontSize: '22px',
                fontWeight: 600,
                color: isActive ? '#D4AF37' : 'white',
                textDecoration: 'none',
                transition: 'all 0.2s',
                animationDelay: `${i * 0.04}s`,
                width: '260px',
              }}
            >
              <Icon size={20} color={isActive ? '#D4AF37' : 'rgba(255,255,255,0.5)'} />
              {label}
            </a>
          );
        })}
      </div>

      <style>{`
        @media (max-width: 1100px) {
          .logo-text-container { display: none !important; }
        }
        @media (max-width: 900px) {
          .nav-links-desktop { display: none !important; }
          .mobile-toggle { display: flex !important; }
          .mobile-nav-title { display: flex !important; }
          
          .mobile-nav-container {
            width: calc(100% - 32px) !important;
            left: 16px !important;
            transform: none !important;
          }
          .mobile-nav-inner {
            justify-content: flex-start !important;
            padding: 8px 12px !important;
          }
        }
        @media (min-width: 901px) {
          .mobile-toggle { display: none !important; }
        }
      `}</style>
    </>
  );
}
