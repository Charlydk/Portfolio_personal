// src/components/AboutMe.jsx

import React from 'react';
import { Container, Row, Col, Badge, Image } from 'react-bootstrap';
import workspaceImage from '../assets/workspace.png';
import './AnimatedBackground.css';

function AboutMe() {
  const skillCategories = {
    "Gestión y Estrategia": [
      'SQL (Avanzado)', 'Power BI', 'Scrum', 'Gestión de KPIs', 'Gestión de Stakeholders', 'Metodologías Ágiles (Kanban/Scrum)'
    ],
    "Desarrollo Técnico": [
      'Python', 'C#', 'ASP.NET Core', 'JavaScript', 'React', 'FastAPI', 'SignalR'
    ],
    "Cloud y DevOps": [
      'Docker', 'Google Cloud', 'Git', 'GitHub'
    ],
    "Herramientas y Análisis": [
      'Excel (Avanzado)', 'VBA', 'VS Code'
    ]
  };

  return (
    <section id="about" className="bg-custom-section py-5">
      <Container>
        <h2 className="text-center mb-5 display-5 fw-bold" data-aos="fade-down">Sobre Mí</h2>
        
        <Row className="align-items-center">

          {/* --- Columna Izquierda: Texto --- */}
          <Col lg={7} data-aos="fade-right">
            <div className="about-me-text">
              <p className="lead">
                Líder estratégico con más de 15 años de trayectoria en Teleperformance, especializado en la intersección entre el análisis de datos y la gestión de operaciones.
              </p>
              <p>
                Mi evolución profesional me ha permitido consolidarme como <strong>Team Leader en Workforce Management (WFM)</strong>, donde actúo como el puente clave entre el mundo técnico de los datos (SQL/Power BI) y la ejecución estratégica de equipos bajo metodologías ágiles (Scrum).
              </p>
              <p>
                Me apasiona transformar requerimientos de negocio complejos en soluciones técnicas eficientes. Mi enfoque está centrado en la optimización de procesos y en liderar proyectos que impulsen la productividad a través de decisiones basadas en datos.
              </p>
            </div>
            
            <h3 className="mt-4 mb-3 text-center text-lg-start">Habilidades Clave</h3>
            <div className="mt-4">
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

          {/* --- Columna Derecha: Imagen --- */}
          <Col lg={5} data-aos="fade-left" data-aos-delay="200" className="text-center">
            <Image 
              src={workspaceImage} 
              rounded 
              fluid 
              className="shadow-lg mb-4 about-me-image"
              alt="Espacio de trabajo de gestión y desarrollo"
              style={{ maxWidth: '350px', height: 'auto'}}
            />
          </Col>

        </Row>
      </Container>
    </section>
  );
}

export default AboutMe;
