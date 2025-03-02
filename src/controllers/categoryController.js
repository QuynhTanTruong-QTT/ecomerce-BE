const Category = require('../models/Categories');

// Lấy tất cả categories
exports.getAllCategories = async (req, res) => {
  try {
    const categories = await Category.find();
    res.status(200).json({
      success: true,
      data: categories
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Lỗi khi lấy dữ liệu categories',
      error: error.message
    });
  }
};

// Lấy một category theo ID
exports.getCategoryById = async (req, res) => {
  try {
    const category = await Category.findOne({ id: req.params.id });
    if (!category) {
      return res.status(404).json({
        success: false,
        message: 'Không tìm thấy category với ID này'
      });
    }
    res.status(200).json({
      success: true,
      data: category
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Lỗi khi lấy dữ liệu category',
      error: error.message
    });
  }
};

// Lấy một category theo tên
exports.getCategoryById = async (req, res) => {
  try {
    const category = await Category.findOne({ name: req.params.id });
    if (!category) {
      return res.status(404).json({
        success: false,
        message: 'Không tìm thấy category với ID này'
      });
    }
    res.status(200).json({
      success: true,
      data: category
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Lỗi khi lấy dữ liệu category',
      error: error.message
    });
  }
};