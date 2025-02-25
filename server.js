const express = require("express");
const connectDB = require("./src/config/db");

const app = express();
app.use(express.json()); // Middleware để đọc JSON từ request body

const PORT = process.env.PORT || 5000;

// Kết nối MongoDB
connectDB();

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
