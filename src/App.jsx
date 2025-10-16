import React, { useState, useEffect } from "react";
import Login from './dashboard/Login' // <-- Asegúrate de tener este import si no lo pegaste
import Loading from './componentes/Loanding';
// 👇 AÑADE: useNavigate
import { BrowserRouter as Router, Routes, Route, useLocation, useNavigate } from "react-router-dom"; 
import RutinaUsuario from './componentes/RutinaUsuario';
import PageDay from './componentes/PageDay';
import SuperAdmin from './componentes/SuperAdmin';
import PageEntrada from './componentes/PageEntrada';
import PageEjercicios from './componentes/PageEjercicios';
import FormNewUser from "./componentes/FormNewUser";
import Navbar from "./componentes/Navbar";



const AppContent = ({ usuario, setUsuario }) => {
    const location = useLocation();
    const navigate = useNavigate();

    // cerrar sesión
    const handleLogout = () => {
        // 1. Limpia el estado (oculta la Navbar)
        setUsuario(null); 
        // 2. Limpia el localStorage (para que no aparezca al recargar)
        localStorage.removeItem('usuarioLogueado');
        // 3. Redirige al Login
        navigate('/');
    };

    // Condición: La Navbar 
    const showNavbar = usuario && location.pathname !== '/';

    return (
        <>
            {/* Le pasamos la prop onLogout a la Navbar */}
            {showNavbar && <Navbar usuario={usuario} onLogout={handleLogout} />}

            <Routes>
                <Route path="/" element={<Login setUsuario={setUsuario}/>} />
                <Route path="/RutinaUsuario" element={<RutinaUsuario usuario={usuario}/>} />
                <Route path="/PageDay" element={<PageDay/>}/>
                <Route path="/PageEntrada" element={<PageEntrada/>}/>
                <Route path="/PageEjercicios" element={<PageEjercicios/>}/>
                <Route path="/SuperAdmin" element={<SuperAdmin/>}/>
                <Route path="/FormNewUser" element={<FormNewUser />} />
            </Routes>
        </>
    );
};
// ==========================================================


function App() {
  const [loading, setLoading] = useState(true);
  const [fade, setFade] = useState(false); 
  const [usuario, setUsuario] = useState(null); 

  useEffect(() => {

    //...........................
    // 
    const usuarioGuardado = localStorage.getItem('usuarioLogueado');
    if (usuarioGuardado) {
        try {
            // Si existe, lo convierto de string a objeto  y lo guardamos en el estado
            setUsuario(JSON.parse(usuarioGuardado));
        } catch (e) {
            // Manejo de error si el JSON es inválido
            console.error("Error al parsear usuario de localStorage:", e);
            localStorage.removeItem('usuarioLogueado');
        }
    }
    //.............................agregado
    
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); 
    return () => clearTimeout(timer);
  }, []);

  
  if (loading) {
    return <Loading />;
  }


  // ==========================================================
 
  // ==========================================================
  return (
      <Router>
        
        <AppContent usuario={usuario} setUsuario={setUsuario} />
      </Router>
  )
  
}

export default App




{/*import React, { useState, useEffect } from "react";
import Login from './dashboard/Login';
import Loading from './componentes/Loanding';
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import RutinaUsuario from './componentes/RutinaUsuario';
import PageDay from './componentes/PageDay';
import SuperAdmin from './componentes/SuperAdmin';
import PageEntrada from './componentes/PageEntrada';
import PageEjercicios from './componentes/PageEjercicios';
import FormNewUser from "./componentes/FormNewUser";
import Navbar from "./componentes/Navbar";






function App() {

  const [loading, setLoading] = useState(true);
  const [fade, setFade] = useState(false); 
  const [usuario, setUsuario] = useState(null); 

  useEffect(() => {

    //...........................
    // 
    const usuarioGuardado = localStorage.getItem('usuarioLogueado');
    if (usuarioGuardado) {
        try {
            
            setUsuario(JSON.parse(usuarioGuardado));
        } catch (e) {
            
            console.error("Error al parsear usuario de localStorage:", e);
            localStorage.removeItem('usuarioLogueado'); // Opcional: limpiar datos corruptos
        }
    }
    //.............................agregado
    
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); 
    return () => clearTimeout(timer);
  }, []);
  
  if (loading) {
    
    return <Loading />;
  }


  return (
    
   
      <Router>
        
      {usuario && <Navbar usuario={usuario} />}

        <Routes>
        <Route path="/" element={<Login setUsuario={setUsuario}/>} />
        <Route path="/user" element={<RutinaUsuario usuario={usuario}/>} />
        <Route path="/PageDay" element={<PageDay/>}/>
        <Route path="/PageEntrada" element={<PageEntrada/>}/>
        <Route path="/PageEjercicios" element={<PageEjercicios/>}/>
        <Route path="/SuperAdmin" element={<SuperAdmin/>}/>
        <Route path="/FormNewUser" element={<FormNewUser />} />

        </Routes>
      </Router>
    
    
   
  )
  
}

export default App
//
//va pegadp en las rutas
// <Route path="/" element={<Login />} />
  //      <Route path="/user" element={<RutinaUsuario/>} />
    //    <Route path="/PageDay" element={<PageDay/>}/>
    // <Route path="/SuperAdmin" element={<SuperAdmin/>}/>*/}