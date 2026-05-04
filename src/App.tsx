/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Courses from './components/Courses';
import Features from './components/Features';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { motion, useScroll, useSpring } from 'motion/react';

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="relative antialiased">
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-brand-primary z-[100] origin-left"
        style={{ scaleX }}
      />

      <Navbar />
      
      <main className="bg-bg-dark">
        <Hero />
        
        {/* About Section - Simple text block */}
        <section className="py-12 bg-bg-dark border-y border-white/5 relative overflow-hidden">
          <div className="container-custom">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="flex items-center gap-6">
                <div className="w-16 h-16 bg-gradient-to-tr from-cyan-500 to-indigo-600 rounded-full flex items-center justify-center text-white shrink-0 shadow-lg shadow-cyan-500/10">
                  <span className="text-xl font-bold italic font-display">GCE</span>
                </div>
                <div>
                  <h3 className="font-display font-bold text-xl uppercase tracking-widest text-white">Quality Training Since 2002</h3>
                  <p className="text-slate-500 text-xs font-bold uppercase tracking-widest">Recognized by Government of Tamil Nadu</p>
                </div>
              </div>
              <div className="flex gap-12">
                <div className="text-center">
                  <p className="text-3xl font-display font-bold text-cyan-400 tracking-tighter">25+</p>
                  <p className="text-[10px] uppercase font-bold text-slate-500 tracking-[0.2em]">Years</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-display font-bold text-cyan-400 tracking-tighter">150+</p>
                  <p className="text-[10px] uppercase font-bold text-slate-500 tracking-[0.2em]">Batches</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-display font-bold text-cyan-400 tracking-tighter">100%</p>
                  <p className="text-[10px] uppercase font-bold text-slate-500 tracking-[0.2em]">Result</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Features />
        
        <Courses />

        {/* Call to action center section */}
        <section className="py-32 bg-bg-dark relative overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-cyan-500/10 rounded-full blur-[120px]" />
          <div className="container-custom relative z-10 text-center">
            <motion.h2 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="text-5xl md:text-7xl font-display font-bold text-white mb-8 tracking-tighter"
            >
              Building Careers, <br />
              <span className="text-gradient">One Stroke at a Time.</span>
            </motion.h2>
            <p className="text-slate-400 text-lg mb-12 max-w-xl mx-auto leading-relaxed">
              Join the most trusted computer and typewriting center in the region. 
              Modern syllabus, heritage excellence.
            </p>
            <button className="px-12 py-5 bg-white text-black rounded-full font-black text-xs uppercase tracking-[0.3em] hover:bg-cyan-400 transition-all shadow-2xl hover:scale-105 active:scale-95">
              Get Started Today
            </button>
          </div>
        </section>

        <section className="py-24 bg-bg-dark overflow-hidden border-t border-white/5">
          <div className="container-custom mb-12 text-center">
            <p className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.4em]">Our Alumni Placed In</p>
          </div>
          <div className="flex overflow-hidden group">
            <motion.div 
              animate={{ x: [0, -1000] }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              className="flex gap-24 items-center justify-center min-w-full shrink-0"
            >
              {['TCS', 'WIPRO', 'HCL', 'ZOHO', 'GOVT OF TN', 'SBI', 'ICICI', 'ACCENTURE', 'INFOSYS'].map((company, i) => (
                <span key={i} className="text-4xl md:text-6xl font-display font-black text-white/5 group-hover:text-cyan-500/10 transition-colors uppercase tracking-widest">
                  {company}
                </span>
              ))}
            </motion.div>
            <motion.div 
              animate={{ x: [0, -1000] }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              className="flex gap-24 items-center justify-center min-w-full shrink-0"
            >
              {['TCS', 'WIPRO', 'HCL', 'ZOHO', 'GOVT OF TN', 'SBI', 'ICICI', 'ACCENTURE', 'INFOSYS'].map((company, i) => (
                <span key={i} className="text-4xl md:text-6xl font-display font-black text-white/5 group-hover:text-cyan-500/10 transition-colors uppercase tracking-widest">
                  {company}
                </span>
              ))}
            </motion.div>
          </div>
        </section>

        <Contact />

      </main>

      <Footer />

      {/* Floating WhatsApp Button */}
      <a 
        href="https://wa.me/9698053366" 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 z-[60] bg-green-500 text-white w-16 h-16 rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform active:scale-95 group"
      >
        <svg viewBox="0 0 24 24" width="32" height="32" fill="currentColor">
          <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.771-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86.174.088.275.073.376-.044.101-.117.433-.506.548-.68.116-.174.231-.145.39-.087.159.058 1.011.477 1.184.564.173.087.289.129.332.202.043.073.043.423-.101.827z"/>
          <path d="M12.094 2c-5.514 0-9.99 4.476-9.99 9.99 0 2.048.62 3.953 1.685 5.541l-1.789 6.469 6.633-1.742c1.488.85 3.197 1.332 5.011 1.332 5.514 0 9.99-4.476 9.99-9.99s-4.476-9.99-9.99-9.99zm0 18c-1.577 0-3.057-.428-4.329-1.175l-.31-.182-3.21.843.869-3.137-.201-.32c-.813-1.292-1.268-2.801-1.268-4.406 0-4.605 3.743-8.348 8.348-8.348 4.605 0 8.35 3.743 8.35 8.348-.002 4.605-3.745 8.348-8.35 8.348z"/>
        </svg>
        <div className="absolute right-full mr-4 bg-slate-900 text-white px-4 py-2 rounded-lg text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
          Message us on WhatsApp
        </div>
      </a>
    </div>
  );
}

