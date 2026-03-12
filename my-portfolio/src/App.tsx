import { useState, useEffect } from 'react';
import {
  Brain,
  TrendingUp,
  Mail,
  Linkedin,
  Github,
  Twitter,
  Zap,
  Target,
  Menu,
  X,
  Code2,
  LineChart,
  Sparkles,
  Database,
  Layers,
  FlaskConical,
  ArrowUpRight,
  ExternalLink,
  ChevronRight,
  Cpu,
  BookOpen,
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import profileImage from './assets/profile.jpeg';

// Types
interface Project {
  title: string;
  description: string;
  tech: string[];
  impact: string;
  metric: string;
  link: string;
  category: string;
}

export default function Portfolio() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('All');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMobileMenuOpen(false);
  };

  const projects: Project[] = [
    {
      title: "AFBR v2.0: AI Business Intelligence Platform",
      description: "Engineered an automated AI data analyst platform that ingests raw e-commerce data, performs robust Pandas-based cleaning and aggregation, and leverages GPT-4 to instantly generate strategic insights, trend forecasts, and actionable business recommendations.",
      tech: ["FastAPI", "GPT-4", "React", "Docker", "PostgreSQL", "OpenAI"],
      impact: "End-to-end automated reporting pipeline",
      metric: "Deployed",
      link: "https://github.com/dlifeofjay/AFBR-Version-2",
      category: "BI & Automation"
    },
    {
      title: "Afro-Express: Customer Intelligence Engine",
      description: "Drove an 80% reduction in manual marketing efforts by deploying a 3-segment behavioral clustering system (KMeans/PCA) that automatically triggers highly targeted email campaigns based on ticket purchase patterns.",
      tech: ["Python", "KMeans", "PCA", "Seaborn", "smtplib", "Pandas"],
      impact: "80% reduction in manual marketing effort",
      metric: "Applied DS",
      link: "https://github.com/dlifeofjay/afro-express",
      category: "BI & Automation"
    },
    {
      title: "TCN Multivariate Sales Forecasting",
      description: "Achieved a peak 92% forecasting accuracy on complex multivariate time-series data by engineering a custom PyTorch Temporal Convolutional Network, consistently outperforming traditional SARIMAX baselines for reliable sales predictions.",
      tech: ["PyTorch", "TCN", "Time Series", "Pandas", "Streamlit"],
      impact: "92% forecast accuracy vs SARIMAX baseline",
      metric: "Deep Learning",
      link: "https://github.com/dlifeofjay/Temporal-Convolutional-Networks",
      category: "Deep Learning"
    },
    {
      title: "Text Emotion Classifier (Bi-LSTM + BERT)",
      description: "Delivered a fine-grained 11-class emotion detection model achieving 79.7% accuracy. Built from scratch using PyTorch Bi-LSTM and BERT tokenization to enable nuanced sentiment analysis for complex text data.",
      tech: ["PyTorch", "Bi-LSTM", "BERT", "HuggingFace", "Streamlit"],
      impact: "79.7% accuracy across 11 emotion classes",
      metric: "NLP Research",
      link: "https://github.com/dlifeofjay/text_class",
      category: "Deep Learning"
    },
    {
      title: "README Generator — Local LLM Dev Tool",
      description: "Accelerated developer onboarding and documentation workflows by creating a zero-cloud LLM tool (Qwen3 + ChromaDB) that autonomously scans entire codebases to generate structured, professional README files.",
      tech: ["LangChain", "Qwen3:8b", "ChromaDB", "Ollama", "Python"],
      impact: "Zero-cloud, fully local LLM documentation",
      metric: "LLM Tooling",
      link: "https://github.com/dlifeofjay",
      category: "NLP & LLM"
    },
    {
      title: "Fake News Detection — Deep NLP Pipeline",
      description: "Engineered a high-precision misinformation detection pipeline by pairing TF-IDF extraction with a Keras deep neural network, providing robust automated classification of genuine versus fake news content.",
      tech: ["Keras", "TF-IDF", "NLP", "Scikit-learn", "Python"],
      impact: "High-precision misinformation classification",
      metric: "NLP Pipeline",
      link: "https://github.com/dlifeofjay/text_authenticity",
      category: "NLP & LLM"
    },
    {
      title: "Diabetic Foot Complication Detection",
      description: "Empowered clinicians with an early-warning diagnostic dashboard for diabetic foot complications. Processed raw thermographic imagery through a rigorous signal-processing and ROC-tuned pipeline to output instant High/Warning/Normal risk classifications.",
      tech: ["OpenCV", "scikit-learn", "Signal Processing", "ROC Analysis", "Streamlit"],
      impact: "Clinical dashboard: NORMAL / WARNING / HIGH RISK",
      metric: "Medical Research",
      link: "https://github.com/dlifeofjay",
      category: "Research"
    },
    {
      title: "Financial Inclusion Prediction",
      description: "Provided actionable intelligence for policy interventions by modeling demographic and mobile adoption data to predict financial inclusion rates across underserved populations, enabling targeted banking accessibility strategies.",
      tech: ["Scikit-learn", "Pandas", "EDA", "Feature Engineering", "Python"],
      impact: "Data-driven financial inclusion strategy",
      metric: "Policy Research",
      link: "https://github.com/dlifeofjay/Financial-Inclusion",
      category: "Research"
    },
    {
      title: "Configurable Data Preprocessing Pipeline",
      description: "Standardized cross-modality ML pipelines by building a unified YAML-driven preprocessing engine. Significantly reduced data prep time by automating cleaning, scaling, and feature extraction for tabular, image, and video datasets.",
      tech: ["Python", "YAML", "OpenCV", "Pandas", "Streamlit"],
      impact: "Unified pipeline for 3 data modalities",
      metric: "MLOps",
      link: "https://github.com/dlifeofjay",
      category: "Data Science"
    },
    {
      title: "Automated Credit Risk Assessment",
      description: "Mitigated financial risk and accelerated lending approvals through an automated decision tree classifier. Leveraged financial history and demographic features to deliver highly precise creditworthiness predictions.",
      tech: ["Decision Trees", "Scikit-learn", "EDA", "ROC-AUC", "Pandas"],
      impact: "Precision-guided lending decisions",
      metric: "FinTech ML",
      link: "https://github.com/dlifeofjay/Loan-Worthiness",
      category: "Data Science"
    }
  ];

  const categories = ['All', 'Deep Learning', 'NLP & LLM', 'BI & Automation', 'Research', 'Data Science'];
  const filteredProjects = activeTab === 'All'
    ? projects
    : projects.filter(p => p.category === activeTab);

  const stats = [
    { label: "Projects Shipped", value: "10+", icon: Cpu },
    { label: "Research Domains", value: "5", icon: FlaskConical },
    { label: "Peak Model Accuracy", value: "92%", icon: Target },
  ];

  const skills = {
    "Deep Learning": ["PyTorch", "Bi-LSTM", "TCN", "BERT", "Transformers"],
    "NLP & Language AI": ["LangChain", "Qwen3", "ChromaDB", "TF-IDF", "Text Classification"],
    "Data Science & BI": ["Scikit-learn", "Pandas", "Power BI", "Streamlit", "Statistical Modelling"],
    "Research & Signal Proc.": ["Image Segmentation", "ROC Analysis", "Medical Imaging", "Morphological Ops"],
    "MLOps & Engineering": ["FastAPI", "Docker", "PostgreSQL", "YAML Pipelines", "Feature Engineering"],
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Deep Learning': return <Cpu size={24} />;
      case 'NLP & LLM': return <Brain size={24} />;
      case 'BI & Automation': return <Zap size={24} />;
      case 'Research': return <FlaskConical size={24} />;
      case 'Data Science': return <LineChart size={24} />;
      default: return <Code2 size={24} />;
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 overflow-x-hidden selection:bg-cyan-500/30">
      {/* Dynamic Background */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(15,23,42,0)_0%,rgba(2,6,23,1)_100%)]"></div>
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-600/10 blur-[120px] rounded-full animate-pulse-slow"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-violet-600/10 blur-[120px] rounded-full animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-[40%] right-[20%] w-[25%] h-[25%] bg-cyan-600/5 blur-[100px] rounded-full animate-pulse-slow" style={{ animationDelay: '4s' }}></div>
      </div>

      {/* Header */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-slate-950/80 backdrop-blur-xl border-b border-white/5 py-4' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-2xl font-bold text-gradient flex items-center gap-2 group cursor-pointer"
            onClick={() => scrollToSection('home')}
          >
            <Layers className="text-cyan-400 group-hover:rotate-180 transition-transform duration-500" size={24} />
            <span>Jubril.ai</span>
          </motion.div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {['About', 'Portfolio', 'Contact'].map((item, idx) => (
              <motion.button
                key={item}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="text-sm font-medium text-slate-400 hover:text-white transition-colors relative group"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-400 transition-all group-hover:w-full"></span>
              </motion.button>
            ))}
            <motion.button
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection('contact')}
              className="px-5 py-2.5 bg-white text-slate-950 rounded-full text-sm font-bold hover:shadow-lg hover:shadow-white/10 transition-all"
            >
              Get in Touch
            </motion.button>
          </div>

          {/* Mobile Menu Toggle */}
          <button className="md:hidden text-white" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* Mobile Nav Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-slate-950 flex flex-col items-center justify-center gap-8 pt-20"
          >
            {['About', 'Portfolio', 'Contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="text-3xl font-bold hover:text-cyan-400 transition-colors"
              >
                {item}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <main className="relative z-10">
        {/* Hero Section */}
        <section id="home" className="min-h-screen pt-40 pb-20 px-6 flex flex-col items-center justify-center text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="mb-8 relative group"
          >
            <div className="w-32 h-32 md:w-40 md:h-40 rounded-3xl rotate-3 group-hover:rotate-0 transition-transform duration-500 overflow-hidden border-2 border-white/10 relative">
              <img src={profileImage} alt="Jubril" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 scale-110 group-hover:scale-100" />
              <div className="absolute inset-0 bg-blue-500/10 group-hover:bg-transparent transition-colors"></div>
            </div>
            <div className="absolute -bottom-2 -right-2 bg-cyan-400 text-slate-950 p-2 rounded-xl border-4 border-slate-950 shadow-xl">
              <Sparkles size={20} />
            </div>
          </motion.div>

          {/* Identity Badge */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mb-5 flex items-center gap-2 px-4 py-2 rounded-full border border-cyan-500/30 bg-cyan-500/5 text-cyan-400 text-sm font-semibold tracking-wide"
          >
            <BookOpen size={14} />
            Data Scientist &amp; Analyst · ML Engineer · Researcher
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-5xl md:text-7xl font-bold tracking-tight mb-6 leading-tight"
          >
            From Raw Data to <br />
            <span className="text-gradient">Deployed Intelligence.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-lg md:text-xl text-slate-400 max-w-2xl mb-12 leading-relaxed"
          >
            I explore data, design experiments, and engineer intelligent systems —
            from clinical thermographic imaging to LLM-powered BI tools.
            Curious. Rigorous. End-to-end.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex gap-4 flex-wrap justify-center"
          >
            <button
              onClick={() => scrollToSection('portfolio')}
              className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl font-bold hover:shadow-2xl hover:shadow-cyan-500/20 transition-all hover:-translate-y-1 flex items-center gap-2 group"
            >
              View My Work
              <ArrowUpRight size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="px-8 py-4 glass hover:bg-white/10 rounded-2xl font-bold transition-all hover:-translate-y-1"
            >
              My Approach
            </button>
          </motion.div>
        </section>

        {/* Stats Bento Grid */}
        <section className="py-20 px-6 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {stats.map((stat, idx) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bento-card group"
              >
                <div className="data-pulse"></div>
                <div className="relative z-10">
                  <stat.icon className="text-cyan-400 mb-4 group-hover:scale-110 transition-transform" size={32} />
                  <div className="text-4xl md:text-5xl font-bold mb-2">{stat.value}</div>
                  <div className="text-slate-400 font-medium uppercase tracking-wider text-sm">{stat.label}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 px-6 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-2 bento-card"
            >
              <div className="data-pulse"></div>
              <div className="relative z-10">
                <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                  <FlaskConical className="text-cyan-400" size={32} />
                  Approach &amp; Philosophy
                </h2>
                <div className="space-y-6 text-slate-300 text-lg leading-relaxed">
                  <p>
                    I am a Data Scientist who focuses on solving problems. Before I look at any code or build any models, I always start by understanding the problem we are trying to solve. Data is only useful if it helps us make better decisions.
                  </p>
                  <p>
                    My work connects <span className="text-cyan-400 font-semibold italic">finding insights in data with building real systems</span>. This means I do not just find patterns in datasets. I also build the tools needed to actually put those models to use in the real world.
                  </p>
                  <p>
                    Everything in this portfolio shows my ability to handle a project from start to finish. From cleaning the initial data to putting the final model to work, my goal is always to deliver results that are clear and reliable.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bento-card border-cyan-500/30"
            >
              <div className="relative z-10 flex flex-col justify-between h-full">
                <h3 className="text-2xl font-bold mb-6">Technical Arsenal</h3>
                <div className="space-y-5">
                  {Object.entries(skills).map(([cat, items]) => (
                    <div key={cat}>
                      <div className="text-xs font-bold text-cyan-400 uppercase tracking-widest mb-2">{cat}</div>
                      <div className="flex flex-wrap gap-2">
                        {items.slice(0, 3).map(skill => (
                          <span key={skill} className="px-3 py-1 bg-white/5 rounded-lg text-xs border border-white/5">{skill}</span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
                <button
                  onClick={() => scrollToSection('portfolio')}
                  className="mt-8 text-sm font-bold text-cyan-400 flex items-center gap-2 hover:translate-x-1 transition-transform"
                >
                  See Projects <ChevronRight size={16} />
                </button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Portfolio Section */}
        <section id="portfolio" className="py-20 px-6 max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Selected <span className="text-gradient">Work.</span></h2>
              <p className="text-slate-400 max-w-lg">10 hand-picked projects spanning deep learning, NLP, research, BI automation, and data science.</p>
            </div>

            <div className="flex flex-wrap gap-2 bg-slate-900/50 p-1.5 rounded-2xl border border-white/5 backdrop-blur-md">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveTab(cat)}
                  className={`px-4 py-2 rounded-xl text-sm font-bold transition-all ${activeTab === cat
                    ? 'bg-white text-slate-950 shadow-xl'
                    : 'text-slate-400 hover:text-white'
                    }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            <AnimatePresence mode='popLayout'>
              {filteredProjects.map((project) => (
                <motion.div
                  key={project.title}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  className="bento-card group hover:border-cyan-500/50"
                >
                  <div className="relative z-10 flex flex-col h-full">
                    <div className="flex justify-between items-start mb-6">
                      <div className="w-12 h-12 glass rounded-2xl flex items-center justify-center text-cyan-400">
                        {getCategoryIcon(project.category)}
                      </div>
                      <span className="text-[10px] uppercase tracking-widest bg-cyan-500/10 text-cyan-400 px-3 py-1 rounded-full border border-cyan-500/20 font-bold">
                        {project.metric}
                      </span>
                    </div>

                    <h3 className="text-lg font-bold mb-3 group-hover:text-cyan-400 transition-colors leading-tight">{project.title}</h3>
                    <p className="text-slate-400 text-sm mb-6 flex-grow leading-relaxed">{project.description}</p>

                    <div className="flex flex-wrap gap-2 mb-8">
                      {project.tech.map(t => (
                        <span key={t} className="text-[10px] font-bold text-slate-500 bg-slate-950 px-2 py-1 rounded border border-white/5">{t}</span>
                      ))}
                    </div>

                    <div className="pt-6 border-t border-white/5 flex items-center justify-between">
                      <div className="flex items-center gap-2 text-xs font-bold text-white">
                        <TrendingUp size={14} className="text-cyan-400" />
                        {project.impact}
                      </div>
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noreferrer"
                        className="w-10 h-10 glass rounded-xl flex items-center justify-center hover:bg-white hover:text-slate-950 transition-all"
                      >
                        <ExternalLink size={18} />
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-40 px-6 max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-7xl font-bold mb-8">Let's build <br /><span className="text-gradient">something intelligent.</span></h2>
            <p className="text-xl text-slate-400 mb-12">Whether you need a deep learning system, a research collaborator, or a data-driven product — I'm ready.</p>

            <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
              <a
                href="mailto:jubrilifekoya@gmail.com"
                className="w-full md:w-auto px-10 py-5 bg-white text-slate-950 rounded-2xl font-bold text-lg hover:shadow-2xl hover:shadow-white/20 transition-all hover:-translate-y-1 flex items-center justify-center gap-3"
              >
                <Mail size={24} />
                Start a Conversation
              </a>
              <div className="flex gap-4">
                <a href="https://linkedin.com/in/jubril-ifekoya-513491354" target="_blank" rel="noreferrer" className="w-14 h-14 glass rounded-2xl flex items-center justify-center hover:text-cyan-400 transition-all border border-white/5">
                  <Linkedin size={24} />
                </a>
                <a href="https://github.com/dlifeofjay" target="_blank" rel="noreferrer" className="w-14 h-14 glass rounded-2xl flex items-center justify-center hover:text-cyan-400 transition-all border border-white/5">
                  <Github size={24} />
                </a>
                <a href="https://x.com/dlifeof_jay" target="_blank" rel="noreferrer" className="w-14 h-14 glass rounded-2xl flex items-center justify-center hover:text-cyan-400 transition-all border border-white/5">
                  <Twitter size={24} />
                </a>
              </div>
            </div>
          </motion.div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-12 border-t border-white/5 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 text-slate-500 text-sm">
          <div className="flex items-center gap-2">
            <Layers size={18} className="text-cyan-400" />
            <span className="font-bold text-slate-400">Jubril.ai</span>
            <span>© 2026</span>
          </div>
          <div className="italic">"From raw data to intelligent systems — rigorously."</div>
          <div className="flex gap-8">
            <button onClick={() => scrollToSection('home')} className="hover:text-white transition-colors">Back to top</button>
          </div>
        </div>
      </footer>
    </div>
  );
}