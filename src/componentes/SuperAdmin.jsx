import React from "react";
import "../styles/UserPage.css"

import CardSuperAdmin from "./CardSuperAdmin";


const SuperAdmin = ({usuario}) => {
  return (
    <div >
      
      
      <div >
        <h2 style={{ marginLeft: "30px" }}>Bienvenido Superadministrador :</h2>
        
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