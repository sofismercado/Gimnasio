import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; 

import "../styles/login.css";

const FormNewUser = () => {
  const navigate = useNavigate(); 

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    rol: "usuario",
  });

  const [errors, setErrors] = useState({}); // 
  
 

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{5,}$/;

    // Validación
    const newErrors = {};
    if (!formData.name) newErrors.name = "El nombre es obligatorio";
    if (!formData.email) newErrors.email = "El email es obligatorio";
    // Validación de contraseña
    if (!formData.password) {
     newErrors.password = "La contraseña es obligatoria";
    } else if (!passwordRegex.test(formData.password)) {
     newErrors.password =
      "La contraseña debe tener al menos 5 caracteres, una mayúscula, una minúscula y un número";
    }
    if (formData.password !== formData.confirmPassword)
      newErrors.confirmPassword = "Las contraseñas no coinciden";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    try {
      const response = await fetch("http://localhost:4000/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          password: formData.password,
          rol: formData.rol,
        }),
      });

      const data = await response.json();
      console.log("Respuesta del servidor:", data);

      if (response.ok) {
        
        alert("Usuario registrado con éxito!");
        
        // limpio el formulario
        setFormData({
          name: "",
          email: "",
          password: "",
          confirmPassword: "",
          rol: "usuario", 
        });
        
        
        setErrors({});

        

      } else {
        // errores (ej. email ya existe)
        alert("Error al registrar usuario: " + data.message);
      }
    } catch (error) {
      console.error("Error al conectar con el backend:", error);
      alert("Error de conexión. Por favor, inténtalo de nuevo.");
    }

    
  };

  return (
    <div>
      <div className="login-container">
        <div className="login-box">
          <h1>Nuevo usuario</h1>
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
            <div>
              <label>Rol:</label>
              <select
                name="rol"
                value={formData.rol} 
                onChange={handleChange}>
                <option value="usuario">Usuario</option>
                <option value="administrador">Administrador</option>
                <option value="superadministrador">Superadministrador</option>
              </select>
            </div>

            <button type="submit">Crear Usuario</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default FormNewUser;




{/*import React, { useState } from "react";
import { useNavigate } from "react-router-dom";


import "../styles/login.css";

const FormNewUser = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    rol: "usuario",
  });

  const [errors, setErrors] = useState({}); // errores locales 

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async(e) => {
    e.preventDefault();

    //completar validacion
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

   
    try {
      const response = await fetch("http://localhost:4000/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          password: formData.password,
          rol: formData.rol
        }), // envio solo lo necesario
      });

      const data = await response.json();
      console.log("Respuesta del servidor:", data);

      if (response.ok) {
     
      setUsuario({
        nombre: formData.name,
        rol: formData.rol_id
      });
      alert("Usuario registrado con éxito!");
      navigate("/user"); // redirige a la pagina de usuario
      } else {
        alert("Error: " + data.message);
      }
      } catch (error) {
      console.error("Error al conectar con el backend:", error);
    }

    console.log("Usuario creado:", formData);

   
    navigate("/user");
  };
  
  return (
   
    <div>
      
     
      <div className="login-container">
        <div className="login-box">
           <h1>Nuevo usuario</h1>
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
            <div>
              <label>Rol:</label>
              <select
                name="rol"
                value={formData.rol_id}
                onChange={handleChange}>
            
                <option value="usuario">Usuario</option>
                <option value="administrador">Administrador</option>
                <option value="superadministrador">Superadministrador</option>
              </select>
            </div>


            <button type="submit">Crear Usuario</button>
          </form>
        </div>
        
      </div>

    </div>
   
  );
};

export default FormNewUser;*/}


