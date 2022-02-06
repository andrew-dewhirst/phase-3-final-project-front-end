import React, { useEffect, useState } from "react";

function ReviewList({ trip, reviews }) {

  console.log(trip)
  console.log(reviews)

  return (
    <div>
      <h3>Reviews: {trip.location}</h3>
      {reviews.map((review) => (
        <div key={review.id}>
          <ul>Activities Completed: {review.activities_completed}</ul>
          <ul>Trip Comments: {review.comments}</ul>
          <ul>Review Submitted: {review.created_at.slice(0,-14)}</ul>
          <h4>Trip Rating: {review.rating}</h4>
          <button>Remove Review</button>
        </div>
      ))}
    </div>
  );
}

export default ReviewList;