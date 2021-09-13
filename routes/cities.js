var express = require('express');
var router = express.Router();
var citiesController = require('../controllers/citiesController');

/* GET cities listing. */
router.get('/', citiesController.getAll);
router.get('/:id', citiesController.get);
router.post('/', citiesController.post);
router.put('/:id', citiesController.put);
router.delete('/:id', citiesController.delete);


module.exports = router;