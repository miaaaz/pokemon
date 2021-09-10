
import React, {useEffect, useState} from 'react'
import {Link} from "react-router-dom";
import pokeball from '../../../images/Pokeball_icon-icons.com_67533.png'
import arrow from '../../../images/up-arrow.png'
import Amplify, {API} from "aws-amplify";
import "./RandomCard.css"

const RamdomCard = ({id, changePokemon}) => {

  const [name, setName] = useState("")
  const [image, setImage] = useState("")
  const [smallImage, setSmallImage] = useState("")

  const handleCatch = e => {
    e.preventDefault()

    API.get("pokeapi", `/pokemons/${id}`, {
    }).then(res => {
      // Doesn't exist
      if (res.length === 0) {
        API.post("pokeapi", "/pokemons", {
          body: {
            pokemonid: id.toString(),
            name: name,
            quantity: 1,
            smallImage: smallImage
          }
        }).then(res => {
          alert("catch!")
        })
      } else {

        API.put("pokeapi", "/pokemons", {
          body: {
            pokemonid: id.toString(),
            name: name,
            quantity: res[0].quantity + 1,
            smallImage: smallImage
          }
        }).then(res => {
          alert("catch!")
        })
      }
    } )




  }

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
    .then(response => response.json())
    .then(pokemon => {
      setImage(pokemon["sprites"]["other"]["official-artwork"]["front_default"])
      setName(pokemon.name)
      setSmallImage(pokemon.sprites.front_default)
    })
  }, [id])


  return (
      <div className={"col"}>
        <div className="card p-3 mt-4 mb-3 ms-2 me-2 random-card mr-auto ml-auto shadow">
          <div className="card-body">

            <img src={image}
                 className="card-img-top"
                 alt="waiting"/>

            <div className={"mt-2"}>
              <button
                  onClick={() => changePokemon()}
                  className={"btn let-it-go-button"}>
                <img src={arrow}
                     className="card-img-icon"
                     alt="..."/>
                <div>
                  <span>Let it go</span>
                </div>
              </button>
            </div>
            <button
                onClick={handleCatch}
                className={"btn card-catch-btn mt-3"}>
              <img src={pokeball}
                   className="card-img-icon"
                   alt="..."/>
             <div>
               <span>Catch it!</span>
             </div>

              {/*<img src={pokeball}*/}
              {/*     className="card-img-icon mb-2"*/}
              {/*     alt="..."/>*/}
              {/*<div>*/}
              {/*  <span className="badge badge-pill badge-info">Catch it!</span>*/}
              {/*</div>*/}
            </button>


          </div>
        </div>
      </div>




  )
}







export default RamdomCard
