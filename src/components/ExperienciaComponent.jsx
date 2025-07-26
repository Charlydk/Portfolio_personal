// src/components/ExperienciaComponent.jsx

import React from 'react';
// 1. Asegúrate de importar Image y Badge
import { Container, Row, Col, Image, Badge } from 'react-bootstrap'; 
// 2. Importa una foto tuya y guárdala en la carpeta 'assets'
import professionalPhoto from '../assets/professional-photo.png'; 

function ExperienciaComponent() {
  // 3. Define tus habilidades blandas aquí
  const softSkills = [
    'Gestión de Proyectos', 'Liderazgo de Equipos', 'Comunicación Efectiva', 
    'Resolución de Problemas', 'Análisis de Datos', 'Requerimientos',
    'Problem Solving', 'Teamwork', 'Comunicación', 'Aprendizaje Continuo'
  ];

  return (
    <section id="experiencia" className="bg-custom-section py-5">
      <Container>
        <h2 className="text-center mb-5 display-5 fw-bold" data-aos="fade-up">
          Experiencia Profesional
        </h2>

        {/* --- NUEVA ESTRUCTURA DE DOS COLUMNAS --- */}
        <Row className="align-items-center" data-aos="fade-up" data-aos-delay="200">
          
          {/* --- Columna Izquierda: Imagen --- */}
          <Col xxl={6} className="text-center mb-4 mb-lg-0">
            <Image 
              src={professionalPhoto} 
              fluid 
              className="shadow-lg about-me-image"
              alt="Fabián Bernardino, Supervisor de Workforce"
              style={{ maxWidth: '600px', height: 'auto' }}
            />
          </Col>

          {/* --- Columna Derecha: Texto y Habilidades --- */}
          <Col xxl={6}>
            <div className="text-center text-lg-start mb-4">
              {/* Tu texto ya está integrado aquí */}
              <h3>Supervisor de Workforce | Teleperformance Chile y Argentina</h3>
              <p className="text-muted">Julio 2022 – Presente | +3 años</p>
            </div>

            <p className="lead">
              Como supervisor del área de Workforce, lidero el monitoreo en tiempo real y la optimización de operaciones. Mi rol combina la gestión de equipos con el desarrollo de soluciones técnicas para mejorar la eficiencia y analizar métricas clave del negocio.
            </p>

            <h4 className="mt-4 text-center text-lg-start">Logros y Proyectos Destacados</h4>
            {/* Tu lista de logros ya está integrada aquí */}
            <ul className="experiencia-lista mt-3">
              <li>
                <strong>Automatización de Reportes con Python:</strong> Desarrollo de scripts para automatizar la recolección y procesamiento de métricas operativas, reduciendo significativamente el tiempo de generación de informes.
              </li>
              <li>
                <strong>Análisis de Datos y Visualización:</strong> Uso de librerías como Pandas para analizar grandes volúmenes de datos y crear visualizaciones en Excel que ayudan a la toma de decisiones estratégicas.
              </li>
              <li>
                <strong>Desarrollo de Requerimientos:</strong> Conducción de reuniones con clientes internos y externos para identificar necesidades y traducir requerimientos de negocio a soluciones técnicas funcionales.
              </li>
            </ul>

            <h4 className="mt-4 text-center">Habilidades Blandas</h4>
            {/* Las etiquetas de habilidades blandas que querías */}
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