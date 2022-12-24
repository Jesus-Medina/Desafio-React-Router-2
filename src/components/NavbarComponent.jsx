import { NavLink } from "react-router-dom";
import "../stylesheets/NavbarComponent.css"

function NavbarComponent() {

  const setActiveClass = ({ isActive }) => (isActive ? "active" : undefined)

  return (
    <div className="navbar">
      <img src="https://img.icons8.com/ios-filled/50/FFFFFF/pointer.png" alt="icono pointer de pokemon"/>
      <div className="links-container">
        <NavLink to="/home" className={setActiveClass}>
          Home
        </NavLink>

        <NavLink to="/personajes" className={setActiveClass}>
          Personajes
        </NavLink>
      </div>
    </div>
  )
}

export default NavbarComponent;
