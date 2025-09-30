import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import "../styles/login.css";


const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate=useNavigate();
  
  const handleSubmit=(e)=>{
    e.preventDefault();
    console.log("Email:", email);
    console.log("Password:", password);
    
   
    if (email && password) {
      navigate("/user");
    } else {
      alert("Por favor completá todos los campos");
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

