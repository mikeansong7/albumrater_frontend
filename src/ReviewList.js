
import React, {useState, useEffect} from "react";
import ReviewCard from "./ReviewCard";
import { Link } from "react-router-dom"



function ReviewList({reviews, deleteReviews, setReviews}) {
  const reviewList= reviews.map((review) => {
    return <ReviewCard 
    key={review.id}
    // user= {review.user.username}
    album={review.album.name}
    artist={review.album.artist}
    post= {review.post}
    rating= {review.rating}
    deleteReviews= {deleteReviews}
    id= {review.id}
    />
  })


  return (
    <div>
    <ul className="cards">
      {reviewList}
      </ul>
      </div>
  );
}

export default ReviewList;