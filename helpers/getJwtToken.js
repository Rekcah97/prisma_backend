const jwt = require("jsonwebtoken");

const getJwtToken = (userId) => {
  const payload = {
    userId: userId,
  };
  return jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: "1 day" });
};

module.exports = getJwtToken;
