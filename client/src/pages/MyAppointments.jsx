import { useEffect, useContext, useState } from "react";
import { Container, Row, Col, Badge, Button, Spinner } from "react-bootstrap";
import { AppContext } from "../context/AppContext";
import { AuthContext } from "../context/AuthContext";
import {
  FaStethoscope,
  FaCalendarAlt,
  FaEye,
  FaTimes,
  FaClipboardList,
} from "react-icons/fa";

const statusStyles = {
  Pending: { bg: "warning", label: "Pending Confirmation" },
  Confirmed: { bg: "success", label: "Confirmed" },
  Completed: { bg: "info", label: "Completed" },
  Cancelled: { bg: "danger", label: "Cancelled" },
};

const MyAppointments = () => {
  const { appointments, fetchAppointments, loading, deleteAppointment } =
    useContext(AppContext);
  const { user } = useContext(AuthContext);

  const [reportView, setReportView] = useState(null);

  useEffect(() => {
    fetchAppointments();
  }, []);

  // sort: soonest / most relevant first
  const sorted = [...appointments].sort(
    (a, b) => new Date(b.date) - new Date(a.date)
  );

  const handleCancel = (id) => {
    if (window.confirm("Cancel this appointment? This can't be undone.")) {
      deleteAppointment(id);
    }
  };

  return (
    <div className="my-appt-wrapper" style={{ minHeight: "100vh" }}>
      <Container className="py-5">
        {/* --- HEADER --- */}
        <div className="mb-5">
          <h6 className="text-primary fw-bold mb-1">
            Welcome back, {user?.name}
          </h6>
          <h2 className="fw-bold playfair display-6 mb-2">Your Appointments</h2>
          <p className="text-muted mb-0">
            Track the status of every visit you've booked with CarePulse.
          </p>
        </div>

        {/* --- LOADING --- */}
        {loading && (
          <div className="text-center py-5">
            <Spinner animation="border" variant="primary" />
            <p className="text-muted small mt-3 mb-0">
              Loading your appointments...
            </p>
          </div>
        )}

        {/* --- EMPTY STATE --- */}
        {!loading && sorted.length === 0 && (
          <div className="empty-state-card text-center py-5 px-4">
            <div className="empty-icon-circle mb-3 mx-auto">
              <FaClipboardList size={28} />
            </div>
            <h5 className="fw-bold mb-2">No appointments yet</h5>
            <p className="text-muted mb-4">
              When you book a visit with one of our doctors, it'll show up here.
            </p>
            <Button href="/" variant="primary" className="rounded-pill px-4">
              Book Your First Visit
            </Button>
          </div>
        )}

        {/* --- APPOINTMENT CARDS --- */}
        {!loading && sorted.length > 0 && (
          <Row className="g-4">
            {sorted.map((item) => {
              const s = statusStyles[item.status] || statusStyles.Pending;
              return (
                <Col key={item._id} md={6} lg={4}>
                  <div className="appt-card-premium h-100 shadow-sm">
                    <div className="d-flex justify-content-between align-items-start mb-3">
                      <div className="d-flex align-items-center text-primary fw-bold">
                        <FaStethoscope className="me-2" />
                        {item.doctorName}
                      </div>
                      <span
                        className={`status-badge-soft bg-${s.bg} bg-opacity-10 text-${s.bg}`}
                      >
                        {s.label}
                      </span>
                    </div>

                    <div className="d-flex align-items-center text-muted small mb-2">
                      <FaCalendarAlt className="me-2" />
                      {new Date(item.date).toLocaleDateString("en-GB", {
                        day: "numeric",
                        month: "long",
                        year: "numeric",
                      })}
                    </div>

                    {item.reason && (
                      <p className="text-muted small mb-3 appt-reason">
                        "{item.reason}"
                      </p>
                    )}

                    <hr className="my-3" />

                    <div className="d-flex gap-2">
                      {item.status === "Completed" ? (
                        <Button
                          variant="outline-info"
                          size="sm"
                          className="rounded-pill px-3 flex-grow-1"
                          onClick={() => setReportView(item)}
                        >
                          <FaEye className="me-1" /> View Report
                        </Button>
                      ) : (
                        <span className="text-muted small fst-italic">
                          {item.status === "Pending"
                            ? "Waiting for the clinic to confirm your slot."
                            : "Your visit is confirmed — see you then!"}
                        </span>
                      )}

                      {(item.status === "Pending" ||
                        item.status === "Confirmed") && (
                        <Button
                          variant="light"
                          size="sm"
                          className="rounded-pill px-3 text-danger ms-auto"
                          onClick={() => handleCancel(item._id)}
                        >
                          <FaTimes className="me-1" /> Cancel
                        </Button>
                      )}
                    </div>
                  </div>
                </Col>
              );
            })}
          </Row>
        )}
      </Container>

      {/* --- SIMPLE REPORT VIEW (inline, no modal dependency) --- */}
      {reportView && (
        <div className="report-overlay" onClick={() => setReportView(null)}>
          <div
            className="report-card shadow-lg"
            onClick={(e) => e.stopPropagation()}
          >
            <h5 className="fw-bold playfair mb-3">Visit Report</h5>
            <div className="mb-2">
              <small className="text-muted d-block">Doctor</small>
              <span className="fw-semibold">{reportView.doctorName}</span>
            </div>
            <div className="mb-2">
              <small className="text-muted d-block">Prescription</small>
              <span>{reportView.prescription || "Not provided"}</span>
            </div>
            <div className="mb-2">
              <small className="text-muted d-block">Test Reports</small>
              <span>{reportView.testReports || "Not provided"}</span>
            </div>
            <div className="mb-3">
              <small className="text-muted d-block">Cost</small>
              <span className="fw-bold text-success">
                ${reportView.cost || 0}
              </span>
            </div>
            <Button
              variant="primary"
              className="rounded-pill w-100"
              onClick={() => setReportView(null)}
            >
              Close
            </Button>
          </div>
        </div>
      )}

      <style>{`
        .my-appt-wrapper {
          background: #f8fafc;
        }
        .playfair {
          font-family: 'Playfair Display', Georgia, serif;
        }
        .appt-card-premium {
          background: #fff;
          border-radius: 18px;
          padding: 22px;
          border: 1px solid rgba(0,0,0,0.05);
          transition: transform 0.15s ease, box-shadow 0.15s ease;
        }
        .appt-card-premium:hover {
          transform: translateY(-3px);
          box-shadow: 0 12px 24px rgba(0,0,0,0.08) !important;
        }
        .appt-reason {
          font-style: italic;
        }
        .status-badge-soft {
          padding: 5px 14px;
          border-radius: 50px;
          font-size: 0.75rem;
          font-weight: 600;
          white-space: nowrap;
        }
        .empty-state-card {
          background: #fff;
          border-radius: 20px;
          border: 1px dashed rgba(0,0,0,0.1);
          max-width: 480px;
          margin: 0 auto;
        }
        .empty-icon-circle {
          width: 64px;
          height: 64px;
          border-radius: 50%;
          background: rgba(13,110,253,0.1);
          color: #0d6efd;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .report-overlay {
          position: fixed;
          inset: 0;
          background: rgba(15,23,42,0.55);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1050;
          padding: 16px;
        }
        .report-card {
          background: #fff;
          border-radius: 18px;
          padding: 28px;
          width: 100%;
          max-width: 380px;
        }
      `}</style>
    </div>
  );
};

export default MyAppointments;
