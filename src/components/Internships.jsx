import React from 'react';

const Internships = () => {
  return (
    <section
      id="internships"
      className="py-16 text-white relative overflow-hidden"
      style={{
        backgroundColor: '#0a0a0a',
        backgroundImage: `
          repeating-linear-gradient(0deg, rgba(139,92,246,0.08), rgba(139,92,246,0.08) 1px, transparent 1px, transparent 40px),
          repeating-linear-gradient(90deg, rgba(0,255,255,0.08), rgba(0,255,255,0.08) 1px, transparent 1px, transparent 40px)
        `,
        backgroundSize: '40px 40px',
      }}
    >
      {/* Decorative elements */}
      <div className="absolute top-20 right-20 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse"></div>
      <div className="absolute bottom-20 left-20 w-72 h-72 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse" style={{animationDelay: '1s'}}></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <h2 className="text-4xl sm:text-5xl font-bold text-center mb-12">
          <span className="bg-gradient-to-r from-purple-400 via-cyan-400 to-pink-400 bg-clip-text text-transparent">
            Work Experience
          </span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Internship Card 1 */}
          <div className="group relative rounded-2xl overflow-hidden transition-all duration-500 hover:scale-105">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 via-pink-500 to-cyan-600 rounded-2xl opacity-50 group-hover:opacity-100 blur-sm transition duration-500"></div>
            <div className="relative rounded-2xl bg-gradient-to-br from-purple-900/40 via-gray-900/40 to-cyan-900/40 backdrop-blur-xl border border-purple-500/30 p-6 flex flex-col justify-between h-full">
              <div>
                <h3 className="text-2xl font-bold text-white mb-2">Nandha Infotech, Coimbatore</h3>
                <h4 className="text-xl font-medium bg-gradient-to-r from-cyan-300 to-purple-400 bg-clip-text text-transparent mb-4">
                  Mobile App Development Intern
                </h4>
                <p className="text-gray-300 leading-relaxed">
                  Developed and deployed cross-platform mobile applications using Flutter and React Native. Integrated RESTful APIs for backend data processing and real-time updates.
                  Designed and optimized UI/UX to enhance user experience and engagement. Implemented Firebase for authentication, real-time database, and cloud messaging.
                </p>
              </div>
              <a
                href="/assets/david-nandha-infotech.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-600/80 to-cyan-600/80 hover:from-purple-500 hover:to-cyan-500 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/50 w-fit"
              >
                View Certificate
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>

          {/* Internship Card 2 */}
<div className="group relative rounded-2xl overflow-hidden transition-all duration-500 hover:scale-105">
  <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-600 via-blue-500 to-purple-600 rounded-2xl opacity-50 group-hover:opacity-100 blur-sm transition duration-500"></div>
  <div className="relative rounded-2xl bg-gradient-to-br from-cyan-900/40 via-gray-900/40 to-purple-900/40 backdrop-blur-xl border border-cyan-500/30 p-6 flex flex-col justify-between h-full">
    <div>
      <h3 className="text-2xl font-bold text-white mb-2">EdifyTechnoSolutions</h3>
      <h4 className="text-xl font-medium bg-gradient-to-r from-cyan-300 to-purple-400 bg-clip-text text-transparent mb-4">
        Data Analyst and Machine Learning Intern
      </h4>
      <p className="text-gray-300 leading-relaxed">
        At Edify Techno Solution, I worked on projects that blended <strong className="text-cyan-400">data analysis, visualization, and machine learning</strong> 
        to derive actionable business insights. Contributed to tasks such as data preprocessing, exploratory data analysis, and predictive modeling. Applied tools like Python, SQL, and Excel to uncover insights and build impactful data-driven solutions.
      </p>
    </div>
    <a
      href="/assets/edify.pdf"
      target="_blank"
      rel="noopener noreferrer"
      className="mt-6 inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-600/80 to-purple-600/80 hover:from-cyan-500 hover:to-purple-500 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/50 w-fit"
    >
      View Certificate
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
      </svg>
    </a>
  </div>
</div>


          {/* Internship Card 3 */}
          <div className="group relative rounded-2xl overflow-hidden transition-all duration-500 hover:scale-105">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-600 via-purple-500 to-cyan-600 rounded-2xl opacity-50 group-hover:opacity-100 blur-sm transition duration-500"></div>
            <div className="relative rounded-2xl bg-gradient-to-br from-pink-900/40 via-gray-900/40 to-cyan-900/40 backdrop-blur-xl border border-pink-500/30 p-6 flex flex-col justify-between h-full">
              <div>
                <h3 className="text-2xl font-bold text-white mb-2">CODTECH IT Solutions</h3>
                <h4 className="text-xl font-medium bg-gradient-to-r from-cyan-300 to-purple-400 bg-clip-text text-transparent mb-4">
                  Data Analytics Intern
                </h4>
                <p className="text-gray-300 leading-relaxed">
                  Independently worked on analyzing datasets to identify patterns, trends, and outliers relevant to business insights. Created detailed Power BI dashboards to visually represent performance metrics and data summaries.
                  Applied Python and Excel to preprocess data, perform statistical analysis, and generate meaningful reports that supported internal decision-making.
                </p>
              </div>
              <a
                href="/assets/Codtech.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-pink-600/80 to-cyan-600/80 hover:from-pink-500 hover:to-cyan-500 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-pink-500/50 w-fit"
              >
                View Certificate
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Internships;
