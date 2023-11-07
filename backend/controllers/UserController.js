const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

async function signup(req, res) {
  //   // receive the new user request
  console.log(req.body);
  const { email, password } = req.body;
  console.log(email, password);
  //   // encryptpassword
  const hashedPassword = bcrypt.hashSync(password, 8);
  //   // create the new user
  const user = await User.create({ email, password: hashedPassword });
  //   // send a response to the server
  res.json({ user });
}
async function login(req, res) {
  // get the email and password from req
  const { email, password } = req.body;
  // check if there is a user with that email
  try {
    const user = await User.findOne({ email: email });
    if (!user) {
      return res.sendStatus(401);
    }
    // conpare the password
    const check = bcrypt.compareSync(password, user.password);
    if (!check) return res.sendStatus(401);
    // create token
    console.log("logging in");
    const exp = Date.now() + 1000 * 60 * 60 * 24 * 30;
    const token = jwt.sign({ sub: user._id, exp }, process.env.SECRET);
    res.cookie("Authorization", token, {
      expires: new Date(exp),
      httpOnly: true,
      sameSite: "lax",
      secure: process.env.NODE_ENV === "production",
    });
    res.json({message:"user is logged in", "user":user})
  } catch (err) {
    console.log(err);
  }
}
function logout(req, res) {
  req.clearCookie
  return res.sendStatus(200)
}
function checkAuth(req, res) {
  console.log(req.user)
  res.sendStatus(200);
}

module.exports = {
  signup,
  login,
  logout,
  checkAuth
};
