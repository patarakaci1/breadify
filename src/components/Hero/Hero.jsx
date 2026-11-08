import React from "react";
import sandwichImage from "../../assets/images/sandwich.jpg";
import "./Hero.css";
import spinach from "../../assets/images/spinach.jpg";
const Hero = () => {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };
  return (
    <div>
      <div className="entry-container container">
        <div className="hero-text">
          <h1 className="title">
            FAST FOOD THAT'S ACTUALLY <span className="good">GOOD</span> FOR YOU
          </h1>
          <p>
            Freshly crafted sandwiches made with premium ingredients for every
            craving.
          </p>
          <div className="hero-buttons">
            <button className="btn-primary" onClick={() => scrollTo("rates")}>
              Explore Menu →
            </button>
            <button className="btn-secondary" onClick={() => scrollTo("about")}>
              Our Story
            </button>
          </div>
        </div>
        <div className="hero-image">
          <img src={sandwichImage} alt="sandwich" />
        </div>
        <div className="spinach">
          <img src={spinach} alt="sandwich" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
