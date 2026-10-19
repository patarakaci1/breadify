import React from "react";

export const Card1 = ({ review }) => {
  const {
    text,
    overallRating,
    foodRating,
    serviceRating,
    userNickname,
    submittedDate,
  } = review;
  return (
    <div className="review-card">
      <p>{text}</p>
      <h2>{userNickname}</h2>
      <p>overall rating:{overallRating}</p>
      <p>food rating:{foodRating}</p>
      <p> service rating:{serviceRating}</p>
      <h4>{submittedDate}</h4>
    </div>
  );
};

export default Card1;
