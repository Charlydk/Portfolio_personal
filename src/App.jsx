import './App.css'; // Mantenemos tus estilos personalizados si los tienes

// Importamos componentes de React-Bootstrap
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function App() {
  return (
    <>
      {/* Contenedor principal de tu portfolio */}
      <div className="portfolio-container text-center mt-5"> {/* Agregamos clases de Bootstrap para centrar y margen superior */}
        <h1>¡Bienvenido al Portfolio de Fabián Bernardino!</h1>
        <p>Aquí encontrarás mis proyectos y podrás conocer más sobre mi trabajo.</p>
        <p>Estoy emocionado de compartir mi progreso en programación.</p>

        {/* Ejemplo de un componente Button de React-Bootstrap */}
        <Button variant="primary" className="mt-3">Conoce mis proyectos</Button>

        {/* Ejemplo de un componente Card de React-Bootstrap */}
        <div className="d-flex justify-content-center mt-4"> {/* Bootstrap para centrar la tarjeta */}
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="https://via.placeholder.com/150" alt="Placeholder de imagen"/> {/* Reemplaza con una imagen real luego */}
            <Card.Body>
              <Card.Title>Proyecto del Ahorcado</Card.Title>
              <Card.Text>
                Mi primer gran proyecto. Un juego clásico de adivinanza.
              </Card.Text>
              <Button variant="success">Ver Proyecto</Button>
            </Card.Body>
          </Card>
        </div>
      </div>
    </>
  );
}

export default App;