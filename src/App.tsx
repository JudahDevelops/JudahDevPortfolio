import { useState } from 'react';
import { FaReact, FaDatabase, FaGitAlt, FaLaptopCode, FaDollarSign, FaGithub, FaLinkedin, FaEnvelope, FaCode } from 'react-icons/fa';
import { CgPen } from 'react-icons/cg';
import './App.css'

function App() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <>
      <header>
        <div className="container header-container">
          <h1>Judah Develops</h1>
          <button className="nav-toggle" aria-label="toggle navigation" onClick={() => setIsNavOpen(!isNavOpen)}>
            <span className="hamburger"></span>
          </button>
          <nav className={`nav ${isNavOpen ? 'nav--visible' : ''}`}>
            <a href="#about" onClick={() => setIsNavOpen(false)}>About</a>
            <a href="#skills" onClick={() => setIsNavOpen(false)}>Skills</a>
            <a href="#projects" onClick={() => setIsNavOpen(false)}>Projects</a>
            <a href="#vision" onClick={() => setIsNavOpen(false)}>Vision</a>
            <a href="#contact" onClick={() => setIsNavOpen(false)}>Contact</a>
          </nav>
        </div>
      </header>

      <div className="container">
        <main>
          <section id="about" className="about-section">
            <div className="about-text">
              <h2>About Me</h2>
              <p>From the moment I wrote my first line of code at the age of six, I knew software development was my calling. Now a second-year university student and self-taught developer, I combine structured education with hands-on learning to build digital solutions that solve real-world problems.</p>
              <p>My journey—from tinkering with game development to mastering full-stack web technologies—has shaped me into a versatile programmer with a passion for AI, web development, and database systems.</p>
            </div>
            <div className="about-visual">
              <FaCode className="about-icon" />
            </div>
          </section>

          <section id="skills">
            <h2>Skills & Strengths</h2>
            <div className="skills-grid">
              <div className="skill-card">
                <FaReact className="skill-icon" />
                <h3>Frontend Development</h3>
                <p>HTML, CSS, JavaScript, React</p>
              </div>
              <div className="skill-card">
                <FaDatabase className="skill-icon" />
                <h3>Backend & Automation</h3>
                <p>Python, Bash, PostgreSQL</p>
              </div>
              <div className="skill-card">
                <FaGitAlt className="skill-icon" />
                <h3>Tools & Workflow</h3>
                <p>Git, GitHub, Linux, Boilerplate AI</p>
              </div>
              <div className="skill-card">
                <CgPen className="skill-icon" />
                <h3>UI/UX Design</h3>
                <p>Crafting intuitive, user-centric interfaces</p>
              </div>
            </div>
            <p className="skills-summary">My approach is project-driven—I learn best by building. Whether optimizing databases or designing interactive web apps, I focus on writing clean, efficient code that delivers value.</p>
          </section>

          <section id="projects">
            <h2>Projects & Impact</h2>
            <p className="section-intro">Here are some of my project repositories:</p>
            <div className="projects-grid">
              <a href="https://github.com/JudahDevelops/pomodoro-timer" className="project-card" target="_blank" rel="noopener noreferrer">
                <h3>Pomodoro Timer</h3>
                <p>A productivity tool to enhance focus using customizable work/break intervals.</p>
              </a>
              <a href="https://github.com/JudahDevelops/react-calculator" className="project-card" target="_blank" rel="noopener noreferrer">
                <h3>React Calculator</h3>
                <p>A dynamic, responsive calculator demonstrating state management in React.</p>
              </a>
              <a href="https://github.com/JudahDevelops/drum-machine" className="project-card" target="_blank" rel="noopener noreferrer">
                <h3>Drum Machine</h3>
                <p>An interactive audio app highlighting DOM manipulation and event handling.</p>
              </a>
              <a href="https://github.com/JudahDevelops/markdown-previewer" className="project-card" target="_blank" rel="noopener noreferrer">
                <h3>Markdown Previewer</h3>
                <p>A utility for parsing and previewing markdown text in real time.</p>
              </a>
            </div>
            <p className="projects-goal">Each project is a stepping stone toward my larger goal: <strong>developing software that generates revenue while solving everyday challenges.</strong></p>
          </section>

          <section id="vision">
            <h2>Future Vision</h2>
            <p>I’m particularly drawn to AI and database management—fields with limitless potential to transform industries. My ambition is to:</p>
            <div className="vision-grid">
              <div className="vision-card">
                <FaLaptopCode className="vision-icon" />
                <h3>Build Scalable Solutions</h3>
                <p>Create web apps and AI-driven tools that streamline workflows.</p>
              </div>
              <div className="vision-card">
                <FaDollarSign className="vision-icon" />
                <h3>Monetize Innovation</h3>
                <p>Develop products that blend utility with profitability, from SaaS to automation scripts.</p>
              </div>
              <div className="vision-card">
                <FaGithub className="vision-icon" />
                <h3>Contribute to Open Source</h3>
                <p>Share knowledge and collaborate with global developer communities.</p>
              </div>
            </div>
          </section>
        </main>
      </div>

      <footer id="contact">
        <div className="footer-grid">
          <div className="footer-about">
            <h3>Judah Develops</h3>
            <p>A lifelong passion for building meaningful technology, merging technical expertise with entrepreneurial thinking to turn ideas into impactful, revenue-generating solutions.</p>
          </div>
          <div className="footer-connect">
            <h3>Let's Connect</h3>
            <p>Ready to create something extraordinary? Reach out.</p>
            <div className="social-links">
              <a href="https://github.com/JudahDevelops" aria-label="GitHub" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
              <a href="https://www.linkedin.com/in/judah-develops-841321322" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
              <div className="email-display">
                <FaEnvelope />
                <span>judahdevelops@gmail.com</span>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Judah Develops. All rights reserved.</p>
        </div>
      </footer>
    </>
  )
}

export default App
