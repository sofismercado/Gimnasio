import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import "../styles/login.css";



const Login = ({ setUsuario }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate=useNavigate();
  
  const handleSubmit=async(e)=>{
    e.preventDefault();
    console.log("Email:", email);
    console.log("Password:", password);
    
   
    if (!email || !password) {
      
      alert("Por favor completá todos los campos");
      return;
    }
    

    try {
      
      const response = await fetch("http://localhost:4000/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      console.log("Respuesta del backend:", data);
      if (response.ok) {
        // guardo el usuario logueado en el estado global
        //setUsuario({.......................
          //nombre: data.nombre,  // viene del backend
          //rol: data.rol       // viene del backend
        //});esto hay que sacar en caso que no funcione............................
        // creo el objeto usuario
      const userData = {
         nombre: data.nombre,
          rol: data.rol
      };
        // guado el usuario en el estado global de App.js
        setUsuario(userData);
        
        // Guardo el usuario en el localStorage para persistencia
        localStorage.setItem('usuarioLogueado', JSON.stringify(userData));


        navigate("/RutinaUsuario"); // redirige a la página principal
      } else {
        alert(data.message || "Email o contraseña incorrectos");
      }
    } catch (error) {
      console.error("Error de login:", error);
    }
  
  };
  return (
    <div className="login-container">
      <div className="login-box">
        <img 
          src="./imagenes/logo.jpeg" 
          alt="Logo FYP Gimnasio" 
          style={{ width: "200px", height: "auto", marginBottom: "20px" }} 
        />
        
        <form onSubmit={handleSubmit}>
          <input 
            type="email" 
            placeholder="Email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            required 
          />
          <input 
            type="password" 
            placeholder="Contraseña" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            required 
          />
          <button type="submit">Ingresar</button>
        </form>
      </div>
      
    </div>
    

  );
};

export default Login;

