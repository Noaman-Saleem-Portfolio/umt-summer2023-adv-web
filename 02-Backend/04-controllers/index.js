const express = require("express");
const app = express();
const PORT = 8000;
const router = require("./routes/index");

//Using routes
app.use("/api/v1", router);

app.listen(PORT, () => {
  console.log(`Server listening at PORT ${PORT}`);
});
