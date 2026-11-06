import React, { useState, useEffect } from "react";
import "./HappyMoments.css";

const HappyMoments = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const getFood = async () => {
      try {
        const response = await fetch(
          "https://burgers-hub.p.rapidapi.com/burgers",
          {
            method: "GET",
            headers: {
              "x-rapidapi-key":
                "ee8d628f6cmsh5de295c122cd2a9p100c28jsn7151cacd429c",
              "x-rapidapi-host": "burgers-hub.p.rapidapi.com",
            },
          },
        );

        if (!response.ok) {
          throw new Error(`Api error ${response.status}`);
        }

        const data = await response.json();
        console.log(data); // check the structure and the image field name

        const burgers = Array.isArray(data) ? data : data.burgers || [];

        setImages(
          burgers
            .map(
              (burger) =>
                burger.image || burger.images?.[0]?.lg || burger.images?.[0],
            )
            .filter(Boolean)
            .slice(0, 10),
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
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
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
