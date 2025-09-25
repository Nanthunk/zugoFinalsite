// import React from "react";
// import "./Home.css";
// // import heroVideo from "../assets/hero-video.mp4";
// import heroBg from "../assets/Zugo07.jpg"; // Background image for the hero section
// import service1 from "../assets/marketing.jpg"; // Service images
// import service2 from "../assets/img2.jpg";
// import service3 from "../assets/img3.avif";
// import valuesImage from "../assets/homebottom.jpg"; // Image for the values section
// import { motion } from "framer-motion";


// const Home = () => {
//   return (
//     <div className="home"> 

//       {/* Hero Section */}
//       {/* <section 
//         className="hero-section"
//         style={{ backgroundImage: `url(${heroBg})` }}
//       >
//         <div className="overlay"></div>
//         <div className="hero-text">
//           <h1>Your Growth is Our Mission</h1>
//           <p><b>Z U G O</b> Private Limited</p>
//           <a href="/services" className="cta-btn">Explore Services</a>
//         </div>
//       </section> */}
//       {/* Hero Section */}
//     <motion.section 
//   className="hero-section"
//   style={{ backgroundImage: `url(${heroBg})` }}
//   initial={{ opacity: 0 }}
//   animate={{ opacity: 1 }}
//   transition={{ duration: 1 }}
// >
//   <div className="overlay"></div>
//   <motion.div 
//     className="hero-text"
//     initial={{ opacity: 0, x: -100 }}
//     animate={{ opacity: 1, x: 0 }}
//     transition={{ duration: 1.5, ease: "easeOut", delay: 2 }}
//   >
//     <h1>Your Growth is Our Mission</h1>
//     <p><b>Z U G O</b> Private Limited</p>
//     <motion.a 
//       href="/services" 
//       className="cta-btn"
//       whileHover={{ scale: 1.1 }}
//       whileTap={{ scale: 0.95 }}
//     >
//       Explore Services
//     </motion.a>
//   </motion.div>
// </motion.section>


//       {/* Intro Section */}
//       <section className="intro">
//         <h2>Welcome to ZUGO Private Limited</h2>
//         <p>Together with our clients, we design innovative marketing strategies and engaging digital experiences that transform brands and spark lasting connections.</p>
//       </section>

//       {/* Services Section */}
//       <section className="services">
//         <h2>Our Services</h2>
//         <div className="service-cards">
//           <div className="service-card">
//             <img src={service1} alt="Custom Software" />
//             <h3>Marketing</h3>
//             <p>"Empowering your brand with creative strategies that connect, engage, and drive results."
//               "We help your brand stand out with strategic, creative marketing that connects and inspires.
//             </p>
//             <a href="/marketing" className="cta-btn">Read More</a>
//            </div>
//           <div className="service-card">
//             <img src={service2} alt="Cloud Solutions" />
//             <h3>Developments</h3>
//             <p>We build modern, user-friendly websites and mobile apps that bring your ideas to life.
// From design to deployment, our development team delivers reliable, scalable digital solutions tailored to your business needs.</p>
//             <a href="/development" className="cta-btn">Read More</a>
//           </div>
//           <div className="service-card">
//             <img src={service3} alt="IT Consulting" />
//             <h3>Designings</h3>
//             <p>We craft intuitive, visually engaging designs for websites and mobile apps that captivate users and enhance brand identity.
// Our creative approach ensures every digital experience is both beautiful and functional, tailored to your business goals.</p>
//             <a href="/designing" className="cta-btn">Read More</a>
//           </div>
//         </div>
//       </section>

//       {/* Why Choose Us / Values */}
//       <section className="values">
//         <div className="values-content">
//           <img src={valuesImage} alt="Our Values" />
//           <div>
//             <h2>Why Choose Zugo?</h2>
//             <p>With a team of experienced professionals, agile processes, and a passion for innovation, we help you stay ahead in the fast-changing digital landscape.</p>
//             <ul>
//               <li>✔ Focus on client success</li>
//               <li>✔ Cutting-edge technology expertise</li>
//               <li>✔ Transparent and agile collaboration</li>
//             </ul>
//           </div>
//         </div>
//       </section>

//       {/* CTA / Contact */}
//       <section className="contact-cta">
//         <h2>Ready to transform your business?</h2>
//         <a href="/contact" className="cta-btn">Contact Us</a>
//       </section>

//     </div>
//   );
// };

// export default Home;


import React from "react";
import "./Home.css";
import heroBg from "../assets/Zugo07.jpg"; // Background image for the hero section
import service1 from "../assets/marketing.jpg"; // Service images
import service2 from "../assets/img2.jpg";
import service3 from "../assets/img3.avif";
import valuesImage from "../assets/homebottom.jpg"; // Image for the values section
import { motion } from "framer-motion";

const Home = () => {
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
    hover: { scale: 1.05, boxShadow: "0 8px 16px rgba(0,0,0,0.2)" },
  };

  const ctaButtonVariants = {
    hover: { scale: 1.1, backgroundColor: "#005f99" },
    tap: { scale: 0.95 },
  };

  const imageVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  const listVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
        staggerChildren: 0.1,
      },
    },
  };

  const listItemVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <div className="home">
      {/* Hero Section */}
      <motion.section
        className="hero-section"
        style={{ backgroundImage: `url(${heroBg})` }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 5 }}
        viewport={{ once: false, amount: 0.5 }}
      >
        <div className="hero-overlay"></div>
        <motion.div
          className="hero-text"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.5, ease: "easeOut", delay: 0.5 }} // Reduced delay for faster animation
        >
          <motion.h1
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 2, delay: 3 }} // Slightly delayed text animation
          >
            Your Growth is Our Mission
          </motion.h1>
          <motion.p
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 2, delay: 3 }}
          >
            <b>Z U G O</b> Private Limited
          </motion.p>
          <motion.a
            href="/services"
            className="cta-btn"
            variants={ctaButtonVariants}
            whileHover="hover"
            whileTap="tap"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, delay: 3.5 }}
          >
            Explore Services
          </motion.a>
        </motion.div>
      </motion.section>

      {/* Intro Section */}
      <motion.section
        className="intro"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.5 }}
      >
        <motion.h2 variants={sectionVariants}>
          Welcome to ZUGO Private Limited
        </motion.h2>
        <motion.p variants={sectionVariants}>
          Together with our clients, we design innovative marketing strategies
          and engaging digital experiences that transform brands and spark
          lasting connections.
        </motion.p>
      </motion.section>

      {/* Services Section */}
      <motion.section
        className="services"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
      >
        <motion.h2 variants={sectionVariants}>Our Services</motion.h2>
        <motion.div
          className="service-cards"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.3,
              },
            },
          }}
        >
          <motion.div className="service-card" variants={cardVariants} whileHover="hover">
            <motion.img src={service1} alt="Custom Software" />
            <motion.h3>Marketing</motion.h3>
            <motion.p>
              "Empowering your brand with creative strategies that connect,
              engage, and drive results." "We help your brand stand out with
              strategic, creative marketing that connects and inspires.
            </motion.p>
            <motion.a
              href="/marketing"
              className="cta-btn"
              variants={ctaButtonVariants}
              whileHover="hover"
              whileTap="tap"
            >
              Read More
            </motion.a>
          </motion.div>
          <motion.div className="service-card" variants={cardVariants} whileHover="hover">
            <motion.img src={service2} alt="Cloud Solutions" />
            <motion.h3>Developments</motion.h3>
            <motion.p>
              We build modern, user-friendly websites and mobile apps that bring
              your ideas to life. From design to deployment, our development
              team delivers reliable, scalable digital solutions tailored to
              your business needs.
            </motion.p>
            <motion.a
              href="/development"
              className="cta-btn"
              variants={ctaButtonVariants}
              whileHover="hover"
              whileTap="tap"
            >
              Read More
            </motion.a>
          </motion.div>
          <motion.div className="service-card" variants={cardVariants} whileHover="hover">
            <motion.img src={service3} alt="IT Consulting" />
            <motion.h3>Designings</motion.h3>
            <motion.p>
              We craft intuitive, visually engaging designs for websites and
              mobile apps that captivate users and enhance brand identity. Our
              creative approach ensures every digital experience is both
              beautiful and functional, tailored to your business goals.
            </motion.p>
            <motion.a
              href="/designing"
              className="cta-btn"
              variants={ctaButtonVariants}
              whileHover="hover"
              whileTap="tap"
            >
              Read More
            </motion.a>
          </motion.div>
        </motion.div>
      </motion.section>

      {/* Why Choose Us / Values */}
      <motion.section
        className="values"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
      >
        <motion.div className="values-content">
          <motion.img src={valuesImage} alt="Our Values" variants={imageVariants} />
          <motion.div>
            <motion.h2 variants={sectionVariants}>Why Choose Zugo?</motion.h2>
            <motion.p variants={sectionVariants}>
              With a team of experienced professionals, agile processes, and a
              passion for innovation, we help you stay ahead in the fast-changing
              digital landscape.
            </motion.p>
            <motion.ul variants={listVariants}>
              <motion.li variants={listItemVariants}>✔ Focus on client success</motion.li>
              <motion.li variants={listItemVariants}>✔ Cutting-edge technology expertise</motion.li>
              <motion.li variants={listItemVariants}>✔ Transparent and agile collaboration</motion.li>
            </motion.ul>
          </motion.div>
        </motion.div>
      </motion.section>

      {/* CTA / Contact */}
      <motion.section
        className="contact-cta"
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: false, amount: 0.5 }}
        transition={{ duration: 0.7 }}
      >
        <motion.h2>Ready to transform your business?</motion.h2>
        <motion.a
          href="/contact"
          className="cta-btn"
          variants={ctaButtonVariants}
          whileHover="hover"
          whileTap="tap"
        >
          Contact Us
        </motion.a>
      </motion.section>
    </div>
  );
};

export default Home;