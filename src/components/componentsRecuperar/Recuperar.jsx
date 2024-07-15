import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useUser } from '../../context/User.jsx';
import './Recuperar.css';
import TopBar from '../componentsTopBar/TopBar.jsx';
import Footer from '../componentsFooter/Footer.jsx';
import RecuperarAPI from '../../api/recuperar.js'; // Asegúrate de ajustar la ruta según sea necesario

const Recuperar = () => {
    const navigate = useNavigate();
    const user = useUser();
    const [correo, setCorreo] = useState('');
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');

    const handleClick = async () => {
        try {
            const response = await RecuperarAPI.recuperar({ correo });
            if (response.message) {
                setMessage('Correo enviado. Por favor revisa tu bandeja de entrada.');
                setError('');
            } else {
                setError(response.message || 'Error al enviar el correo.');
            }
        } catch (error) {
            console.error('Error al enviar el correo:', error); // Agregar un log para errores
            setError(error.message || 'Error al enviar el correo.');
        }
    };

    return (
        <>
            <TopBar/>
            <div className="recuperar">
                <main id="mainRecuperar" className="mainRecuperar">
                    <h1>Ingrese su correo para enviar contraseña</h1>
                    <input
                        type="text"
                        id="correo"
                        placeholder="email"
                        value={correo}
                        onChange={(event) => setCorreo(event.target.value)}
                    />
                    <br />
                    <span className="errorMessage">{error}</span>
                    <span className="successMessage">{message}</span>
                    <br />
                    <button onClick={handleClick}>Enviar</button>
                    <div id='regresar-login'>
                        { user?.usuario ? <UsuarioLogueado username={user.usuario} onClick={handleCerrarSesion} /> : <a><Link to='/login'>Regresar al Login</Link></a> }
                    </div>
                </main>
            </div>
            <Footer/>
        </>
    );
};

export default Recuperar;
