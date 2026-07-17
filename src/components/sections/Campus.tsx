'use client';
import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { Monitor, BookOpen, FlaskConical, Dumbbell, TreePine, Coffee, Leaf, Trophy, GraduationCap, Sparkles } from 'lucide-react';

const facilities = [
  {
    title: 'Green Campus',
    description: 'Sprawling natural campus with lush greenery, clean air, and a serene learning environment surrounded by Karnataka\'s beautiful landscape.',
    image: '/images/campus_hero.jpg',
    icon: TreePine,
    color: '#00C896',
  },
  {
    title: 'Modern Library',
    description: 'Well-stocked library with thousands of books, journals, and digital resources. A quiet sanctuary for deep learning and research.',
    image: '/images/campus_library.jpg',
    icon: BookOpen,
    color: '#D4AF37',
  },
  {
    title: 'Smart Classrooms',
    description: 'Technology-enabled modern classrooms with smart boards, projectors, and comfortable seating designed for focused learning.',
    image: '/images/campus_classroom.jpg',
    icon: Monitor,
    color: '#0B3D91',
  },
  {
    title: 'Computer Lab',
    description: 'Fully equipped computer laboratory with high-speed internet, modern systems, and software tools to prepare students for the digital age.',
    image: '/images/campus_lab.jpg',
    icon: FlaskConical,
    color: '#FF7A00',
  },
  {
    title: 'Sports Ground',
    description: 'Large multi-sport playground for cricket, volleyball, and athletics. Physical fitness and sports are an integral part of campus life.',
    image: '/images/campus_playground.jpg',
    icon: Dumbbell,
    color: '#D4AF37',
  },
  {
    title: 'Student Life',
    description: 'Vibrant campus culture with cultural events, student clubs, social activities, and an inclusive community that makes college life memorable.',
    image: '/images/campus_hero.jpg',
    icon: Coffee,
    color: '#00C896',
  },
];

export default function Campus() {
  const sectionRef = useRef<HTMLElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);

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

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setStartX(e.pageX - (scrollRef.current?.offsetLeft || 0));
    setScrollLeft(scrollRef.current?.scrollLeft || 0);
  };
  const handleMouseUp = () => setIsDragging(false);
  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !scrollRef.current) return;
    e.preventDefault();
    const x = e.pageX - (scrollRef.current.offsetLeft || 0);
    const walk = (x - startX) * 2;
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <section
      id="campus"
      ref={sectionRef}
      className="section-padding"
      style={{
        position: 'relative',
        zIndex: 10,
        background: 'rgba(5, 15, 31, 0.97)',
        overflow: 'hidden',
      }}
    >
      {/* BG */}
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none',
        background: `
          radial-gradient(ellipse at 80% 20%, rgba(0, 200, 150, 0.06) 0%, transparent 50%),
          radial-gradient(ellipse at 10% 80%, rgba(212, 175, 55, 0.06) 0%, transparent 50%)
        `,
      }} />

      <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 24px', position: 'relative' }}>
        {/* Header */}
        <div className="reveal" style={{ textAlign: 'center', marginBottom: '64px' }}>
          <div className="section-badge" style={{ margin: '0 auto 20px', display: 'inline-flex' }}>
            Campus Life
          </div>
          <h2 className="section-title">
            Experience the{' '}
            <span className="text-gradient-gold">Campus</span>
          </h2>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            A beautiful, green, and modern campus designed to inspire learning, foster community,
            and create unforgettable memories.
          </p>
        </div>

        {/* Horizontal scroll marquee loop */}
        <div
          className="reveal"
          style={{
            padding: '20px 0 40px',
            overflow: 'hidden',
            width: '100%',
          }}
        >
          <div
            className="marquee-track"
            style={{
              display: 'flex',
              gap: '20px',
              width: 'max-content',
            }}
          >
            {[...facilities, ...facilities].map((facility, i) => (
            <div
              key={`${facility.title}-${i}`}
              className="card-3d"
              style={{ flexShrink: 0, width: '380px' }}
              onMouseEnter={() => setActiveIndex(i)}
            >
              <div
                className="glass card-3d-inner"
                style={{
                  borderRadius: '24px',
                  overflow: 'hidden',
                  border: `1px solid ${facility.color}25`,
                  transition: 'box-shadow 0.3s ease',
                  boxShadow: activeIndex === i ? `0 20px 60px ${facility.color}15` : '0 8px 32px rgba(0,0,0,0.3)',
                }}
              >
                {/* Image */}
                <div style={{ position: 'relative', height: '220px', overflow: 'hidden' }}>
                  <Image
                    src={facility.image}
                    alt={facility.title}
                    fill
                    style={{ objectFit: 'cover', transition: 'transform 0.6s ease' }}
                    onMouseEnter={(e) => ((e.target as HTMLImageElement).style.transform = 'scale(1.08)')}
                    onMouseLeave={(e) => ((e.target as HTMLImageElement).style.transform = 'scale(1)')}
                  />
                  {/* Overlay */}
                  <div style={{
                    position: 'absolute', inset: 0,
                    background: `linear-gradient(to bottom, transparent 50%, ${facility.color}30 100%)`,
                  }} />
                  {/* Icon badge */}
                  <div style={{
                    position: 'absolute', top: '16px', right: '16px',
                    width: '40px', height: '40px', borderRadius: '12px',
                    background: 'rgba(5,15,31,0.8)',
                    backdropFilter: 'blur(12px)',
                    border: `1px solid ${facility.color}40`,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                  }}>
                    <facility.icon size={18} color={facility.color} />
                  </div>
                </div>

                {/* Content */}
                <div style={{ padding: '24px' }}>
                  <h3 style={{
                    fontFamily: 'var(--font-serif)',
                    fontSize: '20px', fontWeight: 700,
                    color: 'white', marginBottom: '10px',
                  }}>{facility.title}</h3>
                  <p style={{
                    fontSize: '14px', color: 'rgba(255,255,255,0.6)',
                    lineHeight: 1.7,
                  }}>{facility.description}</p>
                </div>
              </div>
            </div>
          ))}
          </div>
        </div>

        <style>{`
          .marquee-track {
            animation: marquee 30s linear infinite;
          }
          .marquee-track:hover {
            animation-play-state: paused;
          }
          @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(calc(-50% - 10px)); }
          }
        `}</style>

        {/* Highlights grid */}
        <div className="reveal" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '16px',
          marginTop: '60px',
        }}>
          {[
            { label: 'Green & Serene Campus', icon: <Leaf size={24} color="rgba(255,255,255,0.8)" /> },
            { label: 'Large Sports Ground', icon: <Trophy size={24} color="rgba(255,255,255,0.8)" /> },
            { label: 'Modern Classrooms', icon: <GraduationCap size={24} color="rgba(255,255,255,0.8)" /> },
            { label: 'Rich Library', icon: <BookOpen size={24} color="rgba(255,255,255,0.8)" /> },
            { label: 'Computer Lab', icon: <Monitor size={24} color="rgba(255,255,255,0.8)" /> },
            { label: 'Vibrant Student Life', icon: <Sparkles size={24} color="rgba(255,255,255,0.8)" /> },
          ].map((item) => (
            <div key={item.label} className="glass" style={{
              padding: '18px 20px', borderRadius: '16px',
              display: 'flex', alignItems: 'center', gap: '12px',
            }}>
              <span>{item.icon}</span>
              <span style={{ fontSize: '14px', color: 'rgba(255,255,255,0.8)', fontWeight: 500 }}>{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
