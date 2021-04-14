import React, {useState} from "react";



function AlbumCard({album, artist,id, image}) {


 
  return (
    <li className="card">
      <h2>{album}</h2>
      <h5>Artist: {artist}</h5>
    </li>
  );
}

export default AlbumCard;
