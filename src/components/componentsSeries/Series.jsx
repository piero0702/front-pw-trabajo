import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Series.css'; // Archivo CSS

const Series = () => {
  const [series, setSeries] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    //  llamada a API para obtener las series
    fetch("/services/ccli.json")
      .then(response => response.json())
      .then(data => setSeries(data));
  }, []);

  const filteredSeries = series.filter(s => 
    s.nombre.toLowerCase().includes(search.toLowerCase()) || 
    s.id.toString().includes(search)
  );

  return (
    <div className="series-page">
      <h2>Series</h2>
      <input 
        type="text" 
        placeholder="Buscar por nombre, descripción o ID..." 
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <Link to="/add-series">Agregar Serie</Link>
      <table className="series-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Descripción</th>
            <th>Fecha de Creación</th>
            <th>Nro. Productos</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {filteredSeries.map(s => (
            <tr key={s.id}>
              <td>{s.id}</td>
              <td>{s.nombre}</td>
              <td>{s.descripcion}</td>
              <td>{s.fechaCreacion}</td>
              <td>{s.nroProductos}</td>
              <td><Link to={`/series/${s.id}`}>Ver</Link></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Series;
