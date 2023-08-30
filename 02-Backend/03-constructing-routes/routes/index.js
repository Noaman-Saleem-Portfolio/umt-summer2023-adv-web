const express = require("express");
const router = express.Router();

router.post("/blog/new", (req, res) => {
  res.send("New Blog created");
});

router.get("/blog/all", (req, res) => {
  res.send("All Blogs");
});

module.exports = router;
