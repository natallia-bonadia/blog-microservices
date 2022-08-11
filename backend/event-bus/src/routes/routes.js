const router = require('express').Router();

const EventPost = require('../controllers/EventPost')

router.post('/events', EventPost)

module.exports = router