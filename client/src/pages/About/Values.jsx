import { Container, Row, Col, Card } from "react-bootstrap";
import { FaUserShield, FaClock, FaHandHoldingHeart } from "react-icons/fa";

const Values = () => {
  const data = [
    {
      icon: <FaUserShield size={35} />,
      title: "Verified Experts",
      text: "Every doctor on our platform goes through a rigorous verification process.",
    },
    {
      icon: <FaClock size={35} />,
      title: "24/7 Availability",
      text: "Book appointments anytime, anywhere, at your convenience.",
    },
    {
      icon: <FaHandHoldingHeart size={35} />,
      title: "Patient First",
      text: "We prioritize your health and comfort above everything else.",
    },
  ];

  return (
    <section className="py-5">
      <Container>
        <div className="text-center mb-5">
          <h3 className="playfair fw-bold">Our Core Values</h3>
          <div
            className="bg-primary mx-auto"
            style={{ width: "50px", height: "3px" }}
          ></div>
        </div>
        <Row className="g-4">
          {data.map((item, i) => (
            <Col md={4} key={i}>
              <Card className="glass-card text-center p-5 border-0 h-100">
                <div className="icon-box mb-4">{item.icon}</div>
                <h5 className="fw-bold mb-3">{item.title}</h5>
                <p className="text-muted small mb-0">{item.text}</p>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Values;
