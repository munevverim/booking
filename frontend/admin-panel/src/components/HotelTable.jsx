import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './HotelTable.css';

const HotelTable = () => {
    const [hotels, setHotels] = useState([]);

    useEffect(() => {
        axios.get('/api/hotels')
            .then(response => {
                setHotels(response.data);
            })
            .catch(error => console.error('Error fetching hotels:', error));
    }, []);

    return (
        <table className="hotel-table">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Location</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {hotels.map(hotel => (
                    <tr key={hotel.id}>
                        <td>{hotel.id}</td>
                        <td>{hotel.name}</td>
                        <td>{hotel.location}</td>
                        <td>
                            <button>Edit</button>
                            <button>Delete</button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default HotelTable;
