import { Container, Row, Col, Button, Badge } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaCheckCircle, FaStar, FaUserMd, FaCalendarPlus } from "react-icons/fa";
import "./Hero.css";

const Hero = () => (
  <section className="hero-modern-section">
    {/* ব্যাকগ্রাউন্ড ডেকোরেশন */}
    <div className="bg-glow"></div>
    
    <Container>
      <Row className="align-items-center min-vh-90 py-5">
        {/* বাম পাশ: কন্টেন্ট */}
        <Col lg={6} className="text-start z-index-10">
          <div className="trust-badge animate__animated animate__fadeInDown">
            <div className="rating-stars me-2">
              <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
            </div>
            <span>Trusted by 20,000+ happy patients</span>
          </div>

          <h1 className="hero-main-title mt-3">
            Premium Healthcare <br />
            <span className="text-gradient">Simplified for You.</span>
          </h1>

          <p className="hero-sub-text my-4 pe-lg-5">
            Connect with board-certified specialists within minutes. We provide 
            seamless scheduling, digital records, and 24/7 care support for a 
            healthier lifestyle.
          </p>

          <div className="d-flex flex-wrap gap-3 mt-5">
            <Button as={Link} to="/contact" className="btn-modern-primary shadow-blue">
              <FaCalendarPlus className="me-2" /> Book Appointment
            </Button>
            <Button variant="outline-dark" className="btn-modern-outline">
              Explore Our Doctors
            </Button>
          </div>

          <div className="stats-mini-row mt-5 d-flex gap-4">
            <div><span className="d-block fw-bold h4 mb-0">99%</span><small className="text-muted">Success Rate</small></div>
            <div className="border-start ps-4">
              <span className="d-block fw-bold h4 mb-0">15+</span><small className="text-muted">Specialties</small>
            </div>
          </div>
        </Col>

        {/* ডান পাশ: রিয়েলিস্টিক ইমেজ ও কার্ডস */}
        <Col lg={6} className="mt-5 mt-lg-0 position-relative">
          <div className="hero-visual-wrapper">
            {/* ডক্টর ইমেজ */}
            <div className="image-card-main shadow-2xl">
              <img
                src="https://img.freepik.com/free-photo/doctor-offering-medical-tele-consultation_23-2149329007.jpg"
                alt="Healthcare Professional"
                className="img-fluid rounded-custom"
              />
            </div>

            {/* ফ্লোটিং কার্ড ১: লাইভ সাপোর্ট */}
            <div className="floating-card card-support shadow-lg animate-float-slow">
              <div className="icon-circle bg-success"><FaCheckCircle /></div>
              <div>
                <h6 className="mb-0 fw-bold">Live Support</h6>
                <small className="text-muted">Experts online now</small>
              </div>
            </div>

            {/* ফ্লোটিং কার্ড ২: ডাক্তার প্রোফাইল */}
            <div className="floating-card card-doctor shadow-lg animate-float-fast">
              <div className="icon-circle bg-primary"><FaUserMd /></div>
              <div>
                <h6 className="mb-0 fw-bold">Verified MDs</h6>
                <small className="text-muted">Top Rated Experts</small>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  </section>
);

export default Hero;