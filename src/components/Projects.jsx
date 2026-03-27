import { motion } from 'framer-motion';
import { ExternalLink, Github, Database, Code, Globe } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: "Student Management System",
    description: "A web-based system to manage student records, admissions, and data efficiently. Features real-time tracking, reporting, and secure data handling.",
    tech: ["Python", "Flask", "SQLite", "HTML/CSS"],
    icon: <Database size={24} />,
    featured: true
  },
  {
    id: 2,
    title: "B2B Educational Portal",
    description: "A strategic platform connecting educational institutions with prospective students, streamlining the B2B deal process and lead management.",
    tech: ["Python", "Flask", "Web Technologies"],
    icon: <Globe size={24} />,
    featured: false
  },
  {
    id: 3,
    title: "Marketing Analytics Tool",
    description: "Internal dashboard for tracking campaign performance, student conversion rates, and ROI metrics across partner institutions.",
    tech: ["Python", "Pandas", "Analytics"],
    icon: <Code size={24} />,
    featured: false
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-24">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary font-medium tracking-wider uppercase text-sm">My Work</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-2 text-slate-800 dark:text-white">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mt-6 rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`glass-card overflow-hidden group flex flex-col h-full ${
                project.featured ? 'border-primary/50 dark:border-primary/50 ring-1 ring-primary/20' : ''
              }`}
            >
              {project.featured && (
                <div className="bg-gradient-to-r from-primary to-secondary text-white text-xs font-bold px-3 py-1 uppercase tracking-wider text-center">
                  Featured Project
                </div>
              )}
              
              <div className="p-8 flex flex-col flex-grow">
                <div className="flex justify-between items-start mb-6">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                    {project.icon}
                  </div>
                  <div className="flex gap-3">
                    <a href="#" className="text-slate-400 hover:text-primary transition-colors" aria-label="Github">
                      <Github size={20} />
                    </a>
                    <a href="#" className="text-slate-400 hover:text-primary transition-colors" aria-label="Demo">
                      <ExternalLink size={20} />
                    </a>
                  </div>
                </div>
                
                <h3 className="text-xl font-bold mb-3 text-slate-800 dark:text-white group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-slate-600 dark:text-slate-400 mb-6 flex-grow text-sm leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="text-xs font-medium px-2.5 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
