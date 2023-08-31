const express = require("express");
const connectDB = require("./database/index");
const app = express();
const { PORT } = require("./config/config");
const router = require("./routes/index");
const errorHandler = require("./middlewares/errorHandler");

//Parsing json data in request body
app.use(express.json({ limit: "50mb" }));

//Connecting the MongoDB
connectDB();

//Using routes
app.use("/api/v1", router);

//Error Handler Middleware
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server listening at PORT ${PORT}`);
});
