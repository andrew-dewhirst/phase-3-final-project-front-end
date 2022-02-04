import React, { useEffect, useState } from "react";

function ReviewList({ review }) {
  return(
    <ul>
      <h4>{review.activities_completed}</h4>
    </ul>
  )
}

export default ReviewList;