import Pet from '../models/Pet.js';

// @desc    Get all pets
// @route   GET /api/pets
export const getPets = async (req, res) => {
    try {
        const pets = await Pet.find({});
        res.status(200).json(pets);
    } catch (error) {
        res.status(500).json({ message: "Server error fetching pets", error: error.message });
    }
};