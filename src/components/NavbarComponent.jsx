import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap'; // Importamos los componentes necesarios de React-Bootstrap

function NavbarComponent() {
  return (
    // Usamos el componente Navbar de React-Bootstrap
    // expand="lg": La barra se expandirá (no será hamburguesa) en pantallas grandes (lg) y superiores.
    // bg="dark": Fondo oscuro. Puedes cambiarlo a "light", "primary", etc., o a un color custom.
    // variant="dark": El texto de la Navbar será claro para contrastar con el fondo oscuro.
    // fixed="top": La Navbar se mantendrá en la parte superior de la ventana al hacer scroll.
    <Navbar expand="lg" bg="dark" variant="dark" fixed="top">
      <Container>
        {/* Navbar.Brand es para el logo o el nombre de tu portfolio */}
        <Navbar.Brand href="#home">Fabián Bernardino</Navbar.Brand> {/* Puedes poner tu nombre o "Mi Portfolio" */}

        {/* Navbar.Toggle es el botón de "hamburguesa" que aparece en pantallas pequeñas */}
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />

        {/* Navbar.Collapse envuelve los elementos que se colapsarán (los enlaces) */}
        <Navbar.Collapse id="responsive-navbar-nav">
          {/* Nav contiene los enlaces de navegación, ml-auto los alinea a la derecha */}
          <Nav className="ms-auto"> {/* 'ms-auto' es 'margin-left: auto' en Bootstrap 5 */}
            {/* Nav.Link son los enlaces individuales. Sus href apuntarán a los IDs de las secciones. */}
            <Nav.Link href="#home">Inicio</Nav.Link>
            <Nav.Link href="#about">Sobre Mí</Nav.Link>
            <Nav.Link href="#projects">Proyectos</Nav.Link>
            <Nav.Link href="#contact">Contacto</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarComponent;