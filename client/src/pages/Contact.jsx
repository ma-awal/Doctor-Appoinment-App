import { useState, useContext } from "react";
import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";
import { AppContext } from "../context/AppContext";
import { AuthContext } from "../context/AuthContext";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaUserMd,
} from "react-icons/fa";
import toast from "react-hot-toast"; // toast ইমপোর্ট নিশ্চিত করুন

const Contact = () => {
  const { bookAppointment, loading } = useContext(AppContext);
  const { user } = useContext(AuthContext);

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    age: "",
    gender: "",
    doctorName: "",
    date: "",
    reason: "",
  });

  const doctors = [
    "Dr. Sarah Johnson (Cardiology)",
    "Dr. Michael Chen (Neurology)",
    "Dr. Emily Blunt (Pediatrics)",
    "Dr. James Wilson (General Medicine)",
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();

    // ১. চেক করুন ইউজার লগইন আছে কিনা
    if (!user) {
      toast.error("Please login first to book an appointment!");
      return;
    }

    // ২. ডাটাবেস এর জন্য ডেটা প্রিপেয়ার করা (Age কে অবশ্যই নাম্বার হতে হবে)
    const finalAppointmentData = {
      ...formData,
      age: Number(formData.age), // এটি নিশ্চিত করুন
      patientId: user.id || user._id, // id এবং _id দুইটাই চেক করা হচ্ছে
    };

    // ৩. ব্রাউজার কনসোলে চেক করার জন্য (F12 চেপে Console এ এটি দেখুন)
    console.log("Submitting this data:", finalAppointmentData);

    const success = await bookAppointment(finalAppointmentData);

    if (success) {
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        age: "",
        gender: "",
        doctorName: "",
        date: "",
        reason: "",
      });
    }
  };

  return (
    <div className="fade-in py-5 bg-light">
      <Container>
        <Row className="justify-content-center">
          <Col lg={11}>
            <Card className="custom-card p-0 overflow-hidden border-0 shadow-lg">
              <Row className="g-0">
                <Col
                  md={4}
                  className="bg-primary text-white p-5 d-flex flex-column justify-content-center"
                >
                  <div className="mb-5">
                    <FaUserMd size={50} className="mb-4" />
                    <h2 className="fw-bold playfair">Book Your Visit</h2>
                    <p className="opacity-75">
                      Join {user?.name || "us"} for a better health experience.
                    </p>
                  </div>
                  <div className="d-flex align-items-center mb-4">
                    <FaPhoneAlt className="me-3" />
                    <span>+880 1234 567 890</span>
                  </div>
                  <div className="d-flex align-items-center mb-4">
                    <FaEnvelope className="me-3" />
                    <span>support@carepulse.com</span>
                  </div>
                  <div className="d-flex align-items-center">
                    <FaMapMarkerAlt className="me-3" />
                    <span>Dhaka, Bangladesh</span>
                  </div>
                </Col>

                <Col md={8} className="p-5 bg-white">
                  <h3 className="fw-bold mb-4 playfair">Patient Information</h3>
                  <Form onSubmit={handleSubmit}>
                    <Row>
                      <Col md={12} className="mb-3">
                        <Form.Label className="fw-semibold">
                          Full Name*
                        </Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Full Name"
                          required
                          value={formData.fullName}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              fullName: e.target.value,
                            })
                          }
                        />
                      </Col>
                      <Col md={6} className="mb-3">
                        <Form.Label className="fw-semibold">Email*</Form.Label>
                        <Form.Control
                          type="email"
                          placeholder="Email"
                          required
                          value={formData.email}
                          onChange={(e) =>
                            setFormData({ ...formData, email: e.target.value })
                          }
                        />
                      </Col>
                      <Col md={6} className="mb-3">
                        <Form.Label className="fw-semibold">Phone*</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Phone"
                          required
                          value={formData.phone}
                          onChange={(e) =>
                            setFormData({ ...formData, phone: e.target.value })
                          }
                        />
                      </Col>
                      <Col md={6} className="mb-3">
                        <Form.Label className="fw-semibold">Age*</Form.Label>
                        <Form.Control
                          type="number"
                          placeholder="Age"
                          required
                          value={formData.age}
                          onChange={(e) =>
                            setFormData({ ...formData, age: e.target.value })
                          }
                        />
                      </Col>
                      <Col md={6} className="mb-3">
                        <Form.Label className="fw-semibold">Gender*</Form.Label>
                        <Form.Select
                          required
                          value={formData.gender}
                          onChange={(e) =>
                            setFormData({ ...formData, gender: e.target.value })
                          }
                        >
                          <option value="">Select</option>
                          <option value="Male">Male</option>
                          <option value="Female">Female</option>
                        </Form.Select>
                      </Col>
                      <Col md={6} className="mb-3">
                        <Form.Label className="fw-semibold">
                          Specialist*
                        </Form.Label>
                        <Form.Select
                          required
                          value={formData.doctorName}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              doctorName: e.target.value,
                            })
                          }
                        >
                          <option value="">Choose...</option>
                          {doctors.map((doc, i) => (
                            <option key={i} value={doc}>
                              {doc}
                            </option>
                          ))}
                        </Form.Select>
                      </Col>
                      <Col md={6} className="mb-3">
                        <Form.Label className="fw-semibold">Date*</Form.Label>
                        <Form.Control
                          type="date"
                          required
                          value={formData.date}
                          onChange={(e) =>
                            setFormData({ ...formData, date: e.target.value })
                          }
                        />
                      </Col>
                      <Col md={12} className="mb-4">
                        <Form.Label className="fw-semibold">
                          Symptoms
                        </Form.Label>
                        <Form.Control
                          as="textarea"
                          rows={2}
                          value={formData.reason}
                          onChange={(e) =>
                            setFormData({ ...formData, reason: e.target.value })
                          }
                        />
                      </Col>
                    </Row>
                    <Button
                      type="submit"
                      className="btn-primary w-100 py-3 shadow-lg fw-bold"
                      disabled={loading}
                    >
                      {loading ? "Processing..." : "Confirm Appointment"}
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
