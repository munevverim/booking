import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <header className="header">
            <div className="container">
                <h1>Hotel Booking</h1>
                <nav>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/booking">Booking</Link></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;
