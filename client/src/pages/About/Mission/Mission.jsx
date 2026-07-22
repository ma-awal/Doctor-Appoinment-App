import { Container, Row, Col } from "react-bootstrap";
import { FaCheckCircle, FaAward, FaHospitalSymbol } from "react-icons/fa";
import "./Mission.css";

const Mission = () => {
  return (
    <section className="mission-section py-5 my-5">
      <Container>
        <Row className="align-items-center">
      
          <Col lg={6} className="position-relative">
            <div className="mission-img-wrapper">
              <div className="mission-main-frame shadow-lg">
                <img
                  src="https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=1000"
                  alt="Modern Hospital Mission"
                  className="img-fluid rounded-custom-2"
                />
              </div>
              
      
              <div className="mission-floating-card shadow-lg animate-float-slow">
                <div className="bg-white p-4 rounded-4 text-center border-start border-primary border-5">
                   <FaAward className="text-primary mb-2" size={30} />
                   <h3 className="fw-bold mb-0">12+</h3>
                   <p className="text-muted small mb-0">Years of Trust</p>
                </div>
              </div>
            </div>
          </Col>

 
          <Col lg={6} className="ps-lg-5 mt-5 mt-lg-0">
            <div className="mission-content-box">
              <div className="d-flex align-items-center mb-3">
                <div className="line-short me-3"></div>
                <h6 className="text-primary fw-bold text-uppercase ls-2 mb-0">
                  Our Mission & Vision
                </h6>
              </div>
              
              <h2 className="display-4 fw-bold mb-4 playfair text-dark">
                <span className="text-primary">  Experience</span> Through Innovation
              </h2>
              
              <p className="text-muted mb-4 lead mission-lead">
                CarePulse represents a new era in healthcare accessibility. We
                combine world-class medical management with seamless technology
                to put your health first.
              </p>

          
              <div className="mission-features mt-4">
                <div className="d-flex align-items-start mb-3">
                  <FaCheckCircle className="text-primary mt-1 me-3" />
                  <div>
                    <h6 className="fw-bold mb-1">Modern Facilities</h6>
                    <p className="text-muted small">Equipped with the latest medical technology and research labs.</p>
                  </div>
                </div>
                <div className="d-flex align-items-start mb-4">
                  <FaCheckCircle className="text-primary mt-1 me-3" />
                  <div>
                    <h6 className="fw-bold mb-1">Compassionate Care</h6>
                    <p className="text-muted small">Treating every patient with dignity, respect, and emotional support.</p>
                  </div>
                </div>
              </div>

              <Row className="g-4 pt-3 border-top border-light">
                <Col sm={6}>
                  <div className="d-flex align-items-center">
                    <FaHospitalSymbol className="text-primary me-3" size={25} />
                    <div>
                      <h5 className="fw-bold mb-0">100% Secure</h5>
                      <small className="text-muted">Digital Health Records</small>
                    </div>
                  </div>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Mission;