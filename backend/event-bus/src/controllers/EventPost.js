const { default: axios } = require("axios")

const EventPost = async (req, res) => {
  
  const event = req.body
  
  try {
    const resp = await axios.post('http://localhost:4000/events', event)
    console.log(resp.data)
  }
  catch {
    console.log
  }

  try {
    const resp = await axios.post('http://localhost:4001/events', event)
    console.log(resp.data)
  }
  catch {
    console.log
  }

  try {
    const resp = await axios.post('http://localhost:4002/events', event)
    console.log(resp.data)
  }
  catch {
    console.log
  }

  res.json(event)
  
}

module.exports = EventPost