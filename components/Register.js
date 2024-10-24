import React, { useState } from 'react';
import { auth } from '../firebase'; // Asegúrate de que la ruta sea correcta
import { createUserWithEmailAndPassword } from 'firebase/auth';

const Register = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            await createUserWithEmailAndPassword(auth, email, password);
            console.log("Usuario registrado");
            // Redirigir a la página principal o manejar el registro exitoso
        } catch (error) {
            setErrorMessage(error.message);
        }
    };

    return (
        <div>
            <h2>Registrar Datos</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Email:
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                </label>
                <label>
                    Contraseña:
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                </label>
                <button type="submit">Registrar</button>
                {errorMessage && <div>{errorMessage}</div>}
            </form>
            <button onClick={() => window.location.href='/login'}>¿Ya tienes cuenta? Inicia Sesión</button>
        </div>
    );
};

export default Register;