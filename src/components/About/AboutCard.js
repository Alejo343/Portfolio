import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hola, me llamo{" "}
            <span className="purple">David Alejandro Galeano </span>soy
            <span className="purple"> tecnólogo</span> y un entusiasta del
            desarrollo, siempre buscando nuevas oportunidades para crecer y
            crear.
            <br />
            <br />
            Estoy constantemente explorando formas de conectar mis habilidades
            técnicas con mi creatividad para llevar cada proyecto al siguiente
            nivel.
            <br />
            <br />
            Ademas de codear, algunas actividades mas que me encantan hacer!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Ir al Gymnasio 🏋🏻‍♂️
            </li>
            <li className="about-activity">
              <ImPointRight /> Tocar el piano 🎹
            </li>
            <li className="about-activity">
              <ImPointRight /> Viajar y explorar nuevos lugares🏍️
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "La única forma de hacer un trabajo, es amar lo que haces"{" "}
          </p>
          <footer className="blockquote-footer">Steve Jobs</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
