import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaHeartbeat, FaBrain, FaBaby, FaUserMd } from 'react-icons/fa';

const Home = () => {
  const specialties = [
    { icon: <FaHeartbeat size={40} />, title: 'Cardiology', text: 'Heart care experts.' },
    { icon: <FaBrain size={40} />, title: 'Neurology', text: 'Brain & nerve health.' },
    { icon: <FaBaby size={40} />, title: 'Pediatrics', text: 'Child specialist care.' },
    { icon: <FaUserMd size={40} />, title: 'General', text: 'Daily health checkups.' },
  ];

  return (
    <main className="fade-in">
      {/* Hero Section */}
      <section className="py-5 mb-5" style={{ background: 'linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%)', borderRadius: '0 0 50px 50px' }}>
        <Container className="py-5">
          <Row className="align-items-center">
            <Col lg={6}>
              <h1 className="display-4 fw-bold mb-4">Your Health is Our <span className="text-primary">Priority</span></h1>
              <p className="lead text-muted mb-4">Connect with the world's best doctors for your health. Secure, fast, and easy appointment booking at your fingertips.</p>
              <Button as={Link} to="/contact" size="lg" className="btn-primary shadow">Find a Doctor</Button>
            </Col>
            <Col lg={6} className="text-center d-none d-lg-block">
               {/* Search Pinterest/Unsplash for: "Doctor smiling high resolution" */}
               <img src="https://img.freepik.com/free-photo/doctor-offering-medical-tele-consultation_23-2149329007.jpg" alt="Doctor" className="img-fluid rounded-4 shadow-lg" style={{ maxWidth: '80%' }} />
            </Col>
          </Row>
        </Container>
      </section>

      {/* Specialties Section */}
      <section className="py-5 container">
        <div className="text-center mb-5">
          <h2 className="fw-bold">Our Medical Specialties</h2>
          <p className="text-muted">High-quality care across various medical fields.</p>
        </div>
        <Row className="g-4">
          {specialties.map((item, index) => (
            <Col md={3} key={index}>
              <Card className="custom-card text-center p-4 border-0 h-100">
                <div className="text-primary mb-3">{item.icon}</div>
                <h5 className="fw-bold">{item.title}</h5>
                <p className="text-muted small mb-0">{item.text}</p>
              </Card>
            </Col>
          ))}
        </Row>
      </section>
    </main>
  );
};

export default Home;