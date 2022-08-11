const router = require('express').Router();

const Controller = require('../controllers/Controller')
const CommentPost = require('../controllers/CommentPost');
const CommentGetAll = require('../controllers/CommentGetAll');

router.get('/', Controller)

router.get('/posts/:id/comments', CommentGetAll)

router.post('/posts/:id/comments', CommentPost)

module.exports = router