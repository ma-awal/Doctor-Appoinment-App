import { useState, useContext } from 'react';
import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap';
import { AppContext } from '../context/AppContext';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const Contact = () => {
  const { bookAppointment, loading } = useContext(AppContext);
  const [formData, setFormData] = useState({
    fullName: '', email: '', doctorName: '', date: '', message: ''
  });

  const doctors = ["Dr. Smith (Cardiology)", "Dr. Sarah (Pediatrics)", "Dr. Ahmed (Neurology)", "Dr. Emily (General)"];

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Manual Validation for JS marks
    if (!formData.fullName || !formData.email || !formData.doctorName || !formData.date) {
      alert("Please fill in all required fields!");
      return;
    }
    
    const success = await bookAppointment(formData);
    if (success) {
      setFormData({ fullName: '', email: '', doctorName: '', date: '', message: '' });
    }
  };

  return (
    <div className="fade-in py-5">
      <Container>
        <Row className="justify-content-center">
          <Col lg={10}>
            <Card className="custom-card p-0 overflow-hidden border-0">
              <Row className="g-0">
                {/* Left Side: Info */}
                <Col md={5} className="bg-primary text-white p-5">
                  <h3 className="fw-bold mb-4">Contact Info</h3>
                  <div className="d-flex align-items-center mb-4">
                    <FaPhoneAlt className="me-3" /> <span>+1 234 567 890</span>
                  </div>
                  <div className="d-flex align-items-center mb-4">
                    <FaEnvelope className="me-3" /> <span>contact@carepulse.com</span>
                  </div>
                  <div className="d-flex align-items-center">
                    <FaMapMarkerAlt className="me-3" /> <span>123 Medical Drive, NY</span>
                  </div>
                </Col>

                {/* Right Side: Form */}
                <Col md={7} className="p-5">
                  <h3 className="fw-bold mb-4">Book Appointment</h3>
                  <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3">
                      <Form.Label>Full Name*</Form.Label>
                      <Form.Control 
                        type="text" placeholder="Enter your name" required 
                        value={formData.fullName} onChange={(e) => setFormData({...formData, fullName: e.target.value})}
                      />
                    </Form.Group>
                    <Form.Group className="mb-3">
                      <Form.Label>Email Address*</Form.Label>
                      <Form.Control 
                        type="email" placeholder="name@example.com" required 
                        value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})}
                      />
                    </Form.Group>
                    <Form.Group className="mb-3">
                      <Form.Label>Select Doctor*</Form.Label>
                      <Form.Select required value={formData.doctorName} onChange={(e) => setFormData({...formData, doctorName: e.target.value})}>
                        <option value="">Choose...</option>
                        {doctors.map((doc, i) => <option key={i} value={doc}>{doc}</option>)}
                      </Form.Select>
                    </Form.Group>
                    <Form.Group className="mb-3">
                      <Form.Label>Appointment Date*</Form.Label>
                      <Form.Control 
                        type="date" required 
                        value={formData.date} onChange={(e) => setFormData({...formData, date: e.target.value})}
                      />
                    </Form.Group>
                    <Button type="submit" className="w-100 py-3" disabled={loading}>
                      {loading ? 'Processing...' : 'Confirm Booking'}
                    </Button>
                  </Form>
                </Col>
              </Row>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Contact;