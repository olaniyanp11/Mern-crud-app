const jwt = require("jsonwebtoken");
const User = require("../models/User");

function requireAuth(req, res, next) {
  try {
    // get the user id
    const usercookie = req.cookie.Authorization;
    // get the user
  
    const user = User.findById(userid.sub);
    // check if cookie is valid
    const isvalid = jwt.valid(usercookie, process.env.SECRET);
    if (!isvalid) return res.sendStatus(401);
    // return 200
    res.sendStatus(200);
    // continue to the requested route
    next();
  } catch (error) {
    res.sendStatus(401)
  }
}

module.exports = requireAuth;
