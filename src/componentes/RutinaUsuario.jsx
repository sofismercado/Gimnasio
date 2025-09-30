//pagina principal despues de ingresar el usuario comun................................


import React from "react";
import "../styles/UserPage.css";
import SuperAdmin from "./SuperAdmin";
import CardDia from "./CardDia";
import CardEntrada from "./CardEntrada";
import Navbar from "./Navbar";
import ThemeToggle from "./Teme";
import { Link } from "react-router-dom"; 
const RutinaUsuario = () => {


  return (
    <div className="user-page">
       
      <Navbar />
      <div className="theme-toggle-container ">
         <ThemeToggle />
       </div>
      
      <div className="user-header">
        <h2 style={{ textAlign: "center" }}>¡Bienvenida Sofi! </h2>
        <p style={{ textAlign: "center" }}> Acá podés ver tus rutinas y progreso:</p>
      </div>
     
       
        {/* Botón que redirige a SuperAdmin */}
        <div style={{ textAlign: "center", marginTop: "1rem" }}>
          <Link to="/SuperAdmin">
            <button className="admin-btn">Soy administrador</button>
          </Link>
        </div>
     

      <div className="cardEjercicio-grid">
        
        <CardDia />
        <CardDia />
        <CardDia />
        
        
      </div>
    </div>
  );
};

export default RutinaUsuario;
