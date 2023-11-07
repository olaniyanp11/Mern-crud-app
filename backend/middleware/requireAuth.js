const jwt = require("jsonwebtoken");
const User = require("../models/User");

async function requireAuth(req, res, next) {
  try {
    // get the user id
    const usertoken = req.cookies.Authorization;

    // decode the cookie
    const decoded = jwt.verify(usertoken, process.env.SECRET);
    // return 200

    // get the user
    const user = await User.findById(decoded.sub);
    if (!user) res.redirect(401, "http://localhost:3001/Logout/");

    req.user = user
    // continue to the requested route
    next();
  } catch (error) {
    res.sendStatus(401);
  }
}

module.exports = requireAuth;
