import React from "react";
import { Link } from "react-router-dom";

function TripList({ trip }) {
  return(
    <ul>
      <Link to={`/reviews/${trip.id}`}>{trip.location}</Link>
    </ul>
  )
}

export default TripList;