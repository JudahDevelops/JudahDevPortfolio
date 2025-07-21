import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

function Footer() {
  return (
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
            <a href="https://www.linkedin.com/in/chidubem-oka-841321322" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
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
  );
}

export default Footer;