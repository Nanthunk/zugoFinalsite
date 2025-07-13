import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        {/* Branding */}
        <div className="footer-brand">
          <h3>Z U G O</h3>
          <p>Your growth partner in marketing & technology.</p>
        </div>

        {/* Navigation Links */}
        <div className="footer-nav">
          <h4>Navigation</h4>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/services">Services</Link>
          <Link to="/contact">Contact</Link>
        </div>

        

        {/* Contact Info */}
        <div className="footer-contact">
          <h4>Contact Us</h4>
          <p>📍 11(3), PN Road 4th Street, Kumarnagar,
            Tiruppur, Tamil Nadu, India</p>
             <a
            href="https://www.bing.com/maps?where=9%5C5+4th+street+%2C+P.+N+Road+%2C+Tiruppur+%2C+Tamilnadu+641602%2C+IN&cp=11.107962%7E77.351664&lvl=16.8"
            target="_blank" rel="noopener noreferrer">
            📍 View on Google Maps
          </a>
          <p>📞 +91 95855 41589</p>
          <a href="mailto:zugoprivatelimited@gmail.com"><p>✉️ zugoprivatelimited@gmail.com</p></a>
         
        </div>

        {/* Social Media */}
        <div className="footer-social">
          <h4>Follow Us</h4>
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
          <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
          <a href="https://www.linkedin.com/company/zugo-private-limited/" target="_blank" rel="noopener noreferrer"><FaLinkedinIn /></a>
        </div>
      </div>

      <hr className="footer-divider" />

      <div className="footer-bottom">
        &copy; 2025 Zugo Private Limited. All rights reserved. | Built with ❤️ by Zugo Team
      </div>
    </footer>
  );
};

export default Footer;
