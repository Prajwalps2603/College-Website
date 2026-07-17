import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import ParticleField from '@/components/effects/ParticleField';
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Courses from '@/components/sections/Courses';
import Campus from '@/components/sections/Campus';
import Statistics from '@/components/sections/Statistics';
import Principal from '@/components/sections/Principal';
import Gallery from '@/components/sections/Gallery';
import Events from '@/components/sections/Events';
import Admissions from '@/components/sections/Admissions';
import Contact from '@/components/sections/Contact';

export default function Home() {
  return (
    <main style={{ position: 'relative', background: 'var(--deep-navy-2)', minHeight: '100vh' }}>
      {/* Global particle background */}
      <ParticleField />

      {/* Navigation */}
      <Navbar />

      {/* Page Sections */}
      <Hero />
      <About />
      <Courses />
      <Campus />
      <Statistics />
      <Principal />
      <Gallery />
      <Events />
      <Admissions />
      <Contact />

      {/* Footer */}
      <Footer />
    </main>
  );
}
