import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
function AsignarRutina() {
  const { id } = useParams();
  const [rutinas, setRutinas] = useState([]);
  const [rutinaSeleccionada, setRutinaSeleccionada] = useState("");
  const [mensaje, setMensaje] = useState("");

  // Traer las rutinas disponibles desde el backend
  useEffect(() => {
    const fetchRutinas = async () => {
      try {
        const res = await axios.get("http://localhost:4000/api/rutinas"); // necesitamos este endpoint en backend
        setRutinas(res.data);
      } catch (err) {
        console.error("Error al traer rutinas", err);
      }
    };
    fetchRutinas();
  }, []);

  //.........................
 
  //..................-----

  const handleSubmit = async () => {
    if (!rutinaSeleccionada) return setMensaje("Debes seleccionar una rutina");
    try {
      //
      await axios.put(`http://localhost:4000/api/usuario/${id}/rutina`, { 
        id_rutina: rutinaSeleccionada
      });
      setMensaje("Rutina asignada correctamente");
    } catch (err) {
      console.error(err);
      setMensaje("Error al asignar rutina");
    }
  };

  return (
    <div>
      <h2>Asignar rutina al usuario</h2>
      <select value={rutinaSeleccionada} onChange={e => setRutinaSeleccionada(e.target.value)}>
        <option value="">-- Seleccionar rutina --</option>
        {rutinas.map(r => (
          <option key={r.id_rutina} value={r.id_rutina}>
            {r.nombre}
          </option>
        ))}
      </select>
      <button onClick={handleSubmit}>Asignar rutina</button>
      {mensaje && <p>{mensaje}</p>}
    </div>
  );
}

export default AsignarRutina;
