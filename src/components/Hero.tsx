import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download, Mail, Code, Cpu, Database, Rocket, Sparkles, Zap } from 'lucide-react';
import { personalInfo, stats } from '../utils/constants';
import GradientText from './GradientText';
import Button from './Button';
import StatsCounter from './StatsCounter';
import SocialLinks from './SocialLinks';
import { fadeIn, slideInLeft, slideInRight } from '../utils/animations';

const roles = ['Full Stack Developer', 'AI Enthusiast', 'MLOps Engineer'];

// Floating icons for animation
const floatingElements = [
  { Icon: Code, x: '10%', y: '20%', delay: 0 },
  { Icon: Cpu, x: '85%', y: '15%', delay: 0.5 },
  { Icon: Database, x: '75%', y: '70%', delay: 1 },
  { Icon: Rocket, x: '15%', y: '75%', delay: 1.5 },
  { Icon: Sparkles, x: '90%', y: '45%', delay: 2 },
  { Icon: Zap, x: '5%', y: '50%', delay: 2.5 },
];

const Hero: React.FC = () => {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[currentRoleIndex];
    
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (displayedText.length < currentRole.length) {
          setDisplayedText(currentRole.slice(0, displayedText.length + 1));
        } else {
          // Wait before starting to delete
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        if (displayedText.length > 0) {
          setDisplayedText(displayedText.slice(0, -1));
        } else {
          setIsDeleting(false);
          setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [displayedText, isDeleting, currentRoleIndex]);

  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center section-padding pt-32 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Gradient Orbs */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-red-500/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 50, 0],
            y: [0, 30, 0],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-orange-500/20 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            x: [0, -50, 0],
            y: [0, -30, 0],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-1/2 right-1/3 w-64 h-64 bg-yellow-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Floating Tech Icons */}
        {floatingElements.map(({ Icon, x, y, delay }, index) => (
          <motion.div
            key={index}
            className="absolute"
            style={{ left: x, top: y }}
            initial={{ opacity: 0, scale: 0 }}
            animate={{
              opacity: [0.2, 0.5, 0.2],
              scale: [1, 1.2, 1],
              y: [0, -20, 0],
              rotate: [0, 10, -10, 0],
            }}
            transition={{
              duration: 5,
              delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <Icon className="w-8 h-8 text-orange-500/30" />
          </motion.div>
        ))}

        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(249,115,22,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(249,115,22,0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />
      </div>

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            className="space-y-6"
            variants={slideInLeft}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={fadeIn}>
              <h2 className="text-lg md:text-xl text-slate-300 mb-2">Hi, I'm</h2>
              <GradientText as="h1" className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4">
                {personalInfo.name}
              </GradientText>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-6">
                And I'm a{' '}
                <span className="inline-block">
                  <GradientText>{displayedText}</GradientText>
                  <span className="animate-pulse text-orange-500">|</span>
                </span>
              </h2>
            </motion.div>

            <motion.p
              className="text-slate-400 text-base md:text-lg leading-relaxed max-w-xl"
              variants={fadeIn}
            >
              {personalInfo.tagline}
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-3 sm:gap-4"
              variants={fadeIn}
            >
              <Button variant="primary" onClick={scrollToProjects} icon={<ArrowRight size={18} />}>
                View My Work
              </Button>
              <Button variant="secondary" href="/resume.pdf" icon={<Download size={18} />}>
                Download Resume
              </Button>
              <Button variant="outline" onClick={scrollToContact} icon={<Mail size={18} />}>
                Contact Me
              </Button>
            </motion.div>

            <motion.div variants={fadeIn}>
              <SocialLinks className="mt-6 sm:mt-8" iconSize={24} />
            </motion.div>
          </motion.div>

          {/* Right Content - Animated Graphics */}
          <motion.div
            className="relative hidden md:block"
            variants={slideInRight}
            initial="hidden"
            animate="visible"
          >
            <div className="relative w-full aspect-square max-w-sm lg:max-w-md mx-auto">
              {/* Animated Rings */}
              <motion.div
                className="absolute inset-0 border-2 border-dashed border-orange-500/20 rounded-full"
                animate={{ rotate: 360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              />
              <motion.div
                className="absolute inset-8 border-2 border-dashed border-red-500/20 rounded-full"
                animate={{ rotate: -360 }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              />
              <motion.div
                className="absolute inset-16 border-2 border-dashed border-yellow-500/20 rounded-full"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              />

              {/* Orbiting Dots */}
              <motion.div
                className="absolute w-4 h-4 bg-gradient-to-r from-red-500 to-orange-500 rounded-full shadow-lg shadow-orange-500/50"
                style={{ top: '50%', left: '0%' }}
                animate={{
                  rotate: 360,
                }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                initial={{ rotate: 0 }}
              />
              <motion.div
                className="absolute w-3 h-3 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-full shadow-lg shadow-yellow-500/50"
                style={{ top: '0%', left: '50%' }}
                animate={{
                  rotate: -360,
                }}
                transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
              />

              {/* Center Content */}
              <motion.div
                className="absolute inset-20 sm:inset-24 flex items-center justify-center"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.8, type: "spring" }}
              >
                <div className="text-center p-4 sm:p-6 rounded-2xl bg-gradient-to-br from-red-500/10 to-orange-500/10 border border-orange-500/30 backdrop-blur-sm">
                  <motion.div
                    className="text-4xl sm:text-6xl mb-2"
                    animate={{
                      y: [0, -10, 0],
                      rotate: [0, 5, -5, 0],
                    }}
                    transition={{ duration: 3, repeat: Infinity }}
                  >
                    🚀
                  </motion.div>
                  <p className="text-orange-400 font-semibold text-xs sm:text-sm">Innovating with AI</p>
                </div>
              </motion.div>

              {/* Floating Tech Badges around the circle */}
              {['React', 'AI', 'Python', 'ML'].map((tech, idx) => (
                <motion.div
                  key={tech}
                  className="absolute px-2 sm:px-3 py-1 rounded-full bg-dark-card/80 border border-orange-500/30 text-xs text-orange-400 font-medium backdrop-blur-sm"
                  style={{
                    top: `${50 + 42 * Math.sin((idx * Math.PI) / 2)}%`,
                    left: `${50 + 42 * Math.cos((idx * Math.PI) / 2)}%`,
                    transform: 'translate(-50%, -50%)',
                  }}
                  animate={{
                    y: [0, -5, 0],
                    opacity: [0.7, 1, 0.7],
                  }}
                  transition={{
                    duration: 2,
                    delay: idx * 0.3,
                    repeat: Infinity,
                  }}
                >
                  {tech}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Stats Counter */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8 mt-12 sm:mt-20 pt-8 sm:pt-12 border-t border-orange-500/20"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          {stats.map((stat, index) => (
            <StatsCounter
              key={index}
              count={stat.count}
              label={stat.label}
              prefix={stat.prefix}
              suffix={stat.suffix}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
