// src/components/AboutMe.jsx

import React from 'react';
import { Container, Row, Col, Badge } from 'react-bootstrap'; // Importamos Badge para las habilidades
// Puedes importar una imagen si quieres añadir una aquí, similar a la HeroSection
// import anotherImage from '../assets/my-coding-setup.jpg';

function AboutMe() {
  // Un array para tus habilidades. Puedes añadir o quitar las que necesites.
  const skills = [
    'JavaScript', 'React', 'HTML5', 'CSS3', 'Bootstrap',
    'Python', 'Flask', 'SQL', 'Git', 'GitHub', 'Vite', 'VS Code',
    'Problem Solving', 'Teamwork', 'Comunicación', 'Aprendizaje Continuo'
  ];

  return (
    // id="about": Crucial para la navegación desde la Navbar.
    // bg-white: Fondo blanco. Puedes cambiarlo a bg-light si prefieres.
    // py-5: Padding vertical.
    <section id="about" className="bg-white py-5">
      <Container>
        <h2 className="text-center mb-4 display-5 fw-bold">Sobre Mí</h2>
        <Row className="justify-content-center">
          <Col lg={8}> {/* Columna para el contenido principal, centrada */}
            <p className="lead text-center">
              Soy Fabián Bernardino, un desarrollador de software apasionado por la tecnología, con una fuerte inclinación hacia el aprendizaje continuo y la resolución de problemas. Actualmente me desempeño como supervisor del área de Workforce en un call center, donde aplico herramientas como Excel y Python para el análisis y manejo eficiente de datos operativos.
            </p>
            <p>
              Mi interés por la programación nació de la fascinación por cómo la lógica y la creatividad pueden combinarse para construir soluciones útiles e innovadoras. A lo largo de mi camino, he desarrollado habilidades en Python, enfocándome en la manipulación de datos y automatización de tareas. Más recientemente, me he sumergido en el desarrollo web con JavaScript y React, disfrutando especialmente de la creación de interfaces interactivas y modernas.
            </p>
            <p>
              Me apasionan tanto el frontend como el backend, así como el análisis de datos. Esta combinación me permite abordar proyectos desde una perspectiva integral, entendiendo tanto la experiencia del usuario como la lógica detrás de escena.
            </p>
             <p>
              Me considero una persona proactiva, con gran capacidad de autoaprendizaje y un fuerte deseo de seguir creciendo profesionalmente. Disfruto trabajar en equipo, enfrentar nuevos desafíos y aplicar mis conocimientos en proyectos reales que generen impacto.
            </p>

            <h3 className="mt-5 mb-3 text-center">Mis Habilidades</h3>
            <div className="d-flex flex-wrap justify-content-center">
              {skills.map((skill, index) => (
                <Badge key={index} bg="primary" className="m-1 p-2 fs-6">
                  {skill}
                </Badge>
              ))}
            </div>

            {/* Si quieres añadir otra imagen aquí, similar a la HeroSection */}
            {/*
            <div className="text-center mt-5">
              <img
                src={anotherImage}
                alt="Configuración de programación"
                className="img-fluid rounded shadow-sm"
                style={{ maxWidth: '400px', height: 'auto' }}
              />
            </div>
            */}

          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default AboutMe;