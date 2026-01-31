import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { projects } from '../utils/constants';
import GradientText from './GradientText';
import ProjectCard from './ProjectCard';
import { slideUp } from '../utils/animations';

const Projects: React.FC = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section id="projects" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={slideUp}
          className="text-center mb-16"
        >
          <GradientText as="h2" className="text-4xl md:text-5xl font-bold mb-4">
            Latest Projects
          </GradientText>
          <p className="text-slate-400 text-lg">Showcasing my best work and innovations</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
