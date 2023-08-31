const express = require("express");
const blogController = require("../controller/blogController");
const router = express.Router();

router.post("/blog/new", blogController.create);

router.get("/blog/all", blogController.getAll);

module.exports = router;
