import React from "react";
import "./InfoSection.css";

function InfoSection({ title, subText, subText2, image, imgAlt }) {
  return (
    <section className="infoContainer">
      <article className="infoHeader">
        <header>{title}</header>
        <p>{subText}</p>
        <p>{subText2}</p>
      </article>

      <aside className="imageContainer">
        <img
          src={
            image ||
            "https://images.unsplash.com/photo-1525434280327-e525e03f17ef?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
          }
          alt={imgAlt}
        />
      </aside>
    </section>
  );
}

export default InfoSection;
