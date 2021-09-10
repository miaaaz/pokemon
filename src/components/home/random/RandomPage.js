import React, {useState, useEffect} from 'react'
import Card from "../Card";
import Navbar from "../../navbar/Navbar";
import RandomCard from "../random/RandomCard";
import "./RandomPage.css"

const RandomPage = () => {

  const [id, setId] = useState("");
  const [pokemon, setPokemon] = useState({});

  const generateId = () => {
    const min = Math.ceil(1);
    const max = Math.floor(898);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  const changePokemon = () => {
    const id = generateId()
    setId(id)
  }

  useEffect(() => {
    const id = generateId()
    setId(id)
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
    .then(response => response.json())
    .then(pokemon => setPokemon(pokemon))
    .then(res => console.log(res))
  }, [])

  return (
      <div>
        {/*<Navbar/>*/}
        <div className={"container"}>

          {
            id
            &&
            <RandomCard
                id={id}
                changePokemon={changePokemon}
            />
          }


        </div>

      </div>


  )
}

export default RandomPage