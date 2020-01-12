const express = require('express');
const router = express.Router();
const movieCtrl = require('../controllers/movies');

router.get('/', movieCtrl.create);

module.exports = router;
