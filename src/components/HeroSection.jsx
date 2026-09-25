import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import myProfileImage from '../assets/profile-pic.jpg';
import './AnimatedBackground.css';

const phrases = [
  "Python Fullstack Developer",
  "Technical Project Lead",
  "Operations & WFM Specialist",
  "Founder · FX Estudio"
];

function HeroSection() {
  const [phraseIndex, setPhraseIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setPhraseIndex(prev => (prev + 1) % phrases.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      className="text-white text-center py-5 position-relative overflow-hidden"
      style={{ minHeight: '90vh', display: 'flex', alignItems: 'center' }}
    >
      <div className="animated-gradient"></div>
      <Container className="position-relative" style={{ zIndex: 1 }}>
        <Row className="align-items-center justify-content-center">
          <Col xs={12} md={6} className="order-md-2 mb-4 mb-md-0">
            <img
              src={myProfileImage}
              alt="Foto de perfil de Fabián Bernardino"
              className="img-fluid rounded-circle shadow-lg"
              style={{ maxWidth: '300px', height: 'auto' }}
            />
          </Col>
          <Col xs={12} md={6} className="order-md-1">
            <h1 className="display-4 fw-bold mb-2" data-aos="fade-up">
              Fabián Bernardino
            </h1>
            <h2
              className="h3 text-primary mb-3"
              data-aos="fade-up"
              data-aos-delay="100"
              style={{ minHeight: '2em' }}
            >
              {phrases[phraseIndex]}
            </h2>
            <p className="lead mb-4" data-aos="fade-up" data-aos-delay="200">
              Construyo las herramientas que las operaciones necesitan — del análisis del negocio al despliegue en producción.
            </p>
            <div data-aos="fade-up" data-aos-delay="400">
              <Button variant="primary" size="lg" className="me-3 mb-2" href="#projects">
                Ver proyectos
              </Button>
              <Button variant="outline-light" size="lg" className="mb-2" href="#contact">
                Contactame
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default HeroSection;
