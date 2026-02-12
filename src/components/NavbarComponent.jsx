// src/components/NavbarComponent.jsx

import React, { useState } from 'react'; // <-- Asegúrate de importar useState
import { Navbar, Nav, Container } from 'react-bootstrap'; // Asegúrate de importar Navbar, Nav, Container
import logo from '../assets/my-logo.png'; // Tu logo

const NavbarComponent = () => {
  // Estado para controlar si el Navbar está expandido (abierto) o colapsado (cerrado)
  const [expanded, setExpanded] = useState(false);

  // Función para cerrar el Navbar (colapsarlo)
  const handleNavLinkClick = () => {
    setExpanded(false);
  };

  return (
    <Navbar bg="white" variant="light" expand="lg" fixed="top" expanded={expanded} className="navbar"> {/* <-- Vincula el estado 'expanded' aquí */}
      <Container>
        <Navbar.Brand href="#home">
          <img
            src={logo}
            width="30"
            height="30"
            className="d-inline-block align-top"
            alt="Fabian Bernardino Logo"
            loading="lazy"
          />{' '}
          Fabián Bernardino
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={() => setExpanded(expanded ? false : true)} /> {/* <-- Vincula el toggle a setExpanded */}
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            {/* Usa la función handleNavLinkClick en el onClick de cada Nav.Link */}
            <Nav.Link href="#home" onClick={handleNavLinkClick}>Inicio</Nav.Link>
            <Nav.Link href="#about" onClick={handleNavLinkClick}>Sobre Mí</Nav.Link>
            <Nav.Link href="#projects" onClick={handleNavLinkClick}>Proyectos</Nav.Link>
            <Nav.Link href="#contact" onClick={handleNavLinkClick}>Contacto</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;