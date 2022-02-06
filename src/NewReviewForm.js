import React, { useState } from "react";
import { useParams } from "react-router-dom";

function NewReviewForm({ handleNewReview }) {

  const [activities, setActivities] = useState("");
  const [comments, setComments] = useState("");
  const [rating, setRating] =useState("");
  const [arrival, setArrival] = useState("");
  const [departure, setDeparture] = useState("");

  const params = useParams()
  console.log(params.id)

  function handleActivitiesChange(event) {
    setActivities(event.target.value);
  };

  function handleCommentsChange(event) {
    setComments(event.target.value);
  };

  function handleRatingChange(event) {
    setRating(event.target.value);
  };

  function handleArrivalChange(event) {
    setArrival(event.target.value);
  };

  function handleDepartureChange(event) {
    setDeparture(event.target.value);
  };

  function handleSubmit(e) {
    e.preventDefault();
    const reviewData = {
      activities_completed: activities,
      comments: comments,
      rating: rating,
      date_arrived: new Date(arrival),
      date_departed: new Date(departure),
      trip_id: params.id,
      user_id: 1,
    };
    fetch("http://localhost:9292/reviews", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(reviewData),
    })
      .then((r) => r.json())
      .then((newReview) => handleNewReview(newReview))
  };

  return(
    <div>
      <h3>Want to add a new review for this location?</h3>
      <form onSubmit={handleSubmit}>
        <label>
          Activities Completed:
          <input type="text" onChange={handleActivitiesChange} value={activities} />
        </label>
        <label>
          Trip Comments:
          <input type="text" onChange={handleCommentsChange} value={comments} />
        </label>
        <label>
          Rating:
          <input type="text" onChange={handleRatingChange} value={rating} />
        </label>
        <label>
          Date Arrived:
          <input type="text" onChange={handleArrivalChange} value={arrival} />
        </label>
        <label>
          Date Departed:
          <input type="text" onChange={handleDepartureChange} value={departure} />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default NewReviewForm;