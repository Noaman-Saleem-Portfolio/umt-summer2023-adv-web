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
      console.log(error);
      return next(error);
    }
    res
      .status(201)
      .json({ msg: "New Blog created successfully", blog: newBlog });
  },

  // **********************************************
  // get all blogs
  // **********************************************

  getAll: async function (req, res) {
    try {
      const blogs = await Blog.find();

      return res.status(200).json({ blogs });
    } catch (error) {
      return next(error);
    }
  },
};

module.exports = blogController;
