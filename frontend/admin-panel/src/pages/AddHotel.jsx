import React from 'react';
import HotelForm from '../components/HotelForm';
import './AddHotel.css';

const AddHotel = () => {
    return (
        <div className="add-hotel">
            <h2>Add New Hotel</h2>
            <HotelForm />
        </div>
    );
};

export default AddHotel;
