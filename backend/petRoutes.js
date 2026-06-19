
const express = require('express');
const router = express.Router();
const { getPets, createPet } = require('../petController');

router.route('/').get(getPets).post(createPet);

module.exports = router;