
import React, {useState, useEffect} from "react";
import AlbumCard from "./AlbumCard";
import { Link } from "react-router-dom"



function AlbumList({albums, setAlbums}) {

  const albumList= albums.map((album) => {
    return <AlbumCard 
    key={album.id}
    album={album.name}
    artist={album.artist}
    image={album.image}
    id= {album.id}
    />
  })


  return (
    <div>
    <ul className="cards">
      {albumList}
      </ul>
      </div>
  );
}

export default AlbumList;