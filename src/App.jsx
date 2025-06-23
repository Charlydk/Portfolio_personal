import './App.css';
import NavbarComponent from './components/NavbarComponent';
import HeroSection from './components/HeroSection';
import AboutMe from './components/AboutMe';
import FooterComponent from './components/FooterComponent';
import ProjectsSection from './components/ProjectsSection';

function App() {
  return (
    <>
      {/* 1. NavbarComponent se renderiza primero para que esté en la parte superior */}
      <NavbarComponent />

      {/* Este div *envuelve* a todos los componentes que van debajo de la Navbar fija. */}
      {/* Es CRUCIAL que el paddingTop se aplique al contenedor de las secciones. */}
      {/* El id="main-content" es opcional pero puede ser útil para CSS o JS futuro. */}
      <div id="main-content" className='container-fluid p-0' style={{ paddingTop: '56px' }}> {/* Ajustar de ser necesario */}

        {/* 2. HeroSection es la primera sección de contenido */}
        <HeroSection />

        {/* 3. AboutMe va después de HeroSection */}
        <AboutMe />

        {/* Aquí irán los demás componentes de sección a medida que los desarrolles y los integres: */}
        {/* <ProjectsSection /> */}
        {/* <ContactForm /> */}

        {/* 5. ProjectSection, seccion de proyectos */}
        <ProjectsSection />

      </div> {/* Cierre del div que contiene las secciones y compensa la Navbar */}

      {/* 4. FooterComponent se renderiza al final de la página, fuera del div de contenido si quieres que siempre esté abajo */}
      {/* Si quieres que el footer también tenga el padding, podría ir dentro del div anterior. */}
      {/* Pero usualmente el footer va al final de todo el contenido principal, no afectado por el padding. */}
      <FooterComponent />

    </>
  );
}

export default App;