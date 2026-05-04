import { motion, useScroll, useTransform } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import Logo from './Logo';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { scrollY } = useScroll();
  
  const backgroundColor = useTransform(
    scrollY,
    [0, 50],
    ['rgba(9, 9, 11, 0)', 'rgba(9, 9, 11, 0.8)']
  );
  
  const borderBottom = useTransform(
    scrollY,
    [0, 50],
    ['1px solid rgba(255, 255, 255, 0)', '1px solid rgba(255, 255, 255, 0.05)']
  );

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Courses', href: '#courses' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <motion.nav
      style={{ backgroundColor, borderBottom }}
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 backdrop-blur-sm"
    >
      <div className="container-custom py-8 flex items-center justify-between">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="group cursor-pointer"
        >
          <Logo />
        </motion.div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link, i) => (
            <motion.a
              key={link.name}
              href={link.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="text-sm font-medium text-slate-400 uppercase tracking-widest hover:text-cyan-400 transition-colors"
            >
              {link.name}
            </motion.a>
          ))}
          <motion.a
            href="https://www.typing.com/student/lessons"
            target="_blank"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="px-6 py-2 bg-white text-black text-sm font-bold rounded-full hover:bg-cyan-400 hover:text-black transition-colors shadow-xl inline-block"
          >
            PORTAL LOGIN
          </motion.a>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <motion.div
        initial={false}
        animate={isOpen ? { height: 'auto', opacity: 1 } : { height: 0, opacity: 0 }}
        className="md:hidden overflow-hidden bg-bg-dark border-b border-white/5"
      >
        <div className="flex flex-col gap-4 py-8 px-6 text-center">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-lg font-display font-medium text-slate-400 uppercase tracking-widest hover:text-cyan-400"
            >
              {link.name}
            </a>
          ))}
          <a 
            href="https://www.typing.com/student/lessons" 
            target="_blank"
            className="bg-white text-black py-4 rounded-full font-bold inline-block"
          >
            PORTAL LOGIN
          </a>
        </div>
      </motion.div>
    </motion.nav>
  );
}
