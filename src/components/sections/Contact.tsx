'use client';
import { useEffect, useRef, useState } from 'react';
import { MapPin, Phone, Mail, Globe, Navigation, Clock, ExternalLink } from 'lucide-react';

export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null);
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', program: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  const collegeInfo = [
    {
      icon: MapPin,
      label: 'Address',
      value: 'Koppa PO, Periyapatna Taluk\nMysuru District, Karnataka - 571104',
      color: '#D4AF37',
      action: 'https://maps.google.com/?q=Bharath+Matha+Degree+College+Koppa+Mysuru',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '7349050293\n9483081821',
      color: '#00C896',
      action: 'tel:7349050293',
    },
    {
      icon: Mail,
      label: 'Email',
      value: 'info@bmdckoppa.in',
      color: '#0B3D91',
      action: 'mailto:info@bmdckoppa.in',
    },
    {
      icon: Globe,
      label: 'Website',
      value: 'bmdckoppa.in',
      color: '#FF7A00',
      action: 'https://www.bmdckoppa.in',
    },
    {
      icon: Clock,
      label: 'Office Hours',
      value: 'Mon–Sat: 9:00 AM – 5:00 PM',
      color: '#D4AF37',
      action: null,
    },
  ];

  return (
    <section
      id="contact"
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
          radial-gradient(ellipse at 20% 50%, rgba(11, 61, 145, 0.15) 0%, transparent 60%),
          radial-gradient(ellipse at 80% 50%, rgba(212, 175, 55, 0.06) 0%, transparent 60%)
        `,
      }} />

      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px', position: 'relative' }}>
        {/* Header */}
        <div className="reveal" style={{ textAlign: 'center', marginBottom: '72px' }}>
          <div className="section-badge" style={{ margin: '0 auto 20px', display: 'inline-flex' }}>
            Get in Touch
          </div>
          <h2 className="section-title">
            Visit Us at{' '}
            <span className="text-gradient-gold">Koppa</span>
          </h2>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            We&apos;re located in the beautiful Periyapatna Taluk of Mysuru District, Karnataka.
            Come visit our campus or reach out — we&apos;d love to hear from you.
          </p>
        </div>

        {/* Main Grid */}
        <div className="grid-responsive-2" style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1.5fr',
          gap: '32px',
          marginBottom: '32px',
        }}>
          {/* Left: Info cards */}
          <div className="reveal-left" style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {collegeInfo.map((info) => (
              <div
                key={info.label}
                className="glass"
                style={{
                  padding: '20px 24px',
                  borderRadius: '18px',
                  border: `1px solid ${info.color}20`,
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                  cursor: info.action ? 'pointer' : 'default',
                }}
                onClick={() => info.action && window.open(info.action, '_blank')}
                onMouseEnter={(e) => {
                  if (info.action) {
                    e.currentTarget.style.transform = 'translateX(6px)';
                    e.currentTarget.style.boxShadow = `0 12px 36px ${info.color}15`;
                  }
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateX(0)';
                  e.currentTarget.style.boxShadow = 'var(--glass-shadow)';
                }}
              >
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
                  <div style={{
                    width: '44px', height: '44px', flexShrink: 0,
                    borderRadius: '12px',
                    background: `${info.color}12`,
                    border: `1px solid ${info.color}30`,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                  }}>
                    <info.icon size={18} color={info.color} />
                  </div>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontSize: '11px', color: 'rgba(255,255,255,0.4)', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '4px' }}>
                      {info.label}
                    </div>
                    <div style={{ fontSize: '14px', color: 'rgba(255,255,255,0.85)', fontWeight: 500, lineHeight: 1.5, whiteSpace: 'pre-line' }}>
                      {info.value}
                    </div>
                  </div>
                  {info.action && (
                    <ExternalLink size={14} color="rgba(255,255,255,0.3)" style={{ flexShrink: 0, marginTop: '4px' }} />
                  )}
                </div>
              </div>
            ))}

            {/* Directions button */}
            <a
              href="https://maps.google.com/?q=Bharath+Matha+Degree+College+Koppa+Mysuru+Karnataka"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
              style={{ justifyContent: 'center', borderRadius: '16px' }}
            >
              <Navigation size={16} />
              Get Directions on Google Maps
            </a>
          </div>

          {/* Right: Map + Form */}
          <div className="reveal-right" style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            {/* Map */}
            <div
              className="map-container"
              style={{ flex: '0 0 280px', position: 'relative', overflow: 'hidden', borderRadius: '20px', border: '1px solid rgba(255,255,255,0.1)' }}
            >
              {/* Map pulsating marker overlay */}
              <div style={{
                position: 'absolute',
                top: '50%', left: '50%',
                transform: 'translate(-50%, -50%)',
                zIndex: 10,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}>
                <div className="pulse-ring" style={{ display: 'inline-block' }}>
                  <div style={{
                    width: '40px', height: '40px',
                    background: 'rgba(212,175,55,0.9)',
                    borderRadius: '50% 50% 50% 0',
                    transform: 'rotate(-45deg)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: '0 0 20px rgba(212,175,55,0.6)',
                  }}>
                    <MapPin size={16} color="#050F1F" style={{ transform: 'rotate(45deg)' }} />
                  </div>
                </div>
              </div>

              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3892.0!2d76.2!3d12.4!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDI0JzAwLjAiTiA3NsKwMTInMDAuMCJF!5e0!3m2!1sen!2sin!4v1234567890!5m2!1sen!2sin"
                width="100%"
                height="280"
                style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) saturate(0.8) brightness(0.8)', display: 'block' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="BMDC Location Map"
              />

              {/* Map label */}
              <div style={{
                position: 'absolute',
                bottom: '12px',
                left: '12px',
                background: 'rgba(5,15,31,0.9)',
                backdropFilter: 'blur(12px)',
                border: '1px solid rgba(255,255,255,0.1)',
                borderRadius: '12px',
                padding: '8px 14px',
              }}>
                <div style={{ fontSize: '12px', fontWeight: 700, color: 'white' }}>
                  Bharath Matha Degree College
                </div>
                <div style={{ fontSize: '10px', color: 'rgba(255,255,255,0.5)', marginTop: '2px' }}>
                  Koppa, Periyapatna, Mysuru
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="glass" style={{ borderRadius: '20px', padding: '28px', border: '1px solid rgba(255,255,255,0.08)' }}>
              <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '20px', fontWeight: 700, color: 'white', marginBottom: '20px' }}>
                Send us a Message
              </h3>
              {submitted ? (
                <div style={{
                  textAlign: 'center',
                  padding: '40px 20px',
                  color: '#00C896',
                }}>
                  <div style={{ fontSize: '40px', marginBottom: '12px' }}>✓</div>
                  <div style={{ fontSize: '18px', fontWeight: 700, marginBottom: '8px' }}>Message Sent!</div>
                  <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.5)' }}>We&apos;ll get back to you within 24 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                  <div className="grid-responsive-2" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px' }}>
                    <input
                      className="input-glass"
                      type="text"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                    />
                    <input
                      className="input-glass"
                      type="email"
                      placeholder="Email Address"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                    />
                  </div>
                  <div className="grid-responsive-2" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px' }}>
                    <input
                      className="input-glass"
                      type="tel"
                      placeholder="Phone Number"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    />
                    <select
                      className="input-glass"
                      value={formData.program}
                      onChange={(e) => setFormData({ ...formData, program: e.target.value })}
                      style={{ background: 'rgba(255,255,255,0.05)', color: formData.program ? 'white' : 'rgba(255,255,255,0.3)' }}
                    >
                      <option value="">Interested Program</option>
                      <option value="bcom">B.Com</option>
                      <option value="bba">BBA</option>
                      <option value="ba">BA</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <textarea
                    className="input-glass"
                    placeholder="Your Message..."
                    rows={3}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    style={{ resize: 'none' }}
                  />
                  <button type="submit" className="btn-gold magnetic-btn" style={{ width: '100%', justifyContent: 'center', borderRadius: '12px' }}>
                    Send Message ✦
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .grid-cols-2 { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
