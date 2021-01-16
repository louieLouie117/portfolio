const jwt = require("jsonwebtoken");

module.exports = {
  authenticate(req, res, next) {
    console.log(req.cookies.usertoken);
    jwt.verify(
      req.cookies.usertoken,
      process.env.JWT_SECRET,
      (err, payload) => {
        if (err) {
          res.status(401).json({ verified: false, msg: "Access to the dashboard was denied. You do not have credentials!" });
        } else {
          next();
        }
      }
    );
  },
};
