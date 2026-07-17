'use client';
import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { ChevronDown, MapPin, Award, BookOpen, Users } from 'lucide-react';

const floatingCards = [
  { icon: Award, label: 'Established', value: '2011', color: '#D4AF37' },
  { icon: BookOpen, label: 'Affiliated To', value: 'University of Mysore', color: '#0B3D91' },
  { icon: MapPin, label: 'Location', value: 'Koppa, Mysuru', color: '#00C896' },
  { icon: Users, label: 'Education', value: 'Holistic & Modern', color: '#FF7A00' },
];

const words = ["Empowering", "Minds.", "Building", "Futures.", "Creating", "Leaders."];

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 2;
      const y = (e.clientY / window.innerHeight - 0.5) * 2;
      setMousePos({ x, y });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % words.length);
    }, 600);
    return () => clearInterval(interval);
  }, []);

  const scrollToAbout = () => {
    document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      ref={sectionRef}
      style={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        background: 'var(--deep-navy-2)',
      }}
    >
      {/* Animated Aurora Background */}
      <div style={{ position: 'absolute', inset: 0, zIndex: 1 }}>
        {/* Main gradient */}
        <div style={{
          position: 'absolute', inset: 0,
          background: `
            radial-gradient(ellipse at 15% 40%, rgba(11, 61, 145, 0.7) 0%, transparent 55%),
            radial-gradient(ellipse at 85% 20%, rgba(212, 175, 55, 0.2) 0%, transparent 45%),
            radial-gradient(ellipse at 50% 90%, rgba(0, 200, 150, 0.15) 0%, transparent 45%),
            radial-gradient(ellipse at 75% 70%, rgba(255, 122, 0, 0.1) 0%, transparent 40%),
            #050F1F
          `,
        }} />

        {/* Moving aurora orbs */}
        <div className="orb orb-blue" style={{
          width: '600px', height: '600px',
          top: '-100px', left: '-100px',
          animation: 'orbFloat 10s ease-in-out infinite',
          opacity: 0.6,
        }} />
        <div className="orb orb-gold" style={{
          width: '400px', height: '400px',
          top: '20%', right: '-50px',
          animation: 'orbFloat 8s ease-in-out 2s infinite',
          opacity: 0.5,
        }} />
        <div className="orb orb-green" style={{
          width: '300px', height: '300px',
          bottom: '10%', left: '20%',
          animation: 'orbFloat 12s ease-in-out 4s infinite',
          opacity: 0.4,
        }} />

        {/* Light rays */}
        <div style={{
          position: 'absolute', inset: 0,
          background: 'conic-gradient(from 180deg at 20% 30%, transparent 0deg, rgba(11, 61, 145, 0.08) 40deg, transparent 80deg)',
          animation: 'orbFloat 15s ease-in-out infinite',
        }} />
      </div>

      {/* Campus image with parallax */}
      <div style={{
        position: 'absolute', inset: 0, zIndex: 2,
        transform: `translate(${mousePos.x * -10}px, ${mousePos.y * -10}px)`,
        transition: 'transform 0.5s ease',
      }}>
        <Image
          src="/images/campus_hero.jpg"
          alt="Bharath Matha Degree College Campus"
          fill
          style={{ objectFit: 'cover', opacity: 0.15 }}
          priority
        />
      </div>

      {/* Dark overlay */}
      <div style={{
        position: 'absolute', inset: 0, zIndex: 3,
        background: 'linear-gradient(to bottom, rgba(5,15,31,0.3) 0%, rgba(5,15,31,0.1) 50%, rgba(5,15,31,0.8) 100%)',
      }} />

      {/* Main content */}
      <div className="hero-padding" style={{
        position: 'relative', zIndex: 5,
        textAlign: 'center',
        padding: '100px 24px 0',
        maxWidth: '1000px',
        transform: `translate(${mousePos.x * 5}px, ${mousePos.y * 5}px)`,
        transition: 'transform 0.6s ease',
      }}>

        {/* Badge */}
        <div className="section-badge" style={{ margin: '0 auto 24px', display: 'inline-flex' }}>
          <span style={{ fontSize: '10px' }}>✦</span>
          Affiliated to University of Mysore • Est. 2011
          <span style={{ fontSize: '10px' }}>✦</span>
        </div>

        {/* Main headline */}
        <h1 className="hero-title" style={{
          fontFamily: 'var(--font-serif)',
          fontSize: 'clamp(3rem, 7vw, 6.5rem)',
          fontWeight: 800,
          lineHeight: 1.1,
          letterSpacing: '-0.02em',
          marginBottom: '24px',
          color: 'white',
        }}>
          <span style={{ display: 'block', marginBottom: '8px' }}>Empowering Minds.</span>
          <span className="text-gradient-gold" style={{ display: 'block', marginBottom: '8px' }}>Building Futures.</span>
          <span style={{ display: 'block' }}>Creating Leaders.</span>
        </h1>

        {/* Subheading */}
        <p style={{
          fontSize: 'clamp(1rem, 2vw, 1.3rem)',
          color: 'rgba(255,255,255,0.7)',
          marginBottom: '48px',
          fontFamily: 'var(--font-sans)',
          letterSpacing: '0.02em',
          fontWeight: 300,
        }}>
          Bharath Matha Degree College, Koppa — Mysuru District, Karnataka
        </p>

        {/* CTA Buttons */}
        <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '80px' }}>
          <a
            href="#campus"
            onClick={(e) => { e.preventDefault(); document.querySelector('#campus')?.scrollIntoView({ behavior: 'smooth' }); }}
            className="btn-primary magnetic-btn"
          >
            Explore Campus
          </a>
          <a
            href="#admissions"
            onClick={(e) => { e.preventDefault(); document.querySelector('#admissions')?.scrollIntoView({ behavior: 'smooth' }); }}
            className="btn-gold magnetic-btn"
          >
            ✦ Admissions Open 2026
          </a>
          <a
            href="#gallery"
            onClick={(e) => { e.preventDefault(); document.querySelector('#gallery')?.scrollIntoView({ behavior: 'smooth' }); }}
            className="btn-glass magnetic-btn"
          >
            Virtual Tour
          </a>
        </div>

        {/* Floating info cards */}
        <div style={{
          display: 'flex',
          gap: '12px',
          justifyContent: 'center',
          flexWrap: 'wrap',
        }}>
          {floatingCards.map((card, i) => (
            <div
              key={card.label}
              className="glass float-anim"
              style={{
                padding: '14px 20px',
                borderRadius: '16px',
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                animationDelay: `${i * 0.5}s`,
                animationDuration: `${4 + i * 0.5}s`,
              }}
            >
              <div style={{
                width: '36px', height: '36px',
                borderRadius: '10px',
                background: `${card.color}20`,
                border: `1px solid ${card.color}40`,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                flexShrink: 0,
              }}>
                <card.icon size={16} color={card.color} />
              </div>
              <div style={{ textAlign: 'left' }}>
                <div style={{ fontSize: '10px', color: 'rgba(255,255,255,0.5)', letterSpacing: '0.1em', textTransform: 'uppercase' }}>{card.label}</div>
                <div style={{ fontSize: '13px', fontWeight: 600, color: 'white', marginTop: '2px' }}>{card.value}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={scrollToAbout}
        style={{
          position: 'absolute',
          bottom: '40px',
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 10,
          background: 'none',
          border: 'none',
          cursor: 'pointer',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '8px',
          color: 'rgba(255,255,255,0.5)',
          fontSize: '11px',
          letterSpacing: '0.2em',
          textTransform: 'uppercase',
        }}
        aria-label="Scroll down"
      >
        <span>Scroll</span>
        <div style={{
          width: '30px', height: '50px',
          border: '1.5px solid rgba(255,255,255,0.2)',
          borderRadius: '100px',
          display: 'flex',
          alignItems: 'flex-start',
          justifyContent: 'center',
          padding: '6px',
        }}>
          <div style={{
            width: '4px', height: '8px',
            background: '#D4AF37',
            borderRadius: '2px',
            animation: 'scrollDot 1.5s ease-in-out infinite',
          }} />
        </div>
        <ChevronDown size={16} style={{ animation: 'floatUpDown 1.5s ease-in-out infinite' }} />
      </button>

      <style>{`
        @keyframes scrollDot {
          0% { transform: translateY(0); opacity: 1; }
          100% { transform: translateY(16px); opacity: 0; }
        }
      `}</style>
    </section>
  );
}
