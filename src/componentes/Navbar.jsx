import React from "react";
import "../styles/navbar.css";

const Navbar = ({usuario}) => {
 
  
  const usuarioId = usuario?.id;
  console.log("Usuario actual en Navbar:", usuario);
  console.log("Rol del usuario:", usuario?.rol);
  
  console.log("ID del usuario:", usuarioId); 

  
  // ...
  return (
    <nav className="navbar">
      <div className="nav-left">
        <ul>
          {/* Menu  para todos */}

          
          {usuario && <li className="usuario-saludo">Hola,<span className="usuario-nombre">{usuario.nombre}</span> </li>}
        
          <li>
            <a href="/RutinaUsuario">Inicio</a>
          </li>
          {usuarioId && (
              <li>
                 
                  <a href={`/RutinaAsignada/${usuarioId}`}>Mi Rutina</a> 
              </li>
          )}
          

          {/* Menu solo para administradores */}
          {usuario?.rol === "administrador" && (
            <>
              <li><a href="/Administrador">Administrar Usuarios</a></li>
              
            </>
          )}

          {/* Men solo para superadministradores */}
          {usuario?.rol === "superadministrador" && (
            <>
              <li><a href="/SuperAdmin">Panel SuperAdmin</a></li>
            </>
          )}
        </ul>
      </div>

      <div className="nav-right">
        <ul>
          
          
          <li><a href="../">Salir</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
