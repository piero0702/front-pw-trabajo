import React, { useState } from 'react';
import './AddSeries.css'; // Archivo CSS 

const AddSeries = () => {
  const [nombre, setNombre] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [productos, setProductos] = useState([]);
  const [productoInput, setProductoInput] = useState("");

  const handleAddProduct = () => {
    setProductos([...productos, { id: productos.length + 1, descripcion: productoInput }]);
    setProductoInput("");
  };

  const handleRemoveProduct = (id) => {
    setProductos(productos.filter(p => p.id !== id));
  };

  const handleSaveSeries = () => {
    // Simular guardar la serie
    console.log("Serie guardada:", { nombre, descripcion, productos });
  };

  return (
    <div className="add-series-page">
      <h2>Agregar Serie</h2>
      <div className="add-series-form">
        <div>
          <label>Nombre</label>
          <input 
            type="text" 
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
        </div>
        <div>
          <label>Descripción</label>
          <input 
            type="text" 
            value={descripcion}
            onChange={(e) => setDescripcion(e.target.value)}
          />
        </div>
        <div className="product-list">
          <label>Productos en la serie</label>
          <ul>
            {productos.map(p => (
              <li key={p.id}>
                {p.descripcion} 
                <button onClick={() => handleRemoveProduct(p.id)}>Remover</button>
              </li>
            ))}
          </ul>
          <input 
            type="text" 
            value={productoInput}
            onChange={(e) => setProductoInput(e.target.value)}
          />
          <button onClick={handleAddProduct}>Agregar Producto</button>
        </div>
        <button onClick={handleSaveSeries}>Guardar</button>
      </div>
    </div>
  );
};

export default AddSeries;
