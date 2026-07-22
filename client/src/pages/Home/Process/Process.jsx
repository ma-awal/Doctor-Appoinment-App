import { Container, Row, Col } from "react-bootstrap";
import { FaCalendarCheck, FaUserNurse, FaShieldAlt, FaLongArrowAltRight } from "react-icons/fa";
import "./Process.css";

const Process = () => {
  const steps = [
    {
      icon: <FaCalendarCheck />,
      number: "01",
      title: "Find a Specialist",
      desc: "Browse through our extensive list of board-certified medical experts."
    },
    {
      icon: <FaUserNurse />,
      number: "02",
      title: "Choose a Slot",
      desc: "Select a date and time that fits perfectly with your personal schedule."
    },
    {
      icon: <FaShieldAlt />,
      number: "03",
      title: "Get Confirmed",
      desc: "Receive instant booking confirmation and meet your doctor with ease."
    }
  ];

  return (
    <section className="process-gradient-section py-5">
      <Container className="py-5">
        <Row className="align-items-center">
          {/* বাম পাশ: কন্টেন্ট */}
          <Col lg={5} className="text-white z-index-10">
            <h6 className="text-info fw-bold text-uppercase mb-3 ls-2">Simple 3-Step Process</h6>
            <h2 className="display-4 fw-bold mb-5 playfair">How It <span className="text-cyan">Works?</span></h2>
            
            <div className="steps-container">
              {steps.map((step, i) => (
                <div className="step-item-horizontal mb-5 d-flex" key={i}>
                  <div className="step-number-box me-4">
                    <span className="step-num">{step.number}</span>
                    <div className="step-line"></div>
                  </div>
                  <div className="step-text">
                    <h5 className="fw-bold mb-2">{step.title}</h5>
                    <p className="opacity-75 small mb-0">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </Col>
 
          <Col lg={7} className="mt-5 mt-lg-0">
            <div className="mood-board-wrapper">
         
              <div className="mood-img main-img shadow-2xl">
                <img src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=1000" alt="Medical Team" />
              </div>
              
          
              <div className="mood-img secondary-img shadow-lg d-none d-md-block">
                <img src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=800" alt="Hospital Clinic" />
              </div>

         
              <div className="mood-ui-card shadow-lg animate-float">
                <div className="bg-white p-3 rounded-4 d-flex align-items-center gap-3">
                  <div className="bg-success bg-opacity-10 p-2 rounded-circle text-success"><FaShieldAlt /></div>
                  <div className="text-dark">
                    <p className="fw-bold mb-0 small">Booking Verified</p>
                    <small className="text-muted">100% Secured</small>
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Process;