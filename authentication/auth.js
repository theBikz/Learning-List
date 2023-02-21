const auth = require("basic-auth");
const crypto = require("node:crypto");

const authModel = require('../models/auth')

const secret = "r@nd0mH@5h";

module.exports = async function (req, res, next) {
  const user = auth(req);
  const userName = user.name
  const dbData = await authModel.findOne({userName: userName})
  const hashPass = crypto
    .createHmac("sha256", secret)
    .update(user.pass)
    .digest("hex");

  if (!user || !dbData || dbData.password !== hashPass) {
    res.set("WWW-Authenticate", "Basic");
    return res.status(401).send();
  }
  return next();
};
