import React, {useState, useEffect} from "react";
import AlbumList from "./AlbumList";
import Search from "./Search";
import { Link } from "react-router-dom"
import ReviewList from "./ReviewList";



function AlbumPage({search, setSearch, albums, setAlbums, searchAlbums, addReview, reviews, setReviews, deleteReviews, ratingHandleUpdate}) {


  



  return (
    <main>
      <Search search={search} setSearch={setSearch} searchAlbums={searchAlbums}/>
      <AlbumList albums= {albums} setAlbums= {setAlbums} addReview={addReview} setReviews= {setReviews} reviews={reviews} searchAlbums={searchAlbums} addReview={addReview} ratingHandleUpdate={ratingHandleUpdate} deleteReviews={deleteReviews}/>
      <ReviewList reviews={reviews} setReviews={setReviews} deleteReviews={deleteReviews} ratingHandleUpdate={ratingHandleUpdate} albums={albums} />
    </main>
  );
}

export default AlbumPage;



