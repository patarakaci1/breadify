import React, { useState } from "react";
import "./Review.css";
import Card1 from "../../components/card/Card1";

const PAGE_SIZE = 3;

// 7 reviews, replace with real data later
const reviews = Array.from({ length: 7 }, (_, i) => ({
  id: i,
  userNickname: `User ${i + 1}`,
  submittedDate: "2002-02-02",
  text: `Review number ${i + 1}. Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
  overallRating: 5,
  foodRating: 5,
  serviceRating: 4,
}));

export const Review = () => {
  const [currentPage, setCurrentPage] = useState(0);

  const pageCount = Math.ceil(reviews.length / PAGE_SIZE);
  const start = currentPage * PAGE_SIZE;
  const visible = reviews.slice(start, start + PAGE_SIZE);

  return (
    <div className="review-container container">
      <h2 className="review-title">What our customers saying</h2>

      <div className={`reviews-grid count-${visible.length}`}>
        {visible.map((r) => (
          <Card1 key={r.id} review={r} />
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