import React from "react";
import { useNavigate } from "react-router-dom";

import "../styles/card.css"

const CardDia = () => {
   const navigate = useNavigate();
    const handleVerMas = () => {
    navigate("/PageDay"); // 👈 redirige a la rutina del día
  };
  return (
    <div className="card ">
      <div className="card-title">
        <p>Tipo de ejercicio:</p>
      </div>
      
      <div className="card-content">
        <h3>Día: </h3>
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

export default CardDia;