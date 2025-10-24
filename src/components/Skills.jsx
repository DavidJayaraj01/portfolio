import React, { useState, forwardRef } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as SiIcons from 'react-icons/si';

const allIcons = { ...FaIcons, ...SiIcons };

// Updated icon map with AI skills
const iconMap = {
  HTML: 'FaHtml5',
  CSS: 'FaCss3Alt',
  JavaScript: 'FaJsSquare',
  'React JS': 'FaReact',
  'React Native': 'FaReact',
  TypeScript: 'SiTypescript',
  Python: 'FaPython',
  PHP: 'FaPhp',
  Java: 'FaJava',
  C: 'FaCode',
  Django: 'FaPython',
  Flask: 'SiFlask',
  FastAPI: 'SiFastapi',
  Bootstrap: 'FaBootstrap',
  Tailwind: 'SiTailwindcss',
  MySQL: 'SiMysql',
  MongoDB: 'SiMongodb',
  SQLite: 'SiSqlite',
  PostgreSQL: 'SiPostgresql',
  Flutter: 'SiFlutter',
  Dart: 'SiDart',
  Postman: 'SiPostman',
  'VS Code': 'SiVisualstudiocode',
  Database: 'FaDatabase',
  Git: 'FaGitAlt',
  GitHub: 'FaGithub',
  Docker: 'FaDocker',
  NestJS: 'SiNestjs',
  NodeJS: 'FaNodeJs',
  Express: 'SiExpress',
  npm: 'FaNpm',
  ML: 'FaRobot',        // Machine Learning
  RAG: 'SiOpenai',      // Retrieval-Augmented Generation
  MCP: 'SiMicrosoft',   // Microsoft Cloud / Platform
};

const skillCategories = {
  Frontend: ['HTML', 'CSS', 'JavaScript', 'React JS', 'TypeScript', 'Bootstrap', 'Tailwind'],
  Backend: ['NestJS', 'NodeJS', 'Express', 'npm', 'Django', 'Flask', 'FastAPI', 'Java', 'C', 'Python', 'PHP'],
  Languages: ['Python', 'PHP', 'Java', 'C'],
  'App Development': ['React Native', 'Flutter', 'Dart'],
  Databases: ['MySQL', 'MongoDB', 'SQLite', 'PostgreSQL', 'Database'],
  Tools: ['Postman', 'VS Code'],
  DevOps: ['Git', 'GitHub', 'Docker'],
  AI: ['ML', 'RAG', 'MCP'], // New AI category
};

const Skills = forwardRef((props, ref) => {
  const [hoveredSkill, setHoveredSkill] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('Frontend');

  const categories = Object.keys(skillCategories);
  const selectedSkills = skillCategories[selectedCategory] || [];

  return (
    <section
      ref={ref}
      className="py-16 text-white relative overflow-hidden"
      style={{
        backgroundColor: '#0a0a0a',
        backgroundImage:
          'repeating-linear-gradient(0deg, rgba(0,255,255,0.08), rgba(0,255,255,0.08) 1px, transparent 1px, transparent 40px), repeating-linear-gradient(90deg, rgba(139,92,246,0.08), rgba(139,92,246,0.08) 1px, transparent 1px, transparent 40px)',
        backgroundSize: '40px 40px',
      }}
    >
      {/* Animated gradient orbs */}
      <div className="absolute top-10 left-10 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse" style={{ animationDelay: '1.5s' }}></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <h2 className="text-4xl sm:text-5xl font-bold mb-8 text-center">
          <span className="bg-gradient-to-r from-purple-400 via-cyan-400 to-pink-400 bg-clip-text text-transparent">
            Tech Skills
          </span>
        </h2>

        {/* Category Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300 transform hover:scale-105 ${
                selectedCategory === cat
                  ? 'bg-gradient-to-r from-purple-600 to-cyan-600 text-white shadow-lg shadow-purple-500/50'
                  : 'bg-gray-800/50 backdrop-blur-sm border border-purple-500/30 text-gray-300 hover:bg-gray-700/50 hover:border-cyan-500/50'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Skills Display */}
        <div className="space-y-10">
          <div key={selectedCategory} className="mb-8">
            <h3 className="text-2xl sm:text-3xl font-bold mb-8 text-center bg-gradient-to-r from-cyan-300 to-purple-400 bg-clip-text text-transparent">
              {selectedCategory}
            </h3>

            <div className="grid grid-cols-2 xs:grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-6">
              {selectedSkills.map((skill) => {
                const IconComponent =
                  allIcons[iconMap[skill] || iconMap[skill.replace(/\s+/g, '')]] || FaIcons.FaDatabase;

                return (
                  <div
                    key={skill}
                    className={`group relative flex flex-col items-center justify-center p-6 rounded-2xl bg-gradient-to-br from-purple-900/30 via-gray-900/30 to-cyan-900/30 backdrop-blur-xl border transition-all duration-300 transform hover:scale-110 cursor-pointer ${
                      hoveredSkill === skill
                        ? 'border-purple-500/80 shadow-lg shadow-purple-500/50'
                        : 'border-purple-500/20 hover:border-cyan-500/60'
                    }`}
                    onMouseEnter={() => setHoveredSkill(skill)}
                    onMouseLeave={() => setHoveredSkill(null)}
                  >
                    {/* Gradient glow effect */}
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-600 to-cyan-600 opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300"></div>

                    <IconComponent
                      className={`text-5xl sm:text-6xl mb-3 transition-all duration-300 ${
                        hoveredSkill === skill
                          ? 'text-cyan-400 scale-110'
                          : 'text-purple-300 group-hover:text-cyan-300'
                      }`}
                    />
                    <p className="text-sm sm:text-base font-semibold text-center text-gray-200 group-hover:text-white transition-colors">
                      {skill}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

export default Skills;
