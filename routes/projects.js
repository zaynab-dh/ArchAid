var express = require('express');
var router = express.Router();
var projectsController = require('../controllers/projectsController');

/* GET projects listing. */
router.get('/', projectsController.getAll);
router.get('/:id', projectsController.get);
router.post('/', projectsController.post);
router.put('/:id', projectsController.put);
router.delete('/:id', projectsController.delete);


module.exports = router;