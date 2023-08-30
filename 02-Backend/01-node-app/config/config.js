require("dotenv").config();
console.log(process.env);

const MONGODB_CONNECTION_STRING = process.env.MONGODB_CONNECTION_STRING;

module.exports = {
  MONGODB_CONNECTION_STRING,
};
