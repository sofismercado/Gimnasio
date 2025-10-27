import React, { useState, useEffect } from 'react';

import { useNavigate } from 'react-router-dom'; 
import "../styles/listaUsuarios.css";

const ListaAdministrador = () => {
    const [usuarios, setUsuarios] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const API_BASE_URL = "http://localhost:4000/api/users"; 

    useEffect(() => {
        fetchUsuarios();
      
    }, [navigate]); 

    
    const fetchUsuarios = async () => {
        setLoading(true);
        setError(null);
        try {
            const response = await fetch(API_BASE_URL);
            
            if (!response.ok) {
               
                const errorData = await response.json();
                throw new Error(errorData.message || 'No se pudo cargar la lista de usuarios. Verifica la conexión del backend.');
            }
            
            const data = await response.json();
           
            setUsuarios(data); 
            setLoading(false);
        } catch (err) {
            console.error("Error en fetchUsuarios:", err);
            setError(err.message);
            setLoading(false);
        }
    };

    

   
    const handleModificar = (id) => {
        
        navigate(`/AsignarRutina/${id}`);
    };

    
    const handleVerRutina = (id) => {
       
        navigate(`/RutinaAsignada/${id}`);
    };
    
   
    const handleCrearUsuario = () => {
        navigate('/FormNewUser');
    };
    
    
    const showMessage = (msg) => {
        console.log("Mensaje de Usuario:", msg);
        
    }


    if (loading) return (
        //...........................................................
        <div >
            <div >Cargando clientes...</div>
        </div>
    );
    
    if (error) return (
        <div >
            <div >Error al cargar: {error}</div>
        </div>
    );

    return (
        <div className='orden' >
            <h2 >Gestión de Clientes</h2>
            
           

            <div >
                <table >
                    <thead >
                        <tr>
                           
                            <th >Nombre</th>
                            <th >Email</th>
                           
                            <th className='prueba' >Acciones</th>
                        </tr>
                    </thead>
                    <tbody >
                        {usuarios.map(user => (
                            <tr 
                                key={user.id} 
                                
                            >
                                
                                <td className='cadausuario'>{user.name}</td>
                                <td className='cadausuario' >{user.email}</td>
                               
                                <td >
                                    <div className='cadausuario' >
                                        <button 
                                            
                                            onClick={() => handleModificar(user.id)}
                                        >
                                            Modificar 
                                        </button>
                                        <button 
                                           
                                            onClick={() => handleVerRutina(user.id)}
                                        >
                                            Rutina 
                                        </button>
                                        
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ListaAdministrador;
