import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Medal, Target, Star, Shield } from 'lucide-react';
import type { Achievement } from '../types';

interface AchievementCardProps {
  achievement: Achievement;
  index: number;
}

const iconMap: Record<string, React.ElementType> = {
  Trophy,
  Medal,
  Target,
  Star,
  Shield,
};

const AchievementCard: React.FC<AchievementCardProps> = ({ achievement, index }) => {
  const Icon = iconMap[achievement.icon] || Trophy;
  
  const getGradient = () => {
    if (achievement.featured) return 'from-yellow-500 to-orange-500';
    if (achievement.prize?.includes('15')) return 'from-slate-300 to-slate-400';
    if (achievement.prize?.includes('2,000')) return 'from-amber-600 to-yellow-600';
    return 'from-red-500 to-orange-500';
  };

  const getBgGradient = () => {
    if (achievement.featured) return 'from-yellow-500/10 to-orange-500/10 border-yellow-500/30';
    return 'from-red-500/10 to-orange-500/10 border-orange-500/30';
  };

  const getIconBg = () => {
    if (achievement.featured) return 'from-yellow-500 to-orange-500';
    if (achievement.prize?.includes('15')) return 'from-slate-400 to-slate-500';
    if (achievement.prize?.includes('2,000')) return 'from-amber-600 to-yellow-600';
    return 'from-red-500 to-orange-500';
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ scale: 1.02 }}
      className="group"
    >
      <div className={`relative flex items-center gap-4 md:gap-6 p-4 md:p-6 rounded-2xl bg-gradient-to-r ${getBgGradient()} border backdrop-blur-sm transition-all duration-300 hover:border-opacity-60`}>
        {/* Rank Badge */}
        <div className="absolute -top-3 -left-2 md:left-4">
          <div className={`px-3 py-1 rounded-full bg-gradient-to-r ${getGradient()} text-white text-xs font-bold shadow-lg`}>
            #{index + 1}
          </div>
        </div>

        {/* Icon */}
        <div className={`flex-shrink-0 w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-gradient-to-br ${getIconBg()} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
          <Icon className="w-7 h-7 md:w-8 md:h-8 text-white" />
        </div>

        {/* Content */}
        <div className="flex-grow min-w-0">
          <div className="flex flex-wrap items-center gap-2 mb-1">
            <h3 className="text-lg md:text-xl font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-red-500 group-hover:to-orange-500 transition-all duration-300">
              {achievement.title}
            </h3>
            {achievement.organization && (
              <span className="text-xs px-2 py-0.5 rounded-full bg-orange-500/20 text-orange-500 font-medium">
                {achievement.organization}
              </span>
            )}
          </div>
          <p className="text-slate-400 text-sm line-clamp-2">
            {achievement.description}
          </p>
        </div>

        {/* Prize */}
        {achievement.prize && (
          <div className="flex-shrink-0 text-right">
            <div className={`text-xl md:text-2xl font-bold bg-gradient-to-r ${getGradient()} bg-clip-text text-transparent`}>
              {achievement.prize}
            </div>
            <p className="text-xs text-slate-500">Prize</p>
          </div>
        )}

        {/* Year */}
        <div className="hidden md:block flex-shrink-0 text-right">
          <div className="text-sm font-semibold text-slate-300">{achievement.year}</div>
        </div>

        {/* Glow effect for featured */}
        {achievement.featured && (
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-yellow-500/5 to-orange-500/5 pointer-events-none" />
        )}
      </div>
    </motion.div>
  );
};

export default AchievementCard;
