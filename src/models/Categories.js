const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
  id: {
    type: Number,
    required: true,
    unique: true
  },
  name: {
    type: String,
    required: true
  },
  slug: {
    type: String,
    required: true,
    unique: true
  },
  image: {
    type: String,
    required: true
  },
  creationAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
});

//module.exports = mongoose.model('Categories', categorySchema); 
module.exports = mongoose.model("Categories", categorySchema, "Categories"); // buộc mongoose sử dụng đúng tên