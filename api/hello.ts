import { VercelRequest, VercelResponse } from "@vercel/node";

/**
 *
 * @param req
 * @param res
 */
module.exports = (req: VercelRequest, res: VercelResponse) => {
  const { name = "World" } = req.query;
  res.status(200).send(`Hello ${name}!`);
};
