import React, { useState } from "react";

function NewReviewForm({ id, addReview, reviews, setReviews , name, artist}) {

  const [post, setPost] = useState("")
  const [rating, setRating] = useState("1")
  
  const [user, setUser] = useState(1)


  function submitReview(event) {
    event.preventDefault()
    
    const formData = {
      post: post,
      rating: rating,
      album: {spotify:id, name:name, artist:artist},
      user_id: user
    }
    
    
    fetch("http://localhost:3000/reviews", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formData)
    })
      .then(response => response.json())
      .then(newReview => {
        addReview(newReview)
      }
      )
  }


  return (
    <div className="new-review-form">
      <h2>Write a New Review</h2>
      <form class="ui form" onSubmit={submitReview}>
        <textarea value={post} onChange={event => setPost(event.target.value)} type="text" name="post" placeholder="Start writing post here" />
        <select class="ui selection dropdown" value={rating} onChange={event => setRating(event.target.value)} >
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
        

        <button class="ui primary button" type="submit">Add Review</button>
      </form>
    </div>
  );
}

export default NewReviewForm;
