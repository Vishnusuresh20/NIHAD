import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Quote, ChevronLeft, ChevronRight, Star } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: "Rahul Sharma",
    role: "MBBS Student, Mangalore",
    text: "Nihad's guidance was instrumental in my medical admission process. He made the complex paperwork feel simple and helped me secure a seat in my dream college.",
    initials: "RS",
    color: "bg-blue-500"
  },
  {
    id: 2,
    name: "Sreelakshmi Nair",
    role: "B.Tech Student, Bengaluru",
    text: "I was confused about which path to take after my higher secondary. Nihad's career counseling gave me clarity and led me to a great engineering college.",
    initials: "SN",
    color: "bg-purple-500"
  },
  {
    id: 3,
    name: "Mohammed Faizal",
    role: "MBA Aspirant",
    text: "The admission consulting provided by Nihad is top-notch. He understands the requirements of every student and suggests the best institutional options.",
    initials: "MF",
    color: "bg-emerald-500"
  },
  {
    id: 4,
    name: "Karthick S",
    role: "BCA Graduate, Calicut",
    text: "From entrance exam tips to final placement guidance, Nihad has been a mentor throughout my academic journey. Highly recommended for any student.",
    initials: "KS",
    color: "bg-orange-500"
  }
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-24 bg-slate-50 dark:bg-slate-900/50">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary font-medium tracking-wider uppercase text-sm">Social Proof</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-2 text-slate-800 dark:text-white">
            What People <span className="text-gradient">Say</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mt-6 rounded-full"></div>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="relative glass-card p-8 md:p-12 overflow-hidden">
            <Quote size={120} className="absolute -top-6 -left-6 text-primary/5 dark:text-primary/10 rotate-180 z-0" />
            
            <div className="relative z-10 min-h-[250px] flex flex-col justify-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.3 }}
                  className="flex flex-col items-center text-center"
                >
                  <div className="flex gap-1 mb-6 text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={20} fill="currentColor" />
                    ))}
                  </div>
                  
                  <p className="text-xl md:text-2xl font-medium text-slate-700 dark:text-slate-300 mb-8 italic leading-relaxed">
                    "{testimonials[currentIndex].text}"
                  </p>
                  
                  <div className="flex flex-col items-center gap-4">
                    <div className={`w-16 h-16 rounded-full flex items-center justify-center text-white font-bold text-2xl ${testimonials[currentIndex].color} shadow-lg ring-4 ring-white dark:ring-slate-800 mb-2`}>
                      {testimonials[currentIndex].initials}
                    </div>
                    <div className="text-center">
                      <h4 className="font-bold text-slate-800 dark:text-white text-lg">{testimonials[currentIndex].name}</h4>
                      <p className="text-sm font-medium text-primary">{testimonials[currentIndex].role}</p>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Controls */}
            <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 flex justify-between px-2 md:px-6 pointer-events-none">
              <button 
                onClick={prev}
                className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white dark:bg-slate-800 shadow-lg flex items-center justify-center text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-primary pointer-events-auto transition-transform hover:scale-110 border border-slate-100 dark:border-slate-700"
                aria-label="Previous testimonial"
              >
                <ChevronLeft size={24} />
              </button>
              <button 
                onClick={next}
                className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white dark:bg-slate-800 shadow-lg flex items-center justify-center text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-primary pointer-events-auto transition-transform hover:scale-110 border border-slate-100 dark:border-slate-700"
                aria-label="Next testimonial"
              >
                <ChevronRight size={24} />
              </button>
            </div>
          </div>
          
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentIndex ? 'bg-primary w-8' : 'bg-slate-300 dark:bg-slate-600 hover:bg-primary/50'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
