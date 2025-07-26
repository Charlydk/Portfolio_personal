// src/components/ProjectCard.jsx

import React from 'react';
// <-- 1. AÑADE 'Badge' A LA LISTA DE IMPORTACIONES
import { Card, Button, Modal, Badge } from 'react-bootstrap'; 

// El componente ahora recibe el objeto 'project' completo y la función 'onShowModal'
function ProjectCard({ project, onShowModal }) {
  // Ya tienes 'technologies' aquí, ¡perfecto!
  const { title, description, imageUrl, projectUrl, repoUrl, modalContent, technologies } = project;

  return (
    <Card className="h-100 shadow-sm project-card">
      <Card.Img
        variant="top"
        src={imageUrl}
        alt={`Imagen del proyecto ${title}`}
        style={{ objectFit: 'cover', height: '200px' }}
        loading="lazy"
      />
      <Card.Body className="d-flex flex-column">
        <Card.Title>{title}</Card.Title>
        <Card.Text className="flex-grow-1">
          {description}
        </Card.Text>

        {/* --- INICIO DEL CÓDIGO AÑADIDO --- */}
        {/* <-- 2. AÑADE ESTE BLOQUE JUSTO AQUÍ */}
        <div className="mb-3"> 
          {technologies && technologies.map((tech, index) => (
            <Badge 
              key={index} 
              pill 
              bg="secondary" 
              className="me-1 mb-1 fw-normal" // fw-normal para que el texto no sea negrita
            >
              {tech}
            </Badge>
          ))}
        </div>
        {/* --- FIN DEL CÓDIGO AÑADIDO --- */}

        <div className="mt-auto">
          {modalContent && (
            <Button variant="outline-primary" className="w-100 mb-2" onClick={onShowModal}>
              Más Detalles
            </Button>
          )}
          {projectUrl && (
            <Button variant="primary" href={projectUrl} target="_blank" rel="noopener noreferrer" className="w-100 mb-2">
              Ver Demo
            </Button>
          )}
          <Button variant="outline-secondary" href={repoUrl} target="_blank" rel="noopener noreferrer" className="w-100">
            Ver Repositorio
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
}

// El código del Modal no necesita cambios
ProjectCard.Modal = function ProjectModal({ show, onHide, project }) {
  if (!project.modalContent) return null;

  const { title, modalContent } = project;

  return (
    <Modal show={show} onHide={onHide} size="lg" centered>
      <Modal.Header closeButton>
        <Modal.Title>{modalContent.title || title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {modalContent.text.map((paragraph, index) => (
          <p key={index} dangerouslySetInnerHTML={{ __html: paragraph }}></p>
        ))}
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>
          Cerrar
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ProjectCard;