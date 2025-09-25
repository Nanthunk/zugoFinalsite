// import React from "react";
// import "./Designing.css";
// import designingpic from "../assets/img3.avif"; 


// const Home = () => {
//  return (
//   <div className="designing">
//     <div className="designing-container">
      
//         <img
//           src={designingpic}
//           alt="Office Work"
//         />
     
//         <h1>Designing</h1>
        
      
//     </div>

//     {/* manager-details div placed right below home-container */}
//     <div className = "designing-details">
//       <p>
//        At <b>Zugo Private Limited,</b> design isn’t just what something looks like — it’s how it feels, how it communicates, and how it connects your brand with people.

// We combine creativity, strategy, and deep understanding of your audience to craft designs that do more than catch the eye — they build trust, deliver your message, and drive results.
// </p>
//     </div>

//     <div className="designing-ideas">
//         <h1>Our Designing Ideas</h1>
//         <p>● Your brand starts with a story — and we help you tell it through compelling logos, color palettes, and visual guidelines that truly reflect who you are.</p>
//         <p>● From brochures and business cards to banners and social media graphics, we design visual assets that stay true to your brand and speak to your audience.</p>
//         <p>● A beautiful interface isn’t enough — it must also feel intuitive.
// We design seamless digital experiences that make your apps and websites easy, engaging, and delightful to use.</p>
//         <p>● We blend creativity and strategy to create packaging designs that catch attention and communicate your brand promise.</p>

//     </div>

//     <div className="designing-contact">
//         <center>
//         <h1>Ready to get started?</h1>
//         <p>Contact us today and discover what makes Zugo the right Designing partner for your business success.</p>
//         <button> <a href="/contact">Contact Us</a> </button>
//         </center>
//     </div>
//   </div>
// );

// };

// export default Home;


import React from "react";
import { motion } from "framer-motion"; // ✅ Import Framer Motion
import "./Designing.css";
import designingpic from "../assets/img3.avif";

const Home = () => {
  return (
    <div className="designing">
      {/* Image + Title */}
      <motion.div
        className="designing-container"
        initial={{ opacity: 0, y: -50 }}   // start hidden
        animate={{ opacity: 1, y: 0 }}     // animate to visible
        transition={{ duration: 1 }}
      >
        <motion.img
          src={designingpic}
          alt="Office Work"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, delay: 2 }}
        />
        <motion.h1
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 2.2 }}
        >
          Designing
        </motion.h1>
      </motion.div>

      {/* Designing Details */}
      <motion.div
        className="designing-details"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: false }} // animates once when scrolled into view
      >
        <p>
          At <b>Zugo Private Limited,</b> design isn’t just what something looks
          like — it’s how it feels, how it communicates, and how it connects your
          brand with people.
          <br />
          <br />
          We combine creativity, strategy, and deep understanding of your audience
          to craft designs that do more than catch the eye — they build trust,
          deliver your message, and drive results.
        </p>
      </motion.div>

      {/* Designing Ideas */}
      <motion.div
        className="designing-ideas"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: false }}
      >
        <h1>Our Designing Ideas</h1>
        <motion.p
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          ● Your brand starts with a story — and we help you tell it through
          compelling logos, color palettes, and visual guidelines that truly
          reflect who you are.
        </motion.p>
        <motion.p
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          ● From brochures and business cards to banners and social media
          graphics, we design visual assets that stay true to your brand and
          speak to your audience.
        </motion.p>
        <motion.p
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          ● A beautiful interface isn’t enough — it must also feel intuitive. We
          design seamless digital experiences that make your apps and websites
          easy, engaging, and delightful to use.
        </motion.p>
        <motion.p
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          ● We blend creativity and strategy to create packaging designs that
          catch attention and communicate your brand promise.
        </motion.p>
      </motion.div>

      {/* Contact Section */}
      <motion.div
        className="designing-contact"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: false }}
      >
        <center>
          <h1>Ready to get started?</h1>
          <p>
            Contact us today and discover what makes Zugo the right Designing
            partner for your business success.
          </p>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <a href="/contact">Contact Us</a>
          </motion.button>
        </center>
      </motion.div>
    </div>
  );
};

export default Home;
