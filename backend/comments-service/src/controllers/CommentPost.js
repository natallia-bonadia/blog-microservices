const comments = require('../database/dbComments');

const CommentPost = (req, res) => {
  try {
    const { id } = req.params
    comments[id].push(req.body)
    const commentId = (Math.random()*1000000).toFixed().toString()
    req.body.id = commentId

    return res.json(comments)

  } catch {
    console.log
  }
};

module.exports = CommentPost