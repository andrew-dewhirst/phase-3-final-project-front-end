import React, { useEffect, useState } from "react";

function ReviewList({ trip, reviews, handleReviewDelete }) {

  function handleDeleteClick(reviewId) {
    fetch(`http://localhost:9292/reviews/${reviewId}`, {
      method: "DELETE",
    })
      .then((r) => r.json())
      .then(() => handleReviewDelete(reviewId));
  }

  return(
    <div className="container">
      <h2>{trip.location}</h2>
      {reviews.map((review) => (
        <div key={review.id}>
          <ul>Activities Completed: {review.activities_completed}</ul>
          <ul>Trip Comments: {review.comments}</ul>
          <ul>Review Submitted: {review.created_at.slice(0,-14)}</ul>
          <h4>Trip Rating: {review.rating}</h4>
          <button onClick= {() => handleDeleteClick(review.id)} >Remove Review</button>
        </div>
      ))}
    </div>
  );
}

export default ReviewList;