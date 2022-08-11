const router = require('express').Router();

const Controller = require('../controllers/Controller')
const PostPost = require('../controllers/PostPost');
const PostGetAll = require('../controllers/PostGetAll');
const EventsPost = require('../controllers/EventsPost');

router.get('/', Controller)

router.get('/posts', PostGetAll)

router.post('/posts', PostPost)

router.post('/events', EventsPost)

module.exports = router