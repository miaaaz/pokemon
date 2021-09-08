
import React, {useState} from 'react'
import {Link} from "react-router-dom";
import "./Card.css"
import pokeball from '../../images/Pokeball_icon-icons.com_67533.png'

const Card = () => {


  return (
      <div className={"col"}>
        <div className="card p-3 mt-3 mb-3 ms-2 me-2 wbdv-search-result-card">
          <div className="card-body">

            <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/32.png"
                 className="card-img-top"
                 alt="..."/>
            <h5 className="mt-2 card-title">Card title</h5>
            <button className={"card-catch-btn"}>
              <img src={pokeball}
                   className="card-img-icon"
                   alt="..."/>
              <div>
                <p>Catch</p>
              </div>
            </button>


          </div>
        </div>
      </div>




  )
}







export default Card
