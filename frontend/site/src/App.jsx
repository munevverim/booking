import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import BookingPage from './pages/BookingPage';
import ConfirmationPage from './pages/ConfirmationPage';
import './styles/main.css';

const App = () => {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/booking/:id" element={<BookingPage />} />
                <Route path="/confirmation" element={<ConfirmationPage />} />
            </Routes>
            <Footer />
        </Router>
    );
};

export default App;
