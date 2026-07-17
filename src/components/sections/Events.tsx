'use client';
import { useEffect, useRef } from 'react';
import { Calendar, Clock, MapPin, Users, ArrowRight } from 'lucide-react';

const events = [
  {
    date: { day: '26', month: 'JAN' },
    title: 'Republic Day Celebrations',
    description: 'Grand Republic Day celebration with flag hoisting, cultural programs, and patriotic performances by students and faculty.',
    time: '9:00 AM',
    venue: 'College Ground',
    category: 'Cultural',
    color: '#D4AF37',
    status: 'Completed',
  },
  {
    date: { day: '15', month: 'MAR' },
    title: 'Academic Excellence Awards',
    description: 'Annual awards ceremony recognizing top-performing students, sports achievers, and faculty members for their outstanding contributions.',
    time: '11:00 AM',
    venue: 'College Auditorium',
    category: 'Academic',
    color: '#0B3D91',
    status: 'Completed',
  },
  {
    date: { day: '10', month: 'AUG' },
    title: 'Sports Meet & Athletics',
    description: 'Annual inter-department sports festival featuring cricket, volleyball, athletics, and indoor games. Fostering team spirit and healthy competition.',
    time: '8:00 AM',
    venue: 'Sports Ground',
    category: 'Sports',
    color: '#00C896',
    status: 'Upcoming',
  },
  {
    date: { day: '22', month: 'AUG' },
    title: 'Cultural Fest — Spandana',
    description: 'The annual cultural festival with music, dance, drama, art exhibitions, and literary events showcasing students\' diverse talents.',
    time: '10:00 AM',
    venue: 'Campus',
    category: 'Cultural',
    color: '#FF7A00',
    status: 'Upcoming',
  },
  {
    date: { day: '01', month: 'SEP' },
    title: 'Admissions Open — 2026-27',
    description: 'Applications open for B.Com, BBA, and BA programs for the academic year 2026-27. Limited seats available. Apply early to secure your seat.',
    time: 'All Day',
    venue: 'Online & Campus',
    category: 'Admissions',
    color: '#D4AF37',
    status: 'Upcoming',
  },
  {
    date: { day: '05', month: 'OCT' },
    title: 'Career Guidance Seminar',
    description: 'Industry experts and career counselors share insights on career planning, higher education opportunities, and the latest trends in various fields.',
    time: '2:00 PM',
    venue: 'Seminar Hall',
    category: 'Academic',
    color: '#0B3D91',
    status: 'Upcoming',
  },
];

export default function Events() {
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
      id="events"
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
        background: 'radial-gradient(ellipse at 50% 100%, rgba(11, 61, 145, 0.12) 0%, transparent 60%)',
      }} />

      <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '0 24px', position: 'relative' }}>
        {/* Header */}
        <div className="reveal" style={{ textAlign: 'center', marginBottom: '72px' }}>
          <div className="section-badge" style={{ margin: '0 auto 20px', display: 'inline-flex' }}>
            Events & Activities
          </div>
          <h2 className="section-title">
            Campus{' '}
            <span className="text-gradient-gold">Events</span>
          </h2>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            A vibrant calendar of academic, cultural, and sports events that make the
            BMDC experience truly unforgettable.
          </p>
        </div>

        {/* Timeline */}
        <div style={{ position: 'relative' }}>
          {/* Center line */}
          <div style={{
            position: 'absolute',
            left: '80px',
            top: 0, bottom: 0,
            width: '2px',
            background: 'linear-gradient(180deg, #D4AF37 0%, #0B3D91 50%, #00C896 100%)',
            opacity: 0.4,
          }} />

          <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
            {events.map((event, i) => (
              <div
                key={event.title}
                className={i % 2 === 0 ? 'reveal-left' : 'reveal-right'}
                style={{
                  display: 'flex',
                  gap: '32px',
                  alignItems: 'flex-start',
                  transitionDelay: `${i * 0.1}s`,
                }}
              >
                {/* Date badge */}
                <div style={{
                  flexShrink: 0,
                  width: '64px',
                  textAlign: 'center',
                  paddingTop: '4px',
                }}>
                  <div style={{
                    background: `${event.color}15`,
                    border: `1px solid ${event.color}40`,
                    borderRadius: '12px',
                    padding: '8px 4px',
                  }}>
                    <div style={{ fontSize: '22px', fontWeight: 800, color: event.color, fontFamily: 'var(--font-serif)', lineHeight: 1 }}>
                      {event.date.day}
                    </div>
                    <div style={{ fontSize: '9px', letterSpacing: '0.1em', color: 'rgba(255,255,255,0.5)', fontWeight: 600, marginTop: '4px' }}>
                      {event.date.month}
                    </div>
                  </div>
                </div>

                {/* Timeline dot */}
                <div style={{
                  flexShrink: 0,
                  width: '12px', height: '12px',
                  borderRadius: '50%',
                  background: event.color,
                  border: '3px solid #050F1F',
                  boxShadow: `0 0 12px ${event.color}60`,
                  marginTop: '12px',
                  marginLeft: '-6px',
                  zIndex: 2,
                }} />

                {/* Event card */}
                <div
                  className="glass"
                  style={{
                    flex: 1,
                    borderRadius: '20px',
                    padding: '24px',
                    border: `1px solid ${event.color}20`,
                    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateX(6px)';
                    e.currentTarget.style.boxShadow = `0 16px 48px ${event.color}15`;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateX(0)';
                    e.currentTarget.style.boxShadow = 'var(--glass-shadow)';
                  }}
                >
                  {/* Header row */}
                  <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: '10px', flexWrap: 'wrap', gap: '8px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <span style={{
                        padding: '3px 10px', borderRadius: '100px',
                        background: `${event.color}15`,
                        border: `1px solid ${event.color}30`,
                        fontSize: '10px', fontWeight: 600,
                        color: event.color, letterSpacing: '0.06em',
                        textTransform: 'uppercase',
                      }}>{event.category}</span>
                    </div>
                    <span style={{
                      padding: '3px 10px', borderRadius: '100px',
                      background: event.status === 'Upcoming' ? 'rgba(0,200,150,0.15)' : 'rgba(255,255,255,0.06)',
                      border: `1px solid ${event.status === 'Upcoming' ? 'rgba(0,200,150,0.3)' : 'rgba(255,255,255,0.1)'}`,
                      fontSize: '10px', fontWeight: 600,
                      color: event.status === 'Upcoming' ? '#00C896' : 'rgba(255,255,255,0.4)',
                      letterSpacing: '0.06em',
                    }}>{event.status}</span>
                  </div>

                  <h3 style={{
                    fontFamily: 'var(--font-serif)',
                    fontSize: '18px', fontWeight: 700, color: 'white',
                    marginBottom: '8px',
                  }}>{event.title}</h3>

                  <p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.6)', lineHeight: 1.6, marginBottom: '14px' }}>
                    {event.description}
                  </p>

                  {/* Meta */}
                  <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                      <Clock size={12} color="rgba(255,255,255,0.4)" />
                      <span style={{ fontSize: '12px', color: 'rgba(255,255,255,0.5)' }}>{event.time}</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                      <MapPin size={12} color="rgba(255,255,255,0.4)" />
                      <span style={{ fontSize: '12px', color: 'rgba(255,255,255,0.5)' }}>{event.venue}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
