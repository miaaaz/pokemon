const POKEMON_API = "https://pokeapi.co/api/v2/pokemon"

export const findPokemonById = (id) => {
  return fetch(`${POKEMON_API}/${id}`)
  .then(response => response.json())
}

const api = {
  findPokemonById
}

export default api