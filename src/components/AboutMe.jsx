// src/components/AboutMe.jsx

import React from 'react';
import { Container, Row, Col, Badge, Image } from 'react-bootstrap'; // <-- Importamos Image
import workspaceImage from '../assets/workspace.png'; // <-- 2. Importamos la nueva imagen
import './AnimatedBackground.css';

function AboutMe() {
  const skillCategories = {
    "Frontend": [
      'JavaScript', 'React', 'HTML5', 'CSS3', 'Bootstrap'
    ],
    "Backend": [
      'C#', 'ASP.NET Core', 'Python', 'SignalR'
    ],
    "Bases de Datos y Análisis": [
      'SQL', 'PostgreSQL', 'Power BI', 'Excel', 'VBA'
    ],
    "Cloud y DevOps": [
      'Docker', 'Google Cloud', 'Git', 'GitHub'
    ],
    "Herramientas": [
      'Vite', 'VS Code'
    ]
  };

  return (
    <section id="about" className="bg-custom-section py-5"> {/* Usamos la clase del fondo gris claro */}
      <Container>
        <h2 className="text-center mb-5 display-5 fw-bold" data-aos="fade-down">Sobre Mí</h2>
        
        {/* Usaremos un layout de dos columnas */}
        <Row className="align-items-center">

          {/* --- Columna Izquierda: Texto --- */}
          <Col lg={7} data-aos="fade-right">
            <div className="about-me-text"> {/* 3. Usamos una clase para controlar el tamaño del texto */}
              <p className="lead"> {/* La clase 'lead' hace el primer párrafo más grande */}
                Soy Fabián Bernardino, un desarrollador de software apasionado por la tecnología, con una fuerte inclinación hacia el aprendizaje continuo y la resolución de problemas.
              </p>
              <p>
                Mi interés por la programación nació de la fascinación por cómo la lógica y la creatividad pueden combinarse para construir soluciones útiles e innovadoras. A lo largo de mi camino, he desarrollado habilidades en Python y, más recientemente, me he sumergido en el desarrollo web con JavaScript y React.
              </p>
              <p>
                Me considero una persona proactiva, con gran capacidad de autoaprendizaje y un fuerte deseo de seguir creciendo profesionalmente. Disfruto trabajar en equipo y enfrentar nuevos desafíos.
              </p>
            </div>
            
            <h3 className="mt-3 mb-3 text-center">Mis Habilidades</h3>
            <div className="mt-4">
              {/* Iteramos sobre el objeto de categorías como antes */}
              {Object.entries(skillCategories).map(([category, skills]) => (
                
                // 1. Creamos una FILA para cada categoría con un margen inferior
                <Row key={category} className="mb-3 align-items-center">
                  
                  {/* 2. Una COLUMNA para el título (ocupa 3 de 12 espacios en pantallas medianas o más grandes) */}
                  <Col md={3}>
                    <h5 className="text-md-end text-center fw-bold">{category}</h5>
                  </Col>
                  
                  {/* 3. Otra COLUMNA para las etiquetas (ocupa los 9 espacios restantes) */}
                  <Col md={9}>
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

          {/* --- Columna Derecha: Imagen y Habilidades --- */}
          <Col lg={5} data-aos="fade-left" data-aos-delay="200">
            <Image 
              src={workspaceImage} 
              rounded 
              fluid 
              className="shadow-lg mb-4 about-me-image "
              alt="Espacio de trabajo de desarrollo"
              style={{ maxWidth: '350px', height: 'auto',}} // Asegura que la imagen sea responsiva
            />
            
          </Col>

        </Row>
      </Container>
    </section>
  );
}

export default AboutMe;