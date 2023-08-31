const Blog = require("../models/Blog");

const blogController = {
  // **********************************************
  // create blog
  // **********************************************

  async create(req, res, next) {
    //getting data coming from request
    // console.log(req.body);
    const { title, imageUrl, description } = req.body;

    //creating new instance of Blog model
    const newBlog = new Blog({
      title,
      imageUrl,
      description,
    });

    try {
      //saving it to MongoDB
      await newBlog.save();
    } catch (error) {
      console.log(error.message);
      return next(error);
    }
    res
      .status(201)
      .json({ msg: "New Blog created successfully", blog: newBlog });
  },

  // **********************************************
  // get all blogs
  // **********************************************

  getAll(req, res) {
    res.status(200).json({ msg: "Sending you back all blogs" });
  },
};

module.exports = blogController;
