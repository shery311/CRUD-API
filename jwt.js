const { verify } = require("jsonwebtoken");
const fs = require("fs");
const users = JSON.parse(fs.readFileSync("./userApi.json", "UTF-8"));

const validateToken = (req, res, next) => {
  const validToken = verify(users.token, "secretkey");
  if (validToken) {
    req.authenticated = true;
    return next();
  } else {
    return res.status(400).json("Valid token not exist");
  }
};

module.exports = { validateToken };
