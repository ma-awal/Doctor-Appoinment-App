import React from "react";
import Hero from "./Hero";
import Specialties from "./Specialties";
import Process from "./Process";
import CTA from "./CTA"; // Create a simple CTA card similarly
import "./Home.css";
import { Container, Row, Col } from "react-bootstrap";

const Home = () => {
  return (
    <main className="home-main fade-in">
      <Hero />

      {/* Quick Stats Bar */}
      <section className="py-5 bg-white shadow-sm border-bottom">
        <Container>
          <Row className="text-center g-4">
            <Col md={4}>
              <h2 className="fw-bold text-primary mb-0">15k+</h2>
              <p className="text-muted mb-0">Happy Patients</p>
            </Col>
            <Col md={4}>
              <h2 className="fw-bold text-primary mb-0">80+</h2>
              <p className="text-muted mb-0">Verified Doctors</p>
            </Col>
            <Col md={4}>
              <h2 className="fw-bold text-primary mb-0">24/7</h2>
              <p className="text-muted mb-0">Support</p>
            </Col>
          </Row>
        </Container>
      </section>

      <Specialties />
      <Process />
      <CTA />
      {/* Simple CTA integrated */}
      {/* <section className="py-5 my-5">
        <Container>
          <div
            className="p-5 rounded-5 shadow-lg text-center"
            style={{
              background: "linear-gradient(135deg, #1e40af 0%, #1e3a8a 100%)",
              color: "white",
            }}
          >
            <h2 className="playfair display-5 fw-bold mb-4">
              Are You Ready to Feel Better?
            </h2>
            <p className="mb-4 opacity-75">
              Join thousands of patients who trust CarePulse for their health
              needs.
            </p>
            <button className="btn btn-light px-5 py-3 rounded-pill fw-bold text-primary">
              Book Your First Visit
            </button>
          </div>
        </Container>
      </section> */}
    </main>
  );
};

export default Home;
