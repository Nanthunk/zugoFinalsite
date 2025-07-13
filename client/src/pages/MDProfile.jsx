import React from "react";
import "./MDProfile.css";
import img from "../assets/Bharath.jpg"; 

const Home = () => {
 return (
  <div className="home-wrapper">
    <div className="home-container">
      <div className="image-side">
        <img
          src={img}
          alt="Office Work"
        />
      </div>
      <div className="content-side">
        <h1>Bharath Raj C.R</h1>
        <p>
          Founder and CEO, Zugo Private Limited
        </p>
      </div>
    </div>

    {/* manager-details div placed right below home-container */}
    <div className="manager-details">
      <p>
        With a dynamic blend of academic excellence and hands-on industry experience, Bharath Raj leads Zugo Private Limited with vision, strategy, and innovation. Holding a Bachelor of Business Administration in Computer Applications (BBA CA), a Master’s in Political Law (MA), and a Master of Science in Digital Marketing from London, Bharath raj brings a unique, cross-disciplinary perspective to the world of marketing.

As the founder and Managing Director of Zugo Private Limited, Bharath raj has built a powerhouse team of skilled professionals, driving success across every facet of marketing — from traditional advertising and branding to cutting-edge digital campaigns, performance marketing, content creation, and beyond.

Under Bharath Raj leadership, Zugo thrives on a client-first philosophy, delivering tailored marketing solutions that blend creativity, data-driven strategy, and measurable results. With a firm belief in continuous growth and innovation, Bharath Raj remains committed to transforming businesses through impactful marketing and lasting brand value.
        </p>
    </div>
  </div>
);

};

export default Home;