'use client';
import { useEffect, useRef } from 'react';
import { Quote, Sparkles, User } from 'lucide-react';

export default function Principal() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('visible');
        });
      },
      { threshold: 0.1 }
    );
    sectionRef.current?.querySelectorAll('.reveal, .reveal-left, .reveal-right').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="section-padding"
      style={{
        position: 'relative',
        zIndex: 10,
        background: 'rgba(5, 15, 31, 0.97)',
        overflow: 'hidden',
      }}
    >
      {/* BG effects */}
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none',
        background: 'radial-gradient(ellipse at 50% 50%, rgba(212, 175, 55, 0.06) 0%, transparent 60%)',
      }} />
      <div className="orb orb-gold" style={{
        width: '500px', height: '500px',
        top: '-100px', left: '-100px', opacity: 0.3,
        animation: 'orbFloat 12s ease-in-out infinite',
      }} />

      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 24px', position: 'relative' }}>
        {/* Header */}
        <div className="reveal" style={{ textAlign: 'center', marginBottom: '72px' }}>
          <div className="section-badge" style={{ margin: '0 auto 20px', display: 'inline-flex' }}>
            Leadership
          </div>
          <h2 className="section-title">
            A Message From Our{' '}
            <span className="text-gradient-gold">Principal</span>
          </h2>
        </div>

        {/* Main Card */}
        <div
          className="gradient-border reveal"
          style={{ borderRadius: '32px' }}
        >
          <div
            className="liquid-glass"
            style={{
              borderRadius: '32px',
              padding: '40px',
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            {/* Decorative background */}
            <div style={{
              position: 'absolute', top: '-40px', right: '-40px',
              width: '300px', height: '300px',
              background: 'radial-gradient(circle, rgba(212,175,55,0.08) 0%, transparent 70%)',
              borderRadius: '50%',
              pointerEvents: 'none',
            }} />

            <div className="grid-responsive-2" style={{
              display: 'grid',
              gridTemplateColumns: '1fr 2.5fr',
              gap: '48px',
              alignItems: 'center',
            }}>
              {/* Portrait */}
              <div className="reveal-left" style={{ textAlign: 'center' }}>
                {/* Photo frame */}
                <div style={{
                  width: '140px', height: '140px',
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, rgba(11,61,145,0.4), rgba(212,175,55,0.3))',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  margin: '0 auto 20px',
                  border: '2px solid rgba(212,175,55,0.4)',
                  boxShadow: '0 0 30px rgba(212,175,55,0.2), 0 0 60px rgba(11,61,145,0.15)',
                  position: 'relative',
                }}>
                  <User size={60} color="rgba(255,255,255,0.7)" />
                  {/* Ring glow */}
                  <div style={{
                    position: 'absolute', inset: '-8px',
                    borderRadius: '50%',
                    border: '1px solid rgba(212,175,55,0.2)',
                    animation: 'pulseRing 3s ease-out infinite',
                  }} />
                </div>

                <div style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: '18px', fontWeight: 700, color: 'white', marginBottom: '4px',
                }}>
                  The Principal
                </div>
                <div style={{ fontSize: '13px', color: '#D4AF37', fontWeight: 500 }}>
                  Bharath Matha Degree College
                </div>
                <div style={{ fontSize: '12px', color: 'rgba(255,255,255,0.4)', marginTop: '4px' }}>
                  Koppa, Mysuru District
                </div>

                {/* Credentials */}
                <div style={{ marginTop: '24px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  {['M.A., Ph.D', 'University of Mysore', '15+ Years Experience'].map((cred) => (
                    <div key={cred} className="glass" style={{
                      padding: '6px 12px', borderRadius: '100px', fontSize: '11px',
                      color: 'rgba(255,255,255,0.6)',
                    }}>
                      {cred}
                    </div>
                  ))}
                </div>
              </div>

              {/* Quote */}
              <div className="reveal-right">
                {/* Large quote icon */}
                <div style={{ marginBottom: '28px' }}>
                  <Quote size={56} color="rgba(212,175,55,0.4)" fill="rgba(212,175,55,0.1)" />
                </div>

                <blockquote style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: 'clamp(1rem, 1.5vw, 1.25rem)',
                  fontWeight: 400,
                  color: 'rgba(255,255,255,0.85)',
                  lineHeight: 1.8,
                  marginBottom: '28px',
                  fontStyle: 'italic',
                  letterSpacing: '0.01em',
                }}>
                  "At Bharath Matha Degree College, we believe that education is not just about
                  acquiring knowledge — it is about shaping character, building confidence, and
                  igniting the spark of lifelong learning. Our commitment is to provide every
                  student with an environment where they can discover their potential, develop
                  their talents, and contribute meaningfully to society.
                  <br /><br />
                  We are proud to be affiliated with the University of Mysore and to serve the
                  students of Periyapatna Taluk and Mysuru District. Together, we are not just
                  building graduates — we are building the future leaders of Karnataka."
                </blockquote>

                {/* Signature line */}
                <div style={{
                  display: 'flex', alignItems: 'center', gap: '20px',
                  paddingTop: '24px',
                  borderTop: '1px solid rgba(212,175,55,0.2)',
                }}>
                  {/* Decorative line */}
                  <div style={{
                    width: '48px', height: '2px',
                    background: 'linear-gradient(90deg, #D4AF37, transparent)',
                  }} />
                  <div>
                    <div style={{ fontFamily: 'var(--font-serif)', fontSize: '16px', fontWeight: 700, color: '#D4AF37' }}>
                      — The Principal
                    </div>
                    <div style={{ fontSize: '12px', color: 'rgba(255,255,255,0.4)', marginTop: '2px' }}>
                      Bharath Matha Degree College, Koppa
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .grid-responsive {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
