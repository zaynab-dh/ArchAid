var express = require('express');
var router = express.Router();
var rulesController = require('../controllers/rulesController');

/* GET rules listing. */
router.get('/', rulesController.getAll);
router.get('/:id', rulesController.get);
router.post('/', rulesController.post);
router.put('/:id', rulesController.put);
router.delete('/:id', rulesController.delete);


module.exports = router;