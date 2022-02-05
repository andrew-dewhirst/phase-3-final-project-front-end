import React, { useEffect, useState } from "react";

function ReviewList({ trip, reviews }) {

  console.log(reviews)

  return (
    <div>
      <h3>{trip.location}</h3>
      {reviews.map((review) => (
          <ul key={review.id}>{review.activities_completed}</ul>
      ))}
    </div>
  );
}

export default ReviewList;