import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import AboutHero from "./AboutHero";
import Values from "./Values";
import Team from "./Team"; // নতুন সেকশন
import "./About.css";

const About = () => {
  return (
    <div className="fade-in">
      <AboutHero />

      {/* Intro Section */}
      <section className="py-5 my-5">
        <Container>
          <Row className="align-items-center">
            <Col lg={6}>
              <div className="about-img-frame">
                <img
                  src="https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=1000"
                  alt="Modern Hospital"
                  className="img-fluid"
                />
              </div>
            </Col>
            <Col lg={6} className="ps-lg-5 mt-5 mt-lg-0">
              <h6 className="text-primary fw-bold text-uppercase mb-3">
                Our Mission
              </h6>
              <h2 className="display-5 fw-bold mb-4">
                Redefining the{" "}
                <span className="text-primary">Patient Experience</span>
              </h2>
              <p className="text-muted mb-4 lead">
                CarePulse represents a new era in healthcare accessibility. We
                combine world-class medical management with seamless technology
                to put your health first.
              </p>
              <Row className="g-4 mt-2">
                <Col sm={6}>
                  <h4 className="fw-bold mb-1">10+ Years</h4>
                  <p className="text-muted small">Medical Excellence</p>
                </Col>
                <Col sm={6}>
                  <h4 className="fw-bold mb-1">100% Verified</h4>
                  <p className="text-muted small">Specialist Doctors</p>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </section>

      <Values />
      <Team />
    </div>
  );
};

export default About;
