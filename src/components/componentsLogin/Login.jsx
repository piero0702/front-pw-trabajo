import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Login.css';
import TopBar from '../componentsTopBar/TopBar.jsx';
import Footer from '../componentsFooter/Footer.jsx';
import AuthAPI from '../../api/auth.js'; // Asegúrate de ajustar la ruta según sea necesario
import { UsuarioLogueado } from '../componentsTopBar/UsuarioLogueado.jsx';

const Login = () => {
    const navigate = useNavigate();
    const [usuario, setUsuario] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleClick = async () => {
        try {
            const response = await AuthAPI.login({ usuario, password });
            if (response.message === 'Login exitoso.') {
                const userData = { usuario: response.user.usuario, password, idRol: response.user.idRol }; // Incluye el idRol
                localStorage.setItem('user', JSON.stringify(userData));
                navigate('/');
            } else {
                setError(response.message || 'Error al iniciar sesión.');
            }
        } catch (error) {
            console.error('Error al iniciar sesión:', error); // Agregar un log para errores
            setError(error.message || 'Error al iniciar sesión.');
        }
    };

    const handleCerrarSesion = () => {
        localStorage.removeItem('user');
        navigate('/');
    };

    return (
        <>
            <TopBar/>
            <div className="login">
                <main id="mainLogin" className="mainLogin">
                    <h1>Ingreso para clientes registrados</h1>
                    <input
                        type="text"
                        id="Usuario"
                        placeholder="email"
                        value={usuario}
                        onChange={(event) => setUsuario(event.target.value)}
                    />
                    <br />
                    <input
                        type="password"
                        id="password"
                        placeholder="password"
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}
                    />
                    <br />
                    <span className="errorMessage">{error}</span>
                    <br />
                    <button onClick={handleClick}>Ingresar</button>
                    <div id='olvide-contraseña'>
                        { localStorage.getItem('user') ? <UsuarioLogueado onClick={handleCerrarSesion} /> : <a><Link to='/recuperar-contraseña'>Olvidé mi contraseña</Link></a> }
                    </div>
                    <div id='no-tengo-cuenta'>
                        { localStorage.getItem('user') ? <UsuarioLogueado onClick={handleCerrarSesion} /> : <a><Link to='/signup'>No tengo cuenta, deseo registrarme</Link></a> }
                    </div>
                </main>
            </div>     
            <Footer/>
        </>   
    );
};

export default Login;
