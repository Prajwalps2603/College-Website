'use client';
import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { X, ZoomIn } from 'lucide-react';

const galleryImages = [
  { src: '/images/campus_hero.jpg', alt: 'Campus Overview', category: 'Campus', span: 'tall' },
  { src: '/images/campus_classroom.jpg', alt: 'Smart Classroom', category: 'Academic', span: 'normal' },
  { src: '/images/campus_library.jpg', alt: 'Library', category: 'Facilities', span: 'normal' },
  { src: '/images/campus_playground.jpg', alt: 'Sports Ground', category: 'Sports', span: 'wide' },
  { src: '/images/campus_lab.jpg', alt: 'Computer Lab', category: 'Technology', span: 'normal' },
  { src: '/images/campus_hero.jpg', alt: 'Green Campus', category: 'Campus', span: 'normal' },
  { src: '/images/campus_classroom.jpg', alt: 'Lecture Hall', category: 'Academic', span: 'tall' },
  { src: '/images/campus_library.jpg', alt: 'Study Area', category: 'Facilities', span: 'normal' },
  { src: '/images/campus_playground.jpg', alt: 'Athletics', category: 'Sports', span: 'normal' },
];

const categories = ['All', 'Campus', 'Academic', 'Facilities', 'Sports', 'Technology'];

export default function Gallery() {
  const sectionRef = useRef<HTMLElement>(null);
  const [selected, setSelected] = useState<number | null>(null);
  const [activeCategory, setActiveCategory] = useState('All');

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

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelected(null);
      if (e.key === 'ArrowRight' && selected !== null) setSelected(Math.min(selected + 1, filteredImages.length - 1));
      if (e.key === 'ArrowLeft' && selected !== null) setSelected(Math.max(selected - 1, 0));
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  });

  const filteredImages = activeCategory === 'All'
    ? galleryImages
    : galleryImages.filter((img) => img.category === activeCategory);

  return (
    <section
      id="gallery"
      ref={sectionRef}
      className="section-padding"
      style={{
        position: 'relative',
        zIndex: 10,
        background: 'rgba(8, 27, 51, 0.98)',
      }}
    >
      <div style={{ maxWidth: '1300px', margin: '0 auto', padding: '0 24px', position: 'relative' }}>
        {/* Header */}
        <div className="reveal" style={{ textAlign: 'center', marginBottom: '56px' }}>
          <div className="section-badge" style={{ margin: '0 auto 20px', display: 'inline-flex' }}>
            Photo Gallery
          </div>
          <h2 className="section-title">
            Life at{' '}
            <span className="text-gradient-gold">BMDC</span>
          </h2>
          <p className="section-subtitle" style={{ margin: '0 auto 32px' }}>
            A glimpse into the vibrant campus life, world-class facilities, and the
            beautiful environment of Bharath Matha Degree College.
          </p>

          {/* Category filter */}
          <div style={{ display: 'flex', gap: '8px', justifyContent: 'center', flexWrap: 'wrap' }}>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                style={{
                  padding: '8px 20px',
                  borderRadius: '100px',
                  border: `1px solid ${activeCategory === cat ? '#D4AF37' : 'rgba(255,255,255,0.15)'}`,
                  background: activeCategory === cat ? 'rgba(212,175,55,0.15)' : 'transparent',
                  color: activeCategory === cat ? '#D4AF37' : 'rgba(255,255,255,0.6)',
                  fontSize: '13px',
                  fontWeight: 500,
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  fontFamily: 'var(--font-sans)',
                }}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Masonry Grid */}
        <div
          className="masonry-grid reveal masonry-grid-responsive"
          style={{ columns: 3, columnGap: '16px' }}
        >
          {filteredImages.map((img, i) => (
            <div
              key={`${img.src}-${i}`}
              className="masonry-item"
              onClick={() => setSelected(i)}
              style={{
                breakInside: 'avoid',
                marginBottom: '16px',
                borderRadius: '16px',
                overflow: 'hidden',
                cursor: 'pointer',
                position: 'relative',
                height: img.span === 'tall' ? '400px' : '240px',
                border: '1px solid rgba(255,255,255,0.08)',
              }}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                style={{
                  objectFit: 'cover',
                  transition: 'transform 0.5s ease',
                }}
                onMouseEnter={(e) => ((e.target as HTMLImageElement).style.transform = 'scale(1.08)')}
                onMouseLeave={(e) => ((e.target as HTMLImageElement).style.transform = 'scale(1)')}
              />

              {/* Hover overlay */}
              <div style={{
                position: 'absolute', inset: 0,
                background: 'linear-gradient(to top, rgba(5,15,31,0.85) 0%, transparent 60%)',
                opacity: 0, transition: 'opacity 0.3s ease',
                display: 'flex', flexDirection: 'column',
                justifyContent: 'flex-end', alignItems: 'flex-start',
                padding: '16px',
              }}
                onMouseEnter={(e) => (e.currentTarget.style.opacity = '1')}
                onMouseLeave={(e) => (e.currentTarget.style.opacity = '0')}
              >
                <span style={{
                  padding: '4px 10px',
                  background: 'rgba(212,175,55,0.2)',
                  border: '1px solid rgba(212,175,55,0.3)',
                  borderRadius: '100px',
                  fontSize: '10px', fontWeight: 600,
                  color: '#D4AF37', letterSpacing: '0.08em',
                  textTransform: 'uppercase', marginBottom: '6px',
                }}>{img.category}</span>
                <span style={{ fontSize: '14px', color: 'white', fontWeight: 600 }}>{img.alt}</span>
              </div>

              {/* Zoom icon */}
              <div style={{
                position: 'absolute', top: '12px', right: '12px',
                width: '32px', height: '32px',
                background: 'rgba(5,15,31,0.8)',
                backdropFilter: 'blur(8px)',
                borderRadius: '8px',
                border: '1px solid rgba(255,255,255,0.15)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                opacity: 0, transition: 'opacity 0.3s',
              }}
                onMouseEnter={(e) => (e.currentTarget.style.opacity = '1')}
              >
                <ZoomIn size={14} color="white" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selected !== null && (
        <div
          style={{
            position: 'fixed', inset: 0, zIndex: 99990,
            background: 'rgba(5, 15, 31, 0.97)',
            backdropFilter: 'blur(24px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '40px',
            animation: 'fadeIn 0.2s ease',
          }}
          onClick={() => setSelected(null)}
        >
          <button
            onClick={() => setSelected(null)}
            style={{
              position: 'absolute', top: '20px', right: '20px',
              background: 'rgba(255,255,255,0.1)',
              border: '1px solid rgba(255,255,255,0.2)',
              borderRadius: '50%', width: '44px', height: '44px',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              color: 'white', cursor: 'pointer', zIndex: 2,
            }}
          >
            <X size={20} />
          </button>

          <div
            style={{
              position: 'relative',
              maxWidth: '1000px',
              maxHeight: '80vh',
              width: '100%',
              borderRadius: '20px',
              overflow: 'hidden',
              border: '1px solid rgba(255,255,255,0.1)',
              boxShadow: '0 40px 100px rgba(0,0,0,0.6)',
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <div style={{ position: 'relative', height: '70vh' }}>
              <Image
                src={filteredImages[selected].src}
                alt={filteredImages[selected].alt}
                fill
                style={{ objectFit: 'contain' }}
              />
            </div>

            <div style={{
              padding: '20px 24px',
              background: 'rgba(5,15,31,0.9)',
              borderTop: '1px solid rgba(255,255,255,0.08)',
            }}>
              <div style={{ fontSize: '16px', fontWeight: 600, color: 'white' }}>
                {filteredImages[selected].alt}
              </div>
              <div style={{ fontSize: '12px', color: '#D4AF37', marginTop: '4px' }}>
                {filteredImages[selected].category} — Bharath Matha Degree College
              </div>
              <div style={{ fontSize: '12px', color: 'rgba(255,255,255,0.4)', marginTop: '6px' }}>
                {selected + 1} / {filteredImages.length} · Use ← → keys to navigate
              </div>
            </div>
          </div>

          {/* Nav arrows */}
          {selected > 0 && (
            <button
              onClick={(e) => { e.stopPropagation(); setSelected(selected - 1); }}
              style={{
                position: 'absolute', left: '20px',
                background: 'rgba(255,255,255,0.1)',
                border: '1px solid rgba(255,255,255,0.2)',
                borderRadius: '50%', width: '48px', height: '48px',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                color: 'white', cursor: 'pointer', fontSize: '20px',
              }}
            >←</button>
          )}
          {selected < filteredImages.length - 1 && (
            <button
              onClick={(e) => { e.stopPropagation(); setSelected(selected + 1); }}
              style={{
                position: 'absolute', right: '20px',
                background: 'rgba(255,255,255,0.1)',
                border: '1px solid rgba(255,255,255,0.2)',
                borderRadius: '50%', width: '48px', height: '48px',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                color: 'white', cursor: 'pointer', fontSize: '20px',
              }}
            >→</button>
          )}
        </div>
      )}

      <style>{`
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        @media (max-width: 768px) {
          .masonry-grid { columns: 2 !important; }
        }
        @media (max-width: 480px) {
          .masonry-grid { columns: 1 !important; }
        }
      `}</style>
    </section>
  );
}
