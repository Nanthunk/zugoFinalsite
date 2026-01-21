// import React from "react";
// import "./About.css";

// import pic1 from "../assets/Zugo01.jpg";
// import pic2 from "../assets/Zugo02.jpg";
// import pic3 from "../assets/Zugo03.jpg";
// import pic4 from "../assets/Zugo04.jpg";
// import pic6 from "../assets/Zugo06.jpg";
// import pic7 from "../assets/Zugo07.jpg";
// import about from "../assets/abtbg5.jpg";


// export default function About() {
//   return (
//     <div className="about-page">

//       {/* Hero / intro */}
//       <section className="about-hero"
      
//         style={{ backgroundImage: `url(${about})` }}
//          >
//         <h1>About Us</h1>
//         <p>
//           At Zugo, we’re not just another marketing firm we’re your growth partner. We specialize in crafting bold, data-driven marketing strategies that help brands stand out, connect with their audiences, and drive measurable results.
//         </p>
//         <br />
//         <br />
//         <p>From digital campaigns and brand strategy to creative content and performance marketing, our team blends creativity with analytics to deliver real business impact. Whether you’re launching a new brand, scaling an existing one, or redefining your market position, Zugo brings the insight, innovation, and execution needed to make it happen.
//         </p>
        
        

//       </section>
      

//       {/* Mission & Vision */}
//       <section className="mission-vision container">
//         <div>
//           <h2>Our Mission</h2>
//           <p>
//             To empower enterprises with Zugo Private Limited, enabling digital transformation and measurable business value.
//           </p>
//         </div>
//         <div>
//           <h2>Our Vision</h2>
//           <p>
//             To be a trusted global technology partner recognized for excellence, agility, and customer-centric innovation.
//           </p>
//         </div>
//       </section>

//       <center >
//         <h1 className="officepic" >Our Infrastructure</h1>
//       </center>

//       <section className="history container">
        
//         {<img src={pic1} alt="Our Team" />}
//         {<img src={pic2} alt="Our Team" />}
//         {<img src={pic3} alt="Our Team" />}
//         {<img src={pic4} alt="Our Team" />}
//         {<img src={pic6} alt="Our Team" />}
//         {<img src={pic7} alt="Our Team" />}
//         </section>

//       <section className="company-info">
//         <div>
//           <h2>Who We Are</h2>
//           <p>
//             Founded in 2025, Zugo Private Limited unites creative strategists, designers, and digital marketing experts with deep industry insight. We specialize in brand development, digital marketing, creative design, and marketing consulting.
//             Our collaborative approach, data-driven mindset, and dedication to delivering measurable results have helped us craft impactful campaigns for clients across diverse industries.

//           </p>
          
          
        
//           <h2>What We Do</h2>
//           <p>
//             ● Strategic Marketing & Brand Positioning
//             </p>

//             <p>● Digital Advertising (Google, Meta, LinkedIn, and more)</p>

//             <p>● Social Media Management & Campaigns </p>

//             <p>● SEO & Content Marketing </p>

//             <p>● Email Marketing & Automation </p>

//             <p>● Online and Offline Marketing</p>
          
//             <p>● Affiliate and Influencer Marketing</p>

//             <p>● Real Estate Marketing</p>

//             <p>● Product Marketing & Launch Strategy </p>

//             <p>● Mobile Marketing</p>

//             <p>● Brand Marketing and Brand Promotion</p>

//             <p>● Creative Designing and Marketing </p>

//             <p>● Web Development & Conversion Optimization
// We work with startups, scale-ups, and established companies across industries from tech and e-commerce to lifestyle and B2B services   to help them unlock new levels of growth.
//  </p>

//             <p>● Let’s build something great,together.</p>

          
//         </div>
//       </section>

//       <center> <div className="contact-info">
//           <h2>Our Office</h2>
//           <p><span className="highlight">Industry :</span> Marketing Services </p>
//           <p><span className="highlight">Founded :</span> 2025 </p>
//           <p><span className="highlight">Headquatres :</span> Tiruppur, Tamilnadu</p>
//           <p><span className="highlight">Address :</span>11(3), PN Road 4th Street, Kumarnagar , Tiruppur , Tamilnadu 641602, India</p>
//           <p><span className="highlight">Phone :</span> +91 9585542589</p>
//           <a
//             href="https://www.google.com/maps/place/Olympia+Tech+Park/@13.010454,80.209995"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="map-link"
//           >
//             📍 View on Google Maps
//           </a>
//         </div></center>

//         <section className="history container">
//           <div className="workplace-info">
//             <h2>Onsite Workplace</h2>
//             <p>At Zugo, we believe that collaboration, creativity, and communication thrive best when we share space and energy together. As part of our commitment to maintaining a dynamic and connected work culture, Zugo follows an onsite working policy designed to support productivity.</p>
//             <br />
//             <h4>Featured benefits</h4>
            
//             <p>● Free Meals</p>
//             <p>● Mental Health Benefits</p>
//             </div>
//         </section>

        


//       {/* Call to action */}
//       <section className="about-cta">
//         <h2>Discover how Zugo can transform your business</h2>
//         <a href="/contact" className="cta-btn">Contact Us</a>
//       </section>

//     </div>
//   );
// }


import React, { useState } from "react";
import "./About.css";
import { motion } from "framer-motion"; // Import motion

import pic1 from "../assets/Zugo01.jpg";
import pic2 from "../assets/Zugo02.jpg";
import pic3 from "../assets/Zugo03.jpg";
import pic4 from "../assets/Zugo04.jpg";
import pic6 from "../assets/Zugo06.jpg";
import pic7 from "../assets/Zugo07.jpg";
import about from "../assets/abtbg5.jpg";
import new1 from "../assets/zugonew1.jpg";  
import new2 from "../assets/zugonew2.jpg";
import new3 from "../assets/zugonew3.jpg";
import new4 from "../assets/zugonew4.jpg";
import new5 from "../assets/zugonew5.jpg";

// Animation variants for common elements
const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
      staggerChildren: 0.2, // Stagger children animations
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const properties = [
  {
    id: 5,
    img: new5,
  },
  {
    id: 1,
    img: new1,
  },
  {
    id: 3,
    img: new3,
  },
  {
    id: 2,
    img: new2,
  },
  
  {
    id: 4,
    img: new4,
  },
  
];

export default function About() {
   const [current, setCurrent] = useState(0);

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? properties.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev === properties.length - 1 ? 0 : prev + 1));
  }; 
  return (
    <div className="about-page">
      {/* Hero / intro */}
      <motion.section
        className="about-hero"
        style={{ backgroundImage: `url(${about})` }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        <motion.h1
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.5, delay: 1.5 }}
        >
          About Us
        </motion.h1>
        <motion.p
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.5, delay: 1.5 }}
        >
          At Zugo, we’re not just another marketing firm we’re your growth
          partner. We specialize in crafting bold, data-driven marketing
          strategies that help brands stand out, connect with their audiences,
          and drive measurable results. 
        </motion.p>
        <br />
        <br />
        <motion.p
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.0, delay: 2.8 }}
        >
          From digital campaigns and brand strategy to creative content and
          performance marketing, our team blends creativity with analytics to
          deliver real business impact. Whether you’re launching a new brand,
          scaling an existing one, or redefining your market position, Zugo
          brings the insight, innovation, and execution needed to make it
          happen.
        </motion.p>
      </motion.section>

      {/* Mission & Vision */}
      <motion.section
        className="mission-vision container"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
      >
        <motion.div variants={itemVariants}>
          <motion.h2 variants={itemVariants}>Our Mission</motion.h2>
          <motion.p variants={itemVariants}>
            To empower enterprises with Zugo Private Limited, enabling digital
            transformation and measurable business value.
          </motion.p>
        </motion.div>
        <motion.div variants={itemVariants}>
          <motion.h2 variants={itemVariants}>Our Vision</motion.h2>
          <motion.p variants={itemVariants}>
            To be a trusted global technology partner recognized for excellence,
            agility, and customer-centric innovation.
          </motion.p>
        </motion.div>
      </motion.section>

      <center>
        <motion.h1
          className="officepic"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 0.7 }}
        >
          Our Infrastructure
        </motion.h1>
      </center>

      <motion.section
        className="history container"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
        
      >
        <motion.img src={pic1} alt="Our Team" variants={itemVariants} whileHover={{ scale: 1.5 }} />
        <motion.img src={pic2} alt="Our Team" variants={itemVariants} whileHover={{ scale: 1.5 }} />
        <motion.img src={pic3} alt="Our Team" variants={itemVariants} whileHover={{ scale: 1.5 }} />
        <motion.img src={pic4} alt="Our Team" variants={itemVariants} whileHover={{ scale: 1.5 }} />
        <motion.img src={pic6} alt="Our Team" variants={itemVariants} whileHover={{ scale: 1.5 }} />
        <motion.img src={pic7} alt="Our Team" variants={itemVariants} whileHover={{ scale: 1.5 }} />
      </motion.section>

      <motion.section
        className="slider-container"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
      > 

        <div className="slider-container">
  <button className="slider-btn prev" onClick={prevSlide}>‹</button>

  <div className="slider-wrapper" style={{ transform: `translateX(-${current * 300}px)` }}>
    {properties.map((property, index) => (
      <div className="card" key={index}>
        <img src={property.img} alt={property.title} />
        
      </div>
    ))}
  </div>

  <button className="slider-btn next" onClick={nextSlide}>›</button>
</div>

      </motion.section>

      <motion.section
        className="company-info"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
      >
        <motion.div>
          <motion.h2 variants={itemVariants}>Who We Are</motion.h2>
          <motion.p variants={itemVariants}>
            Founded in 2025, Zugo Private Limited unites creative strategists,
            designers, and digital marketing experts with deep industry insight.
            We specialize in brand development, digital marketing, creative
            design, and marketing consulting. Our collaborative approach,
            data-driven mindset, and dedication to delivering measurable results
            have helped us craft impactful campaigns for clients across diverse
            industries.
          </motion.p>

          <motion.h2 variants={itemVariants} style={{ marginTop: '20px' }}>What We Do</motion.h2>
          <motion.p variants={itemVariants}>● Strategic Marketing & Brand Positioning</motion.p>
          <motion.p variants={itemVariants}>● Digital Advertising (Google, Meta, LinkedIn, and more)</motion.p>
          <motion.p variants={itemVariants}>● Social Media Management & Campaigns </motion.p>
          <motion.p variants={itemVariants}>● SEO & Content Marketing </motion.p>
          <motion.p variants={itemVariants}>● Email Marketing & Automation </motion.p>
          <motion.p variants={itemVariants}>● Online and Offline Marketing</motion.p>
          <motion.p variants={itemVariants}>● Affiliate and Influencer Marketing</motion.p>
          <motion.p variants={itemVariants}>● Real Estate Marketing</motion.p>
          <motion.p variants={itemVariants}>● Product Marketing & Launch Strategy </motion.p>
          <motion.p variants={itemVariants}>● Mobile Marketing</motion.p>
          <motion.p variants={itemVariants}>● Brand Marketing and Brand Promotion</motion.p>
          <motion.p variants={itemVariants}>● Creative Designing and Marketing </motion.p>
          <motion.p variants={itemVariants}>● Web Development & Conversion Optimization We work with startups, scale-ups, and established companies across industries from tech and e-commerce to lifestyle and B2B services to help them unlock new levels of growth.</motion.p>
          <motion.p variants={itemVariants}>● Let’s build something great,together.</motion.p>
        </motion.div>
      </motion.section>

      <center>
        <motion.div
          className="contact-info"
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 0.7 }}
        >
          <motion.h2>Our Office</motion.h2>
          <motion.p><span className="highlight">Industry :</span> Marketing Services </motion.p>
          <motion.p><span className="highlight">Founded :</span> 2025 </motion.p>
          <motion.p><span className="highlight">Headquatres :</span> Tiruppur, Tamilnadu</motion.p>
          <motion.p><span className="highlight">Address :</span>11(3), PN Road 4th Street, Kumarnagar , Tiruppur , Tamilnadu 641602, India</motion.p>
          <motion.p><span className="highlight">Phone :</span> +91 9585542589</motion.p>
          <motion.a
            href="https://www.google.com/maps/place/Olympia+Tech+Park/@13.010454,80.209995"
            target="_blank"
            rel="noopener noreferrer"
            className="map-link"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            📍 View on Google Maps
          </motion.a>
        </motion.div>
      </center>

      <motion.section
        className="history container"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
        
      >
        <motion.div className="workplace-info" variants={itemVariants}>
          <motion.h2 variants={itemVariants}>Onsite Workplace</motion.h2>
          <motion.p variants={itemVariants}>
            At Zugo, we believe that collaboration, creativity, and
            communication thrive best when we share space and energy together.
            As part of our commitment to maintaining a dynamic and connected
            work culture, Zugo follows an onsite working policy designed to
            support productivity.
          </motion.p>
          
          
        </motion.div>
      </motion.section>

      {/* Call to action */}
      <motion.section
        className="about-cta"
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: false, amount: 0.5 }}
        transition={{ duration: 0.7 }}
      >
        <motion.h2>Discover how Zugo can transform your business</motion.h2>
        <motion.a
          href="/contact"
          className="cta-btn"
          whileHover={{ scale: 1.5 }}
          whileTap={{ scale: 1.95 }}
        >
          Contact Us
        </motion.a>
      </motion.section>
    </div>
  );
}




