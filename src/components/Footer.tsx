import { Mail, Phone, MapPin, Instagram, Facebook, Linkedin } from 'lucide-react';
import Logo from './Logo';

export default function Footer() {
  return (
    <footer className="bg-bg-dark text-slate-400 pt-24 pb-12 border-t border-white/5">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <Logo />
            <p className="text-sm leading-relaxed text-slate-400 max-w-xs">
              Pioneers in computer education and typewriting training. Committed to excellence since 2002.
            </p>
            <div className="flex gap-4">
              <a href="#" className="p-2 bg-white/5 border border-white/5 rounded-lg text-slate-400 hover:text-cyan-400 hover:bg-white/10 transition-colors">
                <Instagram size={18} />
              </a>
              <a href="#" className="p-2 bg-white/5 border border-white/5 rounded-lg text-slate-400 hover:text-cyan-400 hover:bg-white/10 transition-colors">
                <Facebook size={18} />
              </a>
              <a href="#" className="p-2 bg-white/5 border border-white/5 rounded-lg text-slate-400 hover:text-cyan-400 hover:bg-white/10 transition-colors">
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-display font-bold mb-6 uppercase text-xs tracking-[0.3em]">Quick Links</h4>
            <ul className="space-y-4 text-sm">
              <li><a href="#" className="hover:text-cyan-400 transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-cyan-400 transition-colors">About Us</a></li>
              <li><a href="#courses" className="hover:text-cyan-400 transition-colors">Our Courses</a></li>
              <li><a href="#contact" className="hover:text-cyan-400 transition-colors">Support</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition-colors">Gallery</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-display font-bold mb-6 uppercase text-xs tracking-[0.3em]">Courses</h4>
            <ul className="space-y-4 text-sm">
              <li><a href="#" className="hover:text-cyan-400 transition-colors">Typewriting (Eng/Tam)</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition-colors">COA Mastery</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition-colors">Tally Prime GST</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition-colors">Shorthand Skills</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition-colors">PGDCA / IT Diploma</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-display font-bold mb-6 uppercase text-xs tracking-[0.3em]">Contact Us</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-cyan-400 shrink-0" />
                <span>Periyampatti,<br />Dharmapuri Main Road</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-cyan-400 shrink-0" />
                <span>9698053366</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-cyan-400 shrink-0" />
                <span>contact@gcecenter.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] text-slate-600 uppercase tracking-[0.4em] font-bold">
          <p>© 2026 GCE Computer & Typewriting Center.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
