import React, { useState } from 'react';
import { auth } from '../firebase'; 
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom'; 
import 'bootstrap/dist/css/bootstrap.min.css';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate(); 

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            await signInWithEmailAndPassword(auth, email, password);
            console.log("Usuario iniciado sesión");
            navigate('/vacation-form'); 
        } catch (error) {
            setErrorMessage(error.message);
        }
    };

    return (
        <div className="container mt-5">
            <h2 className="text-center">Iniciar Sesión</h2>
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
                <button type="submit" className="btn btn-primary w-100">Iniciar Sesión</button>
                {errorMessage && <div className="text-danger mt-2">{errorMessage}</div>}
            </form>
            <button onClick={() => window.location.href='/register'} className="btn btn-link mt-3">¿No tienes cuenta? Regístrate</button>
        </div>
    );
};

export default Login;