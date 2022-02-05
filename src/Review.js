import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ReviewList from "./ReviewList";

function Review({ trips }) {

  const params = useParams()

  const locationReview = trips.filter((trip) => trip.id == params.id) 

  return(
    <div>
      <ul>
        {locationReview.map((trip) =>
        <ReviewList
          key={trip.id}
          trip={trip}
          reviews={trip.reviews}
          />
          )}
      </ul>
    </div>
  )
}

export default Review;