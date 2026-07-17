'use client';
import { useEffect, useRef, useState } from 'react';
import { Star, Lightbulb, TrendingUp, Award, BookOpen, Globe, Shield, Heart, Zap, Target } from 'lucide-react';

const timeline = [
  { year: '2011', title: 'Foundation', description: 'Founded with a vision to bring quality higher education to Periyapatna Taluk and Mysuru District.', color: '#D4AF37', Icon: Star },
  { year: '2012', title: 'University Affiliation', description: "Received formal affiliation from the University of Mysore — one of Karnataka's most prestigious institutions.", color: '#0B3D91', Icon: Globe },
  { year: '2014', title: 'B.Com & BBA Launch', description: 'Expanded with Bachelor of Commerce and BBA programs, catering to commerce and management aspirants.', color: '#00C896', Icon: BookOpen },
  { year: '2017', title: 'Campus Development', description: 'New classrooms, computer labs, and a sprawling sports ground added to enhance student life.', color: '#FF7A00', Icon: TrendingUp },
  { year: '2019', title: 'BA Programs', description: 'Launched humanities programs — opening doors to civil services, journalism, and social sciences.', color: '#D4AF37', Icon: Lightbulb },
  { year: '2026', title: 'Future Forward', description: 'Growing stronger with new programs, enhanced facilities, and a commitment to holistic education.', color: '#0B3D91', Icon: Award },
];

const stats = [
  { value: '15+', label: 'Years of Excellence' },
  { value: '3', label: 'UG Programs' },
  { value: '500+', label: 'Students Enrolled' },
  { value: '100%', label: 'Affiliated & Recognized' },
];

const values = [
  { Icon: Shield, title: 'Integrity', desc: 'Academic honesty and ethical conduct at the core of everything we do.', color: '#D4AF37' },
  { Icon: Heart, title: 'Empathy', desc: 'A nurturing environment where every student is seen, heard, and supported.', color: '#FF7A00' },
  { Icon: Zap, title: 'Excellence', desc: 'Relentless pursuit of the highest standards in academics and beyond.', color: '#00C896' },
  { Icon: Target, title: 'Purpose', desc: 'Education with direction — building careers and shaping responsible citizens.', color: '#0B3D91' },
];

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const [activeYear, setActiveYear] = useState(0);
  const [hoveredValue, setHoveredValue] = useState<number | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add('visible'); }),
      { threshold: 0.08 }
    );
    sectionRef.current?.querySelectorAll('.reveal, .reveal-left, .reveal-right').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const timer = setInterval(() => setActiveYear((p) => (p + 1) % timeline.length), 3000);
    return () => clearInterval(timer);
  }, []);

  const active = timeline[activeYear];
  const ActiveIcon = active.Icon;

  return (
    <section
      id="about"
      ref={sectionRef}
      className="section-padding"
      style={{ position: 'relative', zIndex: 10, background: 'rgba(5, 15, 31, 0.97)', overflow: 'hidden' }}
    >
      <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', background: `
        radial-gradient(ellipse at 90% 20%, rgba(11,61,145,0.12) 0%, transparent 50%),
        radial-gradient(ellipse at 5% 80%, rgba(212,175,55,0.07) 0%, transparent 50%)
      ` }} />

      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px', position: 'relative' }}>

        {/* Header */}
        <div className="reveal" style={{ textAlign: 'center', marginBottom: '80px' }}>
          <div className="section-badge" style={{ margin: '0 auto 20px', display: 'inline-flex' }}>Our Story</div>
          <h2 className="section-title">
            Built on <span className="text-gradient-gold">Purpose</span>,{' '}
            Driven by <span style={{ color: 'rgba(255,255,255,0.85)' }}>Excellence</span>
          </h2>
          <p className="section-subtitle" style={{ margin: '0 auto', maxWidth: '600px' }}>
            From a single dream in 2011 to a thriving institution shaping hundreds of lives — this is our story.
          </p>
        </div>

        {/* Stats row */}
        <div className="reveal grid-responsive-4" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '16px', marginBottom: '100px' }}>
          {stats.map((s) => (
            <div key={s.label} className="glass" style={{
              padding: '32px 20px', borderRadius: '24px', textAlign: 'center', position: 'relative', overflow: 'hidden',
              transition: 'transform 0.3s ease', cursor: 'default',
            }}
              onMouseEnter={(e) => (e.currentTarget.style.transform = 'translateY(-6px)')}
              onMouseLeave={(e) => (e.currentTarget.style.transform = 'translateY(0)')}
            >
              <div style={{ fontSize: '3rem', fontWeight: 800, fontFamily: 'var(--font-serif)', background: 'linear-gradient(135deg, #D4AF37, #fff)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', lineHeight: 1 }}>
                {s.value}
              </div>
              <div style={{ fontSize: '13px', color: 'rgba(255,255,255,0.5)', marginTop: '10px', letterSpacing: '0.04em' }}>{s.label}</div>
              <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '2px', background: 'linear-gradient(90deg, transparent, #D4AF37, transparent)' }} />
            </div>
          ))}
        </div>

        {/* Interactive Timeline */}
        <div className="reveal" style={{ marginBottom: '100px' }}>
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <div className="section-badge" style={{ margin: '0 auto 16px', display: 'inline-flex' }}>Our Journey</div>
            <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '2rem', fontWeight: 700, color: 'white' }}>
              A Decade of <span className="text-gradient-gold">Milestones</span>
            </h3>
          </div>

          {/* Year Pills */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: '8px', marginBottom: '48px', flexWrap: 'wrap' }}>
            {timeline.map((item, i) => (
              <button key={item.year} onClick={() => setActiveYear(i)} style={{
                padding: '8px 20px', borderRadius: '100px',
                border: `1px solid ${activeYear === i ? item.color : 'rgba(255,255,255,0.1)'}`,
                background: activeYear === i ? `${item.color}20` : 'transparent',
                color: activeYear === i ? item.color : 'rgba(255,255,255,0.5)',
                fontWeight: activeYear === i ? 700 : 400,
                fontSize: '13px', cursor: 'pointer', transition: 'all 0.3s ease',
              }}>
                {item.year}
              </button>
            ))}
          </div>

          <div className="grid-responsive-2" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px', alignItems: 'center' }}>
            {/* Left: Detail */}
            <div style={{ position: 'relative' }}>
              <div style={{
                fontSize: 'clamp(5rem, 15vw, 9rem)', fontFamily: 'var(--font-serif)', fontWeight: 900,
                color: `${active.color}12`, position: 'absolute', top: '-20px', left: '-20px',
                lineHeight: 1, userSelect: 'none', transition: 'color 0.5s ease',
              }}>
                {active.year}
              </div>
              <div style={{ position: 'relative' }}>
                <div style={{
                  display: 'inline-flex', alignItems: 'center', gap: '10px',
                  padding: '6px 16px', borderRadius: '100px',
                  background: `${active.color}20`, border: `1px solid ${active.color}40`,
                  marginBottom: '20px', transition: 'all 0.4s ease',
                }}>
                  <ActiveIcon size={14} color={active.color} />
                  <span style={{ fontSize: '12px', fontWeight: 700, color: active.color }}>{active.year}</span>
                </div>
                <h3 style={{
                  fontFamily: 'var(--font-serif)', fontSize: '2.2rem', fontWeight: 800,
                  color: 'white', marginBottom: '16px', transition: 'all 0.4s ease',
                }}>{active.title}</h3>
                <p style={{ fontSize: '16px', color: 'rgba(255,255,255,0.65)', lineHeight: 1.8 }}>
                  {active.description}
                </p>
                <div style={{ marginTop: '32px', display: 'flex', gap: '8px' }}>
                  {timeline.map((_, i) => (
                    <div key={i} onClick={() => setActiveYear(i)} style={{
                      height: '3px', flex: 1, borderRadius: '2px', cursor: 'pointer',
                      background: i === activeYear ? active.color : 'rgba(255,255,255,0.1)',
                      transition: 'background 0.4s ease',
                    }} />
                  ))}
                </div>
              </div>
            </div>

            {/* Right: Creative Timeline Path */}
            <div style={{ position: 'relative', paddingLeft: '24px' }}>
              {/* Connecting vertical line */}
              <div style={{
                position: 'absolute', top: '24px', bottom: '24px', left: '42px',
                width: '2px', background: 'rgba(255,255,255,0.06)', zIndex: 0,
              }} />

              <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
                {timeline.map((item, i) => {
                  const ItemIcon = item.Icon;
                  return (
                    <div key={item.year} onClick={() => setActiveYear(i)} style={{
                      position: 'relative', zIndex: 1, cursor: 'pointer',
                      display: 'flex', alignItems: 'center', gap: '24px',
                      opacity: i === activeYear ? 1 : 0.5,
                      transform: i === activeYear ? 'translateX(8px)' : 'none',
                      transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
                    }}>
                      <div style={{
                        width: '40px', height: '40px', borderRadius: '50%', flexShrink: 0,
                        background: i === activeYear ? item.color : '#0a1120',
                        border: `2px solid ${i === activeYear ? item.color : 'rgba(255,255,255,0.1)'}`,
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        boxShadow: i === activeYear ? `0 0 20px ${item.color}50` : 'none',
                        transition: 'all 0.4s ease',
                      }}>
                        <ItemIcon size={18} color={i === activeYear ? '#fff' : 'rgba(255,255,255,0.4)'} />
                      </div>
                      <div>
                        <div style={{ fontSize: '12px', color: i === activeYear ? item.color : 'rgba(255,255,255,0.4)', fontWeight: 700, letterSpacing: '0.08em', transition: 'color 0.4s ease' }}>{item.year}</div>
                        <div style={{ fontSize: '15px', color: 'white', fontWeight: i === activeYear ? 600 : 400, transition: 'font-weight 0.4s ease' }}>{item.title}</div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Core Values */}
        <div className="reveal">
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <div className="section-badge" style={{ margin: '0 auto 16px', display: 'inline-flex' }}>Core Values</div>
            <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '2rem', fontWeight: 700, color: 'white' }}>
              What We <span className="text-gradient-gold">Stand For</span>
            </h3>
          </div>
          <div className="grid-responsive-4" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '20px' }}>
            {values.map((v, i) => {
              const ValIcon = v.Icon;
              return (
                <div key={v.title}
                  onMouseEnter={() => setHoveredValue(i)}
                  onMouseLeave={() => setHoveredValue(null)}
                  style={{
                    padding: '32px 24px', borderRadius: '24px', textAlign: 'center', cursor: 'default',
                    border: `1px solid ${hoveredValue === i ? `${v.color}40` : 'rgba(255,255,255,0.06)'}`,
                    background: hoveredValue === i ? `${v.color}10` : 'rgba(255,255,255,0.03)',
                    transition: 'all 0.4s ease',
                    transform: hoveredValue === i ? 'translateY(-8px)' : 'none',
                  }}
                >
                  <div style={{
                    width: '60px', height: '60px', borderRadius: '18px',
                    background: `${v.color}15`, border: `1px solid ${v.color}30`,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    margin: '0 auto 20px',
                    boxShadow: hoveredValue === i ? `0 0 24px ${v.color}30` : 'none',
                    transition: 'box-shadow 0.4s ease',
                  }}>
                    <ValIcon size={26} color={v.color} />
                  </div>
                  <h4 style={{ fontFamily: 'var(--font-serif)', fontSize: '18px', fontWeight: 700, color: 'white', marginBottom: '10px' }}>{v.title}</h4>
                  <p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.55)', lineHeight: 1.7 }}>{v.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
