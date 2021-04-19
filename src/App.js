
import React, {useState, useEffect, Component} from "react";
import { Switch, Route } from "react-router-dom"
import Header from "./Header";
import Albumpage from "./AlbumPage";
import ReviewPage from "./ReviewPage";
import SpotifyWebApi from 'spotify-web-api-js'
import Login from "./Login";

const spotifyApi = new SpotifyWebApi();

function App() {

 const access= spotifyApi.setAccessToken("BQDVJ2Dn-0Qoo0RVSlZ4FZKrwdjrPVnf8911VG-vYW25ZgRWuBtaElX1CJYPoZY_we8TGFgVF9-QEnCyNwrqeaj8Bl1cWq9Eds-X6I5vVyf2JoTnjXrBzaUgVhTjPh7dQfr1DsB_MN1Ristfrjq6_56IQNDm13oOIFtKbxa-zZV7eiomQUpUFx7PlKEbvp8SYYqK9-tD4qdMr9XH8Wz5L6P4b-Y&refresh_token=AQBeI8oNvor7fiC1wQdtu-7_JXIiK73-9dCF4fhVvYQbQ9O8-JaiVf8BfSW5GsBUkvCFC8LxQJAfKB8CssxmBe4AIiejQ8BlSb1skuVSt5jUcbz-TOxcBuJY9zWIDOV7Jco")

  const [search, setSearch] = useState ("")
  const [reviews, setReviews] = useState([])
  const [albums, setAlbums] = useState([])
  
  

  useEffect(() => {
    fetch ("http://localhost:3000/reviews")
    .then(response => response.json())
    .then(newreviews => {
     setReviews(newreviews)
    })
  }, []
  )

  function ratingHandleUpdate(rObj){
    const ratingHandle= reviews.filter((review) => review.id !== rObj.id)
    const answer= [...ratingHandle, rObj]
    setReviews(answer)
  }

  function addReview(reviewObj){
    const newReviewArray=[...reviews, reviewObj]
    setReviews(newReviewArray)
  }

  function deleteReviews(id) {
    const deleteRev= reviews.filter(review => review.id !== id)
    setReviews(deleteRev)
  }


  function searchAlbums (search){
    spotifyApi.searchAlbums(search, { limit: 10 })
    .then(
      function (data) {
        const searchalbums= data.albums.items.map(album => {return ({name: album.name, image: album.images[0].url, artist: album.artists[0].name, id: album.id })}) ;
        setAlbums([...searchalbums])
      },
      function (err) {
        console.error(err);
      }
    )
    }


  

  
  return (
    <div className="app">
<div>
         <a href='http://localhost:8888'>
             <button>Login in to spotify</button> 
            </a>
      <Header />
      <Albumpage addReview={addReview} search={search} setSearch={setSearch} albums={albums} setAlbums={setAlbums} searchAlbums={searchAlbums} reviews={reviews} deleteReviews={deleteReviews} ratingHandleUpdate={ratingHandleUpdate}/>
      </div>
      
      </div>
  );
}


export default App;



             


    



