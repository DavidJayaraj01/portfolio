import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Briefcase } from 'lucide-react';
import { experiences } from '../utils/constants';
import GradientText from './GradientText';
import ExperienceCard from './ExperienceCard';

const Experience: React.FC = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section id="experience" className="section-padding bg-dark-bg/50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-orange-500/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-red-500/20 to-orange-500/20 border border-orange-500/30 mb-6">
            <Briefcase className="w-5 h-5 text-orange-500" />
            <span className="text-sm font-medium text-slate-300">Professional Experience</span>
          </div>
          
          <GradientText as="h2" className="text-4xl md:text-5xl font-bold mb-4">
            Work Experience
          </GradientText>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            My journey through internships and professional development
          </p>
        </motion.div>

        {/* Timeline-style Experience Cards */}
        <div className="space-y-6">
          {experiences.map((experience, index) => (
            <ExperienceCard key={experience.id} experience={experience} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
