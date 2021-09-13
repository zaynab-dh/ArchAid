var express = require('express');
var router = express.Router();
var zonesController = require('../controllers/zonesController');

/* GET zones listing. */
router.get('/', zonesController.getAll);
router.get('/:id', zonesController.get);
router.post('/', zonesController.post);
router.put('/:id', zonesController.put);
router.delete('/:id', zonesController.delete);

module.exports = router;