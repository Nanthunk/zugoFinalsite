import React from "react";
import "./Home.css";
// import heroVideo from "../assets/hero-video.mp4";
import heroBg from "../assets/Zugo07.jpg"; // Background image for the hero section
import service1 from "../assets/marketing.jpg"; // Service images
import service2 from "../assets/img2.jpg";
import service3 from "../assets/img3.avif";
import valuesImage from "../assets/homebottom.jpg"; // Image for the values section

const Home = () => {
  return (
    <div className="home">

      {/* Hero Section */}
      <section 
        className="hero-section"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="overlay"></div>
        <div className="hero-text">
          <h1>Your Growth is Our Mission</h1>
          <p><b>Z U G O</b> Private Limited</p>
          <a href="/services" className="cta-btn">Explore Services</a>
        </div>
      </section>

      {/* Intro Section */}
      <section className="intro">
        <h2>Welcome to ZUGO Private Limited</h2>
        <p>Together with our clients, we design innovative marketing strategies and engaging digital experiences that transform brands and spark lasting connections.</p>
      </section>

      {/* Services Section */}
      <section className="services">
        <h2>Our Services</h2>
        <div className="service-cards">
          <div className="service-card">
            <img src={service1} alt="Custom Software" />
            <h3>Marketing</h3>
            <p>"Empowering your brand with creative strategies that connect, engage, and drive results."
              "We help your brand stand out with strategic, creative marketing that connects and inspires.
            </p>
            <a href="/marketing" className="cta-btn">Read More</a>
           </div>
          <div className="service-card">
            <img src={service2} alt="Cloud Solutions" />
            <h3>Developments</h3>
            <p>We build modern, user-friendly websites and mobile apps that bring your ideas to life.
From design to deployment, our development team delivers reliable, scalable digital solutions tailored to your business needs.</p>
            <a href="/development" className="cta-btn">Read More</a>
          </div>
          <div className="service-card">
            <img src={service3} alt="IT Consulting" />
            <h3>Designings</h3>
            <p>We craft intuitive, visually engaging designs for websites and mobile apps that captivate users and enhance brand identity.
Our creative approach ensures every digital experience is both beautiful and functional, tailored to your business goals.</p>
            <a href="/designing" className="cta-btn">Read More</a>
          </div>
        </div>
      </section>

      {/* Why Choose Us / Values */}
      <section className="values">
        <div className="values-content">
          <img src={valuesImage} alt="Our Values" />
          <div>
            <h2>Why Choose Zugo?</h2>
            <p>With a team of experienced professionals, agile processes, and a passion for innovation, we help you stay ahead in the fast-changing digital landscape.</p>
            <ul>
              <li>✔ Focus on client success</li>
              <li>✔ Cutting-edge technology expertise</li>
              <li>✔ Transparent and agile collaboration</li>
            </ul>
          </div>
        </div>
      </section>

      {/* CTA / Contact */}
      <section className="contact-cta">
        <h2>Ready to transform your business?</h2>
        <a href="/contact" className="cta-btn">Contact Us</a>
      </section>

    </div>
  );
};

export default Home;
