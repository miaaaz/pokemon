
import React, {useEffect, useState} from 'react'
import {Link} from "react-router-dom";
import "./Card.css"
import pokeball from '../../images/Pokeball_icon-icons.com_67533.png'
import Amplify, {API} from "aws-amplify";

const Card = ({name, url}) => {

  const [id, setId] = useState("")
  const [image, setImage] = useState("");
  const [list, setList] = useState([])

  const handleCatch = e => {
    e.preventDefault()

    API.post("pokemonapi", "/pokemons", {
      body: {
        pokemonId: id.toString(),
        name: name

      }
    }).then(res => {
      alert("catch!")
      console.log(res)
    })
  }

  useEffect(() => {
    fetch(`${url}`)
    .then(response => response.json())
    // .then(res => console.log(res))
    .then(pokemon => {
      setImage(pokemon["sprites"]["other"]["official-artwork"]["front_default"])
      setId(pokemon.id)
    })
  }, [url])


  return (
      <div className={"col"}>
        <div className="card p-3 mt-3 mb-3 ms-2 me-2 wbdv-search-result-card">
          <div className="card-body">

            <img src={image}
                 className="card-img-top"
                 alt="..."/>
            <h6 className="mt-2 card-title">{name}</h6>
            <button
                onClick={handleCatch}
                className={"card-catch-btn"}>
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
