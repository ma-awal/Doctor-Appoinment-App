import { Container, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const CTA = () => {
  return (
    <section className="py-5 my-5">
      <Container>
        <Card
          className="p-5 border-0 rounded-5 shadow-lg text-center"
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
          <div>
            <Button
              as={Link}
              to="/contact"
              size="lg"
              variant="light"
              className="px-5 py-3 rounded-pill fw-bold text-primary"
            >
              Book Your First Visit
            </Button>
          </div>
        </Card>
      </Container>
    </section>
  );
};

export default CTA;
