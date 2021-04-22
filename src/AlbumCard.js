import React, {useState} from "react";
import NewReviewForm from "./NewReviewForm"
import ReviewList from "./ReviewList";
import { Link } from "react-router-dom";



function AlbumCard({name, artist,id, image, addReview, setReviews, reviews, ratingHandleUpdate, deleteReviews }) {


 
  return (
 
    <div class="ui cards">
    <li className="card">
      <h2>Album: {name}</h2>
      <h5>Artist: {artist}</h5>
      <img src={image}></img>
     <a href= {`https://open.spotify.com/album/${id}`}>
             <button class="ui secondary button">Listen to Album</button> 
            </a>

      <NewReviewForm addReview= {addReview} reviews= {reviews} setReviews={setReviews} id={id} name={name} artist={artist} />
    </li> 
    </div>

     ) 
}

export default AlbumCard;
