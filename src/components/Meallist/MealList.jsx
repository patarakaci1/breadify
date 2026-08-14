import React, { useEffect, useState } from "react";
import Card from "../card/Card";

const API_URL = "https://www.themealdb.com/api/json/v1/1/search.php?s=sandwich";

// TheMealDB has no price/calorie/protein/badge fields, so we derive
// deterministic placeholder values per meal id until real menu data exists.
const mockExtras = (idMeal) => {
  const seed = parseInt(idMeal, 10);
  const price = (9 + (seed % 12) + 0.5).toFixed(2);
  const calories = 350 + (seed % 6) * 50;
  const protein = 20 + (seed % 5) * 6;
  const badge =
    seed % 3 === 0 ? "Popular" : seed % 3 === 1 ? "New" : "Chef's pick";
  return {
    price: `$${price}`,
    calories: `${calories} kcal`,
    protein: `${protein}g protein`,
    badge,
  };
};

const truncate = (text, max = 110) =>
  text && text.length > max ? text.slice(0, max).trim() + "…" : text;

const INITIAL_VISIBLE = 3;

const MealList = () => {
  const [meals, setMeals] = useState([]);
  const [cart, setCart] = useState({});
  const [status, setStatus] = useState("loading"); // loading | error | ready
  const [visibleCount, setVisibleCount] = useState(INITIAL_VISIBLE);

  useEffect(() => {
    let cancelled = false;

    fetch(API_URL)
      .then((res) => {
        if (!res.ok) throw new Error(`Request failed: ${res.status}`);
        return res.json();
      })
      .then((data) => {
        if (cancelled) return;
        setMeals(data.meals || []);
        setStatus("ready");
      })
      .catch(() => {
        if (!cancelled) setStatus("error");
      });

    return () => {
      cancelled = true;
    };
  }, []);

  const toggleCart = (id) => {
    setCart((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  if (status === "loading") return <p>Loading sandwiches…</p>;
  if (status === "error")
    return <p>Couldn't load sandwiches. Try again later.</p>;
  if (meals.length === 0) return <p>No sandwiches found.</p>;

  const visibleMeals = meals.slice(0, visibleCount);
  const hasMore = visibleCount < meals.length;
  const isExpanded =
    visibleCount >= meals.length && meals.length > INITIAL_VISIBLE;

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
      {visibleMeals.map((meal) => {
        const extras = mockExtras(meal.idMeal);
        return (
          <Card
            key={meal.idMeal}
            image={meal.strMealThumb}
            title={meal.strMeal}
            description={truncate(meal.strInstructions)}
            badge={extras.badge}
            calories={extras.calories}
            protein={extras.protein}
            price={extras.price}
            inCart={!!cart[meal.idMeal]}
            onToggleCart={() => toggleCart(meal.idMeal)}
          />
        );
      })}

      {hasMore && (
        <button
          onClick={() => setVisibleCount(meals.length)}
          style={{
            alignSelf: "center",
            marginTop: "8px",
            padding: "10px 20px",
            borderRadius: "8px",
            border: "1px solid #ddd",
            background: "#fff",
            fontWeight: 600,
            cursor: "pointer",
          }}
        >
          Show more ({meals.length - visibleCount})
        </button>
      )}

      {isExpanded && (
        <button
          onClick={() => setVisibleCount(INITIAL_VISIBLE)}
          style={{
            alignSelf: "center",
            marginTop: "8px",
            padding: "10px 20px",
            borderRadius: "8px",
            border: "1px solid #ddd",
            background: "#fff",
            fontWeight: 600,
            cursor: "pointer",
          }}
        >
          Show less
        </button>
      )}
    </div>
  );
};

export default MealList;
