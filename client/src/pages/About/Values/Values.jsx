import { Container, Row, Col, Card } from "react-bootstrap";
import { FaUserShield, FaClock, FaHandHoldingHeart } from "react-icons/fa";
import "./Values.css";

const Values = () => {
  const data = [
    {
      id: "01",
      icon: <FaUserShield />,
      title: "Verified Experts",
      text: "Our panel consists of board-certified specialists with years of clinical excellence and proven track records.",
      accent: "#2563eb"
    },
    {
      id: "02",
      icon: <FaClock />,
      title: "24/7 Availability",
      text: "Healthcare doesn't wait, and neither do we. Access our medical network anytime, anywhere, with instant booking.",
      accent: "#6366f1"
    },
    {
      id: "03",
      icon: <FaHandHoldingHeart />,
      title: "Patient First",
      text: "We believe in empathetic care. Your comfort and recovery are the heart of everything we do at CarePulse.",
      accent: "#14b8a6"
    },
  ];

  return (
    <section className="values-premium-section py-5">
      <Container className="py-5">
        <div className="text-center mb-5">
          <h6 className="text-primary fw-bold text-uppercase ls-2 mb-2">Our Philosophy</h6>
          <h2 className="display-5 fw-bold playfair text-dark">The Pillars of Our <span className="text-primary">Service</span></h2>
          <div className="title-divider-custom mx-auto"></div>
        </div>

        <Row className="g-4 mt-4">
          {data.map((item, i) => (
            <Col lg={4} key={i}>
              <Card className="value-modern-card h-100 border-0 shadow-sm">
                <Card.Body className="p-5 position-relative overflow-hidden">
           
                  <span className="value-number-watermark">{item.id}</span>
                  
                  <div className="value-icon-circle mb-4" style={{ backgroundColor: `${item.accent}15`, color: item.accent }}>
                    {item.icon}
                  </div>

                  <h4 className="fw-bold mb-3 playfair text-dark">{item.title}</h4>
                  <p className="text-muted small lh-lg mb-0">
                    {item.text}
                  </p>

              
                  <div className="value-bottom-bar" style={{ backgroundColor: item.accent }}></div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Values;