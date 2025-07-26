// src/components/ProjectsSection.jsx

import React,{useState} from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ProjectCard from './ProjectCard';
import projects from '../data/projectsData'; // Asegúrate que esta ruta sea correcta

function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState(null);
  const handleShowModal = (project) => setSelectedProject(project);
  const handleCloseModal = () => setSelectedProject(null);

  return (
    <section id="projects" className="bg-custom-section py-5">
      <Container>
        <h2 className="text-center mb-5 display-5 fw-bold" data-aos="zoom-in">Mis Proyectos</h2>
        <Row className="justify-content-center gx-4 gy-4">
          {projects.map((project) => (
            <Col key={project.id} xs={12} md={6} lg={4} data-aos="flip-down">
              <ProjectCard
                project={project}
                onShowModal={() => handleShowModal(project)}
              />
            </Col>
          ))}
        </Row>
      </Container>

      
      {selectedProject && (
        <ProjectCard.Modal
          show={!!selectedProject}
          onHide={handleCloseModal}
          project={selectedProject}
        />
      )}
    </section>
  );
}

export default ProjectsSection;
