import { useState, useContext } from 'react';
import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap';
import { AppContext } from '../context/AppContext';
import { AuthContext } from '../context/AuthContext'; // ১. AuthContext ইমপোর্ট করা হয়েছে
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaUserMd } from 'react-icons/fa';

const Contact = () => {
  const { bookAppointment, loading } = useContext(AppContext);
  const { user } = useContext(AuthContext); // ২. ইউজার ডেটা নেওয়া হয়েছে

  const [formData, setFormData] = useState({
    fullName: '', 
    email: '', 
    phone: '', 
    age: '', 
    gender: '', 
    doctorName: '', 
    date: '', 
    reason: ''
  });

  const doctors = [
    "Dr. Sarah Johnson (Cardiology)", 
    "Dr. Michael Chen (Neurology)", 
    "Dr. Emily Blunt (Pediatrics)", 
    "Dr. James Wilson (General Medicine)"
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!formData.fullName || !formData.phone || !formData.age || !formData.gender || !formData.doctorName || !formData.date) {
      alert("Please fill in all mandatory fields marked with *");
      return;
    }

    // ৩. ইউজারের আইডি সহ ডেটা প্রিপেয়ার করা
    const finalAppointmentData = {
      ...formData,
      patientId: user?.id // ব্যাকএন্ডে এটি দিয়েই আমরা পেশেন্ট ট্র্যাক করব
    };
    
    const success = await bookAppointment(finalAppointmentData);
    if (success) {
      setFormData({ fullName: '', email: '', phone: '', age: '', gender: '', doctorName: '', date: '', reason: '' });
    }
  };

  return (
    <div className="fade-in py-5 bg-light">
      <Container>
        <Row className="justify-content-center">
          <Col lg={11}>
            <Card className="custom-card p-0 overflow-hidden border-0 shadow-lg">
              <Row className="g-0">
                {/* Left Side: Contact Info */}
                <Col md={4} className="bg-primary text-white p-5 d-flex flex-column justify-content-center">
                  <div className="mb-5">
                    <FaUserMd size={50} className="mb-4" />
                    <h2 className="fw-bold playfair">Book Your Visit</h2>
                    <p className="opacity-75">Fill out the form and our team will contact you for confirmation.</p>
                  </div>
                  
                  <div className="d-flex align-items-center mb-4">
                    <div className="bg-white bg-opacity-25 p-3 rounded-circle me-3">
                      <FaPhoneAlt />
                    </div>
                    <span>+880 1234 567 890</span>
                  </div>
                  <div className="d-flex align-items-center mb-4">
                    <div className="bg-white bg-opacity-25 p-3 rounded-circle me-3">
                      <FaEnvelope />
                    </div>
                    <span>support@carepulse.com</span>
                  </div>
                  <div className="d-flex align-items-center">
                    <div className="bg-white bg-opacity-25 p-3 rounded-circle me-3">
                      <FaMapMarkerAlt />
                    </div>
                    <span>Dhanmondi, Dhaka, Bangladesh</span>
                  </div>
                </Col>

                {/* Right Side: Form */}
                <Col md={8} className="p-5 bg-white">
                  <h3 className="fw-bold mb-4 playfair">Patient Information</h3>
                  <Form onSubmit={handleSubmit}>
                    <Row>
                      {/* Full Name */}
                      <Col md={12} className="mb-3">
                        <Form.Label className="fw-semibold">Full Name*</Form.Label>
                        <Form.Control 
                          type="text" placeholder="Enter patient's full name" required 
                          value={formData.fullName} onChange={(e) => setFormData({...formData, fullName: e.target.value})}
                        />
                      </Col>

                      {/* Email & Phone */}
                      <Col md={6} className="mb-3">
                        <Form.Label className="fw-semibold">Email Address*</Form.Label>
                        <Form.Control 
                          type="email" placeholder="name@example.com" required 
                          value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})}
                        />
                      </Col>
                      <Col md={6} className="mb-3">
                        <Form.Label className="fw-semibold">Phone Number*</Form.Label>
                        <Form.Control 
                          type="text" placeholder="+880 1XXX XXX XXX" required 
                          value={formData.phone} onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        />
                      </Col>

                      {/* Age & Gender */}
                      <Col md={6} className="mb-3">
                        <Form.Label className="fw-semibold">Patient Age*</Form.Label>
                        <Form.Control 
                          type="number" placeholder="Enter age" required 
                          value={formData.age} onChange={(e) => setFormData({...formData, age: e.target.value})}
                        />
                      </Col>
                      <Col md={6} className="mb-3">
                        <Form.Label className="fw-semibold">Gender*</Form.Label>
                        <Form.Select required value={formData.gender} onChange={(e) => setFormData({...formData, gender: e.target.value})}>
                          <option value="">Select Gender</option>
                          <option value="Male">Male</option>
                          <option value="Female">Female</option>
                          <option value="Other">Other</option>
                        </Form.Select>
                      </Col>

                      {/* Doctor & Date */}
                      <Col md={6} className="mb-3">
                        <Form.Label className="fw-semibold">Select Specialist*</Form.Label>
                        <Form.Select required value={formData.doctorName} onChange={(e) => setFormData({...formData, doctorName: e.target.value})}>
                          <option value="">Choose a doctor...</option>
                          {doctors.map((doc, i) => <option key={i} value={doc}>{doc}</option>)}
                        </Form.Select>
                      </Col>
                      <Col md={6} className="mb-3">
                        <Form.Label className="fw-semibold">Appointment Date*</Form.Label>
                        <Form.Control 
                          type="date" required 
                          value={formData.date} onChange={(e) => setFormData({...formData, date: e.target.value})}
                        />
                      </Col>

                      {/* Reason for Visit */}
                      <Col md={12} className="mb-4">
                        <Form.Label className="fw-semibold">Reason for Visit (Optional)</Form.Label>
                        <Form.Control 
                          as="textarea" rows={3} placeholder="Briefly describe your symptoms" 
                          value={formData.reason} onChange={(e) => setFormData({...formData, reason: e.target.value})}
                        />
                      </Col>
                    </Row>

                    <Button type="submit" className="btn-primary w-100 py-3 shadow-lg fw-bold" disabled={loading}>
                      {loading ? 'Processing Booking...' : 'Confirm Appointment'}
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