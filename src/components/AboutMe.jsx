import React from 'react';
import { Container, Row, Col, Badge, Image } from 'react-bootstrap';
import workspaceImage from '../assets/workspace.png';
import './AnimatedBackground.css';

function AboutMe() {
  const skillCategories = {
    "Backend": ['Python', 'FastAPI', 'C#', 'ASP.NET Core', 'SignalR', 'SQLAlchemy', 'JWT'],
    "Frontend": ['React', 'TypeScript', 'JavaScript', 'Astro', 'Vite', 'Bootstrap', 'Tailwind CSS'],
    "Datos & BI": ['PostgreSQL', 'Supabase', 'SQL', 'Power BI', 'VBA', 'Excel'],
    "Cloud & DevOps": ['Docker', 'Google Cloud', 'Render', 'Netlify', 'Git', 'GitHub']
  };

  const quickFacts = [
    { icon: '📍', text: 'Tucumán, Argentina' },
    { icon: '💼', text: 'Presencial y Remoto LATAM' },
    { icon: '🎓', text: 'Técnico Superior en Desarrollo de Software' },
    { icon: '🌐', text: 'Inglés: Intermedio (lectura técnica fluida)' },
  ];

  return (
    <section id="about" className="bg-custom-section py-5">
      <Container>
        <h2 className="text-center mb-5 display-5 fw-bold" data-aos="fade-down">Sobre Mí</h2>

        <Row className="align-items-center">
          <Col lg={7} data-aos="fade-right">
            <div className="about-me-text">
              <p>
                Soy desarrollador Fullstack (Python y React) con más de 15 años en operaciones de contact center en Teleperformance. Pasé de Supervisor a Analista WFM y hoy soy Team Leader del área GTR: conozco los problemas de la operación desde adentro, y construí y desplegué el Portal GTR para resolverlos en producción.
              </p>
              <p>
                Además fundé FX Estudio, donde llevo proyectos web con clientes reales de punta a punta, desde el relevamiento de necesidades hasta la puesta en producción. De ahí salieron la plataforma de invitaciones digitales y el nuevo sitio de FM País.
              </p>
              <p>
                Trabajo con flujos de desarrollo asistido por IA (AI-augmented development), que me permiten iterar rápido sin perder el foco en el problema. Busco un rol donde pueda combinar liderazgo técnico, gestión de proyectos y desarrollo. Disponible presencial en Tucumán o remoto para LATAM.
              </p>
            </div>

            <div className="mt-4 d-flex flex-wrap gap-3">
              {quickFacts.map((fact, i) => (
                <span key={i} className="d-flex align-items-center gap-1 small">
                  <span>{fact.icon}</span>
                  <span>{fact.text}</span>
                </span>
              ))}
            </div>

            <h3 className="mt-4 mb-3 text-center text-lg-start">Habilidades Clave</h3>
            <div className="mt-2">
              {Object.entries(skillCategories).map(([category, skills]) => (
                <Row key={category} className="mb-3 align-items-center">
                  <Col md={4}>
                    <h5 className="text-md-end text-center fw-bold">{category}</h5>
                  </Col>
                  <Col md={8}>
                    <div className="d-flex flex-wrap justify-content-center justify-content-md-start">
                      {skills.map((skill) => (
                        <Badge key={skill} pill bg="primary" className="m-1 p-2 fs-6 fw-normal">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </Col>
                </Row>
              ))}
            </div>
          </Col>

          <Col lg={5} data-aos="fade-left" data-aos-delay="200" className="text-center">
            <Image
              src={workspaceImage}
              rounded
              fluid
              className="shadow-lg mb-4 about-me-image"
              alt="Espacio de trabajo de desarrollo"
              style={{ maxWidth: '350px', height: 'auto' }}
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default AboutMe;
