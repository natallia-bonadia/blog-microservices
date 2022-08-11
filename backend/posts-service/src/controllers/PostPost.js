const posts = require('../database/dbPosts');

const PostPost = (req, res) => {
  try {
    const postId = (Math.random()*10000).toFixed().toString()
    req.body.id = postId
    posts[postId] = req.body

    req.body.comments = []

    res.json(req.body)
  } catch (error) {
    return error
  }
};

module.exports = PostPost