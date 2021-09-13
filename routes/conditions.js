var express = require('express');
var router = express.Router();
var conditionsController = require('../controllers/conditionsController');

/* GET conditions listing. */
router.get('/', conditionsController.getAll);
router.get('/:id', conditionsController.get);
router.post('/', conditionsController.post);
router.put('/:id', conditionsController.put);
router.delete('/:id', conditionsController.delete);


module.exports = router;