import React from "react";
import resumePDF from "../assets/DJ_Resume.pdf";

const About = () => {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = resumePDF;
    link.download = "DJ_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section
      id="about"
      className="py-12 text-white relative overflow-hidden"
      style={{
        backgroundColor: "#0a0a0a",
        backgroundImage:
          "repeating-linear-gradient(0deg, rgba(139,92,246,0.08), rgba(139,92,246,0.08) 1px, transparent 1px, transparent 40px), repeating-linear-gradient(90deg, rgba(0,255,255,0.08), rgba(0,255,255,0.08) 1px, transparent 1px, transparent 40px)",
        backgroundSize: "40px 40px",
      }}
    >
      {/* Decorative elements */}
      <div className="absolute top-10 right-10 w-64 h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse"></div>
      <div className="absolute bottom-10 left-10 w-64 h-64 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse" style={{animationDelay: '1.5s'}}></div>
      
      <div className="container mx-auto px-6 max-w-4xl relative z-10">
        <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-center">
          <span className="bg-gradient-to-r from-purple-400 via-cyan-400 to-pink-400 bg-clip-text text-transparent">
            About Me
          </span>
        </h2>

<div className="bg-gradient-to-br from-purple-900/20 via-cyan-900/20 to-pink-900/20 backdrop-blur-xl border border-purple-500/30 rounded-2xl p-8 shadow-2xl">
  <p className="text-lg leading-relaxed mb-6 text-gray-200">
    I am an <strong className="text-cyan-400">Aspiring Full Stack Developer and AI Engineer</strong>{" "}
    with a strong foundation in software development, data analytics, and machine learning. I am passionate about building{" "}
    <strong className="text-purple-400">intelligent, scalable, and user-centric systems</strong> that
    solve real-world problems and create meaningful impact through technology.
  </p>

  <p className="text-lg leading-relaxed mb-6 text-gray-200">
    With hands-on experience in{" "}
    <strong className="text-cyan-400">
      data visualization, predictive modeling, and AI-powered applications
    </strong>
    , I have developed solutions across domains including educational platforms, content moderation, and real-time systems. I am proficient in{" "}
    <strong className="text-purple-400">Python, JavaScript, and SQL</strong>, and enjoy working across both frontend and backend stacks to deliver cohesive, high-performance applications.
  </p>

  <p className="text-lg leading-relaxed text-gray-200">
    Driven by curiosity and innovation, I continuously explore new technologies to transform ideas into practical, impactful solutions, bridging the gap between AI, data, and full-stack development.
  </p>
          {/* Resume Download Button */}
          <div className="flex justify-center mt-6">
            <button
              onClick={handleDownload}
              className="group relative inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-cyan-600 text-white font-semibold rounded-full shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/50 hover:scale-105"
            >
              <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-cyan-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              <span className="relative flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Download Resume
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
