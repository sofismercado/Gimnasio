import React from "react";
import "../styles/UserPage.css"
import CardAdmin from "./CardAdmin";

const Administrador = ({usuario}) => {
  return (
    <div >
      
      
      <div >
        <h2 style={{ marginLeft: "30px" }}>Bienvenido Superadministrador :</h2>
        
      </div>
      <div >
       <CardAdmin/>
       
      </div>
      
    </div>
  );
};

export default Administrador;