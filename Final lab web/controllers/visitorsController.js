const Visitor = require('../models/Visitor');

exports.addVisitor = async (req, res) => {
  try {
    const { name, email } = req.body;
    const visitor = new Visitor({ name, email });
    await visitor.save();
    res.status(201).json(visitor);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getVisitorActivity = async (req, res) => {
  try {
    const visitors = await Visitor.find().populate('visitedAttractions');
    const activity = visitors.map((v) => ({
      name: v.name,
      email: v.email,
      reviewsCount: v.visitedAttractions.length,
    }));
    res.json(activity);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
