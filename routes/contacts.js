var express = require('express');
var router = express.Router();
var contactsController = require('../controllers/contactsController');

router.get('/', contactsController.getAll);
router.get('/:id', contactsController.get);
router.post('/', contactsController.post);
router.put('/:id', contactsController.put);
router.delete('/:id', contactsController.delete);

module.exports = router;