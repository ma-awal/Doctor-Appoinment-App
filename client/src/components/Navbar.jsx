import { Link, NavLink } from 'react-router-dom';
import { Container, Nav, Navbar as BootstrapNavbar } from 'react-bootstrap';
import { FaStethoscope } from 'react-icons/fa';

const Navbar = () => {
  return (
    <BootstrapNavbar bg="white" expand="lg" sticky="top" className="shadow-sm py-3">
      <Container>
        <BootstrapNavbar.Brand as={Link} to="/" className="fw-bold text-primary d-flex align-items-center">
          <FaStethoscope className="me-2" /> CarePulse
        </BootstrapNavbar.Brand>
        <BootstrapNavbar.Toggle aria-controls="basic-navbar-nav" />
        <BootstrapNavbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto fw-medium">
            <Nav.Link as={NavLink} to="/" className="mx-2">Home</Nav.Link>
            <Nav.Link as={NavLink} to="/about" className="mx-2">About Us</Nav.Link>
            <Nav.Link as={NavLink} to="/dashboard" className="mx-2">Appointments</Nav.Link>
            <Nav.Link as={NavLink} to="/contact" className="btn btn-primary text-white ms-lg-3 px-4">Book Now</Nav.Link>
          </Nav>
        </BootstrapNavbar.Collapse>
      </Container>
    </BootstrapNavbar>
  );
};

export default Navbar;