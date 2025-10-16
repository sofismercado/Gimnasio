//pagina principal despues de ingresar el usuario comun................................


import React from "react";
import "../styles/UserPage.css";
import SuperAdmin from "./SuperAdmin";
import CardDia from "./CardDia";
import CardEntrada from "./CardEntrada";
import Navbar from "./Navbar";
import ThemeToggle from "./Teme";
import { Link } from "react-router-dom"; 
const RutinaUsuario = ({usuario}) => {


  return (
    <div className="user-page">
       
     
      <div className="theme-toggle-container ">
         <ThemeToggle />
       </div>
      
      <div className="user-header">
       
        <p style={{ textAlign: "center" }}> Acá podés ver tus rutinas:</p>
      </div>
     
       
        {/* Botón SuperAdmin 
        <div style={{ textAlign: "center", marginTop: "1rem" }}>
          <Link to="/SuperAdmin">
            <button className="admin-btn">Soy administrador</button>
          </Link>
        </div>*/}
     

      <div className="cardEjercicio-grid">
        
        <CardDia />
        <CardDia />
        <CardDia />
        
        
      </div>
    </div>
  );
};

export default RutinaUsuario;
