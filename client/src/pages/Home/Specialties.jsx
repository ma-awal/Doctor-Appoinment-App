import { Container, Row, Col, Card } from "react-bootstrap";
import { FaHeartbeat, FaBrain, FaBaby, FaUserMd } from "react-icons/fa";

const Specialties = () => {
  const data = [
    {
      icon: <FaHeartbeat size={35} />,
      title: "Cardiology",
      text: "Expert care for your heart health.",
    },
    {
      icon: <FaBrain size={35} />,
      title: "Neurology",
      text: "Advanced brain and nerve diagnostics.",
    },
    {
      icon: <FaBaby size={35} />,
      title: "Pediatrics",
      text: "Specialized care for your little ones.",
    },
    {
      icon: <FaUserMd size={35} />,
      title: "General Medicine",
      text: "Daily checkups and wellness programs.",
    },
  ];

  return (
    <section className="py-5 mt-5">
      <Container>
        <div className="text-center mb-5">
          <h2 className="display-5 fw-bold">Specialized Care Units</h2>
          <div
            className="bg-primary mx-auto"
            style={{ width: "60px", height: "4px", borderRadius: "2px" }}
          ></div>
        </div>
        <Row className="g-4">
          {data.map((item, index) => (
            <Col lg={3} md={6} key={index}>
              <Card className="glass-card text-center p-4 border-0 h-100">
                <div className="icon-box">{item.icon}</div>
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

export default Specialties;
