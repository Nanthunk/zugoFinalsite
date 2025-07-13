import React from "react";
import "./Development.css";
import developmentpic from "../assets/img2.jpg"; 


const Home = () => {
 return (
  <div className="development">
    <div className="development-container">
      
        <img
          src={developmentpic}
          alt="Office Work"
        />
     
        <h1>Development</h1>
        
      
    </div>

    {/* manager-details div placed right below home-container */}
    <div className = "development-details">
      <p>
        At <b>Zugo Private Limited,</b> we believe a website is more than just a digital presence — it’s your brand’s most powerful tool to connect, engage, and grow.
Our mission is to bring your ideas to life through custom-built web solutions designed around your business goals.

Here’s how we help your vision turn into a seamless, modern, and high-performing web experience:
</p>
    </div>

    <div className="development-ideas">
        <h1>Our Development Ideas</h1>
        <p>● We create tailored, responsive websites that reflect your brand’s identity, communicate your message clearly, and deliver a user experience that keeps visitors engaged.</p>
        <p>● From front-end interfaces to robust back-end systems, our team covers the full spectrum of web development.</p>
        <p>● With most users browsing on mobile, we ensure your site looks and works flawlessly on every device and screen size.
Your customers get a consistent, intuitive experience anywhere, anytime.</p>
        <p>● We implement industry best practices and modern technologies to protect your website and your users, ensuring peace of mind for your business.</p>

    </div>

    <div className="development-contact">
        <center>
        <h1>Ready to get started?</h1>
        <p>Contact us today and discover what makes Zugo the right Web Development partner for your business success.</p>
        <button> <a href="/contact">Contact Us</a> </button>
        </center>
    </div>
  </div>
);

};

export default Home;