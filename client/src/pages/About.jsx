import { Container, Row, Col, Card } from 'react-bootstrap';
import { FaUserShield, FaClock, FaHandHoldingHeart } from 'react-icons/fa';

const About = () => {
  return (
    <div className="fade-in py-5">
      <Container>
        {/* Section 1: Intro */}
        <Row className="align-items-center mb-5">
          <Col lg={6}>
            <img 
              src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=800" 
              alt="Clinic" 
              className="img-fluid rounded-4 shadow" 
            />
          </Col>
          <Col lg={6} className="ps-lg-5">
            <h2 className="fw-bold mb-4 mt-4 mt-lg-0">About <span className="text-primary">CarePulse</span></h2>
            <p className="text-muted">
              We started CarePulse with one mission: to make world-class healthcare accessible to everyone. Our platform connects patients with verified, expert doctors across various specialties.
            </p>
            <p className="text-muted">
              With over 10 years of experience in medical management, we ensure that every appointment is handled with the utmost care and professionalism.
            </p>
          </Col>
        </Row>

        {/* Section 2: Values */}
        <div className="text-center mb-5 pt-5">
          <h3 className="fw-bold">Our Core Values</h3>
        </div>
        <Row className="g-4">
          <Col md={4}>
            <Card className="custom-card text-center p-4 border-0 h-100">
              <FaUserShield className="text-primary mx-auto mb-3" size={40} />
              <h5 className="fw-bold">Verified Experts</h5>
              <p className="text-muted small">Every doctor on our platform goes through a rigorous verification process.</p>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="custom-card text-center p-4 border-0 h-100">
              <FaClock className="text-primary mx-auto mb-3" size={40} />
              <h5 className="fw-bold">24/7 Availability</h5>
              <p className="text-muted small">Book appointments anytime, anywhere, at your convenience.</p>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="custom-card text-center p-4 border-0 h-100">
              <FaHandHoldingHeart className="text-primary mx-auto mb-3" size={40} />
              <h5 className="fw-bold">Patient First</h5>
              <p className="text-muted small">We prioritize your health and comfort above everything else.</p>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default About;