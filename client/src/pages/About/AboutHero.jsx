import { Container, Row, Col, Badge } from "react-bootstrap";

const AboutHero = () => {
  return (
    <section className="about-hero-bg">
      <Container>
        <Row className="justify-content-center text-center">
          <Col lg={8}>
            <Badge
              bg="primary"
              className="bg-opacity-10 text-primary px-3 py-2 rounded-pill mb-3"
            >
              Dedicated to Your Well-being
            </Badge>
            <h1 className="display-3 fw-bold playfair mb-3">
              We Are Committed To <br />
              <span className="text-primary italic-font">Your Health.</span>
            </h1>
            <p
              className="lead text-muted mx-auto"
              style={{ maxWidth: "600px" }}
            >
              At CarePulse, we combine expertise, empathy, and innovation to
              provide personalized medical care for you and your loved ones.
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AboutHero;
