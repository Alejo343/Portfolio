import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import {
  Birthday,
  Cotizador,
  Prestamos,
  TusPelis,
} from "../../Assets/Projects";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Mis <strong className="purple">Proyectos </strong>
        </h1>
        <p style={{ color: "white" }}>
          Aqui una lista de los proyectos en los que he trabajado.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Birthday[0]}
              title="Listado de cumpleaños"
              description=""
              images={Birthday}
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
