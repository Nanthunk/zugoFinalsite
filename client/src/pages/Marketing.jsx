// import React from "react";
// import "./Marketing.css";
// import marketingpic from "../assets/marketing.jpg"; 


// const Home = () => {
//  return (
//   <div className="marketing">
//     <div className="marketing-container">
      
//         <img
//           src={marketingpic}
//           alt="Office Work"
//         />
     
//         <h1>Marketing</h1>
        
      
//     </div>

//     {/* manager-details div placed right below home-container */}
//     <div className = "marketing-details">
//       <p>
//         At <b>ZUGO Private Limited,</b> we understand that marketing isn’t just about promoting products — it’s about building meaningful connections, telling your unique story, and driving real business growth.

// As your trusted marketing partner, we’re here to help your brand stand out in an increasingly competitive digital world. Here’s how we make that happen:

// </p>
//     </div>

//     <div className="marketing-strategies">
//         <h1>Our Strategies</h1>
//         <p>● We collaborate closely with you to create data-driven marketing strategies tailored to your industry, audience, and business goals ensuring every effort delivers measurable results.</p>
//         <p>● From content creation to campaign management, we help you engage your audience, build loyal communities, and grow your brand presence across platforms like Facebook, Instagram, LinkedIn, and beyond.</p>
//         <p>● We craft compelling, search-optimized content that attracts, informs, and converts helping your business appear where it matters most and stay ahead of the competition.</p>
//         <p>● We design and manage targeted ad campaigns that reach the right audience at the right time, maximizing your return on investment across Google Ads, Meta Ads, and other networks.</p>
//         <p>● Your brand is more than a logo it’s an experience. Our creative team helps shape and refine your brand identity, ensuring consistency and impact across every touchpoint.</p>
//         <p>● We have more Knowledge and Ideas in End-to-end Marketing Solutions under one roof</p>

//     </div>

//     <div className="marketing-contact">
//         <center>
//         <h1>Ready to get started?</h1>
//         <p>Contact us today and discover what makes Zugo the right marketing partner for your business success.</p>
//         <button> <a href="/contact">Contact Us</a> </button>
//         </center>
//     </div>
//   </div>
// );

// };

// export default Home;



import React from "react";
import { motion } from "framer-motion"; // ✅ import framer-motion
import "./Marketing.css";
import marketingpic from "../assets/marketing.jpg";

const Home = () => {
  return (
    <motion.div
      className="marketing"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Top Section */}
      <motion.div
        className="marketing-container"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 2 }}
      >
        <motion.img
          src={marketingpic}
          alt="Office Work"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, delay: 2 }}
        />
        <motion.h1
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 2.2 }}
        >
          Marketing
        </motion.h1>
      </motion.div>

      {/* Details Section */}
      <motion.div
        className="marketing-details"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: false }}
      >
        <p>
          At <b>ZUGO Private Limited,</b> we understand that marketing isn’t just
          about promoting products — it’s about building meaningful connections,
          telling your unique story, and driving real business growth.
          <br />
          <br />
          As your trusted marketing partner, we’re here to help your brand stand
          out in an increasingly competitive digital world. Here’s how we make
          that happen:
        </p>
      </motion.div>

      {/* Strategies Section */}
      <motion.div
        className="marketing-strategies"
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: false }}
      >
        <h1>Our Strategies</h1>
        
          <motion.p whileHover={{ scale: 1.05 }}>
            ● We collaborate closely with you to create data-driven marketing
            strategies tailored to your industry, audience, and business goals
            ensuring every effort delivers measurable results.
          </motion.p>
          <motion.p whileHover={{ scale: 1.05 }}>
            ● From content creation to campaign management, we help you engage
            your audience, build loyal communities, and grow your brand presence
            across platforms like Facebook, Instagram, LinkedIn, and beyond.
          </motion.p>
          <motion.p whileHover={{ scale: 1.05 }}>
            ● We craft compelling, search-optimized content that attracts,
            informs, and converts helping your business appear where it matters
            most and stay ahead of the competition.
          </motion.p>
          <motion.p whileHover={{ scale: 1.05 }}>
            ● We design and manage targeted ad campaigns that reach the right
            audience at the right time, maximizing your return on investment
            across Google Ads, Meta Ads, and other networks.
          </motion.p>
          <motion.p whileHover={{ scale: 1.05 }}>
            ● Your brand is more than a logo it’s an experience. Our creative
            team helps shape and refine your brand identity, ensuring
            consistency and impact across every touchpoint.
          </motion.p>
          <motion.p whileHover={{ scale: 1.05 }}>
            ● We have more Knowledge and Ideas in End-to-end Marketing Solutions
            under one roof
          </motion.p>
        
      </motion.div>

      {/* Contact Section */}
      <motion.div
        className="marketing-contact"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: false }}
      >
        <center>
          <h1>Ready to get started?</h1>
          <p>
            Contact us today and discover what makes Zugo the right marketing
            partner for your business success.
          </p>
          <motion.button
            whileHover={{ scale: 1.1, backgroundColor: "#ff6b6b" }}
            whileTap={{ scale: 0.95 }}
          >
            <a href="/contact">Contact Us</a>
          </motion.button>
        </center>
      </motion.div>
    </motion.div>
  );
};

export default Home;




