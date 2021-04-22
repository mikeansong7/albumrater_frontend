
import React, {useState, useEffect, Component} from "react";
import { Link, Switch, Route } from "react-router-dom"
import Header from "./Header";
import Albumpage from "./AlbumPage";
import ReviewPage from "./ReviewPage";
import SpotifyWebApi from 'spotify-web-api-js'
import 'semantic-ui-css/semantic.min.css'
import './App.css'
import Logout from "./Logout"


const spotifyApi = new SpotifyWebApi();

function App() {

 const access= spotifyApi.setAccessToken("BQAWWRuxI0Ff-yegh_Zms0fF68QUwjft0fdkLeve7YJ3pg6y03j_rGyOIezIiQ8TW_o1JTr3JiZfIkcqcNXTrUOH299J1TPH6Luy_ZBLsWEC7z-Y2cWmT9L2UHD16zxh1UMLk2BgX9oEK-EyX_2RBP5ZX0U8pgrH2EzbFTsGfYjsojCt6EK9DGpVt0BVEjRwepcqQgKcp7EuWxwlU2Tje31bQ8w&refresh_token=AQA3trH-mWV7OXttwQmu3wj9hQojuTY6ZBUoK7YNFIjW7RTRaw0e1Lj5u04f-eMuXtOGG6JxbpimcgX2vTafc21466C-DszQtc4gFTJYUI2iTXpp7iXr_4POJ6sZSuutS48")

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
    spotifyApi.searchAlbums(search, { limit: 12 })
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
    <div >
    <div className="app">
      <a href='http://localhost:8888'>
             <button class="ui button">Login in to spotify</button> 
            </a>

    <div>
        
      <Header />
      <Albumpage addReview={addReview} search={search} setSearch={setSearch} albums={albums} setAlbums={setAlbums} searchAlbums={searchAlbums} reviews={reviews} deleteReviews={deleteReviews} ratingHandleUpdate={ratingHandleUpdate}/>
      {/* <Switch>
      <Route exact path="/logout">
          <Logout />
     </Route>
      </Switch> */}
     
      </div>
      </div>
      </div>
  );
}


export default App;



             


    



