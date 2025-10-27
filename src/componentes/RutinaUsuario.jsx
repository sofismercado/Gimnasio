//pagina principal despues de ingresar el usuario comun................................


import React from "react";
import "../styles/UserPage.css";
import SuperAdmin from "./SuperAdmin";
import CardDia from "./CardDia";
import CardEntrada from "./CardEntrada";
import Navbar from "./Navbar";

import { Link } from "react-router-dom"; 
const RutinaUsuario = ({usuario}) => {


  return (
    <div className="user-page">
       
     
     
      
      <div className="user-header">
       
        <p style={{ textAlign: "center" }}> Acá podés ver tu rutina:</p>
      </div>
     
       
       
     

      <div className="cardEjercicio-grid">
        
        <CardDia usuario={usuario} />
        
        
      </div>
    </div>
  );
};

export default RutinaUsuario;
