const express = require('express');
const router = express.Router();
const movieCtrl = require('../controllers/movies');

router.post('/', movieCtrl.create);
router.get('/testConnect', movieCtrl.testConnect);

module.exports = router;
