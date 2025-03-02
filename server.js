const express = require("express");
const connectDB = require("./src/config/db");
const categoryRoutes = require('./src/routes/categoryRoutes');
const prroductRoutes = require('./src/routes/productRoutes');

const app = express();
app.use(express.json()); // Middleware để đọc JSON từ request body

const PORT = process.env.PORT || 5000;

// Kết nối MongoDB
connectDB();

// Sử dụng routes
app.use('/ca', categoryRoutes);
app.use('/pr', prroductRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
