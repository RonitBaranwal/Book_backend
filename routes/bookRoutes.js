const express = require('express');
const router = express.Router();
const bookController = require('./../controllers/bookController');
router.route('/').post(bookController.createBook);

router.route('/:id').get(bookController.getOneBook);

module.exports = router;