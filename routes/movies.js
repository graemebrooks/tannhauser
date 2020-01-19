const express = require('express');
const router = express.Router();
const movieCtrl = require('../controllers/movies');

// Need Read, Update, and Delete
router.use(require('../config/auth'));
router.post('/', movieCtrl.create);
router.get('/index', movieCtrl.index);
router.delete('/:id', movieCtrl.delete);
router.put('/:id', movieCtrl.update);

module.exports = router;
