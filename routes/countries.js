var express = require('express');
var router = express.Router();
var countriesController = require('../controllers/countriesController');

/* GET countries listing. */
router.get('/', countriesController.getAll);
router.get('/:id', countriesController.get);
router.post('/', countriesController.post);
router.put('/:id', countriesController.put);
router.delete('/:id', countriesController.delete);


module.exports = router;