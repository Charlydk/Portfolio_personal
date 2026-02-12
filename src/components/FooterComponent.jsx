import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
// Importa iconos si los vas a usar (ej., react-icons). Esto es opcional.
import { FaGithub, FaLinkedin } from 'react-icons/fa';

function FooterComponent() {
  const currentYear = new Date().getFullYear(); // Obtiene el año actual dinámicamente

  return (
    // bg-dark: Fondo oscuro para el pie de página
    // text-white: Texto blanco para contrastar con el fondo oscuro
    // py-4: Padding vertical
    // mt-auto: Para que el footer se "pegue" al fondo si el contenido es corto (usando flexbox en el body/html)
    <footer className="bg-navy-dark text-white py-4 mt-auto">
      <Container>
        <Row className="justify-content-center">
          <Col md={6} className="text-center">
            <p className="mb-1">&copy; {currentYear} Fabián Bernardino. Todos los derechos reservados.</p>
            <p className="small opacity-75">Technical Project Manager | Data-Driven Leader</p>
          </Col>
        </Row>
        <Row className="justify-content-center mt-3">
          <Col md={6} className="text-center">
            {/* Enlaces a tus redes sociales / GitHub */}
            <a
              href="https://github.com/Charlydk" // Reemplaza con tu perfil de GitHub
              target="_blank" // Abre el enlace en una nueva pestaña
              rel="noopener noreferrer" // Mejora la seguridad
              className="text-white mx-2 fs-4" // Clases para estilo del enlace y tamaño de fuente
              aria-label="Perfil de GitHub"
            >
              <FaGithub />
              <i className="bi bi-github"></i> {/* Icono de Bootstrap Icons si lo tienes */}
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/fabian-bernardino/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white mx-2 fs-4"
              aria-label="Perfil de LinkedIn"
            >
              <FaLinkedin />
              <i className="bi bi-linkedin"></i>
              LinkedIn
            </a>
            {/* Puedes añadir más enlaces aquí, como Twitter, etc. */}
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default FooterComponent;