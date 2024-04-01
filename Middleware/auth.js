const jwt = require("jsonwebtoken");
const User = require("../Models/users");

const authenticate = (req, res, next) => {
  try {
    const token = req.header("Authorization").replace("Bearer ", "");
    const user = jwt.verify(token, "yadav");
    User.findByPk(user.userId).then((user) => {
      req.user = user; ///ver

      next();
    });
  } catch (err) {
    console.log(err);
    return res.status(401).json({ success: false });
    // err
  }
};

module.exports = {
  authenticate,
};
