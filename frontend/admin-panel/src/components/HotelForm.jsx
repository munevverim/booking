import React, { useState } from 'react';
import axios from 'axios';
import './HotelForm.css';

const HotelForm = ({ hotel }) => {
    const [name, setName] = useState(hotel ? hotel.name : '');
    const [location, setLocation] = useState(hotel ? hotel.location : '');
    const [description, setDescription] = useState(hotel ? hotel.description : '');

    const handleSubmit = (e) => {
        e.preventDefault();
        const newHotel = { name, location, description };

        if (hotel) {
            axios.put(`/api/hotels/${hotel.id}`, newHotel)
                .then(response => console.log('Hotel updated:', response.data))
                .catch(error => console.error('Error updating hotel:', error));
        } else {
            axios.post('/api/hotels', newHotel)
                .then(response => console.log('Hotel added:', response.data))
                .catch(error => console.error('Error adding hotel:', error));
        }
    };

    return (
        <form className="hotel-form" onSubmit={handleSubmit}>
            <label>
                Name:
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
            </label>
            <label>
                Location:
                <input type="text" value={location} onChange={(e) => setLocation(e.target.value)} required />
            </label>
            <label>
                Description:
                <textarea value={description} onChange={(e) => setDescription(e.target.value)} required />
            </label>
            <button type="submit">{hotel ? 'Update Hotel' : 'Add Hotel'}</button>
        </form>
    );
};

export default HotelForm;
