import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap'; // Importamos Container, Row, Col y Button de React-Bootstrap
import myProfileImage from '../assets/profile-pic.jpg'; // Asegúrate de que esta ruta sea correcta

function HeroSection() {
  return (
    // La etiqueta <section> es semántica y ayuda al SEO.
    // id="home": Crucial para la navegación suave desde la Navbar.
    // className="bg-light text-dark text-center py-5": Clases de Bootstrap para un fondo claro, texto oscuro, centrado y padding vertical.
    <section id="home" className="bg-light text-dark text-center py-5" style={{ minHeight: '90vh', display: 'flex', alignItems: 'center' }}>
      <Container>
        <Row className="align-items-center justify-content-center">
          <Col xs={12} md={6} className="order-md-2 mb-4 mb-md-0"> {/* Ordenamos la imagen para que vaya a la derecha en md+ */}
            {/* Imagen de perfil */}
            {/* img-fluid: Hace la imagen responsiva. rounded-circle: La hace circular. */}
            <img
              src={myProfileImage}
              alt="Fabián Bernardino - Desarrollador"
              className="img-fluid rounded-circle shadow-lg" // shadow-lg añade una sombra
              style={{ maxWidth: '300px', height: 'auto' }} // Controla el tamaño máximo
            />
          </Col>
          <Col xs={12} md={6} className="order-md-1"> {/* Ordenamos el texto para que vaya a la izquierda en md+ */}
            {/* Título principal */}
            <h1 className="display-4 fw-bold mb-3">
              ¡Hola, soy <span className="text-primary">Fabián Bernardino</span>!
            </h1>
            {/* Subtítulo/Eslogan */}
            <p className="lead mb-4">
              Desarrollador de software apasionado por crear soluciones y construir experiencias interactivas.
              Actualmente explorando el mundo de **React** y **Python**.
            </p>
            {/* Botones de acción */}
            <Button variant="primary" size="lg" className="me-3 mb-2">
              Mis Proyectos
            </Button>
            <Button variant="outline-dark" size="lg" className="mb-2">
              Contáctame
            </Button>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default HeroSection;