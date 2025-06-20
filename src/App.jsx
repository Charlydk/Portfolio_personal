import './App.css';
import NavbarComponent from './components/NavbarComponent';
import HeroSection from './components/HeroSection';
import AboutMe from './components/AboutMe';
import FooterComponent from './components/FooterComponent';


function App() {
  return (
    <>
      {/* 1. NavbarComponent se renderiza primero para que esté en la parte superior */}
      <NavbarComponent />

      {/* 2. HeroSection se renderiza justo debajo de la Navbar */}
        <HeroSection />

      {/* 3. Renderizamos la sección AboutMe aquí */}
       <AboutMe />

      

      {/* Un div para dar espacio debido al fixed="top" de la Navbar */}
      {/* Esto es importante para que el contenido no quede oculto debajo de la Navbar fija */}
      <div style={{ paddingTop: '56px' }}> {/* Ajustar de ser necesario*/}

             

      </div> {/* Cierre del div de paddingTop */}

      {/* 4. Renderizamos la sección Footer aquí */}
      <FooterComponent />
      
    </>
  );
}

export default App;