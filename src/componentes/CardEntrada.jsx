import React from "react";
import { useNavigate } from "react-router-dom";

import "../styles/card.css"


const CardEntrada= () => {
   const navigate = useNavigate();
   const handleVerMas = () => {
   navigate("/PageEntrada");
   };
  return (
    <div className="card ">
      <div className="card-title">
        <p>Entrada en calor:</p>
      </div>


      <div className="card-content">
        <h2>Ejercicios </h2>
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

export default CardEntrada;