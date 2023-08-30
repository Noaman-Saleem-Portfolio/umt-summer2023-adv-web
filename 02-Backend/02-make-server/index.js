const express = require("express");
const app = express();
const PORT = 8000;

app.get("/", (req, res) => {
  //   console.log(res);
  res.send("Hello my dear friend");
});

app.get("/products", (re, res) => {
  res.send("I am sending you all products");
});

app.listen(PORT, () => {
  console.log(`Server listening at PORT ${PORT}`);
});
