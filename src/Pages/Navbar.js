import React from 'react'
import {Link} from 'react-router-dom'

export const Navbar = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <a class="navbar-brand" href="#">TravelDiary</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
  
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item active">
          <Link className="nav-link" to="/Home">Home</Link>
        </li>
        <li class="nav-item">
          <Link className="nav-link"to="/aboutus">AboutUs</Link>
        </li>
        <li class="nav-item">
          <Link className="nav-link"to="/contactus">Contactus</Link>
        </li>
        <li class="nav-item">
          <Link className="nav-link"to="/simpleform">Review</Link>
        </li>

      </ul>
      
    </div>
  </nav>
  )
}
