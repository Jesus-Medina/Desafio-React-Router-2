import { useState, useEffect, useContext } from 'react';
import { traerPokemon } from "../functions/funciones";
import MyContext from './../context/MyContext';
import "../stylesheets/PersonajeView.css"
import { useParams } from 'react-router-dom';

function PersonajeComponent() {

  const { endpointPokemon } = useContext(MyContext)

  const [pokemon, setPokemon] = useState(null)

  const { nombre } = useParams()

  useEffect(() => {
    traerPokemon(endpointPokemon, setPokemon)
  }, [endpointPokemon])

  return (
    <div>
      {
        pokemon !== null
          ? <div className="pokemon-card">
            <img src={pokemon.sprites.other.dream_world.front_default} alt={`pokemon llamado ${pokemon.name}`} />
            <div className="pokemon-description">
              <h1>{nombre}</h1>
              <ul>
                {
                  pokemon.stats.map((stat) => {
                    return (
                      <li key={stat.stat.name}>{stat.stat.name}: {stat.base_stat}</li>
                    )
                  })
                }
              </ul>
              <h3>{pokemon.types[0].type.name}</h3>
            </div>
          </div>
          : <p>Cargando pokemon...</p>
      }
    </div>
  )
}

export default PersonajeComponent;
