const express = require('express');
const router = express.Router();
const attractionsController = require('../controllers/attractionsController');

router.post('/', attractionsController.addAttraction);
router.get('/', attractionsController.getAllAttractions);
router.get('/top-rated', attractionsController.getTopRatedAttractions);

module.exports = router;
