import { Container, Row, Col, Card } from "react-bootstrap";

const Team = () => {
  const doctors = [
    {
      name: "Dr. Sarah Johnson",
      role: "Chief Cardiologist",
      img: "https://img.freepik.com/free-photo/doctor-with-stethoscope-hands-folded_23-2148168517.jpg",
    },
    {
      name: "Dr. Michael Chen",
      role: "Neurology Specialist",
      img: "https://img.freepik.com/free-photo/medium-shot-doctor-with-stethoscope_23-2148816188.jpg",
    },
    {
      name: "Dr. Emily Blunt",
      role: "Pediatric Surgeon",
      img: "https://img.freepik.com/free-photo/pleased-young-female-doctor-medical-robe-stethscope-white-background_141793-13833.jpg",
    },
  ];

  return (
    <section className="py-5 bg-light mt-5">
      <Container>
        <div className="text-center mb-5">
          <h2 className="playfair display-5 fw-bold">Our Professional Team</h2>
          <div
            className="bg-primary mx-auto mb-3"
            style={{ width: "60px", height: "4px" }}
          ></div>
          <p className="text-muted">
            Managed by some of the most qualified minds in medicine.
          </p>
        </div>
        <Row className="g-4">
          {doctors.map((doc, i) => (
            <Col lg={4} md={6} key={i}>
              <Card className="team-card border-0 shadow-sm text-center">
                <div className="team-img-wrapper">
                  <Card.Img variant="top" src={doc.img} />
                </div>
                <Card.Body className="py-4">
                  <h5 className="fw-bold mb-1">{doc.name}</h5>
                  <p className="text-primary small fw-medium">{doc.role}</p>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Team;
