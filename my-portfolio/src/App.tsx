import { useState, useEffect } from 'react';
import {
  Mail,
  Linkedin,
  Github,
  Twitter,
  ChevronDown,
} from 'lucide-react';

import profileImg from './assets/profile.jpeg';

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
      title: "Smart Travel Recommendation System",
      description: "Predicts when a customer is likely to travel and recommends destinations based on their past behaviour and location. Built to drive smarter personalisation and help businesses connect the right offer with the right customer at the right time.",
      tech: ["Python", "Mlxtend", "Scikit-learn", "Numpy", "Pandas", "SQL"],
      impact: "Improve customer experience with targeted personalized marketing",
      link: "https://github.com/dlifeofjay/Smart-Travel-Recommendation-System",
    },
    {
      title: "Customer Segmentation and Targeted Marketing",
      description: "Groups event attendees into distinct profiles based on their ticket-buying habits, then automatically sends each group a personalised email campaign. The result is more relevant communication, better engagement and a higher chance of repeat attendance.",
      tech: ["Python", "Scikit-learn", "Pandas", "Email Automation"],
      impact: "Customer profiling and improved advertisement campaign",
      link: "https://github.com/dlifeofjay/afro-express",
    },
    {
      title: "Diabetic Foot Research Project",
      description: "Uses medical imaging and data analysis to detect early signs of diabetic foot complications. Gives healthcare professionals a data-driven tool to flag high-risk patients before serious damage occurs, supported by a full research paper.",
      tech: ["Python", "Computer Vision", "Streamlit", "Numpy", "Pandas"],
      impact: "92% forecast accuracy",
      link: "https://github.com/dlifeofjay/Thermograph-Images-CV2-ML",
    },
    {
      title: "Multi-Product Sales Forecast Using Pytorch",
      description: "Predicts future sales across multiple product lines using deep learning. Gives businesses the foresight to plan stock, allocate budgets and make smarter operational decisions well ahead of time.",
      tech: ["Python", "Pytorch", "Deep Learning", "Numpy", "Pandas"],
      impact: "Improved budgeting, staff and cost optimization",
      link: "https://github.com/dlifeofjay/Temporal-Convolutional-Networks",
    },
    {
      title: "Fraud Detection Using Unsupervised Machine Learning",
      description: "Automatically flags suspicious bank transactions and identifies the key risk factors driving them. Helps businesses detect and understand fraud before it causes serious financial damage.",
      tech: ["Python", "Scikit-Learn", "Pandas", "Numpy"],
      impact: "Clarity on vulnerable fraud factors",
      link: "https://github.com/dlifeofjay/Fraud-detection_Isolation-Forest",
    },
  ];

  const featuredProject = projects[0];
  const gridProjects = projects.slice(1);

  return (
    <div className="min-h-screen">
      {/* Intro */}
      <section className="intro">
        <div className="profile-container mb-8">
          <img src={profileImg} alt="Jubril Ifekoya" className="profile-img" />
        </div>
        <h1>What Exactly do i do?</h1>
        <p>Hi, i'm <strong>Jubril Ifekoya</strong>, a data scientist who specialises in turning data into decisions. My work spans customer behaviour analysis, sales forecasting, fraud detection, personalised recommendation systems and research. Whether you're a business trying to understand your customers better, boost revenue through smarter targeting, reduce risk or plan ahead with accurate forecasts, i break the problem down and build a data-driven solution around it. Got something you'd like to work on? Hit the contact page and let's talk.</p>
        <p>In the meantime, don't hesitate to scroll down and check out some of the work i've done.</p>
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