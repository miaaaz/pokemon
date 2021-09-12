import {API} from "aws-amplify";


const API_NAME = "pokeapi"
const POCKET_PATH = "/pokemons"

export const getPokemonById = (id) => {
  return API.get(API_NAME, `${POCKET_PATH}/${id}`, {})
}

export const getAllPokemonsInPocket = () => {
  return API.get(API_NAME, POCKET_PATH, {})
}

export const addPokemonToPocket = (id, name, img) => {
  return API.post(API_NAME, POCKET_PATH, {
    body: {
      pokemonid: id.toString(),
      name: name,
      quantity: 1,
      smallImage: img
    }
  })
}

export const updatePokemonInPocket = (id, name, img, prevPokemon) => {
  return API.put(API_NAME, POCKET_PATH, {
    body: {
      pokemonid: id.toString(),
      name: name,
      quantity: prevPokemon[0].quantity + 1,
      smallImage: img
    }
  })
}

export const deletePokemonById = (id) => {
  return API.del(API_NAME, `${POCKET_PATH}/${id}`, {})
}

const api = {
  addPokemonToPocket,
  updatePokemonInPocket,
  getPokemonById,
  getAllPokemonsInPocket,
  deletePokemonById
}

export default api