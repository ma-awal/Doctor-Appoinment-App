import { Container, Row, Col } from "react-bootstrap";
import { FaCalendarCheck, FaUserNurse, FaShieldAlt } from "react-icons/fa";

const Process = () => (
  <section className="py-5 bg-light mt-5 border-top border-bottom">
    <Container className="py-5">
      <Row className="align-items-center">
        <Col lg={5}>
          <h2 className="display-5 fw-bold mb-4">
            How it <span className="text-primary">Works?</span>
          </h2>
          <p className="text-muted mb-5">
            Booking an appointment has never been easier. Follow three simple
            steps.
          </p>
          <div className="d-flex mb-4">
            <div className="me-3 text-primary">
              <FaCalendarCheck size={30} />
            </div>
            <div>
              <h6 className="fw-bold">1. Find a Specialist</h6>
              <p className="text-muted small">
                Search through our list of verified experts.
              </p>
            </div>
          </div>
          <div className="d-flex mb-4">
            <div className="me-3 text-primary">
              <FaUserNurse size={30} />
            </div>
            <div>
              <h6 className="fw-bold">2. Choose a Slot</h6>
              <p className="text-muted small">
                Select a date and time that fits your schedule.
              </p>
            </div>
          </div>
          <div className="d-flex">
            <div className="me-3 text-primary">
              <FaShieldAlt size={30} />
            </div>
            <div>
              <h6 className="fw-bold">3. Get Confirmed</h6>
              <p className="text-muted small">
                Receive instant confirmation and visit.
              </p>
            </div>
          </div>
        </Col>
        <Col lg={7} className="text-center mt-5 mt-lg-0">
          <img
            src="https://images.unsplash.com/photo-1584982751601-97dcc096659c?q=80&w=1000"
            alt="Work"
            className="img-fluid rounded-5 process-img"
          />
        </Col>
      </Row>
    </Container>
  </section>
);

export default Process;
