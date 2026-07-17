'use client';
import { useEffect, useRef } from 'react';

export default function CursorGlow() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let mouseX = 0;
    let mouseY = 0;
    let ringX = 0;
    let ringY = 0;
    let animFrame: number;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      if (dotRef.current) {
        dotRef.current.style.left = `${mouseX}px`;
        dotRef.current.style.top = `${mouseY}px`;
      }
      if (glowRef.current) {
        glowRef.current.style.left = `${mouseX - 150}px`;
        glowRef.current.style.top = `${mouseY - 150}px`;
      }
    };

    const animate = () => {
      ringX += (mouseX - ringX) * 0.12;
      ringY += (mouseY - ringY) * 0.12;
      if (ringRef.current) {
        ringRef.current.style.left = `${ringX}px`;
        ringRef.current.style.top = `${ringY}px`;
      }
      animFrame = requestAnimationFrame(animate);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest('a, button, .magnetic-btn, .tilt-card, .cursor-pointer')) {
        dotRef.current?.style.setProperty('width', '14px');
        dotRef.current?.style.setProperty('height', '14px');
        ringRef.current?.style.setProperty('width', '60px');
        ringRef.current?.style.setProperty('height', '60px');
        ringRef.current?.style.setProperty('border-color', 'rgba(212, 175, 55, 0.9)');
      } else {
        dotRef.current?.style.setProperty('width', '8px');
        dotRef.current?.style.setProperty('height', '8px');
        ringRef.current?.style.setProperty('width', '40px');
        ringRef.current?.style.setProperty('height', '40px');
        ringRef.current?.style.setProperty('border-color', 'rgba(212, 175, 55, 0.6)');
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseover', handleMouseOver);
    animFrame = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
      cancelAnimationFrame(animFrame);
    };
  }, []);

  return (
    <>
      {/* Glow trail */}
      <div
        ref={glowRef}
        className="cursor-glow"
        style={{
          width: '300px',
          height: '300px',
          background: 'radial-gradient(circle, rgba(212, 175, 55, 0.06) 0%, transparent 70%)',
          borderRadius: '50%',
          pointerEvents: 'none',
          position: 'fixed',
          zIndex: 99997,
          transition: 'left 0.05s, top 0.05s',
        }}
      />
      {/* Dot */}
      <div ref={dotRef} className="cursor-dot" />
      {/* Ring */}
      <div ref={ringRef} className="cursor-ring" />
    </>
  );
}
