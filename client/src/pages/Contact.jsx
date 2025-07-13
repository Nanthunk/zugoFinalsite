import React, { useState } from "react";
import "./Contact.css";
import { FaWhatsapp, FaCheckCircle, FaTimesCircle } from "react-icons/fa";
import { ToastContainer, toast, Slide } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    mobile: "",
  });

  const [showModal, setShowModal] = useState(false);
  const [tempEmail, setTempEmail] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowModal(true);
  };

  const sendMail = async () => {
    if (!tempEmail) {
      toast.error(<span><FaTimesCircle /> Please enter your email.</span>);
      return;
    }
    try {
      const response = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, email: tempEmail }),
      });
      const data = await response.json();
      if (data.success) {
        toast.success(<span><FaCheckCircle /> Message sent successfully!</span>);
        setFormData({ name: "", email: "", subject: "", message: "", mobile: "" });
        triggerConfetti(); // fancy effect
      } else {
        toast.error(<span><FaTimesCircle /> Something went wrong. Please try again.</span>);
      }
    } catch (error) {
      console.error("Error:", error);
      toast.error(<span><FaTimesCircle /> Could not send message. Please try again later.</span>);
    }
    setShowModal(false);
    setTempEmail("");
  };

  const triggerConfetti = () => {
    const duration = 1000;
    const animationEnd = Date.now() + duration;
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 1000 };

    const interval = setInterval(() => {
      const timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) clearInterval(interval);

      const particleCount = 50 * (timeLeft / duration);
      import('canvas-confetti').then(confetti => {
        confetti.default({
          ...defaults,
          particleCount,
          origin: { x: Math.random(), y: Math.random() - 0.2 }
        });
      });
    }, 200);
  };

  return (
    <div className="contact-page">
      <ToastContainer
        position="bottom-center"
        autoClose={3500}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        transition={Slide}
      />

      <section className="contact-hero">
        <h1>Contact Us</h1>
        <p>We’d love to hear from you. Reach out for inquiries, support or collaborations.</p>
      </section>

      <div className="contact-container container">
        <div className="contact">
          <h2>Our Office</h2>
          <p>Zugo Private Limited</p>
          <p>11(3), PN Road 4th Street, Kumarnagar,<br />Tiruppur, Tamilnadu 641602, India</p>
          <a href="tel:+919585541589">📞 +91 95855 41589 </a><br />
          <a href="mailto:zugoprivatelimited@gmail.com">✉️ zugoprivatelimited@gmail.com</a><br />
          <a
            href="https://www.bing.com/maps?where=9%5C5+4th+street+%2C+P.+N+Road+%2C+Tiruppur+%2C+Tamilnadu+641602%2C+IN&cp=11.107962%7E77.351664&lvl=16.8"
            target="_blank" rel="noopener noreferrer">
            📍 View on Google Maps
          </a>
          <div className="contact-wtsapp">
            <a href="https://wa.me/9585541589">
              <h3>Chat with Us On <FaWhatsapp /></h3>
            </a>
          </div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <h2>Send Us a Message</h2>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            value={formData.name}
            onChange={handleChange}
          />
          <input
            type="tel"
            name="mobile"
            placeholder="Your Mobile Number"
            required
            value={formData.mobile}
            onChange={handleChange}
            pattern="[0-9]{10}"
            maxLength={10}
            minLength={10}
          />
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            required
            value={formData.subject}
            onChange={handleChange}
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows="5"
            required
            value={formData.message}
            onChange={handleChange}
          ></textarea>
          <button type="submit">Send Message</button>
        </form>
      </div>

      {showModal && (
        <div className="modal-overlay fancy-blur">
          <div className="modal fancy-glass">
            <h3>Enter your email to confirm</h3>
            <input
              type="email"
              placeholder="your@email.com"
              value={tempEmail}
              onChange={(e) => setTempEmail(e.target.value)}
              required
            />
            <div className="modal-buttons">
              <button onClick={sendMail}>Confirm & Send</button>
              <button onClick={() => { setShowModal(false); setTempEmail(""); }}>
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
