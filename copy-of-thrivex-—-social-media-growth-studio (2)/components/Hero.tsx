
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import { TRUST_INDICATORS } from '../constants';

const Hero: React.FC = () => {
  return (
    <div className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <motion.span 
            animate={{ 
              backgroundColor: ["rgba(139, 92, 246, 0.05)", "rgba(139, 92, 246, 0.15)", "rgba(139, 92, 246, 0.05)"],
              borderColor: ["rgba(255, 255, 255, 0.1)", "rgba(139, 92, 246, 0.4)", "rgba(255, 255, 255, 0.1)"]
            }}
            transition={{ duration: 3, repeat: Infinity }}
            className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full glass border border-white/10 text-purple-400 text-sm font-medium mb-8"
          >
            <Sparkles className="w-4 h-4 animate-pulse" />
            <span>The Attention Economy Experts</span>
          </motion.span>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-tight mb-6 font-heading text-glow">
            Grow Faster on Instagram with <br className="hidden md:block" />
            <motion.span 
              initial={{ backgroundPosition: '0% 50%' }}
              animate={{ backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'] }}
              transition={{ duration: 5, repeat: Infinity }}
              className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-cyan-400 bg-[length:200%_auto]"
            >
              High-Retention Reels
            </motion.span>
          </h1>
          
          <p className="text-lg md:text-xl text-slate-400 max-w-3xl mx-auto mb-12">
            ThriveX helps founders, creators, and brands grow using scroll-stopping video edits, 
            proven content strategies, and organic systems that turn views into loyal followers.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16"
        >
          <motion.a
            href="#audit"
            whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(139, 92, 246, 0.5)" }}
            whileTap={{ scale: 0.95 }}
            className="relative group px-10 py-5 bg-purple-600 text-white rounded-2xl font-bold text-xl flex items-center space-x-3 transition-all duration-300 overflow-hidden animate-pulse-glow"
          >
            <span className="relative z-10">👉 Get a Free Social Audit</span>
            <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform relative z-10" />
            <div className="absolute inset-0 bg-white/10 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
            <div className="absolute inset-0 animate-shimmer pointer-events-none opacity-20"></div>
          </motion.a>
          
          <motion.a
            href="#results"
            whileHover={{ scale: 1.02, backgroundColor: "rgba(255, 255, 255, 0.08)" }}
            className="px-10 py-5 glass text-white rounded-2xl font-bold text-xl hover:bg-white/5 transition-all duration-300 border border-white/10"
          >
            👉 See Our Work
          </motion.a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="flex flex-wrap justify-center items-center gap-4 md:gap-10 text-sm text-slate-500 font-medium"
        >
          {TRUST_INDICATORS.map((indicator, idx) => (
            <motion.div 
              key={idx} 
              className="flex items-center space-x-2"
              whileHover={{ color: "#f8fafc", scale: 1.05 }}
            >
              <div className="w-1.5 h-1.5 rounded-full bg-purple-500 animate-pulse"></div>
              <span>{indicator}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Decorative floating particles */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-purple-500/20 rounded-full blur-sm"
          animate={{
            y: [0, -100, 0],
            x: [0, Math.random() * 50 - 25, 0],
            opacity: [0, 0.5, 0]
          }}
          transition={{
            duration: 10 + Math.random() * 5,
            repeat: Infinity,
            delay: i * 2
          }}
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`
          }}
        />
      ))}

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-purple-600/10 blur-[150px] rounded-full -z-10 animate-pulse"></div>
    </div>
  );
};

export default Hero;
