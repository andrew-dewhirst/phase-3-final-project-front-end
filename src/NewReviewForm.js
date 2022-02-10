import React, { useState } from "react";
import { useParams } from "react-router-dom";

function NewReviewForm({ handleNewReview }) {

  const [activities, setActivities] = useState("");
  const [comments, setComments] = useState("");
  const [rating, setRating] =useState("");
  const [arrival, setArrival] = useState("");
  const [departure, setDeparture] = useState("");

  const params = useParams()

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
    <div className="container">
      <h3>Want to add a new review for this location?</h3>
      <form id="form" onSubmit={handleSubmit}>
        <label>
          Activities Completed:
          <input type="text" placeholder="Activities..." onChange={handleActivitiesChange} value={activities} />
        </label>
        <label>
          Trip Comments:
          <input type="text" placeholder="Additional comments..." onChange={handleCommentsChange} value={comments} />
        </label>
        <label>
          Rating:
          <input type="text" placeholder="1 - 5" onChange={handleRatingChange} value={rating} />
        </label>
        <label>
          Date Arrived:
          <input type="text" placeholder="01/01/2022" onChange={handleArrivalChange} value={arrival} />
        </label>
        <label>
          Date Departed:
          <input type="text" placeholder="01/08/2022" onChange={handleDepartureChange} value={departure} />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default NewReviewForm;