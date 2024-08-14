import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import Dashboard from './pages/Dashboard';
import ManageHotels from './pages/ManageHotels';
import AddHotel from './pages/AddHotel';
import './styles/main.css';

const App = () => {
    return (
        <Router>
            <div className="admin-panel">
                <Sidebar />
                <div className="main-content">
                    <Navbar />
                    <Routes>
                        <Route path="/" element={<Dashboard />} />
                        <Route path="/manage-hotels" element={<ManageHotels />} />
                        <Route path="/add-hotel" element={<AddHotel />} />
                    </Routes>
                </div>
            </div>
        </Router>
    );
};

export default App;
