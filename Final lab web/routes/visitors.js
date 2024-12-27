const express = require('express');
const router = express.Router();
const visitorsController = require('../controllers/visitorsController');

router.post('/', visitorsController.addVisitor);
router.get('/activity', visitorsController.getVisitorActivity);

module.exports = router;
