import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import NavBar from "./NavBar";
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

  function handleReviewDelete(deletedReview) {
    const updatedReviews = reviews.filter((review) => review.id !== deletedReview)
    setReviews(updatedReviews);
  }

  return(
    <div>
      <NavBar />
      <ul id="review">
        {specificTrip.map((trip) =>
        <ReviewList
          key={trip.id}
          trip={trip}
          reviews={specificReview}
          handleReviewDelete={handleReviewDelete}
          />
        )}
      </ul>
      <NewReviewForm handleNewReview={handleNewReview}/>
    </div>
  )
}

export default Review;