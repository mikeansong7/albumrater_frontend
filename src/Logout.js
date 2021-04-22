import React from "react";
import { Link, Switch, Route } from "react-router-dom"
import { Image } from "semantic-ui-react"


function Logout() {
  return (


<div>
   
    <div>

    <h1>
    You have successfully been logged out!
    </h1>

     <a href='http://localhost:3001'>
    <button class="ui primary button">Return to Main Menu</button> 
    </a> 
    </div>

    </div>

   
  );
}

export default Logout;