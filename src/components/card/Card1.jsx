import React from "react";
import "./Card1.css";

const Card1 = ({ review = {} }) => {
  const {
    overallRating,
    foodRating,
    serviceRating,
    userNickname,
    submittedDate,
    text,
  } = review;

  const date = submittedDate
    ? new Date(submittedDate).toLocaleDateString()
    : "";

  return (
    <div className="review-card">
      <p className="review-card__text">{text}lorem oasmfnasfnaspdnalsnfda;nflaknflafnal</p>

      <div className="review-card__header">
        <h3 className="review-card__name">{userNickname}lasha</h3>
        <span className="review-card__date">{date}02.02.02</span>
      </div>

      <div className="review-card__ratings">
        <span>Overall: {overallRating} ★</span>
        <span>Food: {foodRating} ★</span>
        <span>Service: {serviceRating} ★</span>
      </div>
    </div>
  );
};

export default Card1;
