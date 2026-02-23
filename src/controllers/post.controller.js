const Post = require("../models/post.model");

exports.UserPost = async (req, res) => {
  const { title } = req.body;

  try {
    const post = await Post.create({
      title,
      user: req.userId, //  from middleware
    });

    res.status(201).json({
      message: "Post created successfully",
      post,
    });

  } catch (error) {
    res.status(500).json({
      message: "Post creation failed",
      error: error.message,
    });
  }
};