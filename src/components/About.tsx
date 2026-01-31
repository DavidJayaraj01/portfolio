import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { MapPin, Mail, Phone } from 'lucide-react';
import { personalInfo } from '../utils/constants';
import GradientText from './GradientText';
import { slideUp, fadeIn } from '../utils/animations';

const About: React.FC = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section id="about" className="section-padding bg-dark-bg/50 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div 
          className="absolute top-20 left-10 w-72 h-72 bg-orange-500/10 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 5, repeat: Infinity }}
        />
        <motion.div 
          className="absolute bottom-20 right-10 w-96 h-96 bg-red-500/10 rounded-full blur-3xl"
          animate={{ 
            scale: [1.2, 1, 1.2],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 7, repeat: Infinity }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={slideUp}
          className="text-center mb-16"
        >
          <GradientText as="h2" className="text-4xl md:text-5xl font-bold mb-4">
            About Me
          </GradientText>
          <p className="text-slate-400 text-lg">Get to know more about who I am and what I do</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left - Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            {/* Profile Image with animated border */}
            <div className="relative w-full max-w-md mx-auto">
              {/* Animated gradient border */}
              <motion.div
                className="absolute -inset-1 bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500 rounded-2xl opacity-75 blur-sm"
                animate={{
                  backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                }}
                transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                style={{ backgroundSize: '200% 200%' }}
              />
              
              {/* Image container */}
              <div className="relative aspect-square rounded-2xl overflow-hidden border-2 border-orange-500/30 bg-dark-card">
                <img 
                  src="/david.png" 
                  alt="David Jayaraj A"
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
                
                {/* Overlay gradient on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-dark-bg/80 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
                  <GradientText as="span" className="text-xl font-bold">
                    {personalInfo.name}
                  </GradientText>
                </div>
              </div>
              
              {/* Decorative elements */}
              <motion.div
                className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-r from-red-500 to-orange-500 rounded-full"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <motion.div
                className="absolute -bottom-4 -left-4 w-6 h-6 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-full"
                animate={{ scale: [1.2, 1, 1.2] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </div>

            {/* Contact Info Cards */}
            <motion.div
              className="mt-8 space-y-3"
              variants={fadeIn}
            >
              <motion.div 
                className="card flex items-center gap-3 glow-hover"
                whileHover={{ x: 10, scale: 1.02 }}
              >
                <MapPin className="text-orange-500" size={20} />
                <span className="text-slate-300">{personalInfo.location}</span>
              </motion.div>
              <motion.div 
                className="card flex items-center gap-3 glow-hover"
                whileHover={{ x: 10, scale: 1.02 }}
              >
                <Mail className="text-orange-500" size={20} />
                <a href={`mailto:${personalInfo.email}`} className="text-slate-300 hover:text-orange-500 transition-colors">
                  {personalInfo.email}
                </a>
              </motion.div>
              <motion.div 
                className="card flex items-center gap-3 glow-hover"
                whileHover={{ x: 10, scale: 1.02 }}
              >
                <Phone className="text-orange-500" size={20} />
                <a href={`tel:${personalInfo.phone}`} className="text-slate-300 hover:text-orange-500 transition-colors">
                  {personalInfo.phone}
                </a>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Right - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="prose prose-invert max-w-none">
              {personalInfo.about.split('\n\n').map((paragraph, index) => (
                <motion.p
                  key={index}
                  className="text-slate-300 leading-relaxed mb-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                >
                  {paragraph}
                </motion.p>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
