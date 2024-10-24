import React, { useState } from 'react';

const VacationForm = () => {
    const [days, setDays] = useState('');
    const [startDate, setStartDate] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        setMessage(`Solicitud enviada: ${days} día(s) desde ${startDate}.`);
        setDays('');
        setStartDate('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="days">Días de Vacaciones:</label>
            <select
                id="days"
                value={days}
                onChange={(e) => setDays(e.target.value)}
                required
            >
                <option value="">Selecciona días</option>
                {Array.from({ length: 28 }, (_, i) => (
                    <option key={i + 1} value={i + 1}>{i + 1} día(s)</option>
                ))}
            </select>

            <label htmlFor="startDate">Fecha de Inicio:</label>
            <input
                type="date"
                id="startDate"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
                required
            />

            <button type="submit">Enviar Solicitud</button>
            {message && <div id="message">{message}</div>}
        </form>
    );
};

export default VacationForm;
