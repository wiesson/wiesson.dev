module.exports = async (req, res) => {
  const { name = "World.js" } = req.query;
  res.status(200).send(`Hello ${name}!`);
};
