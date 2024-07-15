import React, { useState, useEffect } from 'react';
import './AddOffer.css'; // Archivo CSS 

const AddOffer = () => {
  const [search, setSearch] = useState("");
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    //   llamada a api para obtener los productos
    fetch("/services/codpro.json")
      .then(response => response.json())
      .then(data => setProductos(data));
  }, []);

  const filteredProducts = productos.filter(p => 
    p.descripcion.toLowerCase().includes(search.toLowerCase()) || 
    p.cod_producto.toString().includes(search)
  );

  return (
    <div className="add-offer-page">
      <h2>Agregar Producto</h2>
      <input 
        type="text" 
        placeholder="Buscar por descripción o ID..." 
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button>Buscar</button>
      <table className="offer-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Descripción</th>
            <th>Acción</th>
          </tr>
        </thead>
        <tbody>
          {filteredProducts.map(p => (
            <tr key={p.cod_producto}>
              <td>{p.cod_producto}</td>
              <td>{p.descripcion}</td>
              <td><button>Agregar</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AddOffer;
