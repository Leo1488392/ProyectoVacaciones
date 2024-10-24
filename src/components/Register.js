import React, { useState } from 'react';
import { auth } from '../firebase'; 
import { createUserWithEmailAndPassword } from 'firebase/auth';
import 'bootstrap/dist/css/bootstrap.min.css';

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
        <div className="container mt-5">
            <h2 className="text-center">Registrar Datos</h2>
            <form onSubmit={handleSubmit} className="mt-4">
                <div className="mb-3">
                    <label className="form-label">Email:</label>
                    <input 
                        type="email" 
                        className="form-control" 
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)} 
                        required 
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Contraseña:</label>
                    <input 
                        type="password" 
                        className="form-control" 
                        value={password} 
                        onChange={(e) => setPassword(e.target.value)} 
                        required 
                    />
                </div>
                <button type="submit" className="btn btn-primary w-100">Registrar</button>
                {errorMessage && <div className="text-danger mt-2">{errorMessage}</div>}
            </form>
            <button onClick={() => window.location.href='/login'} className="btn btn-link mt-3">¿Ya tienes cuenta? Inicia Sesión</button>
        </div>
    );
};

export default Register;