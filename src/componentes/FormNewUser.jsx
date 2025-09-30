import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";

import "../styles/login.css";

const FormNewUser = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({}); // errores locales si querés validar

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validación simple
    const newErrors = {};
    if (!formData.name) newErrors.name = "El nombre es obligatorio";
    if (!formData.email) newErrors.email = "El email es obligatorio";
    if (!formData.password) newErrors.password = "La contraseña es obligatoria";
    if (formData.password !== formData.confirmPassword)
      newErrors.confirmPassword = "Las contraseñas no coinciden";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // Aquí iría la lógica de guardar el usuario (API o state)
    console.log("Usuario creado:", formData);

    // Redirigir al perfil o página principal
    navigate("/user");
  };
  
  return (
   
    <div>
      <Navbar/>
          <div className="login-container">
        <div className="login-box">
          
          <form onSubmit={handleSubmit} noValidate>
            <div>
              <label>Nombre:</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
              />
              {errors.name && <p style={{ color: "red" }}>{errors.name}</p>}
            </div>

            <div>
              <label>Email:</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
              {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}
            </div>

            <div>
              <label>Contraseña:</label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
              />
              {errors.password && <p style={{ color: "red" }}>{errors.password}</p>}
            </div>

            <div>
              <label>Confirmar contraseña:</label>
              <input
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
              />
              {errors.confirmPassword && (
                <p style={{ color: "red" }}>{errors.confirmPassword}</p>
              )}
            </div>

            <button type="submit">Crear Usuario</button>
          </form>
        </div>
        
      </div>

    </div>
   
  );
};

export default FormNewUser;


