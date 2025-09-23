import React from "react";
import "../styles/UserPage.css"

import CardSuperAdmin from "./CardSuperAdmin";
import Navbar from "./Navbar";

const SuperAdmin = () => {
  return (
    <div >
      <Navbar />
      
      <div >
        <h2 style={{ marginLeft: "30px" }}>Bienvenido Superadministrador :</h2>
        <p style={{ marginLeft: "30px" }}>Comentario:</p>
      </div>
      <div >
       <CardSuperAdmin/>
       
      </div>
      
    </div>
  );
};

export default SuperAdmin;
//<div >
  //     <CardSuperAdmin/>
       
    //  </div>