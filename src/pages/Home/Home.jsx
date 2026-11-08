
import React from "react";
import "./Home.css";

import Hero from "../../components/Hero/Hero";
import About from "../../components/about/About";
import MealList from "../../components/Meallist/MealList";
import Review from "../../components/reviewPage/Review";
import HappyMoments from "../../components/end/HappyMoments";
import Footer from "../../components/footer/Footer";
const Home = () => {
  return (
    <div>
      <div id="home">
        <Hero />
      </div>

      <div id="about">
        <About />
      </div>

      <div id="rates">
        <MealList />
      </div>

      <div id="reviews">
        <Review />
      </div>
       <div id="moments">
        <HappyMoments />
      </div>
    <Footer/>
    </div>
  );
};

export default Home;
