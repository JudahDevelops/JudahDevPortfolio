import { useState, useEffect } from 'react';
import { FaReact, FaDatabase, FaGitAlt, FaLaptopCode, FaDollarSign, FaGithub, FaCode, FaBrain } from 'react-icons/fa';
import Navbar from './components/layouts/Navbar';
import Footer from './components/layouts/Footer';
import BelsoftLogo from './assets/images/Belsoft-Logo.jpg';
import './App.css'

// Data Objects
const skillsData = [
  {
    id: 1,
    icon: FaReact,
    title: "Frontend Development",
    description: "React, JavaScript, HTML, CSS, Tailwind CSS"
  },
  {
    id: 2,
    icon: FaDatabase,
    title: "Backend & Database",
    description: "Python, Flask, PostgreSQL, API integrations"
  },
  {
    id: 3,
    icon: FaBrain,
    title: "AI Automation & Workflows",
    description: "n8n, Make.com, WhatsApp Business API, Telegram Bot API, OpenAI API, AI agent development"
  },
  {
    id: 4,
    icon: FaGitAlt,
    title: "Tools & DevOps",
    description: "Git, GitHub, Linux, Bash scripting"
  },
  {
    id: 5,
    icon: FaLaptopCode,
    title: "Business Process Analysis",
    description: "Identifying automation opportunities in Nigerian SMEs (Real Estate, Fashion, Logistics)"
  }
];

const experienceData = [
  {
    id: 1,
    title: "AI Automation Consultant",
    company: "Freelance / Independent",
    type: "Self-Employed",
    duration: "Oct 2025 - Present",
    location: "Nigeria • Remote",
    logo: BelsoftLogo, // Will use placeholder for now
    description: "Building AI-powered automation systems for Nigerian SMEs, specializing in lead qualification, WhatsApp bot integrations, and workflow optimization. Primary focus on Real Estate, Fashion, and Logistics industries. Developed systems using n8n, WhatsApp Business API, and OpenAI that save businesses 10+ hours per week on repetitive tasks and reduce operational costs by automating customer communication and lead routing."
  },
  {
    id: 2,
    title: "Frontend Developer",
    company: "Belsoft Systems Limited",
    type: "Internship",
    duration: "Jul 2025 - Oct 2025",
    location: "Abuja, Federal Capital Territory, Nigeria • Remote",
    logo: BelsoftLogo,
    description: "Worked as a Frontend Developer intern, contributing to web development projects and enhancing user interfaces. Gained hands-on experience with modern frontend technologies and collaborated with development teams to deliver high-quality digital solutions."
  }
];

const projectsData = [
  {
    id: 1,
    title: "Real Estate Lead Qualification Bot",
    description: "WhatsApp automation that filters 'tire kickers' for Nigerian Realtors, saving ₦50k+ monthly in wasted fuel costs. Built with n8n, WhatsApp Business API, and OpenAI for intelligent lead routing.",
    url: "https://github.com/JudahDevelops" // Update with actual repo when available
  },
  {
    id: 2,
    title: "Nigerian SME Automation Workflows",
    description: "Collection of n8n workflow templates for Nigerian businesses including invoice reminders, Instagram DM automation, and lead qualification systems. Documented for easy implementation with Nigerian market context.",
    url: "https://github.com/JudahDevelops" // Update with actual repo when available
  },
  {
    id: 3,
    title: "AI Agent System Prompt Library",
    description: "CO-STAR framework-based system prompts for business automation agents on Telegram, WhatsApp, and Instagram. Optimized for Nigerian communication patterns and business workflows.",
    url: "https://github.com/JudahDevelops" // Update with actual repo when available
  },
  {
    id: 4,
    title: "React Calculator",
    description: "A dynamic, responsive calculator demonstrating state management in React and component-based architecture.",
    url: "https://github.com/JudahDevelops/react-calculator"
  }
];

const visionData = [
  {
    id: 1,
    icon: FaLaptopCode,
    title: "Democratize AI Automation for Nigerian Businesses",
    description: "Make AI automation accessible to solo operators and SMEs who can't afford enterprise IT departments. Focus on practical, high-ROI solutions that solve real Nigerian business problems."
  },
  {
    id: 2,
    icon: FaGithub,
    title: "Build the Nigerian Automation Playbook",
    description: "Create open-source workflows, templates, and case studies tailored to Nigerian business challenges like fuel costs, Lagos traffic, and WhatsApp-first communication patterns."
  },
  {
    id: 3,
    icon: FaBrain,
    title: "Scale Through Education",
    description: "Teach Nigerian business owners to think in automations through YouTube content, free resources, and transparent case studies showing real implementation results."
  }
];

function App() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  // Update scroll progress
  useEffect(() => {
    const updateScrollProgress = () => {
      const scrollTop = document.documentElement.scrollTop;
      const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const progress = (scrollTop / scrollHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', updateScrollProgress);
    return () => window.removeEventListener('scroll', updateScrollProgress);
  }, []);

  // Scroll-triggered animations
  useEffect(() => {
    const observeElements = () => {
      // Different settings for mobile vs desktop
      const isMobile = window.innerWidth <= 768;
      
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('animate-in');
            }
          });
        },
        {
          threshold: isMobile ? 0.05 : 0.1, // Lower threshold for mobile
          rootMargin: isMobile ? '0px 0px -20px 0px' : '0px 0px -50px 0px' // Less margin on mobile
        }
      );

      // Observe sections and cards
      const elementsToObserve = document.querySelectorAll(
        '.about-section, .about-text h2, .about-text p, section h2, .skill-card, .experience-card, .project-card, .vision-card'
      );
      
      elementsToObserve.forEach((el) => observer.observe(el));

      return () => observer.disconnect();
    };

    // Delay observation to ensure DOM is ready
    const timeoutId = setTimeout(observeElements, 100);
    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <>
      <div className="scroll-progress" style={{ transform: `scaleX(${scrollProgress / 100})` }}></div>
      <Navbar isNavOpen={isNavOpen} setIsNavOpen={setIsNavOpen} />

      <div className="container">
        <main>
          <section id="about" className="about-section">
            <div className="about-text">
              <h2>About Me</h2>
              <p>Hi! My name is <strong>Chidubem Barack-Judah Oka</strong>. I'm a software engineer pivoting into AI automation consulting, specializing in building intelligent workflow systems for Nigerian SMEs. While I've been coding since age six and have experience across full-stack development, I've found my focus in solving real business problems through automation.</p>
              <p>I help Nigerian businesses in Real Estate, Fashion, and Logistics save time and money by automating repetitive tasks. Whether it's building WhatsApp bots that filter unqualified leads or creating workflows that handle customer inquiries 24/7, my work focuses on practical, high-ROI solutions that address uniquely Nigerian challenges like fuel costs, Lagos traffic delays, and WhatsApp-first communication patterns.</p>
            </div>
            <div className="about-visual">
              <FaCode className="about-icon" />
            </div>
          </section>

          <section id="skills">
            <h2>Skills & Strengths</h2>
            <div className="skills-grid">
              {skillsData.map((skill) => {
                const IconComponent = skill.icon;
                return (
                  <div key={skill.id} className="skill-card">
                    <IconComponent className="skill-icon" />
                    <h3>{skill.title}</h3>
                    <p>{skill.description}</p>
                  </div>
                );
              })}
            </div>
            <p className="skills-summary">My approach is project-driven—I learn best by building. Whether optimizing databases or designing interactive web apps, I focus on writing clean, efficient code that delivers value.</p>
          </section>

          <section id="experience">
            <h2>Professional Experience</h2>
            <div className="experience-container">
              {experienceData.map((experience) => (
                <div key={experience.id} className="experience-card">
                  <div className="experience-logo">
                    <img src={experience.logo} alt={`${experience.company} Logo`} />
                  </div>
                  <div className="experience-content">
                    <h3 className="experience-title">{experience.title}</h3>
                    <p className="experience-company">{experience.company} • {experience.type}</p>
                    <p className="experience-duration">{experience.duration}</p>
                    <p className="experience-location">{experience.location}</p>
                    <p className="experience-description">
                      {experience.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section id="projects">
            <h2>Projects & Impact</h2>
            <p className="section-intro">Here are some of my project repositories:</p>
            <div className="projects-grid">
              {projectsData.map((project) => (
                <a 
                  key={project.id}
                  href={project.url} 
                  className="project-card" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                </a>
              ))}
            </div>
            <p className="projects-goal">Each project is a stepping stone toward my larger goal: <strong>developing software that generates revenue while solving everyday challenges.</strong></p>
          </section>

          <section id="vision">
            <h2>Future Vision</h2>
            <p>My mission is to make AI automation a practical, accessible skill for Nigerian businesses. I believe we're at a unique point where solo operators can compete with companies that have entire IT departments, and I want to accelerate that shift. My ambition is to:</p>
            <div className="vision-grid">
              {visionData.map((vision) => {
                const IconComponent = vision.icon;
                return (
                  <div key={vision.id} className="vision-card">
                    <IconComponent className="vision-icon" />
                    <h3>{vision.title}</h3>
                    <p>{vision.description}</p>
                  </div>
                );
              })}
            </div>
          </section>
        </main>
      </div>

      <Footer />
    </>
  )
}

export default App
