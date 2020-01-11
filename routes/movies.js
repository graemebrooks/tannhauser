const express = require('express');
const router = express.Router();
const movieCtrl = require('../controllers/movies');

// router.get('/new/:id', movieCtrl.new);
// router.get('/edit/:id', movieCtrl.updateForm);
// router.get('/:id', movieCtrl.show);
router.post('/', movieCtrl.create);
router.put('/:id', movieCtrl.update);
router.delete('/:id', movieCtrl.delete);

module.exports = router;
