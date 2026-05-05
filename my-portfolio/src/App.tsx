import { useState, useEffect } from 'react';
import {
  Mail,
  Linkedin,
  Github,
  Twitter,
  ExternalLink,
  ChevronDown,
} from 'lucide-react';

// Types
interface Project {
  title: string;
  description: string;
  tech: string[];
  impact: string;
  link: string;
}

export default function Portfolio() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > window.innerHeight - 100);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToContent = () => {
    document.getElementById('main')?.scrollIntoView({ behavior: 'smooth' });
  };

  const projects: Project[] = [
    {
      title: "Afro-Express: Customer Intelligence Engine",
      description: "Drove an 80% reduction in manual marketing efforts by deploying a 3-segment behavioral clustering system (KMeans/PCA) that automatically triggers highly targeted email campaigns based on ticket purchase patterns.",
      tech: ["Python", "KMeans", "PCA", "Seaborn"],
      impact: "80% reduction in manual marketing effort",
      link: "https://github.com/dlifeofjay/afro-express",
    },
    {
      title: "AFBR v2.0: AI Business Intelligence Platform",
      description: "Engineered an automated AI data analyst platform that ingests raw e-commerce data, performs robust Pandas-based cleaning and aggregation, and leverages GPT-4 to instantly generate strategic insights, trend forecasts, and actionable business recommendations.",
      tech: ["FastAPI", "GPT-4", "React", "PostgreSQL"],
      impact: "End-to-end automated reporting pipeline",
      link: "https://github.com/dlifeofjay/AFBR-Version-2",
    },
    {
      title: "Automated Credit Risk Assessment",
      description: "Mitigated financial risk and accelerated lending approvals through an automated decision tree classifier leveraging financial history and demographic features to deliver highly precise creditworthiness predictions.",
      tech: ["Decision Trees", "Scikit-learn", "EDA", "Pandas"],
      impact: "Precision-guided lending decisions",
      link: "https://github.com/dlifeofjay/Loan-Worthiness",
    },
    {
      title: "Bank Fraud Detection — Isolation Forest",
      description: "Surfaced suspicious debit transactions using Isolation Forest anomaly detection. Engineered behavioural features (IP frequency, device reuse, login velocity) and statistically validated findings to mitigate financial risk.",
      tech: ["Isolation Forest", "Scikit-learn", "Pandas", "SciPy"],
      impact: "Flagged ~10% of debit transactions as anomalous",
      link: "https://github.com/dlifeofjay/Isolation-Forest",
    },
    {
      title: "Financial Inclusion Prediction",
      description: "Modeling demographic and mobile adoption data to predict financial inclusion rates across underserved populations, enabling targeted banking accessibility strategies and data-driven policy interventions.",
      tech: ["Scikit-learn", "Pandas", "EDA", "Python"],
      impact: "Data-driven financial inclusion strategy",
      link: "https://github.com/dlifeofjay/Financial-Inclusion",
    },
    {
      title: "TCN Multivariate Sales Forecasting",
      description: "Achieved a peak 92% forecasting accuracy on complex multivariate time-series data by engineering a custom PyTorch Temporal Convolutional Network, consistently outperforming traditional SARIMAX baselines.",
      tech: ["PyTorch", "TCN", "Time Series", "Streamlit"],
      impact: "92% forecast accuracy vs SARIMAX baseline",
      link: "https://github.com/dlifeofjay/Temporal-Convolutional-Networks",
    },
    {
      title: "Text Emotion Classifier (Bi-LSTM + BERT)",
      description: "Delivered a fine-grained 11-class emotion detection model achieving 79.7% accuracy. Built using PyTorch Bi-LSTM and BERT tokenization to enable nuanced sentiment analysis for complex text data.",
      tech: ["PyTorch", "Bi-LSTM", "BERT", "HuggingFace"],
      impact: "79.7% accuracy across 11 emotion classes",
      link: "https://github.com/dlifeofjay/text_class",
    },
    {
      title: "README Generator — Local LLM Dev Tool",
      description: "Accelerated developer onboarding by creating a zero-cloud LLM tool (Qwen3 + ChromaDB) that autonomously scans entire codebases to generate structured README files.",
      tech: ["LangChain", "Qwen3:8b", "ChromaDB", "Ollama"],
      impact: "Zero-cloud, fully local LLM documentation",
      link: "https://github.com/dlifeofjay",
    },
    {
      title: "Fake News Detection — Deep NLP Pipeline",
      description: "Engineered a high-precision misinformation detection pipeline by pairing TF-IDF extraction with a Keras deep neural network for automated classification of genuine versus fake news content.",
      tech: ["Keras", "TF-IDF", "NLP", "Scikit-learn"],
      impact: "High-precision misinformation classification",
      link: "https://github.com/dlifeofjay/text_authenticity",
    },
    {
      title: "Diabetic Foot Complication Detection",
      description: "Early-warning diagnostic dashboard for diabetic foot complications. Processed raw thermographic imagery through signal-processing and ROC-tuned pipeline to output instant risk classifications.",
      tech: ["OpenCV", "scikit-learn", "Signal Processing"],
      impact: "Clinical dashboard: NORMAL / WARNING / HIGH RISK",
      link: "https://github.com/dlifeofjay",
    },
    {
      title: "Configurable Data Preprocessing Pipeline",
      description: "Standardized cross-modality ML pipelines by building a unified YAML-driven preprocessing engine for tabular, image, and video datasets, significantly reducing data preparation time.",
      tech: ["Python", "YAML", "OpenCV", "Pandas"],
      impact: "Unified pipeline for 3 data modalities",
      link: "https://github.com/dlifeofjay",
    }
  ];

  const featuredProject = projects[0];
  const gridProjects = projects.slice(1);

  return (
    <div className="min-h-screen">
      {/* Intro */}
      <section className="intro">
        <h1>Jubril Ifekoya</h1>
        <p>A Business-Focused Data Scientist & ML Engineer. I solve immediate business problems through automated intelligence and data-driven strategy before scaling to advanced technical solutions.</p>
        <button onClick={scrollToContent} className="btn-continue">
          <ChevronDown size={32} className="mx-auto" />
        </button>
      </section>


      {/* Main Wrapper */}
      <div id="main" className="main-wrapper">
        {/* Sticky Nav */}
        <nav className={`nav-sticky ${scrolled ? 'shadow-md' : ''}`}>
          <div className="flex gap-8">
            <a href="#main" className="nav-link">Projects</a>
            <a href="#contact" className="nav-link">Contact</a>
          </div>
          <div className="flex gap-4">
            <a href="https://linkedin.com/in/jubril-ifekoya-513491354" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-slate-900"><Linkedin size={18} /></a>
            <a href="https://github.com/dlifeofjay" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-slate-900"><Github size={18} /></a>
            <a href="https://x.com/dlifeof_jay" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-slate-900"><Twitter size={18} /></a>
          </div>
        </nav>

        {/* Featured Project */}
        <article className="project-featured">
          <span className="text-xs-bold">Featured Project</span>
          <h2 className="project-title mt-4">{featuredProject.title}</h2>
          <p className="project-desc max-w-2xl mx-auto">{featuredProject.description}</p>
          <div className="flex flex-wrap gap-2 justify-center mb-8">
            {featuredProject.tech.map(t => (
              <span key={t} className="text-[10px] uppercase font-bold text-slate-400">{t}</span>
            ))}
          </div>
          <a href={featuredProject.link} target="_blank" rel="noreferrer" className="btn-project">View Project</a>
        </article>

        {/* Project Grid */}
        <div className="project-grid">
          {gridProjects.map((project, idx) => (
            <article key={idx} className="project-item">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-desc">{project.description}</p>
              <div className="flex flex-wrap gap-2 justify-center mb-8">
                {project.tech.map(t => (
                  <span key={t} className="text-[10px] uppercase font-bold text-slate-400">{t}</span>
                ))}
              </div>
              <a href={project.link} target="_blank" rel="noreferrer" className="btn-project">View Project</a>
            </article>
          ))}
        </div>

        {/* Contact/Footer Section */}
        <section id="contact" className="footer">
          <div className="footer-section">
            <h3>Contact Me</h3>
            <p className="text-sm text-slate-500 mb-8">I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.</p>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <Mail size={18} className="text-slate-400" />
                <a href="mailto:jubrilifekoya@gmail.com" className="text-sm font-bold border-b border-transparent hover:border-slate-900 transition-all">jubrilifekoya@gmail.com</a>
              </div>
              <div className="social-links">
                <a href="https://linkedin.com/in/jubril-ifekoya-513491354" target="_blank" rel="noreferrer" className="social-icon"><Linkedin size={18} /></a>
                <a href="https://github.com/dlifeofjay" target="_blank" rel="noreferrer" className="social-icon"><Github size={18} /></a>
                <a href="https://x.com/dlifeof_jay" target="_blank" rel="noreferrer" className="social-icon"><Twitter size={18} /></a>
              </div>
            </div>
          </div>
          <div className="footer-section text-center md:text-right flex flex-col justify-end">
            <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="text-xs font-bold uppercase tracking-widest text-slate-400 hover:text-slate-900 mb-4 transition-colors">Back to top</button>
            <p className="text-xs text-slate-400">© Jubril Ifekoya. All rights reserved.</p>
            <p className="text-xs text-slate-400 mt-2">Design inspired by HTML5 UP</p>
          </div>
        </section>
      </div>
    </div>
  );
}