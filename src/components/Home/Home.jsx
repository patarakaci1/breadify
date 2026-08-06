import React from "react";
import sandwichImage from "../../assets/sandwich.jpg";
import "./Home.css";

const Home = () => {
  return (
    <div>
      <div className="home-container container">
        <div className="hero-text">
          <h1 className="title">
            FAST FOOD THAT'S ACTUALLY <span className="good">GOOD</span> FOR YOU
          </h1>
          <p>
            Freshly crafted sandwiches made with premium ingredients for every
            craving.
          </p>
          <div className="hero-buttons">
            <button className="btn-primary">Explore Menu →</button>
            <button className="btn-secondary">Our Story</button>
          </div>
        </div>
        <div className="hero-image">
          <img src={sandwichImage} alt="sandwich" />
        </div>
      </div>
      {/* second container with overlay */}
      <div className="hero-container container">
        <div className="hero-overlay">
          <p>Order Now</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
