import './stylesheets/App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import InicioView from "./views/InicioView";
import PersonajeView from "./views/PersonajeView";
import NavbarComponent from "./components/NavbarComponent";
import PersonajesView from './views/PersonajesView';
import NotFoundView from './views/NotFoundView';
import MyContext from './context/MyContext';


function App() {

  const [endpointPokemon, setEndpointPokemon] = useState("https://pokeapi.co/api/v2/pokemon/1/")

  const sharedContext = {
    endpointPokemon,
    setEndpointPokemon
  }

  return (
    <div className="App">
      <MyContext.Provider value={sharedContext}>
        <BrowserRouter>
          <NavbarComponent />
          <Routes>
            <Route path="/" element={<InicioView />} />
            <Route path="/home" element={<InicioView />} />
            <Route path="/personajes" element={<PersonajesView />} />
            <Route path="/personajes/:nombre" element={<PersonajeView />} />
            <Route path="*" element={<NotFoundView />} />
          </Routes>
        </BrowserRouter>
      </MyContext.Provider>
    </div>
  );
}

export default App;
