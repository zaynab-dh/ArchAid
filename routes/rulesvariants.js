var express = require('express');
var router = express.Router();
var rulesvariantsController = require('../controllers/rulesvariantsController');

/* GET rulesvariants listing. */
router.get('/', rulesvariantsController.getAll);
router.get('/:id', rulesvariantsController.get);
router.post('/', rulesvariantsController.post);
router.put('/:id', rulesvariantsController.put);
router.delete('/:id', rulesvariantsController.delete);


module.exports = router;