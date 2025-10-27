import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios'; 

const RutinaAsignada = () => {
    
    const { id } = useParams(); 
    
   
    const [rutinaData, setRutinaData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    
    const API_URL = `http://localhost:4000/api/usuario/${id}/rutina`;

    useEffect(() => {
        if (!id) {
            setError('ID de usuario no proporcionado en la URL.');
            setLoading(false);
            return;
        }

        const fetchRutina = async () => {
            setLoading(true);
            try {
                const res = await axios.get(API_URL);
                
                setRutinaData(res.data.rutina ? res.data : null); 
                
            } catch (err) {
                console.error("Error al obtener la rutina:", err);
                setError("Error al cargar la rutina. Verifique el servidor y la conexión.");
            } finally {
                setLoading(false);
            }
        };

        fetchRutina();
    }, [id]);

  
    if (loading) return <h2>Cargando detalle de rutina...</h2>;
    if (error) return <h2 style={{ color: 'red' }}>Error: {error}</h2>;

    return (
        <div style={{ padding: '20px', maxWidth: '600px', margin: 'auto' }}>
            <h1>Detalle de Rutina Asignada</h1>
            
            {rutinaData ? (
                <>
                    <h2>Usuario: {rutinaData.usuario}</h2>
                    
                    <div style={{ border: '1px solid #ccc', padding: '15px', borderRadius: '8px' }}>
                        <h3>**{rutinaData.rutina}**</h3>
                        <p>Descripción: {rutinaData.descripcion}</p>
                    </div>
                </>
            ) : (
                <>
                    <h2>Este usuario no tiene **ninguna rutina asignada**.</h2>
                    <p>Por favor, regrese a la lista de clientes y use el botón **Modificar** para asignarle una.</p>
                </>
            )}
        </div>
    );
};

export default RutinaAsignada;