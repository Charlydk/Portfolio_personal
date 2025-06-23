import React from 'react';
import { Card, Button } from 'react-bootstrap';

// El componente ProjectCard recibe 'props' (propiedades)
function ProjectCard({ title, description, imageUrl, projectUrl, repoUrl }) {
  return (
    // Usamos el componente Card de React-Bootstrap para cada proyecto
    // className="h-100": Asegura que todas las tarjetas en una fila tengan la misma altura,
    //                     útil para el diseño de cuadrícula.
    // shadow-sm: Una sombra sutil para darle profundidad.
    <Card className="h-100 shadow-sm">
      {/* Card.Img para la imagen del proyecto */}
      <Card.Img
        variant="top" // La imagen se posiciona en la parte superior de la tarjeta
        src={imageUrl} // La URL de la imagen viene de las props
        alt={`Imagen del proyecto ${title}`} // Texto alternativo descriptivo para SEO y accesibilidad
        style={{ objectFit: 'cover', height: '200px' }} // Estilo para que la imagen cubra el área y tenga altura fija
      />
      <Card.Body className="d-flex flex-column"> {/* Usamos flex-column para que el contenido se apile y los botones queden al final */}
        {/* Card.Title para el título del proyecto */}
        <Card.Title>{title}</Card.Title>
        {/* Card.Text para la descripción del proyecto */}
        <Card.Text className="flex-grow-1"> {/* flex-grow-1 para que la descripción ocupe el espacio disponible */}
          {description}
        </Card.Text>
        <div className="mt-auto"> {/* mt-auto para empujar los botones hacia abajo */}
          {/* Botón para ver el demo (si projectUrl existe) */}
          {projectUrl && ( // Condicionalmente renderiza el botón solo si projectUrl está presente
            <Button
              variant="primary"
              href={projectUrl}
              target="_blank" // Abre en una nueva pestaña
              rel="noopener noreferrer" // Seguridad
              className="w-100 mb-2" // Ancho completo y margen inferior
            >
              Ver Demo
            </Button>
          )}
          {/* Botón para ver el repositorio en GitHub */}
          <Button
            variant="outline-secondary"
            href={repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-100"
          >
            Ver Repositorio
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
}

export default ProjectCard;