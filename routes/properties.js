var express = require('express');
var router = express.Router();
var propertiesController = require('../controllers/propertiesController');

/* GET properties listing. */
router.get('/', propertiesController.getAll);
router.get('/:id', propertiesController.get);
router.get('/getByPropertyName/:property_name', propertiesController.getByPropertyName);
router.post('/', propertiesController.post);
router.put('/:id', propertiesController.put);
router.delete('/:id', propertiesController.delete);


module.exports = router;