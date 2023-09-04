const express = require("express");
const blogController = require("../controller/blogController");
const router = express.Router();

//create new blog
router.post("/blog/new", blogController.create);

//get all blog
router.get("/blog/all", blogController.getAll);

module.exports = router;
