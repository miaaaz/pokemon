import React, {useState, useEffect} from 'react'
import Card from "./Card";
import Amplify, {API} from "aws-amplify";

const Pokedex = require('pokedex-promise-v2');
const P = new Pokedex();


const List = () => {


  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    // P.getPokemonByName().then(res => setPokemons(pokemons))
    fetch('https://pokeapi.co/api/v2/pokemon?offset=100&limit=10')
        .then(response => response.json())
    // .then(allpokemon => console.log(allpokemon.results))
    .then(allpokemon => setPokemons(allpokemon.results))
  }, [])

  return (
      <div className={"container"}>
        <div className={"row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-6 g-4"}>
          {
            pokemons.map((pokemon) =>
              <Card
                  name={pokemon.name}
                  url={pokemon.url}
              />
            )
          }
        </div>

      </div>

  )
}

export default List