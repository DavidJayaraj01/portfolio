import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import * as Icons from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { skills } from '../utils/constants';
import GradientText from './GradientText';
import { slideUp, staggerContainer } from '../utils/animations';

type SkillCategory = 'frontend' | 'backend' | 'languages' | 'databases' | 'tools' | 'devops' | 'ai' | 'app';

const categoryLabels: Record<SkillCategory, string> = {
  frontend: 'Frontend',
  backend: 'Backend',
  languages: 'Languages',
  app: 'App Development',
  databases: 'Databases',
  tools: 'Tools',
  devops: 'DevOps',
  ai: 'AI/ML',
};

const Skills: React.FC = () => {
  const [activeTab, setActiveTab] = useState<SkillCategory>('frontend');
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const categories: SkillCategory[] = ['frontend', 'backend', 'languages', 'app', 'databases', 'tools', 'devops', 'ai'];
  const filteredSkills = skills.filter(skill => skill.category === activeTab);

  return (
    <section id="skills" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={slideUp}
          className="text-center mb-16"
        >
          <GradientText as="h2" className="text-4xl md:text-5xl font-bold mb-4">
            Skills & Technologies
          </GradientText>
          <p className="text-slate-400 text-lg">Technologies I work with</p>
        </motion.div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => setActiveTab(category)}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                activeTab === category
                  ? 'bg-gradient-to-r from-red-500 to-orange-500 text-white shadow-lg shadow-orange-500/30'
                  : 'bg-dark-card border border-orange-500/30 text-slate-300 hover:border-orange-500/60'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {categoryLabels[category]}
            </motion.button>
          ))}
        </div>

        {/* Skills Grid */}
        <motion.div
          key={activeTab}
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6"
        >
          {filteredSkills.map((skill, index) => {
            const Icon = Icons[skill.icon as keyof typeof Icons] as LucideIcon;
            
            return (
              <motion.div
                key={index}
                className="skill-card card text-center group cursor-pointer shine-effect"
                variants={slideUp}
                whileHover={{ 
                  y: -15, 
                  scale: 1.08,
                  rotateY: 5,
                  rotateX: -5,
                }}
                whileTap={{ scale: 0.95 }}
                style={{ transformStyle: 'preserve-3d' }}
              >
                <div className="flex flex-col items-center gap-3">
                  {Icon && (
                    <motion.div 
                      className="skill-icon p-4 rounded-full bg-gradient-to-br from-red-500/20 to-orange-500/20 transition-all duration-500"
                      whileHover={{ rotate: 360, scale: 1.2 }}
                      transition={{ duration: 0.6 }}
                    >
                      <Icon size={32} className="text-orange-500 group-hover:text-red-400 transition-colors duration-300" />
                    </motion.div>
                  )}
                  <span className="text-slate-200 font-medium group-hover:text-white transition-colors duration-300">{skill.name}</span>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
