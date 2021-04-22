
import React, {useState, useEffect} from "react";
import AlbumCard from "./AlbumCard";
import { Link } from "react-router-dom"
import ReviewList from "./ReviewList";



function AlbumList({albums, setAlbums, addReview, setReviews, reviews, searchAlbums, deleteReviews, ratingHandleUpdate}) {

  const albumList= albums.map((album) => {
    return <AlbumCard 
    key={album.id}
    name={album.name}
    artist={album.artist}
    image={album.image}
    id= {album.id}
    addReview={addReview}
    setReviews={setReviews}
    reviews={reviews}
    deleteReviews={deleteReviews}
    ratingHandleUpdate={ratingHandleUpdate}

    />
  })


  return (
        <div class="acard">
    <ol className="cards">
      {albumList}
      </ol>
      </div>

     
  );
}

export default AlbumList;