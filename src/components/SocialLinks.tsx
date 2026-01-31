import React from 'react';
import { motion } from 'framer-motion';
import * as Icons from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { socialLinks } from '../utils/constants';

interface SocialLinksProps {
  className?: string;
  iconSize?: number;
  showLabels?: boolean;
}

const SocialLinks: React.FC<SocialLinksProps> = ({ 
  className = '', 
  iconSize = 24,
  showLabels = false 
}) => {
  return (
    <div className={`flex gap-4 items-center ${className}`}>
      {socialLinks.map((link, index) => {
        const Icon = Icons[link.icon as keyof typeof Icons] as LucideIcon;
        
        return (
          <motion.a
            key={index}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-orange-500 transition-colors duration-300"
            whileHover={{ scale: 1.2, y: -3 }}
            whileTap={{ scale: 0.9 }}
            title={link.name}
          >
            {Icon && <Icon size={iconSize} />}
            {showLabels && <span className="ml-2">{link.name}</span>}
          </motion.a>
        );
      })}
    </div>
  );
};

export default SocialLinks;
