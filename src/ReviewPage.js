import React, {useState} from "react";
import AlbumList from "./AlbumList";
import Search from "./Search";
import NewReviewForm from "./NewReviewForm";
import ReviewList from "./ReviewList";

function ReviewPage({reviews, setReviews, addReview, deleteReviews}) {




  return (
    <main>
      <NewReviewForm addReview= {addReview} reviews= {reviews} setReviews={setReviews} />
      <ReviewList reviews={reviews} setReviews={setReviews} deleteReviews={deleteReviews}/>
    </main>
  );
}

export default ReviewPage;