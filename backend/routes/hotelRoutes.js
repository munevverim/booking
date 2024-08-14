const express = require('express');
const router = express.Router();
const {
    getHotels,
    getHotelById,
    createHotel,
    updateHotel,
    deleteHotel,
} = require('../controllers/hotelController');

router.route('/').get(getHotels).post(createHotel);
router.route('/:id').get(getHotelById).put(updateHotel).delete(deleteHotel);

module.exports = router;
