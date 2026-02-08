
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowRight, 
  Menu, 
  X, 
  Sparkles, 
  ChevronRight,
  Send,
  CheckCircle2,
  ExternalLink
} from 'lucide-react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Process from './components/Process';
import Results from './components/Results';
import Pricing from './components/Pricing';
import About from './components/About';
import AuditForm from './components/AuditForm';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 overflow-x-hidden relative">
      {/* Background elements */}
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none -z-10">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-purple-900/10 blur-[120px] rounded-full animate-pulse"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-blue-900/10 blur-[120px] rounded-full animate-pulse delay-700"></div>
      </div>

      <Navbar activeSection={activeSection} />

      <main>
        <section id="home">
          <Hero />
        </section>
        
        <section id="services">
          <Services />
        </section>

        <section id="process">
          <Process />
        </section>

        <section id="results">
          <Results />
        </section>

        <section id="pricing">
          <Pricing />
        </section>

        <section id="about">
          <About />
        </section>

        <section id="audit">
          <AuditForm />
        </section>

        <section id="faq">
          <FAQ />
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default App;
