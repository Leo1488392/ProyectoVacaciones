import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom'; 
import { signOut } from 'firebase/auth';
import { auth, db } from '../firebase'; 
import { collection, addDoc } from 'firebase/firestore'; 

const VacationForm = () => {
    const [days, setDays] = useState('');
    const [startDate, setStartDate] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault(); 
        
        try {
            await addDoc(collection(db, 'vacationRequests'), {
                days: days,
                startDate: startDate,
                createdAt: new Date() 
            });
            setMessage(`Solicitud enviada: ${days} día(s) desde ${startDate}.`);
        } catch (error) {
            console.error("Error al guardar la solicitud:", error);
            setMessage("Ocurrió un error al enviar la solicitud.");
        }

        setDays('');
        setStartDate('');
    };

    const handleLogout = async () => {
        try {
            await signOut(auth);
            console.log("Usuario cerrado sesión");
        } catch (error) {
            console.error("Error al cerrar sesión:", error);
        }
    };

    return (
        <div>
            {/* Navbar */}
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">Mi Aplicación</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item">
                                <Link className="nav-link" to="/vacation-form">Solicitar Vacaciones</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/profile">Perfil</Link>
                            </li>
                            <li className="nav-item">
                                <button className="nav-link btn btn-link" onClick={handleLogout}>Cerrar Sesión</button>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            {/* Formulario */}
            <div className="container mt-5">
                <h2 className="text-center mb-4">Formulario de Solicitud de Vacaciones</h2>
                <form onSubmit={handleSubmit} className="bg-light p-4 rounded shadow">
                    <div className="mb-3">
                        <label htmlFor="days" className="form-label">Días de Vacaciones:</label>
                        <select
                            id="days"
                            className="form-select"
                            value={days}
                            onChange={(e) => setDays(e.target.value)}
                            required
                        >
                            <option value="">Selecciona días</option>
                            {Array.from({ length: 28 }, (_, i) => (
                                <option key={i + 1} value={i + 1}>{i + 1} día(s)</option>
                            ))}
                        </select>
                    </div>

                    <div className="mb-3">
                        <label htmlFor="startDate" className="form-label">Fecha de Inicio:</label>
                        <input
                            type="date"
                            id="startDate"
                            className="form-control"
                            value={startDate}
                            onChange={(e) => setStartDate(e.target.value)}
                            required
                        />
                    </div>

                    <button type="submit" className="btn btn-primary w-100">Enviar Solicitud</button>
                    {message && <div id="message" className="alert alert-success mt-3">{message}</div>}
                </form>
            </div>

        </div>
    );
};

export default VacationForm;