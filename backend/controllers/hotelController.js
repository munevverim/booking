const Hotel = require('../models/Hotel');

// @desc    Get all hotels
// @route   GET /api/hotels
// @access  Public
const getHotels = async (req, res) => {
    try {
        const hotels = await Hotel.find();
        res.json(hotels);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// @desc    Get a single hotel
// @route   GET /api/hotels/:id
// @access  Public
const getHotelById = async (req, res) => {
    try {
        const hotel = await Hotel.findById(req.params.id);
        if (hotel) {
            res.json(hotel);
        } else {
            res.status(404).json({ message: 'Hotel not found' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// @desc    Create a new hotel
// @route   POST /api/hotels
// @access  Private
const createHotel = async (req, res) => {
    const { name, location, description, price, imageUrl } = req.body;

    const hotel = new Hotel({
        name,
        location,
        description,
        price,
        imageUrl,
    });

    try {
        const savedHotel = await hotel.save();
        res.status(201).json(savedHotel);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// @desc    Update a hotel
// @route   PUT /api/hotels/:id
// @access  Private
const updateHotel = async (req, res) => {
    const { name, location, description, price, imageUrl } = req.body;

    try {
        const hotel = await Hotel.findById(req.params.id);
        if (hotel) {
            hotel.name = name || hotel.name;
            hotel.location = location || hotel.location;
            hotel.description = description || hotel.description;
            hotel.price = price || hotel.price;
            hotel.imageUrl = imageUrl || hotel.imageUrl;

            const updatedHotel = await hotel.save();
            res.json(updatedHotel);
        } else {
            res.status(404).json({ message: 'Hotel not found' });
        }
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// @desc    Delete a hotel
// @route   DELETE /api/hotels/:id
// @access  Private
const deleteHotel = async (req, res) => {
    try {
        const hotel = await Hotel.findById(req.params.id);
        if (hotel) {
            await hotel.remove();
            res.json({ message: 'Hotel removed' });
        } else {
            res.status(404).json({ message: 'Hotel not found' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    getHotels,
    getHotelById,
    createHotel,
    updateHotel,
    deleteHotel,
};
