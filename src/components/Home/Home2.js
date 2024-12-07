import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              PERMITEME <span className="purple"> PRESENTARME </span>
            </h1>
            <p className="home-about-body">
              Desde que descubrí el mundo de la programación, me apasiona
              aprender y crear productos que marquen la diferencia en la vida de
              las personas. 💻✨
              <br />
              <br />
              Domino tecnologías como
              <i>
                <b className="purple"> JavaScript y PHP. </b>
              </i>
              <br />
              <br />
              Siempre que tengo la oportunidad, aplico mi pasión utilizando{" "}
              <i>
                {" "}
                <b className="purple">Laravel</b>
              </i>
              ,{" "}
              <i>
                {" "}
                <b className="purple">React.js</b>
              </i>{" "}
              y para el
              <i>
                <b className="purple"> desarrollo movil </b>
              </i>
              &nbsp;el framework
              <i>
                <b className="purple"> React Native</b>
              </i>{" "}
              para crear soluciones eficientes y escalables.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>ENCUENTRAME</h1>
            <p>
              Sientete libre de <span className="purple">contacterme </span>
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/Alejo343"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/analistadesarrollador/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
