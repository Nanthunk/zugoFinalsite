import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaUserTie, FaBuilding, FaCogs, FaBars, FaTimes } from "react-icons/fa";
import "./Navbar.css";
import logo from "../assets/logo.png";


export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="nav-container container" >

        {/* Logo */}
<div style={{marginLeft: 
  "10px"
}}>
        <Link to="/" className="nav-logo">
 <img src={logo} alt="Zugo Logo" className="logo-img" style={{ padding: 0}} />

  <div className="logo-text" style={{marginLeft: "-15px" }}>
    <div className="company-name"> Z U G O  Private Limited</div>
    <div className="company-location">Tiruppur</div>
  </div>
</Link>
</div>



        {/* Desktop nav */}
        <nav className={`nav-links ${menuOpen ? "open" : ""}`}>
          <ul>
            <li>
              <Link to="/about">
                <FaBuilding className="nav-icon" /> About Us
              </Link>
            </li>
            <li>
              <Link to="/md-profile">
                <FaUserTie className="nav-icon" /> Managing Director
              </Link>
            </li>
            <li>
              <Link to="/services">
                <FaCogs className="nav-icon" /> Services
              </Link>
            </li>
            
             
            <li className="contact-item">
              <Link to="/contact" className="btn-contact">Contact Us</Link>
            </li>
          </ul>
        </nav>

        {/* Hamburger */}
        <button
          className="hamburger"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>
    </header>
  );
}
