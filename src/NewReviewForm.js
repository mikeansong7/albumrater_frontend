import React, { useState } from "react";

function NewReviewForm({ addReview, reviews, setReviews }) {

  const [post, setPost] = useState("")
  const [rating, setRating] = useState("🎧")
  const [album, setAlbum] = useState(1)
  const [user, setUser] = useState(1)

  function submitReview(event) {
    event.preventDefault()
    
    const formData = {
      post: post,
      rating: rating,
      album_id: album,
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
      <form onSubmit={submitReview}>
        <textarea value={post} onChange={event => setPost(event.target.value)} type="text" name="post" placeholder="Start writing post here" />
        {/* <input  value={album} onChange= {event => setAlbum (event.target.value)} type="text" name="album" placeholder="Album" /> */}
        <select value={album} onChange={event => setAlbum(event.target.value)} >
          <option value="1">Made in Lagos</option>
          <option value="2">Graduation</option>
          <option value="3">Limbo</option>
          <option value="4">AstroWorld</option>
          <option value="5">Views</option>
        </select>

        <select value={rating} onChange={event => setRating(event.target.value)} >
          <option value="🎧">🎧</option>
          <option value="🎧🎧">🎧🎧</option>
          <option value="🎧🎧🎧">🎧🎧🎧</option>
          <option value="🎧🎧🎧🎧">🎧🎧🎧🎧</option>
          <option value="🎧🎧🎧🎧🎧">🎧🎧🎧🎧🎧</option>
        </select>

        <button type="submit">Add Review</button>
      </form>
    </div>
  );
}

export default NewReviewForm;