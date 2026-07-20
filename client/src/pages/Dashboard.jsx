import { useEffect, useContext, useState } from 'react';
import { Container, Row, Col, Card, Badge, Button, Nav } from 'react-bootstrap';
import { AppContext } from '../context/AppContext';
import { FaUser, FaPhone, FaStethoscope, FaClock, FaCheck, FaTimes, FaTrashAlt, FaVenusMars, FaUserAlt } from 'react-icons/fa';

const Dashboard = () => {
  const { appointments, fetchAppointments, loading, updateAppointmentStatus, deleteAppointment } = useContext(AppContext);
  const [filter, setFilter] = useState("All Doctors");

  useEffect(() => {
    fetchAppointments();
  }, []);

  // ডাক্তারদের ইউনিক লিস্ট তৈরি করা ফিল্টার করার জন্য
  const doctorList = ["All Doctors", ...new Set(appointments.map(a => a.doctorName))];

  // ফিল্টার অনুযায়ী ডেটা আলাদা করা
  const filteredAppointments = filter === "All Doctors" 
    ? appointments 
    : appointments.filter(a => a.doctorName === filter);

  // স্ট্যাটাস অনুযায়ী কালার নির্ধারণ
  const getStatusColor = (status) => {
    if (status === 'Confirmed') return 'success';
    if (status === 'Cancelled') return 'danger';
    return 'warning';
  };

  return (
    <div className="fade-in py-5 bg-light" style={{ minHeight: '100vh' }}>
      <Container>
        {/* --- STATS SECTION --- */}
        <Row className="mb-5 g-4 text-center">
          <Col md={3}>
            <Card className="border-0 shadow-sm p-3 rounded-4">
              <h3 className="fw-bold text-primary mb-0">{appointments.length}</h3>
              <small className="text-muted fw-bold">Total Bookings</small>
            </Card>
          </Col>
          <Col md={3}>
            <Card className="border-0 shadow-sm p-3 rounded-4">
              <h3 className="fw-bold text-warning mb-0">{appointments.filter(a => a.status === 'Pending').length}</h3>
              <small className="text-muted fw-bold">Pending</small>
            </Card>
          </Col>
          <Col md={3}>
            <Card className="border-0 shadow-sm p-3 rounded-4">
              <h3 className="fw-bold text-success mb-0">{appointments.filter(a => a.status === 'Confirmed').length}</h3>
              <small className="text-muted fw-bold">Confirmed</small>
            </Card>
          </Col>
          <Col md={3}>
            <Card className="border-0 shadow-sm p-3 rounded-4 text-danger">
              <h3 className="fw-bold mb-0">{appointments.filter(a => a.status === 'Cancelled').length}</h3>
              <small className="text-muted fw-bold">Cancelled</small>
            </Card>
          </Col>
        </Row>

        {/* --- FILTER TABS --- */}
        <div className="bg-white p-2 rounded-pill shadow-sm mb-5 overflow-auto d-flex justify-content-center">
          <Nav variant="pills" activeKey={filter} onSelect={(k) => setFilter(k)}>
            {doctorList.map((doc, i) => (
              <Nav.Item key={i}>
                <Nav.Link eventKey={doc} className="rounded-pill px-4">{doc}</Nav.Link>
              </Nav.Item>
            ))}
          </Nav>
        </div>

        {loading ? (
          <div className="text-center py-5"><h4>Syncing data...</h4></div>
        ) : (
          <Row className="g-4">
            {filteredAppointments.length > 0 ? filteredAppointments.map((item) => (
              <Col lg={4} md={6} key={item._id}>
                <Card className="custom-card border-0 p-4 h-100 position-relative shadow-sm">
                  {/* Header: Patient Profile */}
                  <div className="d-flex align-items-center mb-4">
                    <div className="bg-primary bg-opacity-10 p-3 rounded-circle text-primary me-3">
                      <FaUserAlt size={22} />
                    </div>
                    <div>
                      <h5 className="fw-bold mb-0">{item.fullName}</h5>
                      <div className="d-flex align-items-center text-muted small">
                         <FaVenusMars className="me-1" /> {item.gender}, {item.age} Years
                      </div>
                    </div>
                    <Badge bg={getStatusColor(item.status)} className="ms-auto rounded-pill px-3 py-2">
                      {item.status}
                    </Badge>
                  </div>

                  <hr className="opacity-25" />

                  {/* Body: Details */}
                  <div className="space-y-3 mb-4">
                    <div className="d-flex align-items-center mb-2">
                      <FaPhone className="text-primary me-3" size={14} />
                      <span className="small fw-medium">{item.phone}</span>
                    </div>
                    <div className="d-flex align-items-center mb-2">
                      <FaStethoscope className="text-primary me-3" size={14} />
                      <span className="small fw-bold">{item.doctorName}</span>
                    </div>
                    <div className="d-flex align-items-center">
                      <FaClock className="text-primary me-3" size={14} />
                      <span className="small text-muted">
                        {new Date(item.date).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}
                      </span>
                    </div>
                  </div>

                  {item.reason && (
                    <div className="bg-light p-3 rounded-3 small text-muted mb-4">
                      <strong>Reason:</strong> {item.reason}
                    </div>
                  )}

                  {/* Actions: Business Controls */}
                  <div className="mt-auto d-flex gap-2">
                    {item.status === 'Pending' && (
                      <>
                        <Button 
                          variant="success" className="w-100 btn-sm rounded-3 d-flex align-items-center justify-content-center"
                          onClick={() => updateAppointmentStatus(item._id, 'Confirmed')}
                        >
                          <FaCheck className="me-2" /> Confirm
                        </Button>
                        <Button 
                          variant="outline-danger" className="w-100 btn-sm rounded-3 d-flex align-items-center justify-content-center"
                          onClick={() => updateAppointmentStatus(item._id, 'Cancelled')}
                        >
                          <FaTimes className="me-2" /> Cancel
                        </Button>
                      </>
                    )}
                    <Button 
                      variant="light" className="text-danger btn-sm rounded-3 px-3"
                      onClick={() => deleteAppointment(item._id)}
                    >
                      <FaTrashAlt />
                    </Button>
                  </div>
                </Card>
              </Col>
            )) : (
              <div className="text-center py-5 w-100 text-muted"><h5>No appointments found for this doctor.</h5></div>
            )}
          </Row>
        )}
      </Container>
    </div>
  );
};

export default Dashboard;