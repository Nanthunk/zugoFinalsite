import React from "react";

export default function ServiceCard({ image, title, description }) {
  return (
    <div className="service-card">
      <img src={image} alt={title} />
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
}
