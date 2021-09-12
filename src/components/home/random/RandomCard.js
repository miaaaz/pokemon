
import React, {useEffect, useState} from 'react'
import pokeball from '../../../images/Pokeball_icon-icons.com_67533.png'
import arrow from '../../../images/up-arrow.png'
import "./RandomCard.css"
import egg from "../../../images/lucky-egg.png"
import pokemonService from "../../../services/pokemon-service"
import pocketService from "../../../services/pocket-service"

const RamdomCard = ({currentId, generateId}) => {

  let [id, setId] = useState(currentId)
  const [name, setName] = useState("")
  const [image, setImage] = useState("")
  const [smallImage, setSmallImage] = useState("")
  const [isCatched, setIsCatched] = useState(false)



  const handleCatch = e => {
    e.preventDefault()

    pocketService.getPokemonById(id).then(res => {
      console.log(res)
      if (res.length === 0) {
        pocketService.addPokemonToPocket(id, name, smallImage)
      } else {
        pocketService.updatePokemonInPocket(id, name, smallImage, res)
      }

      id = setId(generateId())

    } )

  }

  useEffect(() => {
    pokemonService.findPokemonById(id)
      .then(pokemon => {
        setImage(pokemon["sprites"]["other"]["official-artwork"]["front_default"])
        setName(pokemon.name)
        setSmallImage(pokemon.sprites.front_default)
      })
  }, [id])


  return (
      <div className={"col"}>

        {isCatched &&
        <div className={"mt-5"}>
          <div className={"mb-3"}>
            <img src={egg} className={"egg"} alt={"egg"}/>
          </div>

          <h1>Gotcha!</h1>

          <button
              className={"mt-2 btn card-catch-btn"}
              onClick={() => setIsCatched(!isCatched)}>
            Back
          </button>
        </div>
        }


        {
          !isCatched &&
          <div
            className="card p-3 mt-4 mb-3 ms-2 me-2 random-card mr-auto ml-auto shadow">
          <div className="card-body">


            <img src={image}
                 className="card-img-top"
                 alt="waiting"/>

            <div className={"mt-2"}>
              <button
                  onClick={() => setId(generateId)}
                  className={"btn let-it-go-button"}>
                <img src={arrow}
                     className="card-img-icon"
                     alt="arrow"/>
                <div>
                  <span>Let it go</span>
                </div>
              </button>
            </div>
            <button
                onClick={(e) => {
                  handleCatch(e)
                  setIsCatched(!isCatched)
                }}
                className={"btn card-catch-btn mt-3"}>
              <img src={pokeball}
                   className="card-img-icon"
                   alt="..."/>
              <div>
                <span>Catch it!</span>
              </div>

            </button>


          </div>
        </div>
        }
      </div>




  )
}







export default RamdomCard
