import React from "react";
import "./Marketing.css";
import marketingpic from "../assets/marketing.jpg"; 


const Home = () => {
 return (
  <div className="marketing">
    <div className="marketing-container">
      
        <img
          src={marketingpic}
          alt="Office Work"
        />
     
        <h1>Marketing</h1>
        
      
    </div>

    {/* manager-details div placed right below home-container */}
    <div className = "marketing-details">
      <p>
        At <b>ZUGO Private Limited,</b> we understand that marketing isn’t just about promoting products — it’s about building meaningful connections, telling your unique story, and driving real business growth.

As your trusted marketing partner, we’re here to help your brand stand out in an increasingly competitive digital world. Here’s how we make that happen:

</p>
    </div>

    <div className="marketing-strategies">
        <h1>Our Strategies</h1>
        <p>● We collaborate closely with you to create data-driven marketing strategies tailored to your industry, audience, and business goals ensuring every effort delivers measurable results.</p>
        <p>● From content creation to campaign management, we help you engage your audience, build loyal communities, and grow your brand presence across platforms like Facebook, Instagram, LinkedIn, and beyond.</p>
        <p>● We craft compelling, search-optimized content that attracts, informs, and converts helping your business appear where it matters most and stay ahead of the competition.</p>
        <p>● We design and manage targeted ad campaigns that reach the right audience at the right time, maximizing your return on investment across Google Ads, Meta Ads, and other networks.</p>
        <p>● Your brand is more than a logo it’s an experience. Our creative team helps shape and refine your brand identity, ensuring consistency and impact across every touchpoint.</p>
        <p>● We have more Knowledge and Ideas in End-to-end Marketing Solutions under one roof</p>

    </div>

    <div className="marketing-contact">
        <center>
        <h1>Ready to get started?</h1>
        <p>Contact us today and discover what makes Zugo the right marketing partner for your business success.</p>
        <button> <a href="/contact">Contact Us</a> </button>
        </center>
    </div>
  </div>
);

};

export default Home;