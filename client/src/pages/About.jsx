import React from "react";
import "./About.css";

import pic1 from "../assets/Zugo01.jpg";
import pic2 from "../assets/Zugo02.jpg";
import pic3 from "../assets/Zugo03.jpg";
import pic4 from "../assets/Zugo04.jpg";
import pic6 from "../assets/Zugo06.jpg";
import pic7 from "../assets/Zugo07.jpg";
import about from "../assets/abtbg5.jpg";


export default function About() {
  return (
    <div className="about-page">

      {/* Hero / intro */}
      <section className="about-hero"
      
        style={{ backgroundImage: `url(${about})` }}
         >
        <h1>About Us</h1>
        <p>
          At Zugo, we’re not just another marketing firm we’re your growth partner. We specialize in crafting bold, data-driven marketing strategies that help brands stand out, connect with their audiences, and drive measurable results.
        </p>
        <br />
        <br />
        <p>From digital campaigns and brand strategy to creative content and performance marketing, our team blends creativity with analytics to deliver real business impact. Whether you’re launching a new brand, scaling an existing one, or redefining your market position, Zugo brings the insight, innovation, and execution needed to make it happen.
        </p>
        
        

      </section>
      

      {/* Mission & Vision */}
      <section className="mission-vision container">
        <div>
          <h2>Our Mission</h2>
          <p>
            To empower enterprises with Zugo Private Limited, enabling digital transformation and measurable business value.
          </p>
        </div>
        <div>
          <h2>Our Vision</h2>
          <p>
            To be a trusted global technology partner recognized for excellence, agility, and customer-centric innovation.
          </p>
        </div>
      </section>

      <center >
        <h1 className="officepic" >Our Infrastructure</h1>
      </center>

      <section className="history container">
        
        {<img src={pic1} alt="Our Team" />}
        {<img src={pic2} alt="Our Team" />}
        {<img src={pic3} alt="Our Team" />}
        {<img src={pic4} alt="Our Team" />}
        {<img src={pic6} alt="Our Team" />}
        {<img src={pic7} alt="Our Team" />}
        </section>

      <section className="company-info">
        <div>
          <h2>Who We Are</h2>
          <p>
            Founded in 2025, Zugo Private Limited unites creative strategists, designers, and digital marketing experts with deep industry insight. We specialize in brand development, digital marketing, creative design, and marketing consulting.
            Our collaborative approach, data-driven mindset, and dedication to delivering measurable results have helped us craft impactful campaigns for clients across diverse industries.

          </p>
          
          
        
          <h2>What We Do</h2>
          <p>
            ● Strategic Marketing & Brand Positioning
            </p>

            <p>● Digital Advertising (Google, Meta, LinkedIn, and more)</p>

            <p>● Social Media Management & Campaigns </p>

            <p>● SEO & Content Marketing </p>

            <p>● Email Marketing & Automation </p>

            <p>● Online and Offline Marketing</p>
          
            <p>● Affiliate and Influencer Marketing</p>

            <p>● Real Estate Marketing</p>

            <p>● Product Marketing & Launch Strategy </p>

            <p>● Mobile Marketing</p>

            <p>● Brand Marketing and Brand Promotion</p>

            <p>● Creative Designing and Marketing </p>

            <p>● Web Development & Conversion Optimization
We work with startups, scale-ups, and established companies across industries from tech and e-commerce to lifestyle and B2B services   to help them unlock new levels of growth.
 </p>

            <p>● Let’s build something great,together.</p>

          
        </div>
      </section>

      <center> <div className="contact-info">
          <h2>Our Office</h2>
          <p><span className="highlight">Industry :</span> Marketing Services </p>
          <p><span className="highlight">Founded :</span> 2025 </p>
          <p><span className="highlight">Headquatres :</span> Tiruppur, Tamilnadu</p>
          <p><span className="highlight">Address :</span>11(3), PN Road 4th Street, Kumarnagar , Tiruppur , Tamilnadu 641602, India</p>
          <p><span className="highlight">Phone :</span> +91 9585542589</p>
          <a
            href="https://www.google.com/maps/place/Olympia+Tech+Park/@13.010454,80.209995"
            target="_blank"
            rel="noopener noreferrer"
            className="map-link"
          >
            📍 View on Google Maps
          </a>
        </div></center>

        <section className="history container">
          <div className="workplace-info">
            <h2>Onsite Workplace</h2>
            <p>At Zugo, we believe that collaboration, creativity, and communication thrive best when we share space and energy together. As part of our commitment to maintaining a dynamic and connected work culture, Zugo follows an onsite working policy designed to support productivity.</p>
            <br />
            <h4>Featured benefits</h4>
            
            <p>● Free Meals</p>
            <p>● Mental Health Benefits</p>
            </div>
        </section>

        


      {/* Call to action */}
      <section className="about-cta">
        <h2>Discover how Zugo can transform your business</h2>
        <a href="/contact" className="cta-btn">Contact Us</a>
      </section>

    </div>
  );
}
