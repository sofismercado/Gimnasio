import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/card.css";

const CardDia = ({ usuario }) => { // <--usuario como prop
  const navigate = useNavigate();

  const handleVerMas = () => {
    if (usuario?.id) {
      navigate(`/RutinaAsignada/${usuario.id}`);
    }
  };

  return (
    <div className="card ">
      <div className="card-title">
        <p></p>
      </div>
      
      <div className="card-content">
        <h2>Rutina: </h2>
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
