import React from 'react';
import HotelTable from '../components/HotelTable';
import './ManageHotels.css';

const ManageHotels = () => {
    return (
        <div className="manage-hotels">
            <h2>Manage Hotels</h2>
            <HotelTable />
        </div>
    );
};

export default ManageHotels;
