import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Styles/UsuariosRegistrados.css';
import SearchBox from './SearchBox';
import ClientesAPI from '../../api/clientes'; // Ajusta la ruta según sea necesario

function UsuariosRegistrados({ onDesactivarUsuario }) {
  const [clientes, setClientes] = useState([]);
  const [filteredClients, setFilteredClients] = useState([]);
  const itemsPerPage = 4; // Limitar a 4 usuarios por página
  const [currentPage, setCurrentPage] = useState(1);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchClientes = async () => {
      const dataClientes = await ClientesAPI.findAll();
      setClientes(dataClientes);
      setFilteredClients(dataClientes);
    };
    fetchClientes();
  }, []);

  const handleSearch = (query) => {
    const filtered = clientes.filter((client) =>
      String(client.id).toLowerCase().includes(query.toLowerCase()) ||
      (client.nombre && client.nombre.toLowerCase().includes(query.toLowerCase())) ||
      (client.apellido && client.apellido.toLowerCase().includes(query.toLowerCase())) ||
      (client.correo && client.correo.toLowerCase().includes(query.toLowerCase()))
    );
    setFilteredClients(filtered);
    setCurrentPage(1);
  };

  const handleDelete = (id) => {
    onDesactivarUsuario(id);
  };

  const handleView = (client) => {
    navigate(`/admin-app/ver-usuario/${client.idUsuario}`, { state: { client } });
  };

  const handleUpdate = (client) => {
    navigate('/admin-app/agregar-usuario', { state: { client } });
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredClients.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <div className="usuarios-container">
      <div className="Cabecita1">
        <div>Usuarios Registrados</div>
        <div className="agregacion-prod">
        </div>
      </div>
      <div className='bu'>
      <SearchBox onSearch={handleSearch} />
      </div>
      
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Usuario</th>
            <th>Nombre</th>
            <th>Apellido</th>
            <th>Correo</th>
            <th>Fecha de Registro</th>
            <th>Estado</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {currentItems.map((client) => (
            <tr key={client.id}>
              <td>{client.id}</td>
              <td>{client.usuario.usuario}</td>
              <td>{client.nombre}</td>
              <td>{client.apellido}</td>
              <td>{client.correo}</td>
              <td>{client.fechaRegistro}</td>
              <td>{client.estado}</td>
              <td>
                <button onClick={() => handleView(client)}>Ver</button>
                <button onClick={() => handleUpdate(client)}>Actualizar</button>
                <button onClick={() => handleDelete(client.id)}>Desactivar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="pagination">
        <button onClick={() => setCurrentPage(currentPage - 1)} disabled={currentPage === 1}>
          Anterior
        </button>
        <span>{currentPage}</span>
        <button onClick={() => setCurrentPage(currentPage + 1)} disabled={currentItems.length < itemsPerPage}>
          Siguiente
        </button>
      </div>
    </div>
  );
}

export default UsuariosRegistrados;
