import React from "react";
import "./about.css";
import sandwichImage2 from "../../assets/images/sandwich2.jpg";

const About = () => {
  return (
    <div className="about-container container">
      <div>
        <p>about breadify</p>
        <h1>Mastering the crust. Perfecting the bite. Every time.</h1>
        <p>
          Dedicated to baking exceptional artisanal bread and crafting
          memorable, flavorful sandwiches for every meal.
        </p>
        <h1>1.2M+</h1>
        <p>Customers served</p>
      </div>
      <div>
        <p>
          Breadify was founded in 2024 to end the era of soggy, plastic-wrapped
          lunch sandwiches. What started as a late-night sourdough experiment
          quickly turned into a dedicated artisanal sandwich kitchen.
        </p>
        <p>
          It was built on a simple belief: bread isn't just a container for
          fillings, it's the soul of the meal. We wanted to blend traditional
          bakery craft with modern convenience, making truly great sandwiches
          accessible with a few taps.
        </p>
        <p>
          Every decision at Breadify starts with one question: "How does this
          serve the people who sit at the table?"—because caring for customers
          means crafting every sandwich with the quality, respect, and warmth a
          neighbor deserves.
        </p>
        <div className="about-right">
          <h1>98%</h1>
          <p>Customer satisfaction</p>
        </div>
      </div>
      <div className="about-image">
        <img src={sandwichImage2} alt="sandwich" />
      </div>
    </div>
  );
};

export default About;
