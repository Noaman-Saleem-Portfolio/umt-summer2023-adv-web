const express = require("express");
const blogController = require("../controller/blogController");
const router = express.Router();

//create new blog
router.post("/blog/new", blogController.create);

//get all blog
router.get("/blog/all", blogController.getAll);

//get blog by id.
router.get("/blog/:id", blogController.getById);

module.exports = router;
