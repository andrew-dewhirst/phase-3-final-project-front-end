import React, { useEffect, useState } from "react";

function TripList({ trip }) {
  return(
    <ul>
      <h4>{trip.location}</h4>
    </ul>
  )
}

export default TripList;