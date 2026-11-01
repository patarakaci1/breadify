
import React, { useState, useEffect } from "react";
import "./HappyMoments.css";

const HappyMoments = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const getFood = async () => {
      try {
        const requests = Array.from({ length: 10 }, (_, i) =>
          fetch(`https://chinese-food-db.p.rapidapi.com/${i + 1}`, {
            method: "GET",
            headers: {
              "x-rapidapi-key": "ee8d628f6cmsh5de295c122cd2a9p100c28jsn7151cacd429c",
              "x-rapidapi-host": "chinese-food-db.p.rapidapi.com",
            },
          })
        );

        const responses = await Promise.all(requests);

        const data = await Promise.all(
          responses.map((response) => {
            if (!response.ok) {
              throw new Error(`API Error: ${response.status}`);
            }
            return response.json();
          })
        );

        setImages(data.map((food) => food.image).filter(Boolean));
      } catch (error) {
        console.error(error);
      }
    };

    getFood();
  }, []);

  return (
    <section className="happy-moments container">
      <h2 className="happy-moments-title">Happy Moments</h2>

      <div className="happy-moments-grid">
        {images.map((image, index) => (
          <img key={index} src={image} alt="Chinese food" />
        ))}
      </div>
    </section>
  );
};

export default HappyMoments;
