import React, {useState, useEffect} from "react";
import AlbumList from "./AlbumList";
import Search from "./Search";
import { Link } from "react-router-dom"

function AlbumPage({search, setSearch, albums, setAlbums, searchAlbums}) {


  // const filteredAlbums= albums.filter(album => {
  //   return album.name.includes(search)
  // })




  return (
    <main>
      {/* <Link to="/reviews"> <button>See all Reviews</button> </Link> */}
      <Search search={search} setSearch={setSearch} searchAlbums={searchAlbums}/>
      <AlbumList albums= {albums} setAlbums= {setAlbums} />
    </main>
  );
}

export default AlbumPage;



// function searchAlb (search){
//   spotifyApi.searchAlbums(search)
//   .then(
//      function (data) { setAlbums(data)
//     console.log(setAlbums)},
//     function (err) {console.error(err);}
//   )
//   }