const express = require('express');
const router = express.Router();
const categoryController = require('../controllers/categoryController');

// Route để lấy tất cả categories
router.get('/', categoryController.getAllCategories);

// Route để lấy một category theo ID
router.get('/:id', categoryController.getCategoryById);

module.exports = router;