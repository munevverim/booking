import React from 'react';
import { Link } from 'react-router-dom';
import './HotelCard.css';

const HotelCard = ({ hotel }) => {
    return (
        <div className="hotel-card">
            <img src={hotel.image} alt={hotel.name} />
            <div className="hotel-info">
                <h2>{hotel.name}</h2>
                <p>{hotel.description}</p>
                <Link to={`/booking/${hotel.id}`} className="btn">Book Now</Link>
            </div>
        </div>
    );
};

export default HotelCard;
