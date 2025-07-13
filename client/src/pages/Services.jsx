import React from "react";
import ServiceCard from "../components/ServiceCard";
import "./Services.css";

import digiMark from "../assets/digimrktng.jpg";
import socialMedia from "../assets/socialmedia.jpg";
import webDesign from "../assets/webdsn.jpg";
import webDevelopment from "../assets/webdev.jpg";
import product from "../assets/productmrktng.jpg";
import eMail from "../assets/emailmrktng.jpg";
import sem from "../assets/servengmrktng.jpg";
import mobile from "../assets/mobilemarktng.jpg";
import content from "../assets/cntntmrktg.jpg";
import mobileApp from "../assets/mblappdev.jpg";
import servicePic from "../assets/servicebg.jpg";
import affiliate from "../assets/affilate.jpg"; 
import offline from "../assets/offline.jpg";
import realEstate from "../assets/realestate.jpg";

export default function Services() {
  const services = [
    {  
      image: digiMark,
      title: "Digital Marketing",
      description: "It is the art and science of promoting products or services through digital channels such as websites, social media, search engines, and email. It helps businesses reach wider audiences, engage customers effectively, and measure results in real-time — making marketing more targeted and cost-efficient."
    },
    {
      image: socialMedia,
      title: "Social Media Marketing",
      description: "Involves using platforms like Facebook, Instagram, LinkedIn, and Twitter to promote brands, connect with audiences, and build loyal communities. Sharing engaging content and running targeted ads boost visibility and strengthen customer relationships."
    },
    {
      image: webDesign,
      title: "Web Design",
      description: "The process of creating visually appealing and user-friendly websites. It blends layout, colors, typography, and graphics to ensure an engaging experience for visitors across all devices."
    },
    {
      image: webDevelopment,
      title: "Web Development",
      description: "Building and maintaining websites or web applications. It transforms design into functional sites by using code, ensuring everything works smoothly for users."
    },
    {
      image: product,
      title: "Product Marketing",
      description: "Focuses on positioning, launching, and promoting a product to the right audience. It bridges the gap between product development and sales."
    },
    {
      image: eMail,
      title: "Email Marketing",
      description: "A direct way to reach customers through personalized emails. It helps businesses share updates, promote products, and build long-term relationships."
    },
    {
      image: sem,
      title: "Search Engine Marketing (SEM)",
      description: "A digital marketing strategy that uses paid advertising to increase a website's visibility on search engines like Google."
    },
    {
      image: mobile,
      title: "Mobile Marketing",
      description: "Reaching customers through their mobile devices via SMS, apps, and mobile websites. It allows businesses to engage users on-the-go with personalized offers."
    },
    {
      image: content,
      title: "Content Marketing",
      description: "Creating and distributing valuable content to attract and engage a target audience. It builds brand awareness and drives profitable customer action."
    },
    {
      image: affiliate,
      title: "Affiliate and Influencer Marketing",
      description: "Creating and distributing valuable content to attract and engage a target audience. It builds brand awareness and drives profitable customer action."
    },
    {
      image: offline,
      title: "Online and Offline Marketing",
      description: "Creating and distributing valuable content to attract and engage a target audience. It builds brand awareness and drives profitable customer action."
    },
    {
      image: realEstate,
      title: "Real Estate Marketing",
      description: "Creating and distributing valuable content to attract and engage a target audience. It builds brand awareness and drives profitable customer action."
    },
    {
      image: mobileApp,
      title: "Mobile Application Development",
      description: "Creating apps for mobile devices like smartphones and tablets. It includes designing, coding, testing, and deploying apps to provide seamless user experiences."

    }
  ];

  return (
    <div className="services-page">
      {/* Hero section */}
      <section
        className="services-hero"
        style={{ backgroundImage: `url(${servicePic})` }}
      >

        
        <div  style={{
    backgroundColor: "rgb(255 255 255 / 30%)",
    backdropFilter: "blur(20px)"
  }}>
           <h1 >Our Services</h1>
        <p>● At Zugo Private Limited, we provide end-to-end technology services that help businesses modernize, innovate, and grow.</p>
        <br />
        <p>● We empower businesses to grow, engage, and succeed online through creative marketing strategies and robust web development solutions.</p>
        <br />
        <p>● From digital marketing and web design to development and product marketing, our expert team delivers tailored solutions that drive results.</p>

        </div>

       
      </section>

      {/* Service cards */}
      <section className="service-cards container">
        {services.map((service, index) => (
          <ServiceCard
            key={index}
            image={service.image}
            title={service.title}
            description={service.description}
          />
        ))}
      </section>

     

      {/* Expertise */}
      <section className="expertise container">
        <h2>Why Choose Zugo?</h2>
        <ul>
          <li>✔ Proven expertise in digital transformation & software engineering</li>
          <li>✔ Client-centric approach and transparent delivery</li>
          <li>✔ Agile teams with deep industry experience</li>
          <li>✔ Commitment to innovation, scalability, and security</li>
        </ul>
      </section>

      {/* Call to action */}
      <section className="cta-banner">
        <h2>Let’s build the future together</h2>
        <p>Contact us to discover how we can help transform your business.</p>
        <a href="/contact" className="cta-btn">Get in Touch</a>
      </section>
    </div>
  );
}
