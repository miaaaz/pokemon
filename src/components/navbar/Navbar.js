import React, {useState, useEffect} from 'react'
import Pokebrand from '../../images/pokemon_logo_PNG6.png'
import './Navbar.css'

const TopNavBar = () => {

  return (
      <nav className="navbar navbar-expand-lg shadow-sm rounded">
        <div className="container">
          <a className="navbar-brand" href="#">
            <img src={Pokebrand} className={"nav-logo"}/>
          </a>

          <button className="navbar-toggler" type="button"
                  data-toggle="collapse" data-target="#navbarText"
                  aria-controls="navbarText" aria-expanded="false"
                  aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"/>
          </button>

          <div className="collapse navbar-collapse" id="navbarText">
            {/* Empty gap */}
            <ul className="navbar-nav mr-auto">
            </ul>

            <span className="navbar-text">
              Sign in
            </span>

          </div>
        </div>

      </nav>
  )
}

export default TopNavBar