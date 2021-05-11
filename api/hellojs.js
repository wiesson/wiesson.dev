module.exports = async (req, res) => {
  const { name = "World" } = req.query;
  res.status(200).send(`Hello ${name} from cjs!`);
};
