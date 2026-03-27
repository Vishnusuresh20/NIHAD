import { motion } from 'framer-motion';
import { Target, Lightbulb, Trophy } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4 z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary font-medium tracking-wider uppercase text-sm">Who I Am</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-2 text-slate-800 dark:text-white">
            About <span className="text-gradient">Me</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mt-6 rounded-full"></div>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2 relative"
          >
            <div className="aspect-square max-w-md mx-auto relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary to-secondary rounded-2xl transform rotate-3 scale-105 opacity-50 dark:opacity-30"></div>
              <div className="glass-card w-full h-full relative z-10 flex flex-col items-center justify-center rounded-2xl overflow-hidden">
                <img src="/about.png" alt="BCA Graduate" className="w-full h-full object-cover object-top" />
                <div className="absolute bottom-6 inline-flex items-center gap-2 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm px-4 py-2 rounded-full font-medium text-slate-700 dark:text-slate-300 shadow-lg">
                  <Trophy size={16} className="text-yellow-500" />
                  BCA Graduate
                </div>
              </div>
              
              {/* Decorative dots */}
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjIiIGZpbGw9IiMzYjgyZjYiIGZpbGwtb3BhY2l0eT0iMC4yIi8+PC9zdmc+')]"></div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2"
          >
            <h3 className="text-2xl font-bold mb-6 text-slate-800 dark:text-white">
              Marketing Director & Growth Strategist
            </h3>
            
            <p className="text-lg text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
              I am a results-driven <strong className="text-slate-800 dark:text-slate-200">Marketing Director</strong> with over 4 years of experience in the educational consultancy sector. I specialize in <strong className="text-primary">B2B deals</strong>, strategic growth, and student admission consulting.
            </p>
            
            <p className="text-lg text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
              With a strong background in technology and marketing, I combine analytical thinking with creative execution to deliver impactful results.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
              <div className="glass-card p-5">
                <Target className="text-primary mb-3" size={28} />
                <h4 className="font-bold text-slate-800 dark:text-white mb-2">Student Admissions</h4>
                <p className="text-sm text-slate-500 dark:text-slate-400">Successfully closed multiple high-value student admissions.</p>
              </div>
              <div className="glass-card p-5">
                <Lightbulb className="text-secondary mb-3" size={28} />
                <h4 className="font-bold text-slate-800 dark:text-white mb-2">B2B Educational Deals</h4>
                <p className="text-sm text-slate-500 dark:text-slate-400">Expertise in direct institutional partnerships and growth.</p>
              </div>
            </div>
            
            <a href="#contact" className="btn-primary inline-flex">
              Let's Talk About Your Goals
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
