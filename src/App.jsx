import { useEffect } from 'react';
import AOS from 'aos';
import './App.css';
import NavbarComponent from './components/NavbarComponent';
import HeroSection from './components/HeroSection';
import AboutMe from './components/AboutMe';
import FooterComponent from './components/FooterComponent';
import ProjectsSection from './components/ProjectsSection';
import ContactForm from './components/ContactForm';
import ExperienciaComponent from './components/ExperienciaComponent';


function App() {
  useEffect(() => {
    // Init after the first render: AOS must see the [data-aos] elements,
    // otherwise they stay hidden until the user scrolls.
    AOS.init({
      duration: 600,
      offset: 40,
      once: true,
      disable: () => window.matchMedia('(prefers-reduced-motion: reduce)').matches,
    });

    // Deep links like /#projects: the target did not exist when the browser
    // tried to scroll, so scroll to it once the sections are rendered.
    const id = decodeURIComponent(window.location.hash.slice(1));
    if (id) {
      document.getElementById(id)?.scrollIntoView();
    }
  }, []);

  return (
    <>

      <NavbarComponent />

      <div id="main-content" className='container-fluid p-0' style={{ paddingTop: '56px' }}>

        <HeroSection />

        <AboutMe />

        <ExperienciaComponent />

        <ProjectsSection />

        <ContactForm />

      </div>

      <FooterComponent />

    </>
  );
}

export default App;
