import React from "react";
import "./Designing.css";
import designingpic from "../assets/img3.avif"; 


const Home = () => {
 return (
  <div className="designing">
    <div className="designing-container">
      
        <img
          src={designingpic}
          alt="Office Work"
        />
     
        <h1>Designing</h1>
        
      
    </div>

    {/* manager-details div placed right below home-container */}
    <div className = "designing-details">
      <p>
       At <b>Zugo Private Limited,</b> design isn’t just what something looks like — it’s how it feels, how it communicates, and how it connects your brand with people.

We combine creativity, strategy, and deep understanding of your audience to craft designs that do more than catch the eye — they build trust, deliver your message, and drive results.
</p>
    </div>

    <div className="designing-ideas">
        <h1>Our Designing Ideas</h1>
        <p>● Your brand starts with a story — and we help you tell it through compelling logos, color palettes, and visual guidelines that truly reflect who you are.</p>
        <p>● From brochures and business cards to banners and social media graphics, we design visual assets that stay true to your brand and speak to your audience.</p>
        <p>● A beautiful interface isn’t enough — it must also feel intuitive.
We design seamless digital experiences that make your apps and websites easy, engaging, and delightful to use.</p>
        <p>● We blend creativity and strategy to create packaging designs that catch attention and communicate your brand promise.</p>

    </div>

    <div className="designing-contact">
        <center>
        <h1>Ready to get started?</h1>
        <p>Contact us today and discover what makes Zugo the right Designing partner for your business success.</p>
        <button> <a href="/contact">Contact Us</a> </button>
        </center>
    </div>
  </div>
);

};

export default Home;