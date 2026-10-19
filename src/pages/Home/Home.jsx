import React from "react";
import "./Home.css";
import Hero from "../../components/Hero/Hero";
import About from "../../components/about/About";
import MealList from "../../components/Meallist/MealList";
import Card1 from "../../components/card/Card1";
const Home = () => {
  return (
    <div>
      <Hero />
      <About />
      <MealList />
      <Card1 />
    </div>
  );
};

export default Home;
