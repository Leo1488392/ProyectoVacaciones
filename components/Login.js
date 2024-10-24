import React, { useState } from 'react';
import { auth } from '../firebase'; // Asegúrate de que la ruta sea correcta
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom'; // Importa useNavigate

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate(); // Crea una instancia de navigate

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            await signInWithEmailAndPassword(auth, email, password);
            console.log("Usuario iniciado sesión");
            navigate('/vacation-form'); // Redirige a la página del formulario de vacaciones
        } catch (error) {
            setErrorMessage(error.message);
        }
    };

    return (
        <div>
            <h2>Iniciar Sesión</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Email:
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                </label>
                <label>
                    Contraseña:
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                </label>
                <button type="submit">Iniciar Sesión</button>
                {errorMessage && <div>{errorMessage}</div>}
            </form>
            <button onClick={() => window.location.href='/register'}>¿No tienes cuenta? Regístrate</button>
        </div>
    );
};

export default Login;