
import React, {useEffect, useState} from 'react'
import "./Card.css"
import pokeball from '../../../images/Pokeball_icon-icons.com_67533.png'


const Card = ({name, url}) => {

  const [id, setId] = useState("")
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
    fetch(`${url}`)
    .then(response => response.json())
    .then(pokemon => {
      setImage(pokemon["sprites"]["other"]["official-artwork"]["front_default"])
      setId(pokemon.id)
      setSmallImage(pokemon.sprites.front_default)
    })
  }, [url])


  return (
      <div className={"col"}>
        <div className="card p-3 mt-1 ms-2 me-2 wbdv-search-result-card">
          <div className="card-body">

            <img src={image}
                 className="card-img-top"
                 alt="..."/>
            <h6 className="mt-2 card-title"> </h6>
            <button
                onClick={handleCatch}
                className={"card-catch-btn"}>
              <img src={pokeball}
                   className="card-img-icon mb-2"
                   alt="..."/>
              <div>
                <span className="badge badge-pill badge-info">Catch it!</span>
              </div>
            </button>


          </div>
        </div>
      </div>




  )
}







export default Card
