import React  from 'react'
import Pokebrand from '../../images/pokemon_logo_PNG6.png'
import ball from '../../images/ultra-ball.png'
import './Navbar.css'
import {Link} from "react-router-dom";

const TopNavBar = () => {

  return (
      <nav className="navbar navbar-expand-lg shadow-sm rounded">
        <div className="container">
          <Link className="navbar-brand" to="/">
            <img src={Pokebrand} className={"nav-logo"} alt={"pokeball"}/>
          </Link>


          <div className="" id="navbarText">
            {/* Empty gap */}
            <ul className="navbar-nav mr-auto">
            </ul>

            <ul className="navbar-nav ml-auto">


              <li className="nav-item">

                <Link
                    to={"/pocket"}
                    className="nav-link btn"
                >
                  <img src={ball}
                       className="card-img-icon"
                       alt="pokeball"/>
                 <span className={"ml-2 pocket"}>
                   My Pocket
                 </span>

                </Link>
              </li>
            </ul>





          </div>
        </div>

      </nav>
  )
}

export default TopNavBar