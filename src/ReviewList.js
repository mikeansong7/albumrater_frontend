
import React, {useState, useEffect} from "react";
import ReviewCard from "./ReviewCard";
import { Link } from "react-router-dom"



function ReviewList({reviews, deleteReviews, setReviews, ratingHandleUpdate, albums }) {
  
  const reviewList= reviews.map((review) => {
    return <ReviewCard 
    key={review.id}
    album={review.album.name}
    artist={review.album.artist}
    rating= {review.rating}
    deleteReviews= {deleteReviews}
    setReviews={setReviews}
    reviews={reviews}
    ratingHandleUpdate= {ratingHandleUpdate}
    post={review.post}
    id={review.id}
    />
    
  })
  


  return (
    <div>
      <h1>Reviews Forum</h1>
    <ul className="cards">
      {reviewList}
      </ul>
   
      </div>
  );
}

export default ReviewList;

 {/* <h3>
    <Link to="/logout"> Logout</Link>
    </h3> */}