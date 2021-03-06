import React, {useState, useEffect} from 'react'
import Card from "./Card";

const List = () => {

  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon?offset=35&limit=20')
        .then(response => response.json())
    .then(allpokemon => setPokemons(allpokemon.results))
  }, [])

  return (
      <div className={"container"}>
        <div className={"row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-6 g-4"}>
          {
            pokemons.map((pokemon,index) =>
              <Card
                  key={index}
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