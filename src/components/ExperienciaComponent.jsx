import React from 'react';
import { Container, Row, Col, Badge } from 'react-bootstrap';

const experiences = [
  {
    period: "2021 – Actualidad",
    role: "WFM Team Leader (GTR)",
    company: "Teleperformance",
    description: "Desarrollo del Portal GTR (Python + React), automatización de reportes con reducción del 30% en tiempos, dashboards en Power BI y flujos AI-augmented con Claude Code."
  },
  {
    period: "Sep 2010 – 2021",
    role: "Analista de Workforce Management",
    company: "Teleperformance",
    description: "Planificación de recursos humanos para SLAs operativos, análisis de métricas de call center, automatización con Python y VBA."
  },
  {
    period: "2008 – 2010",
    role: "Supervisor de Agentes",
    company: "Teleperformance",
    description: "Liderazgo de equipos operativos de atención al cliente, seguimiento de KPIs y performance individual."
  },
  {
    period: "2023 – Actualidad",
    role: "Fundador y Desarrollador Web",
    company: "FX Estudio",
    description: "Plataforma de invitaciones digitales en producción con clientes reales, sitio de FM País 101.1 y sitio de FM Okey. Gestión de cada proyecto de punta a punta: relevamiento con el cliente, desarrollo y despliegue."
  }
];

const softSkills = [
  'Liderazgo de Equipos', 'Gestión de Proyectos', 'Metodologías Ágiles',
  'Comunicación Estratégica', 'Resolución de Problemas', 'Análisis de Datos',
  'Toma de Decisiones', 'AI-Augmented Development'
];

function ExperienciaComponent() {
  return (
    <section id="experiencia" className="bg-custom-section py-5">
      <Container>
        <h2 className="text-center mb-5 display-5 fw-bold" data-aos="fade-up">
          Experiencia Profesional
        </h2>

        <Row className="justify-content-center">
          <Col lg={8} data-aos="fade-up" data-aos-delay="100">
            {experiences.map((exp, index) => (
              <Row key={index} className="mb-4 flex-nowrap">
                <Col xs="auto" className="d-flex flex-column align-items-center pe-0">
                  <div
                    style={{
                      width: 14, height: 14, minHeight: 14,
                      background: '#0d6efd', borderRadius: '50%', marginTop: '4px', flexShrink: 0
                    }}
                  />
                  {index < experiences.length - 1 && (
                    <div style={{ width: 2, flex: 1, background: '#dee2e6', minHeight: 40, marginTop: 4 }} />
                  )}
                </Col>
                <Col style={{ paddingBottom: '0.5rem' }}>
                  <p className="text-muted small mb-1">{exp.period}</p>
                  <h5 className="mb-0">{exp.role}</h5>
                  <p className="text-primary mb-1"><em>{exp.company}</em></p>
                  <p className="text-muted mb-0">{exp.description}</p>
                </Col>
              </Row>
            ))}
          </Col>
        </Row>

        <Row className="justify-content-center mt-3">
          <Col lg={8} data-aos="fade-up" data-aos-delay="200">
            <h4 className="text-center mb-3">Habilidades de Gestión</h4>
            <div className="d-flex flex-wrap justify-content-center">
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
