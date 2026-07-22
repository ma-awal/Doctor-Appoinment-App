import { Container, Row, Col, Card } from "react-bootstrap";
import { FaHeartbeat, FaBrain, FaBaby, FaUserMd, FaArrowRight } from "react-icons/fa";
import "./Specialties.css";

const Specialties = () => {
  const data = [
    { icon: <FaHeartbeat />, title: "Cardiology", text: "Comprehensive heart care with advanced diagnostic technology.", color: "blue" },
    { icon: <FaBrain />, title: "Neurology", text: "Expert treatment for brain, spine, and nervous system disorders.", color: "indigo" },
    { icon: <FaBaby />, title: "Pediatrics", text: "Dedicated healthcare for infants, children, and adolescents.", color: "teal" },
    { icon: <FaUserMd />, title: "General Medicine", text: "Internal medicine and preventive care for adult patients.", color: "cyan" },
  ];

  return (
    <section className="specialties-section py-5">
      {/* --- Ambient Background Glows --- */}
      <div className="glow-spread glow-top-right"></div>
      <div className="glow-spread glow-center-left"></div>
      <div className="glow-spread glow-bottom-right"></div>
      
      <Container className="py-5 position-relative z-index-2">
        <div className="text-center mb-5">
          <h6 className="text-primary fw-bold text-uppercase ls-2">Medical Services</h6>
          <h2 className="display-4 fw-bold text-dark mb-3 playfair">Specialized Care Units</h2>
          <div className="title-line-center"></div>
        </div>

        <Row className="g-4">
          {data.map((item, index) => (
            <Col lg={3} md={6} key={index}>
              <Card className={`specialty-card h-100 border-0 card-${item.color}`}>
                <Card.Body className="p-4 d-flex flex-column">
                  <div className="specialty-icon-wrapper mb-4 shadow-sm">
                    {item.icon}
                  </div>
                  <h4 className="fw-bold mb-3">{item.title}</h4>
                  <p className="text-muted small flex-grow-1 lh-lg">{item.text}</p>
                  
                  <div className="mt-4 pt-3 border-top border-light">
                    <button className="btn-read-more">
                      Explore Details <FaArrowRight className="ms-2 icon-arrow" />
                    </button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Specialties;