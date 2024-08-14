import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = () => {
    return (
        <div className="sidebar">
            <h2>Admin Panel</h2>
            <ul>
                <li><Link to="/">Dashboard</Link></li>
                <li><Link to="/manage-hotels">Manage Hotels</Link></li>
                <li><Link to="/add-hotel">Add Hotel</Link></li>
            </ul>
        </div>
    );
};

export default Sidebar;
