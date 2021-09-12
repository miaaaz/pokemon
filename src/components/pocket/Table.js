import React, {useState, useEffect} from 'react'
import Row from "./Row";
import "./Table.css"
import pocketService from "../../services/pocket-service"


const Table = () => {

  const [pokemons, setPokemons] = useState([])

  const handleFree = (id) => {

    pocketService.deletePokemonById(id)

    const newList = pokemons.filter((pokemon) => {return pokemon.pokemonid !== id})
    setPokemons(newList)
  }

  useEffect(() => {
    pocketService.getAllPokemonsInPocket()
      .then((all) => setPokemons(all))
  },[])


  return (
      <div className={"container"}>
        <table className="table mt-3">
          <thead>
          <tr>
            <th scope="col table-head"></th>
            <th scope="col table-head">
              <span
                >Name
              </span>
            </th>
            <th scope="col table-head">
              <span
                  >Owned
              </span>
            </th>
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