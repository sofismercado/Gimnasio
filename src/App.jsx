import React, { useState, useEffect } from "react";
import Login from './dashboard/Login' 
import Loading from './componentes/Loanding'
import { BrowserRouter as Router, Routes, Route, useLocation, useNavigate } from "react-router-dom"; 
import RutinaUsuario from './componentes/RutinaUsuario';
import PageDay from './componentes/PageDay';
import SuperAdmin from './componentes/SuperAdmin';
import PageEntrada from './componentes/PageEntrada';
import PageEjercicios from './componentes/PageEjercicios';
import FormNewUser from "./componentes/FormNewUser";
import Navbar from "./componentes/Navbar";
import ListaUsuarios from "./componentes/ListaUsuarios";
import AsignarRutina from "./componentes/AsignarRutina";
import RutinaAsignada from "./componentes/RutinaAsignada";
import Administrador from "./componentes/Administrador";
import ListaAdministrador from "./componentes/ListaAdministrador";
import RutaProtegida from "./componentes/RutaProtegida";

//--------------------------------

//--------------------------------


const AppContent = ({ usuario, setUsuario }) => {
    const location = useLocation();
    const navigate = useNavigate();

    
    const handleLogout = () => {
        
        setUsuario(null); 
        
        localStorage.removeItem('usuarioLogueado');
        
        navigate('/');
    };

    
    const showNavbar = usuario && location.pathname !== '/';

    return (
        <>
            {/* Le pasamos la prop onLogout a la Navbar */}
            {showNavbar && <Navbar usuario={usuario} onLogout={handleLogout} />}

            <Routes>
                <Route path="/" element={<Login setUsuario={setUsuario}/>} />
                
                
                <Route path="/RutinaUsuario" element={<RutaProtegida usuario={usuario}><RutinaUsuario usuario={usuario}/></RutaProtegida>} />
                <Route path="/PageDay" element={<RutaProtegida usuario={usuario}><PageDay/></RutaProtegida>}/>
                <Route path="/PageEntrada" element={<RutaProtegida usuario={usuario}><PageEntrada/></RutaProtegida>}/>
                <Route path="/PageEjercicios" element={<RutaProtegida usuario={usuario}><PageEjercicios/></RutaProtegida>}/>
                <Route path="/SuperAdmin" element={<RutaProtegida usuario={usuario}><SuperAdmin/></RutaProtegida>}/>
                <Route path="/FormNewUser" element={<RutaProtegida usuario={usuario}><FormNewUser /></RutaProtegida>} />
                <Route path="/ListaUsuarios" element={<RutaProtegida usuario={usuario}><ListaUsuarios/></RutaProtegida>}/>
                <Route path="/AsignarRutina/:id" element={<RutaProtegida usuario={usuario}><AsignarRutina/></RutaProtegida>}/>
                <Route path="/RutinaAsignada/:id" element={<RutaProtegida usuario={usuario}><RutinaAsignada /></RutaProtegida>} />
                <Route path="/Administrador" element={<RutaProtegida usuario={usuario}><Administrador/></RutaProtegida>}/>
                <Route path="/ListaAdministrador" element={<RutaProtegida usuario={usuario}><ListaAdministrador/></RutaProtegida>}/>
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
            
            setUsuario(JSON.parse(usuarioGuardado));
        } catch (e) {
            
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