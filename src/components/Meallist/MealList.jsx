import React, { useEffect, useState } from "react";
import Card from "../card/Card";
import Constants from "../../constants/Constants";
import "./MealList.css";
import tomato from "../../assets/images/tomato.jpg";

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

const MealList = () => {
  const [meals, setMeals] = useState([]);
  const [cart, setCart] = useState({});
  const [status, setStatus] = useState("loading");
  const [visibleCount, setVisibleCount] = useState(Constants.INITIAL_VISIBLE);
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    let cancelled = false;

    fetch(Constants.API_URL)
      .then((res) => {
        if (!res.ok) {
          throw new Error(`Request failed: ${res.status}`);
        }

        return res.json();
      })
      .then((data) => {
        if (cancelled) return;

        setMeals(data.meals || []);
        setStatus("ready");
      })
      .catch(() => {
        if (!cancelled) {
          setStatus("error");
        }
      });

    return () => {
      cancelled = true;
    };
  }, []);

  const toggleCart = (id) => {
    setCart((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  if (status === "loading") {
    return <p className="meal-message">Loading sandwiches…</p>;
  }

  if (status === "error") {
    return (
      <p className="meal-message">Couldn't load sandwiches. Try again later.</p>
    );
  }

  if (meals.length === 0) {
    return <p className="meal-message">No sandwiches found.</p>;
  }

  const mealsWithExtras = meals.map((meal) => ({
    ...meal,
    extras: mockExtras(meal.idMeal),
  }));

  const filteredMeals =
    filter.toLowerCase() === "all"
      ? mealsWithExtras
      : mealsWithExtras.filter(
          (meal) => meal.extras.badge.toLowerCase() === filter.toLowerCase(),
        );

  const visibleMeals = filteredMeals.slice(0, visibleCount);

  const hasMore = visibleCount < filteredMeals.length;

  const isExpanded =
    visibleCount >= filteredMeals.length &&
    filteredMeals.length > Constants.INITIAL_VISIBLE;

  return (
    <div className="meal-list">
      <div className="tomato">
        <img src={tomato} alt="tomato" />
      </div>
      <div className=" container">
        <h1 className="meal-title">
          Built for <span>YOU</span>
        </h1>

        <p className="meal-subtitle">
          Crafted with premium ingredients and layered to perfection, every bite
          is a masterpiece of flavor.
        </p>
      </div>
      <div className="meal-filters container">
        {Constants.FILTERS.map((f) => (
          <button
            key={f}
            onClick={() => {
              setFilter(f);
              setVisibleCount(Constants.INITIAL_VISIBLE);
            }}
            className={`filter-button ${
              filter.toLowerCase() === f.toLowerCase() ? "active" : ""
            }`}
          >
            {f.toLowerCase() === "all" ? "All" : f}
          </button>
        ))}
      </div>

      {filteredMeals.length === 0 ? (
        <p className="meal-message">No sandwiches match this filter.</p>
      ) : (
        visibleMeals.map((meal) => (
          <Card
            key={meal.idMeal}
            image={meal.strMealThumb}
            title={meal.strMeal}
            description={truncate(meal.strInstructions)}
            badge={meal.extras.badge}
            calories={meal.extras.calories}
            protein={meal.extras.protein}
            price={meal.extras.price}
            inCart={!!cart[meal.idMeal]}
            onToggleCart={() => toggleCart(meal.idMeal)}
          />
        ))
      )}

      {hasMore && (
        <button
          className="show-more-button"
          onClick={() => setVisibleCount(filteredMeals.length)}
        >
          Show more ({filteredMeals.length - visibleCount})
        </button>
      )}

      {isExpanded && (
        <button
          className="show-less-button"
          onClick={() => setVisibleCount(Constants.INITIAL_VISIBLE)}
        >
          Show less
        </button>
      )}
    </div>
  );
};

export default MealList;
