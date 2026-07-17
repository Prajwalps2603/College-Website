'use client';
import { useEffect, useRef, useState } from 'react';
import { Users, BookOpen, GraduationCap, Trophy, Calendar } from 'lucide-react';

const stats = [
  { value: 600, suffix: '+', label: 'Students', sublabel: 'Currently Enrolled', icon: Users, color: '#D4AF37' },
  { value: 25, suffix: '+', label: 'Faculty', sublabel: 'Expert Educators', icon: GraduationCap, color: '#0B3D91' },
  { value: 3, suffix: '', label: 'Programs', sublabel: 'UG Courses Offered', icon: BookOpen, color: '#00C896' },
  { value: 100, suffix: '%', label: 'Support', sublabel: 'Placement Guidance', icon: Trophy, color: '#FF7A00' },
  { value: 15, suffix: '+', label: 'Years', sublabel: 'Of Excellence', icon: Calendar, color: '#D4AF37' },
];

function AnimatedCounter({ target, suffix, duration = 2000 }: { target: number; suffix: string; duration?: number }) {
  const [count, setCount] = useState(0);
  const countRef = useRef<number>(0);
  const animRef = useRef<number>();
  const startTimeRef = useRef<number>(0);
  const hasStarted = useRef(false);
  const elementRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted.current) {
          hasStarted.current = true;
          startTimeRef.current = performance.now();

          const animate = (now: number) => {
            const elapsed = now - startTimeRef.current;
            const progress = Math.min(elapsed / duration, 1);
            // Ease out cubic
            const eased = 1 - Math.pow(1 - progress, 3);
            const current = Math.round(eased * target);
            setCount(current);
            if (progress < 1) {
              animRef.current = requestAnimationFrame(animate);
            }
          };

          animRef.current = requestAnimationFrame(animate);
        }
      },
      { threshold: 0.5 }
    );

    if (elementRef.current) observer.observe(elementRef.current);

    return () => {
      observer.disconnect();
      if (animRef.current) cancelAnimationFrame(animRef.current);
    };
  }, [target, duration]);

  return <span ref={elementRef}>{count}{suffix}</span>;
}

export default function Statistics() {
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
    sectionRef.current?.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      style={{
        position: 'relative',
        zIndex: 10,
        padding: '100px 0',
        overflow: 'hidden',
        background: 'rgba(8, 27, 51, 0.98)',
      }}
    >
      {/* Background */}
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none',
        background: `
          radial-gradient(ellipse at 50% 0%, rgba(11, 61, 145, 0.3) 0%, transparent 60%),
          radial-gradient(ellipse at 50% 100%, rgba(212, 175, 55, 0.1) 0%, transparent 60%)
        `,
      }} />

      {/* Animated grid pattern */}
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none', opacity: 0.04,
        backgroundImage: `linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px),
                          linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)`,
        backgroundSize: '60px 60px',
      }} />

      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px', position: 'relative' }}>
        {/* Header */}
        <div className="reveal" style={{ textAlign: 'center', marginBottom: '72px' }}>
          <div className="section-badge" style={{ margin: '0 auto 20px', display: 'inline-flex' }}>
            By the Numbers
          </div>
          <h2 className="section-title">
            Our Impact in{' '}
            <span className="text-gradient-gold">Numbers</span>
          </h2>
        </div>

        {/* Stats Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '24px',
        }}>
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className="reveal"
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              <div
                className="glass"
                style={{
                  padding: '36px 24px',
                  borderRadius: '24px',
                  textAlign: 'center',
                  border: `1px solid ${stat.color}20`,
                  position: 'relative',
                  overflow: 'hidden',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-8px)';
                  e.currentTarget.style.boxShadow = `0 24px 60px ${stat.color}20`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'var(--glass-shadow)';
                }}
              >
                {/* Glow backdrop */}
                <div style={{
                  position: 'absolute', bottom: '-30px', left: '50%',
                  transform: 'translateX(-50%)',
                  width: '120px', height: '120px',
                  borderRadius: '50%',
                  background: `radial-gradient(circle, ${stat.color}20 0%, transparent 70%)`,
                  pointerEvents: 'none',
                }} />

                {/* Icon */}
                <div style={{
                  width: '56px', height: '56px', borderRadius: '16px',
                  background: `${stat.color}12`,
                  border: `1px solid ${stat.color}30`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  margin: '0 auto 20px',
                }}>
                  <stat.icon size={24} color={stat.color} />
                </div>

                {/* Counter */}
                <div className="stat-number" style={{ fontSize: '4rem', marginBottom: '8px' }}>
                  <AnimatedCounter target={stat.value} suffix={stat.suffix} />
                </div>

                <div style={{
                  fontSize: '18px', fontWeight: 700, color: 'white',
                  fontFamily: 'var(--font-serif)', marginBottom: '6px',
                }}>
                  {stat.label}
                </div>
                <div style={{ fontSize: '13px', color: 'rgba(255,255,255,0.45)' }}>
                  {stat.sublabel}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
