import React, { useState, useEffect } from 'react';

import { useNavigate } from 'react-router-dom'; 
import "../styles/listaUsuarios.css";

const ListaUsuarios = () => {
    const [usuarios, setUsuarios] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

   
    const API_BASE_URL = "http://localhost:4000/api/users"; 

    useEffect(() => {
        fetchUsuarios();
        
    }, [navigate]); 

    // Función para obtener la lista de usuarios del backend
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

    
    const handleEliminarUsuario = async (id, name) => {
       
        if (!window.confirm(`ADVERTENCIA: ¿Estás seguro de ELIMINAR PERMANENTEMENTE al usuario ${name}? Esta acción no se puede deshacer.`)) {
            return;
        }

        try {
            
            const response = await fetch(`${API_BASE_URL}/${id}`, {
                method: 'DELETE', 
                headers: {
                    'Content-Type': 'application/json',
                    
                },
            });

            if (response.ok) {
                
                console.log(`Usuario ${name} eliminado permanentemente con éxito.`);
                
                
                setUsuarios(prevUsuarios => prevUsuarios.filter(user => user.id !== id));
                
            } else {
                
                const data = await response.json();
                console.error(`Error al eliminar: ${data.message || 'Error desconocido del servidor.'}`);
                
            }
        } catch (error) {
            console.error("Error de red al eliminar:", error);
            
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
                <button 
                   
                    onClick={handleCrearUsuario}
                >
                     Agregar Nuevo Cliente
                </button>
                <button
                    
                    onClick={fetchUsuarios}
                >
                    Recargar Lista 
                </button>
            </div>

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
                                        <button 
                                           
                                            onClick={() => handleEliminarUsuario(user.id, user.name)}
                                        >
                                            Eliminar Definitivamente 
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

export default ListaUsuarios;
