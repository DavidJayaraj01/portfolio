import React from 'react';
import { motion } from 'framer-motion';
import { Github } from 'lucide-react';
import type { Project } from '../types';
import Badge from './Badge';
import Button from './Button';

interface ProjectCardProps {
  project: Project;
  index: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  return (
    <motion.div
      className="project-card card h-full flex flex-col relative overflow-hidden group shine-effect"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ 
        y: -15, 
        scale: 1.03,
        rotateX: 5,
      }}
      style={{ transformStyle: 'preserve-3d' }}
    >
      {/* Animated Gradient Background Effect */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-br from-red-500/10 via-orange-500/10 to-yellow-500/10 opacity-0 group-hover:opacity-100 transition-all duration-500"
        initial={{ rotate: 0 }}
        whileHover={{ rotate: 180 }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
      />
      
      {/* Glow effect */}
      <div className="absolute -inset-1 bg-gradient-to-r from-red-500 to-orange-500 rounded-xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500" />

      <div className="relative z-10 flex flex-col h-full">
        {/* Header */}
        <div className="mb-4">
          {project.badge && (
            <Badge className="mb-3">
              {project.badge}
            </Badge>
          )}
          <h3 className="text-xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-red-500 group-hover:to-orange-500 transition-all duration-300">
            {project.title}
          </h3>
          <p className="text-slate-400 text-sm mb-2">{project.date}</p>
        </div>

        {/* Description */}
        <p className="text-slate-300 mb-4 leading-relaxed">
          {project.description}
        </p>

        {/* Features */}
        {project.features && project.features.length > 0 && (
          <div className="mb-4">
            <h4 className="text-white font-semibold mb-2">Key Features:</h4>
            <ul className="space-y-1">
              {project.features.slice(0, 4).map((feature, idx) => (
                <li key={idx} className="text-slate-400 text-sm flex items-start gap-2">
                  <span className="text-orange-500 mt-1">▸</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Tech Stack */}
        <div className="mb-4 flex-grow">
          <h4 className="text-white font-semibold mb-2">Tech Stack:</h4>
          <div className="flex flex-wrap gap-2">
            {project.techStack.map((tech, idx) => (
              <span
                key={idx}
                className="px-3 py-1 bg-orange-500/20 text-orange-400 text-xs rounded-full border border-orange-500/30"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Buttons */}
        <div className="flex gap-3 mt-auto">
          {project.githubUrl && (
            <Button variant="primary" href={project.githubUrl} className="flex-1" icon={<Github size={16} />}>
              View Code
            </Button>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
