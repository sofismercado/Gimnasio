import React from "react";
import "../styles/UserPage.css";



import CardDia from "./CardDia";
import CardEntrada from "./CardEntrada";
import Navbar from "./Navbar";
import ThemeToggle from "./Teme";
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

      <div className="cardEjercicio-grid">
        
        <CardDia />
        <CardDia />
        <CardDia />
      </div>
    </div>
  );
};

export default RutinaUsuario;
