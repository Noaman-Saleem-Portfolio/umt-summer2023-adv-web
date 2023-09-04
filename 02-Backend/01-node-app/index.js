const express = require("express");
const cors = require("cors");
const connectDB = require("./database/index");
const app = express();
const { PORT } = require("./config/config");
const router = require("./routes/index");
const errorHandler = require("./middlewares/errorHandler");

// console.dir(process);

//Setting cors
const corsOptions = {
  credentials: true,
  origin: ["http://localhost:3000"],
};

app.use(cors(corsOptions));

// app.use(
//   cors({
//     origin: function (origin, callback) {
//       return callback(null, true);
//     },
//     optionsSuccessStatus: 200,
//     credentials: true,
//   })
// );

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
