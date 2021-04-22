import React, {useState} from "react";
import { Link, Switch, Route } from "react-router-dom"
import Logout from "./Logout.js"


function ReviewCard({post,rating, name, artist, id, user, deleteReviews, setReviews, reviews, ratingHandleUpdate, album}) {

  
  const [nrating, setNrating]= useState (rating)
  const [fav, setFav]= useState(false)

  
  function handleFav(){
    setFav(!fav)
  }

    function handleDelete(){
        fetch(`http://localhost:3000/reviews/${id}`, {
      method: "DELETE"
    })
    deleteReviews(id)
    }

    

    function handleChange(e){
      e.preventDefault()
      setNrating(e.target.value)
    
      }


  function handleSubmit(e) {
    e.preventDefault();
    fetch(`http://localhost:3000/reviews/${id}`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
            'accept': 'application/json',
        },
        body: JSON.stringify({rating: nrating})
    })
    .then(r => r.json())
    .then((ratingObj) =>{ ratingHandleUpdate (ratingObj)
      setNrating("")
     } )
}


 
  return (
    <div>
    <div>
    <div>
    <li className="reviewcard">
      <h2>{album}</h2>
      <h5>Artist: {artist}</h5>
      <p>{post}</p>
      <h3>Rating: {rating}</h3>


      <form onSubmit={handleSubmit} onChange =  {(e)=> handleChange(e)}>
        <select class="ui selection dropdown">
        <input type="number"  />
        <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
        <button class=" ui button" type="submit">  Change Rating </button> 
      </form>
      <button class="ui primary button" onClick={handleDelete}> Delete Review </button>
      {fav ? (
          <p class="ui primary button" onClick= {handleFav} className="emoji-button instock">⭐️</p>
        ) : (
          <p class="ui primary button" onClick= {handleFav} className="emoji-button not instock">★</p>
        )}
      
    </li>
    

    </div>
  
      
    </div>
  

    </div>
  );
}



export default ReviewCard;
