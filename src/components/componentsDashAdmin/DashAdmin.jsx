import './dashAdminStyles.css';
import { Routes, Route } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import TopBar from '../componentsTopBar/TopBar';
import Footer from '../componentsFooter/Footer';
import Dashboard from './Dashboard';
import Productos from './Productos';
import Usuarios from './UsuariosRegistrados';
import Sidebar from './Sidebar';
import AddProd from './AddProd';
import VerProducto from './VerProducto';

function DashAdmin() {
  const [productos, setProductos] = useState([]);
  const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {
    const storedProductos = JSON.parse(localStorage.getItem('productos')) || [];
    setProductos(storedProductos);
    const storedUsuarios = JSON.parse(localStorage.getItem('usuarios')) || [];
    setUsuarios(storedUsuarios);
  }, []);

  const handleAgregarProducto = (nuevoProducto) => {
    let nuevosProductos;
    if (productos.find(producto => producto.id === nuevoProducto.id)) {
      nuevosProductos = productos.map(producto => producto.id === nuevoProducto.id ? nuevoProducto : producto);
    } else {
      nuevosProductos = [nuevoProducto, ...productos];
    }
    setProductos(nuevosProductos);
    localStorage.setItem('productos', JSON.stringify(nuevosProductos));
  };

  const handleDesactivarProducto = (id) => {
    const nuevosProductos = productos.filter(producto => producto.id !== id);
    setProductos(nuevosProductos);
    localStorage.setItem('productos', JSON.stringify(nuevosProductos));
  };

  const handleDesactivarUsuario = (id) => {
    const nuevosUsuarios = usuarios.filter(usuario => usuario.id !== id);
    setUsuarios(nuevosUsuarios);
    localStorage.setItem('usuarios', JSON.stringify(nuevosUsuarios));
  };

  return (
    <div className="DashAdmin">
      <TopBar/>
      <div className="princi">
        <Sidebar />
        <Routes>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="usuarios" element={<Usuarios usuarios={usuarios} onDesactivarUsuario={handleDesactivarUsuario} />} />
          <Route path="productos" element={<Productos productos={productos} onDesactivarProducto={handleDesactivarProducto} onProductAdded={handleAgregarProducto} />} />
          <Route path="agregar-producto" element={<AddProd onProductAdded={handleAgregarProducto} />} />
          <Route path="ver-producto/:id" element={<VerProducto productos={productos} />} />
      </Routes>
      </div>
      <Footer/>
    </div>
  );
}

export default DashAdmin;
