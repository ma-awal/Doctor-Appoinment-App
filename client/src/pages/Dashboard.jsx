import { useEffect, useContext } from 'react';
import { Container, Row, Col, Card, Badge } from 'react-bootstrap';
import { AppContext } from '../context/AppContext';
import { FaCalendarCheck, FaUser, FaStethoscope, FaClock } from 'react-icons/fa';

const Dashboard = () => {
  const { appointments, fetchAppointments, loading } = useContext(AppContext);

  useEffect(() => {
    fetchAppointments();
  }, []);

  return (
    <div className="fade-in py-5 bg-light" style={{ minHeight: '100vh' }}>
      <Container>
        <div className="d-flex justify-content-between align-items-center mb-5">
          <div>
            <h2 className="fw-bold">Appointment <span className="text-primary">Dashboard</span></h2>
            <p className="text-muted">Manage and view all your medical schedules here.</p>
          </div>
          <Badge bg="primary" className="p-2 px-3 rounded-pill">Total: {appointments.length}</Badge>
        </div>

        {loading ? (
          <div className="text-center py-5"><h4>Loading appointments...</h4></div>
        ) : (
          <Row className="g-4">
            {appointments.map((item) => (
              <Col lg={4} md={6} key={item._id}>
                <Card className="custom-card border-0 p-3 h-100 position-relative">
                  <div className="d-flex align-items-center mb-3">
                    <div className="bg-primary bg-opacity-10 p-3 rounded-3 text-primary me-3">
                      <FaUser size={20} />
                    </div>
                    <div>
                      <h6 className="fw-bold mb-0">{item.fullName}</h6>
                      <small className="text-muted">{item.email}</small>
                    </div>
                  </div>

                  <hr className="text-muted opacity-25" />

                  <div className="mb-2 d-flex align-items-center">
                    <FaStethoscope className="text-primary me-2" size={14} />
                    <span className="small fw-medium">{item.doctorName}</span>
                  </div>

                  <div className="mb-3 d-flex align-items-center">
                    <FaClock className="text-primary me-2" size={14} />
                    <span className="small text-muted">
                      {new Date(item.date).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}
                    </span>
                  </div>

                  {item.message && (
                    <div className="bg-light p-2 rounded small text-muted italic mb-3">
                      "{item.message}"
                    </div>
                  )}

                  <div className="mt-auto">
                    <Badge bg="success" className="bg-opacity-10 text-success border border-success w-100 py-2">
                      Confirmed
                    </Badge>
                  </div>
                </Card>
              </Col>
            ))}
          </Row>
        )}
      </Container>
    </div>
  );
};

export default Dashboard;