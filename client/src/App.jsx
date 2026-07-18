import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Dashboard from './pages/Dashboard'

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
      <footer className="py-4 text-center border-top mt-5 bg-white">
        <p className="text-muted mb-0">&copy; 2024 CarePulse Medical Group. All rights reserved.</p>
      </footer>
    </>
  );
}

export default App;