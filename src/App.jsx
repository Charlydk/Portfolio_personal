import './App.css';
import NavbarComponent from './components/NavbarComponent';



function App() {
  return (
    <>
      {/* 1. NavbarComponent se renderiza primero para que esté en la parte superior */}
      <NavbarComponent />

      {/* Un div para dar espacio debido al fixed="top" de la Navbar */}
      {/* Esto es importante para que el contenido no quede oculto debajo de la Navbar fija */}
      <div style={{ paddingTop: '56px' }}> {/* Ajustar de ser necesario*/}

        {/* Este es el contenido de tu página, donde irán las secciones */}
        <div className="portfolio-container text-center mt-5">
          <h1>¡Bienvenido al Portfolio de Fabián Bernardino!</h1>
          <p>Aquí encontrarás mis proyectos y podrás conocer más sobre mi trabajo.</p>
          <p>Estoy emocionado de compartir mi progreso en programación.</p>
        
        </div>

     

      </div> {/* Cierre del div de paddingTop */}
    </>
  );
}

export default App;