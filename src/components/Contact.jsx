import { motion } from 'framer-motion';
import { Mail, Phone, Instagram, Linkedin } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 -mr-40 -mt-40 w-96 h-96 bg-primary/20 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 -ml-40 -mb-40 w-96 h-96 bg-secondary/20 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="container mx-auto px-4 z-10 relative">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary font-medium tracking-wider uppercase text-sm">Get In Touch</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-2 text-slate-800 dark:text-white">
            Let's <span className="text-gradient">Connect</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mt-6 rounded-full"></div>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* Contact Info */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="w-full text-center"
          >
            <h3 className="text-2xl font-bold text-slate-800 dark:text-white mb-4">Let's work together</h3>
            <p className="text-slate-600 dark:text-slate-400 mb-12 leading-relaxed max-w-2xl mx-auto">
              Have a project or opportunity in mind? I'd love to hear about it. Reach out directly through any of the channels below.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto mb-12 text-left">
              <a href="https://wa.me/917510523001" target="_blank" rel="noreferrer" className="glass-card p-6 flex items-start gap-4 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800/80 transition-all group">
                <div className="w-12 h-12 bg-green-500/10 text-green-500 rounded-full flex items-center justify-center shrink-0 group-hover:bg-green-500 group-hover:text-white transition-colors">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-slate-800 dark:text-white">WhatsApp</h4>
                  <p className="text-slate-600 dark:text-slate-400">+91 7510523001</p>
                </div>
              </a>

              <a href="https://www.linkedin.com/in/nihad-t-6014ab255" target="_blank" rel="noreferrer" className="glass-card p-6 flex items-start gap-4 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800/80 transition-all group">
                <div className="w-12 h-12 bg-blue-500/10 text-blue-500 rounded-full flex items-center justify-center shrink-0 group-hover:bg-blue-500 group-hover:text-white transition-colors">
                  <Linkedin size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-slate-800 dark:text-white">LinkedIn</h4>
                  <p className="text-slate-600 dark:text-slate-400">nihad-t-6014ab255</p>
                </div>
              </a>

              <a href="https://instagram.com/nihadkvofficial" target="_blank" rel="noreferrer" className="glass-card p-6 flex items-start gap-4 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800/80 transition-all group">
                <div className="w-12 h-12 bg-pink-500/10 text-pink-500 rounded-full flex items-center justify-center shrink-0 group-hover:bg-pink-500 group-hover:text-white transition-colors">
                  <Instagram size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-slate-800 dark:text-white">Instagram</h4>
                  <p className="text-slate-600 dark:text-slate-400">@nihadkvofficial</p>
                </div>
              </a>

              <a href="mailto:Kvnihad231@gmail.com" className="glass-card p-6 flex items-start gap-4 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800/80 transition-all group cursor-pointer">
                <div className="w-12 h-12 bg-primary/10 text-primary rounded-full flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-white transition-colors">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-slate-800 dark:text-white">Email</h4>
                  <p className="text-slate-600 dark:text-slate-400">Kvnihad231@gmail.com</p>
                </div>
              </a>
            </div>
            
            <div className="mt-8">
              <a href="https://wa.me/917510523001?text=Hi%20Nihad%2C%20I%20visited%20your%20portfolio%20and%20would%20like%20to%20connect" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-8 py-4 text-lg bg-slate-900 hover:bg-slate-800 text-white font-medium rounded-full transition-all transform hover:-translate-y-1 shadow-lg shadow-slate-900/30">
                <Phone size={20} /> CHAT ON WHATSAPP
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
