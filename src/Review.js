import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ReviewList from "./ReviewList";

function Review() {

  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch('http://localhost:9292/reviews')
      .then((r) => r.json())
      .then((review) => setReviews(review));
  }, []);

  const params = useParams()

  const locationReview = reviews.filter((review) => review.trip_id == params.id) 

  return(
    <div>
      <ul>
        {locationReview.map((review) =>
        <ReviewList
          key={review.id}
          review={review}
          />
          )}
      </ul>
    </div>
  )
}

export default Review;