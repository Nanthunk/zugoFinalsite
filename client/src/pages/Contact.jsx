// import React, { useState } from "react";
// import "./Contact.css";
// import { FaWhatsapp, FaCheckCircle, FaTimesCircle } from "react-icons/fa";
// import { ToastContainer, toast, Slide } from "react-toastify";
// import 'react-toastify/dist/ReactToastify.css';
// import emailjs from '@emailjs/browser';

// export default function Contact() {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     subject: "",
//     message: "",
//     mobile: "",
//   });

//   const [showModal, setShowModal] = useState(false);
//   const [tempEmail, setTempEmail] = useState("");

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setShowModal(true);
//   };

//   const sendMail = async () => {
//     if (!tempEmail) {
//       toast.error(<span><FaTimesCircle /> Please enter your email.</span>);
//       return;
//     }

//     try {
//       const templateParams = {
//         from_name: formData.name,
//         from_email: tempEmail,
//         subject: formData.subject,
//         message: formData.message,
//         mobile: formData.mobile,
//       };

//       const serviceID = "YOUR_SERVICE_ID";
//       const templateID = "YOUR_TEMPLATE_ID";
//       const publicKey = "YOUR_PUBLIC_KEY";

//       await emailjs.send(serviceID, templateID, templateParams, publicKey);
      
//       toast.success(<span><FaCheckCircle /> Message sent successfully!</span>);
//       setFormData({ name: "", email: "", subject: "", message: "", mobile: "" });
//       triggerConfetti();
//     } catch (error) {
//       console.error("EmailJS error:", error);
//       toast.error(<span><FaTimesCircle /> Could not send message. Please try again later.</span>);
//     }

//     setShowModal(false);
//     setTempEmail("");
//   };

//   const triggerConfetti = () => {
//     const duration = 1000;
//     const animationEnd = Date.now() + duration;
//     const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 1000 };

//     const interval = setInterval(() => {
//       const timeLeft = animationEnd - Date.now();
//       if (timeLeft <= 0) clearInterval(interval);
//       const particleCount = 50 * (timeLeft / duration);
//       import('canvas-confetti').then(confetti => {
//         confetti.default({
//           ...defaults,
//           particleCount,
//           origin: { x: Math.random(), y: Math.random() - 0.2 }
//         });
//       });
//     }, 200);
//   };

//   return (
//     <div className="contact-page">
//       <ToastContainer
//         position="bottom-center"
//         autoClose={3500}
//         hideProgressBar={false}
//         newestOnTop
//         closeOnClick
//         pauseOnFocusLoss
//         draggable
//         pauseOnHover
//         theme="dark"
//         transition={Slide}
//       />

//       <section className="contact-hero">
//         <h1>Contact Us</h1>
//         <p>We’d love to hear from you. Reach out for inquiries, support or collaborations.</p>
//       </section>

//       <div className="contact-container container">
//         <div className="contact">
//           <h2>Our Office</h2>
//           <p>Zugo Private Limited</p>
//           <p>11(3), PN Road 4th Street, Kumarnagar,<br />Tiruppur, Tamilnadu 641602, India</p>
//           <a href="tel:+919585541589">📞 +91 95855 41589 </a><br />
//           <a href="mailto:zugoprivatelimited@gmail.com">✉️ zugoprivatelimited@gmail.com</a><br />
//           <a
//             href="https://www.bing.com/maps?where=9%5C5+4th+street+%2C+P.+N+Road+%2C+Tiruppur+%2C+Tamilnadu+641602%2C+IN&cp=11.107962%7E77.351664&lvl=16.8"
//             target="_blank" rel="noopener noreferrer">
//             📍 View on Google Maps
//           </a>
//           <div className="contact-wtsapp">
//             <a href="https://wa.me/9585541589">
//               <h3>Chat with Us On <FaWhatsapp /></h3>
//             </a>
//           </div>
//         </div>

//         <form className="contact-form" onSubmit={handleSubmit}>
//           <h2>Send Us a Message</h2>
//           <input
//             type="text"
//             name="name"
//             placeholder="Your Name"
//             required
//             value={formData.name}
//             onChange={handleChange}
//           />
//           <input
//             type="tel"
//             name="mobile"
//             placeholder="Your Mobile Number"
//             required
//             value={formData.mobile}
//             onChange={handleChange}
//             pattern="[0-9]{10}"
//             maxLength={10}
//             minLength={10}
//           />
//           <input
//             type="text"
//             name="subject"
//             placeholder="Subject"
//             required
//             value={formData.subject}
//             onChange={handleChange}
//           />
//           <textarea
//             name="message"
//             placeholder="Your Message"
//             rows="5"
//             required
//             value={formData.message}
//             onChange={handleChange}
//           ></textarea>
//           <button type="submit">Send Message</button>
//         </form>
//       </div>

//       {showModal && (
//         <div className="modal-overlay fancy-blur">
//           <div className="modal fancy-glass">
//             <h3>Enter your email to confirm</h3>
//             <input
//               type="email"
//               placeholder="your@email.com"
//               value={tempEmail}
//               onChange={(e) => setTempEmail(e.target.value)}
//               required
//             />
//             <div className="modal-buttons">
//               <button onClick={sendMail}>Confirm & Send</button>
//               <button onClick={() => { setShowModal(false); setTempEmail(""); }}>
//                 Cancel
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }


import React, { useState } from "react";
import "./Contact.css";
import { FaWhatsapp, FaCheckCircle, FaTimesCircle } from "react-icons/fa";
import { ToastContainer, toast, Slide } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import emailjs from "@emailjs/browser";
import { delay, motion } from "framer-motion"; // Import motion

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
      toast.error(
        <span>
          <FaTimesCircle /> Please enter your email.
        </span>
      );
      return;
    }

    try {
      const templateParams = {
        from_name: formData.name,
        from_email: tempEmail,
        subject: formData.subject,
        message: formData.message,
        mobile: formData.mobile,
      };

      const serviceID = "YOUR_SERVICE_ID";
      const templateID = "YOUR_TEMPLATE_ID";
      const publicKey = "YOUR_PUBLIC_KEY";

      await emailjs.send(serviceID, templateID, templateParams, publicKey);

      toast.success(
        <span>
          <FaCheckCircle /> Message sent successfully!
        </span>
      );
      setFormData({ name: "", email: "", subject: "", message: "", mobile: "" });
      triggerConfetti();
    } catch (error) {
      console.error("EmailJS error:", error);
      toast.error(
        <span>
          <FaTimesCircle /> Could not send message. Please try again later.
        </span>
      );
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
      import("canvas-confetti").then((confetti) => {
        confetti.default({
          ...defaults,
          particleCount,
          origin: { x: Math.random(), y: Math.random() - 0.2 },
        });
      });
    }, 200);
  };

  const fadeInVariants = {
    hidden: { opacity: 0, y: 100 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 2.0, ease: "easeOut" } },
  };

  const formItemVariants = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, delay: 2.0, ease: "easeOut" } },
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

      <motion.section
        className="contact-hero"
        initial="hidden"
        animate="visible"
        variants={fadeInVariants}
      >
        <motion.h1 variants={fadeInVariants}>Contact Us</motion.h1>
        <motion.p variants={fadeInVariants}>
          We’d love to hear from you. Reach out for inquiries, support or
          collaborations.
        </motion.p>
      </motion.section>

      <motion.div
        className="contact-container container"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: {
            opacity: 1,
            y: 0,
            transition: { staggerChildren: 0.2, duration: 0.8 },
          },
        }}
      >
        <motion.div className="contact" variants={fadeInVariants}>
          <motion.h2 variants={fadeInVariants}>Our Office</motion.h2>
          <motion.p variants={fadeInVariants}>Zugo Private Limited</motion.p>
          <motion.p variants={fadeInVariants}>
            11(3), PN Road 4th Street, Kumarnagar,
            <br />
            Tiruppur, Tamilnadu 641602, India
          </motion.p>
          <motion.a
            href="tel:+919585541589"
            variants={fadeInVariants}
            whileHover={{ x: 10 }}
          >
            📞 +91 95855 41589{" "}
          </motion.a>
          <br />
          <motion.a
            href="mailto:zugoprivatelimited@gmail.com"
            variants={fadeInVariants}
            whileHover={{ x: 10 }}
          >
            ✉️ zugoprivatelimited@gmail.com
          </motion.a>
          <br />
          <motion.a
            href="https://www.bing.com/maps?where=9%5C5+4th+street+%2C+P.+N+Road+%2C+Tiruppur+%2C+Tamilnadu+641602%2C+IN&cp=11.107962%7E77.351664&lvl=16.8"
            target="_blank"
            rel="noopener noreferrer"
            variants={fadeInVariants}
            whileHover={{ x: 10 }}
          >
            📍 View on Google Maps
          </motion.a>
          <motion.div className="contact-wtsapp" variants={fadeInVariants}>
            <motion.a href="https://wa.me/9585541589" whileHover={{ scale: 1.03 }}>
              <h3>
                Chat with Us On <FaWhatsapp />
              </h3>
            </motion.a>
          </motion.div>
        </motion.div>

        <motion.form className="contact-form" onSubmit={handleSubmit} variants={{
          hidden: { opacity: 0, x: 20 },
          visible: {
            opacity: 1,
            x: 0,
            transition: { staggerChildren: 0.1, duration: 0.8 },
          },
        }}>
          <motion.h2 variants={formItemVariants}>Send Us a Message</motion.h2>
          <motion.input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            value={formData.name}
            onChange={handleChange}
            variants={formItemVariants}
          />
          <motion.input
            type="tel"
            name="mobile"
            placeholder="Your Mobile Number"
            required
            value={formData.mobile}
            onChange={handleChange}
            pattern="[0-9]{10}"
            maxLength={10}
            minLength={10}
            variants={formItemVariants}
          />
          <motion.input
            type="text"
            name="subject"
            placeholder="Subject"
            required
            value={formData.subject}
            onChange={handleChange}
            variants={formItemVariants}
          />
          <motion.textarea
            name="message"
            placeholder="Your Message"
            rows="5"
            required
            value={formData.message}
            onChange={handleChange}
            variants={formItemVariants}
          ></motion.textarea>
          <motion.button type="submit" variants={formItemVariants} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            Send Message
          </motion.button>
        </motion.form>
      </motion.div>

      {showModal && (
        <div className="modal-overlay fancy-blur">
          <motion.div
            className="modal fancy-glass"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <h3>Enter your email to confirm</h3>
            <input
              type="email"
              placeholder="your@email.com"
              value={tempEmail}
              onChange={(e) => setTempEmail(e.target.value)}
              required
            />
            <div className="modal-buttons">
              <motion.button onClick={sendMail} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                Confirm & Send
              </motion.button>
              <motion.button
                onClick={() => {
                  setShowModal(false);
                  setTempEmail("");
                }}
                whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
              >
                Cancel
              </motion.button>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
}
