import { Container, Row, Col, Card, Badge } from "react-bootstrap";
import { FaLinkedin, FaTwitter, FaEnvelope, FaStar } from "react-icons/fa";
import "./Team.css";

const Team = () => {
    const doctors = [
        {
          name: "Dr. Sarah Johnson",
          role: "Chief Cardiologist",
          exp: "12+ Years Exp.",
   
          img: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?q=80&w=1000",
          color: "blue"
        },
        {
          name: "Dr. Michael Chen",
          role: "Neurology Specialist",
          exp: "10+ Years Exp.",
     
          img: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=1000",
          color: "indigo"
        },
        {
          name: "Dr. Emily Blunt",
          role: "Pediatric Surgeon",
          exp: "08+ Years Exp.",
         
          img: "https://images.unsplash.com/photo-1651008376811-b90baee60c1f?q=80&w=1000",
          color: "teal"
        }
      ];
  return (
    <section className="team-section-wrapper py-5">
      {/* --- Ambient Background Glows --- */}
      <div className="team-glow glow-1"></div>
      <div className="team-glow glow-2"></div>

      <Container className="py-5 position-relative">
        <div className="text-center mb-5">
          <Badge bg="primary" className="bg-opacity-10 text-primary px-3 py-2 rounded-pill mb-3">Our Board-Certified Experts</Badge>
          <h2 className="display-4 fw-bold playfair text-dark">Meet Our <span className="text-primary">Specialists</span></h2>
          <p className="text-muted mx-auto" style={{ maxWidth: '600px' }}>
            Our team of world-class doctors is dedicated to providing you with the highest quality healthcare services.
          </p>
        </div>

        <Row className="g-5">
          {doctors.map((doc, i) => (
            <Col lg={4} md={6} key={i}>
              <div className="team-card-container">
                <div className={`team-img-frame frame-${doc.color}`}>
                  <img src={doc.img} alt={doc.name} className="doctor-image" />
                  
                  
                  <div className="exp-badge shadow-sm">
                    <FaStar className="text-warning me-1" /> {doc.exp}
                  </div>
 
                  <div className="team-social-overlay">
                    <div className="social-icons-box">
                      <a href="#"><FaLinkedin /></a>
                      <a href="#"><FaTwitter /></a>
                      <a href="#"><FaEnvelope /></a>
                    </div>
                  </div>
                </div>

                <div className="team-info-box text-center mt-4">
                  <h4 className="fw-bold mb-1 text-dark">{doc.name}</h4>
                  <p className="text-primary fw-medium small mb-0">{doc.role}</p>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Team;