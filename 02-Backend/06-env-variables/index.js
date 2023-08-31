const express = require("express");
const connectDB = require("./database/index");
const app = express();
const { PORT } = require("./config/config");
const router = require("./routes/index");

//Connecting the MongoDB
connectDB();

//Using routes
app.use("/api/v1", router);

app.listen(PORT, () => {
  console.log(`Server listening at PORT ${PORT}`);
});
