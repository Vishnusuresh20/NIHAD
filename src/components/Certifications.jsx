import { motion } from 'framer-motion';
import { Award, BookOpen, GraduationCap } from 'lucide-react';

const certifications = [
  {
    id: 1,
    title: "Artificial Intelligence Certification",
    issuer: "Keonics",
    year: "2023",
    icon: <Award className="text-white" size={24} />,
    color: "from-blue-500 to-cyan-500",
    description: "Certified in AI fundamentals, machine learning concepts, and practical applications of artificial intelligence."
  },
  {
    id: 2,
    title: "Diploma in Computer Application",
    issuer: "SCOLE Kerala",
    year: "2022",
    icon: <BookOpen className="text-white" size={24} />,
    color: "from-purple-500 to-pink-500",
    description: "Comprehensive diploma covering computer applications, software fundamentals, and digital literacy."
  },
  {
    id: 3,
    title: "Bachelor of Computer Applications",
    issuer: "University of Kerala",
    year: "2021",
    icon: <GraduationCap className="text-white" size={24} />,
    color: "from-emerald-500 to-teal-500",
    description: "BCA Graduate with strong foundation in computer science, programming, and software development."
  }
];

const Certifications = () => {
  return (
    <section id="certifications" className="py-24">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary font-medium tracking-wider uppercase text-sm">Credentials</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-2 text-slate-800 dark:text-white">
            Certifications & <span className="text-gradient">Education</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mt-6 rounded-full"></div>
        </motion.div>

        <div className="max-w-4xl mx-auto relative">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-primary/30 via-secondary/30 to-transparent -translate-x-1/2 z-0 hidden md:block"></div>

          <div className="space-y-12 relative z-10">
            {certifications.map((cert, index) => (
              <motion.div 
                key={cert.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5 }}
                className={`flex flex-col md:flex-row gap-8 items-center ${
                  index % 2 !== 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Timeline Content */}
                <div className={`w-full md:w-1/2 ${
                  index % 2 !== 0 ? 'md:text-left' : 'md:text-right text-left'
                }`}>
                  <div className={`glass-card p-6 inline-block w-full max-w-md ${
                    index % 2 !== 0 ? 'md:mr-auto' : 'md:ml-auto'
                  } group hover:border-primary/50 transition-colors`}>
                    <div className="flex justify-between items-start mb-4">
                      <div className="bg-slate-100 dark:bg-slate-800 px-3 py-1 rounded-md text-sm font-bold text-slate-700 dark:text-slate-300">
                        {cert.year}
                      </div>
                      <div className="text-primary text-xs font-bold uppercase tracking-wider px-2 py-1 rounded bg-primary/10">
                        Verified
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-2 group-hover:text-primary transition-colors">
                      {cert.title}
                    </h3>
                    
                    <div className="text-primary font-medium mb-4 flex items-center gap-2 justify-start md:justify-end">
                      <span className={`flex items-center gap-2 ${index % 2 !== 0 ? 'flex-row' : 'flex-row md:flex-row-reverse'}`}>
                        <Award size={16} />
                        {cert.issuer}
                      </span>
                    </div>
                    
                    <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                      {cert.description}
                    </p>
                  </div>
                </div>

                {/* Timeline Node */}
                <div className="w-12 h-12 absolute left-4 md:left-1/2 -translate-x-1/2 rounded-full border-4 border-white dark:border-darker shadow-lg z-10 hidden md:flex items-center justify-center">
                  <div className={`w-full h-full rounded-full bg-gradient-to-r ${cert.color} flex items-center justify-center animate-pulse-slow`}>
                    {cert.icon}
                  </div>
                </div>

              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
