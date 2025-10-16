import React from "react";


import "../styles/card.css"
import { Link } from "react-router-dom";

const CardSuperAdmin = () => {
  
  return (

    <div className="cardEjercicio-grid">
      
      <div className="card">
        <h3 className="card-title">Ingreso a mi perfil de usuario </h3>
        <p></p>
        <div className="card-content">
           <Link to="/RutinaUsuario">
              <button className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600">Ver Mas</button>
             </Link>
        </div>
        
      </div>

       <div className="card">
        <h3 className="card-title">Crear usuario </h3>
        <p></p>
        <div className="card-content">
          <div style={{ marginTop: "1rem" }}>
             <Link to="/FormNewUser">
              <button className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600">Ver Mas</button>
             </Link>
          </div>
        </div>
        
      </div>

       <div className="card">
        <h3 className="card-title">Buscar usuario </h3>
        <p></p>
        <div className="card-content">
          <div style={{ marginTop: "1rem" }}>
             <Link to="/buscarUsuario">
              <button className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600">Ver Mas</button>
             </Link>
          </div>
        </div>
        
      </div>
      
      
    </div>
  );
};

export default CardSuperAdmin;