const express = require('express');
const router = express.Router();
const axios = require('axios');
const bodyParser = require('body-parser');

router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());

router.get('/', (req, res) => {
  res.send('Booking Home');
});

module.exports = router;
