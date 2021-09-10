import React  from 'react'
import Pokebrand from '../../images/pokemon_logo_PNG6.png'
import './Navbar.css'
import {Link} from "react-router-dom";

const TopNavBar = () => {

  return (
      <nav className="navbar navbar-expand-lg shadow-sm rounded">
        <div className="container">
          <Link className="navbar-brand" to="/">
            <img src={Pokebrand} className={"nav-logo"}/>
          </Link>

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

            <ul className="navbar-nav ml-auto">

              {/*<li className="nav-item">*/}
              {/*  <span className="navbar-text">*/}
              {/*    Sign in*/}
              {/*  </span>*/}
              {/*</li>*/}

              <li className="nav-item">
                <Link
                    to={"/pocket"}
                    className="nav-link btn"
                >
                  My Pocket
                </Link>
              </li>
            </ul>





          </div>
        </div>

      </nav>
  )
}

export default TopNavBar