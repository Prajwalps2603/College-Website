'use client';
import { useEffect, useRef } from 'react';
import { TrendingUp, BarChart2, BookMarked, ArrowRight, Briefcase, BookOpen } from 'lucide-react';

const courses = [
  {
    code: 'B.Com',
    name: 'Bachelor of Commerce',
    duration: '3 Years',
    description: 'Master accounting, economics, and business management. Build a foundation for finance and entrepreneurship.',
    icon: TrendingUp,
    color: '#D4AF37',
    gradient: 'linear-gradient(180deg, rgba(212,175,55,0.15) 0%, rgba(212,175,55,0.02) 100%)',
    subjects: ['Financial Acc.', 'Business Law', 'Corporate Finance'],
    careers: ['CA / Auditor', 'Finance Manager', 'Tax Consultant'],
  },
  {
    code: 'BBA',
    name: 'Bachelor of Business Admin',
    duration: '3 Years',
    description: 'Develop managerial acumen, leadership skills, and business strategy expertise. Gateway to MBA.',
    icon: BarChart2,
    color: '#0B3D91',
    gradient: 'linear-gradient(180deg, rgba(11,61,145,0.2) 0%, rgba(11,61,145,0.02) 100%)',
    subjects: ['Management', 'Marketing', 'Human Resources'],
    careers: ['Corporate Manager', 'Startup Founder', 'Marketing Head'],
  },
  {
    code: 'BA',
    name: 'Bachelor of Arts',
    duration: '3 Years',
    description: 'Explore humanities, languages, and political studies. A versatile degree for civil services and journalism.',
    icon: BookMarked,
    color: '#00C896',
    gradient: 'linear-gradient(180deg, rgba(0,200,150,0.15) 0%, rgba(0,200,150,0.02) 100%)',
    subjects: ['History', 'Political Science', 'Sociology'],
    careers: ['IAS / KAS Officer', 'Journalist', 'Social Worker'],
  },
];

export default function Courses() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add('visible'); }),
      { threshold: 0.1 }
    );
    sectionRef.current?.querySelectorAll('.reveal, .reveal-up').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="courses"
      ref={sectionRef}
      className="section-padding"
      style={{ position: 'relative', zIndex: 10, background: 'rgba(5,13,26,0.98)', overflow: 'hidden' }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px', position: 'relative' }}>
        
        {/* Header */}
        <div className="reveal" style={{ textAlign: 'center', marginBottom: '64px' }}>
          <div className="section-badge" style={{ margin: '0 auto 16px', display: 'inline-flex' }}>Academic Programs</div>
          <h2 className="section-title" style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)' }}>
            Shape Your <span className="text-gradient-gold">Future</span>
          </h2>
        </div>

        {/* 3-Column Creative Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '24px',
        }}>
          {courses.map((course, i) => (
            <div
              key={course.code}
              className="reveal-up glass-card"
              style={{
                borderRadius: '24px',
                background: 'rgba(255,255,255,0.02)',
                border: '1px solid rgba(255,255,255,0.05)',
                overflow: 'hidden',
                transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
                position: 'relative',
                animationDelay: `${i * 0.1}s`,
              }}
            >
              {/* Card Top / Header */}
              <div style={{ padding: '32px 32px 24px', background: course.gradient, borderBottom: '1px solid rgba(255,255,255,0.03)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '24px' }}>
                  <div style={{
                    width: '48px', height: '48px',
                    borderRadius: '14px',
                    background: `${course.color}20`,
                    border: `1px solid ${course.color}40`,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    boxShadow: `0 0 20px ${course.color}20`
                  }}>
                    <course.icon size={24} color={course.color} />
                  </div>
                  <div style={{ fontSize: '12px', color: 'rgba(255,255,255,0.4)', fontWeight: 600, letterSpacing: '0.05em', border: '1px solid rgba(255,255,255,0.1)', padding: '4px 10px', borderRadius: '100px' }}>
                    {course.duration}
                  </div>
                </div>
                
                <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '2rem', fontWeight: 800, color: 'white', marginBottom: '8px', lineHeight: 1.1 }}>
                  {course.code}
                </h3>
                <div style={{ fontSize: '14px', color: course.color, fontWeight: 700, letterSpacing: '0.05em' }}>
                  {course.name}
                </div>
              </div>

              {/* Card Body */}
              <div style={{ padding: '32px' }}>
                <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.6)', lineHeight: 1.6, marginBottom: '32px' }}>
                  {course.description}
                </p>

                {/* Core Subjects */}
                <div style={{ marginBottom: '24px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
                    <BookOpen size={14} color="rgba(255,255,255,0.4)" />
                    <span style={{ fontSize: '11px', fontWeight: 700, color: 'rgba(255,255,255,0.4)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Core Subjects</span>
                  </div>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                    {course.subjects.map(s => (
                      <span key={s} style={{ fontSize: '12px', color: 'rgba(255,255,255,0.7)', padding: '4px 12px', background: 'rgba(255,255,255,0.04)', borderRadius: '100px', border: '1px solid rgba(255,255,255,0.05)' }}>
                        {s}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Career Paths */}
                <div style={{ marginBottom: '36px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
                    <Briefcase size={14} color="rgba(255,255,255,0.4)" />
                    <span style={{ fontSize: '11px', fontWeight: 700, color: 'rgba(255,255,255,0.4)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Career Paths</span>
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    {course.careers.map(c => (
                      <div key={c} style={{ fontSize: '13px', color: 'rgba(255,255,255,0.7)', display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <div style={{ width: '4px', height: '4px', borderRadius: '50%', background: course.color }} />
                        {c}
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <a
                  href="#admissions"
                  onClick={(e) => { e.preventDefault(); document.querySelector('#admissions')?.scrollIntoView({ behavior: 'smooth' }); }}
                  className="course-btn"
                  style={{
                    display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px',
                    width: '100%', padding: '12px',
                    borderRadius: '12px',
                    background: 'rgba(255,255,255,0.03)',
                    border: '1px solid rgba(255,255,255,0.08)',
                    color: 'white', fontSize: '14px', fontWeight: 600,
                    textDecoration: 'none', transition: 'all 0.3s ease',
                  }}
                >
                  Apply Now <ArrowRight size={14} />
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>

      <style>{`
        .glass-card:hover {
          transform: translateY(-8px);
          background: rgba(255,255,255,0.04) !important;
          border-color: rgba(255,255,255,0.15) !important;
          box-shadow: 0 20px 40px rgba(0,0,0,0.4);
        }
        .glass-card:hover .course-btn {
          background: white !important;
          color: #0a0a0a !important;
        }
      `}</style>
    </section>
  );
}
