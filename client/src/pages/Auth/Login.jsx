import { useState, useContext } from 'react';
import { Container, Card, Form, Button, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    login(email, password);
  };

  return (
    <div className="py-5 bg-light fade-in" style={{ minHeight: '90vh' }}>
      <Container>
        <Row className="justify-content-center">
          <Col md={5}>
            <Card className="border-0 shadow-lg p-4 rounded-4 mt-5">
              <Card.Body>
                <div className="text-center mb-4">
                  <h2 className="playfair fw-bold">Welcome Back</h2>
                  <p className="text-muted small">Please enter your details to login</p>
                </div>
                <Form onSubmit={handleSubmit}>
                  <Form.Group className="mb-3">
                    <Form.Label className="fw-bold small">Email Address</Form.Label>
                    <Form.Control type="email" placeholder="name@example.com" required 
                      value={email} onChange={(e) => setEmail(e.target.value)} />
                  </Form.Group>
                  <Form.Group className="mb-4">
                    <Form.Label className="fw-bold small">Password</Form.Label>
                    <Form.Control type="password" placeholder="••••••••" required 
                      value={password} onChange={(e) => setPassword(e.target.value)} />
                  </Form.Group>
                  <Button type="submit" className="w-100 btn-primary py-3 fw-bold rounded-pill shadow">
                    Login to Account
                  </Button>
                </Form>
                <div className="text-center mt-4">
                  <p className="small text-muted">Don't have an account? <Link to="/register" className="text-primary fw-bold text-decoration-none">Sign Up</Link></p>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Login;