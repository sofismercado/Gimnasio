import React from "react";
import "../styles/UserPage.css"
import "../styles/cardEjercicio.css"
import CardEjercicio from "./CardEjercicio"

import Navbar from "./Navbar";

const PageEjercicios = () => {
  return (
    <div >
      <Navbar />
      <div >
        <h2 style={{ marginLeft: "30px" }}>Sofi estos son tus ejercicios de fuerza de hoy:</h2>
        <p style={{ marginLeft: "30px" }}>Comentario:</p>
      </div>

      <div className="cardEjercicio-grid">
            <CardEjercicio/>
            <CardEjercicio/>
            <CardEjercicio/>
      </div>
    </div>
  );
};

export default PageEjercicios;