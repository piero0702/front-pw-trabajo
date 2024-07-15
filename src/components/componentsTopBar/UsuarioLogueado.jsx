import React from 'react';
import './TopBar.css';
import { Link } from 'react-router-dom';

export const UsuarioLogueado = ({ onClick }) => {
  const user = JSON.parse(localStorage.getItem('user'));

  return (
    <>
      <div className="dashboard">
        {user?.idRol === 1 ? (
          <Link to='/dashboard-admin'>Dashboard</Link>
        ) : (
          <Link to='/dashboard-usuario'>{`${user?.usuario}`}</Link>
        )}
      </div>
      
      <div className="cerrar">
        <Link to='/'><button onClick={onClick}>Cerrar Sesión</button></Link>
      </div>
    </>
  );
};
