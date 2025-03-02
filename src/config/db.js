// require("dotenv").config();
// const mongoose = require("mongoose");

// const connectDB = async () => {
//   try {
//     const conn = await mongoose.connect(process.env.MONGO_URI, {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//     });
//     console.log(`MongoDB Connected: ${conn.connection.host}`);
//   } catch (error) {
//     console.error(`Error: ${error.message}`);
//     process.exit(1);
//   }
// };

// mongoose.connect(process.env.MONGO_URI)
//   .then(() => console.log('Kết nối thành công'))
//   .catch(err => console.error('Lỗi kết nối:', err));

// module.exports = connectDB;

// const mongoose = require("mongoose");
require("dotenv").config(); // Load biến môi trường

// const connectDB = async () => {
//   try {
//     const conn = await mongoose.connect(process.env.MONGO_URI, {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//       useCreateIndex: true,
//       useFindAndModify: false
//     });

//     console.log(`MongoDB Connected: ${conn.connection.host}`);
//   } catch (error) {
//     console.error("❌ Lỗi kết nối MongoDB:", error.message);
//     process.exit(1); // Thoát chương trình nếu lỗi
//   }
// };

// module.exports = connectDB;


const mongoose = require('mongoose');

const clientOptions = { serverApi: { version: '1', strict: true, deprecationErrors: true } };

async function connectDB() {
    try {
        await mongoose.connect(process.env.MONGO_URI, clientOptions);
        await mongoose.connection.db.admin().command({ ping: 1 });
        console.log('Connected to the database');
    } catch (error) {
        console.log('Something is wrong. ', error);
    }
}
module.exports = connectDB;