const blogController = {
  // **********************************************
  // create blog
  // **********************************************

  create(req, res) {
    res.status(201).json({ msg: "New Blog created successfully" });
  },

  getAll(req, res) {
    res.status(200).json({ msg: "Sending you back all blogs" });
  },

  // **********************************************
  // get all blogs
  // **********************************************
};

module.exports = blogController;
