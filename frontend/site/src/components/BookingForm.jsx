import React, { useState } from 'react';
import './BookingForm.css';

const BookingForm = ({ hotel }) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [date, setDate] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Submit the booking details to the server or process them here
    };

    return (
        <form className="booking-form" onSubmit={handleSubmit}>
            <h2>Book {hotel.name}</h2>
            <label>
                Name:
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
            </label>
            <label>
                Email:
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
            </label>
            <label>
                Booking Date:
                <input type="date" value={date} onChange={(e) => setDate(e.target.value)} required />
            </label>
            <button type="submit" className="btn">Confirm Booking</button>
        </form>
    );
};

export default BookingForm;
