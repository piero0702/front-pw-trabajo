import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useUser } from '../../context/User.jsx';
import './Signup.css';

import TopBar from '../componentsTopBar/TopBar.jsx';
import Footer from '../componentsFooter/Footer.jsx';
import SignupAPI from '../../api/signup'; // Asegúrate de ajustar la ruta según sea necesario

const Signup = () => {
    const navigate = useNavigate();
    const user = useUser();
    const [nombre, setNombre] = useState('');
    const [apellido, setApellido] = useState('');
    const [correo, setCorreo] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');

    const handleClick = async () => {
        if (password !== confirmPassword) {
            setError('Las contraseñas no coinciden.');
            return;
        }

        try {
            const response = await SignupAPI.register({ nombre, apellido, correo, password });
            if (response.message === 'Usuario registrado exitosamente.') {
                alert('Usuario registrado exitosamente.');
                const newUser = { usuario: correo, password };
                localStorage.setItem('user', JSON.stringify(newUser));
                user.setUser(newUser);
                navigate('/');
            } else {
                setError(response.message || 'Error al registrar usuario.');
            }
        } catch (error) {
            console.error('Error al registrar usuario:', error);
            setError(error.message || 'Error al registrar usuario.');
        }
    };

    return (
        <>
            <TopBar/>
            <div className="signup">
                <main id="mainSignup" className="mainSignup">
                    <h1>Registra una nueva cuenta</h1>
                    <input
                        type="text"
                        id="nombre"
                        placeholder="Nombre"
                        value={nombre}
                        onChange={(event) => setNombre(event.target.value)}
                    />
                    <br />
                    <input
                        type="text"
                        id="apellido"
                        placeholder="Apellido"
                        value={apellido}
                        onChange={(event) => setApellido(event.target.value)}
                    />
                    <br />
                    <input
                        type="text"
                        id="correo"
                        placeholder="Correo"
                        value={correo}
                        onChange={(event) => setCorreo(event.target.value)}
                    />
                    <br />
                    <input
                        type="password"
                        id="password"
                        placeholder="Contraseña"
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}
                    />
                    <br />
                    <input
                        type="password"
                        id="confirmPassword"
                        placeholder="Confirmar Contraseña"
                        value={confirmPassword}
                        onChange={(event) => setConfirmPassword(event.target.value)}
                    />
                    <br />
                    <span className="errorMessage">{error}</span>
                    <br />
                    <button onClick={handleClick}>Crear nueva cuenta</button>
                </main>
            </div>
            <Footer/>
        </>
    );
};

export default Signup;
