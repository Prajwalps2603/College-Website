'use client';
import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { Phone, Mail, Globe, MapPin, Share2, MessageCircle, PlayCircle, AtSign, ArrowRight, Send } from 'lucide-react';

const quickLinks = [
  { label: 'About BMDC', href: '#about' },
  { label: 'B.Com Program', href: '#courses' },
  { label: 'BBA Program', href: '#courses' },
  { label: 'BA Program', href: '#courses' },
  { label: 'Campus Tour', href: '#campus' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Events', href: '#events' },
  { label: 'Admissions', href: '#admissions' },
  { label: 'Contact Us', href: '#contact' },
];

const socials = [
  { icon: Share2, label: 'Facebook', href: 'https://facebook.com' },
  { icon: MessageCircle, label: 'Instagram', href: 'https://instagram.com' },
  { icon: PlayCircle, label: 'YouTube', href: 'https://youtube.com' },
  { icon: AtSign, label: 'Twitter / X', href: 'https://twitter.com' },
];

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 3000);
    }
  };

  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer
      id="footer"
      style={{
        position: 'relative',
        zIndex: 10,
        background: 'rgba(5, 10, 24, 0.99)',
        overflow: 'hidden',
      }}
    >
      {/* Animated wave top */}
      <div style={{ position: 'relative', height: '80px', overflow: 'hidden' }}>
        <svg
          viewBox="0 0 1440 80"
          style={{ position: 'absolute', bottom: 0, width: '100%' }}
          preserveAspectRatio="none"
        >
          <path
            d="M0,40 C360,80 1080,0 1440,40 L1440,80 L0,80 Z"
            fill="rgba(5, 10, 24, 0.99)"
            className="wave-animation"
          />
        </svg>
        <svg
          viewBox="0 0 1440 80"
          style={{ position: 'absolute', bottom: 0, width: '100%', opacity: 0.4 }}
          preserveAspectRatio="none"
        >
          <path
            d="M0,60 C480,20 960,80 1440,60 L1440,80 L0,80 Z"
            fill="rgba(212, 175, 55, 0.08)"
            style={{ animation: 'waveMove 4s ease-in-out 1s infinite' }}
          />
        </svg>
      </div>

      {/* Floating orbs */}
      <div className="orb orb-blue" style={{
        width: '300px', height: '300px',
        bottom: '0px', right: '-50px', opacity: 0.2,
        animation: 'orbFloat 10s ease-in-out infinite',
      }} />
      <div className="orb orb-gold" style={{
        width: '200px', height: '200px',
        top: '20px', left: '-30px', opacity: 0.15,
        animation: 'orbFloat 8s ease-in-out 3s infinite',
      }} />

      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px 60px', position: 'relative' }}>
        {/* Grid */}
        <div className="grid-responsive-4" style={{
          display: 'grid',
          gridTemplateColumns: '2fr 1fr 1fr 1.5fr',
          gap: '48px',
          paddingTop: '40px',
          paddingBottom: '60px',
          borderBottom: '1px solid rgba(255,255,255,0.08)',
        }}>
          {/* Brand column */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '20px' }}>
              <div style={{
                width: '52px', height: '52px',
                borderRadius: '50%',
                overflow: 'hidden',
                border: '2px solid rgba(212,175,55,0.4)',
                boxShadow: '0 0 20px rgba(212,175,55,0.2)',
                flexShrink: 0,
              }}>
                <Image src="/images/logo.png" alt="BMDC Logo" width={52} height={52} style={{ objectFit: 'cover' }} />
              </div>
              <div>
                <div style={{ fontFamily: 'var(--font-serif)', fontSize: '18px', fontWeight: 800, color: 'white' }}>
                  Bharath Matha
                </div>
                <div style={{ fontFamily: 'var(--font-serif)', fontSize: '14px', color: '#D4AF37', fontWeight: 500 }}>
                  Degree College
                </div>
              </div>
            </div>

            <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, marginBottom: '24px', maxWidth: '300px' }}>
              Empowering minds and building futures since 2011. Affiliated to University of Mysore,
              delivering quality education in the heart of Karnataka.
            </p>

            {/* Contact mini */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '24px' }}>
              <a href="tel:7349050293" style={{ display: 'flex', alignItems: 'center', gap: '10px', color: 'rgba(255,255,255,0.6)', textDecoration: 'none', fontSize: '13px', transition: 'color 0.2s' }}
                onMouseEnter={(e) => (e.currentTarget.style.color = '#D4AF37')}
                onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255,255,255,0.6)')}
              >
                <Phone size={14} color="#D4AF37" />
                7349050293 · 9483081821
              </a>
              <a href="mailto:info@bmdckoppa.in" style={{ display: 'flex', alignItems: 'center', gap: '10px', color: 'rgba(255,255,255,0.6)', textDecoration: 'none', fontSize: '13px', transition: 'color 0.2s' }}
                onMouseEnter={(e) => (e.currentTarget.style.color = '#D4AF37')}
                onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255,255,255,0.6)')}
              >
                <Mail size={14} color="#D4AF37" />
                info@bmdckoppa.in
              </a>
              <a href="https://www.bmdckoppa.in" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '10px', color: 'rgba(255,255,255,0.6)', textDecoration: 'none', fontSize: '13px', transition: 'color 0.2s' }}
                onMouseEnter={(e) => (e.currentTarget.style.color = '#D4AF37')}
                onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255,255,255,0.6)')}
              >
                <Globe size={14} color="#D4AF37" />
                bmdckoppa.in
              </a>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', color: 'rgba(255,255,255,0.6)', fontSize: '13px' }}>
                <MapPin size={14} color="#D4AF37" style={{ flexShrink: 0, marginTop: '1px' }} />
                Koppa PO, Periyapatna Taluk, Mysuru - 571104
              </div>
            </div>

            {/* Socials */}
            <div style={{ display: 'flex', gap: '10px' }}>
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  style={{
                    width: '38px', height: '38px',
                    borderRadius: '10px',
                    background: 'rgba(255,255,255,0.06)',
                    border: '1px solid rgba(255,255,255,0.1)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    transition: 'all 0.2s ease',
                    textDecoration: 'none',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = 'rgba(212,175,55,0.15)';
                    e.currentTarget.style.borderColor = 'rgba(212,175,55,0.3)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'rgba(255,255,255,0.06)';
                    e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)';
                  }}
                >
                  <social.icon size={16} color="rgba(255,255,255,0.6)" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 style={{ fontFamily: 'var(--font-serif)', fontSize: '16px', fontWeight: 700, color: 'white', marginBottom: '20px' }}>
              Quick Links
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={(e) => { e.preventDefault(); scrollTo(link.href); }}
                    className="animated-underline"
                    style={{
                      color: 'rgba(255,255,255,0.55)',
                      textDecoration: 'none',
                      fontSize: '13px',
                      transition: 'color 0.2s',
                      display: 'flex', alignItems: 'center', gap: '6px',
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = '#D4AF37')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255,255,255,0.55)')}
                  >
                    <ArrowRight size={10} />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h4 style={{ fontFamily: 'var(--font-serif)', fontSize: '16px', fontWeight: 700, color: 'white', marginBottom: '20px' }}>
              Programs
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {[
                { code: 'B.Com', name: 'Bachelor of Commerce', color: '#D4AF37' },
                { code: 'BBA', name: 'Business Administration', color: '#0B3D91' },
                { code: 'BA', name: 'Bachelor of Arts', color: '#00C896' },
              ].map((prog) => (
                <a
                  key={prog.code}
                  href="#courses"
                  onClick={(e) => { e.preventDefault(); scrollTo('#courses'); }}
                  style={{
                    padding: '12px 16px',
                    borderRadius: '12px',
                    background: 'rgba(255,255,255,0.04)',
                    border: `1px solid ${prog.color}20`,
                    textDecoration: 'none',
                    transition: 'all 0.2s',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = `${prog.color}10`;
                    e.currentTarget.style.borderColor = `${prog.color}30`;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'rgba(255,255,255,0.04)';
                    e.currentTarget.style.borderColor = `${prog.color}20`;
                  }}
                >
                  <div style={{ fontSize: '13px', fontWeight: 700, color: prog.color }}>{prog.code}</div>
                  <div style={{ fontSize: '11px', color: 'rgba(255,255,255,0.45)', marginTop: '2px' }}>{prog.name}</div>
                </a>
              ))}
            </div>
          </div>

          {/* Newsletter + Admissions CTA */}
          <div>
            <h4 style={{ fontFamily: 'var(--font-serif)', fontSize: '16px', fontWeight: 700, color: 'white', marginBottom: '16px' }}>
              Stay Updated
            </h4>
            <p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.5)', marginBottom: '16px', lineHeight: 1.6 }}>
              Subscribe to get updates on admissions, events, and campus news.
            </p>

            <form onSubmit={handleSubscribe} style={{ marginBottom: '28px' }}>
              {subscribed ? (
                <div style={{
                  padding: '12px 16px',
                  background: 'rgba(0,200,150,0.1)',
                  border: '1px solid rgba(0,200,150,0.3)',
                  borderRadius: '12px',
                  color: '#00C896',
                  fontSize: '13px',
                  textAlign: 'center',
                }}>
                  ✓ Subscribed successfully!
                </div>
              ) : (
                <div style={{ display: 'flex', gap: '0' }}>
                  <input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    style={{
                      flex: 1,
                      padding: '12px 16px',
                      background: 'rgba(255,255,255,0.05)',
                      border: '1px solid rgba(255,255,255,0.1)',
                      borderRight: 'none',
                      borderRadius: '12px 0 0 12px',
                      color: 'white',
                      fontSize: '13px',
                      outline: 'none',
                      fontFamily: 'var(--font-sans)',
                    }}
                    required
                  />
                  <button
                    type="submit"
                    style={{
                      padding: '12px 16px',
                      background: 'linear-gradient(135deg, #D4AF37, #f0c84a)',
                      border: 'none',
                      borderRadius: '0 12px 12px 0',
                      cursor: 'pointer',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                    }}
                  >
                    <Send size={14} color="#050F1F" />
                  </button>
                </div>
              )}
            </form>

            {/* Admissions CTA */}
            <div style={{
              padding: '20px',
              borderRadius: '16px',
              background: 'linear-gradient(135deg, rgba(212,175,55,0.12), rgba(11,61,145,0.15))',
              border: '1px solid rgba(212,175,55,0.2)',
            }}>
              <div style={{ fontSize: '14px', fontWeight: 700, color: 'white', marginBottom: '6px' }}>
                Admissions Open 2026–27
              </div>
              <div style={{ fontSize: '12px', color: 'rgba(255,255,255,0.5)', marginBottom: '14px' }}>
                B.Com · BBA · BA — Limited Seats
              </div>
              <a
                href="#admissions"
                onClick={(e) => { e.preventDefault(); scrollTo('#admissions'); }}
                className="btn-gold magnetic-btn"
                style={{ width: '100%', justifyContent: 'center', borderRadius: '12px', fontSize: '13px', padding: '10px 20px' }}
              >
                Apply Now ✦
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingTop: '28px',
          flexWrap: 'wrap',
          gap: '16px',
        }}>
          <div style={{ fontSize: '13px', color: 'rgba(255,255,255,0.35)' }}>
            © 2026 Bharath Matha Degree College, Koppa. All rights reserved.
          </div>
          <div style={{ fontSize: '13px', color: 'rgba(255,255,255,0.35)' }}>
            Affiliated to{' '}
            <a href="https://uni-mysore.ac.in" target="_blank" rel="noopener noreferrer"
              style={{ color: '#D4AF37', textDecoration: 'none' }}>
              University of Mysore
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
