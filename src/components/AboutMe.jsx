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
              Soy Fabián Bernardino, un apasionado desarrollador de software en constante búsqueda de nuevos desafíos y conocimientos. Mi viaje en la programación comenzó con un profundo interés en cómo la lógica y la creatividad se unen para construir soluciones innovadoras.
            </p>
            <p>
              He dedicado tiempo a explorar lenguajes como **Python**, donde desarrollé habilidades en lógica de programación y manejo de datos. Más recientemente, me he sumergido en el mundo del desarrollo web con **JavaScript** y el ecosistema de **React**, fascinado por la creación de interfaces de usuario interactivas y responsivas. Mi enfoque actual está en dominar React para construir experiencias web dinámicas y modernas.
            </p>
            <p>
              Me considero una persona proactiva, con una gran capacidad de autoaprendizaje y un fuerte deseo de crecer profesionalmente en el ámbito de la tecnología. Disfruto resolviendo problemas, colaborando en equipos y aplicando lo que aprendo en proyectos prácticos. Estoy emocionado por la oportunidad de contribuir en entornos donde pueda seguir aprendiendo y aplicando mis habilidades para generar un impacto positivo.
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