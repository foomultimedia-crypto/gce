import { motion } from 'motion/react';
import { Send, MapPin, Phone, Mail } from 'lucide-react';
import { useState, FormEvent } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    course: 'Typewriting (English & Tamil)',
    message: ''
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const whatsappNumber = '9698053366';
    const text = `Hello GCE Center!%0A%0AMy Name: ${formData.name}%0AEmail: ${formData.email}%0ACourse: ${formData.course}%0AMessage: ${formData.message}`;
    window.open(`https://wa.me/${whatsappNumber}?text=${text}`, '_blank');
  };

  return (
    <section id="contact" className="py-24 bg-bg-dark">
      <div className="container-custom">
        <div className="bg-slate-900/50 rounded-[3rem] border border-white/5 overflow-hidden lg:flex backdrop-blur-xl shadow-2xl">
          <div className="lg:w-1/2 p-8 md:p-16 lg:p-24 bg-gradient-to-br from-cyan-600 to-indigo-700 text-white space-y-12 relative overflow-hidden">
            {/* Background pattern */}
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10" />
            
            <div className="relative z-10">
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 italic tracking-tighter">Ready to start your <br /> career path?</h2>
              <p className="text-white/80 text-lg leading-relaxed">Visit us for a demo class or send a message for course details and fee structure.</p>
            </div>

            <div className="space-y-8 relative z-10">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white/10 rounded-xl border border-white/10 flex items-center justify-center shrink-0">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-bold mb-1 uppercase tracking-widest text-xs opacity-70">Our Location</h4>
                  <p className="text-white font-medium">Periyampatti, Dharmapuri Main Road</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white/10 rounded-xl border border-white/10 flex items-center justify-center shrink-0">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="font-bold mb-1 uppercase tracking-widest text-xs opacity-70">Call Us</h4>
                  <p className="text-white font-medium">9698053366</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white/10 rounded-xl border border-white/10 flex items-center justify-center shrink-0">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="font-bold mb-1 uppercase tracking-widest text-xs opacity-70">Email Information</h4>
                  <p className="text-white font-medium">info@gcecenter.com</p>
                </div>
              </div>
            </div>

            <div className="pt-8 relative z-10">
              <div className="w-full h-40 rounded-2xl bg-white/5 border border-white/10 overflow-hidden flex items-center justify-center text-white/20 text-xs font-bold uppercase tracking-[0.5em]">
                GCE Interactive Map
              </div>
            </div>
          </div>

          <div className="lg:w-1/2 p-8 md:p-16 lg:p-24 bg-bg-dark">
            <h3 className="text-3xl font-display font-bold text-white mb-8 tracking-tight">Send us a Message</h3>
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-cyan-400">Full Name</label>
                  <input 
                    type="text" 
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full px-4 py-4 bg-white/5 rounded-xl border border-white/10 text-white focus:border-cyan-400 focus:bg-white/10 outline-none transition-all placeholder:text-slate-600" 
                    placeholder="John Doe" 
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-cyan-400">Email Address</label>
                  <input 
                    type="email" 
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full px-4 py-4 bg-white/5 rounded-xl border border-white/10 text-white focus:border-cyan-400 focus:bg-white/10 outline-none transition-all placeholder:text-slate-600" 
                    placeholder="john@example.com" 
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-cyan-400">Course Interested</label>
                <select 
                  value={formData.course}
                  onChange={(e) => setFormData({...formData, course: e.target.value})}
                  className="w-full px-4 py-4 bg-white/5 rounded-xl border border-white/10 text-white focus:border-cyan-400 focus:bg-white/10 outline-none transition-all appearance-none cursor-pointer"
                >
                  <option className="bg-bg-dark">Typewriting (English & Tamil)</option>
                  <option className="bg-bg-dark">COA (Office Automation)</option>
                  <option className="bg-bg-dark">Tally Prime</option>
                  <option className="bg-bg-dark">Stenography</option>
                  <option className="bg-bg-dark">PGDCA / DCA</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-cyan-400">Message</label>
                <textarea 
                  rows={4} 
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  className="w-full px-4 py-4 bg-white/5 rounded-xl border border-white/10 text-white focus:border-cyan-400 focus:bg-white/10 outline-none transition-all placeholder:text-slate-600" 
                  placeholder="I want to know about the next batch timings..."
                ></textarea>
              </div>

              <button type="submit" className="w-full bg-cyan-600 text-white py-5 rounded-2xl font-bold flex items-center justify-center gap-3 hover:bg-cyan-500 transition-all shadow-xl shadow-cyan-900/40 active:scale-[0.98] uppercase tracking-widest text-sm">
                Send via WhatsApp
                <Send size={18} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
