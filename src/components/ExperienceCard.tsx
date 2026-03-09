import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin } from 'lucide-react';
import type { Experience } from '../types';

interface ExperienceCardProps {
  experience: Experience;
  index: number;
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({ experience, index }) => {
  return (
    <motion.div
      className="group"
      initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <motion.div 
        className="experience-card relative flex flex-col md:flex-row gap-4 md:gap-6 p-5 md:p-6 rounded-2xl bg-gradient-to-r from-cyan-500/5 to-teal-400/5 border border-teal-400/20 hover:border-teal-400/60 transition-all duration-500 shine-effect overflow-hidden"
        whileHover={{ 
          x: 10, 
          scale: 1.02,
          boxShadow: "0 25px 50px -12px rgba(99, 199, 207, 0.3), -10px 0 30px rgba(99, 199, 207, 0.15)"
        }}
      >
        {/* Animated glow background */}
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/0 via-teal-400/5 to-cyan-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        {/* Timeline dot for desktop */}
        <motion.div 
          className="hidden md:flex absolute -left-3 top-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-gradient-to-r from-cyan-500 to-teal-400 items-center justify-center"
          whileHover={{ scale: 1.3 }}
          animate={{ 
            boxShadow: ["0 0 0 0 rgba(99, 199, 207, 0.4)", "0 0 0 10px rgba(99, 199, 207, 0)", "0 0 0 0 rgba(99, 199, 207, 0)"]
          }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-2 h-2 rounded-full bg-white" />
        </motion.div>

        {/* Company Logo/Icon */}
        <div className="flex-shrink-0">
          <div className="w-14 h-14 md:w-16 md:h-16 rounded-xl bg-gradient-to-br from-cyan-500/20 to-teal-400/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
            <Briefcase className="w-7 h-7 md:w-8 md:h-8 text-teal-300" />
          </div>
        </div>

        {/* Content */}
        <div className="flex-grow min-w-0">
          <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
            <div>
              <h3 className="text-lg md:text-xl font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-cyan-500 group-hover:to-teal-400 transition-all duration-300">
                {experience.position}
              </h3>
              <p className="text-teal-300 font-semibold">{experience.company}</p>
            </div>
            
            {/* Duration & Location Badge */}
            <div className="flex flex-wrap gap-2">
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-teal-400/10 border border-teal-400/30">
                <Calendar className="w-3.5 h-3.5 text-teal-300" />
                <span className="text-xs text-slate-300 font-medium">{experience.duration}</span>
              </div>
              {experience.location && (
                <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30">
                  <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                  <span className="text-xs text-slate-300 font-medium">{experience.location}</span>
                </div>
              )}
            </div>
          </div>

          {/* Description */}
          <p className="text-slate-400 text-sm leading-relaxed mb-3">
            {experience.description}
          </p>

          {/* Highlights */}
          {experience.highlights && experience.highlights.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {experience.highlights.map((highlight, idx) => (
                <motion.span 
                  key={idx} 
                  className="text-xs px-2.5 py-1 rounded-full bg-[#1a1625] text-slate-300 border border-slate-700/50 hover:border-teal-400/50 hover:bg-teal-400/10 transition-all duration-300 cursor-default"
                  whileHover={{ scale: 1.05, y: -2 }}
                >
                  {highlight}
                </motion.span>
              ))}
            </div>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ExperienceCard;

