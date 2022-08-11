const comments = require('../database/dbComments');

const CommentGetAll = (req, res) => {
  try {
    const { id } = req.params
    // comments[id].push(req.body) --> post
    return res.json(comments[id])
  } catch (error) {
    return error
  }
};

module.exports = CommentGetAll