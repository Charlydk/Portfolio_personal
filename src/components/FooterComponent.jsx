import React from 'react';
import { Container } from 'react-bootstrap';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const socialLinks = [
  { href: 'https://github.com/Charlydk', label: 'GitHub', icon: <FaGithub aria-hidden="true" size={20} /> },
  { href: 'https://www.linkedin.com/in/fabian-bernardino/', label: 'LinkedIn', icon: <FaLinkedin aria-hidden="true" size={20} /> },
];

function FooterComponent() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy-dark text-white py-4 mt-auto text-center">
      <Container>
        <div className="d-flex justify-content-center gap-4 mb-3">
          {socialLinks.map(({ href, label, icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="footer-link d-inline-flex align-items-center gap-2"
            >
              {icon}
              {label}
            </a>
          ))}
        </div>
        <p className="mb-1">&copy; {currentYear} Fabián Bernardino</p>
        <p className="small opacity-75 mb-0">Fullstack Developer & Technical Lead · Hecho con React + Vite</p>
      </Container>
    </footer>
  );
}

export default FooterComponent;
