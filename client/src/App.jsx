import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import MDProfile from "./pages/MDProfile";
import Loader from "./components/Loader";
import Marketing from "./pages/Marketing";
import Development from "./pages/Development";
import Designing from "./pages/Designing";

import "./App.css";

function AppContent() {
  const location = useLocation();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    // Simulate a short loading time on route change
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // adjust duration if you want

    return () => clearTimeout(timer);
  }, [location]);

  return (
    <>
      {loading && <Loader />}
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/md-profile" element={<MDProfile />} />
        <Route path="/marketing" element={<Marketing />} />
        <Route path="/development" element={<Development />} />
        <Route path="/designing" element={<Designing />} />
        {/* Add more routes as needed */}
        
      </Routes>
      <Footer />
    </>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
