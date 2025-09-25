// import React from "react";
// import "./MDProfile.css";
// import img from "../assets/Bharath.jpg"; 

// const Home = () => {
//  return (
//   <div className="home-wrapper">
//     <div className="home-container">
//       <div className="image-side">
//         <img
//           src={img}
//           alt="Office Work"
//         />
//       </div>
//       <div className="content-side">
//         <h1>Bharath Raj C.R</h1>
//         <p>
//           Founder and CEO, Zugo Private Limited
//         </p>
//       </div>
//     </div>

//     {/* manager-details div placed right below home-container */}
//     <div className="manager-details">
//       <p>
//         With a dynamic blend of academic excellence and hands-on industry experience, Bharath Raj leads Zugo Private Limited with vision, strategy, and innovation. Holding a Bachelor of Business Administration in Computer Applications (BBA CA), a Master’s in Political Law (MA), and a Master of Science in Digital Marketing from London, Bharath raj brings a unique, cross-disciplinary perspective to the world of marketing.

// As the founder and Managing Director of Zugo Private Limited, Bharath raj has built a powerhouse team of skilled professionals, driving success across every facet of marketing — from traditional advertising and branding to cutting-edge digital campaigns, performance marketing, content creation, and beyond.

// Under Bharath Raj leadership, Zugo thrives on a client-first philosophy, delivering tailored marketing solutions that blend creativity, data-driven strategy, and measurable results. With a firm belief in continuous growth and innovation, Bharath Raj remains committed to transforming businesses through impactful marketing and lasting brand value.
//         </p>
//     </div>
//   </div>
// );

// };

// export default Home;

import React from "react";
import "./MDProfile.css";
import img from "../assets/Bharath.jpg";
import { motion } from "framer-motion"; // Import motion

const MDProfile = () => { // Changed component name to MDProfile
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.8, ease: "easeOut" } },
  };

  const textVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: "easeOut", delay: 0.5 } },
  };

  return (
    <div className="home-wrapper">
      <motion.div
        className="home-container"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
      >
        <motion.div className="image-side" variants={imageVariants}>
          <motion.img
            src={img}
            alt="Bharath Raj C.R"
            whileHover={{ scale: 1.02 }}
          />
        </motion.div>
        <motion.div className="content-side" variants={containerVariants}>
          <motion.h1
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.7, delay: 2 }}
          >
            Bharath Raj C.R
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.7, delay: 2 }}
          >
            Founder and CEO, Zugo Private Limited
          </motion.p>
        </motion.div>
      </motion.div>

      {/* manager-details div placed right below home-container */}
      <motion.div
        className="manager-details"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.5 }}
      >
        <motion.p variants={textVariants}>
          With a dynamic blend of academic excellence and hands-on industry
          experience, Bharath Raj leads Zugo Private Limited with vision,
          strategy, and innovation. Holding a Bachelor of Business
          Administration in Computer Applications (BBA CA), a Master’s in
          Political Law (MA), and a Master of Science in Digital Marketing from
          London, Bharath raj brings a unique, cross-disciplinary perspective to
          the world of marketing.
        </motion.p>
        <motion.p variants={textVariants} style={{ marginTop: '15px' }}>
          As the founder and Managing Director of Zugo Private Limited, Bharath
          raj has built a powerhouse team of skilled professionals, driving
          success across every facet of marketing — from traditional advertising
          and branding to cutting-edge digital campaigns, performance marketing,
          content creation, and beyond.
        </motion.p>
        <motion.p variants={textVariants} style={{ marginTop: '15px' }}>
          Under Bharath Raj leadership, Zugo thrives on a client-first
          philosophy, delivering tailored marketing solutions that blend
          creativity, data-driven strategy, and measurable results. With a firm
          belief in continuous growth and innovation, Bharath Raj remains
          committed to transforming businesses through impactful marketing and
          lasting brand value.
        </motion.p>
      </motion.div>
    </div>
  );
};

export default MDProfile; // Exporting the corrected component name