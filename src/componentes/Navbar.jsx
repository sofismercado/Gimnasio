import React from "react";
import "../styles/navbar.css"

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-left">
        <ul>
          <li><a href="/RutinaUsuario">Rutinas</a></li>
          <li><a href="/PageDay">Día</a></li>
          <li><a href="/clases">Clases</a></li>
        </ul>
      </div>
      
      <div className="nav-right">
        <ul>
          <li><a href="../">Salir</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
