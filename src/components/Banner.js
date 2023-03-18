import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import photoIsa from "../assets/img/photoIsa.png";
import photoTelmo from "../assets/img/photoTelmo.png";
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';
import { ArrowRightCircle } from 'react-bootstrap-icons';

import TrackVisibility from 'react-on-screen';

export const Banner = () => {
  return (
    <section className="banner" id="about">
      <Container >
        <Col xs={12} md={6} xl={12}>
          <TrackVisibility>
            {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>

                <div class="text-center">
                  {/*  <span className="tagline">Welcome to Devset.Tech</span> */}
                  <h1>Isabel & Telmo IT Engineers</h1>

                  <h2>Software developers</h2>
                  <h3>&</h3>
                  <h2>Business Analysts</h2>
                  <h3>FOR</h3>
                  <h2>Small to Medium size business</h2>
                </div>
              </div>}
          </TrackVisibility>
        </Col>

        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={4}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <img src={photoIsa} />
                  <div className="social-icon">
                    <a href="https://www.linkedin.com/in/isabel-rojas-898556241/" target="_blank"><img src={navIcon1} alt="" /></a>
                    <a href="mailto:isabel.e.r@gmail.com" target="_blank"><img src={navIcon2} alt="" /></a>
                  </div>
                </div>}
            </TrackVisibility>
          </Col>

          <Col xs={12} md={6} xl={4} >
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""} >
                  <h4>If your business needs some IT help, come have a chat with us. </h4>
                  {/* 
                  <p>We are Telmo and Isabel, and we both are Informatics Engineers that translate problems into opportunities via an IT solution design. We combine our decade of IT experience with our enthusiasm for learning with the right foundation skills together with our problem-solving skills.</p>
                  <p>
                    Our Australian qualifications comprise our skills assessment at ACS (The Professional Association for Australia's ICT sector).  Telmo is registered as a software developer and  Isabel as a database administrator. She also studied the diplomas ICT50118 (Diploma of Information Technology) And ICT60220 (Advanced Diploma of Information Technology) and together we implemented some internship projects.
                  </p>
                  <p>
                    This combination of experience and studies has been our basic foundation in business analysis.
                  </p> */}

                </div>}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={4}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <img src={photoTelmo} alt="Header Img" />

                  <div className="social-icon">
                    <a href="https://www.linkedin.com/in/telmo-espinoza-228039137/" target="_blank"><img src={navIcon1} alt="" /></a>
                    <a href="mailto:telmo.espinozag@gmail.com" target="_blank"><img src={navIcon2} alt="" /></a>
                  </div>
                </div>}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={12}>
            <div class="text-center">
              <h3>* Acredited by Australian Computer Society</h3>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
