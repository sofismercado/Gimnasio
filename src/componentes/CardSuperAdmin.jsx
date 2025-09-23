import React from "react";
import { useNavigate } from "react-router-dom";

import "../styles/card.css"

const CardSuperAdmin = () => {
   const navigate = useNavigate();
    const handleVerMas = () => {
    navigate(""); 
  };
  return (

    <div className="card">
      
      <div className="card-content">
        <h3>Ingreso a mi perfil de usuario </h3>
        <p></p>
        <button 
        onClick={handleVerMas}
        className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
      >
        Ver más
      </button>
      </div>
      <div className="card-content">
        <h3>Crear usuario </h3>
        <p></p>
        <button 
        onClick={handleVerMas}
        className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
      >
        Ver más
      </button>
      </div>
      <div className="card-content">
        <h3>Buscar usuario </h3>
        <p></p>
        <button 
        onClick={handleVerMas}
        className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
      >
        Ver más
      </button>
      </div>
    </div>
  );
};

export default CardSuperAdmin;