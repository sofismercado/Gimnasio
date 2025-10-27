
import React from "react";
import { Navigate } from "react-router-dom";

const RutaProtegida = ({ usuario, children }) => {
  if (!usuario) {
   
    return <Navigate to="/" replace />;
  }
  return children; 
};

export default RutaProtegida;
