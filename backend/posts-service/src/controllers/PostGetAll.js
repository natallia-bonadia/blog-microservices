const posts = require('../database/dbPosts');

const PostGetAll = (_req, res) => {
  try {
    res.json(posts)
  } catch (error) {
    return error
  }
};

module.exports = PostGetAll