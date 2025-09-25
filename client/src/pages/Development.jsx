// import React from "react";
// import "./Development.css";
// import developmentpic from "../assets/img2.jpg"; 


// const Home = () => {
//  return (
//   <div className="development">
//     <div className="development-container">
      
//         <img
//           src={developmentpic}
//           alt="Office Work"
//         />
     
//         <h1>Development</h1>
        
      
//     </div>

//     {/* manager-details div placed right below home-container */}
//     <div className = "development-details">
//       <p>
//         At <b>Zugo Private Limited,</b> we believe a website is more than just a digital presence — it’s your brand’s most powerful tool to connect, engage, and grow.
// Our mission is to bring your ideas to life through custom-built web solutions designed around your business goals.

// Here’s how we help your vision turn into a seamless, modern, and high-performing web experience:
// </p>
//     </div>

//     <div className="development-ideas">
//         <h1>Our Development Ideas</h1>
//         <p>● We create tailored, responsive websites that reflect your brand’s identity, communicate your message clearly, and deliver a user experience that keeps visitors engaged.</p>
//         <p>● From front-end interfaces to robust back-end systems, our team covers the full spectrum of web development.</p>
//         <p>● With most users browsing on mobile, we ensure your site looks and works flawlessly on every device and screen size.
// Your customers get a consistent, intuitive experience anywhere, anytime.</p>
//         <p>● We implement industry best practices and modern technologies to protect your website and your users, ensuring peace of mind for your business.</p>

//     </div>

//     <div className="development-contact">
//         <center>
//         <h1>Ready to get started?</h1>
//         <p>Contact us today and discover what makes Zugo the right Web Development partner for your business success.</p>
//         <button> <a href="/contact">Contact Us</a> </button>
//         </center>
//     </div>
//   </div>
// );

// };

// export default Home;


import React from "react";
import "./Development.css";
import developmentpic from "../assets/img2.jpg";
import { delay, motion } from "framer-motion"; // Import motion

const Home = () => {
  const textVariants = { 
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, delay: 0.5, ease: "easeOut" } },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 1.5, delay: 2, ease: "easeOut" } },
  };

  const buttonVariants = {
    hover: { scale: 1.05, backgroundColor: "#03b15a" },
    tap: { scale: 0.95 },
  };

  return (
    <div className="development">
      <div className="development-container">
        <motion.img
          src={developmentpic}
          alt="Office Work"
          initial="hidden"
          animate="visible"
          variants={imageVariants}
        />

        <motion.h1
          initial="hidden"
          animate="visible"
          variants={textVariants}
        >
          Development
        </motion.h1>
      </div>

      <motion.div
        className="development-details"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.5 }}
        variants={textVariants}
      >
        <p>
          At <b>Zugo Private Limited,</b> we believe a website is more than just
          a digital presence — it’s your brand’s most powerful tool to connect,
          engage, and grow. Our mission is to bring your ideas to life through
          custom-built web solutions designed around your business goals. Here’s
          how we help your vision turn into a seamless, modern, and
          high-performing web experience:
        </p>
      </motion.div>

      <motion.div
        className="development-ideas"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: {
            opacity: 1,
            y: 0,
            transition: { staggerChildren: 0.1, duration: 1.5 },
          },
        }}
      >
        <motion.h1 variants={textVariants}>Our Development Ideas</motion.h1>
        <motion.p variants={textVariants}>
          ● We create tailored, responsive websites that reflect your brand’s
          identity, communicate your message clearly, and deliver a user
          experience that keeps visitors engaged.
        </motion.p>
        <motion.p variants={textVariants}>
          ● From front-end interfaces to robust back-end systems, our team
          covers the full spectrum of web development.
        </motion.p>
        <motion.p variants={textVariants}>
          ● With most users browsing on mobile, we ensure your site looks and
          works flawlessly on every device and screen size. Your customers get a
          consistent, intuitive experience anywhere, anytime.
        </motion.p>
        <motion.p variants={textVariants}>
          ● We implement industry best practices and modern technologies to
          protect your website and your users, ensuring peace of mind for your
          business.
        </motion.p>
      </motion.div>

      <motion.div
        className="development-contact"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.5 }}
        variants={textVariants}
      >
        <center>
          <motion.h1 variants={textVariants}>Ready to get started?</motion.h1>
          <motion.p variants={textVariants}>
            Contact us today and discover what makes Zugo the right Web
            Development partner for your business success.
          </motion.p>
          <motion.button whileHover="hover" whileTap="tap" variants={buttonVariants}>
            <a href="/contact">Contact Us</a>{" "}
          </motion.button>
        </center>
      </motion.div>
    </div>
  );
};

export default Home;