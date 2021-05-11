export default async function (req, res) {
  const { name = "World.cjs" } = req.query;
  res.status(200).send(`Hello ${name}!`);
}
