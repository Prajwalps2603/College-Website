'use client';
import { useEffect, useRef } from 'react';
import { ClipboardList, FileText, CheckCircle, GraduationCap, Download, ArrowRight, Star } from 'lucide-react';

const steps = [
  {
    number: '01',
    icon: ClipboardList,
    title: 'Check Eligibility',
    description: 'Completed 10+2 (PUC or equivalent) from a recognized board. Minimum 35-40% marks required. Karnataka State Board, CBSE, ICSE all accepted.',
    color: '#D4AF37',
    details: ['10+2 Pass Certificate', 'Minimum 35% Marks', 'Any Stream Accepted', 'Karnataka Domicile Preferred'],
  },
  {
    number: '02',
    icon: FileText,
    title: 'Download & Fill Application',
    description: 'Collect the application form from the college office or download online. Fill in all required details accurately and attach supporting documents.',
    color: '#0B3D91',
    details: ['Application Form', 'Marksheets (SSLC + PUC)', 'Aadhar Card', 'Passport Size Photos'],
  },
  {
    number: '03',
    icon: CheckCircle,
    title: 'Submit & Verification',
    description: 'Submit the filled application form with all documents to the college office. Our admissions team will verify and process your application.',
    color: '#00C896',
    details: ['Document Verification', 'Caste Certificate (if applicable)', 'Transfer Certificate', 'Migration Certificate'],
  },
  {
    number: '04',
    icon: GraduationCap,
    title: 'Enrollment & Commence',
    description: 'Upon selection and fee payment, receive your enrollment number and student ID. Attend orientation and begin your academic journey at BMDC!',
    color: '#FF7A00',
    details: ['Fee Payment', 'Student ID Issued', 'Orientation Program', 'Classes Begin'],
  },
];

export default function Admissions() {
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
      id="admissions"
      ref={sectionRef}
      className="section-padding"
      style={{
        position: 'relative',
        zIndex: 10,
        overflow: 'hidden',
        background: 'rgba(8, 27, 51, 0.98)',
      }}
    >
      {/* BG */}
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none',
        background: `
          radial-gradient(ellipse at 30% 30%, rgba(212, 175, 55, 0.06) 0%, transparent 55%),
          radial-gradient(ellipse at 70% 70%, rgba(11, 61, 145, 0.12) 0%, transparent 55%)
        `,
      }} />

      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px', position: 'relative' }}>
        {/* Banner */}
        <div className="reveal" style={{ marginBottom: '72px' }}>
          <div
            className="gradient-border"
            style={{ borderRadius: '24px' }}
          >
            <div
              className="liquid-glass"
              style={{
                borderRadius: '24px',
                padding: '40px 48px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                flexWrap: 'wrap',
                gap: '24px',
                background: 'linear-gradient(135deg, rgba(212,175,55,0.1), rgba(11,61,145,0.1))',
              }}
            >
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
                  <Star size={18} color="#D4AF37" fill="#D4AF37" />
                  <span style={{ fontSize: '13px', color: '#D4AF37', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                    Admissions Open
                  </span>
                </div>
                <h2 className="section-title" style={{ marginBottom: '8px', fontSize: 'clamp(1.8rem, 4vw, 3rem)' }}>
                  Join BMDC for{' '}
                  <span className="text-gradient-gold">2026–27</span>
                </h2>
                <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '15px', maxWidth: '500px' }}>
                  Applications are now open for B.Com, BBA, and BA programs. Limited seats available — secure yours today.
                </p>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', alignItems: 'flex-end' }}>
                <a
                  href="tel:7349050293"
                  className="btn-gold magnetic-btn"
                  style={{ whiteSpace: 'nowrap' }}
                >
                  ✦ Apply Now
                </a>
                <a
                  href="mailto:info@bmdckoppa.in"
                  className="btn-glass magnetic-btn"
                  style={{ whiteSpace: 'nowrap', fontSize: '13px' }}
                >
                  <Download size={14} />
                  Download Brochure
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Header */}
        <div className="reveal" style={{ textAlign: 'center', marginBottom: '64px' }}>
          <div className="section-badge" style={{ margin: '0 auto 20px', display: 'inline-flex' }}>
            Admission Process
          </div>
          <h2 className="section-title">
            Your Journey Starts{' '}
            <span className="text-gradient-gold">Here</span>
          </h2>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            A simple, transparent, and student-friendly admission process.
            We make it easy for you to take the next step in your education.
          </p>
        </div>

        {/* Steps */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
          {steps.map((step, i) => (
            <div
              key={step.number}
              className={`admission-step ${i % 2 === 0 ? 'reveal-left' : 'reveal-right'}`}
              style={{
                display: 'grid',
                gridTemplateColumns: '80px 1fr',
                gap: '32px',
                paddingBottom: '48px',
                transitionDelay: `${i * 0.1}s`,
              }}
            >
              {/* Left: Step indicator */}
              <div style={{ textAlign: 'center' }}>
                <div style={{
                  width: '56px', height: '56px', borderRadius: '50%',
                  background: `${step.color}15`,
                  border: `2px solid ${step.color}40`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  margin: '0 auto',
                  boxShadow: `0 0 20px ${step.color}20`,
                }}>
                  <step.icon size={22} color={step.color} />
                </div>
              </div>

              {/* Right: Content */}
              <div
                className="glass"
                style={{
                  borderRadius: '20px',
                  padding: '28px',
                  border: `1px solid ${step.color}20`,
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateX(6px)';
                  e.currentTarget.style.boxShadow = `0 16px 48px ${step.color}15`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateX(0)';
                  e.currentTarget.style.boxShadow = 'var(--glass-shadow)';
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '14px' }}>
                  <span style={{
                    fontFamily: 'var(--font-serif)',
                    fontSize: '36px', fontWeight: 800,
                    color: `${step.color}30`,
                    lineHeight: 1,
                  }}>{step.number}</span>
                  <h3 style={{
                    fontFamily: 'var(--font-serif)',
                    fontSize: '20px', fontWeight: 700, color: 'white',
                  }}>{step.title}</h3>
                </div>

                <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.65)', lineHeight: 1.7, marginBottom: '18px' }}>
                  {step.description}
                </p>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                  {step.details.map((detail) => (
                    <span key={detail} style={{
                      padding: '4px 12px', borderRadius: '100px',
                      background: `${step.color}10`,
                      border: `1px solid ${step.color}25`,
                      fontSize: '12px', color: 'rgba(255,255,255,0.7)',
                      display: 'flex', alignItems: 'center', gap: '5px',
                    }}>
                      <ArrowRight size={10} color={step.color} />
                      {detail}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Fee Note */}
        <div className="reveal glass" style={{
          borderRadius: '20px',
          padding: '28px 32px',
          marginTop: '16px',
          border: '1px solid rgba(212,175,55,0.2)',
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          flexWrap: 'wrap', gap: '20px',
        }}>
          <div>
            <div style={{ fontSize: '16px', fontWeight: 700, color: 'white', marginBottom: '4px' }}>
              Need Help with Admissions?
            </div>
            <p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.55)' }}>
              Contact our admissions office: <strong style={{ color: '#D4AF37' }}>7349050293</strong> or{' '}
              <strong style={{ color: '#D4AF37' }}>9483081821</strong> · Email:{' '}
              <strong style={{ color: '#D4AF37' }}>info@bmdckoppa.in</strong>
            </p>
          </div>
          <a href="tel:7349050293" className="btn-gold magnetic-btn" style={{ fontSize: '14px', whiteSpace: 'nowrap' }}>
            Call Now
          </a>
        </div>
      </div>
    </section>
  );
}
