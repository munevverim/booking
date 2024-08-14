import React from 'react';
import { useParams } from 'react-router-dom';
import BookingForm from '../components/BookingForm';
import './BookingPage.css';

const BookingPage = () => {
    const { id } = useParams();
    const [hotel, setHotel] = useState(null);

    useEffect(() => {
        // Fetch the hotel details from the backend
        fetch(`/api/hotels/${id}`)
            .then(res => res.json())
            .then(data => setHotel(data))
            .catch(err => console.error(err));
    }, [id]);

    return (
        <div className="booking-page">
            {hotel ? <BookingForm hotel={hotel} /> : <p>Loading...</p>}
        </div>
    );
};

export default BookingPage;
