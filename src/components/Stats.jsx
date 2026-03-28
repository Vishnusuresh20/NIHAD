import { motion } from 'framer-motion';
import { Briefcase, Users, Handshake, Star } from 'lucide-react';

const statsData = [
  { id: 1, icon: <Briefcase />, count: '4+', label: 'Years Experience' },
  { id: 2, icon: <Users />, count: '50+', label: 'Student success' },
  { id: 3, icon: <Handshake />, count: '10+', label: 'Partner Institutions' },
  { id: 4, icon: <Star />, count: '100%', label: 'Client Satisfaction' },
];

const Stats = () => {
  return (
    <section className="py-12 relative z-10 -mt-16 md:-mt-24 lg:-mt-32 px-4">
      <div className="container mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {statsData.map((stat, index) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="glass-card p-6 flex flex-col items-center justify-center text-center group hover:bg-white/90 dark:hover:bg-slate-800/90 transition-all cursor-default"
            >
              <div className="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                {stat.icon}
              </div>
              <h3 className="text-3xl md:text-4xl font-bold text-slate-800 dark:text-white mb-1">
                {stat.count}
              </h3>
              <p className="text-sm font-medium text-slate-500 dark:text-slate-400">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
