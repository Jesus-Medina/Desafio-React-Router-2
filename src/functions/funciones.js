import axios from "axios";

async function traerPokemones(setPokemones) {
  const endpoint = "https://pokeapi.co/api/v2/pokemon/"

  try {
    const request = await axios.get(endpoint)
    const data = await request.data.results
  
    console.log(data)
    setPokemones(data)
  } catch (error) {
    console.error(error)
  }
}

async function traerPokemon(url, setPokemon) {
  try {
    const request = await axios.get(url)
    const data = await request.data
  
    console.log(data)
    setPokemon(data)
  } catch (error) {
    console.error(error)
  }
}

export {
  traerPokemones,
  traerPokemon
}