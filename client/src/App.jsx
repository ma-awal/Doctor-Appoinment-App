import { Routes, Route, Navigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Dashboard from "./pages/Dashboard";
import Contact from "./pages/Contact";
import Login from "./pages/Auth/Login";
import Register from "./pages/Auth/Register";
import Navbar from "./components/Navbar";
import AdminRoute from "./components/AdminRoute";
import MyAppointments from "./pages/MyAppointments";
function App() {
  const { user } = useContext(AuthContext);

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route
          path="/login"
          element={!user ? <Login /> : <Navigate to="/dashboard" />}
        />
        <Route
          path="/register"
          element={!user ? <Register /> : <Navigate to="/dashboard" />}
        />

        <Route
          path="/dashboard"
          element={user ? <Dashboard /> : <Navigate to="/login" />}
        />
        <Route
          path="/contact"
          element={user ? <Contact /> : <Navigate to="/login" />}
        />
        <Route
          path="/dashboard"
          element={
            <AdminRoute>
              <Dashboard />
            </AdminRoute>
          }
        />
        <Route
          path="/my-appointments"
          element={user ? <MyAppointments /> : <Navigate to="/login" />}
        />
      </Routes>
      <footer className="py-4 text-center border-top bg-white">
        <p className="text-muted small">
          &copy; 2024 CarePulse Medical Group. All rights reserved.
        </p>
      </footer>
    </>
  );
}

export default App;
