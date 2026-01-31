import type { Project, Experience, Achievement, Skill, SocialLink, Stats } from '../types';

export const personalInfo = {
  name: 'David Jayaraj A',
  title: 'Full Stack Developer',
  tagline: 'Creating AI-powered solutions that transform data into meaningful insights and ideas into impactful digital experiences.',
  location: 'Coimbatore, Tamil Nadu, India',
  email: 'davidjayaraj01@gmail.com',
  phone: '+91 9840488355',
  about: `I'm a B.Tech student specializing in Artificial Intelligence and Data Science at Karunya Institute of Technology and Sciences, Coimbatore (Aug 2023 – May 2027).

My passion lies in developing practical AI solutions that solve real-world problems. From building adaptive learning platforms to industrial safety monitoring systems, I focus on creating end-to-end applications that make a tangible impact.

What sets me apart:
- Full-stack AI development: From FastAPI backends to React frontends
- Hands-on with cutting-edge tech: LLMs, RAG, YOLOv8, IoT integration
- Proven track record: Multiple hackathon wins and real-world internships
- Problem-solver: I don't just code—I build solutions that matter

I combine technical expertise in machine learning, data analytics, and software development with a strong foundation in modern web technologies. Whether it's building AI-powered platforms, analyzing complex datasets, or creating intuitive user interfaces, I bring a comprehensive approach to every project.

Current Focus: Working on AI integration for educational technology and industrial automation systems.`,
};

export const stats: Stats[] = [
  { count: 4, label: 'Hackathon Wins', suffix: '+' },
  { count: 55, label: 'Prize Money', prefix: '₹', suffix: 'K+' },
  { count: 10, label: 'Projects Completed', suffix: '+' },
  { count: 100, label: 'Dedication', suffix: '%' },
];

export const socialLinks: SocialLink[] = [
  { name: 'GitHub', url: 'https://github.com/DavidJayaraj01', icon: 'Github' },
  { name: 'LinkedIn', url: 'https://linkedin.com/in/davidjayaraja01', icon: 'Linkedin' },
  { name: 'Twitter', url: 'https://twitter.com/davidjayaraj', icon: 'Twitter' },
  { name: 'Instagram', url: 'https://instagram.com/david_jayaraj_01', icon: 'Instagram' },
  { name: 'WhatsApp', url: 'https://wa.me/919840488355', icon: 'MessageCircle' },
];

export const skills: Skill[] = [
  // Frontend
  { name: 'HTML5', category: 'frontend', icon: 'Code2' },
  { name: 'CSS3', category: 'frontend', icon: 'Palette' },
  { name: 'JavaScript', category: 'frontend', icon: 'Code' },
  { name: 'React JS', category: 'frontend', icon: 'Component' },
  { name: 'TypeScript', category: 'frontend', icon: 'FileCode' },
  { name: 'Bootstrap', category: 'frontend', icon: 'Layout' },
  { name: 'Tailwind CSS', category: 'frontend', icon: 'Wind' },
  
  // Backend
  { name: 'Node.js', category: 'backend', icon: 'Server' },
  { name: 'Express.js', category: 'backend', icon: 'Globe' },
  { name: 'Django', category: 'backend', icon: 'Database' },
  { name: 'Flask', category: 'backend', icon: 'Zap' },
  { name: 'FastAPI', category: 'backend', icon: 'Rocket' },
  
  // Languages
  { name: 'Python', category: 'languages', icon: 'Code2' },
  { name: 'JavaScript', category: 'languages', icon: 'FileCode' },
  { name: 'TypeScript', category: 'languages', icon: 'FileType' },
  { name: 'Java', category: 'languages', icon: 'Coffee' },
  { name: 'C', category: 'languages', icon: 'Terminal' },
  { name: 'SQL', category: 'languages', icon: 'Database' },
  
  // App Development
  { name: 'Flutter', category: 'app', icon: 'Smartphone' },
  { name: 'React Native', category: 'app', icon: 'TabletSmartphone' },
  
  // Databases
  { name: 'MySQL', category: 'databases', icon: 'Database' },
  { name: 'PostgreSQL', category: 'databases', icon: 'Database' },
  { name: 'MongoDB', category: 'databases', icon: 'Database' },
  { name: 'SQLite', category: 'databases', icon: 'HardDrive' },
  { name: 'Firebase', category: 'databases', icon: 'Flame' },
  
  // Tools
  { name: 'Git/GitHub', category: 'tools', icon: 'GitBranch' },
  { name: 'VS Code', category: 'tools', icon: 'Code' },
  { name: 'Postman', category: 'tools', icon: 'Send' },
  { name: 'Power BI', category: 'tools', icon: 'BarChart' },
  { name: 'Docker', category: 'tools', icon: 'Container' },
  
  // DevOps
  { name: 'Docker', category: 'devops', icon: 'Container' },
  { name: 'Git', category: 'devops', icon: 'GitBranch' },
  { name: 'CI/CD', category: 'devops', icon: 'GitPullRequest' },
  { name: 'Cloud Platforms', category: 'devops', icon: 'Cloud' },
  
  // AI/ML
  { name: 'TensorFlow', category: 'ai', icon: 'Brain' },
  { name: 'Keras', category: 'ai', icon: 'Network' },
  { name: 'Scikit-Learn', category: 'ai', icon: 'LineChart' },
  { name: 'OpenCV', category: 'ai', icon: 'Eye' },
  { name: 'YOLOv8', category: 'ai', icon: 'ScanEye' },
  { name: 'LLMs', category: 'ai', icon: 'MessageSquare' },
  { name: 'LangChain', category: 'ai', icon: 'Link' },
  { name: 'FAISS', category: 'ai', icon: 'Search' },
  { name: 'RAG', category: 'ai', icon: 'BookOpen' },
  { name: 'Model Context Protocol', category: 'ai', icon: 'Settings' },
  { name: 'NLP', category: 'ai', icon: 'MessageCircle' },
  { name: 'Computer Vision', category: 'ai', icon: 'Camera' },
];

export const experiences: Experience[] = [
  {
    id: 'heritech',
    company: 'Heritech - miABC Tamil Project',
    position: 'AI Integration Intern',
    duration: 'Dec 2025 – May 2026',
    description: 'Developed adaptive AI modules for bilingual Tamil early-literacy platform. Implemented LLM-powered personalized learning systems using LangChain. Integrated vector databases (FAISS) for efficient content retrieval. Built RAG (Retrieval-Augmented Generation) systems for educational content.',
    highlights: [
      'Developed adaptive AI modules for bilingual platform',
      'Implemented LLM-powered personalized learning',
      'Integrated FAISS vector database',
      'Built RAG systems for educational content'
    ],
  },
  {
    id: 'intel',
    company: 'Intel Unnati Industrial Training',
    position: 'AI & Data Science Trainee',
    duration: 'Mar 2025 – Apr 2025',
    description: 'Gained hands-on experience in AI, ML, and data-driven applications. Worked on real-world industrial projects. Learned industry best practices for AI deployment and integration.',
    highlights: [
      'Hands-on experience with AI and ML',
      'Real-world industrial projects',
      'AI deployment best practices'
    ],
  },
  {
    id: 'nandha',
    company: 'Nandha Infotech, Coimbatore',
    position: 'Mobile App Development Intern',
    duration: 'Jun 2024 – Aug 2024',
    description: 'Developed and deployed cross-platform mobile applications using Flutter and React Native. Integrated REST APIs for backend data processing and real-time updates. Designed and optimized UI/UX to enhance user experience and engagement. Implemented Firebase for authentication, real-time database, and cloud messaging.',
    certificateUrl: '#',
  },
  {
    id: 'edify',
    company: 'EdifyTechnoSolutions',
    position: 'Data Analyst and Machine Learning Intern',
    duration: 'Jun 2024 – Jul 2024',
    description: 'Worked on projects that blended data analysis, visualization, and machine learning to derive actionable business insights. Contributed to tasks such as data preprocessing, exploratory data analysis, and predictive modeling. Applied tools like Python, SQL, and Excel to uncover insights and build impactful data-driven solutions.',
    highlights: [
      'Performed data preprocessing and exploratory analysis',
      'Built predictive models using machine learning',
      'Generated actionable insights from real-world datasets'
    ],
    certificateUrl: '#',
  },
  {
    id: 'codtech',
    company: 'CODTECH IT Solutions',
    position: 'Data Analytics Intern',
    duration: 'May 2024 – Jun 2024',
    description: 'Independently worked on analyzing datasets to identify patterns, trends, and outliers relevant to business insights. Created detailed Power BI dashboards to visually represent performance metrics and data summaries. Applied Python and Excel to preprocess data, perform statistical analysis, and generate meaningful reports that supported internal decision-making.',
    certificateUrl: '#',
  },
];

export const projects: Project[] = [
  {
    id: 'ai-call-intelligence',
    title: 'AI Call Intelligence Platform',
    badge: 'Featured',
    description: 'A comprehensive AI-powered platform for analyzing vendor-distributor conversations.',
    longDescription: 'A comprehensive AI-powered platform for analyzing vendor-distributor conversations. Features advanced speech-to-text, intelligent pain point extraction, sentiment analysis, and automated action item generation with real-time analytics.',
    features: [
      'Speech-to-Text Transcription',
      'Intelligent Pain Point Extraction',
      'Sentiment Analysis',
      'Automated Action Item Generation',
      'Real-time Analytics Dashboard',
      'Business Intelligence Insights'
    ],
    techStack: ['Python', 'NLP', 'FastAPI', 'React', 'Tailwind CSS', 'PostgreSQL'],
    date: 'Aug 2025 – Sep 2025',
    featured: true,
    githubUrl: 'https://github.com/DavidJayaraj01/AI-Calling-Intelligence',
  },
  {
    id: 'ai-smarter-shop',
    title: 'AI-Smarter-Shop: Industrial IoT Safety Monitoring',
    badge: 'Industrial IoT',
    description: 'Enterprise-grade safety monitoring solution integrating Arduino IoT sensors and YOLOv8-powered computer vision.',
    longDescription: 'Enterprise-grade safety monitoring solution integrating Arduino IoT sensors, YOLOv8-powered computer vision, and real-time alerts (Email & SMS) for industrial environments. Real-time monitoring with Arduino ESP8266, multi-sensor setup, and predictive analytics.',
    features: [
      'Real-time PPE Detection (YOLOv8)',
      'Arduino ESP8266 IoT Integration',
      'Multi-sensor Setup (Gas, Temperature, Motion)',
      'Automated Email & SMS Alerts',
      'Safety Compliance Dashboard',
      'Predictive Analytics'
    ],
    techStack: ['YOLOv8', 'OpenCV', 'Python', 'Arduino', 'IoT', 'React', 'Tailwind CSS'],
    date: 'Sep 2025 – Oct 2025',
    featured: true,
    githubUrl: 'https://github.com/DavidJayaraj01/AI-Safety-Shop',
  },
  {
    id: 'ai-tutor',
    title: 'AI-Powered Personal Tutor: Adaptive Learning System',
    badge: 'Educational AI',
    description: 'Comprehensive adaptive learning platform providing personalized AI tutoring and real-time progress tracking.',
    longDescription: 'Comprehensive adaptive learning platform providing personalized AI tutoring, real-time progress tracking, and AI-driven lessons. Built with FastAPI & React JS, featuring AI-driven quizzes and personalized learning paths using OpenAI & local models.',
    features: [
      'Adaptive Learning Algorithms',
      'Real-time AI Tutoring Chat',
      'AI-Generated Quizzes',
      'Progress Tracking & Analytics',
      'Personalized Learning Paths',
      'Multi-modal Content Delivery'
    ],
    techStack: ['FastAPI', 'React', 'OpenAI API', 'Local LLMs', 'PostgreSQL'],
    date: 'Mar 2025 – Apr 2025',
    githubUrl: 'https://github.com/DavidJayaraj01/Tutor',
    liveUrl: 'https://github.com/DavidJayaraj01/Tutor',
  },
  {
    id: 'vehicle-flow',
    title: 'Intelligent Vehicle Flow Analyzer',
    badge: 'Hackathon Winner',
    description: 'AI-powered traffic monitoring and analytics platform that delivers real-time insights.',
    longDescription: 'AI-powered traffic monitoring and analytics platform that delivers real-time insights to optimize traffic flow and enable faster emergency response.',
    features: [
      'Real-time Vehicle Tracking & Counting',
      'Emergency Vehicle Priority Routing',
      'Queue Length Analytics',
      'Traffic Pattern Prediction',
      'Congestion Detection'
    ],
    techStack: ['YOLOv8', 'OpenCV', 'Python', 'FastAPI', 'React', 'PostgreSQL'],
    date: '2025',
    githubUrl: 'https://github.com/DavidJayaraj01/Intelligent-Vehicle-Flow',
  },
  {
    id: 'ai-summarizer',
    title: 'AI Multi-Source Summarizer',
    badge: 'AI/NLP',
    description: 'Comprehensive Python application for summarizing and analyzing content from multiple sources using advanced AI.',
    longDescription: 'Comprehensive Python application for summarizing and analyzing content from multiple sources using advanced AI. Features PDF processing, YouTube video analysis with 5-method fallback, interactive Q&A, and persistent vector database storage.',
    features: [
      'Multi-source processing: PDFs, YouTube videos, and manual text input',
      'Advanced YouTube extraction with 5 fallback methods including Whisper AI',
      'RAG pipeline with LangChain, FAISS, and Google Gemini AI',
      'Persistent vector database with metadata tracking and management',
      'Interactive Q&A with source citations and chat history'
    ],
    techStack: ['Python', 'LangChain', 'FAISS', 'Google Gemini', 'Whisper AI', 'RAG'],
    date: '2025',
    githubUrl: 'https://github.com/DavidJayaraj01/AI-Multi-Source-Summarizer',
  },
  {
    id: 'iotrix',
    title: 'IoTrix',
    badge: 'IoT Platform',
    description: 'A comprehensive IoT device monitoring and management platform that provides real-time data visualization.',
    longDescription: 'A comprehensive IoT device monitoring and management platform that provides real-time data visualization, remote control capabilities, and intelligent analytics for connected devices.',
    features: [
      'Real-time IoT device monitoring and control',
      'Interactive data visualization dashboards',
      'Secure device authentication and communication',
      'Intelligent analytics and alerting system'
    ],
    techStack: ['React', 'Node.js', 'MQTT', 'MongoDB', 'IoT', 'WebSockets'],
    date: '2025',
    githubUrl: 'https://github.com/DavidJayaraj01/IoTrix',
  },
];

export const achievements: Achievement[] = [
  {
    id: 'bi3-bytes',
    title: 'Winner - Bi3 Bytes Hackathon',
    year: '2025',
    type: 'hackathon',
    prize: '₹20,000',
    description: 'Built AI Call Intelligence Platform - an innovative AI solution for real-time call analytics and sentiment analysis.',
    icon: 'Trophy',
    featured: true,
  },
  {
    id: 'code-o-clock',
    title: 'Runner-Up - Code O Clock Hackathon',
    year: '2025',
    type: 'hackathon',
    prize: '₹15,000',
    description: 'Developed AI Smarter Shop system - intelligent retail analytics platform with computer vision.',
    icon: 'Medal',
  },
  {
    id: 'innovate-x',
    title: 'Runner-Up - Innovate-X Hackathon',
    year: '2025',
    type: 'hackathon',
    prize: '₹2,000',
    description: 'Built AI-Agent for Automated Software Testing & Security Hardening with team Innovate-Z.',
    icon: 'Shield',
  },
  {
    id: 'google-gfg',
    title: 'Top 9 - Google x GeeksforGeeks',
    year: '2025',
    type: 'hackathon',
    organization: 'National Level',
    description: 'Ranked in top 9 among thousands of participants in prestigious Google x GFG national hackathon.',
    icon: 'Target',
  },
  {
    id: 'dev-arena',
    title: 'Best Project - Dev Arena',
    year: '2025',
    type: 'hackathon',
    organization: 'SRM University',
    description: 'Awarded Best Project for exceptional innovation at SRM University hackathon.',
    icon: 'Star',
  },
];

export const navItems = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Achievements', href: '#achievements' },
  { name: 'Contact', href: '#contact' },
];
