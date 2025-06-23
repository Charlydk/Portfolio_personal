// src/components/ProjectsSection.jsx

import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ProjectCard from './ProjectCard';
import projects from '../data/projectsData'; // Asegúrate que esta ruta sea correcta

function ProjectsSection() {
  return (
    <section id="projects" className="bg-light py-5">
      <Container>
        <h2 className="text-center mb-5 display-5 fw-bold">Mis Proyectos</h2>

        <Row className="justify-content-center gx-4 gy-4">
          {/* Aquí es donde renderizamos cada ProjectCard dinámicamente */}
          {projects.map((project) => ( // Itera sobre el array 'projects'
            <Col key={project.id} xs={12} md={6} lg={4}> {/* Cada columna contendrá una ProjectCard */}
              <ProjectCard
                title={project.title}
                description={project.description}
                imageUrl={project.imageUrl}
                projectUrl={project.projectUrl}
                repoUrl={project.repoUrl}
                // Puedes pasar otras props si las añades en projectsData.js (ej., technologies)
              />
            </Col>
          ))}
        </Row>

      </Container>
    </section>
  );
}

export default ProjectsSection;
