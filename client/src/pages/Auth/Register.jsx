// import { useState, useContext } from 'react';
// import { Container, Card, Form, Button, Row, Col } from 'react-bootstrap';
// import { Link } from 'react-router-dom';
// import { AuthContext } from '../../context/AuthContext';

// const Register = () => {
//   const [formData, setFormData] = useState({ name: '', email: '', password: '', role: 'patient' });
//   const { register } = useContext(AuthContext);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     register(formData);
//   };

//   return (
//     <div className="py-5 bg-light fade-in" style={{ minHeight: '90vh' }}>
//       <Container>
//         <Row className="justify-content-center">
//           <Col md={6} lg={5}>
//             <Card className="border-0 shadow-lg p-4 rounded-4 mt-4">
//               <Card.Body>
//                 <div className="text-center mb-4">
//                   <h2 className="playfair fw-bold">Create Account</h2>
//                   <p className="text-muted small">Join CarePulse to manage your health</p>
//                 </div>
//                 <Form onSubmit={handleSubmit}>
//                   <Form.Group className="mb-3">
//                     <Form.Label className="fw-bold small">Full Name</Form.Label>
//                     <Form.Control type="text" placeholder="John Doe" required 
//                       value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} />
//                   </Form.Group>

//                   <Form.Group className="mb-3">
//                     <Form.Label className="fw-bold small">Email Address</Form.Label>
//                     <Form.Control type="email" placeholder="name@example.com" required 
//                       value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} />
//                   </Form.Group>

//                   <Form.Group className="mb-3">
//                     <Form.Label className="fw-bold small">Account Type</Form.Label>
//                     <Form.Select value={formData.role} onChange={(e) => setFormData({...formData, role: e.target.value})}>
//                       <option value="patient">Patient (Booking appointments)</option>
//                       <option value="admin">Admin / Doctor (Managing data)</option>
//                     </Form.Select>
//                   </Form.Group>

//                   <Form.Group className="mb-4">
//                     <Form.Label className="fw-bold small">Password</Form.Label>
//                     <Form.Control type="password" placeholder="••••••••" required 
//                       value={formData.password} onChange={(e) => setFormData({...formData, password: e.target.value})} />
//                   </Form.Group>

//                   <Button type="submit" className="w-100 btn-primary py-3 fw-bold rounded-pill shadow">
//                     Create My Account
//                   </Button>
//                 </Form>
//                 <div className="text-center mt-4">
//                   <p className="small text-muted">Already have an account? <Link to="/login" className="text-primary fw-bold text-decoration-none">Login</Link></p>
//                 </div>
//               </Card.Body>
//             </Card>
//           </Col>
//         </Row>
//       </Container>
//     </div>
//   );
// };

// export default Register;


import { useState, useContext } from 'react';
import { Container, Card, Form, Button, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';

const Register = () => {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', password: '' });
  const { register } = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    register(formData);
  };

  return (
    <div className="py-5 bg-light fade-in" style={{ minHeight: '90vh' }}>
      <Container>
        <Row className="justify-content-center">
          <Col md={6} lg={5}>
            <Card className="border-0 shadow-lg p-4 rounded-4 mt-4">
              <Card.Body>
                <div className="text-center mb-4">
                  <h2 className="playfair fw-bold">Create Account</h2>
                  <p className="text-muted small">Join CarePulse to manage your health</p>
                </div>
                <Form onSubmit={handleSubmit}>
                  <Form.Group className="mb-3">
                    <Form.Label className="fw-bold small">Full Name</Form.Label>
                    <Form.Control type="text" placeholder="John Doe" required 
                      value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} />
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label className="fw-bold small">Email Address</Form.Label>
                    <Form.Control type="email" placeholder="name@example.com" required 
                      value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} />
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label className="fw-bold small">Phone Number</Form.Label>
                    <Form.Control type="tel" placeholder="01XXXXXXXXX" required 
                      value={formData.phone} onChange={(e) => setFormData({...formData, phone: e.target.value})} />
                  </Form.Group>

                  <Form.Group className="mb-4">
                    <Form.Label className="fw-bold small">Password</Form.Label>
                    <Form.Control type="password" placeholder="••••••••" required 
                      value={formData.password} onChange={(e) => setFormData({...formData, password: e.target.value})} />
                  </Form.Group>

                  <Button type="submit" className="w-100 btn-primary py-3 fw-bold rounded-pill shadow">
                    Create My Account
                  </Button>
                </Form>
                <div className="text-center mt-4">
                  <p className="small text-muted">Already have an account? <Link to="/login" className="text-primary fw-bold text-decoration-none">Login</Link></p>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Register;