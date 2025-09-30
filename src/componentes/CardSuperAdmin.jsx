import React from "react";
import { useNavigate } from "react-router-dom";

import "../styles/card.css"
import { Link } from "react-router-dom";
import FormNewUser from "./FormNewUser";
const CardSuperAdmin = () => {
   const navigate = useNavigate();
    const handleVerMas = () => {
    navigate("/FormNewUser"); 
  };
  return (

    <div className="cardEjercicio-grid">
      
      <div className="card">
        <h3 className="card-title">Ingreso a mi perfil de usuario </h3>
        <p></p>
        <div className="card-content">
          <button 
            onClick={handleVerMas}
            className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
            >
            Ver más
          </button>
        </div>
        
      </div>

       <div className="card">
        <h3 className="card-title">Crear usuario </h3>
        <p></p>
        <div className="card-content">
          <div style={{ textAlign: "center", marginTop: "1rem" }}>
             <Link to="/FormNewUser">
              <button className="admin-btn">Ver Mas</button>
             </Link>
          </div>
        </div>
        
      </div>

       <div className="card">
        <h3 className="card-title">Buscar usuario </h3>
        <p></p>
        <div className="card-content">
          <button 
            onClick={handleVerMas}
            className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
            >
            Ver más
          </button>
        </div>
        
      </div>
      
      
    </div>
  );
};

export default CardSuperAdmin;