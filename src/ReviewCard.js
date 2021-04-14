import React, {useState} from "react";



function ReviewCard({post,rating,album,artist, user, deleteReviews, id}) {

    function handleDelete(){
        fetch(`http://localhost:3000/reviews/${id}`, {
      method: "DELETE"
    })
    deleteReviews(id)
    }

    // function handleUpdate

 
  return (
    <li className="card">
      <h2>{album}</h2>
      <h5>Artist: {artist}</h5>
      <p>{post}</p>
      <h3>Rating: {rating}</h3>
      <h6>{user}</h6>
      <button onClick={handleDelete}> Delete Review </button>
      <button > Update Review </button>

    </li>
  );
}

export default ReviewCard;
