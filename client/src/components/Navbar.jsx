import { Link, NavLink } from "react-router-dom";
import {
  Container,
  Nav,
  Navbar as BootstrapNavbar,
  Button,
} from "react-bootstrap"; // Button ইমপোর্ট করা হয়েছে
import { FaStethoscope } from "react-icons/fa";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const Navbar = () => {
  // AuthContext থেকে ডেটা নেওয়া হচ্ছে
  const { user, logout } = useContext(AuthContext);

  return (
    <BootstrapNavbar
      bg="white"
      expand="lg"
      sticky="top"
      className="shadow-sm py-3"
    >
      <Container>
        <BootstrapNavbar.Brand
          as={Link}
          to="/"
          className="fw-bold text-primary d-flex align-items-center"
        >
          <FaStethoscope className="me-2" /> CarePulse
        </BootstrapNavbar.Brand>

        <BootstrapNavbar.Toggle aria-controls="basic-navbar-nav" />

        <BootstrapNavbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto align-items-center">
            <Nav.Link as={NavLink} to="/" className="mx-2">
              Home
            </Nav.Link>
            <Nav.Link as={NavLink} to="/about" className="mx-2">
              About Us
            </Nav.Link>

            {user ? (
              <>
                <Nav.Link
                  as={NavLink}
                  to={user.role === "admin" ? "/dashboard" : "/my-appointments"}
                  className="mx-2 fw-medium"
                >
                  {user.role === "admin" ? "Dashboard" : "Appointments"}
                </Nav.Link>
                <div className="d-flex align-items-center ms-lg-3 mt-3 mt-lg-0">
                  {/* ইউজারের নাম দেখানো হচ্ছে */}
                  <span className="me-3 small text-muted d-none d-lg-inline fw-bold">
                    Hi, {user.name.split(" ")[0]}
                  </span>
                  <Button
                    variant="outline-danger"
                    size="sm"
                    className="rounded-pill px-3"
                    onClick={logout}
                  >
                    Logout
                  </Button>
                </div>
              </>
            ) : (
              <>
                <Nav.Link as={NavLink} to="/login" className="mx-2">
                  Login
                </Nav.Link>
                <Nav.Link
                  as={NavLink}
                  to="/register"
                  className="btn btn-primary text-white ms-lg-3 px-4 rounded-pill shadow-sm"
                >
                  Sign Up
                </Nav.Link>
              </>
            )}
          </Nav>
        </BootstrapNavbar.Collapse>
      </Container>
    </BootstrapNavbar>
  );
};

export default Navbar;
