import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Field Guide of the Plants and Fungi of Westgate Park",
      description: "iOS App: Reingineering & Development",
      imgUrl: projImg1,
    },
    {
      title: "Spanish Window Community Services",
      description: " Web Site: Design & Development",
      imgUrl: projImg2,
    },
    {
      title: "Lifting Equipment Data Base",
      description: " Express+Nodejs+MariaDB Web Application: Design & Development",
      imgUrl: projImg3,
    }
  ];


  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Projects</h2>
                  <p>We have more than 10 years of IT experience working with small and medium industries such as Community Worker, Public Administration and Safety. We also took part in the corporative sector working with complex organizational structures such as TATA Consultancy Services and The Ecuadorian Government.</p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                      <Nav.Item>
                        <Nav.Link eventKey="first">Mobile-Web Applications</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Software Engineering</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Databases Management</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                      <Tab.Pane eventKey="first">
                        <Row>
                          {
                            projects.map((project, index) => {
                              return (
                                <ProjectCard
                                  key={index}
                                  {...project}
                                />
                              )
                            })
                          }
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <p>We are experienced software developer on system integration and implementation for major government projects as well as tech lead for consultancies like TATA and BSG. With a background in Informatics Engineering and Systems Management, we are focused on end-to-end software development (analysis, design, coding, test and optimization) for effective technical solutions.</p>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <p>Planning, developing, configuring, maintaining and supporting database management systems such as Oracle, SQL and MySQL among others.</p>
                        <p>We meet client requirements ensuring optimal database integrity, security, backup, reliability and performance.</p>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
