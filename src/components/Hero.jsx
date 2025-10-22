import React from 'react';
import { Typewriter } from 'react-simple-typewriter';

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center text-white relative overflow-hidden"
      style={{
        backgroundColor: "#0a0a0a",
        backgroundImage:
          "repeating-linear-gradient(0deg, rgba(0,255,255,0.08), rgba(0,255,255,0.08) 1px, transparent 1px, transparent 40px), repeating-linear-gradient(90deg, rgba(139,92,246,0.08), rgba(139,92,246,0.08) 1px, transparent 1px, transparent 40px)",
        backgroundSize: "40px 40px",
      }}
    >
      {/* Animated gradient orbs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" style={{animationDelay: '2s'}}></div>
      
      <div className="container mx-auto px-6 flex flex-col-reverse md:flex-row items-center gap-12 relative z-10">
        {/* Left Section */}
        <div className="flex-1 space-y-6">
          <div>
            <h1 className="text-4xl sm:text-6xl font-extrabold">
              Hi, I'm <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-gradient">David Jayaraj A</span>
            </h1>
            <h2 className="text-2xl sm:text-4xl font-semibold mt-4">
              And I'm a{' '}
              <span className="bg-gradient-to-r from-cyan-300 to-purple-400 bg-clip-text text-transparent">
                <Typewriter
                  words={['Full Stack Developer', 'AI Enthusiast', 'Data Analyst', 'MLOps Engineer']}
                  loop={0}
                  cursor
                  cursorStyle="|"
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={2000}
                />
              </span>
            </h2>
            <p className="text-gray-300 text-lg mt-4 max-w-2xl">
              Creating AI-powered solutions that transform data into meaningful insights and ideas into impactful digital experiences.
            </p>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex-1 flex justify-center">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 via-cyan-500 to-pink-600 rounded-xl blur-lg opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-500 animate-pulse"></div>
            <div
              className="relative w-72 h-96 sm:w-96 sm:h-[28rem] border-2 shadow-2xl transition-all duration-500 ease-in-out group-hover:scale-105 rounded-xl overflow-hidden"
              style={{
                backdropFilter: 'blur(10px)',
                WebkitBackdropFilter: 'blur(10px)',
                backgroundColor: 'rgba(10, 10, 10, 0.8)',
                borderColor: 'rgba(139, 92, 246, 0.5)',
              }}
            >
              <img
                src="/images/david.png"
                alt="David Jayaraj"
                className="w-full h-full object-cover object-center rounded-xl transition-transform duration-500 group-hover:scale-110"
                draggable="false"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
