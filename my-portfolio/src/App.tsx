import React, { useState } from 'react';
import { Brain, Database, TrendingUp, Mail, Linkedin, Github, Twitter, Zap, Target, Menu, X, Code2, LineChart, Sparkles } from 'lucide-react';

export default function Portfolio() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMobileMenuOpen(false);
  };

  const projects = [
    {
      title: "Event Attendees Analysis & Marketing Automation",
      description: "Analyzed event attendance patterns to identify key drivers of ticket sales. Built ML clustering system to segment attendees and created automated email campaigns that deliver personalized recommendations to boost repeat attendance.",
      tech: ["Python", "K-Means", "Scikit-learn", "Email API", "Pandas"],
      impact: "Personalized marketing for 3+ customer segments",
      metric: "ML-Powered",
      link: "https://github.com/dlifeofjay/afro-express"
    },
    {
      title: "Supermarket Customer Segmentation",
      description: "Analyzed 700,000+ customer transactions using exploratory data analysis. Implemented K-Means clustering to create 3 distinct customer segments, enabling targeted marketing strategies that improved product personalization and customer acquisition.",
      tech: ["Python", "Scikit-learn", "Pandas", "Power BI"],
      impact: "3 distinct customer segments for targeted marketing",
      metric: "700K+ Records",
      link: "https://github.com/dlifeofjay/AI-FOR-BUSINESS-REPORT"
    },
    {
      title: "Revenue Forecasting Dashboard",
      description: "Built automated revenue forecasting system using Temporal Convolutional Networks to predict daily sales trends. Identified high-impact products to anticipate demand spikes with 92% accuracy.",
      tech: ["Python", "PyTorch", "Streamlit", "PostgreSQL", "TCN"],
      impact: "92% forecast accuracy",
      metric: "Real-Time",
      link: "https://github.com/dlifeofjay/Temporal-Convolutional-Networks"
    }
  ];

  const skills = {
    "Machine Learning": ["Supervised Learning", "Unsupervised Learning", "Deep Learning", "Predictive Modeling", "Feature Engineering", "Model Optimization"],
    "Programming & Tools": ["Python", "SQL", "Git", "Scikit-learn", "TensorFlow", "PyTorch", "XGBoost", "FastAPI", "Pandas", "NumPy"],
    "Data & Analytics": ["Data Wrangling", "Statistical Analysis", "A/B Testing", "ETL Pipelines", "Big Data Processing"],
    "Visualization": ["Power BI", "Tableau", "Matplotlib", "Seaborn", "Plotly", "Streamlit"]
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-950 text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-slate-950/95 backdrop-blur-sm z-50 border-b border-blue-900/30">
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Jubril.ai
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-6">
            {['About', 'Skills', 'Projects', 'Contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="hover:text-cyan-400 transition-colors font-medium"
              >
                {item}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-slate-900 border-t border-blue-900/30">
            {['About', 'Skills', 'Projects', 'Contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="block w-full text-left px-4 py-3 hover:bg-slate-800"
              >
                {item}
              </button>
            ))}
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col items-center text-center">
            <div className="mb-6 relative">
              <div className="w-32 h-32 rounded-full bg-gradient-to-br from-blue-500 via-cyan-500 to-blue-600 flex items-center justify-center text-5xl font-bold relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 to-transparent"></div>
                <span className="relative z-10">J</span>
              </div>
              <div className="absolute -right-2 -top-2 w-8 h-8 bg-cyan-400 rounded-full flex items-center justify-center">
                <Sparkles size={16} className="text-slate-950" />
              </div>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Jubril
            </h1>
            <p className="text-2xl md:text-3xl text-slate-300 mb-2 font-semibold">
              Data Scientist & ML Engineer
            </p>
            <p className="text-lg text-blue-300 mb-6">
              Lagos, Nigeria 🇳🇬
            </p>
            <p className="text-lg text-slate-400 max-w-3xl mb-8 leading-relaxed">
              I turn complex data into actionable insights and build machine learning solutions that drive real business impact.
              From predictive models to automated analytics, I solve problems that matter.
            </p>
            <div className="flex gap-4 flex-wrap justify-center">
              <button
                onClick={() => scrollToSection('projects')}
                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-lg font-semibold hover:shadow-lg hover:shadow-cyan-500/50 transition-all hover:scale-105"
              >
                View My Work
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="px-8 py-4 border-2 border-cyan-400 rounded-lg font-semibold hover:bg-cyan-400/10 transition-all hover:scale-105"
              >
                Let's Connect
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 px-4 bg-slate-900/30 border-y border-blue-900/30">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-cyan-400 mb-2">Multiple</div>
              <div className="text-slate-400">ML Projects Deployed</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-cyan-400 mb-2">92%</div>
              <div className="text-slate-400">Average Model Accuracy</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-cyan-400 mb-2">Business</div>
              <div className="text-slate-400">Problem-Focused Approach</div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-4 text-center bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            What I Do
          </h2>
          <p className="text-slate-400 text-center mb-12 max-w-2xl mx-auto">
            Data science isn't just about algorithms—it's about understanding patterns, solving real problems, and creating measurable value
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-slate-900/50 to-blue-900/20 p-8 rounded-xl border border-blue-900/30 hover:border-cyan-400/50 transition-all">
              <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mb-4">
                <Brain size={28} />
              </div>
              <h3 className="text-2xl font-semibold mb-4">Machine Learning</h3>
              <p className="text-slate-300 leading-relaxed">
                Building predictive models that turn data into actionable insights. From classification to forecasting,
                I create solutions that drive decision-making and business growth.
              </p>
            </div>

            <div className="bg-gradient-to-br from-slate-900/50 to-blue-900/20 p-8 rounded-xl border border-blue-900/30 hover:border-cyan-400/50 transition-all">
              <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mb-4">
                <LineChart size={28} />
              </div>
              <h3 className="text-2xl font-semibold mb-4">Data Analytics</h3>
              <p className="text-slate-300 leading-relaxed">
                Uncovering patterns and trends hidden in complex datasets. I transform raw data into clear visualizations
                and insights that tell compelling stories and guide strategy.
              </p>
            </div>

            <div className="bg-gradient-to-br from-slate-900/50 to-blue-900/20 p-8 rounded-xl border border-blue-900/30 hover:border-cyan-400/50 transition-all">
              <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mb-4">
                <Target size={28} />
              </div>
              <h3 className="text-2xl font-semibold mb-4">Business Impact</h3>
              <p className="text-slate-300 leading-relaxed">
                Every model I build, every analysis I run, is focused on solving real business problems.
                I bridge the gap between technical capability and business value.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-20 px-4 bg-slate-900/30">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-blue-900/30 to-slate-900/50 p-8 md:p-12 rounded-2xl border border-blue-900/30">
            <Zap className="text-cyan-400 mb-4" size={40} />
            <h2 className="text-3xl font-bold mb-6">My Approach</h2>
            <div className="space-y-4 text-slate-300 text-lg leading-relaxed">
              <p>
                <span className="text-cyan-400 font-semibold">"Everything around us can be measured."</span> I see data
                everywhere—in customer behavior, market trends, operational inefficiencies. There's always a pattern before
                something happens, and my job is to find it.
              </p>
              <p>
                Being a data scientist isn't just about the technical skills—it's about <span className="text-cyan-400 font-semibold">communication,
                  confidence, and strategic thinking.</span> I don't just build models; I communicate their value
                and ensure they drive real results.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-4 text-center bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Technical Skills
          </h2>
          <p className="text-slate-400 text-center mb-12 max-w-2xl mx-auto">
            A comprehensive toolkit for building end-to-end machine learning solutions
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {Object.entries(skills).map(([category, items]) => (
              <div key={category} className="bg-slate-900/50 p-6 rounded-xl border border-blue-900/30 hover:border-cyan-400/50 transition-all">
                <h3 className="text-xl font-semibold mb-4 text-cyan-400">{category}</h3>
                <div className="flex flex-wrap gap-2">
                  {items.map((skill) => (
                    <span
                      key={skill}
                      className="px-4 py-2 bg-slate-950/80 rounded-lg text-sm border border-slate-700 hover:border-cyan-400 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 bg-slate-900/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-4 text-center bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-slate-400 text-center mb-12 max-w-2xl mx-auto">
            Machine learning solutions that deliver measurable business impact
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-slate-900/50 to-blue-900/20 p-6 rounded-xl border border-blue-900/30 hover:border-cyan-400 transition-all hover:shadow-lg hover:shadow-cyan-500/10 hover:scale-105"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Code2 size={24} />
                  </div>
                  <span className="text-xs text-cyan-400 bg-cyan-400/10 px-3 py-1 rounded-full border border-cyan-400/30">
                    {project.metric}
                  </span>
                </div>
                <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
                <p className="text-slate-300 mb-4 text-sm leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span key={tech} className="px-3 py-1 bg-slate-950/80 rounded text-xs border border-slate-700">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="pt-4 border-t border-slate-700">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2 text-cyan-400 font-semibold text-sm">
                      <TrendingUp size={16} />
                      <span className="line-clamp-1">{project.impact}</span>
                    </div>
                  </div>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 px-4 py-2 bg-slate-950/80 border border-cyan-400/30 rounded-lg text-sm text-cyan-400 hover:bg-cyan-400/10 hover:border-cyan-400 transition-all"
                  >
                    View Project →
                  </a>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <p className="text-slate-400 mb-4 text-lg">These are just a few examples of what I've built</p>
            <button
              onClick={() => scrollToSection('contact')}
              className="px-8 py-3 border-2 border-cyan-400 rounded-lg hover:bg-cyan-400/10 transition-all font-semibold"
            >
              Discuss Your Project
            </button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Let's Build Something Together
          </h2>
          <p className="text-slate-400 mb-12 text-lg max-w-2xl mx-auto leading-relaxed">
            Whether you need predictive models, data pipelines, or analytics solutions—I'm ready to help you
            turn data into your competitive advantage. Let's talk about your next project.
          </p>
          <div className="bg-gradient-to-br from-slate-900/50 to-blue-900/20 p-8 rounded-xl border border-blue-900/30 max-w-2xl mx-auto">
            <div className="flex flex-col gap-6">
              <a
                href="mailto:jubrilifekoya@gmail.com"
                className="flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-lg hover:shadow-lg hover:shadow-cyan-500/50 transition-all font-semibold text-lg hover:scale-105"
              >
                <Mail size={24} />
                Get In Touch
              </a>
              <div className="flex gap-4 justify-center flex-wrap">
                <a
                  href="https://www.linkedin.com/in/jubril-ifekoya-513491354?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-6 py-3 border-2 border-slate-700 rounded-lg hover:border-cyan-400 transition-all hover:scale-105"
                >
                  <Linkedin size={20} />
                  LinkedIn
                </a>
                <a
                  href="https://github.com/dlifeofjay"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-6 py-3 border-2 border-slate-700 rounded-lg hover:border-cyan-400 transition-all hover:scale-105"
                >
                  <Github size={20} />
                  GitHub
                </a>
                <a
                  href="https://x.com/dlifeof_jay"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-6 py-3 border-2 border-slate-700 rounded-lg hover:border-cyan-400 transition-all hover:scale-105"
                >
                  <Twitter size={20} />
                  Twitter
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-blue-900/30 text-center text-slate-400">
        <p className="mb-2">© 2024 Jubril - Data Scientist & ML Engineer</p>
        <p className="text-sm italic text-slate-500">"Everything is a journey. Let's see where this one leads."</p>
      </footer>
    </div>
  );
}