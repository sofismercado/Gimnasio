
import React from "react";
import "../styles/UserPage.css"
import "../styles/cardEjercicio.css"
import CardEjercicio from "./CardEjercicio"
import CardEntrada from "./CardEntrada";
import CardRutina from "./CardRutina";
import Navbar from "./Navbar";

const PageDay = () => {
  return (
    <div >
      
      <div >
        <h2 style={{textAlign: "center" }}>Rutina del dia de hoy :</h2>
               
        {/*<p style={{ marginLeft: "30px" }}>Comentario:</p>*/}
      </div>

      <div className="cardEjercicio-grid">
        <CardEntrada/>
        <CardRutina/>
       
      </div>
    </div>
  );
};

export default PageDay;