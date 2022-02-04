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
  console.log(params.id)
  console.log(reviews)

  const locationReview = reviews.filter((review) => review.trip_id === params.id)
  console.log(locationReview)

  return(
    <div>
      <ul>
        {reviews.map((review) =>
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