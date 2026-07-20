import { useEffect, useContext, useState } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  Badge,
  Button,
  Table,
  Nav,
  Form,
  InputGroup,
} from "react-bootstrap";
import { AppContext } from "../context/AppContext";
import { AuthContext } from "../context/AuthContext";
import {
  FaPhone,
  FaStethoscope,
  FaCalendarAlt,
  FaCheck,
  FaTimes,
  FaTrashAlt,
  FaClipboardCheck,
  FaEye,
  FaSearch,
  FaUserInjured,
} from "react-icons/fa";
import CompleteVisitModal from "../components/CompleteVisitModal";
import "./Dashboard.css";

const Dashboard = () => {
  const {
    appointments,
    fetchAppointments,
    loading,
    updateAppointmentStatus,
    deleteAppointment,
    completeVisit,
  } = useContext(AppContext);
  const { user } = useContext(AuthContext);

  const [filter, setFilter] = useState("All Doctors");
  const [searchTerm, setSearchTerm] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [selectedAppt, setSelectedAppt] = useState(null);

  useEffect(() => {
    fetchAppointments();
  }, []);

  const doctorList = [
    "All Doctors",
    ...new Set(appointments.map((a) => a.doctorName)),
  ];

  // ফিল্টার ও সার্চ লজিক
  const filteredData = appointments.filter((a) => {
    const matchesDoctor = filter === "All Doctors" || a.doctorName === filter;
    const matchesSearch = a.fullName
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    return matchesDoctor && matchesSearch;
  });

  return (
    <div className="dashboard-wrapper" style={{ minHeight: "100vh" }}>
      <Container>
        {/* --- HEADER --- */}
        <div className="d-flex justify-content-between align-items-end mb-5">
          <div>
            <h6 className="text-primary fw-bold mb-1">
              Welcome back, {user?.name}
            </h6>
            <h2 className="fw-bold playfair display-6">
              Medical Records Dashboard
            </h2>
          </div>
          <div className="text-end d-none d-md-block">
            <span className="text-muted small">
              Today's Date:{" "}
              {new Date().toLocaleDateString("en-GB", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })}
            </span>
          </div>
        </div>

        {/* --- STATS SECTION --- */}
        <Row className="mb-5 g-4">
          {[
            {
              label: "Total Visits",
              val: appointments.length,
              color: "primary",
              icon: <FaCalendarAlt />,
            },
            {
              label: "Pending Request",
              val: appointments.filter((a) => a.status === "Pending").length,
              color: "warning",
              icon: <FaClock />,
            },
            {
              label: "Confirmed",
              val: appointments.filter((a) => a.status === "Confirmed").length,
              color: "success",
              icon: <FaCheck />,
            },
            {
              label: "Revenue/Billings",
              val: `$${appointments.reduce(
                (acc, curr) => acc + (curr.cost || 0),
                0
              )}`,
              color: "info",
              icon: <FaClipboardCheck />,
            },
          ].map((s, i) => (
            <Col key={i} md={3}>
              <div className="stat-card-premium shadow-sm d-flex align-items-center">
                <div
                  className={`bg-${s.color} bg-opacity-10 p-3 rounded-4 text-${s.color} me-3`}
                >
                  {s.icon}
                </div>
                <div>
                  <h4 className="fw-bold mb-0">{s.val}</h4>
                  <small className="text-muted fw-semibold">{s.label}</small>
                </div>
              </div>
            </Col>
          ))}
        </Row>

        {/* --- ACTIONS BAR (Filter & Search) --- */}
        <Row className="mb-4 align-items-center g-3">
          <Col lg={7}>
            <Nav
              variant="pills"
              activeKey={filter}
              onSelect={(k) => setFilter(k)}
              className="bg-white p-1 rounded-pill shadow-sm d-inline-flex border"
            >
              {doctorList.map((doc, i) => (
                <Nav.Item key={i}>
                  <Nav.Link
                    eventKey={doc}
                    className="rounded-pill px-4 small py-2"
                  >
                    {doc}
                  </Nav.Link>
                </Nav.Item>
              ))}
            </Nav>
          </Col>
          <Col lg={5}>
            <InputGroup className="shadow-sm rounded-pill overflow-hidden border">
              <InputGroup.Text className="bg-white border-0 ps-4 text-muted">
                <FaSearch />
              </InputGroup.Text>
              <Form.Control
                placeholder="Search patient by name..."
                className="border-0 py-3 search-input-premium"
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </InputGroup>
          </Col>
        </Row>

        {/* --- TABLE LIST VIEW --- */}
        <div className="table-container-premium overflow-hidden">
          <Table responsive hover className="mb-0 align-middle">
            <thead className="bg-light text-muted small text-uppercase">
              <tr>
                <th className="py-4 ps-4">Patient Profile</th>
                <th>Medical Service</th>
                <th>Schedule</th>
                <th>Billing</th>
                <th>Status</th>
                <th className="text-center pe-4">Actions</th>
              </tr>
            </thead>
            <tbody className="border-top-0">
              {loading ? (
                <tr>
                  <td colSpan="6" className="text-center py-5 text-muted">
                    Refreshing medical database...
                  </td>
                </tr>
              ) : filteredData.length > 0 ? (
                filteredData.map((item) => (
                  <tr key={item._id}>
                    <td className="ps-4 py-3">
                      <div className="d-flex align-items-center">
                        <div className="patient-avatar me-3">
                          {item.fullName.charAt(0)}
                        </div>
                        <div>
                          <div className="fw-bold text-dark mb-0">
                            {item.fullName}
                          </div>
                          <small className="text-muted">
                            {item.gender}, {item.age} Years
                          </small>
                        </div>
                      </div>
                    </td>
                    <td>
                      <div className="fw-bold small text-primary d-flex align-items-center">
                        <FaStethoscope className="me-2" /> {item.doctorName}
                      </div>
                      <div className="text-muted x-small mt-1">
                        {item.phone}
                      </div>
                    </td>
                    <td>
                      <div className="small fw-bold">
                        {new Date(item.date).toLocaleDateString("en-GB")}
                      </div>
                      <small className="text-muted">Confirmed Slot</small>
                    </td>
                    <td>
                      <div className="fw-bold text-success">
                        {item.cost ? `$${item.cost}` : "--"}
                      </div>
                    </td>
                    <td>
                      <span
                        className={`status-badge-soft bg-${
                          item.status === "Confirmed"
                            ? "success"
                            : item.status === "Completed"
                            ? "info"
                            : item.status === "Cancelled"
                            ? "danger"
                            : "warning"
                        } bg-opacity-10 text-${
                          item.status === "Confirmed"
                            ? "success"
                            : item.status === "Completed"
                            ? "info"
                            : item.status === "Cancelled"
                            ? "danger"
                            : "warning"
                        }`}
                      >
                        {item.status}
                      </span>
                    </td>
                    <td className="pe-4 text-center">
                      <div className="d-flex justify-content-center gap-2">
                        {/* Admin Logic: Status Updates */}
                        {user?.role === "admin" &&
                          item.status === "Pending" && (
                            <Button
                              variant="success"
                              className="btn-action-circle shadow-sm"
                              onClick={() =>
                                updateAppointmentStatus(item._id, "Confirmed")
                              }
                            >
                              <FaCheck />
                            </Button>
                          )}

                        {user?.role === "admin" &&
                          item.status === "Confirmed" && (
                            <Button
                              variant="primary"
                              className="rounded-pill px-3 btn-sm fw-bold"
                              onClick={() => {
                                setSelectedAppt(item);
                                setShowModal(true);
                              }}
                            >
                              Complete Visit
                            </Button>
                          )}

                        {/* View Report for both Admin and Patient */}
                        {item.status === "Completed" && (
                          <Button
                            variant="outline-info"
                            className="rounded-pill px-3 btn-sm"
                            onClick={() =>
                              alert(
                                `Medical Report for ${item.fullName}\n\nAdvice: ${item.prescription}\nCost: $${item.cost}`
                              )
                            }
                          >
                            <FaEye className="me-1" /> Record
                          </Button>
                        )}

                        <Button
                          variant="light"
                          className="btn-action-circle text-danger"
                          onClick={() => deleteAppointment(item._id)}
                        >
                          <FaTrashAlt />
                        </Button>
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="6" className="text-center py-5">
                    No patient records found.
                  </td>
                </tr>
              )}
            </tbody>
          </Table>
        </div>
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
