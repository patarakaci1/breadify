import React from "react";
import "./Home.css";
import Hero from "../../components/Hero/Hero";
import About from "../../components/about/About";
import MealList from "../../components/Meallist/MealList";
const Home = () => {
  return (
    <div>
      <Hero />
      <About />
      <MealList />
    </div>
  );
};

export default Home;
