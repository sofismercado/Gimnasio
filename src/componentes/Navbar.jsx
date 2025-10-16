import React from "react";
import "../styles/navbar.css";

const Navbar = ({usuario}) => {
 
  
  console.log("Usuario actual en Navbar:", usuario);
  console.log("Rol del usuario:", usuario?.rol);

  
  // ...
  return (
    <nav className="navbar">
      <div className="nav-left">
        <ul>
          {/* Menu  para todos */}
          {usuario && <li className="usuario-saludo">Hola,<span className="usuario-nombre">{usuario.nombre}</span> </li>}
          <li><a href="/RutinaUsuario">Rutinas</a></li>
          <li><a href="/PageDay">Día</a></li>
          

          {/* Menu solo para administradores */}
          {usuario?.rol === "administrador" && (
            <>
              <li><a href="/admin/usuarios">Administrar Usuarios</a></li>
              
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
