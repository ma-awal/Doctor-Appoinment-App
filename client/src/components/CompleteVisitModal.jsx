import { Modal, Button, Form } from 'react-bootstrap';
import { useState, useEffect } from 'react';

const CompleteVisitModal = ({ show, onHide, onSubmit, appointment }) => {
  const [prescription, setPrescription] = useState("");
  const [testReports, setTestReports] = useState("");

  // মোডাল ওপেন হলে ফিল্ডগুলো রিসেট করা
  useEffect(() => {
    if (show) {
      setPrescription("");
      setTestReports("");
    }
  }, [show]);

  const handleConfirm = () => {
    if (!prescription) {
      alert("Please enter prescription/advice for the patient.");
      return;
    }
    onSubmit(appointment._id, { prescription, testReports });
    onHide();
  };

  return (
    <Modal show={show} onHide={onHide} centered backdrop="static">
      <Modal.Header closeButton className="border-0 pb-0">
        <Modal.Title className="fw-bold playfair">Complete Medical Visit</Modal.Title>
      </Modal.Header>
      <Modal.Body className="py-4">
        <div className="mb-4 bg-light p-3 rounded-3">
          <small className="text-muted d-block">Patient Name:</small>
          <span className="fw-bold">{appointment?.fullName}</span>
        </div>
        
        <Form>
          <Form.Group className="mb-3">
            <Form.Label className="fw-bold small">Prescription / Medical Advice (Rx)*</Form.Label>
            <Form.Control 
              as="textarea" rows={4} 
              placeholder="Ex: Take Paracetamol 500mg twice daily for 3 days after meal."
              value={prescription}
              onChange={(e) => setPrescription(e.target.value)}
              required
            />
          </Form.Group>
          
          <Form.Group className="mb-0">
            <Form.Label className="fw-bold small">Test Reports / External Link (Optional)</Form.Label>
            <Form.Control 
              type="text" 
              placeholder="Paste Google Drive or Pinterest link for reports"
              value={testReports}
              onChange={(e) => setTestReports(e.target.value)}
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer className="border-0 pt-0">
        <Button variant="light" onClick={onHide} className="rounded-pill px-4">Discard</Button>
        <Button variant="primary" onClick={handleConfirm} className="rounded-pill px-4 shadow-sm">
          Save & Complete
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default CompleteVisitModal;