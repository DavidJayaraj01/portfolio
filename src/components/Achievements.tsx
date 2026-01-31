import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Trophy } from 'lucide-react';
import { achievements } from '../utils/constants';
import GradientText from './GradientText';
import AchievementCard from './AchievementCard';

const Achievements: React.FC = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section id="achievements" className="section-padding bg-dark-bg/50 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-red-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl" />
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
            <Trophy className="w-5 h-5 text-yellow-400" />
            <span className="text-sm font-medium text-slate-300">Hackathon Achievements</span>
          </div>
          
          <GradientText as="h2" className="text-4xl md:text-5xl font-bold mb-4">
            Competition Wins
          </GradientText>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Proven track record of innovation and excellence in competitive environments
          </p>

          {/* Stats Banner */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-wrap justify-center gap-6 mt-8"
          >
            <div className="flex items-center gap-3 px-6 py-3 rounded-2xl bg-gradient-to-r from-yellow-500/10 to-orange-500/10 border border-yellow-500/30">
              <Trophy className="w-6 h-6 text-yellow-400" />
              <div className="text-left">
                <p className="text-2xl font-bold text-white">{achievements.length}</p>
                <p className="text-xs text-slate-400">Hackathons</p>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Achievement Cards - New Layout */}
        <div className="space-y-4">
          {achievements.map((achievement, index) => (
            <AchievementCard key={achievement.id} achievement={achievement} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
