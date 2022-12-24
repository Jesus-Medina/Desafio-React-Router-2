import { useEffect, useState, useContext } from "react";
import { traerPokemones } from "../functions/funciones";
import { useNavigate } from "react-router-dom";
import MyContext from './../context/MyContext';
import "../stylesheets/personajesView.css"

function PersonajesView() {

  const { setEndpointPokemon } = useContext(MyContext)
  const [pokemones, setPokemones] = useState(null)
  const [nombrePokemon, setNombrePokemon] = useState("bulbasur")
  const navigate = useNavigate()

  useEffect(() => {
    traerPokemones(setPokemones)
  }, [])

  function verPokemon() {
    navigate(`/personajes/${nombrePokemon}`)
  }

  function handleChange(event) {
    const value = JSON.parse(event.target.value)
    setNombrePokemon(value.name)
    setEndpointPokemon(value.url)

    console.log(value.name)
    console.log(value.url)
  }

  return (
    <div className="form-container">
      <h1>Selecciona un pokemon</h1>
      <form onSubmit={(e) => verPokemon(e)}>
        <select onChange={(e) => handleChange(e)}>
          {
            pokemones !== null
              ? pokemones.map((pokemon) => {
                return (
                  <option value={JSON.stringify(pokemon)} key={pokemon.name}>{pokemon.name}</option>
                )
              })
              : <option>No han cargado los pokemones aun</option>
          }
        </select>
        <button type="submit">Ver Detalle</button>
      </form>
    </div>

  )
}

export default PersonajesView;
