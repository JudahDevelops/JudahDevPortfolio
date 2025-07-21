import { useState } from 'react';
import { FaReact, FaDatabase, FaGitAlt, FaLaptopCode, FaDollarSign, FaGithub, FaCode, FaBrain } from 'react-icons/fa';
import { CgPen } from 'react-icons/cg';
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
    description: "HTML, CSS, JavaScript, React"
  },
  {
    id: 2,
    icon: FaDatabase,
    title: "Backend & Automation",
    description: "Python, Bash, PostgreSQL"
  },
  {
    id: 3,
    icon: FaGitAlt,
    title: "Tools & Workflow",
    description: "Git, GitHub, Linux, Boilerplate"
  },
  {
    id: 4,
    icon: CgPen,
    title: "UI/UX Design",
    description: "Crafting intuitive, user-centric interfaces"
  },
  {
    id: 5,
    icon: FaBrain,
    title: "AI Consulting",
    description: "Leveraging AI to solve problems and increase efficiency"
  }
];

const experienceData = [
  {
    id: 1,
    title: "Frontend Developer",
    company: "Belsoft Systems Limited",
    type: "Internship",
    duration: "Jul 2025 - Present • 1 mo",
    location: "Abuja, Federal Capital Territory, Nigeria • Remote",
    logo: BelsoftLogo,
    description: "Currently working as a Frontend Developer intern, contributing to web development projects and enhancing user interfaces. Gaining hands-on experience with modern frontend technologies and collaborating with development teams to deliver high-quality digital solutions."
  }
];

const projectsData = [
  {
    id: 1,
    title: "Pomodoro Timer",
    description: "A productivity tool to enhance focus using customizable work/break intervals.",
    url: "https://github.com/JudahDevelops/pomodoro-timer"
  },
  {
    id: 2,
    title: "React Calculator",
    description: "A dynamic, responsive calculator demonstrating state management in React.",
    url: "https://github.com/JudahDevelops/react-calculator"
  },
  {
    id: 3,
    title: "Drum Machine",
    description: "An interactive audio app highlighting DOM manipulation and event handling.",
    url: "https://github.com/JudahDevelops/drum-machine"
  },
  {
    id: 4,
    title: "Markdown Previewer",
    description: "A utility for parsing and previewing markdown text in real time.",
    url: "https://github.com/JudahDevelops/markdown-previewer"
  }
];

const visionData = [
  {
    id: 1,
    icon: FaLaptopCode,
    title: "Build Scalable Solutions",
    description: "Create web apps and AI-driven tools that streamline workflows."
  },
  {
    id: 2,
    icon: FaDollarSign,
    title: "Monetize Innovation",
    description: "Develop products that blend utility with profitability, from SaaS to automation scripts."
  },
  {
    id: 3,
    icon: FaGithub,
    title: "Contribute to Open Source",
    description: "Share knowledge and collaborate with global developer communities."
  }
];

function App() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <>
      <Navbar isNavOpen={isNavOpen} setIsNavOpen={setIsNavOpen} />

      <div className="container">
        <main>
          <section id="about" className="about-section">
            <div className="about-text">
              <h2>About Me</h2>
              <p>Hi! My name is <strong>Chidubem Barack-Judah Oka</strong>. From the moment I wrote my first line of code at the age of six, I knew software development was my calling. Now a second-year university student and self-taught developer, I combine structured education with hands-on learning to build digital solutions that solve real-world problems.</p>
              <p>My journey—from tinkering with game development to mastering full-stack web technologies—has shaped me into a versatile programmer with a passion for AI, web development, and database systems.</p>
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
            <p>I'm particularly drawn to AI and database management—fields with limitless potential to transform industries. My ambition is to:</p>
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
