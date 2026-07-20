import { useEffect, useContext, useState } from 'react';
import { Container, Row, Col, Card, Badge, Button, Table, Nav } from 'react-bootstrap';
import { AppContext } from '../context/AppContext';
import { 
  FaPhone, FaStethoscope, FaClock, FaCheck, 
  FaTimes, FaTrashAlt, FaClipboardCheck, FaEye 
} from 'react-icons/fa';
 
import CompleteVisitModal from '../components/CompleteVisitModal';

const Dashboard = () => {
  const { 
    appointments, fetchAppointments, loading, 
    updateAppointmentStatus, deleteAppointment, completeVisit 
  } = useContext(AppContext);

  const [filter, setFilter] = useState("All Doctors");
  
 
  const [showModal, setShowModal] = useState(false);
  const [selectedAppt, setSelectedAppt] = useState(null);

  useEffect(() => {
    fetchAppointments();
  }, []);

  const doctorList = ["All Doctors", ...new Set(appointments.map(a => a.doctorName))];
  const filteredAppointments = filter === "All Doctors" 
    ? appointments 
    : appointments.filter(a => a.doctorName === filter);

 
  const handleOpenModal = (appt) => {
    setSelectedAppt(appt);
    setShowModal(true);
  };

 
  const getStatusStyle = (status) => {
    if (status === 'Confirmed') return 'success';
    if (status === 'Cancelled') return 'danger';
    if (status === 'Completed') return 'info';
    return 'warning';
  };

  return (
    <div className="fade-in py-5 bg-light" style={{ minHeight: '100vh' }}>
      <Container>
     
        <Row className="mb-4 g-3 text-center">
            <Col md={3}><Card className="border-0 shadow-sm p-3 rounded-4"><h3>{appointments.length}</h3><small className="text-muted fw-bold">Total Appointments</small></Card></Col>
            <Col md={3}><Card className="border-0 shadow-sm p-3 rounded-4 text-warning"><h3>{appointments.filter(a=>a.status==='Pending').length}</h3><small className="fw-bold">Pending</small></Card></Col>
            <Col md={3}><Card className="border-0 shadow-sm p-3 rounded-4 text-success"><h3>{appointments.filter(a=>a.status==='Confirmed').length}</h3><small className="fw-bold">Confirmed</small></Card></Col>
            <Col md={3}><Card className="border-0 shadow-sm p-3 rounded-4 text-info"><h3>{appointments.filter(a=>a.status==='Completed').length}</h3><small className="fw-bold">Completed</small></Card></Col>
        </Row>

        
        <div className="bg-white p-2 rounded-pill shadow-sm mb-4 d-flex justify-content-center overflow-auto">
          <Nav variant="pills" activeKey={filter} onSelect={(k) => setFilter(k)}>
            {doctorList.map((doc, i) => (
              <Nav.Item key={i}><Nav.Link eventKey={doc} className="rounded-pill px-4 small">{doc}</Nav.Link></Nav.Item>
            ))}
          </Nav>
        </div>

 
        <Card className="border-0 shadow-sm rounded-4 overflow-hidden">
          <Card.Body className="p-0">
            <Table responsive hover className="mb-0 align-middle">
              <thead className="bg-primary text-white">
                <tr>
                  <th className="py-3 ps-4">Patient Details</th>
                  <th>Contact</th>
                  <th>Medical Service</th>
                  <th>Appointment Date</th>
                  <th>Current Status</th>
                  <th className="text-center pe-4">Management</th>
                </tr>
              </thead>
              <tbody>
                {loading ? (
                   <tr><td colSpan="6" className="text-center py-5">Syncing with database...</td></tr>
                ) : filteredAppointments.length > 0 ? filteredAppointments.map((item) => (
                  <tr key={item._id} className="border-bottom">
                    <td className="ps-4 py-3">
                      <div className="fw-bold text-dark">{item.fullName}</div>
                      <div className="small text-muted">{item.gender}, {item.age} Years</div>
                    </td>
                    <td>
                      <div className="small fw-medium"><FaPhone className="me-1 text-primary"/> {item.phone}</div>
                      <div className="small text-muted">{item.email}</div>
                    </td>
                    <td>
                      <div className="small fw-bold text-primary"><FaStethoscope className="me-1"/> {item.doctorName}</div>
                      {item.reason && <div className="small text-muted text-truncate" style={{maxWidth: '150px'}} title={item.reason}>{item.reason}</div>}
                    </td>
                    <td>
                      <div className="small fw-medium"><FaClock className="me-1 text-primary"/> {new Date(item.date).toLocaleDateString('en-GB')}</div>
                    </td>
                    <td>
                      <Badge bg={getStatusStyle(item.status)} className="rounded-pill px-3 py-2">
                        {item.status}
                      </Badge>
                    </td>
                    <td className="pe-4 text-center">
                      <div className="d-flex justify-content-center gap-2">
                    
                        {item.status === 'Pending' && (
                          <>
                            <Button variant="success" size="sm" className="rounded-pill px-3" onClick={() => updateAppointmentStatus(item._id, 'Confirmed')}><FaCheck className="me-1"/> Confirm</Button>
                            <Button variant="outline-danger" size="sm" className="rounded-circle" onClick={() => updateAppointmentStatus(item._id, 'Cancelled')}><FaTimes/></Button>
                          </>
                        )}

                  
                        {item.status === 'Confirmed' && (
                          <Button 
                            variant="primary" size="sm" className="rounded-pill px-3 fw-bold shadow-sm"
                            onClick={() => handleOpenModal(item)}  
                          >
                            <FaClipboardCheck className="me-1"/> Complete Visit
                          </Button>
                        )}

                 
                        {item.status === 'Completed' && (
                          <Button 
                            variant="outline-info" size="sm" className="rounded-pill px-3"
                            onClick={() => alert(`MEDICAL RECORD:\n\nPrescription: ${item.prescription}\n\nLab Reports: ${item.testReports || 'No digital reports attached'}`)}
                          >
                            <FaEye className="me-1"/> View Rx
                          </Button>
                        )}

                
                        <Button variant="light" size="sm" className="rounded-circle text-danger" onClick={() => deleteAppointment(item._id)}><FaTrashAlt/></Button>
                      </div>
                    </td>
                  </tr>
                )) : (
                  <tr><td colSpan="6" className="text-center py-5 text-muted">No appointments found.</td></tr>
                )}
              </tbody>
            </Table>
          </Card.Body>
        </Card>
      </Container>

 
      <CompleteVisitModal 
        show={showModal} 
        onHide={() => setShowModal(false)} 
        appointment={selectedAppt}
        onSubmit={completeVisit}
      />
    </div>
  );
};

export default Dashboard;