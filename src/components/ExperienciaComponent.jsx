// src/components/ExperienciaComponent.jsx

import React from 'react';
import { Container, Row, Col, Image, Badge } from 'react-bootstrap'; 
import professionalPhoto from '../assets/professional-photo.png'; 

function ExperienciaComponent() {
  const softSkills = [
    'Liderazgo de Equipos', 'Gestión de Proyectos', 'Gestión de Stakeholders',
    'Metodologías Ágiles', 'Comunicación Estratégica', 'Resolución de Problemas',
    'Análisis de Datos', 'Toma de Decisiones', 'Optimización de Procesos', 'Scrum'
  ];

  return (
    <section id="experiencia" className="bg-custom-section py-5">
      <Container>
        <h2 className="text-center mb-5 display-5 fw-bold" data-aos="fade-up">
          Experiencia Profesional
        </h2>

        <Row className="align-items-center" data-aos="fade-up" data-aos-delay="200">
          
          <Col xl={5} className="text-center mb-4 mb-lg-0">
            <Image 
              src={professionalPhoto} 
              fluid 
              className="shadow-lg about-me-image"
              alt="Fabián Bernardino - Liderazgo en Teleperformance"
              style={{ borderRadius: '15px' }}
            />
          </Col>

          <Col xl={7}>
            <div className="text-center text-lg-start mb-4">
              <h3>Team Leader / Supervisor de WFM | Teleperformance</h3>
              <p className="text-muted">2009 – Presente | +15 años de trayectoria estratégica</p>
            </div>

            <p className="lead">
              Lidero la evolución operativa y tecnológica en Teleperformance, transformando procesos complejos en ecosistemas eficientes basados en datos. Mi trayectoria de más de 15 años me ha permitido transitar desde la operación directa hasta el liderazgo estratégico de equipos y proyectos técnicos en Workforce Management.
            </p>

            <h4 className="mt-4 text-center text-lg-start">Logros y Proyectos Destacados</h4>
            <ul className="experiencia-lista mt-3">
              <li>
                <strong>Liderazgo Estratégico:</strong> Dirección de equipos de alto rendimiento en WFM, optimizando la productividad y garantizando el cumplimiento de KPIs críticos del negocio.
              </li>
              <li>
                <strong>Automatización de Impacto (Portal GTR):</strong> Desarrollo de soluciones que automatizaron el flujo de reportes operacionales, logrando una reducción del 30% en el tiempo de análisis y facilitando la toma de decisiones inmediata.
              </li>
              <li>
                <strong>Gestión de Stakeholders y Datos:</strong> Especialista en traducir necesidades de negocio en requerimientos técnicos funcionales, utilizando SQL y Power BI para proporcionar visibilidad accionable a nivel ejecutivo.
              </li>
            </ul>

            <h4 className="mt-4 text-center text-lg-start">Habilidades de Gestión</h4>
            <div className="d-flex flex-wrap justify-content-center justify-content-lg-start mt-3">
              {softSkills.map((skill) => (
                <Badge key={skill} pill bg="primary" className="m-1 p-2 fs-6">
                  {skill}
                </Badge>
              ))}
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default ExperienciaComponent;
