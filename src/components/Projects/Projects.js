import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import {
  Birthday,
  Cotizador,
  TusPelis,
  Prestamos,
  Peajes,
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
              imgPath={Peajes[0]}
              title="Prestamos"
              description="Una herramienta web para generar réplicas personalizadas de tickets antiguos de peajes y 
              exportarlos en formato Word. Diseñada para simplificar la creación de documentos con precisión y rapidez."
              images={Peajes}
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={TusPelis[0]}
              title="Tus Pelis"
              description="Para descubrir películas y series con detalles como sinopsis, reparto y puntuaciones. 
              Una herramienta ideal para explorar tendencias y encontrar peliculas facilmente."
              images={TusPelis}
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Prestamos[0]}
              title="Prestamos"
              description="Una plataforma web diseñada para gestionar préstamos de manera eficiente. 
              Permite registrar clientes, monitorear pagos, calcular intereses y llevar un control detallado del historial 
              de cada préstamo. Ideal para optimizar la administración financiera."
              images={Prestamos}
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Cotizador[0]}
              title="Cotizador de prestamos"
              description="Una herramienta intuitiva para calcular préstamos de manera rápida y 
              precisa. Permite ingresar datos como monto, tasa de interés y plazo para obtener 
              pagos mensuales, intereses totales y un desglose detallado del plan de amortización."
              images={Cotizador}
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Birthday[0]}
              title="Listado de cumpleaños"
              description="Permite gestionar y recordar los cumpleaños de tus seres queridos. 
              Permite añadir, editar y organizar un listado con nombres y fechas"
              images={Birthday}
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
