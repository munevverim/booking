import React, { useEffect, useState } from 'react';
import HotelCard from '../components/HotelCard';
import './HomePage.css';

const HomePage = () => {
    const [hotels, setHotels] = useState([]);

    useEffect(() => {
        // Fetch the list of hotels from the backend
        fetch('/api/hotels')
            .then(res => res.json())
            .then(data => setHotels(data))
            .catch(err => console.error(err));
    }, []);

    return (
        <div className="home-page">
            <h1>Available Hotels</h1>
            <div className="hotel-list">
                {hotels.map(hotel => (
                    <HotelCard key={hotel.id} hotel={hotel} />
                ))}
            </div>
        </div>
    );
};

export default HomePage;
