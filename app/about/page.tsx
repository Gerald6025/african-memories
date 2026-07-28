'use client';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import AboutHero from '../components/AboutHero';
import AboutIntro from '../components/AboutIntro';
import AboutStory from '../components/AboutStory';
import AboutMission from '../components/AboutMission';
import AboutVision from '../components/AboutVision';
import AboutProcess from '../components/AboutProcess';
import AboutValues from '../components/AboutValues';

export default function About() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <AboutHero />
      <AboutIntro />
    
      <Footer />
    </div>
  );
}
