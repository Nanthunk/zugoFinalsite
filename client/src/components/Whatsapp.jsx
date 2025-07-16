import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import "./Whatsapp.css"; // we’ll create this next

export default function Whatsapp() {
  return (
    <a
      href="https://wa.me/919585541589"
      className="whatsapp-float"
      target="_blank"
      rel="noopener noreferrer"
    >
      <FaWhatsapp size={24} /> Chat with us
    </a>
  );
}
