const Attraction = require('../models/Attraction');

exports.addAttraction = async (req, res) => {
  try {
    const { name, location, entryFee } = req.body;
    const attraction = new Attraction({ name, location, entryFee });
    await attraction.save();
    res.status(201).json(attraction);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getAllAttractions = async (req, res) => {
  try {
    const attractions = await Attraction.find();
    res.json(attractions);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getTopRatedAttractions = async (req, res) => {
  try {
    const attractions = await Attraction.find().sort({ rating: -1 }).limit(5);
    res.json(attractions);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
