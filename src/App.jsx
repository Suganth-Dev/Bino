import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Solutions from './components/Solutions';
import TrustSection from './components/TrustSection';
import HowItWorks from './components/HowItWorks';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <Solutions />
      <TrustSection />
      <HowItWorks />
      <Footer />
    </div>
  );
}

export default App;