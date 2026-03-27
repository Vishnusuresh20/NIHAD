import { motion } from 'framer-motion';
import { Handshake, UserPlus, Megaphone, ArrowRight } from 'lucide-react';

const services = [
  {
    id: 1,
    title: "Educational Consultancy",
    description: "End-to-end B2B direct deals for educational institutions. Building strategic partnerships that drive mutual growth and value.",
    icon: <Handshake size={32} />,
    features: ["Direct B2B Negotiations", "Institutional Partnerships", "Deal Structuring"],
    featured: false
  },
  {
    id: 2,
    title: "Admission Guidance",
    description: "Comprehensive support for students navigating the admission process, from initial counselling to final placement.",
    icon: <UserPlus size={32} />,
    features: ["Career Counselling", "College Selection", "Admission Support"],
    featured: true
  },
  {
    id: 3,
    title: "Strategic Marketing",
    description: "Data-driven marketing strategies specifically tailored for educational institutions to increase enrollment and brand visibility.",
    icon: <Megaphone size={32} />,
    features: ["Digital Marketing", "Brand Strategy", "Campaign Management"],
    featured: false
  }
];

const Services = () => {
  return (
    <section id="services" className="py-24 bg-slate-50 dark:bg-slate-900/50">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-secondary font-medium tracking-wider uppercase text-sm">What I Offer</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-2 text-slate-800 dark:text-white">
            My <span className="text-gradient">Services</span>
          </h2>
          <div className="w-20 h-1 bg-secondary mx-auto mt-6 rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className={`glass-card p-8 relative flex flex-col group overflow-hidden ${
                service.featured ? 'border-secondary/30 ring-1 ring-secondary/20 bg-white/90 dark:bg-slate-800/90' : ''
              }`}
            >
              {service.featured && (
                <div className="absolute top-0 right-0 py-1.5 px-4 bg-secondary text-white text-xs font-bold rounded-bl-lg z-10">
                  Most Popular
                </div>
              )}
              
              <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-colors ${
                service.featured 
                  ? 'bg-gradient-to-br from-primary to-secondary text-white' 
                  : 'bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white'
              }`}>
                {service.icon}
              </div>
              
              <h3 className="text-2xl font-bold mb-4 text-slate-800 dark:text-white group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              
              <p className="text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
                {service.description}
              </p>
              
              <ul className="mb-8 space-y-3 mt-auto">
                {service.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-3 text-slate-700 dark:text-slate-300">
                    <div className="p-1 bg-green-500/10 text-green-500 rounded-full">
                      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                    </div>
                    <span className="text-sm font-medium">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <a href="#contact" className="mt-auto group flex items-center gap-2 text-primary font-bold hover:text-secondary transition-colors">
                Get Started <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
