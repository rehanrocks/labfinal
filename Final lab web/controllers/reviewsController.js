const Review = require('../models/Review');
const Attraction = require('../models/Attraction');
const Visitor = require('../models/Visitor');

exports.addReview = async (req, res) => {
  try {
    const { attraction, visitor, score, comment } = req.body;

    const visitorData = await Visitor.findById(visitor);
    if (!visitorData.visitedAttractions.includes(attraction)) {
      return res
        .status(400)
        .json({ error: 'Visitor has not visited this attraction.' });
    }

    const review = new Review({ attraction, visitor, score, comment });
    await review.save();

    const reviews = await Review.find({ attraction });
    const averageRating =
      reviews.reduce((sum, r) => sum + r.score, 0) / reviews.length;

    await Attraction.findByIdAndUpdate(attraction, { rating: averageRating });

    res.status(201).json(review);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
