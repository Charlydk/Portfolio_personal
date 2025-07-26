import './App.css';
import NavbarComponent from './components/NavbarComponent';
import HeroSection from './components/HeroSection';
import AboutMe from './components/AboutMe';
import FooterComponent from './components/FooterComponent';
import ProjectsSection from './components/ProjectsSection';
import ContactForm from './components/ContactForm';
import ExperienciaComponent from './components/ExperienciaComponent';


function App() {
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