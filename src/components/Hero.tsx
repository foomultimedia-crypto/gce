import { motion } from 'motion/react';
import { MousePointer2, Keyboard, Award, Users } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-bg-dark">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-cyan-900/10 rounded-full blur-[120px] -mr-48 -mt-48 transition-opacity duration-1000"></div>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-indigo-900/10 rounded-full blur-[100px] -ml-24 -mb-24 transition-opacity duration-1000"></div>
      
      <div className="container-custom z-10 w-full px-6 lg:px-12">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-7 space-y-6"
          >
            <div className="inline-flex items-center px-3 py-1 rounded-full border border-cyan-500/30 bg-cyan-500/5 text-cyan-400 text-xs font-semibold tracking-wider">
              <span className="w-2 h-2 bg-cyan-400 rounded-full mr-2 animate-pulse"></span>
              GOVERNMENT RECOGNIZED CENTER
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold leading-[1.1] tracking-tighter text-white">
              Master the <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-500">Future of Skills</span>
            </h1>
            <p className="text-lg text-slate-400 max-w-lg leading-relaxed">
              Advanced computer education and professional typewriting training. 
              Join GCE Computer and Typewriting Center to accelerate your career with certified expertise.
            </p>
            
            <div className="flex flex-wrap gap-4 pt-4">
              <button className="px-8 py-4 bg-cyan-600 rounded-xl font-bold text-white shadow-lg shadow-cyan-900/40 hover:bg-cyan-500 transition-all hover:-translate-y-1 active:scale-95">
                Explore Courses
              </button>
              <button className="px-8 py-4 bg-slate-800 border border-slate-700 rounded-xl font-bold text-white hover:bg-slate-700 transition-all active:scale-95">
                Contact Us
              </button>
            </div>

            <div className="mt-12 flex items-center gap-12 border-t border-white/5 pt-8">
              <div className="flex flex-col">
                <span className="text-3xl font-bold text-white">12k+</span>
                <span className="text-[10px] text-slate-500 uppercase tracking-tighter font-semibold">Students Graduated</span>
              </div>
              <div className="flex flex-col">
                <span className="text-3xl font-bold text-white">25+</span>
                <span className="text-[10px] text-slate-500 uppercase tracking-tighter font-semibold">Years Excellence</span>
              </div>
              <div className="flex flex-col">
                <span className="text-3xl font-bold text-white">100%</span>
                <span className="text-[10px] text-slate-500 uppercase tracking-tighter font-semibold">Result Guarantee</span>
              </div>
            </div>
          </motion.div>

          {/* Right Side Grid of Cards (from Elegant Dark Design) */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="lg:col-span-5 grid grid-cols-2 gap-4"
          >
            <motion.div 
              whileHover={{ y: -5 }}
              className="p-6 bg-slate-900/50 border border-white/5 rounded-3xl backdrop-blur-sm space-y-4"
            >
              <div className="w-12 h-12 bg-cyan-500/10 rounded-2xl flex items-center justify-center">
                <Keyboard className="text-cyan-400" size={24} />
              </div>
              <h3 className="font-bold text-white">Advanced Typing</h3>
              <p className="text-xs text-slate-500">English & Tamil Junior/Senior levels with precision.</p>
            </motion.div>

            <motion.div 
              whileHover={{ y: -5 }}
              className="p-6 bg-slate-900/50 border border-white/5 rounded-3xl backdrop-blur-sm space-y-4 translate-y-8"
            >
              <div className="w-12 h-12 bg-indigo-500/10 rounded-2xl flex items-center justify-center">
                <MousePointer2 className="text-indigo-400" size={24} />
              </div>
              <h3 className="font-bold text-white">IT Courses</h3>
              <p className="text-xs text-slate-500">Python, Web development & Office Automation tracks.</p>
            </motion.div>

            <motion.div 
              whileHover={{ y: -5 }}
              className="p-6 bg-slate-900/50 border border-white/5 rounded-3xl backdrop-blur-sm space-y-4"
            >
              <div className="w-12 h-12 bg-emerald-500/10 rounded-2xl flex items-center justify-center">
                <Award className="text-emerald-400" size={24} />
              </div>
              <h3 className="font-bold text-white">Certifications</h3>
              <p className="text-xs text-slate-500">Government recognized TNDTE approved degrees.</p>
            </motion.div>

            <motion.div 
              whileHover={{ y: -5 }}
              className="p-6 bg-slate-900/50 border border-white/5 rounded-3xl backdrop-blur-sm space-y-4 translate-y-8"
            >
              <div className="w-12 h-12 bg-pink-500/10 rounded-2xl flex items-center justify-center">
                <Users className="text-pink-400" size={24} />
              </div>
              <h3 className="font-bold text-white">Placement Cell</h3>
              <p className="text-xs text-slate-500">Dedicated career support and local job referrals.</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
