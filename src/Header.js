import React from "react";
import { Link } from "react-router-dom"

function Header() {
  return (
    <div>
    <header>
      <h1>
       <Link to="/"> AlbumRater
        <span className="logo" role="img">
        🎵🎵🎵
        </span>
        </Link>
      </h1>
    </header>
    </div>

  );
}

export default Header;


