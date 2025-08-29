// src/components/ProjectCard.jsx

import React from 'react';
import { Card, Button, Modal, Badge, Ratio } from 'react-bootstrap';

function ProjectCard({ project, onShowModal }) {
  const { title, description, imageUrl, projectUrl, repoUrl, modalContent, technologies, videoUrl } = project;

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
        <div className="mb-3"> 
          {technologies && technologies.map((tech, index) => (
            <Badge key={index} pill bg="secondary" className="me-1 mb-1 fw-normal">
              {tech}
            </Badge>
          ))}
        </div>
        <div className="mt-auto">
          {/* Botón "Más Detalles": Siempre visible si hay contenido. */}
          {modalContent && (
            <Button variant="outline-primary" className="w-100 mb-2" onClick={onShowModal}>
              Más Detalles
            </Button>
          )}

          {/* --- INICIO DE LA LÓGICA CORREGIDA PARA EL BOTÓN DE DEMO --- */}
          
          {projectUrl ? (
            // 1. Si hay un enlace a una demo en vivo, SIEMPRE se muestra este botón funcional.
            <Button variant="primary" href={projectUrl} target="_blank" rel="noopener noreferrer" className="w-100 mb-2">
              Ver Demo en Vivo
            </Button>
          ) : videoUrl ? (
            // 2. Si NO hay demo en vivo, PERO SÍ hay un video (que está en los detalles), se muestra este botón DESHABILITADO.
            <Button variant="secondary" className="w-100 mb-2" disabled>
              Demo no Disponible
            </Button>
          ) : (
            // 3. Si NO hay ni demo en vivo NI video, se muestra este botón deshabilitado.
            <Button variant="secondary" className="w-100 mb-2" disabled>
              Demo No Disponible
            </Button>
          )}

          {/* --- FIN DE LA LÓGICA CORREGIDA --- */}
          
          <Button variant="outline-secondary" href={repoUrl} target="_blank" rel="noopener noreferrer" className="w-100">
            Ver Repositorio
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
}

// El Modal del proyecto no necesita cambios.
ProjectCard.Modal = function ProjectModal({ show, onHide, project }) {
  if (!project) return null;
  const { title, modalContent, videoUrl } = project;
  const modalTitle = videoUrl ? `Video Demo: ${title}` : (modalContent?.title || title);

  return (
    <Modal show={show} onHide={onHide} size="lg" centered>
      <Modal.Header closeButton>
        <Modal.Title>{modalTitle}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {videoUrl && (
          <Ratio aspectRatio="16x9" className="mb-4">
            <iframe 
              src={videoUrl}
              title={`Video demo de ${title}`}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen
            ></iframe>
          </Ratio>
        )}
        {modalContent?.text.map((paragraph, index) => (
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