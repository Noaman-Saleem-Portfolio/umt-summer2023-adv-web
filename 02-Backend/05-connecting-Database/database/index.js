const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(
      "mongodb+srv://nomi:12345@cluster0.gg8zxuk.mongodb.net/?retryWrites=true&w=majority"
    );
    console.log(`Connected to MongoDB Instance ${conn.connection.host}`);
  } catch (error) {
    console.log(`Oh No Error!!!!!`);
    console.log(error);
  }
};

module.exports = connectDB;
