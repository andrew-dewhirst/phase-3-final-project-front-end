import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ReviewList from "./ReviewList";
import NewReviewForm from "./NewReviewForm";

function Review({ trips }) {

  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch('http://localhost:9292/reviews')
      .then((r) => r.json())
      .then((review) => setReviews(review));
  }, []);

  const params = useParams()

  const specificTrip = trips.filter((trip) => trip.id == params.id) 
  const specificReview = reviews.filter((review) => review.trip_id == params.id)

  function handleNewReview(newReview) {
    setReviews([...reviews, newReview])
  };

  return(
    <div>
      <ul>
        {specificTrip.map((trip) =>
        <ReviewList
          key={trip.id}
          trip={trip}
          reviews={specificReview}
          />
          )}
      </ul>
      <NewReviewForm handleNewReview={handleNewReview}/>
    </div>
  )
}

export default Review;