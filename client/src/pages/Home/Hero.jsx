import { Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaCheckCircle } from "react-icons/fa";

const Hero = () => (
  <section className="hero-clean-wrapper">
    <Container>
      <Row className="align-items-center min-vh-80 py-5">
        {/* Left Side: Content */}
        <Col lg={6} className="text-start">
          <div className="badge-trusted mb-3">
            <FaCheckCircle className="text-primary me-2" />
            <span>Trusted by 10,000+ Patients</span>
          </div>
          <h1 className="display-3 fw-bold mb-4 text-dark hero-title">
            Exceptional Care <br />
            <span className="text-primary italic-font">For Every Patient.</span>
          </h1>
          <p className="lead text-muted mb-5 pe-lg-5 hero-description">
            Experience the next generation of healthcare. We combine world-class
            medical expertise with modern technology to provide the best
            treatment tailored for you.
          </p>
          <div className="d-flex gap-3">
            <Button
              as={Link}
              to="/contact"
              size="lg"
              className="btn-primary px-5 py-3 rounded-pill shadow-blue"
            >
              Book Appointment
            </Button>
            <Button
              variant="outline-primary"
              size="lg"
              className="px-5 py-3 rounded-pill"
            >
              Meet Our Team
            </Button>
          </div>
        </Col>

        {/* Right Side: Professional Image */}
        <Col lg={6} className="text-center mt-5 mt-lg-0 position-relative">
          <div className="hero-img-container">
            {/* Soft decorative blob behind doctor */}
            <div className="hero-blob"></div>
            <img
              src="https://img.freepik.com/free-photo/smiling-doctor-with-white-coat-stethoscope_23-2148827771.jpg"
              alt="Professional Doctor"
              className="img-fluid rounded-4 shadow-2xl doctor-hero-img"
            />
            {/* Floating Card for Premium Feel */}
            <div className="floating-card shadow-sm">
              <h6 className="mb-0 fw-bold">24/7 Support</h6>
              <small className="text-muted">Always here for you</small>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  </section>
);

export default Hero;
