
import React, {useState, useEffect, Component} from "react";
import { Switch, Route } from "react-router-dom"
import Header from "./Header";
import Albumpage from "./AlbumPage";
import ReviewPage from "./ReviewPage";
import SpotifyWebApi from 'spotify-web-api-js'
import Login from "./Login";

const spotifyApi = new SpotifyWebApi();

function App() {

  spotifyApi.setAccessToken("BQDzFaKjPUe4owzrlWQcZOK5DIDeDfs_qBVbXKI3_BUnLgGsR6Jo1xS3d607RBpAyXEZIrVOdC6EuholfAGXaiyZq4DtFQE39lfF-cjL7TDoeLlvkCmr0bDnft0URYagiJpcRFQcHTYTjUrdAfPYeQoGnZVFNgDwoZ5PjzzTrxnTAOuTynBUvkGeeB2ElG6L_kDgNulnNpNtii5j7SOn3_LRjTI&refresh_token=AQBHQ3Aq3jykfSiD0EOJQxmDDmxioofm6bMKC7EpvAsbdBtKs1B-bTGvAn5XUvl0RJ6ASRK1m8s6UmhbFbSX4varCncxDH_1XUmw6Fc7JfDQlkmwh77N1p0t2tEZHolWAEE")

  const [search, setSearch] = useState ("")
  const [reviews, setReviews] = useState([])
  const [albums, setAlbums] = useState([])
  const [token, setToken] = useState("")

  useEffect(() => {
    fetch ("http://localhost:3000/reviews")
    .then(response => response.json())
    .then(newreviews => {
      setReviews(newreviews)
    })
  }, []
  )

  function addReview(reviewObj){
    const newReviewArray=[...reviews, reviewObj]
    setReviews(newReviewArray)
  }

  function deleteReviews(id) {
    const deleteRev= reviews.filter(review => review.id !== id)
    setReviews(deleteRev)
  }


  function searchAlbums (search){
    spotifyApi.searchAlbums(search).then(
      function (data) {
        setAlbums(data);
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
      <Albumpage search={search} setSearch={setSearch} albums={albums} setAlbums={setAlbums} searchAlbums={searchAlbums}/>
      <ReviewPage addReview={addReview} reviews={reviews} setReviews={setReviews} deleteReviews={deleteReviews}/>
      </div>
      </div>
  );
}


export default App;



             
    {/* </div>
<label htmlFor="search">Search Albums:</label>
      <input
        type="text"
        id="search"
        value= {search}
        placeholder="Type a name to search..."
        onChange={updateSearch}
      />
<div> */}
       {/* <Switch>
         <Route>
           <Login exact path="/"></Login>
         </Route>
         <Route exact path="/albums">
         <Header />
        <Albumpage search={search} setSearch={setSearch} albums={albums} setAlbums={setAlbums} />
        </Route>
        <Route exact path="/reviews">
        <Header />
      <ReviewPage addReview={addReview} reviews={reviews} setReviews={setReviews} deleteReviews={deleteReviews}/>
      </Route>
      {/* <Route path="*">
      <h1>404 not found</h1>
      </Route> */}
      {/* </Switch> */} 




      // console.log(search, data)


    



