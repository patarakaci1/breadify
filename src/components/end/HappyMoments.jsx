import React, { useState, useEffect } from "react";
import "./HappyMoments.css";

const HappyMoments = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const getFood = async () => {
      try {
        const response = await fetch(
          "https://www.themealdb.com/api/json/v1/1/search.php?s=sandwich",
        );

        if (!response.ok) {
          throw new Error(`Api error ${response.status}`);
        }

        const data = await response.json();

        setImages(
          (data.meals || [])
            .map((meal) => meal.strMealThumb)
            .filter(Boolean)
            .slice(0, 8),
        );
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
        {images.map((images, index) => (
          <img
            key={index}
            src={images}
            alt="Chinese food"
            referrerPolicy="no-referrer"
            loading="lazy"
          />
        ))}
      </div>
    </section>
  );
};

export default HappyMoments;
