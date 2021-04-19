import React, {useState} from "react";



function ReviewCard({post,rating, name, artist, id, user, deleteReviews, setReviews, reviews, ratingHandleUpdate, album}) {

  
  const [nrating, setNrating]= useState (rating)

 

    function handleDelete(){
        fetch(`http://localhost:3000/reviews/${id}`, {
      method: "DELETE"
    })
    deleteReviews(id)
    }

    function handleChange(e){
      if(e.target.value=== 1) {
        const orating= 1
        setNrating(orating)
      }

      else if (e.target.value=== 2) {
        const orating= 2
        setNrating(orating)
      }

      else if (e.target.value=== 3) {
        const orating= 3
        setNrating(orating)
      }

      else if (e.target.value=== 4) {
        const orating= 4
        setNrating(orating)
      }

      else if (e.target.value=== 5) {
        const orating= 5
        setNrating(orating)
      }
      
    }


  function handleSubmit(e) {
    e.preventDefault();
    fetch(`http://localhost:3000/reviews/${id}`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
            'accept': 'application/json',
        },
        body: JSON.stringify({rating: setNrating})
    })
    .then(r => r.json())
    .then((ratingObj) => ratingHandleUpdate (ratingObj))
}


 
  return (
    <li className="card">
      <h2>{album}</h2>
      <h5>Artist: {artist}</h5>
      <p>{post}</p>
      <h3>Rating: {rating}</h3>


      <form onSubmit={handleSubmit}>
        <select>
        <input onChange =  {(e)=> handleChange(e)}type="number" value={nrating} />
        <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
        <input  type="submit" /> 
      </form>
      <button onClick={handleDelete}> Delete Review </button>
      
    </li>
  );
}



export default ReviewCard;
