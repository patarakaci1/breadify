
import React, { useState, useEffect } from "react";
import "./Review.css";
import Card1 from "../../components/card/Card1";

const PAGE_SIZE = 3;
export const Review = () => {
  const [reviews, setReviews] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getReviews = async () => {
      try {
        const response = await fetch(
          "https://opentable-data-api.p.rapidapi.com/restaurant/parche-oakland/reviews?sortBy=newestReview",
          {
            method: "GET",
            headers: {
              'x-rapidapi-key': 'ee8d628f6cmsh5de295c122cd2a9p100c28jsn7151cacd429c',
              "x-rapidapi-host": "opentable-data-api.p.rapidapi.com",
            },
          }
        );

        if (!response.ok) {
          throw new Error("Failed to fetch reviews");
        }

        const data = await response.json();

        console.log(data);

        setReviews(
          Array.isArray(data)
            ? data
            : data.reviews ?? data.data?.reviews ?? data.data ?? []
        );

      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    getReviews();
  }, []);

  const pageCount = Math.ceil(reviews.length / PAGE_SIZE);
  const start = currentPage * PAGE_SIZE;
  const visible = reviews.slice(start, start + PAGE_SIZE);

  if (loading) return <p>Loading reviews...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="review-container container">
      <h2 className="review-title">
        What our customers are saying
      </h2>

      <div className={`reviews-grid count-${visible.length}`}>
        {visible.map((r, i) => (
          <Card1 key={r.id ?? i} review={r} />
        ))}
      </div>

      <div className="pagination">
        {Array.from({ length: pageCount }, (_, i) => (
          <span
            key={i}
            className={i === currentPage ? "active" : ""}
            onClick={() => setCurrentPage(i)}
          />
        ))}
      </div>
    </div>
  );
};

export default Review;
