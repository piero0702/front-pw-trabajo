// src/componentsTopBar/TopBar.jsx
import './TopBar.css';
import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import { UsuarioLogueado } from '../componentsTopBar/UsuarioLogueado';
import IconCarritoCompras from './IconCarritoCompras';

const TopBar = (userType) => {
  const [user, setUser] = useState({ usuario: null, password: null });

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    console.log(user);
    setUser(user);
  }, []);

  const handleCerrarSesion = () => {
    alert('Sesión cerrada');
    localStorage.removeItem('user');
    setUser({ usuario: null, password: null });
  };

  return (
    <div className="top-bar">
      <div className="logo">
        <h1>
          <Link to='/'>UlimaFarma</Link>
        </h1>
      </div>
      <div className="links">
        <Link to='/mas-vendidos'>Mas Vendidos</Link>
        <Link to='/nuevos'>Nuevos</Link>
        <Link to='/ofertas'>Ofertas</Link>
        {user?.usuario ? <Link to='/carritoCompras'>
          <IconCarritoCompras width={20} height={20}/>
        </Link> : <Link to='/login'>
          <IconCarritoCompras width={20} height={20}/>
        </Link> }
      </div>
      {user?.usuario ? <UsuarioLogueado username={user.usuario} onClick={handleCerrarSesion} /> : <Link className='infoLogin' to='/login'>Login</Link>}
    </div>
  );
};

export default TopBar;
