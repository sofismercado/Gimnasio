import React, { useState, useEffect } from "react";

import Login from './dashboard/Login'
import Loading from './componentes/Loanding';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RutinaUsuario from './componentes/RutinaUsuario';
import PageDay from './componentes/PageDay';
import SuperAdmin from './componentes/SuperAdmin';
import PageEntrada from './componentes/PageEntrada';
import PageEjercicios from './componentes/PageEjercicios';
import FormNewUser from "./componentes/FormNewUser";


function App() {

  const [loading, setLoading] = useState(true);
  const [fade, setFade] = useState(false); // nuevo estado para el desvanecimiento del logo
  useEffect(() => {
    // simula la carga de la app
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // 2 segundos de splash
    return () => clearTimeout(timer);
  }, []);
  
  if (loading) {
    // mientras carga, mostramos solo el Loading
    return <Loading />;
  }


  return (
    
    
    <Router>
    
      <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/user" element={<RutinaUsuario/>} />
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
    // <Route path="/SuperAdmin" element={<SuperAdmin/>}/>