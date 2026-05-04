import { motion } from 'motion/react';
import { Monitor, Award, Heart, ShieldCheck, Zap, MessageSquare } from 'lucide-react';

const features = [
  {
    title: 'Modern Lab',
    desc: 'Equipped with the latest high-performance computers and software.',
    icon: <Monitor size={24} />
  },
  {
    title: 'Govt. Certificate',
    desc: 'Our certificates are recognized for state and central government jobs.',
    icon: <Award size={24} />
  },
  {
    title: 'Expert Trainers',
    desc: 'Learn from instructors with 15+ years of teaching experience.',
    icon: <Heart size={24} />
  },
  {
    title: 'Safe Environment',
    desc: 'Dedicated batches for women and children in a secure campus.',
    icon: <ShieldCheck size={24} />
  },
  {
    title: 'Fast-track Batches',
    desc: 'Flexible morning and evening timings for working professionals.',
    icon: <Zap size={24} />
  },
  {
    title: 'Doubt Clearing',
    desc: 'One-on-one sessions for difficult concepts and exam prep.',
    icon: <MessageSquare size={24} />
  }
];

export default function Features() {
  return (
    <section id="about" className="py-24 overflow-hidden bg-bg-dark">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="order-2 lg:order-1"
          >
            <div className="grid grid-cols-2 gap-6">
              {features.map((feature, i) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="p-6 rounded-3xl border border-white/5 bg-slate-900/40 hover:border-cyan-500/20 hover:bg-slate-900/60 transition-colors"
                >
                  <div className="text-cyan-400 mb-4 p-3 bg-cyan-500/10 rounded-2xl w-fit">
                    {feature.icon}
                  </div>
                  <h4 className="font-display font-bold text-white mb-2">{feature.title}</h4>
                  <p className="text-sm text-slate-400 leading-relaxed">{feature.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="order-1 lg:order-2 space-y-8"
          >
            <div className="inline-flex items-center px-4 py-2 rounded-full border border-indigo-500/30 bg-indigo-500/5 text-indigo-400 text-xs font-bold tracking-[0.2em] uppercase">
              Heritage of Excellence
            </div>
            <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-8 leading-tight tracking-tighter">
              Why generations of <br />
              <span className="text-gradient">students trust GCE?</span>
            </h2>
            <div className="space-y-6">
              <p className="text-xl text-slate-300 leading-relaxed font-medium italic border-l-4 border-cyan-500 pl-6 py-2">
                "Our mission is to bridge the digital divide in our community by providing quality education at affordable costs."
              </p>
              <p className="text-slate-400 leading-relaxed text-lg">
                Founded in 2002, GCE Computer and Typewriting center has evolved from a small typing classroom to a comprehensive digital education hub. We specialize in TNDTE technical examinations and career-oriented diplomas.
              </p>
              <div className="pt-6">
                <button className="px-10 py-4 bg-slate-100 text-black rounded-xl font-bold hover:bg-cyan-400 transition-colors shadow-2xl">
                  Our Success Story
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
