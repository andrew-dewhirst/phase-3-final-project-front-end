import React from "react";

function NewReviewForm() {

  function handleSubmit(e) {
    e.preventDefault();
    console.log('testing form')
  }

  return(
    <div>
      <h3>Want to add a new review for this location?</h3>
      <form onSubmit={handleSubmit}>
        <label>
          Activities Completed:
          <input type="text" value="abc" />
        </label>
        <label>
          Trip Comments:
          <input type="text" value="abc" />
        </label>
        <label>
          Review Submitted:
          <input type="text" value="abc" />
        </label>
      </form>
    </div>
  )
}

export default NewReviewForm;