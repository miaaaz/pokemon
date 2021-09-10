import React, {useState, useEffect} from 'react'
import {API} from "aws-amplify";
import Row from "./Row";
import "./Table.css"


const Table = () => {

  const [pokemons, setPokemons] = useState([])

  const handleFree = (id) => {

    const newList = pokemons.filter((pokemon) => {return pokemon.pokemonid !== id})
    setPokemons(newList)

    API.del("pokeapi", `/pokemons/${id}`, {
    }).then(res => {
      console.log(res)
      API.get("pokeapi", `/pokemons`, {}).then(all => console.log(all))
    })
  }

  useEffect(() => {
    API.get("pokeapi", "/pokemons", {})
      .then((all) => setPokemons(all))
  },[])


  return (
      <div className={"container"}>
        <table className="table mt-5">
          <thead>
          <tr>
            <th scope="col table-head"></th>
            <th scope="col table-head">Owned</th>
            <th scope="col table-head">Name</th>
            <th scope="col table-head"></th>

          </tr>
          </thead>
          <tbody>
          {
            pokemons.map((pokemon, idx) =>
              <Row
                name={pokemon.name}
                key={idx}
                id={pokemon.pokemonid}
                quantity={pokemon.quantity}
                photo={pokemon.smallImage}
                handleFree={handleFree}
              />
            )
          }

          </tbody>
        </table>


      </div>



  )
}

export default Table