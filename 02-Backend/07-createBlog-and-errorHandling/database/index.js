const mongoose = require("mongoose");
const { MONGODB_CONNECTION_STRING } = require("../config/config");

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(MONGODB_CONNECTION_STRING);
    console.log(`Connected to MongoDB Instance ${conn.connection.host}`);
  } catch (error) {
    console.log(`Oh No Error!!!!!`);
    console.log(error);
  }
};

module.exports = connectDB;
