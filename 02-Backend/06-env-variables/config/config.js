require("dotenv").config();
console.log(process.env);

const MONGODB_CONNECTION_STRING = process.env.MONGODB_CONNECTION_STRING;
const PORT = process.env.PORT;

module.exports = {
  MONGODB_CONNECTION_STRING,
  PORT,
};
