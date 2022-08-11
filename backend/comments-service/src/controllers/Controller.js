const Controller = (_req, res) => {
  try {
    res.json({message:'Ok!'})
} catch (error) {
    return error
  }
};

module.exports = Controller

