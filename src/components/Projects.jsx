import React from 'react';

const Projects = () => {
  const projects = [
    {
      title: 'AI Call Intelligence Platform',
      description:
        'A comprehensive AI-powered platform for analyzing vendor-distributor conversations. Features advanced speech-to-text, intelligent pain point extraction, sentiment analysis, and automated action item generation with real-time analytics.',
      highlights: [
        'Custom AI models for speech recognition and transcription',
        'Advanced NLP for pain point extraction & sentiment analysis',
        'FastAPI + React 19 + TypeScript full-stack architecture',
        'Real-time dashboard with analytics and QBR generation',
        'Production deployment with PostgreSQL database',
      ],
      github: 'https://github.com/Klassy01/AI-Calling-Intelligence',
    },
    {
      title: 'AI-Smarter-Shop: Industrial IoT Safety Monitoring',
      description:
        'Enterprise-grade safety monitoring solution integrating Arduino IoT sensors, YOLOv8-powered computer vision, and real-time alerts (Email & SMS) for industrial environments. Features predictive analytics and comprehensive safety compliance dashboards.',
      highlights: [
        'Real-time IoT monitoring with Arduino ESP8266 and multiple sensors',
        'YOLOv8 computer vision for PPE detection and hazard identification',
        'Multi-channel alerts with Gmail SMTP and Twilio SMS integration',
        'FastAPI + React + TypeScript with SQLite/PostgreSQL database',
        'Interactive analytics dashboard with Recharts visualizations',
      ],
      github: 'https://github.com/Klassy01/AI-Safety-Shop',
    },
    {
      title: 'AI-Powered Personal Tutor: Adaptive Learning System',
      description:
        'Comprehensive adaptive learning platform providing personalized AI tutoring, real-time progress tracking, and intelligent content generation. Features both OpenAI and local Ollama AI model support with WebSocket-based instant messaging and dynamic quiz generation.',
      highlights: [
        'Multi-AI provider support: OpenAI GPT & local Ollama models (Llama 3, Mistral)',
        'Adaptive learning engine with real-time progress analytics',
        'AI-generated lessons, quizzes, and interactive Q&A with chat interface',
        'FastAPI + React + TypeScript with SQLAlchemy & WebSocket',
        'JWT authentication with comprehensive security features',
      ],
      github: 'https://github.com/Klassy01/Tutor',
    },
    {
      title: 'Scaling Trust: AI-Powered Detection of Online Harms',
      description:
        'An AI-driven solution that identifies and mitigates online harms like misinformation and cyberbullying. Leveraging machine learning algorithms to assess content and detect harmful patterns across various platforms.',
      highlights: [
        'Natural Language Processing (NLP) for content analysis',
        'Real-time monitoring and harm detection',
        'AI-powered decision-making to reduce online toxicity',
      ],
      github: 'https://github.com/Klassy01/Solution',
    },
    {
      title: 'AI Multi-Source Summarizer',
      description:
        'Comprehensive Python application for summarizing and analyzing content from multiple sources using advanced AI. Features PDF processing, YouTube video analysis with 5-method fallback, interactive Q&A, and persistent vector database storage.',
      highlights: [
        'Multi-source processing: PDFs, YouTube videos, and manual text input',
        'Advanced YouTube extraction with 5 fallback methods including Whisper AI',
        'RAG pipeline with LangChain, FAISS, and Google Gemini AI',
        'Persistent vector database with metadata tracking and management',
        'Interactive Q&A with source citations and chat history',
      ],
      github: 'https://github.com/Klassy01/AI-Conent-Summarizer',
    },
    {
      title: 'IoTrix',
      description:
        'A comprehensive IoT device monitoring and management platform that provides real-time data visualization, remote control capabilities, and intelligent analytics for connected devices.',
      highlights: [
        'Real-time IoT device monitoring and control',
        'Interactive data visualization dashboards',
        'Secure device authentication and communication',
        'Intelligent analytics and alerting system',
      ],
      github: 'https://github.com/Klassy01/IoTrix',
    },
  ];

  return (
    <section
      id="projects"
      className="py-16 text-white relative overflow-hidden"
      style={{
        backgroundColor: '#0a0a0a',
        backgroundImage:
          'repeating-linear-gradient(0deg, rgba(0,255,255,0.08), rgba(0,255,255,0.08) 1px, transparent 1px, transparent 40px), repeating-linear-gradient(90deg, rgba(139,92,246,0.08), rgba(139,92,246,0.08) 1px, transparent 1px, transparent 40px)',
        backgroundSize: '40px 40px',
      }}
    >
      {/* Decorative gradient orbs */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse" style={{animationDelay: '2s'}}></div>
      
      <h2 className="text-4xl sm:text-5xl font-bold text-center mb-12 relative z-10">
        <span className="bg-gradient-to-r from-purple-400 via-cyan-400 to-pink-400 bg-clip-text text-transparent">
          Latest Projects
        </span>
      </h2>

      <div className="container mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 relative z-10">
        {projects.map((project, index) => (
          <article
            key={index}
            className="group relative rounded-2xl overflow-hidden transition-all duration-500 hover:scale-105"
          >
            {/* Gradient border effect */}
            <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 via-cyan-500 to-pink-600 rounded-2xl opacity-50 group-hover:opacity-100 blur-sm transition duration-500"></div>
            
            {/* Card content */}
            <div className="relative bg-gradient-to-br from-purple-900/40 via-gray-900/40 to-cyan-900/40 backdrop-blur-xl border border-purple-500/30 p-6 rounded-2xl h-full flex flex-col justify-between">
              <div>
                <h3 className="text-2xl font-bold bg-gradient-to-r from-cyan-300 to-purple-400 bg-clip-text text-transparent mb-4 group-hover:from-purple-300 group-hover:to-cyan-400 transition-all duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-300 mb-4 leading-relaxed">{project.description}</p>
                <ul className="space-y-2 text-gray-300 mb-6">
                  {project.highlights.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-cyan-400 mt-1">▹</span>
                      <span className="flex-1">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-col space-y-3">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/link inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-600/80 to-cyan-600/80 hover:from-purple-500 hover:to-cyan-500 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/50"
                    aria-label={`View ${project.title} on GitHub`}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 group-hover/link:rotate-12 transition-transform"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.423 2.865 8.18 6.839 9.504.5.09.682-.217.682-.483 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.342-3.369-1.342-.455-1.157-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.004.07 1.532 1.032 1.532 1.032.892 1.53 2.341 1.088 2.91.832.09-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.03-2.688-.103-.253-.447-1.27.098-2.646 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.338 1.909-1.296 2.748-1.027 2.748-1.027.547 1.377.202 2.394.1 2.647.64.7 1.029 1.596 1.029 2.688 0 3.848-2.337 4.695-4.566 4.943.36.31.68.92.68 1.855 0 1.338-.012 2.419-.012 2.75 0 .268.18.58.688.482A10.02 10.02 0 0022 12.017C22 6.484 17.523 2 12 2z"
                        clipRule="evenodd"
                      />
                    </svg>
                    View on GitHub
                  </a>
                )}
                
                {project.liveDemo && (
                  <a
                    href={project.liveDemo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/link inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-green-600/80 to-emerald-600/80 hover:from-green-500 hover:to-emerald-500 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-green-500/50"
                    aria-label={`View ${project.title} live demo`}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 group-hover/link:translate-x-1 transition-transform"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                    Live Demo
                  </a>
                )}
                
                {project.apiDocs && (
                  <a
                    href={project.apiDocs}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/link inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-600/80 to-indigo-600/80 hover:from-blue-500 hover:to-indigo-500 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/50"
                    aria-label={`View ${project.title} API documentation`}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                      />
                    </svg>
                    API Docs
                  </a>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Projects;
