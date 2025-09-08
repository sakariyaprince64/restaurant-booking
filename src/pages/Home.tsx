import React from 'react';
// import { colours } from '../colour';
import Hero from '../components/Hero';
import Features from '../components/Features';
import Gallery from '../components/Gallery';
import Testimonials from '../components/Testimonials';
import CTASection from '../components/CTASection';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div>
      <Hero />
      <Features />
      <Gallery />
      <Testimonials />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Home;