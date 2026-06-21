import React from 'react';
import Hero from '../components/Hero';
import Features from '../components/Features';
import HowItWorks from '../components/HowItWorks';

export default function Home() {
  return (
    <div className="animate-fadeIn">
      <Hero />
      <Features />
      <HowItWorks />
    </div>
  );
}
