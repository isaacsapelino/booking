const express = require('express');
const router = express.Router();
const booking = require('../controllers/booking.controller');

router.get('/:id', booking.getBook);
router.post('/', booking.setBook);

module.exports = router;