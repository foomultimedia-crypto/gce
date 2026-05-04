import { motion } from 'motion/react';
import { Keyboard, Laptop, BookOpen, Calculator, FileText, Code } from 'lucide-react';

const courses = [
  {
    id: 'typing',
    title: 'Typewriting',
    subtitle: 'English & Tamil',
    description: 'Master the mechanical and electronic typewriter with speed and accuracy. Courses for Junior & Senior grades.',
    icon: <Keyboard className="text-brand-primary" size={32} />,
    color: 'bg-blue-50',
    tags: ['Govt Exams', 'Certificates']
  },
  {
    id: 'coa',
    title: 'COA',
    subtitle: 'Office Automation',
    description: 'Comprehensive training in Computer on Office Automation, essential for state government jobs.',
    icon: <Laptop className="text-orange-500" size={32} />,
    color: 'bg-orange-50',
    tags: ['TNDTE', 'Top Demand']
  },
  {
    id: 'tally',
    title: 'Tally Prime',
    subtitle: 'GST & Accounts',
    description: 'Learn professional accounting and GST filing with the latest Tally Prime software.',
    icon: <Calculator className="text-green-500" size={32} />,
    color: 'bg-green-50',
    tags: ['Accounting', 'Business']
  },
  {
    id: 'shorthand',
    title: 'Stenography',
    subtitle: 'Shorthand',
    description: 'Professional shorthand speed training in English and Tamil for personal secretary roles.',
    icon: <FileText className="text-purple-500" size={32} />,
    color: 'bg-purple-50',
    tags: ['Speedwriting', 'Pro']
  },
  {
    id: 'pgdca',
    title: 'PGDCA',
    subtitle: 'Post Graduate Diploma',
    description: 'Advanced computer applications course covering programming, web design, and databases.',
    icon: <Code className="text-red-500" size={32} />,
    color: 'bg-red-50',
    tags: ['Diploma', 'IT Career']
  },
  {
    id: 'dca',
    title: 'DCA',
    subtitle: 'Diploma in Computer',
    description: 'Foundational computer knowledge and office applications for beginners and students.',
    icon: <BookOpen className="text-cyan-500" size={32} />,
    color: 'bg-cyan-50',
    tags: ['Basics', 'Certificate']
  }
];

export default function Courses() {
  return (
    <section id="courses" className="py-24 bg-bg-soft relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-indigo-500/5 rounded-full blur-[100px] -translate-x-1/2"></div>
      
      <div className="container-custom relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-cyan-400 font-bold uppercase tracking-[0.3em] text-xs mb-4"
          >
            OUR EXPERTISE
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-extrabold text-white mb-6 tracking-tighter"
          >
            Tailored Courses for <br />
            <span className="text-gradient">Industry Readiness.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-400 max-w-2xl mx-auto text-lg leading-relaxed"
          >
            From heritage skill like shorthand to modern software excellence, we provide certificates that change careers.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, i) => (
            <motion.div
              key={course.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-slate-900/50 p-8 rounded-3xl border border-white/5 backdrop-blur-sm hover:border-cyan-500/30 transition-all group lg:mt-0 shadow-2xl"
            >
              <div className={`w-16 h-16 ${course.id === 'typing' ? 'bg-cyan-500/10' : course.id === 'coa' ? 'bg-orange-500/10' : course.id === 'tally' ? 'bg-green-500/10' : course.id === 'shorthand' ? 'bg-purple-500/10' : course.id === 'pgdca' ? 'bg-red-500/10' : 'bg-cyan-500/10'} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                <div className={`${course.id === 'typing' ? 'text-cyan-400' : course.id === 'coa' ? 'text-orange-400' : course.id === 'tally' ? 'text-green-400' : course.id === 'shorthand' ? 'text-purple-400' : course.id === 'pgdca' ? 'text-red-400' : 'text-cyan-400'}`}>
                  {course.icon}
                </div>
              </div>
              <h3 className="text-2xl font-display font-bold text-white mb-1 tracking-tight">{course.title}</h3>
              <p className="text-sm font-bold text-slate-500 uppercase tracking-widest mb-4">{course.subtitle}</p>
              <p className="text-slate-400 mb-6 leading-relaxed line-clamp-3">
                {course.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-8">
                {course.tags.map(tag => (
                  <span key={tag} className="px-3 py-1 bg-white/5 text-slate-400 border border-white/5 rounded-full text-[10px] font-bold uppercase tracking-wider">
                    {tag}
                  </span>
                ))}
              </div>
              <button className="text-cyan-400 font-bold flex items-center gap-2 group-hover:gap-3 transition-all uppercase text-xs tracking-widest">
                Learn More
                <div className="w-8 h-[2px] bg-cyan-400" />
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
