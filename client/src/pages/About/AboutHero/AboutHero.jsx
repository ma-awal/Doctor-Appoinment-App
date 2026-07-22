import { Container, Row, Col, Badge } from "react-bootstrap";
import "./AboutHero.css";  

const AboutHero = () => {
  return (
    <section className="about-hero-overlay-section">
 
      <div className="hero-overlay-tint"></div>
      
      <Container className="position-relative z-index-10">
        <Row className="justify-content-center text-center">
          <Col lg={9} xl={8} className="fade-in-up">
            <Badge
              bg="primary"
              className="bg-opacity-25 text-white px-4 py-2 rounded-pill mb-4 border border-white border-opacity-25"
              style={{ letterSpacing: '1px', fontSize: '0.8rem' }}
            >
              ESTABLISHED SINCE 2014
            </Badge>
            
            <h1 className="display-2 fw-bold text-white mb-4 playfair hero-title-large">
              Better Care for a <br />
              <span className="text-accent-blue italic-font">Healthier Life.</span>
            </h1>
            
            <div className="divider-line-gold mx-auto mb-4"></div>
            
            <p className="lead text-white text-opacity-75 mx-auto mb-0 hero-description-text">
              We are a team of dedicated medical professionals committed to 
              excellence in healthcare. By combining human compassion with 
              cutting-edge technology, we ensure you get the best medical experience.
            </p>
          </Col>
        </Row>
      </Container>
 
      <div className="hero-bottom-curve"></div>
    </section>
  );
};

export default AboutHero;