const EventsPost = (req, res) => {
  console.log(req.body)

  if(req.body.type === 'PostCreated')

  res.send({})
};

module.exports = EventsPost